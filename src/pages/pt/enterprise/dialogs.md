---
title: Dialogs
template: enterprise-plugin
version: 2.0.1
minor: 2.0.X
---

The Dialogs plugin provides access to customize the native device dialogs.

<native-ent-install plugin-id="dialogs" variables=""></native-ent-install>

## Index

### Classes

* [Dialogs](#dialogs)

### Interfaces

* [DialogsPromptCallback](#dialogspromptcallback)

* * *

## Classes

<a id="dialogs"></a>

### Dialogs

***usage***:

```typescript
import { Dialogs } from '@ionic-enterprise/dialogs/ngx';

constructor(private dialogs: Dialogs) { }

...

this.dialogs.alert('Hello world')
  .then(() => console.log('Dialog dismissed'))
  .catch(e => console.log('Error displaying dialog', e));

```

***interfaces***: DialogsPromptCallback

<a id="dialogs.alert"></a>

### alert

▸ **alert**(message: *`string`*, title?: *`string`*, buttonName?: *`string`*): `Promise`<`any`>

Shows a custom alert or dialog box.

**Parameters:**

| Name                  | Type     | Description     |
| --------------------- | -------- | --------------- |
| message               | `string` | Dialog message. |
| `Optional` title      | `string` |                 |
| `Optional` buttonName | `string` |                 |


**Returns:** `Promise`<`any`> Returns a blank promise once the user has dismissed the alert.

* * *

<a id="dialogs.beep"></a>

### beep

▸ **beep**(times: *`number`*): `void`

The device plays a beep sound.

**Parameters:**

| Name  | Type     | Description                             |
| ----- | -------- | --------------------------------------- |
| times | `number` | The number of times to repeat the beep. |


**Returns:** `void`

* * *

<a id="dialogs.confirm"></a>

### confirm

▸ **confirm**(message: *`string`*, title?: *`string`*, buttonLabels?: *`string`[]*): `Promise`<`number`>

Displays a customizable confirmation dialog box.

**Parameters:**

| Name                    | Type       | Description     |
| ----------------------- | ---------- | --------------- |
| message                 | `string`   | Dialog message. |
| `Optional` title        | `string`   |                 |
| `Optional` buttonLabels | `string`[] |                 |


**Returns:** `Promise`<`number`> Returns a promise that resolves the button index that was clicked, or 0 if the user has dismissed the dialog by clicking outside the dialog box. Note that the index use one-based indexing.

* * *

<a id="dialogs.prompt"></a>

### prompt

▸ **prompt**(message?: *`string`*, title?: *`string`*, buttonLabels?: *`string`[]*, defaultText?: *`string`*): `Promise`<[DialogsPromptCallback](#dialogspromptcallback)>

Displays a native dialog box that is more customizable than the browser's prompt function.

**Parameters:**

| Name                    | Type       |
| ----------------------- | ---------- |
| `Optional` message      | `string`   |
| `Optional` title        | `string`   |
| `Optional` buttonLabels | `string`[] |
| `Optional` defaultText  | `string`   |


**Returns:** `Promise`<[DialogsPromptCallback](#dialogspromptcallback)> Returns a promise that resolves an object with the button index clicked and the text entered

* * *

* * *

## Interfaces

<a id="dialogspromptcallback"></a>

### DialogsPromptCallback

**DialogsPromptCallback**:

<a id="dialogspromptcallback.buttonindex"></a>

### buttonIndex

**● buttonIndex**: *`number`*

The index of the pressed button. (Number) Note that the index uses one-based indexing, so the value is 1, 2, 3, etc.

* * *

<a id="dialogspromptcallback.input1"></a>

### input1

**● input1**: *`string`*

The text entered in the prompt dialog box. (String)

* * *

* * *