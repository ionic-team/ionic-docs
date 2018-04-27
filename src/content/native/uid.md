# Uid 


Get unique identifiers: UUID, IMEI, IMSI, ICCID and MAC.


Repo: [https://github.com/lionelhe/cordova-plugin-uid](https://github.com/lionelhe/cordova-plugin-uid)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-uid
$ npm install --save @ionic-native/uid
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { Uid } from '@ionic-native/uid';
import { AndroidPermissions } from '@ionic-native/android-permissions';

constructor(private uid: Uid, private androidPermissions: AndroidPermissions) { }


async getImei() {
 const { hasPermission } = await this.androidPermissions.checkPermission(
   this.androidPermissions.PERMISSION.READ_PHONE_STATE
 );

 if (!hasPermission) {
   const result = await this.androidPermissions.requestPermission(
     this.androidPermissions.PERMISSION.READ_PHONE_STATE
   );

   if (!result.hasPermission) {
     throw new Error('Permissions required');
   }

   // ok, a user gave us permission, we can get him identifiers after restart app
   return;
 }

  return this.uid.IMEI
}
```




<p><br></p>

## Instance Members

### ICCID

Get the sim Integrated Circuit Card Identifier (ICCID).

### IMEI

Get the device International Mobile Station Equipment Identity (IMEI).

### IMSI

Get the device International mobile Subscriber Identity (IMSI).

### MAC

Get the Media Access Control address (MAC).

### UUID

Get the device Universally Unique Identifier (UUID).

<p><br></p>

