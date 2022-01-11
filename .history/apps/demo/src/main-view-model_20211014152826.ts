import { Observable, Frame } from '@nativescript/core';
im;
export class MainViewModel extends Observable {
  viewDemo(args) {
    alert(getUUID());
    Frame.topmost().navigate({
      moduleName: `plugin-demos/${args.object.text}`,
    });
  }
}
