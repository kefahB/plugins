import { Observable, EventData, Page, ObservableArray } from '@nativescript/core';
import { DemoSharedAutocomplete } from '@demo/shared';
import { Autocomplete } from '@kefah/autocomplete';
import { TokenPredictions } from '@kefah/autocomplete/AutocompleteInterface';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAutocomplete {
	
    constructor() {
        super();
        let au = new Autocomplete();
        au.dataItems = new ObservableArray<TokenPredictions>();
    }
}
