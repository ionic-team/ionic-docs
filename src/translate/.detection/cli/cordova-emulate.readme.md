Build your app and deploy it to devices and emulators using this command. Optionally specify the `--livereload` option to use the dev server from `ionic serve` for livereload functionality.

This command will first use `ionic build` to build web assets (or `ionic serve` with the `--livereload` option). Then, `cordova build` is used to compile and prepare your app. Finally, the `native-run` [utility](https://github.com/ionic-team/native-run) is used to run your app on a device. To use Cordova for this process instead, use the `--no-native-run` option.

If you have multiple devices and emulators, you can target a specific one with the `--target` option. You can list targets with `--list`.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).

When using `--livereload` with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the `--external` option. See these [docs](https://ionicframework.com/docs/cli/livereload) for more information.

Just like with `ionic cordova build`, you can pass additional options to the Cordova CLI using the `--` separator. To pass additional options to the dev server, consider using `ionic serve` separately and using the `--livereload-url` option.