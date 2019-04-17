---
title: Splashscreen
template: enterprise-plugin
version: 5.0.2
minor: 5.0.X
---



## Index

### Classes

* [SplashScreen](#splashscreen)

---

## Classes

<a id="splashscreen"></a>

###  SplashScreen

**SplashScreen**: 

*__name__*: Splash Screen

*__description__*: This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.

*__usage__*:
 ```typescript
import { SplashScreen } from '@ionic-enterprise/splashscreen/ngx';

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
```

<a id="splashscreen.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="splashscreen.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="splashscreen.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="splashscreen.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="splashscreen.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="splashscreen.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="splashscreen.hide"></a>

###  hide

▸ **hide**(): `void`

Hides the splashscreen

**Returns:** `void`

___
<a id="splashscreen.show"></a>

###  show

▸ **show**(): `void`

Shows the splashscreen

**Returns:** `void`

___
<a id="splashscreen.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="splashscreen.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="splashscreen.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="splashscreen.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="splashscreen.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="splashscreen.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

