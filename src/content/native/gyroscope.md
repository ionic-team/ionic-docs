# Gyroscope 

Read Gyroscope sensor data

Repo: [https://github.com/NeoLSN/cordova-plugin-gyroscope](https://github.com/NeoLSN/cordova-plugin-gyroscope)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-gyroscope
$ npm install --save @ionic-native/gyroscope
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';


constructor(private gyroscope: Gyroscope) { }

...


let options: GyroscopeOptions = {
   frequency: 1000
}

this.gyroscope.getCurrent(options)
  .then((orientation: GyroscopeOrientation) => {
     console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   })
  .catch()


this.gyroscope.watch()
   .subscribe((orientation: GyroscopeOrientation) => {
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   });

```



<p><br></p>

## Instance Members

### getCurrent

Get current data from gyroscope sensor

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GyroscopeOptions</code></dt>
<dd>See GyroscopeOptions table below <span class="tag">optional</span></dd>
</dl>

### watch

Watching for gyroscope sensor changes

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GyroscopeOptions</code></dt>
<dd>See GyroscopeOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## GyroscopeOptions

<dl>
<dt><h4>frequency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Represent how often (in milliseconds) sensor should be read.  Default is 10000 ms</dd>
</dl>

## GyroscopeOrientation

<dl>
<dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Represent timestamp of sensor read. Default is 10000ms</dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Represent x-axis</dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Represent y-axis</dd><dt><h4>z</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Represent z-axis</dd>
</dl>

