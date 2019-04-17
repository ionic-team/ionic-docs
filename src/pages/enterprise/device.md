---
title: Device
template: enterprise-plugin
version: 2.0.2
minor: 2.0.X
---



## Index

### Classes

* [Device](#device)

---

## Classes

<a id="device"></a>

###  Device

**Device**: 

*__name__*: Device

*__description__*: Access information about the underlying device and platform.

*__usage__*:
 ```typescript
import { Device } from '@ionic-enterprise/device/ngx';

constructor(private device: Device) { }

...

console.log('Device UUID is: ' + this.device.uuid);
```

<a id="device.cordova"></a>

###  cordova

**● cordova**: *`string`*

Get the version of Cordova running on the device.

___
<a id="device.isvirtual"></a>

###  isVirtual

**● isVirtual**: *`boolean`*

Whether the device is running on a simulator.

___
<a id="device.manufacturer"></a>

###  manufacturer

**● manufacturer**: *`string`*

Get the device's manufacturer.

___
<a id="device.model"></a>

###  model

**● model**: *`string`*

The device.model returns the name of the device's model or product. The value is set by the device manufacturer and may be different across versions of the same product.

___
<a id="device.platform"></a>

###  platform

**● platform**: *`string`*

Get the device's operating system name.

___
<a id="device.serial"></a>

###  serial

**● serial**: *`string`*

Get the device hardware serial number.

___
<a id="device.uuid"></a>

###  uuid

**● uuid**: *`string`*

Get the device's Universally Unique Identifier (UUID).

___
<a id="device.version"></a>

###  version

**● version**: *`string`*

Get the operating system version.

___
<a id="device.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="device.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="device.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="device.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="device.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="device.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="device.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="device.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="device.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="device.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="device.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="device.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

