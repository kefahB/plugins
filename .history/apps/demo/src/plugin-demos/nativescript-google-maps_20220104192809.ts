import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { GoogleMaps, Marker, Position } from '@kefah/nativescript-google-maps';

let mapView = null;

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function pageLoaded(args) {
    var mapView = args.object;
    console.log("Setting a marker...");
    var marker = new Marker();
    marker.position = Position.positionFromLatLng(-33.86, 151.20);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.color = "green";
    marker.userData = {index: 1};
    mapView.addMarker(marker);
}


export function onMapReady(args) {
    alert("ee")
    mapView = args.object;

    console.log("onMapReady");
    mapView.settings.compassEnabled = true;

}


export class DemoModel extends DemoSharedNativescriptGoogleMaps {
	constructor() {
        super();
        this.set("latitude", -33.86);
        this.set("longitude", 151.20);
        this.set("zoom", 8);
        this.set("minZoom", 0);
        this.set("maxZoom", 22);
        this.set("bearing", 180);
        this.set("tilt", 35);
        this.set("padding", [80, 40, 40, 40]);
        this.set("mapAnimationsEnabled", true);
    }
}
