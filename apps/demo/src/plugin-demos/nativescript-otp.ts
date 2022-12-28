import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedOtp } from '@demo/shared';
import { NativescriptOtp } from '@kefah/nativescript-otp';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}


export class DemoModel extends DemoSharedOtp {
	
    constructor() {
        super();

    }
}
