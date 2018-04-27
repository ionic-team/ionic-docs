# DocumentPicker 



Opens the file picker on iOS for the user to select a file, returns a file URI.
Allows the user to upload files from iCloud


Repo: [https://github.com/iampossible/Cordova-DocPicker](https://github.com/iampossible/Cordova-DocPicker)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-documentpicker.DocumentPicker
$ npm install --save @ionic-native/document-picker
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { IOSDocumentPicker } from '@ionic-native/document-picker';

constructor(private docPicker: IOSDocumentPicker) { }

...

this.docPicker.getFile('all')
  .then(uri => console.log(uri))
  .catch(e => console.log(e));

```




<p><br></p>

## Instance Members

### getFile

Open a file

<dl>
<dt><h4>option</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

<p><br></p>

