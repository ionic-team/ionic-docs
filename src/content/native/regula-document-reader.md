# RegulaDocumentReader 


Plugin for reading and validation of identification documents.


Repo: [https://github.com/regulaforensics/cordova-plugin-documentreader.git](https://github.com/regulaforensics/cordova-plugin-documentreader.git)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic plugin add cordova-plugin-documentreader --variable CAMERA_USAGE_DESCRIPTION="To take photo"
$ npm install --save @ionic-native/regula-document-reader
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS
* Android




### Usage


```typescript
import { RegulaDocumentReader } from '@ionic-native/regula-document-reader';

let license; // read regula.license file
RegulaDocumentReader.initReader(license); // initialize reader
RegulaDocumentReader.scanDocument().then((result) => {
		// read result
})
```




<p><br></p>

## Instance Members

### initReader

Initialize the scanner

<dl>
<dt><h4>license</h4><strong>Type: </strong><code>any</code></dt>
<dd>License data
</dd>
</dl>

### scanDocument

Run the scanner

<p><br></p>

