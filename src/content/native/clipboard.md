# Clipboard 


Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.



Repo: [https://github.com/ihadeed/cordova-clipboard](https://github.com/ihadeed/cordova-clipboard)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-clipboard
$ npm install --save @ionic-native/clipboard
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8




### Usage


```typescript
import { Clipboard } from '@ionic-native/clipboard';

constructor(private clipboard: Clipboard) { }

...


this.clipboard.copy('Hello world');

this.clipboard.paste().then(
   (resolve: string) => {
      alert(resolve);
    },
    (reject: string) => {
      alert('Error: ' + reject);
    }
  );

this.clipboard.clear();
```




<p><br></p>

## Instance Members

### clear

Clear the text stored in clipboard

### copy

Copies the given text

<dl>
<dt><h4>text</h4><strong>Type: </strong><code>string</code></dt>
<dd>Text that gets copied on the system clipboard</dd>
</dl>

### paste

Pastes the text stored in clipboard

<p><br></p>

