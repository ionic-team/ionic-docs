# Diagnostic 


Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi


Repo: [https://github.com/dpa99c/cordova-diagnostic-plugin](https://github.com/dpa99c/cordova-diagnostic-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova.plugins.diagnostic
$ npm install --save @ionic-native/diagnostic
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { Diagnostic } from '@ionic-native/diagnostic';

constructor(private diagnostic: Diagnostic) { }

...

let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); }
let errorCallback = (e) => console.error(e);

this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);

this.diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);


this.diagnostic.getBluetoothState()
  .then((state) => {
    if (state == this.diagnostic.bluetoothState.POWERED_ON){
      // do something
    } else {
      // do something else
    }
  }).catch(e => console.error(e));

```





<p><br></p>

## Instance Members

### isMotionAvailable

Checks if motion tracking is available on the current device.

### NFCState



### isMotionRequestOutcomeAvailable

Checks if it's possible to determine the outcome of a motion authorization request on the current device.
There's no direct way to determine if authorization was granted or denied, so the Pedometer API must be used to indirectly determine this:
therefore, if the device supports motion tracking but not Pedometer Event Tracking, the outcome of requesting motion detection cannot be determined.

### permissionGroups



### getBluetoothState

Returns the state of Bluetooth on the device.

### getCalendarAuthorizationStatus

Returns the calendar authorization status for the application.

### getCameraAuthorizationStatus

Returns the camera authorization status for the application.

<dl>
<dt><h4>externalStorage</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getCameraRollAuthorizationStatus

Returns the authorization status for the application to use the Camera Roll in Photos app.

### getContactsAuthorizationStatus

Returns the contacts authorization status for the application.

### getExternalSdCardDetails

Returns details of external SD card(s): absolute path, is writable, free space.

### getExternalStorageAuthorizationStatus

CReturns the external storage authorization status for the application.

### getLocationAuthorizationStatus

Returns the location authorization status for the application.

### getLocationMode

Returns the current location mode setting for the device.

### getMicrophoneAuthorizationStatus

Returns the microphone authorization status for the application.

### getMotionAuthorizationStatus

Checks motion authorization status for the application.

### getPermissionAuthorizationStatus

Returns the current authorization status for a given permission.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

<dl>
<dt><h4>permission</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### getPermissionsAuthorizationStatus

Returns the current authorization status for multiple permissions.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

<dl>
<dt><h4>permissions</h4></dt>
<dd>undefined</dd>
</dl>

### getRemindersAuthorizationStatus

Returns the reminders authorization status for the application.

### getRemoteNotificationTypes

Indicates the current setting of notification types for the app in the Settings app.
Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.

### getRemoteNotificationsAuthorizationStatus

Returns the authorization status for the application to use Remote Notifications.
Note: Works on iOS 10+ only (iOS 9 and below will invoke the error callback).

### hasBluetoothLEPeripheralSupport

Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.

### hasBluetoothLESupport

Checks if the device has Bluetooth Low Energy (LE) capabilities.

### hasBluetoothSupport

Checks if the device has Bluetooth capabilities.

### isADBModeEnabled

Checks if the device setting for ADB(debug) is switched on.

### isBackgroundRefreshAuthorized

Checks if the application is authorized for background refresh.

### isBluetoothAvailable

Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />

### isBluetoothEnabled

Checks if the device setting for Bluetooth is switched on.
This requires `BLUETOOTH` permission on Android

### isCalendarAuthorized

Checks if the application is authorized to use the calendar.

### isCameraAuthorized

Checks if the application is authorized to use the camera.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.

<dl>
<dt><h4>externalStorage</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### isCameraAvailable

Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
application is authorized to use it.

<dl>
<dt><h4>externalStorage</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### isCameraPresent

Checks if camera hardware is present on device.

### isCameraRollAuthorized

Checks if the application is authorized to use the Camera Roll in Photos app.

### isContactsAuthorized

Checks if the application is authorized to use contacts (address book).

### isDataRoamingEnabled

Checks if the device data roaming setting is enabled.

### isDeviceRooted

Checks if the device is rooted.

### isExternalStorageAuthorized

Checks if the application is authorized to use external storage.

### isGpsLocationAvailable

Checks if high-accuracy locations are available to the app from GPS hardware.
Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorized to use location.

### isGpsLocationEnabled

Checks if location mode is set to return high-accuracy locations from GPS hardware.
  Returns true if Location mode is enabled and is set to either:
  - Device only = GPS hardware only (high accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)

### isLocationAuthorized

Checks if the application is authorized to use location.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

### isLocationAvailable

Checks if app is able to access device location.

### isLocationEnabled

Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.

### isMicrophoneAuthorized

Checks if the application is authorized to use the microphone.

### motionStatus



### getBackgroundRefreshStatus

Returns the background refresh authorization status for the application.

### isNFCAvailable

Checks if NFC is available to the app. Returns true if the device has NFC capabilities AND if NFC setting is switched on.
Note: this operation does not require NFC permission in the manifest.

### isNFCEnabled

Checks if the device setting for NFC is switched on.
Note: this operation does not require NFC permission in the manifest.

### isNFCPresent

Checks if NFC hardware is present on device.

### isNetworkLocationAvailable

Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorized to use location.

### isNetworkLocationEnabled

Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
Returns true if Location mode is enabled and is set to either:
  - Battery saving = network triangulation and Wifi network IDs (low accuracy)
  - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)

### isRegisteredForRemoteNotifications

Indicates if the app is registered for remote (push) notifications on the device.

### isRemindersAuthorized

Checks if the application is authorized to use reminders.

### isRemoteNotificationsEnabled

Checks if remote (push) notifications are enabled.

### isRequestingPermission

Indicates if the plugin is currently requesting a runtime permission via the native API.
Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.

### isWifiAvailable

Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`

### isWifiEnabled

Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`

### permission



### locationMode



### locationAuthorizationMode



### bluetoothState



### setWifiState

Enables/disables WiFi on the device.
Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android

<dl>
<dt><h4>state</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### permissionStatus



### switchToBluetoothSettings

Displays Bluetooth settings to allow user to enable Bluetooth.

### requestBluetoothAuthorization

Requests Bluetooth authorization for the application.

### registerBluetoothStateChangeHandler

Registers a function to be called when a change in Bluetooth state occurs.

<dl>
<dt><h4>handler</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below</dd>
</dl>

### registerLocationStateChangeHandler

Registers a function to be called when a change in Location state occurs.

<dl>
<dt><h4>handler</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below</dd>
</dl>

### registerNFCStateChangeHandler

Registers a function to be called when a change in NFC state occurs. Pass in a falsy value to de-register the currently registered function.

<dl>
<dt><h4>handler</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below</dd>
</dl>

### registerPermissionRequestCompleteHandler

Registers a function to be called when a runtime permission request has completed.
Pass in a falsy value to de-register the currently registered function.

<dl>
<dt><h4>handler</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below</dd>
</dl>

### switchToNFCSettings

Displays NFC settings to allow user to enable NFC.

### requestCameraAuthorization

Requests camera authorization for the application.

<dl>
<dt><h4>externalStorage</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### requestCalendarAuthorization

Requests calendar authorization for the application.

### switchToSettings

Opens settings page for this app.
On Android, this opens the "App Info" page in the Settings app.
On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.

### requestMotionAuthorization

Requests motion tracking authorization for the application.

### requestContactsAuthorization

Requests contacts authorization for the application.

### requestCameraRollAuthorization

Requests camera roll authorization for the application.
Should only be called if authorization status is NOT_REQUESTED.
Calling it when in any other state will have no effect.

### requestExternalStorageAuthorization

Requests external storage authorization for the application.

### requestLocationAuthorization

Returns the location authorization status for the application.
Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

<dl>
<dt><h4>mode</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### requestMicrophoneAuthorization

Requests microphone authorization for the application.

### requestRemindersAuthorization

Requests reminders authorization for the application.

### requestRuntimePermission

Requests app to be granted authorization for a runtime permission.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.

<dl>
<dt><h4>permission</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### requestRuntimePermissions

Requests app to be granted authorization for multiple runtime permissions.
Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

<dl>
<dt><h4>permissions</h4></dt>
<dd>undefined</dd>
</dl>

### setBluetoothState

Enables/disables Bluetooth on the device.
Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android

<dl>
<dt><h4>state</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined</dd>
</dl>

### switchToLocationSettings

Displays the device location settings to allow user to enable location services/change location mode.

### switchToMobileDataSettings

Displays mobile settings to allow user to enable mobile data.

### switchToWifiSettings

Displays WiFi settings to allow user to enable WiFi.

### switchToWirelessSettings

Switches to the wireless settings page in the Settings app. Allows configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks.

<p><br></p>

