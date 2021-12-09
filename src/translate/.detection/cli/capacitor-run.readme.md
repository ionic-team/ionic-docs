`ionic capacitor run` will do the following:
- Perform `ionic build` (or run the dev server from `ionic serve` with the `--livereload` option)
- Run `capacitor run` (or open IDE for your native project with the `--open` option)

When using `--livereload` with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the `--external` option. See these [docs](https://ionicframework.com/docs/cli/livereload) for more information.

If you have multiple devices and emulators, you can target a specific one by ID with the `--target` option. You can list targets with `--list`.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).