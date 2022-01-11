import { DemoSharedBase } from '../utils';
//import {NativescriptUuid} from '@kefah/nativescript-uuid';
let r = require("@kefah/nativescript-uuid").NativescriptUuid;
export class DemoSharedNativescriptUuid extends DemoSharedBase {
  testIt() {
        //alert(r.getUUID());
        console.log(r.getUUID());
        //console.log(NativescriptUuid.getUUID());
  }
}
