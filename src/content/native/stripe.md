# Stripe 


A plugin that allows you to use Stripe's Native SDKs for Android and iOS.


Repo: [https://github.com/zyramedia/cordova-plugin-stripe](https://github.com/zyramedia/cordova-plugin-stripe)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-stripe
$ npm install --save @ionic-native/stripe
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS




### Usage


```typescript
import { Stripe } from '@ionic-native/stripe';

constructor(private stripe: Stripe) { }

...

this.stripe.setPublishableKey('my_publishable_key');

let card = {
 number: '4242424242424242',
 expMonth: 12,
 expYear: 2020,
 cvc: '220'
}

this.stripe.createCardToken(card)
   .then(token => console.log(token.id))
   .catch(error => console.error(error));

```




<p><br></p>

## Instance Members

### createBankAccountToken

Create a bank account token

<dl>
<dt><h4>params</h4><strong>Type: </strong><code>StripeBankAccountParams</code></dt>
<dd>See StripeBankAccountParams table below</dd>
</dl>

### createCardToken

Create Credit Card Token

<dl>
<dt><h4>params</h4><strong>Type: </strong><code>StripeCardTokenParams</code></dt>
<dd>See StripeCardTokenParams table below</dd>
</dl>

### getCardType

Get a card type from card number

<dl>
<dt><h4>cardNumber</h4><strong>Type: </strong><code>string</code></dt>
<dd>Card number</dd>
</dl>

### setPublishableKey

Set publishable key

<dl>
<dt><h4>publishableKey</h4><strong>Type: </strong><code>string</code></dt>
<dd>Publishable key</dd>
</dl>

### validateCVC

Validates a CVC number

<dl>
<dt><h4>cvc</h4><strong>Type: </strong><code>string</code></dt>
<dd>CVC number</dd>
</dl>

### validateCardNumber

Validates a credit card number

<dl>
<dt><h4>cardNumber</h4><strong>Type: </strong><code>string</code></dt>
<dd>Credit card number</dd>
</dl>

### validateExpiryDate

Validates an expiry date

<dl>
<dt><h4>expMonth</h4><strong>Type: </strong><code>string</code></dt>
<dd>expiry month</dd><dt><h4>expYear</h4><strong>Type: </strong><code>string</code></dt>
<dd>expiry year</dd>
</dl>

<p><br></p>

## StripeBankAccountParams

<dl>
<dt><h4>account_holder_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Account holder name. <span class="tag">optional</span></dd><dt><h4>account_holder_type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Account holder type. This can be `individual` or `company`. <span class="tag">optional</span></dd><dt><h4>account_number</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Account number.</dd><dt><h4>country</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Country code. Example: `US`.</dd><dt><h4>currency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Currency code. Example: `USD`.</dd><dt><h4>routing_number</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Routing number.</dd>
</dl>

## StripeCardTokenParams

<dl>
<dt><h4>address_city</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>City <span class="tag">optional</span></dd><dt><h4>address_country</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Country <span class="tag">optional</span></dd><dt><h4>address_line1</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Address line 1 <span class="tag">optional</span></dd><dt><h4>address_line2</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Address line 2 <span class="tag">optional</span></dd><dt><h4>address_state</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>State / Province <span class="tag">optional</span></dd><dt><h4>currency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>3-letter ISO code for currency <span class="tag">optional</span></dd><dt><h4>cvc</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>CVC / CVV <span class="tag">optional</span></dd><dt><h4>expMonth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Expiry month</dd><dt><h4>expYear</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Expiry year</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Cardholder name <span class="tag">optional</span></dd><dt><h4>number</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Card number</dd><dt><h4>postal_code</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Postal code / ZIP Code <span class="tag">optional</span></dd>
</dl>

## StripeCardTokenRes

<dl>
<dt><h4>card</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Card Object.</dd><dt><h4>created</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Token Request Date Time.</dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Card Token.</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Source Type (card or account).</dd>
</dl>

