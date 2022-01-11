import { DemoSharedBase } from '../utils';
import {NativescriptUuid} from '@kefah/nativescript-uuid';
let r = require("@kefah/nativescript-uuid");
export class DemoSharedNativescriptUuid extends DemoSharedBase {
  testIt() {
    alert(r.getUUID());
    //alert(NativescriptUuid.getUUID());
  }
}
