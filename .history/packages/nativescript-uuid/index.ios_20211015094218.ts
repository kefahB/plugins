import { NativescriptUuidCommon } from './common';

export class NativescriptUuid {
  constructor() {
      this.getUUID();
  }
  public getUUID() {
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
