Generate perfectly sized icons and splash screens from PNG source images for your Cordova platforms with this command.

The source image for icons should ideally be at least **1024×1024px** and located at **resources/icon.png**. The source image for splash screens should ideally be at least **2732×2732px** and located at **resources/splash.png**. If you used `ionic start`, there should already be default Ionic resources in the **resources/** directory, which you can overwrite.

You can also generate platform-specific icons and splash screens by placing them in the respective **resources/&lt;platform&gt;/** directory. For example, to generate an icon for Android, place your image at **resources/android/icon.png**.

For best results, the splash screen's artwork should roughly fit within a square (**1200×1200px**) at the center of the image. You can use **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** as a template for your splash screen.

`ionic cordova resources` will automatically update your **config.xml** to reflect the changes in the generated images, which Cordova then configures.

This command uses the `cordova-res` [utility](https://github.com/ionic-team/cordova-res) to generate resources locally.

Cordova reference documentation:
- Icons: **[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- Splash Screens: **[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**