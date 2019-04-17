---
title: Statusbar
template: enterprise-plugin
version: 2.4.2
minor: 2.4.X
---



## Index

### Classes

* [StatusBar](#statusbar)

---

## Classes

<a id="statusbar"></a>

###  StatusBar

**StatusBar**: 

*__name__*: Status Bar

*__description__*: Manage the appearance of the native status bar.

Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).

*__usage__*:
 ```typescript
import { StatusBar } from '@ionic-enterprise/statusbar/ngx';

constructor(private statusBar: StatusBar) { }

...

// let status bar overlay webview
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.backgroundColorByHexString('#ffffff');
```

<a id="statusbar.isvisible"></a>

###  isVisible

**● isVisible**: *`boolean`*

Whether the StatusBar is currently visible or not.

___
<a id="statusbar.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="statusbar.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="statusbar.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="statusbar.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="statusbar.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="statusbar.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="statusbar.backgroundcolorbyhexstring"></a>

###  backgroundColorByHexString

▸ **backgroundColorByHexString**(hexString: *`string`*): `void`

Set the status bar to a specific hex color (CSS shorthand supported!).

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hexString | `string` |  The hex value of the color. |

**Returns:** `void`

___
<a id="statusbar.backgroundcolorbyname"></a>

###  backgroundColorByName

▸ **backgroundColorByName**(colorName: *`string`*): `void`

Set the status bar to a specific named color. Valid options: black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| colorName | `string` |  The name of the color (from above) |

**Returns:** `void`

___
<a id="statusbar.hide"></a>

###  hide

▸ **hide**(): `void`

Hide the StatusBar

**Returns:** `void`

___
<a id="statusbar.overlayswebview"></a>

###  overlaysWebView

▸ **overlaysWebView**(doesOverlay: *`boolean`*): `void`

Set whether the status bar overlays the main app view. The default is true.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| doesOverlay | `boolean` |  Whether the status bar overlays the main app view. |

**Returns:** `void`

___
<a id="statusbar.show"></a>

###  show

▸ **show**(): `void`

Show the StatusBar

**Returns:** `void`

___
<a id="statusbar.styleblackopaque"></a>

###  styleBlackOpaque

▸ **styleBlackOpaque**(): `void`

Use the blackOpaque statusbar (light text, for dark backgrounds).

**Returns:** `void`

___
<a id="statusbar.styleblacktranslucent"></a>

###  styleBlackTranslucent

▸ **styleBlackTranslucent**(): `void`

Use the blackTranslucent statusbar (light text, for dark backgrounds).

**Returns:** `void`

___
<a id="statusbar.styledefault"></a>

###  styleDefault

▸ **styleDefault**(): `void`

Use the default statusbar (dark text, for light backgrounds).

**Returns:** `void`

___
<a id="statusbar.stylelightcontent"></a>

###  styleLightContent

▸ **styleLightContent**(): `void`

Use the lightContent statusbar (light text, for dark backgrounds).

**Returns:** `void`

___
<a id="statusbar.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="statusbar.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="statusbar.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="statusbar.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="statusbar.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="statusbar.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

