# Autostart 


This plugin automatically starts your Android app after every boot or auto-update.
You can enable or disable the autostart function in your app.


Repo: [https://github.com/ToniKorin/cordova-plugin-autostart](https://github.com/ToniKorin/cordova-plugin-autostart)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-autostart
$ npm install --save @ionic-native/autostart
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { Autostart } from '@ionic-native/autostart';


constructor(private autostart: Autostart) { }

...

this.autostart.enable();

this.autostart.disable();

```




<p><br></p>

## Instance Members

### disable

Disable the automatic startup after the boot

### enable

Enable the automatic startup after the boot

<p><br></p>

