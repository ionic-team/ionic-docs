# InAppPurchase 


A lightweight Cordova plugin for in app purchases on iOS/Android.


Repo: [https://github.com/AlexDisler/cordova-plugin-inapppurchase](https://github.com/AlexDisler/cordova-plugin-inapppurchase)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-inapppurchase
$ npm install --save @ionic-native/in-app-purchase
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { InAppPurchase } from '@ionic-native/in-app-purchase';

constructor(private iap: InAppPurchase) { }

...

this.iap
 .getProducts(['prod1', 'prod2', ...])
 .then((products) => {
   console.log(products);
    //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
 })
 .catch((err) => {
   console.log(err);
 });


this.iap
  .buy('prod1')
  .then((data)=> {
    console.log(data);
    // {
    //   transactionId: ...
    //   receipt: ...
    //   signature: ...
    // }
  })
  .catch((err)=> {
    console.log(err);
  });

```




<p><br></p>

## Instance Members

### buy

Buy a product that matches the productId.

<dl>
<dt><h4>productId</h4><strong>Type: </strong><code>string</code></dt>
<dd>A string that matches the product you want to buy.</dd>
</dl>

### consume

Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:

<dl>
<dt><h4>productType</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>receipt</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>signature</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### getProducts

Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.

<dl>
<dt><h4>productId</h4></dt>
<dd>an array of product ids.</dd>
</dl>

### getReceipt

Get the receipt.

### restorePurchases

Restore all purchases from the store

### subscribe

Same as buy, but for subscription based products.

<dl>
<dt><h4>productId</h4><strong>Type: </strong><code>string</code></dt>
<dd>A string that matches the product you want to subscribe to.</dd>
</dl>

<p><br></p>

