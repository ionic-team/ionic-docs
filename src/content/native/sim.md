# Sim 


Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.

Requires Cordova plugin: `cordova-plugin-sim`. For more info, please see the [Cordova Sim docs](https://github.com/pbakondy/cordova-plugin-sim).


Repo: [https://github.com/pbakondy/cordova-plugin-sim](https://github.com/pbakondy/cordova-plugin-sim)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-sim
$ npm install --save @ionic-native/sim
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
import { Sim } from '@ionic-native/sim';


constructor(private sim: Sim) { }

...

this.sim.getSimInfo().then(
  (info) => console.log('Sim info: ', info),
  (err) => console.log('Unable to get sim info: ', err)
);

this.sim.hasReadPermission().then(
  (info) => console.log('Has permission: ', info)
);

this.sim.requestReadPermission().then(
  () => console.log('Permission granted'),
  () => console.log('Permission denied')
);
```




<p><br></p>

## Instance Members

### getSimInfo

Returns info from the SIM card.

### hasReadPermission

Check permission

### requestReadPermission

Request permission

<p><br></p>

