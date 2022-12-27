import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SwitcherComponent } from './switcher.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SwitcherComponent }])],
  declarations: [SwitcherComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class SwitcherModule {}
