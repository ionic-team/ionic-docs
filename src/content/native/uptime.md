# Uptime 


This plugin provides the time spent in milliseconds since boot (uptime).


Repo: [https://github.com/s1lviu/cordova-plugin-uptime](https://github.com/s1lviu/cordova-plugin-uptime)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-uptime
$ npm install --save @ionic-native/uptime
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
ionic cordova plugin add cordova-plugin-uptime
import { Uptime } from '@ionic-native/uptime';

constructor(private uptime: Uptime) { }

...

this.uptime.getUptime(includeDeepSleep)
  .then(uptime => console.log(uptime))
  .catch(error => console.log(error));

```




<p><br></p>

## Instance Members

### getUptime

This function return system uptime

<dl>
<dt><h4>includeDeepSleep</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to include system deep sleep</dd>
</dl>

<p><br></p>

