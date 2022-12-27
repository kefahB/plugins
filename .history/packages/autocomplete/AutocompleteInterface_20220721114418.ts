import { TextField } from "@nativescript/core";




export interface AutocompleteInterface {
    handleListeners(tf: TextField): void;
    togglePreventDefaultOnItemTaped(): void
}

export class TokenPredictions {

    public dataItem: PredictionDataIetemInterface;
    public name: string;
    public image: string;
    public location: boolean;

    constructor(name: string, dataItem: PredictionDataIetemInterface, location: boolean = false, image: string = "") {
        this.name = name;
        this.image = image;
        this.location = location; // set to true to binding `Use my current location`
        this.dataItem = dataItem;
    }
}

export class TokenCustom {

    public dataItem: PredictionDataIetemInterface;
    public text: string;
    public image: string;
    public ios: any;
    public android: any;

    constructor(text: string, image: string, dataItem: PredictionDataIetemInterface) {
        this.text = text;
        this.image = image;
        this.dataItem = dataItem;
    }
}

export interface TripInterface {
    is_trip_update?: boolean;
    origin?: TripPlace;
    destination?: TripPlace;
    prices?: TripCost; 
    steps?: Array<TripPlace>;
    round_trip?: boolean;
    regular_trip?: boolean;
    departure_date?: Date;
    booking_type?: number; // 0: auto, 1: manuel
    seats?: number;
    preferences?: TripPreferences;
    booking_manuel_response_time?: number;
    return_date?: Date;
    regular_date?: string[];
    cost?: Array<CostInterface>;
}

export interface TripPlace {
    name: string;
    place_id: string;
    reference_id: string;
    lat: number;
    lng: number;
    id?: number
}

export interface TripPreferences {
    smoking: boolean;
    luggage: number; // 0: small, 1: medium, 2: big
    detour: number; // 0: non detour, 1: 15 minutes, 2: 30 minutes
}

export interface TripCost {
    trip_cost?: number; // total cost of trip
    cost_steps?: Array<number>
}

export interface Predictions {
    predictions: PredictionsItems[];
}

export interface PredictionsItems {
    dataItem: PredictionDataIetemInterface
}

export interface PredictionDataIetemInterface {
    id: string;
    name: string;
    place_id: string;
    reference: string;
    structured_formatting?: StructuredFormattingItems[];
    types?: itemsType[];
    matched_substrings?: MatchedSubstring;
    location?: boolean;
    geometry: geometryInterface;
}

export interface StructuredFormattingItems {
    main_text: string;
    main_text_matched_substrings: MatchedSubstring[],
    secondary_text: string;
}

export interface itemsType {
    locality: string;
    political: string[],
    geocode: string;
}

export interface MatchedSubstring {
    length: number;
    offset: number;
}

export interface DistanceInterface {
    distance : DistanceValueInterface;
    duration : DistanceValueInterface
    status: string;
}

export interface DistanceValueInterface {
    text: string;
    value: number;
}

export interface geometryInterface {
    location: LocationInterface;
}

export interface LocationInterface {
    lat: number;
    lng: number;
}

export interface CostInterface {
    id: number;
    name: string;
    cost: number; // 1000
    _cost: string; // 10,00 €
}