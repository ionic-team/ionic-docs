
写真やビデオを撮影します。

Requires the Cordova plugin: `cordova-plugin-camera`. 詳しくは [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera) をご覧ください。

[Warning] Since IOS 10 the camera requires permissions to be placed in your config.xml add
```xml
<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 <string>You can take photos</string>
</config-file>
```
inside of the <platform name='ios> section
