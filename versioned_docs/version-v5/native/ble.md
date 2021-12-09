---
sidebar_label: 'BLE'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

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

<p>
  <a href="https://github.com/don/cordova-plugin-ble-central" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/don/cordova-plugin-ble-central
  </a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>
      If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer
      premium advisory services for both community plugins and premier plugins.
    </p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-ble-central {'\n'}$ npm install @awesome-cordova-plugins/ble {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ble-central {'\n'}$ npm install @awesome-cordova-plugins/ble {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">
        Learn More
      </a> or if you're interested in an enterprise version of this plugin <a
        class="btn"
        href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"
      >
        Contact Us
      </a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Android
- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx

import { BLE } from '@awesome-cordova-plugins/ble/ngx';

constructor(private ble: BLE) { }

```

## Peripheral Data

Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.

```tsx
  {
      'name': 'Battery Demo',
      'id': '20:FF:D0:FF:D1:C0',
      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
      'rssi': -55
  }
```

After connecting, the peripheral object also includes service, characteristic and descriptor information.

```tsx
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

```tsx
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

```tsx
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

```tsx
  // ASCII only
  function stringToBytes(string) {
     var array = new Uint8Array(string.length);
     for (var i = 0, l = string.length; i &lt; l; i++) {
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
