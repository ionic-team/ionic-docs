# PowerManagement 


The PowerManagement plugin offers access to the devices power-management functionality.
It should be used for applications which keep running for a long time without any user interaction.


Repo: [https://github.com/Viras-/cordova-plugin-powermanagement](https://github.com/Viras-/cordova-plugin-powermanagement)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-powermanagement-orig
$ npm install --save @ionic-native/power-management
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone




### Usage


```typescript
import { PowerManagement } from '@ionic-native/power-management';

constructor(private powerManagement: PowerManagement) { }

...

this.powerManagement.acquire()
  .then(onSuccess)
  .catch(onError);

```




<p><br></p>

## Instance Members

### acquire

Acquire a wakelock by calling this.

### dim

This acquires a partial wakelock, allowing the screen to be dimmed.

### release

Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.

### setReleaseOnPause

By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.

<dl>
<dt><h4>set</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

