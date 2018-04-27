# Hotspot 



Repo: [https://github.com/hypery2k/cordova-hotspot-plugin](https://github.com/hypery2k/cordova-hotspot-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-hotspot
$ npm install --save @ionic-native/hotspot
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';

constructor(private hotspot: Hotspot) { }

...


this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
    console.log(networks);
});

```



<p><br></p>

## Instance Members

### isPortLive

Checks if IP is live using socket And PORT

<dl>
<dt><h4>ip</h4><strong>Type: </strong><code>string</code></dt>
<dd>IP Address you want to test
</dd>
</dl>

### addWifiNetwork

Add a WiFi network

<dl>
<dt><h4>ssid</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     SSID of network</dd><dt><h4>mode</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     Authentication mode of (Open, WEP, WPA, WPA_PSK)</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     Password for network
</dd>
</dl>

### isRooted

Checks if device is rooted

### connectToWifi

Connect to a WiFi network

<dl>
<dt><h4>ssid</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     SSID to connect</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     password to use
</dd>
</dl>

### configureHotspot

Configures hotspot with SSID and Password

<dl>
<dt><h4>ssid</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>mode</h4><strong>Type: </strong><code>string</code></dt>
<dd>encryption mode (Open, WEP, WPA, WPA_PSK)</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>password for your new Access Point
</dd>
</dl>

### isWifiDirectSupported

undefined

### getAllHotspotDevices

undefined

### connectToWifiAuthEncrypt

Connect to a WiFi network

<dl>
<dt><h4>ssid</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     SSID to connect</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     Password to use</dd><dt><h4>authentication</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     Authentication modes to use (LEAP, SHARED, OPEN)</dd><dt><h4>encryption</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### createHotspot

Configures and starts hotspot with SSID and Password

<dl>
<dt><h4>ssid</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>mode</h4><strong>Type: </strong><code>string</code></dt>
<dd>encryption mode (Open, WEP, WPA, WPA_PSK)</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>password for your new Access Point
</dd>
</dl>

### isWifiSupported

undefined

### isAvailable

undefined

### getConnectionInfo

undefined

### getMacAddressOfHost

Gets MAC Address associated with IP Address from ARP File

<dl>
<dt><h4>ip</h4><strong>Type: </strong><code>string</code></dt>
<dd>IP Address that you want the MAC Address of
</dd>
</dl>

### getNetConfig

undefined

### scanWifi

undefined

### isHotspotEnabled

Checks if hotspot is enabled

### isConnectedToInternetViaWifi

undefined

### isDnsLive

Checks if IP is live using DNS

<dl>
<dt><h4>ip</h4><strong>Type: </strong><code>string</code></dt>
<dd>IP Address you want to test
</dd>
</dl>

### isConnectedToInternet

undefined

### isWifiOn

undefined

### pingHost

undefined

<dl>
<dt><h4>ip</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### removeWifiNetwork

Remove a WiFi network

<dl>
<dt><h4>ssid</h4><strong>Type: </strong><code>string</code></dt>
<dd>
     SSID of network
</dd>
</dl>

### scanWifiByLevel

undefined

### startHotspot

Turns on Access Point

### startWifiPeriodicallyScan

undefined

<dl>
<dt><h4>interval</h4><strong>Type: </strong><code>number</code></dt>
<dd>null</dd><dt><h4>duration</h4><strong>Type: </strong><code>number</code></dt>
<dd>null</dd>
</dl>

### stopHotspot

Turns off Access Point

### stopWifiPeriodicallyScan

undefined

### toggleWifi

undefined

<p><br></p>

## HotspotConnectionInfo

<dl>
<dt><h4>BSSID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     The basic service set identifier (BSSID) of the current access point.</dd><dt><h4>IPAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     The IP Address</dd><dt><h4>SSID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     The service set identifier (SSID) of the current 802.11 network.</dd><dt><h4>linkSpeed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     The current link speed in Mbps</dd><dt><h4>networkID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     Each configured network has a unique small integer ID, used to identify the network when performing operations on the supplicant.</dd>
</dl>

## HotspotDevice

<dl>
<dt><h4>ip</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     Hotspot IP Address</dd><dt><h4>mac</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     Hotspot MAC Address</dd>
</dl>

## HotspotNetwork

<dl>
<dt><h4>BSSID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     MAC Address of the access point</dd><dt><h4>SSID</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     Human readable network name</dd><dt><h4>capabilities</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     Describes the authentication, key management, and encryption schemes supported by the access point.</dd><dt><h4>frequency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     The primary 20 MHz frequency (in MHz) of the channel over which the client is communicating with the access point.</dd><dt><h4>level</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     The detected signal level in dBm, also known as the RSSI.</dd><dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>     Timestamp in microseconds (since boot) when this result was last seen.</dd>
</dl>

## HotspotNetworkConfig

<dl>
<dt><h4>deviceIPAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>  Device IP Address</dd><dt><h4>deviceMacAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>  Device MAC Address</dd><dt><h4>gatewayIPAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>  Gateway IP Address</dd><dt><h4>gatewayMacAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>  Gateway MAC Address</dd>
</dl>

