---
previousText: 'Channels'
previousUrl: '/docs/appflow/deploy/channels'
nextText: 'Tutorials and Videos'
nextUrl: '/docs/appflow/deploy/tutorials'
---

# Using the Deploy API

<div class="alert alert-danger" role="alert">
Before you begin using the API you'll need to make sure you've already
<a href="/docs/appflow/deploy/setup/#installation" style="color: #4a8bfc;">installed and configured the plugin.</a>
and you'll likely want to use the <a href="/docs/appflow/deploy/api/#using-the-ionic-pro-client" style="color: #4a8bfc;">Pro Client</a> to make accessing the API easier.
</div>

While the Ionic Cordova plugin can handle all of your updates and perform them for you,
sometimes you may want to customize how this works.
Some examples of things you may want to do are:

- Allow users to subscribe to different Channels for Beta Features, etc.
- Manage the update process yourself (ex. Download updates on login, Apply updates on logout or Check for updates every 30 minutes)
- Display what Channel the user is connected to

The Pro Client gives you access to everything you need to make these modifications,
and it's recommended that you always use the Pro Client instead of the Cordova plugin directly.

<div class="alert alert-warning" role="alert"><h4>Note: Async Await vs. ".then()"</h4>
<p>In all of the examples on this page you'll notice that we use Async/Await.
This automatically resolves promises inline for you and waits to perform the next action.
This is just an alternative to using `.then`. Async/Await just allows your code to be much more legible
(especially when you'd normally be chaining multiple promises) as it's read like a syncronous piece of code.
Here are two ways to write the same piece of code:</p>
<div markdown="1">
```js
Pro.deploy.getCurrentVersion().then((versionInfo) => {
  console.log(versionInfo);
})

// is the same as

async getVersionInfo(){
  const versionInfo = await Pro.deploy.getCurrentVersion();
  console.log(versionInfo);
}

```
</div>
</div>

### Using the Ionic Pro Client

The Ionic Pro Client gives you access to the Deploy API inside of your app.

You simply need to install the latest version of the Pro Client:

```bash
npm install @ionic/pro@latest
```

Then you can import it in order to use the Deploy API in your code:
```typescript
import { Pro } from '@ionic/pro';
```

## Try the New Improved Deploy Plugin

We're excited to announce that we've released major update to the deploy plugin and Pro Client!
The new version of the plugin was neccessary to support underlying changes to the `cordova-plugin-ionic-webview`
in order to support Ionic 4 and it also brings with it a number of optimizations that we know users have been looking
forward to for a long time and lays the foundation for more! The major updates include:
* CDN - The new deploy plugin is backed by a CDN so that files are cached close to your users in edge locations
and will reduce download times
* Differential Updates - The previous version of the plugin shipped all the assets in you built `www` directory for every
update. The new one only downloads files that have changed since the previous versions stored on the device which can reduce
bandwidth by up to 90% and should increase download speeds as well.
* OnResume Updates - Now users will be able to recieve app updates on resuming the app after it has been in the background for
a long enough period of time. Previously updates were only installed if the app was fully closed and reopened now you can use the
[MIN_BACKGROUND_DURATION](#min_background_duration) plugin variable to control how long the app needs to be in the background before
the plugin considers it "closed" for the purposes of checking for an update.

### How To Install the New Version

If you're starting from a brand new app created with `ionic start` you can follow the [setup instructions](/docs/appflow/deploy/setup/#installation)
and you'll get the new version. If you're upgrading from a previous version you can follow
[this guide & tutorial video](/docs/appflow/deploy/tutorials/#upgrading-to-the-new-deploy-plugin).

## Methods

*Note*: If you're looking for the v4 API you can find them [here](/docs/appflow/deploy/api/v4api.html)
`Pro.deploy` contains many functions that can help you utilize Deploy inside of your app. Here's a rundown of each:

* [configure](#configure)
* [getConfiguration](#getconfiguration)
* [sync](#sync)
* [checkForUpdate](#checkforupdate)
* [downloadUpdate](#downloadupdate)
* [extractUpdate](#extract)
* [reloadApp](#reloadapp)
* [getCurrentVersion](#getcurrentversion)
* [getAvailableVersions](#getavailableversions)
* [deleteVersionById](#deleteversionbyid)

---

###  configure

▸ **configure**(config: *[DeployConfig](#deployconfig)*): `Promise`<`void`>

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [DeployConfig](#deployconfig) |  The new configuration for the plugin on this device. |

**Returns:** `Promise`<`void`>

```js
async configureDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Pro.deploy.configure(config);
}
```
###  getConfiguration

▸ **getConfiguration**(): `Promise`<[ConfigurationInfo](#configurationinfo)>

*__description__*: Get info about the current configuration on the device.

*__since__*: v5.0.0

**Returns:** `Promise`<[ConfigurationInfo](#configurationinfo)> - Info about the currently applied configuration details.

```js
const info = await Pro.deploy.getConfiguration()
console.log(info)
// {
//   'appId': 'abcd1234',
//   'channel': 'MY_CHANNEL_NAME',
//   'binaryVersionName': 'X.X.X',
//   'binaryVersionCode': 'X.X.X', (string on iOS number on Android)
//   'disabled': false,
//   'updateMethod': 'auto',
//   'maxVersions': 3,
//   'minBackgroundDuration': 30,
//   'currentVersionId': 'xxxx-xxxx-xxxx-xxxx'
// }
```

___

###  sync

▸ **sync**(options: [SyncOptions](#syncoptions)): `Promise`<[SnapshotInfo](#snapshotinfo) `| undefined`>

*__description__*: This function performs an entire standard check, download, extract, and reload cycle rather than having to program it yourself. This should be used most of the time unless you need to customize the flow.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | [SyncOptions](#syncoptions) |  Options to call sync with to override the default update method. |

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo) `| undefined`> - The info of the currently applied update or undefined if there is no applied update.

```js
async performAutomaticUpdate() {
  try {
    const currentVersion = Pro.deploy.getCurrentVersion();
    const resp = await Pro.deploy.sync({updateMethod: 'auto'});
    if (currentVersion.versionId !== resp.versionId){
      // We found an update, and are in process of redirecting you since you put auto!
    }else{
      // No update available
    }
  } catch (err) {
    // We encountered an error.
    // Here's how we would log it to Ionic Pro Monitoring while also catching:

    // Pro.monitoring.exception(err);
  }
}
```

___

###  checkForUpdate

▸ **checkForUpdate**(): `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

*__description__*: Check for available updates for the currently configured app id and channel.

*__since__*: v5.0.0

**Returns:** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)> - An object describing if an update is available.

```js
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

___

###  downloadUpdate

▸ **downloadUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<`boolean`>

*__description__*: Download the new files from an available update found by the checkForUpdate method and prepare the update.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`boolean`> - `true` if the available update was successfully downloaded.

```js

async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    await Pro.deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
  }
}
```

___

###  extractUpdate

▸ **extractUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`number`>*): `Promise`<`boolean`>

*__description__*: Extract the files from an update downloaded with the downloadUpdate method to prepare for loading the app.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`boolean`> - `true` if the available update was successfully extracted.

```js
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    await Pro.deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
    await Pro.deploy.extractUpdate((progress) => {
      console.log(progress);
    })
  }
}
```

___

###  reloadApp

▸ **reloadApp**(): `Promise`<`boolean`>

*__description__*: Reload the app if a more recent version of the app is available.

*__since__*: v5.0.0

**Returns:** `Promise`<`boolean`> - `true` if the app was successfully reloaded.

```js
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    await Pro.deploy.downloadUpdate((progress) => {
      console.log(progress);
    })
    await Pro.deploy.extractUpdate((progress) => {
      console.log(progress);
    })
    await Pro.deploy.reloadApp();
  }
}
```

___

###  getCurrentVersion

▸ **getCurrentVersion**(): `Promise`<[SnapshotInfo](#snapshotinfo) `| undefined`>

*__description__*: Get info about the currently deployed update.

*__since__*: v5.0.0

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo) `| undefined`> - Info about the currently applied update or `undefined` if there isn't one applied.

```js
const info = await Pro.deploy.getCurrentVersion()
console.log(info)
// {
//   'versionId': 'UUID_OF_ACTIVE_CODE',
//   'channel': 'CHANNEL_NAME',
//   'binaryVersion': 'X.X.X'
// }
```
___

###  getAvailableVersions

▸ **getAvailableVersions**(): `Promise`<[SnapshotInfo](#snapshotinfo)[]>

*__description__*: Get a list of the snapshots available on the device.

*__since__*: v5.0.0

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo)[]> - A list of updates stored locally on the device.

```js
async checkVersions() {
  const versions = await Pro.deploy.getAvailableVersions();
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
}
```
___

###  deleteVersionById

▸ **deleteVersionById**(versionId: *`string`*): `Promise`<`boolean`>

*__description__*: Remove the files specific to a snapshot from the device.

*__since__*: v5.0.0

**Parameters:**

| Param | Type |
| ------ | ------ |
| versionId | `string` |

**Returns:** `Promise`<`boolean`> - `true` if the version was successfully deleted.

```js
async deleteVersion() {
  const versions = await Pro.deploy.getAvailableVersions();
  Pro.deploy.deleteVersion(versions[0].versionId);
}
```

___


## Interfaces
* [DeployConfig](#deployconfig)
* [CheckForUpdateResponse](#checkforupdateresponse)
* [SnapshotInfo](#snapshotinfo)
* [CallbackFunction](#callbackfunction)

### DeployConfig

#### Properties

* [channel](#optional-channel)
* [appId](#optional-appid)
* [maxVersions](#optional-maxversions)
* [minBackgroundDuration](#optional-minbackgroundduration)

___

#### `<Optional>` appId

**● appId**: `undefined` |
`string`


The [Ionic Appflow](https://ionicframework.com/docs/appflow/) app id.

___

#### `<Optional>` channel

**● channel**: `undefined` |
`string`


The [channel](/docs/pro/deploy/channels) that the plugin should listen for updates on.

___

#### `<Optional>` maxVersions

**● maxVersions**: `undefined` |
`number`


The number of previous updates to be cached on the device

___

#### `<Optional>` minBackgroundDuration

**● minBackgroundDuration**: `undefined` |
`number`

The number of seconds the app should be in the background for before the plugin considers it closed and checks for an updated on resume of the app.

___

#### `<Optional>` updateMethod

**● updateMethod**: `undefined` |
`background | none | auto`

The update method the app should use when checking for available updates

___

### CheckForUpdateResponse

#### Properties

* [available](#available)
* [compatible](#compatible)
* [partial](#partial)
* [integrity](#optional-integrity)
* [snapshot](#optional-snapshot)
* [url](#optional-url)

####  available

**● available**: `boolean`

Whether or not an update is available.

___

####  compatible

**● compatible**: `boolean`

*__deprecated__*: in favor of [available](#available)
Whether or not an update is available. Will always be identical to [available](#available)

___

####  partial

**● compatible**: `boolean`

*__deprecated__*
Legacy way of determining whether an update was full or partial. Will always be `false`.

___

#### `<Optional>` integrity

**● integrity**: `undefined` |
`string`


The checksum of the manifest file.

___

#### `<Optional>` snapshot

**● snapshot**: `undefined` |
`string`


The id of the snapshot if available.

___

#### `<Optional>` url

**● url**: `undefined` |
`string`


The url to fetch the manifest of files in the update.

___

### SyncOptions

#### Properties
* [updateMethod](#updatemethod)

####  updateMethod

**● updateMethod**: `'background' | 'auto'`

The update method to use when applying an update if available. This will override the default method the plugin was configured with temporarily.

___

### ConfigurationInfo

#### Properties
* `binaryVersion` `<string>` - **deprecated** in favor of `binaryVersionName`. The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.
* `binaryVersionName` `<string>` - The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.
* `binaryVersionCode` `<string(iOS)|number(Android)>` -The versionCode on Android or CFBundleVersion on iOS this should be changed every time you do a new build.
* `channel` `<string>` - The channel name the device is currently configured to check for updates on.
* `disabled` `<boolean>` - Whether the deploy updates are disabled or not.
* `updateMethod` `<'none' | 'auto' | 'background'>` - The currently configured updateMethod for the plugin.
* `maxVersions` `<number>` - The maximum number of updates to be stored locally on the device.
* `minBackgroundDuration` `<number>` - The number of seconds the app needs to be in the background before the plugin considers it closed for the purposes of fetching and applying a new update.
* `currentVersionId` `<string | undefined>` - The id of the currently applied update or `undefined` if none is applied.



___

### SnapshotInfo

#### Properties
* [binaryVersion](#binaryversion)
* [binary_version](#binary_version)
* [channel](#channel)
* [deploy_uuid](#deploy_uuid)
* [versionId](#versionid)

####  binaryVersion

**● binaryVersion**: *`string`*

The binary version the snapshot was downloaded for.

___

####  binary_version

**● binary_version**: *`string`*

*__deprecated__*: in favor of [binaryVersion](#binaryversion)

The binary version the snapshot was downloaded for.

___

####  channel

**● channel**: *`string`*

The channel that the snapshot was downloaded for..

___

####  deploy_uuid

**● deploy_uuid**: *`string`*

*__deprecated__*: in favor of [versionId](#versionid)

The id for the snapshot.

___

####  versionId

**● versionId**: *`string`*

The id for the snapshot.

___

### CallbackFunction

#### Callable
▸ **__call**(result?: *[T]()*): `void`

A callback function to handle the result.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` result | [T]() |

**Returns:** `void`

## Plugin Variables

When installing `cordova-plugin-ionic` there are a number of variables you can install the plugin with to configure the behavior of the plugin and how
updates are applied to your app by using the `--variable` flag.

Example:
```bash
// use the MIN_BACKGROUND_DURATION variable
cordova plugin add cordova-plugin-ionic --variable MIN_BACKGROUND_DURATION=60 ...
```


### `APP_ID` - `Required`

The `APP_ID` variable sets app in the pro dashboard the plugin should check for updates.
The App ID can be updated at runtime via the [Deploy Pro Client](/docs/pro/deploy/api).

### `CHANNEL_NAME` - `Required`

The `CHANNEL_NAME` variable sets which channel the plugin should check for updates.
The Channel can be updated at runtime via the [configure method](/docs/pro/deploy/api/#configure) of the Deploy Pro Client.

### `UPDATE_METHOD`

`Default: background`

The `UPDATE_METHOD` determines how updates are applied to your app.
When you are installing the Ionic Pro plugin, you have the option to choose which update method to use.
The three options are:

`background` - mode will check for updates when a user first opens your app from a completely closed state
(in the splashscreen) or after a user resumes the app from the background after the [minimum duration](#min_background_duration).
It will download the update in the background while the user is using your app.
The next time they close and open your app, we will apply the updated version.
You can still perform updates yourself and override the update method using the
[Deploy Pro Client](/docs/pro/deploy/api) as well.

`auto` - mode will check for updates when a user first opens your app from a completely closed state (in the splashscreen)
or after a user resumes the app from the background after the [minimum duration](#min_background_duration).
It will then WAIT on the splashscreen until the new update is downloaded, and immediately show the user the new version of the code after the splashscreen.
Using this method essentially forces users to always use the most up to date version when connected to the internet
with the trade off that users may wait on the splashscreen longer before interacting with the app while waiting for an update.
You can still perform updates yourself and override the update method using the
[Deploy Pro Client](/docs/pro/deploy/api) as well.

`none` - will not automatically apply or download updates for you.
Instead you have to manage the entire update process yourself using the [Deploy Pro Client](/docs/pro/deploy/api).
This isn't recommended as if you deploy an update that "breaks" your app and can no longer apply Deploy updates,
you will have to release a native binary in order to fix the issue or the user will have to delete and reinstall your app.
Using the background or auto methods protects you by applying updates in the native layer.

### `MAX_STORE`

`Default: 2`

The `MAX_STORE` variable can be configured to tell the deploy plugin how many updates to keep around locally on the device.
Keeping more versions around locally makes rolling back faster but takes up more room on the device.

### `MIN_BACKGROUND_DURATION`

`New in v5 RC`

`Default: 30`

The `MIN_BACKGROUND_DURATION` variable sets the minimum number of seconds the user needs to put the app in the background before
the plugin considers the app closed and checks for an update on resume like it would on a fresh app open according to the specified
[update method](#update_method).


## Plugin Preferences

### `DisableDeploy`

`Default: false`

Allows to disable deploy updates by adding this preference in the config.xml

```
<preference name="DisableDeploy" value="true" />
```

After adding be sure to run `cordova prepare [platform]` in order for changes to take effect.
