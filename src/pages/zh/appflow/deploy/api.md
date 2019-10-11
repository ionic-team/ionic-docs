---
title: Ionic部署
previousText: '频道'
previousUrl: '/docs/appflow/sport/screcisions'
nextText: '教程和视频'
nextUrl: '/docs/appflow/deploy/tutorials'
---


## 安装和使用

为了在您的应用程序中使用部署API。您需要安装Apploret SDK 的最新版本，并且设置 `UPDATE_METHD` 为`none`：

```shell
ionic deploy add --update-method=none --app-id="YOUR_APP_ID" --channel-name="YOUR_CHANNEL_NAME"
```

然后您可以导入Deploy API，以便在您的代码中导入：

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

## 索引

### 类

* [IonicDeploy](#ionicdeploy)

### 接口

* [CallbackFunction](#callbackfunction)
* [CheckForUpdateResponse](#checkforupdateresponse)
* [IAppInfo](#iappinfo)
* [ICurrentConfig](#icurrentconfig)
* [IDeployConfig](#ideployconfig)
* [ISnapshotInfo](#isnapshotinfo)
* [ISyncOptions](#isyncoptions)

* * *

## 类

<a id="ionicdeploy"></a>

### IonicDeploy

**IonicDeploy**:

Ionic Deploy插件 API

***用法***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

## 方法

这个插件包含许多功能，可以帮助您在应用程序中使用Deploy。

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

***说明***: 检查当前配置的应用程序id和channel的可用更新。

***since***: v5.0.0

***用法***:

```typescript
async performManualUpdate() {
  const update = await Deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

**Returns：** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)> 如果更新可用，则描述更新的响应。

* * *

<a id="ionicdeploy.configure"></a>

### 配置

▸ **configure**(config: *[IDeployConfig](#ideployconfig)*): `Promise`<`void`>

***描述***: 更新当前设备上插件的默认配置。 新的配置将在应用程序关闭和二进制更新之间保持。

***since***: v5.0.0

***用法***:

```typescript
async configureDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Deploy.configure(config);
}
```

**参数**

| 名称     | 类型（Type）                        | 描述          |
| ------ | ------------------------------- | ----------- |
| config | [IDeployConfig](#ideployconfig) | 此设备上插件的新配置。 |


**返回：** `Promise`<`void`>

* * *

<a id="ionicdeploy.deleteversionbyid"></a>

### deleteVersionById

▸ **deleteVersionById**(version: *`string`*): `Promise`<`boolean`>

***描述***: 从设备中删除快照的文件。

***用法***:

```typescript
async deleteVersion() {
  const versions = await Deploy.getAvailableVersions();
  Deploy.deleteVersionById(versions[0].versionId);
}
```

**参数**

| 名称      | 类型（Type） | 描述   |
| ------- | -------- | ---- |
| version | `string` | 版本ID |


**返回：** `Promise`<`boolean`> 如果更新已经删除为true。

* * *

<a id="ionicdeploy.downloadupdate"></a>

### downloadUpdate

▸ **downloadUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<`boolean`>

***描述***: 从checkForUpdate方法找到的可用更新下载新文件并准备更新。

***since***: v5.0.0

***用法***:

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

**参数**

| 名称                  | 类型（Type）                                        | 描述                                 |
| ------------------- | ----------------------------------------------- | ---------------------------------- |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> | 一个进度回调函数，将使用一个表示下载和准备完成百分比的数字进行调用。 |


**返回：** `Promise`<`boolean`> 如果更新被成功删除为true。

* * *

<a id="ionicdeploy.extractupdate"></a>

### extractUpdate

▸ **extractUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<`boolean`>

***描述***: 提取一个已下载的更新文件包。

***since***: v5.0.0

***用法***:

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

**参数**

| 名称                  | 类型（Type）                                        | 描述                                 |
| ------------------- | ----------------------------------------------- | ---------------------------------- |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> | 一个进度回调函数，将使用一个表示下载和准备完成百分比的数字进行调用。 |


**返回：** `Promise`<`boolean`> 如果提取成功为true。

* * *

<a id="ionicdeploy.getavailableversions"></a>

### getAvailableVersions

▸ **getAvailableVersions**(): `Promise`<[ISnapshotInfo](#isnapshotinfo)[]>

***描述***: 获取设备上可用的快照列表。

***自***: v5.0.0

***使用***:

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

**返回：** `Promise`<[ISnapshotIn](#isnapshotinfo)>可用的更新列表。

* * *

<a id="ionicdeploy.getconfiguration"></a>

### getConfiguration

▸ **getConfiguration**(): `Promise`<[ICurrentConfig](#icurrentconfig)>

***描述***: 更新当前设备上插件的默认配置。

***since***: v5.0.0

***用法***: `` ` ``typescript const info = Deploy.getConfiguration() console.log(info) // { // 'appId': 'abcd1234', // 'channel': 'MY\_CHANNEL\_NAME', // 'binaryVersionName': 'X.X.X', // 'binaryVersionCode': 'X.X.X', (string on iOS number on Android) // 'disabled': false, // 'updateMethod': 'auto', // 'maxVersions': 3, // 'minBackgroundDuration': 30, // 'currentVersionId': 'xxxx-xxxx-xxxx-xxxx' // 'currentBuildId' : 'xxxxxxx' // }

**Returns:** `Promise`<[ICurrentConfig](#icurrentconfig)>插件当前配置。

* * *

<a id="ionicdeploy.getcurrentversion"></a>

### getCurrentVersion

▸ **getCurrentVersion**(): `Promise`<[ISnapshotInfo](#isnapshotinfo) | `undefined`>

***描述***: 获取有关当前部署的更新的信息，如果没有应用更新，则获取未定义的更新。

***自***: v5.0.0

***用法***:

```typescript
const info = await Deploy.getCurrentVersion()
console.log(info)
// {
//   'versionId': 'UUID_OF_ACTIVE_CODE',
//   'channel': 'CHANNEL_NAME',
//   'binaryVersion': 'X.X.X'
// }
```

**返回：** `Promise`<[ISnapshotIn](#isnapshotinfo) | `undefined`> 获取有关当前部署的更新的信息，如果没有应用更新，则获取未定义的更新。

* * *

<a id="ionicdeploy.getversionbyid"></a>

### getVersionById

▸ **getVersionById**(versionId: *`string`*): `Promise`<[ISnapshotInfo](#isnapshotinfo)>

***描述***: 获取其版本ID的更新信息

***自***: v5.0.0

**参数**

| 名称   | 类型（Type） |
| ---- | -------- |
| 版本ID | `string` |


**返回：** `Promise`<[ISnapshotIn](#isnapshotinfo) | `undefined`> 获取有关当前部署的更新的信息，如果没有应用更新，则获取未定义的更新。

* * *

<a id="ionicdeploy.reloadapp"></a>

### reloadApp

▸ **reloadApp**(): `Promise`<`boolean`>

***描述***: 如果应用程序的最新版本可用，重新加载应用程序。

***自***: v5.0.0

***用法***:

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

**返回：** `Promise`<`boolean`> 如果重新加载成功为true。

* * *

<a id="ionicdeploy.sync"></a>

### sync

▸ **sync**(syncOptions?: *[ISyncOptions](#isyncoptions)*, progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<[ISnapshotInfo](#isnapshotinfo) | `undefined`>

***描述***: 一步检查更新、下载并部署它。

***自***: v5.0.0

***用法***:

```typescript
async performAutomaticUpdate() {
  try {
    const currentVersion = await Deploy.getCurrentVersion();
    const resp = await Deploy.sync({updateMethod: 'auto'}, percentDone => {
      console.log(`Update is ${percentDone}% done!`);
    });
    if (currentVersion.versionId !== resp.versionId){
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
* The app id is required to recieve updates for an app in the Appflow dashboard.
* `ionic deploy add --app-id=abcdef12`
* `ionic cordova plugin add cordova-plugin-ionic --variable APP_ID=abcdef12`

### Channel Name

* **Required**
* The channel name is required to recieve updates for an app in the Appflow dashboard and indicates the channel from which the device will recieve updates. Note this can also be updated programatically at runtime for advanced use cases.
* `ionic deploy add --channel-name=Production`
* `ionic cordova plugin add cordova-plugin-ionic --variable CHANNEL_NAME=Production`

### Update Method

* **Default** `background`
* The update method determines how the app will check for and apply updates. Possible values are: 
  * `background` (Recommended) - The app will check for updates in the background and not prolong the amount of time the splash screen is shown. If an update is available it will be downloaded and installed while the user is using the older version. The next time they launch the app or the app has been in background for the duration specified my `min-background-duration` the new version will be loaded.
  * `auto` - The app will delay the launch of the app by extending how long the splash screen is shown while downloading any available updates. Once the update is available the new version will be immediately shown and the splash screen will be hidden. We generally don't recommend this mode since it can lead to the splash screen showing for a long time particularly if the user is on a poor network connection.
  * `none` - Setting the update method to `none` indicates that you will manually perform all update logic programatically and the plugin will not check for or apply updates on its own.
* `ionic deploy add --updated-method=Production`
* `ionic cordova plugin add cordova-plugin-ionic --variable UPDATE_METHOD=background`

### Max Versions

* **Default** `2`
* This tells the plugin the number of previous updates it should keep on the device in order to speed up the rollback process if ever needed.
* `ionic deploy add --max-versions=Production`
* `ionic cordova plugin add cordova-plugin-ionic --variable MAX_VERSIONS=Production`

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