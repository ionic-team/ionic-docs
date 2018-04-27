# ApplePay 


A dependency free Cordova plugin to provide Apple Pay functionality.


Repo: [https://github.com/samkelleher/cordova-plugin-applepay](https://github.com/samkelleher/cordova-plugin-applepay)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-applepay
$ npm install --save @ionic-native/apple-pay
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { ApplePay } from '@ionic-native/apple-pay';


constructor(private applePay: ApplePay) { }

...
async applePay() {
  // This block is optional -- only if you need to update order items/shipping
  // methods in response to shipping method selections
  this.applePay.startListeningForShippingContactSelection()
    .subscribe(async selection => {
      try {
        await this.applePay.updateItemsAndShippingMethods({
          items: getFromSelection(selection),
          shippingMethods: getFromSelection(selection),
        });
      }
      catch {
        // handle update items error
      }
    });

  try {
    const applePayTransaction = await this.applePay.makePaymentRequest({
      items,
      shippingMethods,
      merchantIdentifier,
      currencyCode,
      countryCode,
      billingAddressRequirement: ['name', 'email', 'phone'],
      shippingAddressRequirement: 'none',
      shippingType: 'shipping'
    });

    const transactionStatus = await completeTransactionWithMerchant(applePayTransaction);
    await this.applePay.completeLastTransaction(transactionStatus);
  } catch {
    // handle payment request error
    // Can also handle stop complete transaction but these should normally not occur
  }

  // only if you started listening before
  await this.applePay.stopListeningForShippingContactSelection();
}
```




<p><br></p>

## Instance Members

### canMakePayments

Detects if the current device supports Apple Pay and has any capable cards registered.

### completeLastTransaction

Once the makePaymentRequest has been resolved successfully, the device will be waiting for a completion event.
This means, that the application must proceed with the token authorization and return a success, failure,
or other validation error. Once this has been passed back, the Apple Pay sheet will be dismissed via an animation.

<dl>
<dt><h4>complete</h4><strong>Type: </strong><code>ITransactionStatus</code></dt>
<dd>See ITransactionStatus table below</dd>
</dl>

### makePaymentRequest

Request a payment with Apple Pay

<dl>
<dt><h4>order</h4><strong>Type: </strong><code>IOrder</code></dt>
<dd>See IOrder table below</dd>
</dl>

### startListeningForShippingContactSelection

Starts listening for shipping contact selection changes
Any time the user selects shipping contact, this callback will fire.
You *must* call `updateItemsAndShippingMethods` in response or else the
user will not be able to process payment.

### stopListeningForShippingContactSelection

Stops listening for shipping contact selection changes

### updateItemsAndShippingMethods

Update the list of pay sheet items and shipping methods in response to
a shipping contact selection event. This *must* be called in response to
any shipping contact selection event or else the user will not be able
to complete a transaction on the pay sheet. Do not call without
subscribing to shipping contact selection events first

<dl>
<dt><h4>list</h4><strong>Type: </strong><code>IOrderItemsAndShippingMethods</code></dt>
<dd>See IOrderItemsAndShippingMethods table below</dd>
</dl>

<p><br></p>

## IOrder

<dl>
<dt><h4>billingAddressRequirement</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>countryCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>currencyCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>items</h4><strong>Type: </strong><code>IOrderItem[]</code></dt>
<dd>undefined</dd><dt><h4>merchantIdentifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>shippingAddressRequirement</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingMethods</h4><strong>Type: </strong><code>IShippingMethod[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingType</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## IOrderItem

<dl>
<dt><h4>amount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## IOrderItemsAndShippingMethods

<dl>
<dt><h4>items</h4><strong>Type: </strong><code>IOrderItem[]</code></dt>
<dd>undefined</dd><dt><h4>shippingMethods</h4><strong>Type: </strong><code>IShippingMethod[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## IPaymentResponse

<dl>
<dt><h4>billingAddressCity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingAddressState</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingAddressStreet</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingCountry</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingEmailAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingISOCountryCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingNameFirst</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingNameLast</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingNameMiddle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingPostalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>billingSupplementarySubLocality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>paymentData</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>paymentMethodDisplayName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>paymentMethodNetwork</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>paymentMethodTypeCard</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingAddressCity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingAddressState</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingAddressStreet</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingCountry</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingEmailAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingISOCountryCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingNameFirst</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingNameLast</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingNameMiddle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingPhoneNumber</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingPostalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shippingSupplementarySubLocality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>transactionIdentifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## ISelectedShippingContact

<dl>
<dt><h4>shippingAddressCity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>shippingAddressState</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>shippingISOCountryCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>shippingPostalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## IShippingMethod

<dl>
<dt><h4>amount</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>detail</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>identifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

