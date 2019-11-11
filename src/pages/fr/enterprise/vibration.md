---
title: Vibration
template: enterprise-plugin
version: 3.1.0
minor: 3.1.X
---

The Vibration plugin provides the ability to vibrate the device for a given amount of time.

<native-ent-install plugin-id="vibration" variables=""></native-ent-install>

## Index

### Classes

* [Vibration](#vibration)

* * *

## Classes

<a id="vibration"></a>

### Vibration

***usage***:

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
// Patterns work on Android only
this.vibration.vibrate([2000,1000,2000]);

// Stop any current vibrations immediately
// Works on Android only
this.vibration.vibrate(0);
```

<a id="vibration.vibrate"></a>

### vibrate

▸ **vibrate**(time: *`number` \| `number`[]*): `void`

Vibrates the device for given amount of time.

**Parameters:**

| Name | Type        | Description                                                                                                                                                   |
| ---- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| time | `number` \ | `number`[] | Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately. |


**Returns:** `void`

* * *

* * *