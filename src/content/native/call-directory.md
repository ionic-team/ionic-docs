# CallDirectory 


This plugin can add phone numbers to an Callkit call directory extension. Call `reloadExtension` after using `addIdentification` and `removeIdentification`
to process the changes in the call directory extension.


Repo: [https://github.com/GEDYSIntraWare/cordova-plugin-call-directory](https://github.com/GEDYSIntraWare/cordova-plugin-call-directory)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">cordova plugin add cordova-plugin-call-directory --variable EXT_NAME="Cordova-Directory" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES="NO"
$ npm install --save @ionic-native/call-directory
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { CallDirectory } from '@ionic-native/call-directory';


constructor(private callDirectory: CallDirectory) { }


let items = [{label: "Hello", number: "123"}];
this.callDirectory.addIdentification(items)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

this.callDirectory.reloadExtension()
  .then(res: string) => console.log(res))
  .catch((error: any) => console.error(error));
```




<p><br></p>

## Instance Members

### addIdentification

Add identification numbers

<dl>
<dt><h4>items</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### getAllItems

Get all numbers and labels in call directory

### isAvailable

Check if the call directory extension is available and enabled

### reloadExtension

Reload extension to process queued changes

### removeAllIdentification

Remove all items from call directory. Refreshes immediately.

### removeIdentification

Remove identification numbers

<dl>
<dt><h4>items</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

<p><br></p>

## CallDirectoryItem

<dl>
<dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>number</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

