import { Builder, Enums, EventData, GridLayout, Observable, ObservableArray, Property, TextField, View } from '@nativescript/core';
import { AutocompleteInterface, TokenPredictions } from './AutocompleteInterface';

export class AutocompleteCommon extends GridLayout implements AutocompleteInterface {
    
    private items: ObservableArray<TokenPredictions>;

    public static canceledEvent = "canceled";
    public static itemTappedEvent = "itemTapped";
    public source: any;
    public dimmerColor: any;
    public hintText: any;
    public hideFilter: any;
    public enableSearch: boolean;
    public blur: any;
    private blurView: any = false;
    public focusOnShow: any;
    private _container: GridLayout;
    private _picker: GridLayout;
    private _textField: TextField;
    private _searchFilter: (data: any) => void;
    private _isAutocomplete: boolean = false;
    private _suggestions: any;
  
    private view: View;

    constructor() {
        super();

        this._searchFilter = this._searchFilterFn.bind(this);
    }

    onLoaded(): void {
        super.onLoaded();
        this.view = Builder.parse(`
            <GridLayout rows="75, *" columns="" loaded="{{loadedContainer}}">
                <StackLayout class="input-field">
                    <TextField id="autocomplete" class="ccz-input" tap="{{showPicker}}" hint="{{ hintText}}" text="{{ destination }}" autocorrect="false" autocapitalizationType="none"/>
                </StackLayout>
                    <ListView row="1" items="{{ dataItems }}" itemTap="{{ onItemSelected }}" id="lv">
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
        `);
        this.view.bindingContext = this;
        this.addChild(this.view);
    }

    loadedContainer(args) {
        this._container = <GridLayout>args.object;
    }

    loadedInnerContainer(args) {
        this._picker = <GridLayout>args.object;
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

    private _searchFilterFn() {

    }
}

const hint = new Property<AutocompleteCommon, string>({ name: "hintText", defaultValue: "Write 2 chars..."});
hint.register(AutocompleteCommon);
