import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { NativescriptGoogleMaps } from '@kefah/nativescript-google-maps';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptGoogleMaps {
	
}
