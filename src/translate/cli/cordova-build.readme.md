Like running `cordova build` directly, but also builds web assets with configuration from `ionic build` and provides friendly checks.

To pass additional options to the Cordova CLI, use the `--` separator after the Ionic CLI arguments.

The Cordova CLI requires a separator for platform-specific arguments for Android [builds](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags), so an additional separator is required for the Ionic CLI, but it is not required for iOS [builds](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags). See the example commands for usage with separators. To avoid using flags, consider using `--buildConfig` with a **build.json** file.