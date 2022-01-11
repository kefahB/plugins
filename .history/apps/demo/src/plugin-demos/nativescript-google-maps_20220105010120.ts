import { Observable, EventData, Page, Color, Application } from '@nativescript/core';
import { DemoSharedNativescriptGoogleMaps } from '@demo/shared';
import { Bounds, Circle, GoogleMaps, Marker, Polygon, Polyline, Position } from '@kefah/nativescript-google-maps';
import * as permissions from "nativescript-permissions";
let mapView = null;

let vmModule: DemoModel;

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
    vmModule = page.bindingContext;
}

export function pageLoaded(args: EventData) {
    let page = args.object;
}


export function onMapReady(args) {
    mapView = args.object;

    console.log("onMapReady");
    mapView.settings.compassEnabled = true;
    mapView.settings.myLocationButtonEnabled = true;
    mapView.myLocationEnabled = true;

    console.log("Setting a marker...");
    let marker = new Marker();
    marker.position = Position.positionFromLatLng(-33.86, 151.20);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.color = "green";
    marker.userData = {index: 1};
    marker.draggable = true;
    mapView.infoWindowTemplate = `<StackLayout orientation="vertical" width="200" height="150" >
        <Label text="{{title}}" className="title" width="125"   />
        <Label text="{{snippet}}" className="snippet" width="125"   />
        <Label text="{{'LAT: ' + position.latitude}}" className="infoWindowCoordinates"  />
        <Label text="{{'LON: ' + position.longitude}}" className="infoWindowCoordinates"  />
    </StackLayout>`;
    mapView.addMarker(marker);

    return;
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



    requestPermissions().then(function(granted) {
            if(granted) {
                console.log("Enabling My Location..");
                mapView.myLocationEnabled = true;
                mapView.settings.myLocationButtonEnabled = true;
            }
            return wait(6000);
        }).then(function () {
            marker.hideInfoWindow();
            marker = mapView.findMarker(function (marker) {
                return marker.userData.index === 2;
            });
            console.log("Moving marker...", marker.userData);
            marker.position = Position.positionFromLatLng(-33.33, 151.08);
            marker.rotation = 45;
            console.log("Removing Point from polyline...", polyline, point);
            polyline.removePoint(point);
            return wait(3000);
        }).then(function () {
            vmModule.set("mapAnimationsEnabled", false);
            vmModule.set("zoom", 9);
            console.log("Zooming in (no animation)...", vmModule);
            return wait(3000);
        }).then(function () {
            polyline.addPoint(Position.positionFromLatLng(-33.33, 151.08));
            console.log("Adding point to Polyline...", polyline);
            vmModule.set("padding", [30, 60, 40, 40]);
            return wait(3000);
        }).then(function () {
            polygon.addPoint(Position.positionFromLatLng(-34.22, 151.20));
            console.log("Adding point to Polygon...", polygon);
            return wait(3000);
        }).then(function () {
            var marker = mapView.findMarker(function (marker) {
                return marker.userData.index === 2;
            });
            marker.visible = true;
            return wait(3000);
        }).then(function () {
            var marker = mapView.findMarker(function (marker) {
                return marker.userData.index === 2;
            });
            // marker.position = Position.positionFromLatLng(-32.89,151.44);
            marker.anchor = [1, 1];
            marker.alpha = 0.8;
            return wait(3000);
        }).then(function () {
            console.log("Changing to dark mode...");
            //mapView.setStyle(style);
            return wait(3000);
        }).then(function () {
            var marker = mapView.findMarker(function (marker) {
                return marker.userData.index === 1;
            });
            console.log("Removing marker...", marker.userData);
            mapView.removeMarker(marker);
            return wait(3000);
        }).then(function () {
            console.log("Removing all circles...");
            mapView.removeAllCircles();
            console.log("Removing all polylines...");
            mapView.removeAllPolylines();
            console.log("Removing all polygons...");
            mapView.removeAllPolygons();
          return wait(3000);
        }).then(function () {
            console.log("Hiding compass...");
            mapView.settings.compassEnabled = false;
            printUISettings(mapView.settings);
          return wait(3000);
        }).then(function () {
            console.log("Changing bounds...");
            var bounds = Bounds.fromCoordinates(
                Position.positionFromLatLng(-33.88, 151.16),
                Position.positionFromLatLng(-33.78, 151.24)
            );
            mapView.setViewport(bounds);
            return wait(3000);
        }).then(function () {
            var marker = new Marker();
            marker.position = Position.positionFromLatLng(mapView.latitude, mapView.longitude);
            marker.title = "All Done";
            marker.snippet = "Enjoy!";
            marker.color = 240;
            mapView.addMarker(marker);
            marker.showInfoWindow();
        }).catch(function (error) {
            console.log(error);
        });
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

function requestPermissions() {
    return new Promise(function(resolve, reject) {
      if (!Application.android) return resolve(true);
      permissions.requestPermission([
            android.Manifest.permission.ACCESS_FINE_LOCATION,
            android.Manifest.permission.ACCESS_COARSE_LOCATION],
          "This demo will stink without these...")
          .then(function (result) {
            console.log("Permissions granted!");
            resolve(true);
          })
          .catch(function (result) {
            console.log("Permissions failed :(", result);
            resolve(false);
          });
  
    });
  }

  function wait(milliSeconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
           resolve(milliSeconds);
        }, milliSeconds);
    });
}

function printUISettings(settings) {
    console.log("Current UI setting:\n" + JSON.stringify({
                  compassEnabled: settings.compassEnabled,
                  indoorLevelPickerEnabled: settings.indoorLevelPickerEnabled,
                  mapToolbarEnabled: settings.mapToolbarEnabled,
                  myLocationButtonEnabled: settings.myLocationButtonEnabled,
                  rotateGesturesEnabled: settings.rotateGesturesEnabled,
                  scrollGesturesEnabled: settings.scrollGesturesEnabled,
                  tiltGesturesEnabled: settings.tiltGesturesEnabled,
                  zoomControlsEnabled: settings.zoomControlsEnabled,
                  zoomGesturesEnabled: settings.zoomGesturesEnabled
    }, undefined, 2));
  }