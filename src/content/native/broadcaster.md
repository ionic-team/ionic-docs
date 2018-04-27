# Broadcaster 


This plugin adds exchanging events between native code and your app.


Repo: [https://github.com/bsorrentino/cordova-broadcaster](https://github.com/bsorrentino/cordova-broadcaster)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-broadcaster
$ npm install --save @ionic-native/broadcaster
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Browser




### Usage


```typescript
import { Broadcaster } from '@ionic-native/broadcaster';

constructor(private broadcaster: Broadcaster) { }

...

// Listen to events from Native
this.broadcaster.addEventListener('eventName').subscribe((event) => console.log(event));

// Send event to Native
this.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));

```




<p><br></p>

## Instance Members

### addEventListener

This function listen to an event sent from the native code

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### fireNativeEvent

This function sends data to the native code

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>eventData</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

