# BLE 


This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.

The plugin provides a simple JavaScript API for iOS and Android.

- Scan for peripherals
- Connect to a peripheral
- Read the value of a characteristic
- Write new value to a characteristic
- Get notified when characteristic's value changes

Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.

Simultaneous connections to multiple peripherals are supported.


Repo: [https://github.com/don/cordova-plugin-ble-central](https://github.com/don/cordova-plugin-ble-central)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-ble-central
$ npm install --save @ionic-native/ble
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage



```typescript

import { BLE } from '@ionic-native/ble';

constructor(private ble: BLE) { }

```

## Peripheral Data

Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.

```typescript
  {
      'name': 'Battery Demo',
      'id': '20:FF:D0:FF:D1:C0',
      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
      'rssi': -55
  }
```
After connecting, the peripheral object also includes service, characteristic and descriptor information.

```typescript
  {
      'name': 'Battery Demo',
      'id': '20:FF:D0:FF:D1:C0',
      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
      'rssi': -55,
      'services': [
          '1800',
          '1801',
          '180f'
      ],
      'characteristics': [
          {
              'service': '1800',
              'characteristic': '2a00',
              'properties': [
                  'Read'
              ]
          },
          {
              'service': '1800',
              'characteristic': '2a01',
              'properties': [
                  'Read'
              ]
          },
          {
              'service': '1801',
              'characteristic': '2a05',
              'properties': [
                  'Read'
              ]
          },
          {
              'service': '180f',
              'characteristic': '2a19',
              'properties': [
                  'Read'
              ],
              'descriptors': [
                  {
                      'uuid': '2901'
                  },
                  {
                      'uuid': '2904'
                  }
              ]
          }
      ]
  }
```

## Advertising Data
Bluetooth advertising data is returned in when scanning for devices. The format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.

The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.

### Android

```typescript
  {
      'name': 'demo',
      'id': '00:1A:7D:DA:71:13',
      'advertising': ArrayBuffer,
     'rssi': -37
 }
```

Convert the advertising info to a Uint8Array for processing. `var adData = new Uint8Array(peripheral.advertising)`

### iOS

Note that iOS uses the string value of the constants for the [Advertisement Data Retrieval Keys](https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys). This will likely change in the future.

```typescript
  {
      'name': 'demo',
      'id': 'D8479A4F-7517-BCD3-91B5-3302B2F81802',
      'advertising': {
          'kCBAdvDataChannel': 37,
          'kCBAdvDataServiceData': {
              'FED8': {
                  'byteLength': 7 // data not shown
              }
          },
          'kCBAdvDataLocalName': 'demo',
          'kCBAdvDataServiceUUIDs': ['FED8'],
          'kCBAdvDataManufacturerData': {
              'byteLength': 7  // data not shown
          },
          'kCBAdvDataTxPowerLevel': 32,
          'kCBAdvDataIsConnectable': true
      },
      'rssi': -53
  }
```

## Typed Arrays

This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.

This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.

```typescript
  // ASCII only
  function stringToBytes(string) {
     var array = new Uint8Array(string.length);
     for (var i = 0, l = string.length; i < l; i++) {
         array[i] = string.charCodeAt(i);
      }
      return array.buffer;
  }

  // ASCII only
  function bytesToString(buffer) {
      return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
```
You can read more about typed arrays in these articles on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/).

## UUIDs

UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as '2220' look like integers, but they're not. (The integer 2220 is 0x8AC in hex.) This isn't a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.




<p><br></p>

## Instance Members

### startNotification

Register to be notified when the value of a characteristic changes.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd><dt><h4>serviceUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE service</dd><dt><h4>characteristicUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE characteristic</dd>
</dl>

### connect

Connect to a peripheral.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd>
</dl>

### startScan

Scan and discover BLE peripherals until `stopScan` is called.

<dl>
<dt><h4>services</h4></dt>
<dd>List of service UUIDs to discover, or `[]` to find all devices</dd>
</dl>

### enable

Enable Bluetooth on the device (Android only).

### disconnect

Disconnect from a peripheral.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd>
</dl>

### startScanWithOptions

Scans for BLE devices. This function operates similarly to the `startScan` function, but allows you to specify extra options (like allowing duplicate device reports).

<dl>
<dt><h4>services</h4></dt>
<dd>List of service UUIDs to discover, or `[]` to find all devices</dd><dt><h4>options</h4><strong>Type: </strong><code>BLEScanOptions</code></dt>
<dd>See BLEScanOptions table below</dd>
</dl>

### read

Read the value of a characteristic.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd><dt><h4>serviceUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE service</dd><dt><h4>characteristicUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE characteristic</dd>
</dl>

### isConnected

Report the connection status.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd>
</dl>

### isEnabled

Report if bluetooth is enabled.

### readRSSI

Read the RSSI value on the device connection.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral
</dd>
</dl>

### scan

Scan and discover BLE peripherals for the specified amount of time.

<dl>
<dt><h4>services</h4></dt>
<dd>List of service UUIDs to discover, or `[]` to find all devices</dd><dt><h4>seconds</h4><strong>Type: </strong><code>number</code></dt>
<dd>Number of seconds to run discovery</dd>
</dl>

### showBluetoothSettings

Open System Bluetooth settings (Android only).

### startStateNotifications

Register to be notified when Bluetooth state changes on the device.

### stopNotification

Stop being notified when the value of a characteristic changes.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd><dt><h4>serviceUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE service</dd><dt><h4>characteristicUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE characteristic</dd>
</dl>

### stopScan

Stop a scan started by `startScan`.

### stopStateNotifications

Stop state notifications.

### write

Write the value of a characteristic.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd><dt><h4>serviceUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE service</dd><dt><h4>characteristicUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE characteristic</dd><dt><h4>value</h4><strong>Type: </strong><code>ArrayBuffer</code></dt>
<dd>See ArrayBuffer table below</dd>
</dl>

### writeWithoutResponse

Write the value of a characteristic without waiting for confirmation from the peripheral.

<dl>
<dt><h4>deviceId</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID or MAC address of the peripheral</dd><dt><h4>serviceUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE service</dd><dt><h4>characteristicUUID</h4><strong>Type: </strong><code>string</code></dt>
<dd>UUID of the BLE characteristic</dd><dt><h4>value</h4><strong>Type: </strong><code>ArrayBuffer</code></dt>
<dd>See ArrayBuffer table below</dd>
</dl>

<p><br></p>

## BLEScanOptions

<dl>
<dt><h4>reportDuplicates</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>true if duplicate devices should be reported, false (default) if devices should only be reported once. <span class="tag">optional</span></dd>
</dl>

