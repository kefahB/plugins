import { Component, NgZone } from '@angular/core';
import { DemoSharedOtp } from '@demo/shared';
import { } from '@kefah/otp';

@Component({
	selector: 'demo-otp',
	templateUrl: 'otp.component.html',
})
export class OtpComponent {
  
  demoShared: DemoSharedOtp;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedOtp();
  }

}