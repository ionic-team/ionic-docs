# Keychain 


Get and set data in the iOS Keychain

Requires Cordova plugin: `cordova-plugin-ios-keychain`. For more info, please see the [Keychain plugin docs](https://github.com/ionic-team/cordova-plugin-ios-keychain).

See also [Secure Storage](https://ionicframework.com/docs/native/secure-storage/) for more supported platforms.


Repo: [https://github.com/ionic-team/cordova-plugin-ios-keychain](https://github.com/ionic-team/cordova-plugin-ios-keychain)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-ios-keychain
$ npm install --save @ionic-native/keychain
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { Keychain } from '@ionic-native/keychain';

constructor(private keychain: Keychain) { }

...

this.keychain.set(key, value).then(() => {
  this.keychain.get(key)
    .then(value => console.log('Got value', value))
    .catch(err => console.error('Error getting', err));
})
.catch(err => console.error('Error setting', err));
```




<p><br></p>

## Instance Members

### get

Retrieves a value for a key

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key to retrieve</dd><dt><h4>touchIDMessage</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getJson

Gets a JSON value for a key

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key to retrieve</dd><dt><h4>touchIDMessage</h4><strong>Type: </strong><code>string</code></dt>
<dd>the message to show underneath the TouchID prompt (if any)
 <span class="tag">optional</span></dd>
</dl>

### remove

Removes a value for a key

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key to remove
</dd>
</dl>

### set

Sets a value for a key

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key to set</dd><dt><h4>value</h4></dt>
<dd>the value to set</dd><dt><h4>useTouchID</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### setJson

Sets a JSON value for a key

<dl>
<dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>the key to set</dd><dt><h4>obj</h4><strong>Type: </strong><code>any</code></dt>
<dd>value the value to set</dd><dt><h4>useTouchId</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

<p><br></p>

