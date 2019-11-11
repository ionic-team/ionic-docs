---
title: Device
template: enterprise-plugin
version: 2.0.2
minor: 2.0.X
---

The Device plugin provides access to information about the underlying device and platform that the app is running on.

<native-ent-install plugin-id="device" variables=""></native-ent-install>

## Index

### Classes

* [Device](#device)

* * *

## Classes

<a id="device"></a>

### Device

***usage***:

```typescript
import { Device } from '@ionic-enterprise/device/ngx';

constructor(private device: Device) { }

...

console.log('Device UUID is: ' + this.device.uuid);
```

<a id="device.cordova"></a>

### cordova

**● cordova**: *`string`*

Get the version of Cordova running on the device.

* * *

<a id="device.isvirtual"></a>

### isVirtual

**● isVirtual**: *`boolean`*

Whether the device is running on a simulator.

* * *

<a id="device.manufacturer"></a>

### manufacturer

**● manufacturer**: *`string`*

Get the device's manufacturer.

* * *

<a id="device.model"></a>

### model

**● model**: *`string`*

The device.model returns the name of the device's model or product. The value is set by the device manufacturer and may be different across versions of the same product.

* * *

<a id="device.platform"></a>

### platform

**● platform**: *`string`*

Get the device's operating system name.

* * *

<a id="device.serial"></a>

### serial

**● serial**: *`string`*

Get the device hardware serial number.

* * *

<a id="device.uuid"></a>

### uuid

**● uuid**: *`string`*

Get the device's Universally Unique Identifier (UUID).

* * *

<a id="device.version"></a>

### version

**● version**: *`string`*

Get the operating system version.

* * *

* * *