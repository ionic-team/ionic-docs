# NetworkInterface 


Network interface information plugin for Cordova/PhoneGap that supports Android, Blackberry 10, Browser, iOS, and Windows Phone 8.


Repo: [https://github.com/salbahra/cordova-plugin-networkinterface](https://github.com/salbahra/cordova-plugin-networkinterface)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-networkinterface
$ npm install --save @ionic-native/network-interface
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* Browser
* iOS
* Windows
* Windows Phone




### Usage


```typescript
import { NetworkInterface } from '@ionic-native/network-interface';


constructor(private networkInterface: NetworkInterface) { }

...

this.networkInterface.getWiFiIPAddress(function (ip) { alert(ip); });
this.networkInterface.getCarrierIPAddress(function (ip) { alert(ip); });


```




<p><br></p>

## Instance Members

### getCarrierIPAddress

Gets the wireless carrier IP address

### getIPAddress



### getWiFiIPAddress

Gets the WiFi IP address

<p><br></p>

