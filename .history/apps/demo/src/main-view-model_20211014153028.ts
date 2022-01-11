import { Observable, Frame } from '@nativescript/core';
import { NativescriptUuid } from '@kefah/nativescript-uuid';
export class MainViewModel extends Observable {
  viewDemo(args) {
    alert(NativescriptUuid.getUUID());
    Frame.topmost().navigate({
      moduleName: `plugin-demos/${args.object.text}`,
    });
  }
}
