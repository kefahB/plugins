import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { GoogleMaps, Marker, Position } from '@kefah/nativescript-google-maps';
import { registerElement } from '@nativescript/angular';



// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => GoogleMaps);


@Component({
	selector: 'demo-nativescript-google-maps',
	templateUrl: 'nativescript-google-maps.component.html',
})
export class NativescriptGoogleMapsComponent {
  
  demoShared: DemoSharedNativescriptGoogleMaps;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptGoogleMaps();
  }

  latitude =  -33.86;
    longitude = 151.20;
    zoom = 8;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: GoogleMaps;

    lastCamera: String;


    //Map events
    onMapReady(event) {
        console.log('Map Ready');

        this.mapView = event.object;

        this.mapView.settings.myLocationButtonEnabled = true
        //this.mapView.myLocationEnabled = true

        console.log("Setting a marker...");

        var marker = new Marker();
        marker.position = Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

    onCameraMove(args) {
        console.log("Camera moving: " + JSON.stringify(args.camera));
    }

}