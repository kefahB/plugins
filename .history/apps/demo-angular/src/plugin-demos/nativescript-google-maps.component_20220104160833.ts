import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { } from '@kefah/nativescript-google-maps';

@Component({
	selector: 'demo-nativescript-google-maps',
	templateUrl: 'nativescript-google-maps.component.html',
})
export class NativescriptGoogleMapsComponent {
  
  demoShared: DemoSharedNativescriptGoogleMaps;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptGoogleMaps();
  }

}