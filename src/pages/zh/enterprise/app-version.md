---
title: 应用版本
template: 企业插件
version: 0.1.9
minor: 0.1.X
---

应用版本插件提供权限访问元数据信息，比如App名称，包名，版本号。

<native-ent-install plugin-id="app-version" variables=""></native-ent-install>

## 索引

### 类

* [应用版本](#appversion)

* * *

## 类

<a id="appversion"></a>

### AppVersion

***使用***:

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

返回应用名称，比如"My Awesome App"

**返回:** `Promise`<`string`>

* * *

<a id="appversion.getpackagename"></a>

### getPackageName

▸ **getPackageName**(): `Promise`<`string`>

返回应用包名称, 比如"com.example.myawesomeapp"

**返回:** `Promise`<`string`>

* * *

<a id="appversion.getversioncode"></a>

### getVersionCode

▸ **getVersionCode**(): `Promise`<`string` \| `number`>

返回应用构建版本Code. iOS的构建版本Code是这样，比如"1.6095", Android的构建版本号来自于构建生成的字符串, 比如"10203", 生成版本Code "1.2.3"

**返回:** `Promise`<`string` \| `number`>

* * *

<a id="appversion.getversionnumber"></a>

### getVersionNumber

▸ **getVersionNumber**(): `Promise`<`string`>

返回应用版本号,比如"1.2.3"

**返回:** `Promise`<`string`>

* * *

* * *