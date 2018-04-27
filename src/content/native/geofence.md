# Geofence 

Monitors circular geofences around latitude/longitude coordinates, and sends a notification to the user when the boundary of a geofence is crossed. Notifications can be sent when the user enters and/or exits a geofence.
Geofences persist after device reboot. Geofences will be monitored even when the app is not running.

Repo: [https://github.com/cowbell/cordova-plugin-geofence](https://github.com/cowbell/cordova-plugin-geofence)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-geofence
$ npm install --save @ionic-native/geofence
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { Geofence } from '@ionic-native/geofence';

...

constructor(private geofence: Geofence) {
  // initialize the plugin
  geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )
}

...

private addGeofence() {
  //options describing geofence
  let fence = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:       37.285951, //center of geofence radius
    longitude:      -121.936650,
    radius:         100, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          'You crossed a fence', //notification title
        text:           'You just arrived to Gliwice city center.', //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add')
   );
}

```
### Transition Types ###
Transition type specifies whether the geofence should trigger when the user enters and/or leaves the geofence.

#### Supported values ####
- 1: Enter
- 2: Leave
- 3: Both

### Defining a Geofence ###
Geofences are defined by an object that is passed to `addOrUpdate()`. Object properties are:
- id: Any unique ID for the geofence. This ID is used to remove and update a geofence
- latitude: Latitude coordinate of the center of the geofence radius
- longitude: Latitude coordinate of the center of the geofence radius
- radius: Radius from the center to the edge of the geofence
- transitionType: Type of geofence transition to monitor for. See 'Transition Types' above
- notification: Object. Options for defining the notification sent when a geofence is crossed
  - id: Any unique ID
  - title: Notification title
  - text: Notification body
  - openAppOnClick: Boolean. Whether to open the app when the notification is tapped by the user

### Troubleshooting ###
#### I get compile errors when I run `ionic build ios` or `ionic run ios`. ####
This could be caused by the Cordova project directory in `/platforms/ios` not being named correctly.
Try running `ionic cordova platform rm <platform>` then run `ionic cordova platform add <platform>` to recreate the
platform directories.




<p><br></p>

## Instance Members

### TransitionType



### addOrUpdate

Adds a new geofence or array of geofences. For geofence object, see above.

<dl>
<dt><h4>geofences</h4></dt>
<dd>null</dd>
</dl>

### getWatched

Returns an array of geofences currently being monitored.

### initialize

Initializes the plugin. User will be prompted to allow the app to use location and notifications.

### onNotificationClicked

Called when the user clicks a geofence notification. iOS and Android only.

### onTransitionReceived

Subscribe to get notified when a transition is received

### remove

Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
geofence was created.

<dl>
<dt><h4>geofenceId</h4></dt>
<dd>null</dd>
</dl>

### removeAll

Removes all geofences.

<p><br></p>

