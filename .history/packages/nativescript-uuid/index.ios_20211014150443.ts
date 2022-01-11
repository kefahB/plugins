import { NativescriptUuidCommon } from './common';

export class NativescriptUuid extends NativescriptUuidCommon {
  public getUUID() {
    /*var appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
        console.log(SAMKeychain)
        var strApplicationUUID = SAMKeychain.passwordForService(appName, "incoding");
        if (!strApplicationUUID){
            strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
            SAMKeychain.setPasswordForService(strApplicationUUID, appName, "incoding");
        }
    
        return strApplicationUUID;*/
  }
}
