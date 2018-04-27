# NativeRingtones 


The plugin helps get the native ringtones list on Android or IOS devices.
And you can also use this plugin to play or stop the native ringtones and custom ringtones(added in the www folder).


Repo: [https://github.com/TongZhangzt/cordova-plugin-native-ringtones](https://github.com/TongZhangzt/cordova-plugin-native-ringtones)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-native-ringtones
$ npm install --save @ionic-native/native-ringtones
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```
import { NativeRingtones } from '@ionic-native/native-ringtones';


constructor(private ringtones: NativeRingtones) { }

...
this.ringtones.getRingtone().then((ringtones) => { console.log(ringtones); });

this.ringtones.playRingtone('assets/ringtones/sound_1.caf');

this.ringtones.stopRingtone('assets/ringtones/sound_1.caf');

```




<p><br></p>

## Instance Members

### getRingtone

Get the ringtone list of the device

### playRingtone

This function starts playing the ringtone

<dl>
<dt><h4>ringtoneUri</h4><strong>Type: </strong><code>string</code></dt>
<dd>The path to the ringtone file</dd>
</dl>

### stopRingtone

This function stops playing the ringtone

<dl>
<dt><h4>ringtoneUri</h4><strong>Type: </strong><code>string</code></dt>
<dd>The path to the ringtone file</dd>
</dl>

<p><br></p>

