# Instagram 

Share a photo with the instagram app


Repo: [https://github.com/vstirbu/InstagramPlugin](https://github.com/vstirbu/InstagramPlugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-instagram-plugin
$ npm install --save @ionic-native/instagram
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Instagram } from '@ionic-native/instagram';

constructor(private instagram: Instagram) { }

...

this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
  .then(() => console.log('Shared!'))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### isInstalled

Detect if the Instagram application is installed on the device.

### share

Share an image on Instagram
Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.

<dl>
<dt><h4>canvasIdOrDataUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>The canvas element id or the dataURL of the image to share</dd><dt><h4>caption</h4><strong>Type: </strong><code>string</code></dt>
<dd>The caption of the image <span class="tag">optional</span></dd>
</dl>

### shareAsset

Share a library asset or video

<dl>
<dt><h4>assetLocalIdentifier</h4><strong>Type: </strong><code>string</code></dt>
<dd>A local fileURI</dd>
</dl>

<p><br></p>

