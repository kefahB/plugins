import { CoercibleProperty, Property, PropertyChangeData, TextField } from '@nativescript/core';
import { NativescriptOtp, OTPResultInterface } from './index';

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
        if(!msg) return null;
        let expression: RegExp|string = /(\d+\w)|(\w+\d)/m;
        if(regex) {
            expression = regex;
        }
        let reg = new RegExp(expression);
        return reg.exec(msg)[0];
    }
}


export const textProperty = new Property<NativescriptOtpCommon, string>({
	name: 'text',
    defaultValue: null
});
textProperty.register(NativescriptOtpCommon);