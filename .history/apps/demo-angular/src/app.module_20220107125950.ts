import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { isIOS } from '@nativescript/core';
declare var GMSServices: any;

if(isIOS) {
    GMSServices.provideAPIKey("_YOUR_API_KEY_");
}

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
})
export class AppModule {}
