# NativeStorage 

Native storage of variables in Android and iOS


Repo: [https://github.com/TheCocoaProject/cordova-plugin-nativestorage](https://github.com/TheCocoaProject/cordova-plugin-nativestorage)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-nativestorage
$ npm install --save @ionic-native/native-storage
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* macOS
* Windows




### Usage


```typescript
import { NativeStorage } from '@ionic-native/native-storage';

constructor(private nativeStorage: NativeStorage) { }

...

this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.getItem('myitem')
  .then(
    data => console.log(data),
    error => console.error(error)
  );
```




<p><br></p>

## Instance Members

### clear

Removes all stored values.

### getItem

Gets a stored item

<dl>
<dt><h4>reference</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### keys

Retrieving all keys

### remove

Removes a single stored item

<dl>
<dt><h4>reference</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### setItem

Stores a value

<dl>
<dt><h4>reference</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

