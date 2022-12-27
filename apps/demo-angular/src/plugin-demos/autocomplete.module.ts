import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AutocompleteComponent }])],
  declarations: [AutocompleteComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AutocompleteModule {}
