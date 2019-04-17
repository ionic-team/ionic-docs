---
title: Clipboard
template: enterprise-plugin
version: 1.2.0
minor: 1.2.X
---



## Index

### Classes

* [Clipboard](#clipboard)

---

## Classes

<a id="clipboard"></a>

###  Clipboard

**Clipboard**: 

*__name__*: Clipboard

*__description__*: Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.

*__usage__*:
 ```typescript
import { Clipboard } from '@ionic-enterprise/clipboard/ngx';

constructor(private clipboard: Clipboard) { }

...

this.clipboard.copy('Hello world');

this.clipboard.paste().then(
   (resolve: string) => {
      alert(resolve);
    },
    (reject: string) => {
      alert('Error: ' + reject);
    }
  );

this.clipboard.clear();
```

<a id="clipboard.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="clipboard.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="clipboard.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="clipboard.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="clipboard.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="clipboard.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="clipboard.clear"></a>

###  clear

▸ **clear**(): `Promise`<`any`>

Clear the text stored in clipboard

**Returns:** `Promise`<`any`>
Returns a promise after the text has been cleaned

___
<a id="clipboard.copy"></a>

###  copy

▸ **copy**(text: *`string`*): `Promise`<`any`>

Copies the given text

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  Text that gets copied on the system clipboard |

**Returns:** `Promise`<`any`>
Returns a promise after the text has been copied

___
<a id="clipboard.paste"></a>

###  paste

▸ **paste**(): `Promise`<`any`>

Pastes the text stored in clipboard

**Returns:** `Promise`<`any`>
Returns a promise after the text has been pasted

___
<a id="clipboard.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="clipboard.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="clipboard.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="clipboard.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="clipboard.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="clipboard.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

