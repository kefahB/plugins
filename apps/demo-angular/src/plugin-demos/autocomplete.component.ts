import { Component, NgZone } from '@angular/core';
import { DemoSharedAutocomplete } from '@demo/shared';
import { } from '@kefah/autocomplete';

@Component({
	selector: 'demo-autocomplete',
	templateUrl: 'autocomplete.component.html',
})
export class AutocompleteComponent {
  
  demoShared: DemoSharedAutocomplete;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAutocomplete();
  }

}