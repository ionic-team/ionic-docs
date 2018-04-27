# HeaderColor 


Cordova plugin to change color of header in Android Multitask View


Repo: [https://github.com/tomloprod/cordova-plugin-headercolor](https://github.com/tomloprod/cordova-plugin-headercolor)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-headercolor
$ npm install --save @ionic-native/header-color
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { HeaderColor } from '@ionic-native/header-color';

constructor(private headerColor: HeaderColor) { }

...

this.headerColor.tint('#becb29');
```




<p><br></p>

## Instance Members

### tint

Set a color to the task header

<dl>
<dt><h4>color</h4><strong>Type: </strong><code>string</code></dt>
<dd>The hex value of the color</dd>
</dl>

<p><br></p>

