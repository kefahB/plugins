import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { NativescriptGoogleMaps, Marker, Position } from '@kefah/nativescript-google-maps';


export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function pageLoaded(args: EventData) {
    var page = args.object as Page;
}


export function onMapReady(args) {

    alert("ee")
    mapView = args.object;

    console.log("onMapReady");
    mapView.settings.compassEnabled = true;
    printUISettings(mapView.settings);


    console.log("Setting a marker...");
    var marker = new Marker();
    marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.color = "green";
    marker.userData = {index: 1};
    mapView.addMarker(marker);
}



export function onCoordinateTapped(args) {
    console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
}

export function onMarkerEvent(args) {
   console.log("Marker Event: '" + args.eventName
                + "' triggered on: " + args.marker.title
                + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
}

var lastCamera = null;
export function onCameraChanged(args) {
    console.log("Camera changed: "+JSON.stringify(args.camera), JSON.stringify(args.camera) === lastCamera);
    lastCamera = JSON.stringify(args.camera);
    var bounds = mapView.projection.visibleRegion.bounds;
    console.log("Current bounds: " + JSON.stringify({
          southwest: [bounds.southwest.latitude, bounds.southwest.longitude],
          northeast: [bounds.northeast.latitude, bounds.northeast.longitude]
        }));
}

export function onCameraMove(args) {
    console.log("Camera moving: "+JSON.stringify(args.camera));
}

export function onIndoorBuildingFocused(args) {
    console.log("Building focus changed: " + JSON.stringify(args.indoorBuilding));
}

export function onIndoorLevelActivated(args) {
    console.log("Indoor level changed: " + JSON.stringify(args.activateLevel));
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
