import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
	{
		name: 'autocomplete'
	},
	{
		name: 'nativescript-google-maps'
	},
	{
		name: 'nativescript-language-switcher'
	},
	{
		name: 'nativescript-otp'
	},
	{
		name: 'nativescript-uuid'
	}
];
}