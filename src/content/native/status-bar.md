# StatusBar 


Manage the appearance of the native status bar.

Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).


Repo: [https://github.com/apache/cordova-plugin-statusbar](https://github.com/apache/cordova-plugin-statusbar)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-statusbar
$ npm install --save @ionic-native/status-bar
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { StatusBar } from '@ionic-native/status-bar';

constructor(private statusBar: StatusBar) { }

...

// let status bar overlay webview
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.backgroundColorByHexString('#ffffff');
```





<p><br></p>

## Instance Members

### backgroundColorByHexString

Set the status bar to a specific hex color (CSS shorthand supported!).

<dl>
<dt><h4>hexString</h4><strong>Type: </strong><code>string</code></dt>
<dd>The hex value of the color.
</dd>
</dl>

### backgroundColorByName

Set the status bar to a specific named color. Valid options:
black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.

<dl>
<dt><h4>colorName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the color (from above)
</dd>
</dl>

### hide

Hide the StatusBar

### isVisible

Whether the StatusBar is currently visible or not.

### overlaysWebView

Set whether the status bar overlays the main app view. The default
is true.

<dl>
<dt><h4>doesOverlay</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Whether the status bar overlays the main app view.
</dd>
</dl>

### show

Show the StatusBar

### styleBlackOpaque

Use the blackOpaque statusbar (light text, for dark backgrounds).

### styleBlackTranslucent

Use the blackTranslucent statusbar (light text, for dark backgrounds).

### styleDefault

Use the default statusbar (dark text, for light backgrounds).

### styleLightContent

Use the lightContent statusbar (light text, for dark backgrounds).

<p><br></p>

