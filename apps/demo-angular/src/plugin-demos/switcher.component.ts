import { Component, NgZone } from '@angular/core';
import { DemoSharedSwitcher } from '@demo/shared';
import { } from '@kefah/switcher';

@Component({
	selector: 'demo-switcher',
	templateUrl: 'switcher.component.html',
})
export class SwitcherComponent {
  
  demoShared: DemoSharedSwitcher;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSwitcher();
  }

}