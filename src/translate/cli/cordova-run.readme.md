Like running `cordova run` or `cordova emulate` directly, but performs `ionic build` before deploying to the device or emulator. Optionally specify the `--livereload` option to use the dev server from `ionic serve` for livereload functionality.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).

Just like with `ionic cordova build`, you can pass additional options to the Cordova CLI using the `--` separator. To pass additional options to the dev server, consider using `ionic serve` and the `--livereload-url` option.

With the experimental `--native-run` flag, this command will first use Cordova to build your app, and then it will run it on a device using the `native-run` [utility](https://github.com/ionic-team/native-run) instead of Cordova.