---
title: Screen Orientation
template: enterprise-plugin
version: 3.0.1
minor: 3.0.X
---



## Index

### Classes

* [ScreenOrientation](#screenorientation)

---

## Classes

<a id="screenorientation"></a>

###  ScreenOrientation

**ScreenOrientation**: 

*__name__*: Screen Orientation

*__description__*: Cordova plugin to set/lock the screen orientation in a common way.

Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).

*__usage__*:
 ```typescript
import { ScreenOrientation } from '@ionic-enterprise/screen-orientation/ngx';

constructor(private screenOrientation: ScreenOrientation) { }

...

// get current
console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

// set to landscape
this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// allow user rotate
this.screenOrientation.unlock();

// detect orientation changes
this.screenOrientation.onChange().subscribe(
   () => {
       console.log("Orientation Changed");
   }
);

```

*__advanced__*: Accepted orientation values:

Value

Description

portrait-primary

The orientation is in the primary portrait mode.

portrait-secondary

The orientation is in the secondary portrait mode.

landscape-primary

The orientation is in the primary landscape mode.

landscape-secondary

The orientation is in the secondary landscape mode.

portrait

The orientation is either portrait-primary or portrait-secondary (sensor).

landscape

The orientation is either landscape-primary or landscape-secondary (sensor).

<a id="screenorientation.orientations"></a>

###  ORIENTATIONS

**● ORIENTATIONS**: *`object`*

Convenience enum for possible orientations

#### Type declaration

 ANY: `string`

 LANDSCAPE: `string`

 LANDSCAPE_PRIMARY: `string`

 LANDSCAPE_SECONDARY: `string`

 PORTRAIT: `string`

 PORTRAIT_PRIMARY: `string`

 PORTRAIT_SECONDARY: `string`

___
<a id="screenorientation.type"></a>

###  type

**● type**: *`string`*

Get the current orientation of the device.

___
<a id="screenorientation.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="screenorientation.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="screenorientation.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="screenorientation.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="screenorientation.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="screenorientation.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="screenorientation.lock"></a>

###  lock

▸ **lock**(orientation: *`string`*): `Promise`<`any`>

Lock the orientation to the passed value. See below for accepted values

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| orientation | `string` |  The orientation which should be locked. Accepted values see table above. |

**Returns:** `Promise`<`any`>

___
<a id="screenorientation.onchange"></a>

###  onChange

▸ **onChange**(): `Observable`<`void`>

Listen to orientation change event

**Returns:** `Observable`<`void`>

___
<a id="screenorientation.unlock"></a>

###  unlock

▸ **unlock**(): `void`

Unlock and allow all orientations.

**Returns:** `void`

___
<a id="screenorientation.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="screenorientation.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="screenorientation.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="screenorientation.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="screenorientation.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="screenorientation.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

