# Deploy API

## v4 Methods

* [init](#init)
* [checkAndApply](#checkandapply)
* [check](#check)
* [download](#download)
* [extract](#extract)
* [redirect](#redirect)
* [info](#info)
* [getVersions](#getversions)
* [deleteVersion](#deleteversion)

---

###  init

▸ **init**(config: *[DeployConfig](#deployconfig)*): `Promise`<`void`>

*__description__*: Update the default configuration for the plugin on the current device. The new configuration will be persisted across app close and binary updates.

*__deprecated__*: in v4.2.0 in favor of <a href="#configure" target="_blank">configure</a>

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [DeployConfig](#deployconfig) |  The new configuration for the plugin on this device. |

**Returns:** `Promise`<`void`>

```js
async initDeploy() {
  const config = {
    'appId': 'YOUR_APP_ID',
    'channel': 'CHANNEL_NAME'
  }
  await Pro.deploy.init(config);
}
```

___

###  checkAndApply

▸ **checkAndApply**(redirect: `boolean`, downloadProgressFunc: [CallbackFunction](#callbackfunction), extractProgressFunc: [CallbackFunction](#callbackfunction)): `Promise`<`string`>

*__description__*: This function performs an entire standard check, download, extract, and reload cycle rather than having to program it yourself. This should be used most of the time unless you need to customize the flow.

*__deprecated__*: in v4.2.0 in favor of <a href="#sync" target="_blank">sync</a>

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| redirect | `boolean` |  Whether or not to reload the app immediately if an update is available. |
| downloadProgressFunc | [CallbackFunction](#callbackfunction) |  A function which will recieve calls with a `number` representing the progress of the download. |
| extractProgressFunc | [CallbackFunction](#callbackfunction) |  A function which will recieve calls with a `number` representing the progress of the extract. |

**Returns:** `Promise`<[SnapshotInfo](#snapshotinfo)> - The info of the currently applied update

```js
async performAutomaticUpdate() {
    try {
      const resp = await Pro.deploy.checkAndApply(true, function(progress){
          this.downloadProgress = progress;
      });

      if (resp.update){
        // We found an update, and are in process of redirecting you since you put true!
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

###  check

▸ **check**(): `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

*__description__*: Check for available updates for the currently configured app id and channel.

*__deprecated__*: in v4.2.0 in favor of <a href="#checkforupdate" target="_blank">checkForUpdate</a>

**Returns:** `Promise`<[CheckForUpdateResponse](#checkforupdateresponse)>

```js
async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    // We have an update!
  }
}
```

___

###  download

▸ **download**(progress?: *[CallbackFunction](#callbackfunction)<`string`>*): `Promise`<`string`>

*__description__*: Download the new files from an available update found by the checkForUpdate method and prepare the update.

*__deprecated__*: in v4.2.0 in favor of <a href="#downloadupdate" target="_blank">downloadUpdate</a>

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

```js
public downloadProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
  }
}
```

___

###  extract

▸ **extractUpdate**(progress?: *[CallbackFunction](#callbackfunction)<`string`>*): `Promise`<`string`>

*__description__*: Extract the files from an update downloaded with the downloadUpdate method to prepare for loading the app.

*__deprecated__*: in v4.2.0 in favor of <a href="#extractupdate" target="_blank">extractUpdate</a>

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` progress | [CallbackFunction](#callbackfunction)<`string`> |  A progress callback function which will be called with a number representing the percent of completion of the download and prepare. |

**Returns:** `Promise`<`string`>

```js
public downloadProgress = 0;
public extractProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;
    this.extractProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
    await Pro.deploy.extract((progress) => {
      this.extractProgress = progress;
    })
  }
}
```


___

###  redirect

▸ **redirect**(): `Promise`<`string`>

*__description__*: Reload the app if a more recent version of the app is available.

*__deprecated__*: in v4.2.0 in favor of <a href="#reloadapp" target="_blank">reloadApp</a>

**Returns:** `Promise`<`string`>

```js
public downloadProgress = 0;
public extractProgress = 0;

async performManualUpdate() {
  const haveUpdate = await Pro.deploy.check()
  if (haveUpdate){
    this.downloadProgress = 0;
    this.extractProgress = 0;

    await Pro.deploy.download((progress) => {
      this.downloadProgress = progress;
    })
    await Pro.deploy.extract((progress) => {
      this.extractProgress = progress;
    })
    await Pro.deploy.redirect();
  }
}
```

___

###  info

▸ **info**(): `Promise`<`string`>

*__description__*: Get the versionId of the currently deployed update.

*__deprecated__*: in v4.2.0 in favor of <a href="#getconfiguration" target="_blank">getConfiguration</a>

**Returns:** `Promise`<`string`>

```js
const info = await Pro.deploy.info()
console.log(info)
// {
//   'deploy_uuid': 'UUID_OF_ACTIVE_CODE',
//   'channel': 'CHANNEL_NAME',
//   'binary_version': 'X.X.X'
// }
```

___

###  getVersions

▸ **getVersions**(): `Promise`<`string[]`>

*__description__*: Get a list of the snapshots available on the device.

*__deprecated__*: in v4.2.0 in favor of <a href="#getavailableversions" target="_blank">getAvailableVersions</a>

**Returns:** `Promise`<`string[]`>

```js
async checkVersions() {
  const versions = await Pro.deploy.getVersions();
  console.log(versions);
  // ['UUID', 'UUID2', 'UUID3']
}
```

___

###  deleteVersion

▸ **deleteVersion**(versionId: *`string`*): `Promise`<`string`>

*__description__*: Remove the files specific to a snapshot from the device.

*__deprecated__*: in v4.2.0 in favor of <a href="#deleteversionbyid" target="_blank">deleteVersionById</a>

**Parameters:**

| Param | Type |
| ------ | ------ |
| versionId | `string` |

**Returns:** `Promise`<`string`>

```js
async deleteVersion() {
  const versions = await Pro.deploy.getVersions();
  Pro.deploy.deleteVersion(versions[0]);
}
```

___

<!-- END v4 API -->

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
