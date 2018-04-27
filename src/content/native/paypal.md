# PayPal 


PayPal plugin for Cordova/Ionic Applications


Repo: [https://github.com/paypal/PayPal-Cordova-Plugin](https://github.com/paypal/PayPal-Cordova-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com.paypal.cordova.mobilesdk
$ npm install --save @ionic-native/paypal
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

constructor(private payPal: PayPal) { }

...


this.payPal.init({
  PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
  PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
    this.payPal.renderSinglePaymentUI(payment).then(() => {
      // Successfully paid

      // Example sandbox response
      //
      // {
      //   "client": {
      //     "environment": "sandbox",
      //     "product_name": "PayPal iOS SDK",
      //     "paypal_sdk_version": "2.16.0",
      //     "platform": "iOS"
      //   },
      //   "response_type": "payment",
      //   "response": {
      //     "id": "PAY-1AB23456CD789012EF34GHIJ",
      //     "state": "approved",
      //     "create_time": "2016-10-03T13:33:33Z",
      //     "intent": "sale"
      //   }
      // }
    }, () => {
      // Error or render dialog closed without being successful
    });
  }, () => {
    // Error in configuration
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
});
```



<p><br></p>

## Instance Members

### clientMetadataID

Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
payment is originating from a valid, user-consented device+application.
This helps reduce fraud and decrease declines.
This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
Pass the result to your server, to include in the payment request sent to PayPal.
Do not otherwise cache or store this value.

### init

You must preconnect to PayPal to prepare the device for processing payments.
This improves the user experience, by making the presentation of the
UI faster. The preconnect is valid for a limited time, so
the recommended time to preconnect is on page load.

<dl>
<dt><h4>clientIdsForEnvironments</h4><strong>Type: </strong><code>PayPalEnvironment</code></dt>
<dd>See PayPalEnvironment table below</dd>
</dl>

### prepareToRender

You must preconnect to PayPal to prepare the device for processing payments.
This improves the user experience, by making the presentation of the UI faster.
The preconnect is valid for a limited time, so the recommended time to preconnect is on page load.

<dl>
<dt><h4>environment</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>configuration</h4><strong>Type: </strong><code>PayPalConfiguration</code></dt>
<dd>See PayPalConfiguration table below</dd>
</dl>

### renderFuturePaymentUI

Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments

### renderProfileSharingUI

Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing

<dl>
<dt><h4>scopes</h4></dt>
<dd>scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details</dd>
</dl>

### renderSinglePaymentUI

Start PayPal UI to collect payment from the user.
See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
for more documentation of the params.

<dl>
<dt><h4>payment</h4><strong>Type: </strong><code>PayPalPayment</code></dt>
<dd>See PayPalPayment table below</dd>
</dl>

### version

Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.

<p><br></p>

## PayPalEnvironment

<dl>
<dt><h4>PayPalEnvironmentProduction</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>PayPalEnvironmentSandbox</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

