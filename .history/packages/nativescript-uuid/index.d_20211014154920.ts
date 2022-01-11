import { NativescriptUuidCommon } from './common';

export interface NativescriptUuidInterface {
  public getUUID(): Function;
}

export declare class NativescriptUuid extends NativescriptUuidCommon implements NativescriptUuidInterface {}
