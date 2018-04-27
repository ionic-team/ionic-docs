# IntelSecurity 


The App Security API enables the use of security properties and capabilities on the platform, using a new set of API defined for application developers. You are not required to be a security expert to make good use of the API. Key elements, such as encryption of data and establishments of capabilities, is abstracted and done by the API implementation, for you.

For example:
- Use the API to store (E.g. cache) data locally, using the device non-volatile storage. Data protection/encryption will be done for you by the API implementation
- Establish a connection with remote server (E.g. XHR) using a protected channel. SSL/TLS establishment and usage will be done for you by the API implementation

For more information please visit the [API documentation](https://software.intel.com/en-us/app-security-api/api).


Repo: [https://github.com/AppSecurityApi/com-intel-security-cordova-plugin](https://github.com/AppSecurityApi/com-intel-security-cordova-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com-intel-security-cordova-plugin
$ npm install --save @ionic-native/intel-security
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { IntelSecurity } from '@ionic-native/intel-security';
...
constructor(private intelSecurity: IntelSecurity) { }
...

let storageID = 'id';

this.intelSecurity.data.createFromData({ data: 'Sample Data' })
  .then((instanceID: Number) => this.intelSecurity.storage.write({ id: storageId, instanceID: instanceID }))
  .catch((error: any) => console.log(error));

this.intelSecurity.storage.read({id: storageID })
  .then((instanceID: number) => this.intelSecurity.data.getData(instanceID))
  .then((data: string) => console.log(data)) // Resolves to 'Sample Data'
  .catch((error: any) => console.log(error));

this.intelSecurity.storage.delete({ id: storageID })
  .then(() => console.log('Deleted Successfully'))
  .catch((error: any) => console.log(error));
```



<p><br></p>

## Instance Members

### data

Returns an IntelSecurityData object

### storage

returns an IntelSecurityStorage object

<p><br></p>

## IntelSecurityDataOptions

<dl>
<dt><h4>appAccessControl</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Application access control policy. <span class="tag">optional</span></dd><dt><h4>creator</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Creator unique ID. <span class="tag">optional</span></dd><dt><h4>data</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>deviceLocality</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Device locality policy. <span class="tag">optional</span></dd><dt><h4>extraKey</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Valid secure data instance ID. <span class="tag">optional</span></dd><dt><h4>noRead</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Disallow plain-text data access. <span class="tag">optional</span></dd><dt><h4>noStore</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Disallow sealed blob access. <span class="tag">optional</span></dd><dt><h4>owners</h4><strong>Type: </strong><code>Number[]</code></dt>
<dd>Array of owners unique IDs. <span class="tag">optional</span></dd><dt><h4>sensitivityLevel</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Sensitivity level policy. <span class="tag">optional</span></dd><dt><h4>tag</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Tag text. <span class="tag">optional</span></dd><dt><h4>webOwners</h4><strong>Type: </strong><code>String[]</code></dt>
<dd>List of trusted web domains. <span class="tag">optional</span></dd>
</dl>

