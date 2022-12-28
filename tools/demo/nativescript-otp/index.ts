import { DemoSharedBase } from '../utils';
import {NativescriptOtp, OTPResultInterface} from '@kefah/nativescript-otp';

export class DemoSharedOtp extends DemoSharedBase {

    constructor() {
        super();

        let otp = new NativescriptOtp();
        otp.registerForOTP((otp: OTPResultInterface) => {
            if(otp) {
                console.error("OTP", otp);
                this.set("otp", otp.otp)
                // do other staff
                // trigger verify...
                return
            }
            // No OTP was found
        })

        // Get the development hash code
        otp.getAppSignatures()
    }

    testIt() {
        console.log('test nativescript-otp!', this.get("otp"));
    }
}