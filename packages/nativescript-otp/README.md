# @kefah/nativescript-otp

_Social buttons_

[![@kefahB - @kefah/nativescript-otp](https://img.shields.io/static/v1?label=%40kefahB&message=%40kefah%2Fnativescript-otp&color=blue&logo=github)](https://github.com/kefahB/plugins/blob/main/packages/nativescript-otp/README.md "Go to GitHub repo")
[![stars - @kefah/nativescript-otp](https://img.shields.io/badge/Strars-1-yellow)](https://github.com/kefahB/plugins/blob/main/packages/nativescript-otp/README.md)
[![dependency - @kefah/nativescript-otp](https://img.shields.io/badge/npm-1.0.2-green)](https://www.npmjs.com/package/@kefah/nativescript-otp "Go to NPM")


_Repo metadata_

[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - @kefah/nativescript-otp](https://img.shields.io/badge/issues-0-green)](https://github.com/kefahB/plugins/issues)

### A Nativescript plugin to auto fill the One Time Code `OTP` for `IOS` and `Android`

## Documentation

<div align="center">

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](https://github.com/kefahB/plugins/blob/main/packages/nativescript-otp/README.md  "Go to project documentation")

</div>

## Table of contents

- [Install](#install)
- [Limitations](#limitations)
- [Setup](#setup)
- [Usage](#usage)
- [Best Practice](#some-best-practice-in-order-to-successfully-receive-the-sms)
- [API](#api)
- [Generate Android hash code](#generate-android-hash-code)
- [How to test](#how-to-test)
- [License](#license)

## Install

```ts
ns plugin add @kefah/nativescript-otp
```
OR
```ts
npm i @kefah/nativescript-otp
```

## Limitations
IOS: This feature is available from `IOS 12.0` it will not working with older versions

## Setup
The only setup is for `Android` that need a hash code to be append to the sms, the procedure is a little complicated, this plugin has a helper `getAppSignatures()` on it that that can generate the hash code for the `development`, it is not sure that the same hash work for `production`, for that you need to generate it manually.

Get you development hash code by calling `getAppSignatures()` this will log the flowing into the console:

```ts
JS: packageName: org.nativescript.plugindemo Hash: I+D7XdR0yWS
```


- [Google Docs](https://developers.google.com/identity/sms-retriever/verify#computing_your_apps_hash_string)
- Here is a `Python` plugin to generate the hash, it work for all OS
[android-sms-hash-generator](https://github.com/funambol/android-sms-hash-generator)

## Before start
> An OTP in most case it is a `integers` values, please avoid using alphabet characters if possible.

> For some reason on IOS the OTP dectection not workin some time with a default keyboard type, if you experiencing a problem try to set the keyboard type to `integer`


```xml
<notp:NativescriptOtp keyboardType="integer" hint="{{ L('activation_code') }}" text="{{ code }}" autocorrect="false" class="otp"/>
```

## Some best practice in order to successfully receive the SMS
- Try to use thoes keywords into your sms `Code` `Passcode` `Password` `is`
- begin your sms by `<#>` I am not sure about this as it not on the docs
- do not put multilines between the msg and the hash code
- use a short code
- use numbers and alphabetical characters only

```ts
<#> your code is: 1234988
I+D7XdR0yWS
```

## Usage

This plugin implement the Nativescript `TextField`, so you can use it instead of the regular TextField.

Begin by including the plugin in your page 

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
xmlns:notp="@kefah/nativescript-otp" navigatingTo="navigatingTo" class="page">
````

Then use the plugin instead of the TextField
```xml
<notp:NativescriptOtp hint="OTP" class="otp" text="{{ otp }}"/>
```

Full example
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
xmlns:notp="@kefah/nativescript-otp" navigatingTo="navigatingTo" class="page">
    <Page.actionBar>
        <ActionBar title="otp" icon="" class="action-bar">
        </ActionBar>
    </Page.actionBar>

    <StackLayout class="p-20">
        <ScrollView class="h-full">
          <StackLayout>
            <Button text="Test otp >" tap="{{ testIt }}" class="btn btn-primary"/>
            <notp:NativescriptOtp hint="OTP" class="otp" text="{{ otp }}"/>
          </StackLayout> 
        </ScrollView>
    </StackLayout>
</Page>

```

Register the plugin to watch the incoming SMS and passe a callback function ont it to receive the OTP, this callback will be filled once the plugin captured the SMS.

View Model
```ts
import {NativescriptOtp, OTPResultInterface} from '@kefah/nativescript-otp';


export class DemoSharedOtp extends DemoSharedBase {


    constructor() {
        super();
        console.log('test nativescript-otp!');
        let otp = new NativescriptOtp();
        otp.registerForOTP((otp: OTPResultInterface) => {
            if(otp) {
                console.error("OTP", otp);
                this.set("otp", otp.otp)
                // do other staff
                // trigger verify...
                return;
            }
            // No OTP was found
        })
    }
}
```

## API
| Method | type | Description  | IOS | Android |
|---|---|---|---|---|
| registerForOTP: (cb)| Function  | register the plugin to watch the incoming SMS| x | x| 
| unregisterForOTP  | Function  | Unregister the watch | x | x| 
| parseMsg(msg, regex)  | Function  | this will parse the SMS to extract the code, you don't need to call it unless your code is special and you need a diffrent `regex` then pass your raged as second params | | x |
| getAppSignatures() | Function | A helper to get a development hash code for Android | | x |



## Generate Android hash code

```ts
package=_yourp_package_name_
keystore=debug.keystore
keystorepass=android
alias=androiddebugkey

keytool -exportcert -alias $alias -keystore $keystore -storepass $keystorepass | xxd -p | tr -d "[:space:]" | echo -n $package `cat` | openssl sha256 test.txt | tr -d "[:space:]-" | xxd -r -p | base64 | cut -c1-11
```

```ts
keytool -exportcert -alias androiddebugkey -keystore debug.keystore -storepass android | xxd -p | tr -d "[:space:]" | echo -n $package `cat` | openssl sha256 | tr -d "[:space:]-" | xxd -r -p | base64 | cut -c1-11
```

## How to test

### IOS
Unfortunately an `IOS` You need to test the `SMS` on a real device, apple doesn't allow to simulate a incomming sms on the simulator.

### Android
It is very easy, please see the image below

<img width="371" alt="Capture d’écran 2022-12-28 à 12 45 52" src="https://user-images.githubusercontent.com/18148534/209786200-fb9bb4d8-9bcc-43d0-a1b4-c49f8478993b.png">

<img width="400" alt="Capture d’écran 2022-12-28 à 12 48 26" src="https://user-images.githubusercontent.com/18148534/209786220-e022c321-7111-489b-a256-3be2b28d0e91.png">

## License

Released under [MIT](/LICENSE) by [@kefahB](https://github.com/kefahB).