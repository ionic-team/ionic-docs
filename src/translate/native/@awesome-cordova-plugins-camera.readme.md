
Take a photo or capture video.

Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).

[Warning] Since IOS 10 the camera requires permissions to be placed in your config.xml add
```xml
<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 <string>You can take photos</string>
</config-file>
```
inside of the <platform name='ios> section
