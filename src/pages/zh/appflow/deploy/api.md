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

**参数**

| 名称                          | 类型（Type）                      | 默认值 | 描述             |
| --------------------------- | ----------------------------- | --- | -------------- |
| `Default value` syncOptions | [ISyncOptions](#isyncoptions) | {}  | (可选) 应用程序更新覆盖。 |


**返回：** `Promise`<[ISnapshotIn](#isnapshotinfo) | `undefined`> 获取有关当前部署的更新的信息，如果没有应用更新，则获取未定义的更新。

* * *

* * *

## 接口

<a id="callbackfunction"></a>

### 回调函数

▸ **__call**(result?: *[T]()*): `void`

处理result的回调函数。

**参数**

| 名称                | 类型（Type） |
| ----------------- | -------- |
| `Optional` result | [T]()    |


**返回：** `void`

* * *

<a id="checkforupdateresponse"></a>

### CheckForUpdateResponse

**CheckForUpdateResponse**:

可用更新响应对象的描述。

<a id="checkforupdateresponse.available"></a>

### available

**● available**: *`boolean`*

是否可以更新。

* * *

<a id="checkforupdateresponse.build"></a>

### `<Optional>` build

**● build**: *`undefined` | `string`*

如果可用的话构建id。

* * *

<a id="checkforupdateresponse.compatible"></a>

### compatible

**● compatible**: *`boolean`*

与v5以来的可用版本等效，因此可以忽略它，而使用可用版本

***已废弃***:

* * *

<a id="checkforupdateresponse.incompatibleupdateavailable"></a>

### `<Optional>` incompatibleUpdateAvailable

**● incompatibleUpdateAvailable**: *`undefined` | `false` | `true`*

是否存在与该设备不相容的更新。

* * *

<a id="checkforupdateresponse.partial"></a>

### partial

**● partial**: *`false`*

更新是否是部分更新的旧版本。 这将永远是false，可以忽略

***已废弃***:

* * *

<a id="checkforupdateresponse.snapshot"></a>

### `<Optional>` snapshot

**● snapshot**: *`undefined` \| `string`*

如果可用，快照的 id。

* * *

<a id="checkforupdateresponse.url"></a>

### `<Optional>` url

**● url**: *`undefined` \| `string`*

获取更新文件manifest的 url。

* * *

* * *

<a id="iappinfo"></a>

### IAppInfo

**IAppInfo**:

应用的信息

<a id="iappinfo.binaryversioncode"></a>

### binaryVersionCode

**● binaryVersionCode**: *`string` | `number`*

Android上的versionCode或iOS上的CFBundleVersion应该在每次执行新的构建调试或其他操作时更改。

* * *

<a id="iappinfo.binaryversionname"></a>

### binaryVersionName

**● binaryVersionName**: *`string`*

Android上的versionName或iOS上的CFBundleShortVersionString这是应用商店中列出的最终用户可读版本。

* * *

<a id="iappinfo.bundlename"></a>

### bundleName

**● bundleName**: *`string`*

Bundle名称。

* * *

<a id="iappinfo.bundleversion"></a>

### bundleVersion

**● bundleVersion**: *`string`*

***已废弃***: Android上的versionName或iOS上的CFBundleShortVersionString这是应用商店中列出的最终用户可读版本。

* * *

<a id="iappinfo.datadirectory"></a>

### dataDirectory

**● dataDirectory**: *`string`*

存储快照的目录

* * *

<a id="iappinfo.device"></a>

### device

**● device**: *`string`*

生成的设备 ID (不是本地设备 ID)

* * *

<a id="iappinfo.platform"></a>

### platform

**● platform**: *"ios" | "android"*

当前应用程序安装的平台。

* * *

<a id="iappinfo.platformversion"></a>

### platformVersion

**● platformVersion**: *`string`*

本地平台的版本。

* * *

<a id="iappinfo.version"></a>

### version

**● version**: *`string`*

***已废弃***: Android上的versionCode或iOS上的CFBundleVersion应该在每次执行新的构建调试或其他操作时更改。

* * *

* * *

<a id="icurrentconfig"></a>

### ICurrentConfig

**ICurrentConfig**:

设备上部署插件当前配置。

<a id="icurrentconfig.appid"></a>

### appId

**● appId**: *`string`*

[Ionic Pro](https://ionicframework.com/docs/pro/) app id。

* * *

<a id="icurrentconfig.binaryversion"></a>

### binaryVersion

**● binaryVersion**: *`string`*

***已废弃***: Android上原生bundle versionName的二进制版本或iOS上CFBundleShortVersionString的二进制版本都不支持versionName

* * *

<a id="icurrentconfig.binaryversioncode"></a>

### binaryVersionCode

**● binaryVersionCode**: *`string`*

Android上原生bundle versionCode或iOS上CFBundleVersion的构建版本代码

* * *

<a id="icurrentconfig.binaryversionname"></a>

### binaryVersionName

**● binaryVersionName**: *`string`*

Android上原生bundle versionName或iOS上的CFBundleShortVersionString的二进制版本

* * *

<a id="icurrentconfig.channel"></a>

### channel

**● channel**: *`string`*

[channel](https://ionicframework.com/docs/pro/deploy/channels) 插件应该监听更新。

* * *

<a id="icurrentconfig.currentbuildid"></a>

### `<Optional>` currentBuildId

**● currentBuildId**: *`undefined` | `string`*

当前应用程序构建的id，如果没有应用，则为未定义的id。

* * *

<a id="icurrentconfig.currentversionid"></a>

### `<Optional>` currentVersionId

**● currentVersionId**: *`undefined` | `string`*

当前应用程序构建的id，如果没有应用，则为未定义的id。

* * *

<a id="icurrentconfig.disabled"></a>

### disabled

**● disabled**: *`boolean`*

用户是否禁用部署更新。

* * *

<a id="icurrentconfig.host"></a>

### host

**● host**: *`string`*

此插件的host API设置是为了检查更新。

* * *

<a id="icurrentconfig.maxversions"></a>

### maxVersions

**● maxVersions**: *`number`*

设备上存储的最大更新数量。

* * *

<a id="icurrentconfig.minbackgroundduration"></a>

### minBackgroundDuration

**● minBackgroundDuration**: *`number`*

为了获取和应用新的更新，插件认为应用程序已经关闭，在此之前，应用程序需要在后台停留的秒数。

* * *

<a id="icurrentconfig.updatemethod"></a>

### updateMethod

**● updateMethod**: *"none" | "auto" | "background"*

插件当前配置的updateMethod。

* * *

* * *

<a id="ideployconfig"></a>

### IDeployConfig

**IDeployConfig**:

设备上部署插件配置。

<a id="ideployconfig.appid"></a>

### `<Optional>` appId

**● appId**: *`undefined` | `string`*

[Ionic](https://ionicframework.com/docs/appflow/) app id.

* * *

<a id="ideployconfig.channel"></a>

### `<Optional>` channel

**● channel**: *`undefined` | `string`*

[channel](https://ionicframework.com/docs/pro/deploy/channels) 插件应该监听更新。

* * *

<a id="ideployconfig.debug"></a>

### `<Optional>` debug

**● debug**: *`undefined` | `false` | `true`*

是否应用程序应该在debug模式中

* * *

<a id="ideployconfig.maxversions"></a>

### `<Optional>` maxVersions

**● maxVersions**: *`undefined` | `number`*

设备上缓存的之前更新的次数

* * *

<a id="ideployconfig.minbackgroundduration"></a>

### `<Optional>` minBackgroundDuration

**● minBackgroundDuration**: *`undefined` | `number`*

在插件认为关闭并检查更新的应用程序之前，应用程序应该处于后台的秒数。

* * *

<a id="ideployconfig.updatemethod"></a>

### `<Optional>` updateMethod

**● updateMethod**: *"none" | "auto" | "background"*

检查可用更新时应使用的更新方法

* * *

* * *

<a id="isnapshotinfo"></a>

### ISnapshotInfo

**ISnapshotInfo**:

快照的信息

<a id="isnapshotinfo.binaryversion"></a>

### binaryVersion

**● binaryVersion**: *`string`*

***已废弃***：下载快照的二进制版本。 Android上的versionName或iOS上的CFBundleShortVersionString这是应用商店中列出的最终用户可读版本。

* * *

<a id="isnapshotinfo.binaryversioncode"></a>

### binaryVersionCode

**● binaryVersionCode**: *`string`*

下载快照的二进制版本构建代码。 Android上的versionCode或iOS上的CFBundleVersion应该在每次执行新的构建调试或其他操作时更改。

* * *

<a id="isnapshotinfo.binaryversionname"></a>

### binaryVersionName

**● binaryVersionName**: *`string`*

该快照已下载二进制版本名称。 Android上的versionName或iOS上的CFBundleShortVersionString这是应用商店中列出的最终用户可读版本。

* * *

<a id="isnapshotinfo.binary_version"></a>

### binary_version

**● binary_version**: *`string`*

***已废弃***: 支持的 [二进制版本](#binaryversion)

快照下载的二进制版本。

* * *

<a id="isnapshotinfo.buildid"></a>

### buildId

**● buildId**: *`string`*

快照的 id。

* * *

<a id="isnapshotinfo.channel"></a>

### channel

**● channel**: *`string`*

该快照下载的channel..

* * *

<a id="isnapshotinfo.deploy_uuid"></a>

### deploy_uuid

**● deploy_uuid**: *`string`*

***已废弃***: 支持的 [版本ID](#versionid)

快照的 id。

* * *

<a id="isnapshotinfo.versionid"></a>

### versionId

**● versionId**: *`string`*

快照的 id。

* * *

* * *

<a id="isyncoptions"></a>

### ISyncOptions

**ISyncOptions**:

`同步`配置选项

<a id="isyncoptions.updatemethod"></a>

### `<Optional>` updateMethod

**● updateMethod**: *"background" | "auto"*

更新是否应该立即应用，还是在下一个应用程序启动时应用。

* * *

## 插件变量

部署插件使用变量来配置插件的行为。 您可以在使用标记添加插件时设置这些值 (如果使用 `ionic deploy
add` 命令) 或使用 cordova 变量 (如果使用 `ionic cordova plugin add`)。 可用的变量如下：

### App ID

* **必需**
* 要在Appflow信息中心中接收应用程序更新，必须提供应用程序ID。
* `ionic deploy add --app-id=abcdef12`
* `ionic cordova plugin add cordova-plugin-ionic --variable APP_ID=abcdef12`

### Channel Name

* **必需**
* The channel name is required to receive updates for an app in the Appflow dashboard and indicates the channel from which the device will receive updates. 注意，对于高级用例，也可以在运行时以编程方式进行更新。
* `ionic deploy add --channel-name=Production`
* `ionic cordova plugin add cordova-plugin-ionic --variable CHANNEL_NAME=Production`

### Update Method

* **默认值：** `background`
* Update method确定应用程序如何检查和应用更新。 可选值有： 
  * `background` (推荐)- 应用程序将在后台检查更新，而不延长显示启动画面的时间。 如果更新可用，用户使用旧版本时将下载和安装。 下一次启动应用程序或应用程序在后台处于指定的时间`min-background-duration` 新的版本将被载入。
  * `自动` - 该应用程序将通过延长下载任何可用更新时启动画面的时间来延迟应用程序的启动。 一旦更新可用，将会立即显示新版本，并隐藏启动画面。 我们一般不推荐这种模式，因为它会导致启动画面显示很长时间，特别是当用户的网络连接很差时。
  * `none` - 设置update method为 `none` 表示你将手动执行所有更新的逻辑，插件将不会自动检查和应用更新。
* `ionic deploy add --update-method=background`
* `ionic cordova plugin add cordova-plugin-ionic --variable UPDATE_METHOD=background`

### Max Versions

* **默认值：** `2`
* 这将告诉插件它应该在设备上保持的先前更新的版本号，以便在需要时加速回滚过程。
* `ionic deploy add --max-versions=2`
* `ionic cordova plugin add cordova-plugin-ionic --variable MAX_STORE=2`

### Min Background Duration

* **默认值：** `30`
* 这告诉插件程序需要在后台运行多少秒才能被认为是“关闭”的。 如果应用程序在后台运行了至少这段时间，插件将根据更新方法检查并应用更新，就好像应用程序是从完全关闭状态打开的一样。 这有助于触发更新，即使用户从未完全关闭应用程序，但也允许他们在短时间内切换到另一个应用程序或密码管理器，而无需触发更新。
* `ionic deploy add --min-background-duration=60`
* `ionic cordova plugin add cordova-plugin-ionic --variable MIN_BACKGROUND_DURATION=60`

* * *

## 更新日志

## 5.4.4

* 解决网络请求过多可能引发并引发业绩问题的问题。

## 5.4.3

* 修复那些类型会导致不兼容Ionic v3 (Typescript 2.x)

### 5.4.0

* 添加Deploy API引用
* 移除了依赖 `cordova-plugin-file`

### 5.3.0

* 添加了一个“incompatibleUpdateAvailable”属性到“CheckForUpdateResponse” (\[#204\] (https://github.com/ionic-back/cordova-pluginc-ionic/lapp/204))
* “ConfigurationInfo”现在包含“BuildId”以及“SnapshotId” (\[#204\] (https://github.com/ionic-back/cordova-pluginc-ionic/lapp/204))

### 5.2.9

* 从getAppInfo函数中获取dataDirectory([#197](https://github.com/ionic-team/cordova-plugin-ionic/pull/197))
* 添加支持浏览器平台的代理服务器 ([#199](https://github.com/ionic-team/cordova-plugin-ionic/pull/199))

### 5.2.8

* 修复IDeployConfig类型错误 ([#196](https://github.com/ionic-team/cordova-plugin-ionic/pull/196))

### 5.2.7

* 更改钩子到运行before_prepare，并使之变得异步 ([#178](https://github.com/ionic-team/cordova-plugin-ionic/pull/178))
* 修复错误，新的二进制更新将会加载一个较早的缓存应用版本 ([#179)](https://github.com/ionic-team/cordova-plugin-ionic/issues/179))

### 5.2.6

* 检查Capacitor和switch文件夹 ([#164](https://github.com/ionic-team/cordova-plugin-ionic/pull/164))
* 删除未使用的导入 ([#163](https://github.com/ionic-team/cordova-plugin-ionic/pull/163))
* 延迟设备准备好直到进行检查 ([#161](https://github.com/ionic-team/cordova-plugin-ionic/pull/161))

### 5.2.5

* 修复了在getConfiguation调用中没有返回binaryVersionName和binaryVersionCode的错误
* 修正了下载更新进度回调从0到50而不是100的错误([#156](https://github.com/ionic-team/cordova-plugin-ionic/pull/156]))
* 在检查更新之前检查设备是否是在线 ([#154](https://github.com/ionic-team/cordova-plugin-ionic/pull/154))

### 5.2.4

* 更新检查设备以确保准确 ([#148](https://github.com/ionic-team/cordova-plugin-ionic/pull/148))

### 5.2.3

* 修正了AndroidManifest.xml语法的错误，因为我们的发布脚本一直破坏它

### 5.2.2

* 修复 AndroidManist.xml 语法的错误

### 5.2.1

* 添加 ACCESS_NETWORK_STATE 权限，以便使navigator.onLine在 android 上工作

### 5.2.0

* 添加 `DisableDeploy`Cordova 首选项，允许禁用插件的
* 需要 `cordova-plugin-ionic-webview@^2.1.4` 支持`DisableDeploy` 正常工作

### 5.1.6

* 修正了一个错误，没有更新方法策略，可能导致后台更新时，从后台恢复的应用程序

### 5.0.6

* 修正了一个版本重新引导的错误，可能使一些初始重定向需要15秒。

### 5.0.5

* 更新下载后更新后的二进制版本已经改变，在此情况下重建一个部署目录。

### 5.0.0

* 发布！