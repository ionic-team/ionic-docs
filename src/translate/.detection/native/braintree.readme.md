
This plugin enables the use of the Braintree Drop-In Payments UI in your Ionic applications on Android and iOS, using the native Drop-In UI for each platform (not the Javascript SDK).

 Ionic Native utilizes [a maintained fork](https://github.com/taracque/cordova-plugin-braintree) of the original `cordova-plugin-braintree`

 For information on how to use Apple Pay with this plugin, please refer to the [plugin documentation](https://github.com/Taracque/cordova-plugin-braintree#apple-pay-ios-only)

**NOTE**: This is not a complete payments solution. All of the Braintree client-side UIs simply generate a payment nonce that must then be processed by your server to complete the payment.
See the [Braintree Node server documentation](https://developers.braintreepayments.com/start/hello-server/node) for details and a [sample Express server](https://github.com/braintree/braintree_express_example) that implements the required functionality.
