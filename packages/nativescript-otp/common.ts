import { TextField } from '@nativescript/core';
import { OTPCallbackInterface, OTPResultInterface } from './index';

export * from "./index";

export class NativescriptOtpCommon extends TextField {
    
    public cb: (msg: OTPResultInterface) => void;
    
    constructor() {
        super();
    }

    public registerForOTP(cb: (msg) => void) {
        if(!this.cb) this.cb = cb;
    }

    public unregisterForOTP() {
        this.cb = null;
    }

    public parseMsg(msg: string, regex?: RegExp|string): string|null {
        let expression: RegExp|string = /(\d+\w)|(\w+\d)/m;
        if(regex) {
            expression = regex;
        }
        let reg = new RegExp(expression);
        return reg.exec(msg)[0];
    }

}
