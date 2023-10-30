
This plugin allows for android devices to continue running services in the background, using a
foreground ongoing notification. This is targeted towards use with plugins such as
'cordova-geolocation' that will not run while the app is in the background on android API 26+.

For android API 28+, the following xml snippet should be inserted into ```config.xml```:

```
...
<platform name="android">
  <config-file parent="/*" target="AndroidManifest.xml">
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
  </config-file>
  ...
```