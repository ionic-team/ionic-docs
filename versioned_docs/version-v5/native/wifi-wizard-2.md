---
sidebar_label: 'WifiWizard2'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# WifiWizard2

WifiWizard2 enables Wifi management for both Android and iOS applications within Cordova/Phonegap projects.

This project is a fork of the WifiWizard plugin with fixes and updates, as well as patches taken from the Cordova Network Manager plugin.

<p>
  <a href="https://github.com/tripflex/WifiWizard2" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/tripflex/WifiWizard2
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
      $ npm install cordova-plugin-wifiwizard2 {'\n'}$ npm install @awesome-cordova-plugins/wifi-wizard-2 {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-wifiwizard2 {'\n'}$ npm install @awesome-cordova-plugins/wifi-wizard-2 {'\n'}
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

````tsx
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';


constructor(private wifiWizard2: WifiWizard2) { }


# Global Functions
 These are functions that can be used by both Android and iOS applications
 ```tsx
 this.wifiWizard2.getConnectedSSID()
````

- Returns connected network SSID (only if connected) in success callback, otherwise fail callback will be called (if not connected or unable to retrieve)
- This does **NOT** return the BSSID if unable to obtain SSID (like original WifiWizard did)

```tsx
this.wifiWizard2.getConnectedBSSID();
```

- Same as above, except BSSID (mac) is returned

```tsx
this.wifiWizard2.timeout(delay);
```

- `delay` should be time in milliseconds to delay
- Helper async timeout delay, `delay` is optional, default is 2000ms = 2 seconds
- This method always returns a resolved promise after the delay, it will never reject or throw an error

**Example inside async function**

```tsx
async function example() {
  await this.wifiWizard2.timeout(4000);
  // do something after 4 seconds
}
```

**Example inside standard non-async function**

```tsx
function example(){
   this.wifiWizard2.timeout(4000).then( function(){
       // do something after waiting 4 seconds
   }):
}
```

**Thrown Errors**

- `TIMEOUT_WAITING_FOR_SCAN` on timeout waiting for scan 10 seconds +
- `SCAN_FAILED` if unable to start scan

# iOS Functions

For functionality, you need to note the following:

- Connect/Disconnect only works for iOS11+
- Can't run in the simulator so you need to attach an actual device when building with xCode
- Will ensure 'HotspotConfiguration' and 'NetworkExtensions' capabilities are added to your xCode project
- To connect to open network omit `ssidPassword` or call with `false`

```tsx
this.wifiWizard2.iOSConnectNetwork(ssid, ssidPassword);
```

```tsx
this.wifiWizard2.iOSDisconnectNetwork(ssid);
```

# Android Functions

- **WifiWizard2** _will automagically try to enable WiFi if it's disabled when calling any android related methods that require WiFi to be enabled_

## Connect vs Enable

When writing Android Java code, there is no `connect` methods, you basically either `enable` or `disable` a network. In the original versions of WifiWizard the `connect` method would basically just call `enable` in Android.
I have changed the way this works in WifiWizard2 version 3.0.0+, converting it to a helper method to eliminate having to call `formatWifiConfig` then `add` and then `enable` ... the `connect` method will now automatically call `formatWifiConfig`, then call `add` to either add or update the network configuration, and then call `enable`.
If the connect method is unable to update existing network configuration (added by user or other apps), but there is a valid network ID, it will still attempt to enable that network ID.

```tsx
this.wifiWizard2.connect(ssid, bindAll, password, algorithm, isHiddenSSID);
```

- `ssid` should be the SSID to connect to _required_
- `bindAll` should be set to `true` to tell Android to route all connections from your Android app, through the wifi connection (default is `false`) _optional_
- See `WifiWizard2.enable` for more details regarding `bindAll` feature
- `algorithm` and `password` is not required if connecting to an open network
- Currently `WPA` and `WEP` are only supported algorithms
- For `WPA2` just pass `WPA` as the algorithm
- Set `isHiddenSSID` to `true` if the network you're connecting to is hidden
- These arguments are the same as for `formatWifiConfig`
- This method essentially calls `formatWifiConfig` then `add` then `enable`
- If unable to update network configuration (was added by user or other app), but a valid network ID exists, this method will still attempt to enable the network
- Promise will not be returned until method has verified that connection to WiFi was in completed state (waits up to 60 seconds)

**Thrown Errors**

- `CONNECT_FAILED_TIMEOUT` unable to verify connection, timed out after 60 seconds
- `INVALID_NETWORK_ID_TO_CONNECT` Unable to connect based on generated wifi config
- `INTERPUT_EXCEPT_WHILE_CONNECTING` Interupt exception while waiting for connection

## Disconnect vs Disable

Same as above for Connect vs Enable, except in this situation, `disconnect` will first disable the network, and then attempt to remove it (if SSID is passed)

```tsx
this.wifiWizard2.disconnect(ssid);
```

- `ssid` can either be an SSID (string) or a network ID (integer)
- `ssid` is **OPTIONAL** .. if not passed, will disconnect current WiFi (almost all Android versions now will just automatically reconnect to last wifi after disconnecting)
- If `ssid` is provided, this method will first attempt to `disable` and then `remove` the network
- If you do not want to remove network configuration, use `disable` instead

**Thrown Errors**

- `DISCONNECT_NET_REMOVE_ERROR` Android returned error when removing wifi configuration
- `DISCONNECT_NET_DISABLE_ERROR` Unable to connect based on generated wifi config
- `DISCONNECT_NET_ID_NOT_FOUND` Unable to determine network ID to disconnect/remove (from passed SSID)
- `ERROR_DISCONNECT` - Android error disconnecting wifi (only when SSID is not passed)

```tsx
this.wifiWizard2.formatWifiConfig(ssid, password, algorithm, isHiddenSSID);
```

- `algorithm` and `password` is not required if connecting to an open network
- Currently `WPA` and `WEP` are only supported algorithms
- For `WPA2` just pass `WPA` as the algorithm
- Set `isHiddenSSID` to `true` if the network you're connecting to is hidden

```tsx
this.wifiWizard2.formatWPAConfig(ssid, password, isHiddenSSID);
```

- This is just a helper method that calls `WifiWizard2.formatWifiConfig( ssid, password, 'WPA', isHiddenSSID );`

```tsx
this.wifiWizard2.add(wifi);
```

- `wifi` must be an object formatted by `formatWifiConfig`, this **must** be done before calling `enable`

**Thrown Errors**

- `AUTH_TYPE_NOT_SUPPORTED` - Invalid auth type specified
- `ERROR_ADDING_NETWORK` - Android returned `-1` specifying error adding network
- `ERROR_UPDATING_NETWORK` - Same as above, except an existing network ID was found, and unable to update it

```tsx
this.wifiWizard2.remove(ssid);
```

- `ssid` can either be an SSID (string) or a network ID (integer)
- Please note, most newer versions of Android will only allow wifi to be removed if created by your application

**Thrown Errors**

- `UNABLE_TO_REMOVE` Android returned failure in removing network
- `REMOVE_NETWORK_NOT_FOUND` Unable to determine network ID from passed SSID

```tsx
this.wifiWizard2.listNetworks();
```

```tsx
this.wifiWizard2.scan([options]);
```

- Same as calling `startScan` and then `getScanResults`, except this method will only resolve the promise after the scan completes and returns the results.

```tsx
this.wifiWizard2.startScan();
```

- It is recommended to just use the `scan` method instead of `startScan`

**Thrown Errors**

- `STARTSCAN_FAILED` Android returned failure in starting scan

```tsx
this.wifiWizard2.getScanResults([options]);
```

- `getScanResults` should only be called after calling `startScan` (it is recommended to use `scan` instead as this starts the scan, then returns the results)
- `[options]` is optional, if you do not want to specify, just pass `success` callback as first parameter, and `fail` callback as second parameter
- Retrieves a list of the available networks as an array of objects and passes them to the function listHandler. The format of the array is:

```tsx
networks = [
{   "level": signal_level, // raw RSSI value
       "SSID": ssid, // SSID as string, with escaped double quotes: "\"ssid name\""
       "BSSID": bssid // MAC address of WiFi router as string
       "frequency": frequency of the access point channel in MHz
       "capabilities": capabilities // Describes the authentication, key management, and encryption schemes supported by the access point.
       "timestamp": timestamp // timestamp of when the scan was completed
       "channelWidth":
       "centerFreq0":
       "centerFreq1":
   }
]
```

- `channelWidth` `centerFreq0` and `centerFreq1` are only supported on API > 23 (Marshmallow), any older API will return null for these values

An options object may be passed. Currently, the only supported option is `numLevels`, and it has the following behavior:

- if `(n == true || n &lt; 2)`, `*.getScanResults({numLevels: n})` will return data as before, split in 5 levels;
- if `(n > 1)`, `*.getScanResults({numLevels: n})` will calculate the signal level, split in n levels;
- if `(n == false)`, `*.getScanResults({numLevels: n})` will use the raw signal level;

```tsx
this.wifiWizard2.isWifiEnabled();
```

- Returns boolean value of whether Wifi is enabled or not

```tsx
this.wifiWizard2.setWifiEnabled(enabled);
```

- Pass `true` for `enabled` parameter to set Wifi enabled
- You do not need to call this function to set WiFi enabled to call other methods that require wifi enabled. This plugin will automagically enable WiFi if a method is called that requires WiFi to be enabled.

**Thrown Errors**

- `ERROR_SETWIFIENABLED` wifi state does not match call (enable or disable)

```tsx
this.wifiWizard2.getConnectedNetworkID();
```

- Returns currently connected network ID in success callback (only if connected), otherwise fail callback will be called

**Thrown Errors**

- `GET_CONNECTED_NET_ID_ERROR` Unable to determine currently connected network ID (may not be connected)

## New to 3.1.1+

```tsx
this.wifiWizard2.resetBindAll();
```

- Disable bindAll to WiFi network without disconnecting from WiFi

```tsx
this.wifiWizard2.setBindAll();
```

- Enable bindAll to WiFi network without disconnecting from WiFi

```tsx
this.wifiWizard2.canConnectToInternet();
```

- Returns boolean, true or false, if device is able to connect to https://www.google.com via HTTP connection (since ping is unreliable)
- Unknown errors will still be thrown like all other async functions
- If you called `connect` or `enable` and passed `true` for `bindAll`, your application will force the ping through wifi connection.
- If you did not pass `true` (or passed `false`) for `bindAll`, and the wifi does not have internet connection, Android Lollipop+ (API 21+) will use cell connection to ping (due to Android using cell connection when wifi does not have internet) [More Details](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)

```tsx
this.wifiWizard2.canConnectToRouter();
```

- As `canPingWifiRouter` is notoriously unreliable, this method uses HTTP connection to test if able to connect to router (as most routers should have web server running on port 80)
- Unknown errors will still be thrown like all other async functions
- This is useful for testing to make sure that your Android app is able to connect to the private network after connecting to WiFi
- This was added for testing the `bindAll` feature to support issues with Android Lollipop+ (API 21+) not routing calls through WiFi if WiFi does not have internet connection [See Android Blog](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)
- Attempts to connect router IP HTTP server on port 80 (example: `http://192.168.0.1/` where `192.168.0.1` is the automatically detected IP address)

## New to 3.0.0+

```tsx
this.wifiWizard2.isConnectedToInternet();
```

- Returns boolean, true or false, if device is able to ping 8.8.8.8
- Unknown errors will still be thrown like all other async functions
- If you called `connect` or `enable` and passed `true` for `bindAll`, your application will force the ping through wifi connection.
- If you did not pass `true` (or passed `false`) for `bindAll`, and the wifi does not have internet connection, Android Lollipop+ (API 21+) will use cell connection to ping (due to Android using cell connection when wifi does not have internet) [More Details](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)

```tsx
this.wifiWizard2.canPingWifiRouter();
```

- Returns boolean, true or false, if device is able to ping the connected WiFi router IP (obtained from DHCP info)
- Version 3.1.1+ uses HTTP connection to test if able to connect to router (as ping previous did not work)
- Unknown errors will still be thrown like all other async functions
- This is useful for testing to make sure that your Android app is able to connect to the private network after connecting to WiFi
- This was added for testing the `bindAll` feature to support issues with Android Lollipop+ (API 21+) not routing calls through WiFi if WiFi does not have internet connection [See Android Blog](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)

```tsx
this.wifiWizard2.enableWifi();
```

```tsx
this.wifiWizard2.disableWifi();
```

```tsx
this.wifiWizard2.getWifiIP();
```

- Returns IPv4 address of currently connected WiFi, or rejects promise if IP not found or wifi not connected

```tsx
this.wifiWizard2.getWifiRouterIP();
```

- Returns IPv4 WiFi router IP from currently connected WiFi, or rejects promise if unable to determine, or wifi not connected

**Thrown Errors**

- `NO_VALID_IP_IDENTIFIED` if unable to determine a valid IP (ip returned from device is `0.0.0.0`)

```tsx
this.wifiWizard2.getWifiIPInfo();
```

- Returns a JSON object with IPv4 address and subnet `{"ip": "192.168.1.2", "subnet": "255.255.255.0" }` or rejected promise if not found or not connected
  **Thrown Errors**

- `NO_VALID_IP_IDENTIFIED` if unable to determine a valid IP (ip returned from device is `0.0.0.0`)

```tsx
this.wifiWizard2.reconnect();
```

- Reconnect to the currently active access point, **if we are currently disconnected.**

**Thrown Errors**

- `ERROR_RECONNECT` Android returned error when reconnecting

```tsx
this.wifiWizard2.reassociate();
```

- Reconnect to the currently active access point, **even if we are already connected.**

**Thrown Errors**

- `ERROR_REASSOCIATE` Android returned error when reassociating

```tsx
this.wifiWizard2.getSSIDNetworkID(ssid);
```

- Get Android Network ID from passed SSID

```tsx
this.wifiWizard2.disable(ssid);
```

- `ssid` can either be an SSID (string) or a network ID (integer)
- Disable the passed SSID network
- Please note that most newer versions of Android will only allow you to disable networks created by your application

**Thrown Errors**

- `UNABLE_TO_DISABLE` Android returned failure in disabling network
- `DISABLE_NETWORK_NOT_FOUND` Unable to determine network ID from passed SSID to disable

```tsx
this.wifiWizard2.requestPermission();
```

- Request `ACCESS_FINE_LOCATION` permssion
- This Android permission is required to run `scan`, `startStart` and `getScanResults`
- You can request permission by running this function manually, or WifiWizard2 will automagically request permission when one of the functions above is called

**Thrown Errors**

- `PERMISSION_DENIED` user denied permission on device

```tsx
this.wifiWizard2.enable(ssid, bindAll, waitForConnection);
```

- `ssid` can either be an SSID (string) or a network ID (integer)
- `bindAll` should be set to `true` to tell Android to route all connections from your Android app, through the wifi connection
- Android Lollipop+ (API 21+) will not route connections to the WiFi device if it does not have internet connection. Passing `true` to `bindAll` will force Android to route connections from your Android app through Wifi, regardless of internet connection.
- If you are having problems connecting to a local IP through WiFi because it does not have internet, try enabling `bindAll` and this should fix the problem.
- During my testing, some versions of Android (5.0 - 7.1.2) would still route connections through WiFi without internet, but it was random that some versions would and would not work.
- Testing Android Oreo+ (8.0.0+) if wifi does not have internet, 100% of the time it would NOT route connections through WiFi, so you _must_ enable this for Oreo or newer to route connections from your application through wifi without internet.
- When `bindAll` is enabled, _ALL_ connections from your app will be routed through WiFi, until you call `disconnect` or `disable`
- See the Google Android Blog for [More Details](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)
- This feature _ONLY_ works for Android Lollipop+ (API 21+), if device is running API older than 21, `bindall` will be ignored (as API older than 21 does this by default)
- Enable the passed SSID network
- You **MUST** call `WifiWizard2.add(wifi)` before calling `enable` as the wifi configuration must exist before you can enable it (or previously used `connect` without calling `disconnect`)
- This method does NOT wait or verify connection to wifi network, pass `true` to `waitForConnection` to only return promise once connection is verified in COMPLETED state to specific `ssid`

**Thrown Errors**

`UNABLE_TO_ENABLE` - Android returned `-1` signifying failure enabling

# Installation

## Master

Run `cordova plugin add https://github.com/tripflex/wifiwizard2`

To install from the master branch (latest on GitHub)

To install a specific branch (add `#tag` replacing `tag` with tag from this repo, example:
`cordova plugin add https://github.com/tripflex/wifiwizard2#v3.1.1`

Find available tags here:
https://github.com/tripflex/WifiWizard2/tags

If you are wanting to have the latest and greatest stable version, then run the 'Releases' command below.

## Releases

Run `cordova plugin add cordova-plugin-wifiwizard2`

## Meteor

To install and use this plugin in a Meteor project, you have to specify the exact version from NPM repository:
[https://www.npmjs.com/package/cordova-plugin-wifiwizard2](https://www.npmjs.com/package/cordova-plugin-wifiwizard2)

As of April 4th 2019, the latest version is 3.1.1:

`meteor add cordova:cordova-plugin-wifiwizard2@3.1.1`

# Errors/Rejections

Methods now return formatted string errors as detailed below, instead of returning generic error messages. This allows you to check yourself what specific error was returned, and customize the error message.
In an upcoming release I may add easy ways to override generic messages, or set your own, but for now, errors returned can be found below each method/function.

## Generic **Thrown Errors**

`WIFI_NOT_ENABLED`

```

```
