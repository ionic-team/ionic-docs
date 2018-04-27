# IOSFilePicker 



Opens the file picker on iOS for the user to select a file, returns a file URI.


Repo: [https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin](https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-filepicker
$ npm install --save @ionic-native/file-picker
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { IOSFilePicker } from '@ionic-native/file-picker';

constructor(private filePicker: IOSFilePicker) { }

...

this.filePicker.pickFile()
  .then(uri => console.log(uri))
  .catch(err => console.log('Error', err));

```



<p><br></p>

## Instance Members

### pickFile

Open a file

<dl>
<dt><h4>utis</h4></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>position</h4><strong>Type: </strong><code>IOSFilePickerPosition</code></dt>
<dd>See IOSFilePickerPosition table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## IOSFilePickerPosition

<dl>
<dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

