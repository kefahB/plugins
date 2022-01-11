import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { isIOS } from '@nativescript/core';
declare var GMSServices: any;

if(isIOS) {
    GMSServices.provideAPIKey("AIzaSyAtRVvG3Be3xXiZFR7xp-K-9hy4nZ4hMFs");
}

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
})
export class AppModule {}
