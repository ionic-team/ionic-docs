# JinsMeme 


Implementation of the JINS MEME SDK


Repo: [https://github.com/BlyncSync/cordova-plugin-jins-meme](https://github.com/BlyncSync/cordova-plugin-jins-meme)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-jins-meme
$ npm install --save @ionic-native/jins-meme
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { JinsMeme } from '@ionic-native/jins-meme';

constructor(private jinsMeme: JinsMeme) { }

...

this.jinsMeme.setAppClientID(appClientId: string, clientSecret: string).then(
  // Bluetooth should be enabled and the JINS MEME powered on (blinking blue light)
  this.jinsMeme.startScan().subscribe((meme_addr) => {
    this.jinsMeme.connect(meme_addr).subscribe((connectResult) => {
      this.memeService.startDataReport().subscribe((dataReport) => {
        console.log(dataReport);
      });
    });
  });
.catch(console.log('jinsMeme.setAppClientID authentication error'));

```




<p><br></p>

## Instance Members

### isCalibrated

Returns calibration status

### connect

Establishes connection to JINS MEME.

<dl>
<dt><h4>target</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### isConnected

Returns whether a connection to JINS MEME has been established.

### getConnectedByOthers

Returns JINS MEME connected with other apps.

### disconnect

Disconnects from JINS MEME.

### setAppClientID

Authentication and authorization of App and SDK.
Must call this method first.
Sign up for an app ID (and get an app/client secret) at developers.jins.com

<dl>
<dt><h4>appClientId</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>clientSecret</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### getFWVersion

Returns FW Version.

### getConnectedDeviceSubType

Returns hardware version.

### getConnectedDeviceType

Returns device type.

### getHWVersion

Returns HW Version.

### getSDKVersion

Returns SDK version.

### isDataReceiving

Returns response about whether data was received or not.

### setAutoConnect

Set auto connection mode.

<dl>
<dt><h4>flag</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### startDataReport

Starts receiving realtime data.

### startScan

Starts scanning for JINS MEME.

### stopDataReport

Stops receiving data.

### stopScan

Stops scanning JINS MEME.

<p><br></p>

