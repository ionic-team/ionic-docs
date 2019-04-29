`ionic cordova prepare` will do the following:

- Perform an Ionic build, which compiles web assets to **www/**.
- Copy the **www/** directory into your Cordova platforms.
- Transform **config.xml** into platform-specific manifest files.
- Copy icons and splash screens from **resources/** to into your Cordova platforms.
- Copy plugin files into specified platforms.

You may wish to use `ionic cordova prepare` if you run your project with Android Studio or Xcode.