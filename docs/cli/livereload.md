# Live Reload

Using the Live Reload option will reload the browser or [Web View](../core-concepts/webview.md) when you change your app's code in your development environment. This is particularly useful for developing using hardware devices.

## Terms

Live Reload is a conflated term. With `ionic serve`, Live Reload just refers to reloading the browser when changes are made. Live Reload can also be used with Capacitor and Cordova to provide the same experience on virtual and hardware devices, which eliminates the need for re-deploying a native binary.

## Usage

Since Live Reload requires the Web View to load your app from a URL hosted by your computer instead of just reading files on the device, setting up live-reload for hardware devices can be tricky.

As with regular device deploys, you will need a cable to connect your device to your computer. The difference is the Ionic CLI configures the Web View to load your app from the dev server on your computer.

### Capacitor

To use Live Reload with Capacitor, make sure you're either using a virtual device or a hardware device connected to the same Wi-Fi network as your computer. Then, you'll need to specify that you want to use an external IP address for the dev server using the `--external` flag.

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
ionic cordova run android -l
```

#### iOS

For iOS devices, port forwarding is not yet an option. This means you'll need to connect your device to the same Wi-Fi network as your computer and use an external address for the dev server.

In some cases, the Ionic CLI won't know the address with which to configure the Web View, so you may be prompted to select one. Be sure to select the address of your computer on your Wi-Fi network.

The following all-in-one command will start a live-reload server on **all addresses** and deploy the app to an iOS device using Cordova:

```shell
ionic cordova run ios -l --external
```

:::note
Remember, with the `--external` option, others on your Wi-Fi network will be able to access your app.
:::

## Tips

- With Cordova, use the `--device`, `--emulator`, and `--target` options to narrow down target devices. Use the `--list` option to list all targets. See usage in the [command docs](commands/cordova-run.md).
- You can separate the dev server process and the deploy process by using `ionic serve` and the `--livereload-url` option of `ionic cordova run` or `ionic capacitor run`.
- For Android, it is possible to configure [adb](https://developer.android.com/studio/command-line/adb) to always forward ports while the adb server is running (see `adb reverse`). With port forwarding set up, an external address would no longer be required. You can also setup the adb bridge over TCP such that subsequent deploys no longer need a USB cable.

### Using SSL

Live reload will use HTTP by default which will cause web APIs that require a secure context (like [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)) to fail. To establish a secure context you can use the `--ssl` argument to use HTTPS.

For example, with an Angular application you can run the following to pass a certificate and private key and serve your app with HTTPS:
```shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

Using a self signed certificate and ensuring it is trusted by the device is a complicated topic and is covered in [this article](https://ionic.zendesk.com/hc/en-us/articles/11384425513623).