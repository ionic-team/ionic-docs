# FilePath 



This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.


Repo: [https://github.com/hiddentao/cordova-plugin-filepath](https://github.com/hiddentao/cordova-plugin-filepath)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-filepath
$ npm install --save @ionic-native/file-path
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { FilePath } from '@ionic-native/file-path';

constructor(private filePath: FilePath) { }

...

this.filePath.resolveNativePath(path)
  .then(filePath => console.log(filePath))
  .catch(err => console.log(err));

```




<p><br></p>

## Instance Members

### resolveNativePath

Resolve native path for given content URL/path.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Content URL/path.</dd>
</dl>

<p><br></p>

