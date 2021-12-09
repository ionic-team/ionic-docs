`ionic capacitor build` will do the following:
- Perform `ionic build`
- Copy web assets into the specified native platform
- Open the IDE for your native project (Xcode for iOS, Android Studio for Android)

Once the web assets and configuration are copied into your native project, you can build your app using the native IDE. Unfortunately, programmatically building the native project is not yet supported.

To configure your native project, see the common configuration [docs](https://capacitor.ionicframework.com/docs/basics/configuring-your-app) as well as low-level configuration for [iOS](https://capacitor.ionicframework.com/docs/ios/configuration) and [Android](https://capacitor.ionicframework.com/docs/android/configuration).