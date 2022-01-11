import { NativescriptUuidCommon } from './common';

export class NativescriptUuid extends NativescriptUuidCommon {
  public static getUUID() {
    let appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
        console.log(SAMKeychain)
        var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
        if (!strApplicationUUID){
            strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
            SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
        }
    
        return strApplicationUUID;
  }
}
