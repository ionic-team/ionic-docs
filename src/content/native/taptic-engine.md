# TapticEngine 


An Ionic plugin to use Taptic Engine API on iPhone 7, 7 Plus or newer.


Repo: [https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine](https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-taptic-engine
$ npm install --save @ionic-native/taptic-engine
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { TapticEngine } from '@ionic-native/taptic-engine';

...

constructor(private taptic: TapticEngine) { }

...

this.taptic.selection();

this.taptic.notification();

this.taptic.impact();

```




<p><br></p>

## Instance Members

### impact

Use this to indicate success/failure/warning to the user.

<dl>
<dt><h4>options</h4></dt>
<dd>should be of the type { style: 'light' } (or 'medium'/'heavy')</dd>
</dl>

### notification

Use this to indicate success/failure/warning to the user.

<dl>
<dt><h4>options</h4></dt>
<dd>should be of the type { type: 'success' } (or 'warning'/'error')</dd>
</dl>

### selection

Use selection feedback generators to indicate a change in selection.

<p><br></p>

