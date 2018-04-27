# BlinkUp 


Electric Imp BlinkUp ionic plugin.


Repo: [https://github.com/SensorShare/cordova-plugin-blinkup](https://github.com/SensorShare/cordova-plugin-blinkup)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-blinkup
$ npm install --save @ionic-native/blinkup
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { BlinkUp } from '@ionic-native/blinkup';

const options = <BlinkUpWifiOptions>{
   apiKey: 'API_KEY',
   timeoutMs: 60000,
   ssid: 'MY_SSID',
   password: 'MY_PASSWORD'
 }
 BlinkUp.flashWifiBlinkUp(options).subscribe(
    (result) => console.log('Done'),
    (error) => console.log(error)
  )
```




<p><br></p>

## Instance Members

### abortBlinkUp

abortBlinkUp - abort blinkup process

### clearBlinkUpData

clearBlinkUpData - clear wifi data

### flashWPSBlinkUp

flashWPSBlinkUp - invokes the flash wps process

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BlinkUpWPSOptions</code></dt>
<dd>See BlinkUpWPSOptions table below</dd>
</dl>

### flashWifiBlinkUp

flashWifiBlinkUp - invokes the flash wifi process

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BlinkUpWifiOptions</code></dt>
<dd>See BlinkUpWifiOptions table below</dd>
</dl>

### startBlinkUp

startBlinkUp - starts the blinkup process

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>BlinkUpOptions</code></dt>
<dd>See BlinkUpOptions table below</dd>
</dl>

<p><br></p>

## BlinkUpOptions

<dl>
<dt><h4>apiKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>developmentPlanId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>isInDevelopment</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>timeoutMs</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## BlinkUpWPSOptions

<dl>
<dt><h4>apiKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>timeoutMs</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>wpsPin</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## BlinkUpWifiOptions

<dl>
<dt><h4>apiKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>password</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>ssid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>timeoutMs</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

