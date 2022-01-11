import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptUuidComponent } from './nativescript-uuid.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptUuidComponent }])],
  declarations: [NativescriptUuidComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptUuidModule {}
