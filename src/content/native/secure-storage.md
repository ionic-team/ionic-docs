# SecureStorage 


This plugin gets, sets and removes key,value pairs from a device's secure storage.

Requires Cordova plugin: `cordova-plugin-secure-storage`. For more info, please see the [Cordova Secure Storage docs](https://github.com/Crypho/cordova-plugin-secure-storage).

The browser platform is supported as a mock only. Key/values are stored unencrypted in localStorage.


Repo: [https://github.com/Crypho/cordova-plugin-secure-storage](https://github.com/Crypho/cordova-plugin-secure-storage)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-secure-storage
$ npm install --save @ionic-native/secure-storage
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows




### Usage



```typescript
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

constructor(private secureStorage: SecureStorage) { }

...

this.secureStorage.create('my_store_name')
  .then((storage: SecureStorageObject) => {

     storage.get('key')
       .then(
         data => console.log(data),
         error => console.log(error)
     );

     storage.set('key', 'value')
       .then(
        data => console.log(data),
         error => console.log(error)
     );

     storage.remove('key')
     .then(
         data => console.log(data),
         error => console.log(error)
     );

  });


```



<p><br></p>

## Instance Members

### create

Creates a namespaced storage.

<dl>
<dt><h4>store</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

