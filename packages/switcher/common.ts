import { GridLayout, Observable, Property } from '@nativescript/core';

export class SwitcherCommon extends GridLayout {
    
}

export const itemsProperty = new Property<SwitcherCommon, SwitcherItemsInterface[]>({
    name: "items",
    defaultValue: []
});
itemsProperty.register(SwitcherCommon);


export interface  SwitcherItemsInterface {
    title?: string;
    index?: number
    icon: string
}