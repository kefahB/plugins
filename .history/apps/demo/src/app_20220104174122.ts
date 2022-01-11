import { Application } from '@nativescript/core';

declare var GMSServices:any;
//require("./bundle-config");
if(Application.ios) {
  GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
}

Application.run({ moduleName: 'app-root' });
