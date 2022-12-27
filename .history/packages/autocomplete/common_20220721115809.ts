import { Builder, EventData, Observable, ObservableArray, Property, TextField, View } from '@nativescript/core';
import { AutocompleteInterface, TokenPredictions } from './AutocompleteInterface';

export class AutocompleteCommon extends View implements AutocompleteInterface {
    
    private items: ObservableArray<TokenPredictions>;

    private view: View;

    constructor() {
        super();

        this.view = Builder.parse(`
            <StackLayout class="form m-t-20">
                <StackLayout class="home-panel" horizontalAlignment="center">
                    <Label textWrap="true" text="{{ L('msg_destination_choice') }}" class="h2 description-label" />
                </StackLayout>
                <GridLayout rows="75, *" columns="">
                    <StackLayout class="input-field">
                        <TextField id="autocomplete" class="ccz-input" tap="{{showPicker}}" hint="{{ L('inputs.destination') }}" text="{{ destination }}" autocorrect="false" autocapitalizationType="none"/>
                    </StackLayout>
                        <ListView row="1" items="${this.dataItems}" itemTap="${this.onItemSelected}" id="lv">
                            <ListView.itemTemplate>
                                <StackLayout orientation="vertical">
                                    <GridLayout rows="auto, auto" columns="35, *">
                                        <Label fontSize="25" row="0" col="0" text="{{ location === true ? ic('fa-compass') : ic('fa-map-marker') }}" class="{{ location === true ? 'fa p-l-10 prediction-item-ic-departure' : 'fas p-l-10 prediction-item-ic-departure' }}" verticalAlignment="center" />
                                        <Label fontSize="20" row="0" col="2" text="{{ name }}" class="p-20"/>
                                        <StackLayout row="1" colSpan="2" class="hr-light" />
                                    </GridLayout>
                                </StackLayout>
                            </ListView.itemTemplate>
                        </ListView>
                </GridLayout>
            </StackLayout>
        `);
        this._addView(this.view)
    }
    
    handleListeners(tf: TextField): void {
        throw new Error('Method not implemented.');
    }
    togglePreventDefaultOnItemTaped(): void {
        throw new Error('Method not implemented.');
    }

    onItemSelected(args: EventData) {
        console.log("onItemSelected");
    }

    get dataItems(): ObservableArray<TokenPredictions> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenPredictions>) {
        this.set("_dataItems", value);
    }

}

const hint = new Property<AutocompleteCommon, string>({ name: "hintText", defaultValue: "Write 2 chars..."});
hint.register(AutocompleteCommon);
