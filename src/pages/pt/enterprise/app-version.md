---
title: AppVersion
template: enterprise-plugin
version: 0.1.9
minor: 0.1.X
---



## Index

### Classes

* [AppVersion](#appversion)

* * *

## Classes

<a id="appversion"></a>

### AppVersion

**AppVersion**:

***name***: App Version

***description***: Reads the version of your app from the target build settings.

***usage***:

```typescript
import { AppVersion } from '@ionic-enterprise/app-version/ngx';

constructor(private appVersion: AppVersion) { }

...

this.appVersion.getAppName();
this.appVersion.getPackageName();
this.appVersion.getVersionCode();
this.appVersion.getVersionNumber();

```

<a id="appversion.getappname"></a>

### getAppName

▸ **getAppName**(): `Promise`<`string`>

Returns the name of the app, e.g.: "My Awesome App"

**Returns:** `Promise`<`string`>

* * *

<a id="appversion.getpackagename"></a>

### getPackageName

▸ **getPackageName**(): `Promise`<`string`>

Returns the package name of the app, e.g.: "com.example.myawesomeapp"

**Returns:** `Promise`<`string`>

* * *

<a id="appversion.getversioncode"></a>

### getVersionCode

▸ **getVersionCode**(): `Promise`<`string` \| `number`>

Returns the build identifier of the app. In iOS a string with the build version like "1.6095" In Android a number generated from the version string, like 10203 for version "1.2.3"

**Returns:** `Promise`<`string` \| `number`>

* * *

<a id="appversion.getversionnumber"></a>

### getVersionNumber

▸ **getVersionNumber**(): `Promise`<`string`>

Returns the version of the app, e.g.: "1.2.3"

**Returns:** `Promise`<`string`>

* * *

* * *