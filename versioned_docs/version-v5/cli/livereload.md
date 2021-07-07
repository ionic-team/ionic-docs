# Live Reload

One option that can boost productivity when building Ionic apps is **Live Reload** (or **live-reload**). When active, Live Reload will reload the browser or [Web View](../core-concepts/webview.md) when changes in the app are detected. This is particularly useful for developing using hardware devices.

## Terms

Live Reload is a conflated term. With `ionic serve`, Live Reload just refers to reloading the browser when changes are made. Live Reload can also be used with Capacitor and Cordova to provide the same experience on virtual and hardware devices, which eliminates the need for re-deploying a native binary.

## Usage

Since live-reload requires the Web View to load your app from a URL hosted by your computer instead of just reading files on the device, setting up live-reload for hardware devices can be tricky.

As with regular device deploys, you will need a cable to connect your device to your computer. The difference is the Ionic CLI configures the Web View to load your app from the dev server on your computer.

### Capacitor

Capacitor does not yet have a programmatic build for development (track [this issue](https://github.com/ionic-team/capacitor/issues/324) for progress), so the Ionic CLI does **not** automatically forward ports for iOS and Android.

To use Live Reload with Capacitor, make sure you're either using a virtual device or a hardware device connected to the same Wi-Fi network as your computer. Then, you'll need to specify that you want to use an external address for the dev server using the `--external` flag.

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
Remember, with the `--external` option, others on your Wi-Fi network will be able to access your app.
:::

### Cordova

#### Android

For Android devices, the Ionic CLI will automatically forward the dev server port. This means you can use a `localhost` address and it will refer to your computer when loaded in the Web View, not the device.

The following all-in-one command will start a live-reload server on `localhost` and deploy the app to an Android device using Cordova:

```shell
$ ionic cordova run android -l
```

#### iOS

For iOS devices, port forwarding is not yet an option. This means you'll need to connect your device to the same Wi-Fi network as your computer and use an external address for the dev server.

:::note
You can track [this issue](https://github.com/ionic-team/native-run/issues/20) for progress on iOS port forwarding with Ionic.
:::

In some cases, the Ionic CLI won't know the address with which to configure the Web View, so you may be prompted to select one. Be sure to select the address of your computer on your Wi-Fi network.

The following all-in-one command will start a live-reload server on **all addresses** and deploy the app to an iOS device using Cordova:

```shell
$ ionic cordova run ios -l --external
```

:::note
Remember, with the `--external` option, others on your Wi-Fi network will be able to access your app.
:::

## Tips

- With Cordova, use the `--device`, `--emulator`, and `--target` options to narrow down target devices. Use the `--list` option to list all targets. See usage in the [command docs](commands/cordova-run.md).
- You can separate the dev server process and the deploy process by using `ionic serve` and the `--livereload-url` option of `ionic cordova run` or `ionic capacitor run`.
- For Android, it is possible to configure [adb](https://developer.android.com/studio/command-line/adb) to always forward ports while the adb server is running (see `adb reverse`). With port forwarding set up, an external address would no longer be required. You can also setup the adb bridge over TCP such that subsequent deploys no longer need a USB cable.
