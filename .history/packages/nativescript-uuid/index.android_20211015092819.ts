import { Device } from '@nativescript/core';
import { NativescriptUuidCommon } from './common';

export class NativescriptUuid extends NativescriptUuidCommon {
    public getUUID() {
        return Device.uuid;
    }
}
