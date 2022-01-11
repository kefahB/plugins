import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptUuid } from '@demo/shared';
import {} from '@kefah/nativescript-uuid';

@Component({
  selector: 'demo-nativescript-uuid',
  templateUrl: 'nativescript-uuid.component.html',
})
export class NativescriptUuidComponent {
  demoShared: DemoSharedNativescriptUuid;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptUuid();
  }
}
