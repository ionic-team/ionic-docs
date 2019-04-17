---
title: Vibration
template: enterprise-plugin
version: 3.1.0
minor: 3.1.X
---



## Index

### Classes

* [Vibration](#vibration)

---

## Classes

<a id="vibration"></a>

###  Vibration

**Vibration**: 

*__name__*: Vibration

*__description__*: Vibrates the device

*__usage__*:
 ```typescript
import { Vibration } from '@ionic-enterprise/vibration/ngx';

constructor(private vibration: Vibration) { }

...

// Vibrate the device for a second
// Duration is ignored on iOS.
this.vibration.vibrate(1000);

// Vibrate 2 seconds
// Pause for 1 second
// Vibrate for 2 seconds
// Patterns work on Android and Windows only
this.vibration.vibrate([2000,1000,2000]);

// Stop any current vibrations immediately
// Works on Android and Windows only
this.vibration.vibrate(0);
```

<a id="vibration.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="vibration.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="vibration.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="vibration.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="vibration.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="vibration.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="vibration.vibrate"></a>

###  vibrate

▸ **vibrate**(time: *`number` \| `number`[]*): `void`

Vibrates the device for given amount of time.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| time | `number` \| `number`[] |  Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately. |

**Returns:** `void`

___
<a id="vibration.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="vibration.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="vibration.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="vibration.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="vibration.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="vibration.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

