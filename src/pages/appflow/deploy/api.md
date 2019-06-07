---
previousText: 'Channels'
previousUrl: '/docs/appflow/deploy/channels'
nextText: 'Tutorials and Videos'
nextUrl: '/docs/appflow/deploy/tutorials'
---

# Using the Deploy API

<blockquote>
Before you begin using the API you'll need to make sure you've already
<a href="/docs/appflow/quickstart/installation" style="color: #4a8bfc;">installed and configured the plugin.</a>
and you may want to use the <a href="/docs/appflow/deploy/api/#using-the-ionic-pro-client" style="color: #4a8bfc;">Pro Client</a> to make accessing the API easier.
</blockquote>

While the Appflow SDK can handle all of your updates and perform them for you, sometimes you may
want to customize how this works. Some examples of things you may want to do are:

- Allow users to subscribe to different Channels for Beta Features, etc.
- Manage the update process yourself (ex. Download updates on login, Apply updates on logout or Check for updates every 30 minutes)
- Display what Channel the user is connected to

The Pro Client gives you access to everything you need to make these modifications,
and it's recommended that you always use the Pro Client instead of the plugin API directly.


<blockquote>
<h4>Note: Async Await vs. ".then()"</h4>
<p>In all of the examples on this page you'll notice that we use Async/Await.
This automatically resolves promises inline for you and waits to perform the next action.
This is just an alternative to using `.then`. Async/Await just allows your code to be much more legible
(especially when you'd normally be chaining multiple promises) as it's read like a syncronous piece of code.
Here are two ways to write the same piece of code:</p>

```typescript
Pro.deploy.getCurrentVersion().then((versionInfo) => {
  console.log(versionInfo);
})

// is the same as

async getVersionInfo(){
  const versionInfo = await Pro.deploy.getCurrentVersion();
  console.log(versionInfo);
}

```

</blockquote>

### Using the Ionic Pro Client

The Ionic Pro Client gives you access to the Deploy API inside of your app.

You simply need to install the latest version of the Pro Client:

<command-line>
<command-prompt>
npm install @ionic/pro@latest
</command-prompt>
</command-line>

Then you can import it in order to use the Deploy API in your code:
```typescript
import { Pro } from '@ionic/pro';
```

### How To Upgrade from v4 to v5

The following docs are for `v5.x.x` of the Appflow SDK. If you're upgrading from a previous version you can follow
[this guide & tutorial video](/docs/appflow/deploy/tutorials/#upgrading-to-the-new-deploy-plugin).

## Methods

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

▸ **configure**(config: [DeployConfig](#deployconfig)): `Promise`<`void`>

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [DeployConfig](#deployconfig) |  The new configuration for the plugin on this device. |

**Returns:** `Promise`<`void`>

```typescript
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

```typescript
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
//   'currentBuildId' : 'xxxxxxx'
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

```typescript
async performAutomaticUpdate() {
  try {
    const currentVersion = await Pro.deploy.getCurrentVersion();
    const resp = await Pro.deploy.sync({updateMethod: 'auto'});
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

___

###  checkForUpdate

▸ **checkForUpdate**(): `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

*__description__*: Check for available updates for the currently configured app id and channel.

*__since__*: v5.0.0

**Returns:** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)> - An object describing if an update is available.

```typescript
async performManualUpdate() {
  const update = await Pro.deploy.checkForUpdate()
  if (update.available){
    // We have an update!
  }
}
```

___

###  downloadUpdate

▸ **downloadUpdate**(progress?: [CallbackFunction](#callbackfunction)<`number`>): `Promise`<`boolean`>

*__description__*: Download the new files from an available update found by the checkForUpdate method and prepare the update.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`boolean`> - `true` if the available update was successfully downloaded.

```typescript

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

▸ **extractUpdate**(progress?: [CallbackFunction](#callbackfunction)<`number`>): `Promise`<`boolean`>

*__description__*: Extract the files from an update downloaded with the downloadUpdate method to prepare for loading the app.

*__since__*: v5.0.0

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`number`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`boolean`> - `true` if the available update was successfully extracted.

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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

* <b>appId</b> (optional): `undefined` | `string`
</br>The [Ionic Appflow](https://ionicframework.com/docs/appflow/) app id.
* <b>channel</b> (optional): `undefined` | `string`
</br>The [channel](/docs/appflow/deploy/channels) that the plugin should listen for updates on.
* <b>maxVersions</b> (optional): `undefined` | `number`
</br>The number of previous updates to be cached on the device
* <b>minBackgroundDuration</b> (optional): `undefined` | `number`
</br>The number of seconds the app should be in the background for before the plugin considers it closed and checks for an updated on resume of the app.
* <b>updateMethod</b> (optional): `undefined` | `background | none | auto`
</br>The update method the app should use when checking for available updates

___

### CheckForUpdateResponse

#### Properties

* <b>available</b>: `boolean`
</br>Whether or not an update is available.
* <b>incompatibleUpdateAvailable</b>: `boolean`
</br>Whether or not an update that is not compatible with this device is available.
* <b>snapshot</b> (optional): `undefined` | `string`
</br>The id of the snapshot, if available.
* <b>build</b> (optional): `undefined` | `string`
</br>The id of the build, if available.

___

### SyncOptions

#### Properties
* <b>updateMethod</b>: `'background' | 'auto'`
</br>The update method to use when applying an update if available. This will override the default method the plugin was configured with temporarily.

___

### ConfigurationInfo

#### Properties
* <b>binaryVersionName</b>: `string`
</br>The versionName on Android or CFBundleShortVersionString on iOS this is the end user readable version listed on the stores.
* <b>binaryVersionCode</b>: `string (iOS) | number (Android)`
</br>The versionCode on Android or CFBundleVersion on iOS this should be changed every time you do a new build.
* <b>channel</b>: `string`
</br>The channel name the device is currently configured to check for updates on.
* <b>disabled</b>: `boolean`
</br>Whether the deploy updates are disabled or not.
* <b>updateMethod</b>: `'none' | 'auto' | 'background'`
</br>The currently configured updateMethod for the plugin.
* <b>maxVersions</b>: `number`
</br>The maximum number of updates to be stored locally on the device.
* <b>minBackgroundDuration</b>: `number`
</br>The number of seconds the app needs to be in the background before the plugin considers it closed for the purposes of fetching and applying a new update.
* <b>currentVersionId</b>: `string | undefined`
</br>The version id of the currently applied update or `undefined` if none is applied.
* <b>currentBuildId</b>: `string | undefined`
</br>The build id of the currently applied update or `undefined` if none is applied.



___

### SnapshotInfo

#### Properties
* <b>binaryVersion</b>: `string`
</br>The binary version the snapshot was downloaded for.
* <b>channel</b>: `string`
</br>The channel that the snapshot was downloaded for..
* <b>versionId</b>: `string`
</br>The id for the snapshot.

___

### CallbackFunction

#### Callable
▸ **__call**(result?: *T*): `void`

A callback function to handle the result.

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` result | T |

**Returns:** `void`

## Plugin Variables

When installing the Appflow SDK (`cordova-plugin-ionic`) there are a number of variables you can install
the plugin with to configure the behavior of the plugin and how updates are applied to your app by
using the `--variable` flag.

Example:
<command-line>
<command-prompt># use the MIN_BACKGROUND_DURATION variable</command-prompt>
<command-prompt>cordova plugin add cordova-plugin-ionic --variable MIN_BACKGROUND_DURATION=60 ...</command-prompt>
</command-line>


### APP_ID - Required

The `APP_ID` variable sets app in the pro dashboard the plugin should check for updates.
The App ID can be updated at runtime via the [configure method](/docs/appflow/deploy/api#configure).

### CHANNEL_NAME - Required

The `CHANNEL_NAME` variable sets which channel the plugin should check for updates.
The Channel can be updated at runtime via the [configure method](/docs/pro/deploy/api/#configure) of the Deploy Pro Client.

### UPDATE_METHOD

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

### MAX_STORE

`Default: 2`

The `MAX_STORE` variable can be configured to tell the deploy plugin how many updates to keep around locally on the device.
Keeping more versions around locally makes rolling back faster but takes up more room on the device.

### MIN_BACKGROUND_DURATION

`New in v5 RC`

`Default: 30`

The `MIN_BACKGROUND_DURATION` variable sets the minimum number of seconds the user needs to put the app in the background before
the plugin considers the app closed and checks for an update on resume like it would on a fresh app open according to the specified
[update method](#update_method).


## Plugin Preferences

### DisableDeploy

`Default: false`

Allows to disable deploy updates by adding this preference in the config.xml

```
<preference name="DisableDeploy" value="true" />
```

After adding be sure to run `cordova prepare [platform]` in order for changes to take effect.
