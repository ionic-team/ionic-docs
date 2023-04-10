# Using Native Functionality

Depending on which Cordova Plugin you're using, you may need to run your app on a physical or virtual device in order to test out that feature.

For instance, a plugin for utilizing the Gyroscope will only work on a physical device, while a plugin for Storage will work in Serve as well.

In order to debug Native Functionality, it is best to utilize the native tooling. For instance, you might want to use the following in order to test:

1. In Studio's main toolbar, click on **Project** &raquo; **Build** &raquo; **Build iOS** (or Android)
1. Click on **Project** &raquo; **Open in XCode** (or Android Studio)
1. Use XCode or Android Studio to run your project on your physical device.
1. You now have access to native debugging logs inside of XCode or Android Studio.
1. You can also use Safari (iOS) or Chrome (Android) in order to inspect the web content of your application.

For more detailed instructions, please see the [Building for iOS](../../developing/ios.md) or [Building for Android](../../developing/android.md) documentation.

If you'd like to follow along with a beginners tutorial that includes utilizing the Camera Cordova plugin, please see our [Build your First App guide](../../angular/your-first-app.md). While this guide isn't specific to Studio, you can still follow along using Studio.
