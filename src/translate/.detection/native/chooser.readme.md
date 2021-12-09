
File chooser plugin for Cordova.

The following must be added to config.xml to prevent crashing when selecting large files on Android:
```xml
<platform name="android">
 <edit-config
   file="app/src/main/AndroidManifest.xml"
   mode="merge"
   target="/manifest/application">
   <application android:largeHeap="true" />
 </edit-config>
</platform>
```
