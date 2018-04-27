# FileChooser 



Opens the file picker on Android for the user to select a file, returns a file URI.


Repo: [https://github.com/ihadeed/cordova-filechooser](https://github.com/ihadeed/cordova-filechooser)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-filechooser
$ npm install --save @ionic-native/file-chooser
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { FileChooser } from '@ionic-native/file-chooser';

constructor(private fileChooser: FileChooser) { }

...

this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));

```




<p><br></p>

## Instance Members

### open

Open a file

<p><br></p>

