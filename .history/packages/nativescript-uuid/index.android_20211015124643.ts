import { Device } from '@nativescript/core';
import { NativescriptUuidCommon } from './common';

export class NativescriptUuid extends NativescriptUuidCommon {
    
    public static getUUID() {
        return Device.uuid;
    }
}