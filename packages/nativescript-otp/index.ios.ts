import { Application, Device, EventData, fromObject, TextField } from '@nativescript/core';
import { textProperty } from '@nativescript/core/ui/text-base';
import { NativescriptOtpCommon, OTPResultInterface } from './common';

@NativeClass()
class UITextFieldDelegateImpl extends NSObject implements UITextFieldDelegate {

    public static ObjCProtocols = [UITextFieldDelegate];

    _owner: WeakRef<NativescriptOtp>;
  
    static initWithClientDelegate(owner: WeakRef<NativescriptOtp>): UITextFieldDelegateImpl {
      const handler = UITextFieldDelegateImpl.new() as UITextFieldDelegateImpl;
      handler._owner = owner;
      return handler;
    }


    textFieldShouldChangeCharactersInRangeReplacementString?(textField: UITextField, range: NSRange, string: string): boolean {
       
        let newText = NSString.stringWithString(textField.text || "").stringByReplacingCharactersInRangeWithString(range, string)
        // When text are selected from QuickType bar, the string value is a [space]
        if(string == " ") {
            
            Application.getRootView().notify({
                eventName: "NATIVESCRIPT_OTP_CODE",
                object: fromObject({
                    message: newText.trim() || null
                })
            });
        }
        const owner = this._owner.deref()
        textProperty.nativeValueChange(owner, newText.trim());
        return true;
    }
}


export class NativescriptOtp extends NativescriptOtpCommon {
    

    _delegate: UITextFieldDelegateImpl = null;

    constructor() {
        super();
        this._delegate = UITextFieldDelegateImpl.initWithClientDelegate(new WeakRef(this));

        Application.getRootView().addEventListener("NATIVESCRIPT_OTP_CODE", (message: EventData) => {
            if(!this.cb) return;
            if(message) {
                let msg = (<any>message.object).message;                
                this.cb({
                    msg: msg,
                    otp: msg
                });
            }
            else {
                this.cb(null); 
            }
        })
    }

    createNativeView() {
        //let v = super.createNativeView();
        console.error("createNativeView");
        // Create new instance of android.widget.Button.
        const textField = UITextField.new();
        return textField;
    }

    initNativeView() {
        this.nativeView.delegate = this._delegate;

        if(Device.sdkVersion >= "12") {
            console.error("Device.sdkVersion", Device.sdkVersion);
            
            this.nativeView.textContentType = "oneTimeCode";
            //textField.keyboardType = UIKeyboardType.NumberPad;
        }
        else {
            console.error("OTP Feature are available since IOS 12 and higher");
        }

        // In order to get OTP the keyboard should be open, otherwise it doesn't
        this.nativeView.becomeFirstResponder()
    }

    disposeNativeView() {
        // optional
        //console.error("disposeNativeView");
    }

    public parseMsg(msg: string, regex?: RegExp|string): string|null {
        return null;
    }

    public getAppSignatures(): string []{
        return [];
    }
}
