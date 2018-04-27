# LocationAccuracy 


This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.


Repo: [https://github.com/dpa99c/cordova-plugin-request-location-accuracy](https://github.com/dpa99c/cordova-plugin-request-location-accuracy)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-request-location-accuracy
$ npm install --save @ionic-native/location-accuracy
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { LocationAccuracy } from '@ionic-native/location-accuracy';

constructor(private locationAccuracy: LocationAccuracy) { }

...

this.locationAccuracy.canRequest().then((canRequest: boolean) => {

  if(canRequest) {
    // the accuracy option will be ignored by iOS
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => console.log('Request successful'),
      error => console.log('Error requesting location permissions', error)
    );
  }

});

```




<p><br></p>

## Instance Members

### REQUEST_PRIORITY_HIGH_ACCURACY

Convenience constant

### ERROR_ALREADY_REQUESTING

Convenience constant

### REQUEST_PRIORITY_LOW_POWER

Convenience constant

### ERROR_EXCEPTION

Convenience constant

### ERROR_CANNOT_CHANGE_ACCURACY

Convenience constant

### REQUEST_PRIORITY_NO_POWER

Convenience constant

### ERROR_INVALID_ACTION

Convenience constant

### ERROR_GOOGLE_API_CONNECTION_FAILED

Convenience constant

### ERROR_INVALID_ACCURACY

Convenience constant

### ERROR_USER_DISAGREED

Convenience constant

### REQUEST_PRIORITY_BALANCED_POWER_ACCURACY

Convenience constant

### SUCCESS_SETTINGS_SATISFIED

Convenience constant

### SUCCESS_USER_AGREED

Convenience constant

### canRequest

Indicates if you can request accurate location

### isRequesting

Indicates if a request is currently in progress

### request

Requests accurate location

<dl>
<dt><h4>accuracy</h4><strong>Type: </strong><code>number</code></dt>
<dd>Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_</dd>
</dl>

<p><br></p>

