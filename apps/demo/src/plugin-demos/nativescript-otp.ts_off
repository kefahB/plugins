import { EventData, Page, TextField, View } from '@nativescript/core';
import { DemoSharedOtp } from '@demo/shared';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function getOtp(args: EventData) {
    const view: View = args.object as View;
    let tf = view.page.getViewById("otp") as TextField;
    console.log("OTP IS ", tf?.text);
}


export class DemoModel extends DemoSharedOtp {
	
    constructor() {
        super();
        this.set("otp", 54)
    }
}
