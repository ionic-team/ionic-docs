# OpenALPR 


This Cordova plugin adds support for the OpenALPR (Automatic License Plate Recognition) library, which provides support for retrieving the license plate from a picture.


Repo: [https://github.com/iMicknl/cordova-plugin-openalpr](https://github.com/iMicknl/cordova-plugin-openalpr)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-openalpr
$ npm install --save @ionic-native/openalpr
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { OpenALPR, OpenALPROptions, OpenALPRResult } from '@ionic-native/openalpr';


constructor(private openALPR: OpenALPR) { }

const scanOptions: OpenALPROptions = {
   country: this.openALPR.Country.EU,
   amount: 3
}

// To get imageData, you can use the @ionic-native/camera module for example. It works with DestinationType.FILE_URI and DATA_URL

this.openALPR.scan(imageData, scanOptions)
  .then((res: [OpenALPRResult]) => console.log(res))
  .catch((error: Error) => console.error(error));

```




<p><br></p>

## Instance Members

### Country



### scan

This function does something

<dl>
<dt><h4>imageData</h4><strong>Type: </strong><code>any</code></dt>
<dd>Base64 encoding of the image data or the image file URI</dd><dt><h4>options</h4><strong>Type: </strong><code>OpenALPROptions</code></dt>
<dd>See OpenALPROptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## OpenALPROptions

<dl>
<dt><h4>amount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Amount of results returned <span class="tag">optional</span></dd><dt><h4>country</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Country used for scanning the license plate <span class="tag">optional</span></dd>
</dl>

## OpenALPRResult

<dl>
<dt><h4>confidence</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Probability</dd><dt><h4>number</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>LicensePlate</dd>
</dl>

