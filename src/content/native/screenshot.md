# Screenshot 

Captures a screen shot

Repo: [https://github.com/gitawego/cordova-screenshot](https://github.com/gitawego/cordova-screenshot)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com.darktalker.cordova.screenshot
$ npm install --save @ionic-native/screenshot
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* macOS




### Usage


```typescript
import { Screenshot } from '@ionic-native/screenshot';

constructor(private screenshot: Screenshot) { }

...

// Take a screenshot and save to file
this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess, onError);

// Take a screenshot and get temporary file URI
this.screenshot.URI(80).then(onSuccess, onError);
```




<p><br></p>

## Instance Members

### URI

 Takes screenshot and returns the image as an URI

<dl>
<dt><h4>quality</h4><strong>Type: </strong><code>number</code></dt>
<dd>Determines the quality of the screenshot.
       Default quality is set to 100. <span class="tag">optional</span></dd>
</dl>

### save

 Takes screenshot and saves the image

<dl>
<dt><h4>format</h4><strong>Type: </strong><code>string</code></dt>
<dd>Format can take the value of either 'jpg' or 'png'
On ios, only 'jpg' format is supported <span class="tag">optional</span></dd><dt><h4>quality</h4><strong>Type: </strong><code>number</code></dt>
<dd>Determines the quality of the screenshot.
       Default quality is set to 100. <span class="tag">optional</span></dd><dt><h4>filename</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of the file as stored on the storage <span class="tag">optional</span></dd>
</dl>

<p><br></p>

