import { NativescriptUuidCommon } from './common';

export interface NativescriptUuidInterface {
  public getUUID(): Function;
}
export function sayHello();
export declare class NativescriptUuid extends NativescriptUuidCommon implements NativescriptUuidInterface {
  public getUUID(): Function;
}
