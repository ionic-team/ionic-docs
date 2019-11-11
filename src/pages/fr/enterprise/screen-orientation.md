---
title: Screen Orientation
template: enterprise-plugin
version: 3.0.1
minor: 3.0.X
---

The Screen Orientation plugin provides the ability to set or lock the screen orientation (landscape or portrait), as well as detect when the orientation has changed.

<native-ent-install plugin-id="screen-orientation" variables=""></native-ent-install>

## Index

### Classes

* [ScreenOrientation](#screenorientation)

* * *

## Classes

<a id="screenorientation"></a>

### ScreenOrientation

***usage***:

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

***advanced***: Accepted orientation values:

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

### ORIENTATIONS

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

* * *

<a id="screenorientation.type"></a>

### type

**● type**: *`string`*

Get the current orientation of the device.

* * *

<a id="screenorientation.lock"></a>

### lock

▸ **lock**(orientation: *`string`*): `Promise`<`any`>

Lock the orientation to the passed value. See below for accepted values

**Parameters:**

| Name        | Type     | Description                                                              |
| ----------- | -------- | ------------------------------------------------------------------------ |
| orientation | `string` | The orientation which should be locked. Accepted values see table above. |


**Returns:** `Promise`<`any`>

* * *

<a id="screenorientation.onchange"></a>

### onChange

▸ **onChange**(): `Observable`<`void`>

Listen to orientation change event

**Returns:** `Observable`<`void`>

* * *

<a id="screenorientation.unlock"></a>

### unlock

▸ **unlock**(): `void`

Unlock and allow all orientations.

**Returns:** `void`

* * *

* * *