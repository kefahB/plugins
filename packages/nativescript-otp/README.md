# @kefah/nativescript-otp

_Social buttons_

[![@kefahB - @kefah/nativescript-otp](https://img.shields.io/static/v1?label=%40kefahB&message=%40kefah%2Fnativescript-otp&color=blue&logo=github)](https://github.com/kefahB/@kefah/nativescript-otp "Go to GitHub repo")
[![stars - @kefah/nativescript-otp](https://img.shields.io/github/stars/@kefahB/@kefah/nativescript-otp?style=social)](https://github.com/kefahB/@kefah/nativescript-otp)
[![forks - @kefah/nativescript-otp](https://img.shields.io/github/forks/@kefahB/@kefah/nativescript-otp?style=social)](https://github.com/kefahB/@kefah/nativescript-otp)
[![dependency - @kefah/nativescript-otp](https://img.shields.io/badge/dependency-%40kefah%2Fnativescript--otp-blue?logo=Nativescript&logoColor=white)](https://www.npmjs.com/package/@kefah/nativescript-otp)
[![Package - @kefah/nativescript-otp](https://img.shields.io/github/package-json/dependency-version/@kefahB/@kefah/nativescript-otp/@kefah/nativescript-otp?logo=Nativescript&logoColor=white&color=blue)](https://www.npmjs.com/package/@kefah/nativescript-otp)


_Repo metadata_


[![GitHub tag](https://img.shields.io/github/tag/kefahB/@kefah/nativescript-otp?include_prereleases=&sort=semver&color=blue)](https://github.com/kefahB/@kefah/nativescript-otp/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - @kefah/nativescript-otp](https://img.shields.io/github/issues/@kefahB/@kefah/nativescript-otp)](https://github.com/kefahB/@kefah/nativescript-otp/issues)

### A Nativescript plugin to auto fill the One Time Code `OTP` for `IOS` and `Android`

## Documentation

<div align="center">

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](/docs/ "Go to project documentation")

</div>


```ts
ns plugin add @kefah/nativescript-otp
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


## License

Released under [MIT](/LICENSE) by [@kefahB](https://github.com/kefahB).