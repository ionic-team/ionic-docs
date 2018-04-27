# Braintree 


This plugin enables the use of the Braintree Drop-In Payments UI in your Ionic applications on Android and iOS, using the native Drop-In UI for each platform (not the Javascript SDK).

 Ionic Native utilizes [a maintained fork](https://github.com/taracque/cordova-plugin-braintree) of the original `cordova-plugin-braintree`

 For information on how to use Apple Pay with this plugin, please refer to the [plugin documentation](https://github.com/Taracque/cordova-plugin-braintree#apple-pay-ios-only)

**NOTE**: This is not a complete payments solution. All of the Braintree client-side UIs simply generate a payment nonce that must then be processed by your server to complete the payment.
See the [Braintree Node server documentation](https://developers.braintreepayments.com/start/hello-server/node) for details and a [sample Express server](https://github.com/braintree/braintree_express_example) that implements the required functionality.


Repo: [https://github.com/taracque/cordova-plugin-braintree](https://github.com/taracque/cordova-plugin-braintree)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add https://github.com/taracque/cordova-plugin-braintree
$ npm install --save @ionic-native/braintree
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Braintree, ApplePayOptions, PaymentUIOptions } from '@ionic-native/braintree';

constructor(private braintree: Braintree) { }

...

// Your Braintree `Tokenization Key` from the Braintree dashboard.
// Alternatively you can also generate this token server-side
// using a client ID in order to allow users to use stored payment methods.
// See the [Braintree Client Token documentation](https://developers.braintreepayments.com/reference/request/client-token/generate/node#customer_id) for details.
const BRAINTREE_TOKEN = '<YOUR_BRAINTREE_TOKEN>';

// NOTE: Do not provide this unless you have configured your Apple Developer account
// as well as your Braintree merchant account, otherwise the Braintree module will fail.
const appleOptions: ApplePayOptions = {
  merchantId: '<YOUR MERCHANT ID>',
  currency: 'USD',
  country: 'US'
}

const paymentOptions: PaymentUIOptions = {
  amount: '14.99',
  primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
}

this.braintree.initialize(BRAINTREE_TOKEN)
  .then(() => this.braintree.setupApplePay(appleOptions))
  .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
  .then((result: PaymentUIResult) => {
    if (result.userCancelled) {
      console.log("User cancelled payment dialog.");
    } else {
      console.log("User successfully completed payment!");
      console.log("Payment Nonce: " + result.nonce);
      console.log("Payment Result.", result);
    }
  })
  .catch((error: string) => console.error(error));

```




<p><br></p>

## Instance Members

### initialize

Used to initialize the Braintree client. This function must be called before other methods can be used.
 As the initialize code is async, be sure you call all Braintree related methods after the initialize promise has resolved.

<dl>
<dt><h4>token</h4><strong>Type: </strong><code>string</code></dt>
<dd>The client token or tokenization key to use with the Braintree client.</dd>
</dl>

### presentDropInPaymentUI

Shows Braintree's Drop-In Payments UI.
 Apple Pay is only shown in the Drop In UI if you have previously called `setupApplePay`.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>PaymentUIOptions</code></dt>
<dd>See PaymentUIOptions table below <span class="tag">optional</span></dd>
</dl>

### setupApplePay

Used to configure Apple Pay on iOS.
 In order for Apple Pay payments to appear on the Drop-In Payments UI, you must initialize the Apple Pay framework before using the Drop-In Payments UI.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ApplePayOptions</code></dt>
<dd>See ApplePayOptions table below</dd>
</dl>

<p><br></p>

## ApplePayOptions

<dl>
<dt><h4>country</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The locale in which payment is accepted.
This is a 2 letter country code (ISO-3166-1) - e.g. "GB", "US", "MX"</dd><dt><h4>currency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The currency in which to receive payment.
This is a 3 letter currency code (ISO-4217) - e.g. "GBP", "USD", "MXN", etc.</dd><dt><h4>merchantId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Apple Merchant ID - can be obtained from the Apple Developer Portal.</dd>
</dl>

## PaymentUIOptions

<dl>
<dt><h4>amount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The amount of the transaction to show in the drop-in UI on the
summary row as well as the call-to-action button, as a string.
If not provided, this value will default to "0.00", e.g. free.
Unless you are simply capturing authorizations, you probably
want to fill this value in! <span class="tag">optional</span></dd><dt><h4>primaryDescription</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The description of the transaction to show in the drop-in UI on the summary row.
Defaults to empty string. <span class="tag">optional</span></dd>
</dl>

## PaymentUIResult

<dl>
<dt><h4>applePaycard</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Information about the Apple Pay card used to complete a payment (if Apple Pay was used).</dd><dt><h4>card</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Information about the credit card used to complete a payment (if a credit card was used).</dd><dt><h4>localizedDescription</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A description of the payment method (if a payment was completed).</dd><dt><h4>nonce</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The nonce returned for the payment transaction (if a payment was completed).</dd><dt><h4>payPalAccount</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Information about the PayPal account used to complete a payment (if a PayPal account was used).</dd><dt><h4>threeDSecureCard</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Information about 3D Secure card used to complete a payment (if 3D Secure was used).</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The payment type (if a payment was completed) (credit card, check, paypal, etc).</dd><dt><h4>userCancelled</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Indicates if the user used the cancel button to close the dialog without
completing the payment.</dd><dt><h4>venmoAccount</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Information about Venmo account used to complete a payment (if a Venmo account was used).</dd>
</dl>

