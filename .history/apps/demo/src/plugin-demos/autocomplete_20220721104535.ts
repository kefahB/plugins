import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAutocomplete } from '@demo/shared';
import { } from '@kefah/autocomplete';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAutocomplete {
	
}
