# WebIntent 


This Plugin provides a general purpose shim layer for the Android intent mechanism, exposing various ways to handle sending and receiving intents.

Repo: [https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent](https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com-darryncampbell-cordova-plugin-intent
$ npm install --save @ionic-native/web-intent
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


For usage information please refer to the plugin's Github repo.

```typescript
import { WebIntent } from '@ionic-native/web-intent';

constructor(private webIntent: WebIntent) { }

...

const options = {
  action: this.webIntent.ACTION_VIEW,
  url: 'path/to/file',
  type: 'application/vnd.android.package-archive'
}

this.webIntent.startActivity(options).then(onSuccess, onError);

```



<p><br></p>

## Instance Members

### getIntent

undefined

### ACTION_CALL

Convenience constant for actions

### getUri

Gets the Uri the app was invoked with

### ACTION_PICK

Convenience constant for actions

### ACTION_GET_CONTENT

Convenience constant for actions

### hasExtra

Checks if this app was invoked with specified extra

<dl>
<dt><h4>extra</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### ACTION_VIEW

Convenience constant for actions

### ACTION_SEND

Convenience constant for actions

### ACTION_SENDTO

Convenience constant for actions

### onIntent

Returns the content of the intent used whenever the application activity is launched

### EXTRA_TEXT

Convenience constant for extras

### EXTRA_SUBJECT

Convenience constant for extras

### EXTRA_STREAM

Convenience constant for extras

### EXTRA_EMAIL

Convenience constant for extras

### getExtra

Gets the extra that this app was invoked with

<dl>
<dt><h4>extra</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### onActivityResult

undefined

### registerBroadcastReceiver

Registers a broadcast receiver for the specified filters

<dl>
<dt><h4>filters</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### sendBroadcast

Sends a custom intent passing optional extras

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>IntentOptions</code></dt>
<dd>See IntentOptions table below</dd>
</dl>

### startActivity

Launches an Android intent

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>IntentOptions</code></dt>
<dd>See IntentOptions table below</dd>
</dl>

### startActivityForResult

Starts a new activity and return the result to the application

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>IntentOptions</code></dt>
<dd>See IntentOptions table below</dd>
</dl>

### startService

Request that a given application service be started

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>IntentOptions</code></dt>
<dd>See IntentOptions table below</dd>
</dl>

### unregisterBroadcastReceiver

Unregisters a broadcast receiver

<p><br></p>

## IntentOptions

<dl>
<dt><h4>action</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>component</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>extras</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>flags</h4><strong>Type: </strong><code>number[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>package</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>requestCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

