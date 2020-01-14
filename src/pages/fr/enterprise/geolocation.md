---
title: Geolocation
template: enterprise-plugin
version: 4.0.1
minor: 4.0.X
---

The Geolocation plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.

<native-ent-install plugin-id="geolocation" variables=""></native-ent-install>

## Index

### Classes

* [Geolocation](#geolocation)

### Interfaces

* [Coordinates](#coordinates)
* [GeolocationOptions](#geolocationoptions)
* [Geoposition](#geoposition)
* [PositionError](#positionerror)

* * *

## Classes

<a id="geolocation"></a>

### Geolocation

This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.

For iOS, you have to add this configuration to your config.xml file:

```xml
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
   <string>We use your location for full functionality of certain app features.</string>
</edit-config>
```

***usage***:

```typescript
import { Geolocation } from '@ionic-enterprise/geolocation/ngx';

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
```

***interfaces***: Coordinates Geoposition PositionError GeolocationOptions

<a id="geolocation.getcurrentposition"></a>

### getCurrentPosition

▸ **getCurrentPosition**(options?: *[GeolocationOptions](#geolocationoptions)*): `Promise`<[Geoposition](#geoposition)>

Get the device's current position.

**Parameters:**

| Name               | Type                                      | Description                                                                                  |
| ------------------ | ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| `Optional` options | [GeolocationOptions](#geolocationoptions) | The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions). |


**Returns:** `Promise`<[Geoposition](#geoposition)> Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.

* * *

<a id="geolocation.watchposition"></a>

### watchPosition

▸ **watchPosition**(options?: *[GeolocationOptions](#geolocationoptions)*): `Observable`<[Geoposition](#geoposition)>

Watch the current device's position. Clear the watch by unsubscribing from Observable changes.

```typescript
const subscription = this.geolocation.watchPosition()
                              .filter((p) => p.coords !== undefined) //Filter Out Errors
                              .subscribe(position => {
  console.log(position.coords.longitude + ' ' + position.coords.latitude);
});

// To stop notifications
subscription.unsubscribe();
```

**Parameters:**

| Name               | Type                                      | Description                                                                                  |
| ------------------ | ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| `Optional` options | [GeolocationOptions](#geolocationoptions) | The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions). |


**Returns:** `Observable`<[Geoposition](#geoposition)> Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.

* * *

* * *

## Interfaces

<a id="coordinates"></a>

### Coordinates

**Coordinates**:

<a id="coordinates.accuracy"></a>

### accuracy

**● accuracy**: *`number`*

A double representing the accuracy of the latitude and longitude properties, expressed in meters.

* * *

<a id="coordinates.altitude"></a>

### altitude

**● altitude**: *`number`*

A double representing the position's altitude in metres, relative to sea level. This value can be null if the implementation cannot provide the data.

* * *

<a id="coordinates.altitudeaccuracy"></a>

### altitudeAccuracy

**● altitudeAccuracy**: *`number`*

A double representing the accuracy of the altitude expressed in meters. This value can be null.

* * *

<a id="coordinates.heading"></a>

### heading

**● heading**: *`number`*

A double representing the direction in which the device is traveling. This value, specified in degrees, indicates how far off from heading true north the device is. 0 degrees represents true north, and the direction is determined clockwise (which means that east is 90 degrees and west is 270 degrees). If speed is 0, heading is NaN. If the device is unable to provide heading information, this value is null.

* * *

<a id="coordinates.latitude"></a>

### latitude

**● latitude**: *`number`*

a double representing the position's latitude in decimal degrees.

* * *

<a id="coordinates.longitude"></a>

### longitude

**● longitude**: *`number`*

A double representing the position's longitude in decimal degrees.

* * *

<a id="coordinates.speed"></a>

### speed

**● speed**: *`number`*

A double representing the velocity of the device in meters per second. This value can be null.

* * *

* * *

<a id="geolocationoptions"></a>

### GeolocationOptions

**GeolocationOptions**:

<a id="geolocationoptions.enablehighaccuracy"></a>

### `<Optional>` enableHighAccuracy

**● enableHighAccuracy**: *`boolean`*

Indicates the application would like to receive the best possible results. If true and if the device is able to provide a more accurate position, it will do so. Note that this can result in slower response times or increased power consumption (with a GPS chip on a mobile device for example). On the other hand, if false, the device can take the liberty to save resources by responding more quickly and/or using less power. Default: false.

***type***: {boolean}

* * *

<a id="geolocationoptions.maximumage"></a>

### `<Optional>` maximumAge

**● maximumAge**: *`number`*

Is a positive long value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to Infinity the device must return a cached position regardless of its age. Default: 0.

* * *

<a id="geolocationoptions.timeout"></a>

### `<Optional>` timeout

**● timeout**: *`number`*

Is a positive long value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. The default value is Infinity, meaning that getCurrentPosition() won't return until the position is available.

* * *

* * *

<a id="geoposition"></a>

### Geoposition

**Geoposition**:

<a id="geoposition.coords"></a>

### coords

**● coords**: *[Coordinates](#coordinates)*

A Coordinates object defining the current location

* * *

<a id="geoposition.timestamp"></a>

### timestamp

**● timestamp**: *`number`*

A timestamp representing the time at which the location was retrieved.

* * *

* * *

<a id="positionerror"></a>

### PositionError

**PositionError**:

<a id="positionerror.code"></a>

### code

**● code**: *`number`*

A code that indicates the error that occurred

* * *

<a id="positionerror.message"></a>

### message

**● message**: *`string`*

A message that can describe the error that occurred

* * *

* * *