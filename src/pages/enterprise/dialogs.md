---
title: Dialogs
template: enterprise-plugin
version: 2.0.1
minor: 2.0.X
---



## Index

### Classes

* [Dialogs](#dialogs)

### Interfaces

* [DialogsPromptCallback](#dialogspromptcallback)

---

## Classes

<a id="dialogs"></a>

###  Dialogs

**Dialogs**: 

*__name__*: Dialogs

*__description__*: This plugin gives you ability to access and customize the device native dialogs.

Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).

*__usage__*:
 ```typescript
import { Dialogs } from '@ionic-enterprise/dialogs/ngx';

constructor(private dialogs: Dialogs) { }

...

this.dialogs.alert('Hello world')
  .then(() => console.log('Dialog dismissed'))
  .catch(e => console.log('Error displaying dialog', e));

```

*__interfaces__*: DialogsPromptCallback

<a id="dialogs.install"></a>

### `<Static>` install

**● install**: *`string`*

___
<a id="dialogs.platforms"></a>

### `<Static>` platforms

**● platforms**: *`string`[]*

___
<a id="dialogs.plugin"></a>

### `<Static>` plugin

**● plugin**: *`string`*

___
<a id="dialogs.pluginname"></a>

### `<Static>` pluginName

**● pluginName**: *`string`*

___
<a id="dialogs.pluginref"></a>

### `<Static>` pluginRef

**● pluginRef**: *`string`*

___
<a id="dialogs.repo"></a>

### `<Static>` repo

**● repo**: *`string`*

___
<a id="dialogs.alert"></a>

###  alert

▸ **alert**(message: *`string`*, title?: *`string`*, buttonName?: *`string`*): `Promise`<`any`>

Shows a custom alert or dialog box.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  Dialog message. |
| `Optional` title | `string` |
| `Optional` buttonName | `string` |

**Returns:** `Promise`<`any`>
Returns a blank promise once the user has dismissed the alert.

___
<a id="dialogs.beep"></a>

###  beep

▸ **beep**(times: *`number`*): `void`

The device plays a beep sound.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| times | `number` |  The number of times to repeat the beep. |

**Returns:** `void`

___
<a id="dialogs.confirm"></a>

###  confirm

▸ **confirm**(message: *`string`*, title?: *`string`*, buttonLabels?: *`string`[]*): `Promise`<`number`>

Displays a customizable confirmation dialog box.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| message | `string` |  Dialog message. |
| `Optional` title | `string` |
| `Optional` buttonLabels | `string`[] |

**Returns:** `Promise`<`number`>
Returns a promise that resolves the button index that was clicked, or 0 if the user has dismissed the dialog by clicking outside the dialog box. Note that the index use one-based indexing.

___
<a id="dialogs.prompt"></a>

###  prompt

▸ **prompt**(message?: *`string`*, title?: *`string`*, buttonLabels?: *`string`[]*, defaultText?: *`string`*): `Promise`<[DialogsPromptCallback](#dialogspromptcallback)>

Displays a native dialog box that is more customizable than the browser's prompt function.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` message | `string` |
| `Optional` title | `string` |
| `Optional` buttonLabels | `string`[] |
| `Optional` defaultText | `string` |

**Returns:** `Promise`<[DialogsPromptCallback](#dialogspromptcallback)>
Returns a promise that resolves an object with the button index clicked and the text entered

___
<a id="dialogs.getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

Returns the original plugin object

**Returns:** `any`

___
<a id="dialogs.getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

Returns the plugin's install name

**Returns:** `string`

___
<a id="dialogs.getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

Returns the plugin's name

**Returns:** `string`

___
<a id="dialogs.getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

Returns the plugin's reference

**Returns:** `string`

___
<a id="dialogs.getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

Returns the plugin's supported platforms

**Returns:** `string`[]

___
<a id="dialogs.installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

___

## Interfaces

<a id="dialogspromptcallback"></a>

###  DialogsPromptCallback

**DialogsPromptCallback**: 

<a id="dialogspromptcallback.buttonindex"></a>

###  buttonIndex

**● buttonIndex**: *`number`*

The index of the pressed button. (Number) Note that the index uses one-based indexing, so the value is 1, 2, 3, etc.

___
<a id="dialogspromptcallback.input1"></a>

###  input1

**● input1**: *`string`*

The text entered in the prompt dialog box. (String)

___

___

