import { Observable } from '@nativescript/core';
import {
    MapView, Position, Marker, Shape, Polyline, Polygon, Projection,
    Circle, Camera, MarkerEventData, ShapeEventData, VisibleRegion,
    CameraEventData, PositionEventData, Bounds, Style, UISettings, IndoorBuilding, IndoorLevel,
    IndoorLevelActivatedEventData, BuildingFocusedEventData
} from "./map-view";
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

export class NativescriptGoogleMapsCommon extends View {
}
