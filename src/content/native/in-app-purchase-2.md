# InAppPurchase2 




Repo: [https://github.com/j3k0/cordova-plugin-purchase](https://github.com/j3k0/cordova-plugin-purchase)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"
$ npm install --save @ionic-native/in-app-purchase-2
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS
* Android
* Windows




### Usage


```
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2';


constructor(private inAppPurchase2: InAppPurchase2) { }

...


```




<p><br></p>

## Instance Members

### FREE_SUBSCRIPTION



### APPROVED



### INFO



### CONSUMABLE



### CONNECTION_FAILED



### INITIATED



### DOWNLOADING



### DEBUG



### DOWNLOADED



### INVALID_PAYLOAD



### ERR_COMMUNICATION



### ERROR



### ERR_BAD_RESPONSE



### ERR_CLIENT_INVALID



### OWNED



### ERR_LOAD_RECEIPTS



### ERR_DOWNLOAD



### ERR_FINISH



### ERR_INVALID_PRODUCT_ID



### ERR_LOAD



### QUIET



### ERR_PURCHASE



### ERR_MISSING_TOKEN



### ERR_PAYMENT_CANCELLED



### ERR_PAYMENT_EXPIRED



### ERR_PAYMENT_INVALID



### ERR_PAYMENT_NOT_ALLOWED



### VALID



### ERR_VERIFICATION_FAILED



### ERR_UNKNOWN



### ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE



### ERR_SUBSCRIPTIONS_NOT_AVAILABLE



### ERR_REFRESH



### ERR_SETUP



### ERR_REFRESH_RECEIPTS



### sandbox

Set to true to invoke the platform purchase sandbox. (Windows only)

### NON_RENEWING_SUBSCRIPTION



### NON_CONSUMABLE



### FINISHED



### INVALID



### error

Register error handler

<dl>
<dt><h4>onError</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below</dd>
</dl>

### REGISTERED



### PURCHASE_EXPIRED



### PAID_SUBSCRIPTION



### off

Unregister a callback. Works for callbacks registered with ready, when, once and error.

<dl>
<dt><h4>callback</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below</dd>
</dl>

### log



### WARNING



### get

Get product by id or alias

<dl>
<dt><h4>idOrAlias</h4><strong>Type: </strong><code>string</code></dt>
<dd>
</dd>
</dl>

### REQUESTED



### once

Identical to `when`, but the callback will be called only once. After being called, the callback will be unregistered.

<dl>
<dt><h4>query</h4></dt>
<dd>undefined</dd><dt><h4>event</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>callback</h4><strong>Type: </strong><code>IAPQueryCallback</code></dt>
<dd>See IAPQueryCallback table below <span class="tag">optional</span></dd>
</dl>

### order



<dl>
<dt><h4>product</h4></dt>
<dd>null</dd><dt><h4>additionalData</h4><strong>Type: </strong><code>any</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### products



### ready

undefined

### refresh



### register

Add or register a product

<dl>
<dt><h4>product</h4><strong>Type: </strong><code>IAPProductOptions</code></dt>
<dd>See IAPProductOptions table below</dd>
</dl>

### validator



### verbosity

Debug level. Use QUIET, ERROR, WARNING, INFO or DEBUG constants

### when

undefined

<dl>
<dt><h4>query</h4></dt>
<dd>undefined</dd><dt><h4>event</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>callback</h4><strong>Type: </strong><code>IAPQueryCallback</code></dt>
<dd>See IAPQueryCallback table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## IAPProduct

<dl>
<dt><h4>additionalData</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>alias</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>canPurchase</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>currency</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>downloaded</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>downloading</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>loaded</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>owned</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>price</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>priceMicros</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>state</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>transaction</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>valid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## IAPProductEvents

<dl>
<dt><h4>approved</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>cancelled</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>downloaded</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>downloading</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>error</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>expired</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>finished</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>initiated</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>invalid</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>loaded</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>owned</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>refunded</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>registered</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>requested</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>unverified</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>updated</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>valid</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>verified</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd>
</dl>

## IAPProductOptions

<dl>
<dt><h4>alias</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

