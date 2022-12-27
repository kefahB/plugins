import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { OtpComponent } from './otp.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: OtpComponent }])],
  declarations: [OtpComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class OtpModule {}
