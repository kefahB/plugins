import { NativescriptUuidInterface } from '.';
import { NativescriptUuidCommon } from './common';

@NativeClass
export class NativescriptUuid extends NSObject {
  constructor() {
    super();
  }

  public getUUID() {
    //let SAMKeychain: any;
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
