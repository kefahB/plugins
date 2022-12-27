import { AndroidApplication, Application, EventData, fromObject, TextField, TextView, Utils } from '@nativescript/core';
import { NativescriptOtpCommon } from './common';

const SmsRetriever = com.google.android.gms.auth.api.phone.SmsRetriever;
const phone = com.google.android.gms.auth.api.phone;

@NativeClass()
export class MySMSBroadcastReceiver extends android.content.BroadcastReceiver {

    public onReceive(context: android.content.Context, intent: android.content.Intent): void {
        try {
            if (SmsRetriever.SMS_RETRIEVED_ACTION == intent.getAction()) {
                let extras = intent.getExtras();
                let status = extras.get(SmsRetriever.EXTRA_STATUS);
            
                switch(status.getStatusCode()) {
                    case 0:
                        // Get SMS message contents
                        let message = extras.get(SmsRetriever.EXTRA_SMS_MESSAGE);

                        Application.getRootView().notify({
                            eventName: "NATIVESCRIPT_OTP_CODE",
                            object: fromObject({
                                message: message
                            })
                        })
                        break;
                    case 15:
                        // Waiting for SMS timed out (5 minutes)
                        Application.getRootView().notify({
                            eventName: "NATIVESCRIPT_OTP_CODE",
                            object: fromObject({
                                message: null
                            })
                        })
                        console.error("TIMEOUT: can not retrive the sms OTP!");
                        break;
                }
            }
        }
        catch(e) {
            console.error("MySMSBroadcastReceiver", e);   
        }
    }
}


export class NativescriptOtp extends NativescriptOtpCommon {

    private static HASH_TYPE: string = "SHA-256";
    public static NUM_HASHED_BYTES: number = 9;
    public static NUM_BASE64_CHAR: number = 11;

    private receiver = new MySMSBroadcastReceiver();

    constructor() {
        super();
        this._context = Utils.android.getApplicationContext();
        
        Application.getRootView().addEventListener("NATIVESCRIPT_OTP_CODE", (message: EventData) => {
            if(!this.cb) return;
            if(message) {
                let msg = (<any>message.object).message;
                //this.nativeView.setText(msg)
                this.cb({
                    msg: msg,
                    otp: this.parseMsg(msg)
                });
            }
            else {
                this.cb(null); 
            }
        })
    }


    onLoaded(): void {
        super.onLoaded();

        let client = SmsRetriever.getClient(Utils.android.getApplicationContext());
        let task = client.startSmsRetriever();
        
        //@ts-ignore
        task.addOnSuccessListener(new com.google.android.gms.tasks.OnSuccessListener({
            onSuccess: (aVoid) => {
                this.registerReceiver().then(res => {
                    console.log("RegisterReceiver", res);
                })
            }
        }));
        
        //@ts-ignore
        task.addOnFailureListener(new com.google.android.gms.tasks.OnFailureListener({
            onFailure: (error) => {
                console.error("ERROR OTP !!", error)
                this.unregisterReceiver();
            }
        }));
    }

    createNativeView() {
        // Create new instance of android.widget.Button.
        const textField = new android.widget.EditText(this._context);

        return textField;
    }

    initNativeView() {
        // optional
    }

    disposeNativeView() {
        // optional
    }

    public onUnloaded(): void {
        super.onUnloaded();
        this.unregisterReceiver();
    }

    private async registerReceiver(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                Application.android.registerBroadcastReceiver(SmsRetriever.SMS_RETRIEVED_ACTION, this.receiver.onReceive)
                resolve(true)  
            } catch (e) {
                console.error("registerReceiver", e);
                reject(false)
            }
        })
    }

    private unregisterReceiver(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                if (this.receiver == null) {
                    resolve(true)
                }
                Application.android.unregisterBroadcastReceiver(SmsRetriever.SMS_RETRIEVED_ACTION)
                resolve(true)  
            } catch (e) {
                console.error("registerReceiver", e);
                reject(false)
            }
        })
    }


    /**
     * Get all the app signatures for the current package
     *
     * @return
     */
    public getAppSignatures() {
        try {
            let appCodes = new java.util.ArrayList<java.lang.String>(1);
            // Get all package signatures for the current package
            let packageName = Utils.android.getApplicationContext().getPackageName();
            let packageManager: android.content.pm.PackageManager =  Utils.android.getApplicationContext().getPackageManager() as 	android.content.pm.PackageManager;
            
            let signatures: android.content.pm.Signature[] = packageManager.getPackageInfo(packageName,
                android.content.pm.PackageManager.GET_SIGNATURES).signatures as android.content.pm.Signature[];
            
            
                // For each signature create a compatible hash
            for (let i = 0; i < signatures.length; i++) {
                console.error("signatures", signatures[i]);
                let hash = this.hash(packageName, signatures[i].toCharsString());
                if (hash != null) {
                    // appCodes.add(java.lang.String.format("%s", hash));
                }
            }
        } catch(e) {
            console.error(e);
        }
    }

    private hash(packageName: string, signature: string): string {
        try {
            let app = packageName + " " + signature;
            let appInfo: java.lang.String = new java.lang.String(app);  
            let messageDigest = java.security.MessageDigest.getInstance(NativescriptOtp.HASH_TYPE);
            
            messageDigest.update(appInfo.getBytes(java.nio.charset.StandardCharsets.UTF_8));
            let hashSignature = messageDigest.digest();

            // truncated into NUM_HASHED_BYTES
            hashSignature = java.util.Arrays.copyOfRange(hashSignature, 0, NativescriptOtp.NUM_HASHED_BYTES);
            // encode into Base64
            let base64Hash = android.util.Base64.encodeToString(hashSignature, android.util.Base64.NO_PADDING | android.util.Base64.NO_WRAP);
            base64Hash = base64Hash.substring(0, NativescriptOtp.NUM_BASE64_CHAR);

            console.log("packageName:", packageName, "Hash:", base64Hash);
            return base64Hash;
        } catch (e) {
            console.log("hash:NoSuchAlgorithm", e);
        }
        return null;
    }
}


class GooglePlayService {
    private static MINIMAL_VERSION: number = 10200000;

    static isAvailable(): Boolean {
        //@ts-ignore
        let result = com.google.android.gms.common.GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(Utils.android.getApplicationContext())        
        //@ts-ignore
        return result != com.google.android.gms.common.ConnectionResult.SERVICE_MISSING && result != com.google.android.gms.common.ConnectionResult.SERVICE_DISABLED && result != com.google.android.gms.common.ConnectionResult.SERVICE_INVALID
    }

    static hasSupportedVersion(): boolean {
        let manager = Utils.android.getApplicationContext().getPackageManager();
        try {
            //@ts-ignore
            let version = androidx.core.content.pm.PackageInfoCompat.getLongVersionCode(manager.getPackageInfo(com.google.android.gms.common.GoogleApiAvailability.GOOGLE_PLAY_SERVICES_PACKAGE, 0))
            return version >= GooglePlayService.MINIMAL_VERSION
        } 
        catch (e) {
            return false
        }
    }
}