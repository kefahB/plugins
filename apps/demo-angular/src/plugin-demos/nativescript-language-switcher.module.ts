import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptLanguageSwitcherComponent } from './nativescript-language-switcher.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptLanguageSwitcherComponent }])],
  declarations: [NativescriptLanguageSwitcherComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptLanguageSwitcherModule {}
