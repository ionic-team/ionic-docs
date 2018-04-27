# NativeGeocoder 


Cordova plugin for native forward and reverse geocoding


Repo: [https://github.com/sebastianbaar/cordova-plugin-nativegeocoder](https://github.com/sebastianbaar/cordova-plugin-nativegeocoder)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-nativegeocoder
$ npm install --save @ionic-native/native-geocoder
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS
* Android




### Usage


```typescript
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

constructor(private nativeGeocoder: NativeGeocoder) { }

...

this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
  .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
  .catch((error: any) => console.log(error));

this.nativeGeocoder.forwardGeocode('Berlin')
  .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
  .catch((error: any) => console.log(error));
```



<p><br></p>

## Instance Members

### forwardGeocode

Forward geocode a given address to find coordinates

<dl>
<dt><h4>addressString</h4><strong>Type: </strong><code>string</code></dt>
<dd>The address to be geocoded</dd>
</dl>

### reverseGeocode

Reverse geocode a given latitude and longitude to find location address

<dl>
<dt><h4>latitude</h4><strong>Type: </strong><code>number</code></dt>
<dd>The latitude</dd><dt><h4>longitude</h4><strong>Type: </strong><code>number</code></dt>
<dd>The longitude</dd>
</dl>

<p><br></p>

## NativeGeocoderForwardResult

<dl>
<dt><h4>latitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The latitude.</dd><dt><h4>longitude</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The longitude.</dd>
</dl>

## NativeGeocoderReverseResult

<dl>
<dt><h4>administrativeArea</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The administrativeArea.</dd><dt><h4>countryCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The country code.</dd><dt><h4>countryName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The country name.</dd><dt><h4>locality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The locality.</dd><dt><h4>postalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The postal code.</dd><dt><h4>subAdministrativeArea</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The subAdministrativeArea.</dd><dt><h4>subLocality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The subLocality.</dd><dt><h4>subThoroughfare</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The subThoroughfare.</dd><dt><h4>thoroughfare</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The thoroughfare.</dd>
</dl>

