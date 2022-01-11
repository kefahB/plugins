import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptGoogleMapsComponent } from './nativescript-google-maps.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptGoogleMapsComponent }])],
  declarations: [NativescriptGoogleMapsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptGoogleMapsModule {}
