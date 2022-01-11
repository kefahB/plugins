import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptUuid } from '@demo/shared';
import { NativescriptUuid } from '@kefah/nativescript-uuid';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptUuid {
  public uuid = NativescriptUuid.getUUID();
}
