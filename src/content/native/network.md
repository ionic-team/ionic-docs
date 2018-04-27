# Network 


Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).


Repo: [https://github.com/apache/cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-network-information
$ npm install --save @ionic-native/network
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Network } from '@ionic-native/network';

constructor(private network: Network) { }

...

// watch network for a disconnect
let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
});

// stop disconnect watch
disconnectSubscription.unsubscribe();


// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // We just got a connection but we need to wait briefly
  // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('we got a wifi connection, woohoo!');
    }
  }, 3000);
});

// stop connect watch
connectSubscription.unsubscribe();

```



<p><br></p>

## Instance Members

### downlinkMax

Downlink Max Speed

### onConnect

Get notified when the device goes online

### onDisconnect

Get notified when the device goes offline

### onchange

Returns an observable to watch connection changes

### type

Connection type

<p><br></p>

