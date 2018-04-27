# Base64 


This Plugin is used to encode base64 of any file, it uses js code for iOS, but in case of android it uses native code to handle android versions lower than v.3


Repo: [https://github.com/hazemhagrass/phonegap-base64](https://github.com/hazemhagrass/phonegap-base64)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com-badrit-base64
$ npm install --save @ionic-native/base64
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Base64 } from '@ionic-native/base64';

constructor(private base64: Base64) { }

...

let filePath: string = 'file:///...';
this.base64.encodeFile(filePath).then((base64File: string) => {
  console.log(base64File);
}, (err) => {
  console.log(err);
});

```




<p><br></p>

## Instance Members

### encodeFile

This function encodes base64 of any file

<dl>
<dt><h4>filePath</h4><strong>Type: </strong><code>string</code></dt>
<dd>Absolute file path</dd>
</dl>

<p><br></p>

