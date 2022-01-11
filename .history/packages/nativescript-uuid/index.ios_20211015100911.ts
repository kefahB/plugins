import { NativescriptUuidCommon } from './common';

class NativescriptUuid extends NativescriptUuidCommon {
  public static getUUID() {
    let appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
        var strApplicationUUID = SAMKeychain.passwordForServiceAccount(appName, "incoding");
        if (!strApplicationUUID){
            strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
            SAMKeychain.setPasswordForServiceAccount(strApplicationUUID, appName, "incoding");
        }
    
        return strApplicationUUID;
  }
}
export default NativescriptUuid.getUUID();