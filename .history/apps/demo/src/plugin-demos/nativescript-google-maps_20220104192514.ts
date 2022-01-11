import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { GoogleMaps, Marker, Position } from '@kefah/nativescript-google-maps';


export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function pageLoaded(args: EventData) {
    var page = args.object as Page;
}


export function onMapReady(args) {
    alert("ee")
    let mapView = args.object;

    console.log("onMapReady");
    mapView.settings.compassEnabled = true;

}


export class DemoModel extends DemoSharedNativescriptGoogleMaps {
	constructor() {
        super();
        this.set("latitude", -33.86);
        this.set("longitude", 151.20);
        this.set("zoom", 12);
        this.set("minZoom", 0);
        this.set("maxZoom", 22);
        this.set("bearing", 180);
        this.set("tilt", 35);
        this.set("padding", [80, 40, 40, 40]);
        this.set("mapAnimationsEnabled", true);
    }
}
