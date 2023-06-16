import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptLanguageSwitcher } from '@demo/shared';
import { } from '@kefah/nativescript-language-switcher';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptLanguageSwitcher {
	
}
