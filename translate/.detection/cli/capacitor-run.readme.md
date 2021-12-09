`ionic capacitor run` will do the following:
- Perform `ionic build` (or run the dev server from `ionic serve` with the `--livereload` option)
- Copy web assets into the specified native platform
- Open the IDE for your native project (Xcode for iOS, Android Studio for Android)

When using the `--livereload` option and need to serve to your LAN, a device, or an emulator, use the `--external` option also. Otherwise, the web view tries to access `localhost`.

Once the web assets and configuration are copied into your native project, the app can run on devices and emulators/simulators using the native IDE. Unfortunately, programmatically building and launching the native project is not yet supported.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).