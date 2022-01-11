import { DemoSharedBase } from '../utils';
import {NativescriptUuid} from '@kefah/nativescript-uuid';

export class DemoSharedNativescriptUuid extends DemoSharedBase {
  testIt() {
    alert(NativescriptUuid.getUUID());
  }
}
