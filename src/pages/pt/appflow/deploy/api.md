---
title: Ionic Deploy
previousText: 'Channels'
previousUrl: '/docs/appflow/deploy/channels'
nextText: 'Tutorials and Videos'
nextUrl: '/docs/appflow/deploy/tutorials'
---


## Installation and Usage

In order to use the Deploy API inside of your app. You need to install the latest version of the Appflow SDK and set the `UPDATE_METHOD` to `none`:

```shell
ionic deploy add --update-method=none --app-id="YOUR_APP_ID" --channel-name="YOUR_CHANNEL_NAME"
```

Then you can import the Deploy API in order to it in your code:

```typescript
// ES2015/Typescript
import { Deploy } from 'cordova-plugin-ionic';

...

async changeToBetaChannel() {
  await Deploy.configure({channel: 'BETA'});
}

...

// Angular
import { Deploy } from 'cordova-plugin-ionic/dist/ngx';

...

constructor(private deploy: Deploy) {
  ...
}

async changeToBetaChannel() {
  await this.deploy.configure({channel: 'BETA'});
}

...

```

## Index

### Classes

* [IonicDeploy](#ionicdeploy)

### Interfaces

* [CallbackFunction](#callbackfunction)
* [CheckForUpdateResponse](#checkforupdateresponse)
* [IAppInfo](#iappinfo)
* [ICurrentConfig](#icurrentconfig)
* [IDeployConfig](#ideployconfig)
* [ISnapshotInfo](#isnapshotinfo)
* [ISyncOptions](#isyncoptions)

* * *

## Classes

<a id="ionicdeploy"></a>

### IonicDeploy

**IonicDeploy**:

The Ionic Deploy Plugin API

***usage***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

## Methods

The plugin contains many functions that can help you utilize Deploy inside of your app.

* [configure](#ionicdeploy.configure)
* [getConfiguration](#ionicdeploy.getconfiguration)
* [sync](#ionicdeploy.sync)
* [checkForUpdate](#ionicdeploy.checkforupdate)
* [downloadUpdate](#ionicdeploy.downloadupdate)
* [extractUpdate](#ionicdeploy.extractupdate)
* [reloadApp](#ionicdeploy.reloadapp)
* [getCurrentVersion](#ionicdeploy.getcurrentversion)
* [getVersionById](#ionicdeploy.getversionbyid)
* [getAvailableVersions](#ionicdeploy.getavailableversions)
* [deleteVersionById](#ionicdeploy.deleteversionbyid)

<a id="ionicdeploy.checkforupdate"></a>

### checkForUpdate

▸ **checkForUpdate**(): `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

***description***: Check for available updates for the currently configured app id and channel.

***since***: v5.0.0

***usage***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

**Returns:** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)> A response describing an update if one is available.

* * *

<a id="ionicdeploy.configure"></a>

### configure

▸ **configure**(config: *[IDeployConfig](#ideployconfig)*): `Promise`<`void`>

***description***: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

***since***: v5.0.0

***usage***:

```typescript
async configureDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Deploy.configure(config);
}
```

**Parameters:**

| Name   | Type                            | Description                                          |
| ------ | ------------------------------- | ---------------------------------------------------- |
| config | [IDeployConfig](#ideployconfig) | The new configuration for the plugin on this device. |


**Returns:** `Promise`<`void`>

* * *

<a id="ionicdeploy.deleteversionbyid"></a>

### deleteVersionById

▸ **deleteVersionById**(version: *`string`*): `Promise`<`boolean`>

***description***: Remove the files specific to a snapshot from the device.

***usage***:

```typescript
async deleteVersion() {
  const versions = await Deploy.getAvailableVersions();
  Deploy.deleteVersionById(versions[0].versionId);
}
```

**Parameters:**

| Name    | Type     | Description   |
| ------- | -------- | ------------- |
| version | `string` | The versionId |


**Returns:** `Promise`<`boolean`> true if the update was deleted.

* * *

<a id="ionicdeploy.downloadupdate"></a>

### downloadUpdate

▸ **downloadUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<`boolean`>

***description***: Download the new files from an available update found by the checkForUpdate method and prepare the update.

***since***: v5.0.0

***usage***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    await Deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
  }
}
```

**Parameters:**

| Name                | Type                                            | Description                                                                                                                         |
| ------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> | A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |


**Returns:** `Promise`<`boolean`> true if the download succeeded

* * *

<a id="ionicdeploy.extractupdate"></a>

### extractUpdate

▸ **extractUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<`boolean`>

***description***: Extract a downloaded bundle of updated files.

***since***: v5.0.0

***usage***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    await Deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
    await Deploy.extractUpdate((progress) => {
      console.log(progress);
    })
  }
}
```

**Parameters:**

| Name                | Type                                            | Description                                                                                                            |
| ------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> | A progress callback function which will be called with a number representing the percent of completion of the extract. |


**Returns:** `Promise`<`boolean`> true if the extract succeeded

* * *

<a id="ionicdeploy.getavailableversions"></a>

### getAvailableVersions

▸ **getAvailableVersions**(): `Promise`<[ISnapshotInfo](#isnapshotinfo)[]>

***description***: Get a list of the snapshots available on the device.

***since***: v5.0.0

***usage***:

```typescript
async checkVersions() {
const versions = await Deploy.getAvailableVersions();
console.log(versions);
// [
//   {
//     'versionId': 'versionId1',
//     'channel': 'CHANNEL_NAME',
//     'binaryVersion': '1.0.1'
//   },
//   {
//     'versionId': 'versionId2',
//     'channel': 'CHANNEL_NAME',
//     'binaryVersion': '1.0.1'
//   },
// ]

```

**Returns:** `Promise`<[ISnapshotInfo](#isnapshotinfo)[]> a list of available updates.

* * *

<a id="ionicdeploy.getconfiguration"></a>

### getConfiguration

▸ **getConfiguration**(): `Promise`<[ICurrentConfig](#icurrentconfig)>

***description***: Get the current configuration for the plugin on the current device.

***since***: v5.0.0

***usage***: `` ` ``typescript const info = Deploy.getConfiguration() console.log(info) // { // 'appId': 'abcd1234', // 'channel': 'MY\_CHANNEL\_NAME', // 'binaryVersionName': 'X.X.X', // 'binaryVersionCode': 'X.X.X', (string on iOS number on Android) // 'disabled': false, // 'updateMethod': 'auto', // 'maxVersions': 3, // 'minBackgroundDuration': 30, // 'currentVersionId': 'xxxx-xxxx-xxxx-xxxx' // 'currentBuildId' : 'xxxxxxx' // }

**Returns:** `Promise`<[ICurrentConfig](#icurrentconfig)> The current configuration of the plugin.

* * *

<a id="ionicdeploy.getcurrentversion"></a>

### getCurrentVersion

▸ **getCurrentVersion**(): `Promise`<[ISnapshotInfo](#isnapshotinfo) \| `undefined`>

***description***: Get info about the currently deployed update or undefined if none are applied.

***since***: v5.0.0

***usage***:

```typescript
const info = await Deploy.getCurrentVersion()
console.log(info)
// {
//   'versionId': 'UUID_OF_ACTIVE_CODE',
//   'channel': 'CHANNEL_NAME',
//   'binaryVersion': 'X.X.X'
// }
```

**Returns:** `Promise`<[ISnapshotInfo](#isnapshotinfo) \| `undefined`> The info about the currently applied update or undefined if none is applied.

* * *

<a id="ionicdeploy.getversionbyid"></a>

### getVersionById

▸ **getVersionById**(versionId: *`string`*): `Promise`<[ISnapshotInfo](#isnapshotinfo)>

***description***: Get info about the update by its versionId

***since***: v5.0.0

**Parameters:**

| Name      | Type     |
| --------- | -------- |
| versionId | `string` |


**Returns:** `Promise`<[ISnapshotInfo](#isnapshotinfo)> The info about the currently applied update or undefined if none is applied.

* * *

<a id="ionicdeploy.reloadapp"></a>

### reloadApp

▸ **reloadApp**(): `Promise`<`boolean`>

***description***: Reload the app if a more recent version of the app is available.

***since***: v5.0.0

***usage***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    await Deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
    await Deploy.extractUpdate((progress) => {
      console.log(progress);
    })
    await Deploy.reloadApp();
  }
}
```

**Returns:** `Promise`<`boolean`> true if the reload succeeded

* * *

<a id="ionicdeploy.sync"></a>

### sync

▸ **sync**(syncOptions?: *[ISyncOptions](#isyncoptions)*, progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<[ISnapshotInfo](#isnapshotinfo) \| `undefined`>

***description***: Check for an update, download it, and apply it in one step.

***since***: v5.0.0

***usage***:

```typescript
async performAutomaticUpdate() {
  try {
    const currentVersion = await Deploy.getCurrentVersion();
    const resp = await Deploy.sync({updateMethod: 'auto'}, percentDone => {
      console.log(`Update is ${percentDone}% done!`);
    });
    if (!currentVersion || currentVersion.versionId !== resp.versionId){
      // We found an update, and are in process of redirecting you since you put auto!
    }else{
      // No update available
    }
  } catch (err) {
    // We encountered an error.
  }
}
```

**Parameters:**

| Name                        | Type                          | Default value | Description                              |
| --------------------------- | ----------------------------- | ------------- | ---------------------------------------- |
| `Default value` syncOptions | [ISyncOptions](#isyncoptions) | {}            | (Optional) Application update overrides. |


**Returns:** `Promise`<[ISnapshotInfo](#isnapshotinfo) \| `undefined`> The info about the currently applied update or undefined if none is applied.

* * *

* * *

## Interfaces

<a id="callbackfunction"></a>

### CallbackFunction

▸ **__call**(result?: *[T]()*): `void`

A callback function to handle the result.

**Parameters:**

| Name              | Type  |
| ----------------- | ----- |
| `Optional` result | [T]() |


**Returns:** `void`

* * *

<a id="checkforupdateresponse"></a>

### CheckForUpdateResponse

**CheckForUpdateResponse**:

The response object describing if an update is available.

<a id="checkforupdateresponse.available"></a>

### available

**● available**: *`boolean`*

Whether or not an update is available.

* * *

<a id="checkforupdateresponse.build"></a>

### `<Optional>` build

**● build**: *`undefined` \| `string`*

The id of the build if available.

* * *

<a id="checkforupdateresponse.compatible"></a>

### compatible

**● compatible**: *`boolean`*

Equivalent to available since v5 this can be ignored in favor of available

***deprecated***:

* * *

<a id="checkforupdateresponse.incompatibleupdateavailable"></a>

### `<Optional>` incompatibleUpdateAvailable

**● incompatibleUpdateAvailable**: *`undefined` \| `false` \| `true`*

Whether or not there is an update available that is not compatible with this device.

* * *

<a id="checkforupdateresponse.partial"></a>

### partial

**● partial**: *`false`*

Legacy indicator of whether the update is a partial one. This will always be false and can be ignored

***deprecated***:

* * *

<a id="checkforupdateresponse.snapshot"></a>

### `<Optional>` snapshot

**● snapshot**: *`undefined` \| `string`*

The id of the snapshot if available.

* * *

<a id="checkforupdateresponse.url"></a>

### `<Optional>` url

**● url**: *`undefined` \| `string`*

The url to fetch the manifest of files in the update.

* * *

* * *

<a id="iappinfo"></a>

### IAppInfo

**IAppInfo**:

Information about the application.

<a id="iappinfo.binaryversioncode"></a>

### binaryVersionCode

**● binaryVersionCode**: *`string` \| `number`*

The versionCode on Android or CFBundleVersion on iOS this should be changed every time you do a new build debug or otherwise.

* * *

<a id="iappinfo.binaryversionname"></a>

### binaryVersionName

**● binaryVersionName**: *`string`*

The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.

* * *

<a id="iappinfo.bundlename"></a>

### bundleName

**● bundleName**: *`string`*

The bundle name.

* * *

<a id="iappinfo.bundleversion"></a>

### bundleVersion

**● bundleVersion**: *`string`*

***deprecated***: The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.

* * *

<a id="iappinfo.datadirectory"></a>

### dataDirectory

**● dataDirectory**: *`string`*

Directory where the snapshots are stored

* * *

<a id="iappinfo.device"></a>

### device

**● device**: *`string`*

A generated device ID (NOT a native device ID)

* * *

<a id="iappinfo.platform"></a>

### platform

**● platform**: *"ios" \| "android"*

The platform that the app is currently installed on.

* * *

<a id="iappinfo.platformversion"></a>

### platformVersion

**● platformVersion**: *`string`*

The version of the native platform.

* * *

<a id="iappinfo.version"></a>

### version

**● version**: *`string`*

***deprecated***: The versionCode on Android or CFBundleVersion on iOS this should be changed every time you do a new build debug or otherwise.

* * *

* * *

<a id="icurrentconfig"></a>

### ICurrentConfig

**ICurrentConfig**:

The current configuration for the deploy plugin on the device.

<a id="icurrentconfig.appid"></a>

### appId

**● appId**: *`string`*

The [Ionic Pro](https://ionicframework.com/docs/pro/) app id.

* * *

<a id="icurrentconfig.binaryversion"></a>

### binaryVersion

**● binaryVersion**: *`string`*

***deprecated***: The binary version of the native bundle versionName on Android or CFBundleShortVersionString on iOS deprecated in favor of versionName

* * *

<a id="icurrentconfig.binaryversioncode"></a>

### binaryVersionCode

**● binaryVersionCode**: *`string`*

The build version code of the native bundle versionCode on Android or CFBundleVersion on iOS

* * *

<a id="icurrentconfig.binaryversionname"></a>

### binaryVersionName

**● binaryVersionName**: *`string`*

The binary version of the native bundle versionName on Android or CFBundleShortVersionString on iOS

* * *

<a id="icurrentconfig.channel"></a>

### channel

**● channel**: *`string`*

The [channel](https://ionicframework.com/docs/pro/deploy/channels) that the plugin should listen for updates on.

* * *

<a id="icurrentconfig.currentbuildid"></a>

### `<Optional>` currentBuildId

**● currentBuildId**: *`undefined` \| `string`*

The id of the currently applied build or undefined if none is applied.

* * *

<a id="icurrentconfig.currentversionid"></a>

### `<Optional>` currentVersionId

**● currentVersionId**: *`undefined` \| `string`*

The id of the currently applied updated or undefined if none is applied.

* * *

<a id="icurrentconfig.disabled"></a>

### disabled

**● disabled**: *`boolean`*

Whether the user disabled deploy updates or not.

* * *

<a id="icurrentconfig.host"></a>

### host

**● host**: *`string`*

The host API the plugin is configured to check for updates from.

* * *

<a id="icurrentconfig.maxversions"></a>

### maxVersions

**● maxVersions**: *`number`*

The maximum number of updates to be stored locally on the device.

* * *

<a id="icurrentconfig.minbackgroundduration"></a>

### minBackgroundDuration

**● minBackgroundDuration**: *`number`*

The number of seconds the app needs to be in the background before the plugin considers it closed for the purposes of fetching and applying a new update.

* * *

<a id="icurrentconfig.updatemethod"></a>

### updateMethod

**● updateMethod**: *"none" \| "auto" \| "background"*

The currently configured updateMethod for the plugin.

* * *

* * *

<a id="ideployconfig"></a>

### IDeployConfig

**IDeployConfig**:

The configuration for the deploy plugin on the device.

<a id="ideployconfig.appid"></a>

### `<Optional>` appId

**● appId**: *`undefined` \| `string`*

The [Ionic](https://ionicframework.com/docs/appflow/) app id.

* * *

<a id="ideployconfig.channel"></a>

### `<Optional>` channel

**● channel**: *`undefined` \| `string`*

The [channel](https://ionicframework.com/docs/pro/deploy/channels) that the plugin should listen for updates on.

* * *

<a id="ideployconfig.debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` \| `false` \| `true`*

whether or not the app should in debug mode

* * *

<a id="ideployconfig.maxversions"></a>

### `<Optional>` maxVersions

**● maxVersions**: *`undefined` \| `number`*

The number of previous updates to be cached on the device

* * *

<a id="ideployconfig.minbackgroundduration"></a>

### `<Optional>` minBackgroundDuration

**● minBackgroundDuration**: *`undefined` \| `number`*

The number of seconds the app should be in the background for before the plugin considers it closed and checks for an updated on resume of the app.

* * *

<a id="ideployconfig.updatemethod"></a>

### `<Optional>` updateMethod

**● updateMethod**: *"none" \| "auto" \| "background"*

The update method the app should use when checking for available updates

* * *

* * *

<a id="isnapshotinfo"></a>

### ISnapshotInfo

**ISnapshotInfo**:

Information about a snapshot

<a id="isnapshotinfo.binaryversion"></a>

### binaryVersion

**● binaryVersion**: *`string`*

***deprecated***: The binary version the snapshot was downloaded for. The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.

* * *

<a id="isnapshotinfo.binaryversioncode"></a>

### binaryVersionCode

**● binaryVersionCode**: *`string`*

The binary version build code the snapshot was downloaded for. The versionCode on Android or CFBundleVersion on iOS this should be changed every time you do a new build debug or otherwise.

* * *

<a id="isnapshotinfo.binaryversionname"></a>

### binaryVersionName

**● binaryVersionName**: *`string`*

The binary version name the snapshot was downloaded for. The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.

* * *

<a id="isnapshotinfo.binary_version"></a>

### binary_version

**● binary_version**: *`string`*

***deprecated***: in favor of [binaryVersion](#binaryversion)

The binary version the snapshot was downloaded for.

* * *

<a id="isnapshotinfo.buildid"></a>

### buildId

**● buildId**: *`string`*

The id for the snapshot.

* * *

<a id="isnapshotinfo.channel"></a>

### channel

**● channel**: *`string`*

The channel that the snapshot was downloaded for..

* * *

<a id="isnapshotinfo.deploy_uuid"></a>

### deploy_uuid

**● deploy_uuid**: *`string`*

***deprecated***: in favor of [versionId](#versionid)

The id for the snapshot.

* * *

<a id="isnapshotinfo.versionid"></a>

### versionId

**● versionId**: *`string`*

The id for the snapshot.

* * *

* * *

<a id="isyncoptions"></a>

### ISyncOptions

**ISyncOptions**:

Configuration options for the call to `sync`

<a id="isyncoptions.updatemethod"></a>

### `<Optional>` updateMethod

**● updateMethod**: *"background" \| "auto"*

Whether the update should be applied immediately or on the next app start.

* * *

## Plugin Variables

The deploy plugin uses variables to configure the way in which the plugin behaves. You can set these values when you add the plugin using flags (if using the `ionic deploy add` command) or using cordova variables (if using `ionic cordova plugin add`). The available variables are as follows:

### App ID

* **Required**
* The app id is required to receive updates for an app in the Appflow dashboard.
* `ionic deploy add --app-id=abcdef12`
* `ionic cordova plugin add cordova-plugin-ionic --variable APP_ID=abcdef12`

### Channel Name

* **Required**
* The channel name is required to receive updates for an app in the Appflow dashboard and indicates the channel from which the device will receive updates. Note this can also be updated programatically at runtime for advanced use cases.
* `ionic deploy add --channel-name=Production`
* `ionic cordova plugin add cordova-plugin-ionic --variable CHANNEL_NAME=Production`

### Update Method

* **Default** `background`
* The update method determines how the app will check for and apply updates. Possible values are: 
  * `background` (Recommended) - The app will check for updates in the background and not prolong the amount of time the splash screen is shown. If an update is available it will be downloaded and installed while the user is using the older version. The next time they launch the app or the app has been in background for the duration specified my `min-background-duration` the new version will be loaded.
  * `auto` - The app will delay the launch of the app by extending how long the splash screen is shown while downloading any available updates. Once the update is available the new version will be immediately shown and the splash screen will be hidden. We generally don't recommend this mode since it can lead to the splash screen showing for a long time particularly if the user is on a poor network connection.
  * `none` - Setting the update method to `none` indicates that you will manually perform all update logic programatically and the plugin will not check for or apply updates on its own.
* `ionic deploy add --update-method=background`
* `ionic cordova plugin add cordova-plugin-ionic --variable UPDATE_METHOD=background`

### Max Versions

* **Default** `2`
* This tells the plugin the number of previous updates it should keep on the device in order to speed up the rollback process if ever needed.
* `ionic deploy add --max-versions=2`
* `ionic cordova plugin add cordova-plugin-ionic --variable MAX_STORE=2`

### Min Background Duration

* **Default** `30`
* This tells the plugin the number of seconds the app needs to be in the background for it to have been considered "closed". If the app has been in the background for at least this duration the plugin will check for and apply updates according to the update method as if the app were opened from a fully closed state. This is helpful for triggering updates even when a user never fully closes the app but also allowing them to page over to another app or password manager for short periods of time without triggering an update.
* `ionic deploy add --min-background-duration=60`
* `ionic cordova plugin add cordova-plugin-ionic --variable MIN_BACKGROUND_DURATION=60`

* * *

## Change Log

## 5.4.4

* Fix issue where too many network requests at once could fire and cause performance issues.

## 5.4.3

* Fix issue where types caused incompatability with Ionic v3 (Typescript 2.x)

### 5.4.0

* Added Deploy API Imports
* Removed dependency on `cordova-plugin-file`

### 5.3.0

* Added an 'incompatibleUpdateAvailable' property to the 'CheckForUpdateResponse' (\[#204\] (https://github.com/ionic-team/cordova-plugin-ionic/pull/204))
* 'ConfigurationInfo' now contains the 'BuildId' in addition to the 'SnapshotId' (\[#204\] (https://github.com/ionic-team/cordova-plugin-ionic/pull/204))

### 5.2.9

* Get dataDirectory from getAppInfo function ([#197](https://github.com/ionic-team/cordova-plugin-ionic/pull/197))
* Add proxy for browser platform to support it ([#199](https://github.com/ionic-team/cordova-plugin-ionic/pull/199))

### 5.2.8

* Fix Type Error in IDeployConfig ([#196](https://github.com/ionic-team/cordova-plugin-ionic/pull/196))

### 5.2.7

* Change hook to run before_prepare and make it async ([#178](https://github.com/ionic-team/cordova-plugin-ionic/pull/178))
* Fixed bug where the a new binary update would load an older cached version of the app ([#179)](https://github.com/ionic-team/cordova-plugin-ionic/issues/179))

### 5.2.6

* Check for Capacitor and switch folder ([#164](https://github.com/ionic-team/cordova-plugin-ionic/pull/164))
* Remove unused import ([#163](https://github.com/ionic-team/cordova-plugin-ionic/pull/163))
* Delay device ready until pro checks are done ([#161](https://github.com/ionic-team/cordova-plugin-ionic/pull/161))

### 5.2.5

* Fix bug where binaryVersionName and binaryVersionCode are not returned from getConfiguation call
* Fix bug where downloadUpdate progress call back would go from 0 to 50 rather than 100 ([#156](https://github.com/ionic-team/cordova-plugin-ionic/pull/156]))
* Check if the device is online before checking for updates ([#154](https://github.com/ionic-team/cordova-plugin-ionic/pull/154))

### 5.2.4

* update check device resp to be accurate ([#148](https://github.com/ionic-team/cordova-plugin-ionic/pull/148))

### 5.2.3

* Fixed bug with AndroidManifest.xml syntax for real since our release script kept breaking it

### 5.2.2

* Fixed bug with AndroidManifest.xml syntax

### 5.2.1

* Add ACCESS_NETWORK_STATE permission to make navigator.onLine work on android

### 5.2.0

* Added `DisableDeploy` Cordova preference allowing disabling of the plugin
* Requires `cordova-plugin-ionic-webview@^2.1.4` for `DisableDeploy` support to work correctly

### 5.1.6

* Fixed a bug with none update method strategy that could cause background updates upon resume of the app from background

### 5.0.6

* Fixed a bug with version rebulds that could make some initial redirects take up to 15 seconds.

### 5.0.5

* Rebuild a deploy directory in the case where the binary version has changed since the update was downloaded.

### 5.0.0

* Release!