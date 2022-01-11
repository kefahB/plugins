import { NativescriptUuidInterface } from '.';
import { NativescriptUuidCommon } from './common';

export class NativescriptUuid extends NativescriptUuidCommon implements NativescriptUuidInterface {
  constructor() {
    super();
    alert('HIII');
  }
  public getUUID() {
    let SAMKeychain: any;
    let appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    console.log(SAMKeychain);
    var strApplicationUUID = SAMKeychain.passwordForService(appName, 'incoding');
    if (!strApplicationUUID) {
      strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
      SAMKeychain.setPasswordForService(strApplicationUUID, appName, 'incoding');
    }

    return strApplicationUUID;
  }
}
