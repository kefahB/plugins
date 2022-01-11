import { Observable } from '@nativescript/core';
import {
    MapView, Position, Marker, Shape, Polyline, Polygon, Projection,
    Circle, Camera, MarkerEventData, ShapeEventData, VisibleRegion,
    CameraEventData, PositionEventData, Bounds, Style, UISettings, IndoorBuilding, IndoorLevel,
    IndoorLevelActivatedEventData, BuildingFocusedEventData
} from "./index";
import { Point } from "@nativescript/core/ui/core/view";
import { View, Template, KeyedTemplate, Image, LayoutBase, Property, Color, Builder, eachDescendant, ProxyViewContainer, StackLayout } from "@nativescript/core";

function onInfoWindowTemplatesChanged(mapView: MapViewBase) {
    let _infoWindowTemplates = new Array<KeyedTemplate>();

    if (mapView.infoWindowTemplates && typeof mapView.infoWindowTemplates === "string") {
        _infoWindowTemplates = _infoWindowTemplates.concat(Builder.parseMultipleTemplates(mapView.infoWindowTemplates));
    } else if (mapView.infoWindowTemplates) {
        _infoWindowTemplates = _infoWindowTemplates.concat(<KeyedTemplate[]>mapView.infoWindowTemplates);
    }

    mapView._infoWindowTemplates = _infoWindowTemplates;
}

function onMapPropertyChanged(mapView: MapViewBase) {
    if (!mapView.processingCameraEvent) mapView.updateCamera();
}

function onSetMinZoomMaxZoom(mapView: MapViewBase) {
    mapView.setMinZoomMaxZoom();
}

function onPaddingPropertyChanged(mapView: MapViewBase) {
    mapView.updatePadding();
}

function paddingValueConverter(value: any) {
    if (!Array.isArray(value)) {
        value = String(value).split(',');
    }

    value = value.map((v) => parseInt(v, 10));

    if (value.length >= 4) {
        return value;
    } else if (value.length === 3) {
        return [value[0], value[1], value[2], value[2]];
    } else if (value.length === 2) {
        return [value[0], value[0], value[1], value[1]];
    } else if (value.length === 1) {
        return [value[0], value[0], value[0], value[0]];
    } else {
        return [0, 0, 0, 0];
    }
}

function onDescendantsLoaded(view: View, callback: () => void) {
    if (!view) return callback();

    let loadingCount = 1;
    let loadedCount = 0;

    const watchLoaded = (view, event) => {
        const onLoaded = () => {
            view.off(event, onLoaded);
            loadedCount++;

            if (view instanceof Image && view.isLoading) {
                loadingCount++;
                watchLoaded(view, 'isLoadingChange');

                if (view.nativeView.onAttachedToWindow) {
                    view.nativeView.onAttachedToWindow();
                }
            }

            if (loadedCount === loadingCount) callback();
        };
        view.on(event, onLoaded);
    };

    eachDescendant(view, (descendant) => {
        loadingCount++;
        watchLoaded(descendant, View.loadedEvent);
        return true;
    });

    watchLoaded(view, View.loadedEvent);
}

// @ts-ignore
export { Style as StyleBase };

export module knownTemplates {
    export const infoWindowTemplate = "infoWindowTemplate";
}

export module knownMultiTemplates {
    export const infoWindowTemplates = "infoWindowTemplates";
}

export function getColorHue(color: Color | string | number): number {
    if (typeof color === 'number') {
        while (color < 0) { color += 360; }
        return color % 360;
    }
    if (typeof color === 'string') color = new Color(color);
    if (!(color instanceof Color)) return color;

    let min, max, delta, hue;

    const r = Math.max(0, Math.min(1, color.r / 255));
    const g = Math.max(0, Math.min(1, color.g / 255));
    const b = Math.max(0, Math.min(1, color.b / 255));

    min = Math.min(r, g, b);
    max = Math.max(r, g, b);

    delta = max - min;

    if (delta == 0) { // white, grey, black
        hue = 0;
    } else if (r == max) {
        hue = (g - b) / delta; // between yellow & magenta
    } else if (g == max) {
        hue = 2 + (b - r) / delta; // between cyan & yellow
    } else {
        hue = 4 + (r - g) / delta; // between magenta & cyan
    }

    hue = ((hue * 60) + 360) % 360; // degrees

    return hue;
}

export abstract class NativescriptGoogleMapsCommon extends View {
    
    protected _gMap: any;
    protected _markers: Array<MarkerBase> = new Array<MarkerBase>();
    protected _shapes: Array<ShapeBase> = new Array<ShapeBase>();
    public _processingCameraEvent: boolean;
    public latitude: number;
    public longitude: number;
    public bearing: number;
    public zoom: number;
    public minZoom: number;
    public maxZoom: number;
    public tilt: number;
    public padding: number[];
    public mapAnimationsEnabled: boolean;

    public infoWindowTemplate: string | Template;
    public infoWindowTemplates: string | Array<KeyedTemplate>;
    public _defaultInfoWindowTemplate: KeyedTemplate = {
        key: "",
        createView: () => {
            if (this.infoWindowTemplate) {
                return Builder.parse(this.infoWindowTemplate, this);
            }
            return undefined;
        }
    };
    public _infoWindowTemplates = new Array<KeyedTemplate>();

    public projection: Projection;
    public settings: UISettingsBase;
    public myLocationEnabled: boolean;

    public static mapReadyEvent: string = "mapReady";
    public static markerSelectEvent: string = "markerSelect";
    public static markerInfoWindowTappedEvent: string = "markerInfoWindowTapped";
    public static markerInfoWindowClosedEvent: string = "markerInfoWindowClosed";
    public static shapeSelectEvent: string = "shapeSelect";
    public static markerBeginDraggingEvent: string = "markerBeginDragging";
    public static markerEndDraggingEvent: string = "markerEndDragging";
    public static markerDragEvent: string = "markerDrag";
    public static coordinateTappedEvent: string = "coordinateTapped";
    public static coordinateLongPressEvent: string = "coordinateLongPress";
    public static cameraChangedEvent: string = "cameraChanged";
    public static cameraMoveEvent: string = "cameraMove";
    public static myLocationTappedEvent: string = "myLocationTapped";
    public static indoorBuildingFocusedEvent: string = "indoorBuildingFocused";
    public static indoorLevelActivatedEvent: string = "indoorLevelActivated";

    public get gMap() {
        return this._gMap;
    }

    public get processingCameraEvent(): boolean {
        return this._processingCameraEvent;
    }

    public _getMarkerInfoWindowContent(marker: MarkerBase) {
        var view;

        if (marker && marker._infoWindowView) {
            view = marker._infoWindowView;
            return view;
        }

        const template: KeyedTemplate = this._getInfoWindowTemplate(marker);

        if (template) view = template.createView();

        if (!view) return null;

        if (!(view instanceof LayoutBase) ||
            view instanceof ProxyViewContainer) {
            let sp = new StackLayout();
            sp.addChild(view);
            view = sp;
        }

        marker._infoWindowView = view;

        view.bindingContext = marker;

        onDescendantsLoaded(view, () => {
            marker.hideInfoWindow();
            marker.showInfoWindow();
        });

        this._addView(view);

        view.onLoaded();

        return view;
    }

    protected _unloadInfoWindowContent(marker: MarkerBase) {
        if (marker._infoWindowView) {
            marker._infoWindowView.onUnloaded();
            marker._infoWindowView = null;
        }
    }

    public _getInfoWindowTemplate(marker: MarkerBase): KeyedTemplate {
        if(marker){
            const templateKey = marker.infoWindowTemplate;
            for (let i = 0, length = this._infoWindowTemplates.length; i < length; i++) {
                if (this._infoWindowTemplates[i].key === templateKey) {
                    return this._infoWindowTemplates[i];
                }
            }
        }
        return this._defaultInfoWindowTemplate;
    }

    public abstract findMarker(callback: (marker: Marker) => boolean): Marker;

    public abstract addPolyline(shape: Polyline): void;

    public abstract addPolygon(shape: Polygon): void;

    public abstract addCircle(shape: Circle): void;

    public abstract removeShape(shape: Shape): void;

    public abstract findShape(callback: (shape: Shape) => boolean): Shape;

    public abstract setStyle(style: Style): boolean;

    public abstract updateCamera(): void;

    public abstract setViewport(b: Bounds, p?: number): void;

    public abstract updatePadding(): void;

    public abstract setMinZoomMaxZoom(): void;

    public abstract addMarker(...markers: Marker[]): void;

    public abstract removeMarker(...markers: Marker[]): void;

    public abstract removeAllMarkers(): void;

    public abstract removeAllShapes(): void;

    public abstract clear(): void;

    public removeAllPolylines() {
        if(!this._shapes) return null;
        this._shapes.forEach(shape => {
            if (shape.shape === 'polyline') {
                this.removeShape(shape);
            }
        });
    }

    public removeAllPolygons() {
        if(!this._shapes) return null;
        this._shapes.forEach(shape => {
            if (shape.shape === 'polygon') {
                this.removeShape(shape);
            }
        });
    }

    public removeAllCircles() {
        if(!this._shapes) return null;
        this._shapes.forEach(shape => {
            if (shape.shape === 'circle') {
                this.removeShape(shape);
            }
        });
    }

    notifyMapReady() {
        this.notify({ eventName: MapViewBase.mapReadyEvent, object: this, gMap: this.gMap });
    }

    notifyMarkerEvent(eventName: any, marker: Marker) {
        let args: MarkerEventData = { eventName: eventName, object: this, marker: marker };
        this.notify(args);
    }

    notifyShapeEvent(eventName: string, shape: Shape) {
        let args: ShapeEventData = { eventName: eventName, object: this, shape: shape };
        this.notify(args);
    }

    notifyMarkerTapped(marker: MarkerBase) {
        this.notifyMarkerEvent(MapViewBase.markerSelectEvent, marker);
    }

    notifyMarkerInfoWindowTapped(marker: MarkerBase) {
        this.notifyMarkerEvent(MapViewBase.markerInfoWindowTappedEvent, marker);
    }

    notifyMarkerInfoWindowClosed(marker: MarkerBase) {
        this.notifyMarkerEvent(MapViewBase.markerInfoWindowClosedEvent, marker);
    }

    notifyShapeTapped(shape: ShapeBase) {
        this.notifyShapeEvent(MapViewBase.shapeSelectEvent, shape);
    }

    notifyMarkerBeginDragging(marker: MarkerBase) {
        this.notifyMarkerEvent(MapViewBase.markerBeginDraggingEvent, marker);
    }

    notifyMarkerEndDragging(marker: MarkerBase) {
        this.notifyMarkerEvent(MapViewBase.markerEndDraggingEvent, marker);
    }

    notifyMarkerDrag(marker: MarkerBase) {
        this.notifyMarkerEvent(MapViewBase.markerDragEvent, marker);
    }

    notifyPositionEvent(eventName: string, position: Position) {
        let args: PositionEventData = { eventName: eventName, object: this, position: position };
        this.notify(args);
    }

    notifyCameraEvent(eventName: string, camera: Camera) {
        let args: CameraEventData = { eventName: eventName, object: this, camera: camera };
        this.notify(args);
    }

    notifyMyLocationTapped() {
        this.notify({ eventName: MapViewBase.myLocationTappedEvent, object: this });
    }

    notifyBuildingFocusedEvent(indoorBuilding: IndoorBuilding) {
        let args: BuildingFocusedEventData = { eventName: MapViewBase.indoorBuildingFocusedEvent, object: this, indoorBuilding: indoorBuilding };
        this.notify(args);
    }

    notifyIndoorLevelActivatedEvent(activateLevel: IndoorLevel) {
        let args: IndoorLevelActivatedEventData = { eventName: MapViewBase.indoorLevelActivatedEvent, object: this, activateLevel: activateLevel };
        this.notify(args);
    }
}
