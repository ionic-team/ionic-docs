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

- Cordova では、`--device`、`--emulator`、および`--target`オプションを使用してターゲットデバイスを絞り込みます。`--list`オプションを使用すると、すべてのターゲットを一覧表示できます。使用方法は[コマンドドキュメント](commands/cordova-run.md)を参照してください。
- `ionic serve`および`ionic cordova run`または`ionic capacitor run`の`--livereload-url`オプションを使用することで、開発サーバープロセスとデプロイプロセスを分離できます。
- Android の場合、[adb](https://developer.android.com/studio/command-line/adb)を設定して、adb サーバー実行中に常にポートを転送することが可能です（`adb reverse`を参照）。ポート転送が設定されると、外部アドレスは不要になります。また、後続のデプロイに USB ケーブルを使用しなくても、TCP 経由で adb ブリッジを設定することもできます。
- Angular を使用した開発コンテナでは、ライブリロードが動作しない場合があります。これを修正するには、`angular.json`内で`projects.app.architect.serve.configurations.development.poll`を`1`に設定してください。

### Using SSL

Live reload will use HTTP by default which will cause web APIs that require a secure context (like [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)) to fail. To establish a secure context you can use the `--ssl` argument to use HTTPS.

For example, with an Angular application you can run the following to pass a certificate and private key and serve your app with HTTPS:

```shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

自己署名証明書を使用し、デバイスによって信頼されるようにすることは複雑なトピックであり、[Ionic サポート記事の自己署名証明書に関する記事](https://ionic.zendesk.com/hc/en-us/articles/11384425513623)で取り上げられています。
