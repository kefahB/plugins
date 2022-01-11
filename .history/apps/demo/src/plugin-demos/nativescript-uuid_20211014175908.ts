import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptUuid } from '@demo/shared';
import { NativescriptUuid, sayHello } from '@kefah/nativescript-uuid';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptUuid {
  constructor() {
    super();
    let l = new NativescriptUuid();
    alert(l.sayHello());
  }
}
