import { Observable, EventData, Page, Color } from '@nativescript/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { Circle, GoogleMaps, Marker, Polygon, Polyline, Position } from '@kefah/nativescript-google-maps';

let mapView = null;

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export function pageLoaded(args: EventData) {
    let page = args.object;
}


export function onMapReady(args) {
    mapView = args.object;

    console.log("onMapReady");
    mapView.settings.compassEnabled = true;
    console.log("Setting a marker...");
    let marker = new Marker();
    marker.position = Position.positionFromLatLng(-33.86, 151.20);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.color = "green";
    marker.userData = {index: 1};
    mapView.addMarker(marker);

    var circle = new Circle();
    circle.center = Position.positionFromLatLng(-33.42, 151.32);
    circle.visible = true;
    circle.radius = 5000;
    circle.fillColor = new Color('#99ff8800');
    circle.strokeColor = new Color('#99ff0000');
    circle.strokeWidth = 2;
    mapView.addCircle(circle);

    var polyline = new Polyline();
    var point = Position.positionFromLatLng(-32.89, 151.44);
    polyline.addPoints([
        Position.positionFromLatLng(-33.86, 151.20),
        point,
        Position.positionFromLatLng(-33.42, 151.32)
    ]);
    polyline.visible = true;
    polyline.width = 8;
    polyline.color = new Color('#DD00b3fd');
    polyline.geodesic = true;
    mapView.addPolyline(polyline);

    var polygon = new Polygon();
    polygon.addPoints([
        Position.positionFromLatLng(-33.86, 151.20),
        Position.positionFromLatLng(-33.89, 151.40),
        Position.positionFromLatLng(-34.22, 151.32)
    ]);
    polygon.visible = true;
    polygon.fillColor = new Color('#9970d0a0');
    polygon.strokeColor = new Color('#9900d0a0');
    polygon.strokeWidth = 5;
    mapView.addPolygon(polygon);

    marker = new Marker();
    marker.position = Position.positionFromLatLng(-33.42, 151.32);
    marker.title = "Gosford";
    marker.snippet = "Australia";
    // var icon = new Image();
    // icon.imageSource = imageSource.fromResource('icon');
    // marker.icon = icon;
    marker.icon = 'icon';
    marker.alpha = 0.6;
    marker.flat = true;
    marker.anchor = [0.5, 0.5];
    marker.draggable = true;
    marker.visible = false;
    marker.userData = {index: 2};
    mapView.addMarker(marker);

    // Custom Info Window Marker
    marker = new Marker();
    marker.position = Position.positionFromLatLng(-33.22, 151.20);
    marker.infoWindowTemplate = 'testWindow';
    mapView.addMarker(marker);
    marker.showInfoWindow();
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
