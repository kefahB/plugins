import { DemoSharedBase } from '../utils';
import {  } from '@kefah/nativescript-google-maps';

export class DemoSharedNativescriptGoogleMaps extends DemoSharedBase {
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
  testIt() {
    console.log('test nativescript-google-maps!');
  }
}