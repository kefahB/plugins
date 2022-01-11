# NativeScript UUID

This is a plugin for Nativescript that allows you to get a UUID (Universal Unique Identifier) for a device.

> This plugin support the NS 8 also ;-)

Inspired from [`StackOverflow: How to preserve identifierForVendor in ios after uninstalling ios app on device?`](http://stackoverflow.com/questions/21878560/how-to-preserve-identifierforvendor-in-ios-after-uninstalling-ios-app-on-device).

Uses [`SAMKeychain Cocoa Pod`](https://cocoapods.org/pods/SAMKeychain).

## Installation

Run the following command from the root of your project:

```javascript
ns plugin add @kefah/nativescript-uuid
```

## Usage

#### JavaScript
```js
    let uid = require("@kefah/nativescript-uuid").NativescriptUuid;
    const uuid = uid.getUUID();
    console.log(`The device UUID is ${uuid}`);
```

#### TypeScript
```typescript
    import {NativescriptUuid} from '@kefah/nativescript-uuid';

    const uuid = NativescriptUuid.getUUID();
    console.log(`The device UUID is ${uuid}`);
```

## License

Apache License Version 2.0
