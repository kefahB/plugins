import { NativescriptOtpCommon } from './common';

export declare class NativescriptOtp extends NativescriptOtpCommon {
    public cb: (msg: OTPResultInterface) => void;
    public registerForOTP: (cb) => void;
    public unregisterForOTP: () => void;
    public parseMsg(msg: string, regex?: RegExp|string): string|null;
    public getAppSignatures(): void;
}

export interface OTPResultInterface {
    msg?: string;
    otp?: string;
}

export interface OTPCallbackInterface {
    (msg?: OTPResultInterface): void
}