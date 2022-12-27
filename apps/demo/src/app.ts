import { AndroidApplication, Application } from '@nativescript/core';

declare var GMSServices:any;
//require("./bundle-config");
if(Application.ios) {
  //GMSServices.provideAPIKey("_YOUR_API_KEY_");
}

Application.run({ moduleName: 'app-root' });
