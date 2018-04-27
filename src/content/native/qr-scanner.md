# QRScanner 




Repo: [https://github.com/bitpay/cordova-plugin-qrscanner](https://github.com/bitpay/cordova-plugin-qrscanner)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-qrscanner
$ npm install --save @ionic-native/qr-scanner
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


constructor(private qrScanner: QRScanner) { }

...

// Optionally request the permission early
this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));


```



<p><br></p>

## Instance Members

### prepare

Request permission to use QR scanner.

### destroy

Destroy the scanner instance.

### resumePreview

Resumse the video preview and resumes scanning.

### enableLight

Enable the device's light (for scanning in low-light environments).

### disableLight

Disable the device's light.

### getStatus

Returns permission status

### hide

Configures the native webview to be opaque with a white background, covering the video preview.

### openSettings

Opens settings to edit app permissions.

### pausePreview

Pauses the video preview on the current frame and pauses scanning.

### scan

Call this method to enable scanning. You must then call the `show` method to make the camera preview visible.

### show

Configures the native webview to have a transparent background, then sets the background of the <body> and <html> DOM elements to transparent, allowing the webview to re-render with the transparent background.

### useBackCamera

Use back camera

### useCamera

Set camera to be used.

<dl>
<dt><h4>camera</h4><strong>Type: </strong><code>number</code></dt>
<dd>Provide `0` for back camera, and `1` for front camera.</dd>
</dl>

### useFrontCamera

Use front camera

<p><br></p>

## QRScannerStatus

<dl>
<dt><h4>authorized</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>On iOS and Android 6.0+, camera access is granted at runtime by the user (by clicking "Allow" at the dialog).
The authorized property is a boolean value which is true only when the user has allowed camera access to your app (AVAuthorizationStatus.Authorized).
On platforms with permissions granted at install (Android pre-6.0, Windows Phone) this property is always true.</dd><dt><h4>canChangeCamera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true only if the current device "should" have a front camera.
The camera may still not be capturable, which would emit error code 3, 4, or 5 when the switch is attempted.
(On the browser platform, this value is false until the prepare method is called.)</dd><dt><h4>canEnableLight</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true only if the users' device can enable a light in the direction of the currentCamera.</dd><dt><h4>canOpenSettings</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true only if the users' operating system is able to QRScanner.openSettings().</dd><dt><h4>currentCamera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A number representing the index of the currentCamera. 0 is the back camera, 1 is the front.</dd><dt><h4>denied</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true if the user permanently denied camera access to the app (AVAuthorizationStatus.Denied).
Once denied, camera access can only be gained by requesting the user change their decision (consider offering a link to the setting via openSettings()).</dd><dt><h4>lightEnabled</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true if the light is enabled.</dd><dt><h4>prepared</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true if QRScanner is prepared to capture video and render it to the view.</dd><dt><h4>previewing</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true if QRScanner is displaying a live preview from the device's camera. Set to false when the preview is paused.</dd><dt><h4>restricted</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true if the user is unable to grant permissions due to parental controls, organization security configuration profiles, or similar reasons.</dd><dt><h4>scanning</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true if QRScanner is actively scanning for a QR code.</dd><dt><h4>showing</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A boolean value which is true when the preview layer is visible (and on all platforms but browser, the native webview background is transparent).</dd>
</dl>

