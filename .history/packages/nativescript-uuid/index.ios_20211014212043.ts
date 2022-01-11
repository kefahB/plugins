import { NativescriptUuidCommon } from './common';

export class NativescriptUuid {
  constructor() {
  }

  public getUUID() {
    let appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
        console.log(SAMKeychain)
        var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
        if (!strApplicationUUID){
            strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
            SAMKeychain.setPasswordForService(strApplicationUUID, appName, "incoding");
        }
    
        return strApplicationUUID;
  }
}
