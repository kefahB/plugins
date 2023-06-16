import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptLanguageSwitcher } from '@demo/shared';
import { } from '@kefah/nativescript-language-switcher';

@Component({
	selector: 'demo-nativescript-language-switcher',
	templateUrl: 'nativescript-language-switcher.component.html',
})
export class NativescriptLanguageSwitcherComponent {
  
  demoShared: DemoSharedNativescriptLanguageSwitcher;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptLanguageSwitcher();
  }

}