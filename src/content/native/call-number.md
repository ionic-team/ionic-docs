# CallNumber 


Call a number directly from your Cordova/Ionic application.
**NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.


Repo: [https://github.com/Rohfosho/CordovaCallNumberPlugin](https://github.com/Rohfosho/CordovaCallNumberPlugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add call-number
$ npm install --save @ionic-native/call-number
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { CallNumber } from '@ionic-native/call-number';

constructor(private callNumber: CallNumber) { }

...


this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));

```




<p><br></p>

## Instance Members

### callNumber

Calls a phone number

<dl>
<dt><h4>numberToCall</h4><strong>Type: </strong><code>string</code></dt>
<dd>The phone number to call as a string</dd><dt><h4>bypassAppChooser</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to bypass the app chooser and go directly to dialer</dd>
</dl>

### isCallSupported

Check if call feature is available

<p><br></p>

