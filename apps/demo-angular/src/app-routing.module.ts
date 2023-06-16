import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'autocomplete', loadChildren: () => import('./plugin-demos/autocomplete.module').then(m => m.AutocompleteModule) },
	{ path: 'nativescript-google-maps', loadChildren: () => import('./plugin-demos/nativescript-google-maps.module').then(m => m.NativescriptGoogleMapsModule) },
	{ path: 'nativescript-language-switcher', loadChildren: () => import('./plugin-demos/nativescript-language-switcher.module').then(m => m.NativescriptLanguageSwitcherModule) },
	{ path: 'nativescript-otp', loadChildren: () => import('./plugin-demos/nativescript-otp.module').then(m => m.NativescriptOtpModule) },
	{ path: 'nativescript-uuid', loadChildren: () => import('./plugin-demos/nativescript-uuid.module').then(m => m.NativescriptUuidModule) }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
