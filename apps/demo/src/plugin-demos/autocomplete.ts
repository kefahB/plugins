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
        let dataItems = new ObservableArray<TokenPredictions>();
        dataItems.push(new TokenPredictions("Test", {
            id: "1",
             name: "Lyon",
             reference: "kjkb",
             place_id: "nnlnln",
             geometry: {
                location: {
                    lat: 2222,
                    lng: 33434
                }
             }
        }))
        au.dataItems = dataItems;

    }
}
