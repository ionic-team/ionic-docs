---
sidebar_label: 'In App Purchase 2'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# In App Purchase 2

In-App Purchase on iOS, Android, Windows, macOS and XBox.

## Features

|                      | ios | android | win-8 | win-10/uwp | mac |
| -------------------- | --- | ------- | ----- | ---------- | --- |
| consumables          | ✅  | ✅      | ✅    | ✅         | ✅  |
| non consumables      | ✅  | ✅      | ✅    | ✅         | ✅  |
| subscriptions        | ✅  | ✅      | ✅    | ✅         | ✅  |
| restore purchases    | ✅  | ✅      | ✅    | ✅         | ✅  |
| receipt validations  | ✅  | ✅      |       | ✅         | ✅  |
| downloadable content | ✅  |         |       |            | ✅  |
| introductory prices  | ✅  | ✅      |       | ✅         | ✅  |

Supports:

- **iOS** version 7.0 or higher.
- **Android** version 2.2 (API level 8) or higher
  - with Google Play client version 3.9.16 or higher
- **Windows** Store/Phone 8.1 or higher
- **Windows 10 Mobile**
- **macOS** version 10
- **Xbox One**
  - (and any platform supporting Microsoft's UWP)

<p>
  <a href="https://github.com/j3k0/cordova-plugin-purchase" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/j3k0/cordova-plugin-purchase
  </a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>
      If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer
      premium advisory services for both community plugins and premier plugins.
    </p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-purchase {'\n'}$ npm install @awesome-cordova-plugins/in-app-purchase-2 {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-purchase {'\n'}$ npm install @awesome-cordova-plugins/in-app-purchase-2 {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">
        Learn More
      </a> or if you're interested in an enterprise version of this plugin <a
        class="btn"
        href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"
      >
        Contact Us
      </a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- iOS
- Android
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';

constructor(public platform: Platform, private store: InAppPurchase2) {
  platform.ready().then(() => {
   this.store.register({
     id: "my_product_id",
     type: this.store.NON_RENEWING_SUBSCRIPTION,
   });
   this.store.when("my_product_id")
     .approved(p => p.verify())
     .verified(p => p.finish());
   this.store.refresh();
  });
}

...

this.store.order("my_product_id");

```

## Full example

```tsx
 // After platform ready
 this.store.verbosity = this.store.DEBUG;
 this.store.register({
   id: "my_product_id",
   type: this.store.PAID_SUBSCRIPTION,
 });

 // Register event handlers for the specific product
 this.store.when("my_product_id").registered( (product: IAPProduct) => {
   console.log('Registered: ' + JSON.stringify(product));
 });

 // Updated
 this.store.when("my_product_id").updated( (product: IAPProduct) => {
   console.log('Updated' + JSON.stringify(product));
 });

 // User closed the native purchase dialog
 this.store.when("my_product_id").cancelled( (product) => {
     console.error('Purchase was Cancelled');
 });

 // Track all store errors
 this.store.error( (err) => {
   console.error('Store Error ' + JSON.stringify(err));
 });

 // Run some code only when the store is ready to be used
 this.store.ready(() =>  {
   console.log('Store is ready');
   console.log('Products: ' + JSON.stringify(this.store.products));
   console.log(JSON.stringify(this.store.get("my_product_id")));
 });

 // Refresh the status of in-app products
 this.store.refresh();

 ...

 // To make a purchase
 this.store.order("my_product_id");

```

## Philosophy

The API is mostly events based. As a user of this plugin,
you will have to register listeners to changes happening to the products
you register.

The core of the listening mechanism is the `when()` method. It allows you to
be notified of changes to one or a set of products using a query mechanism:

```tsx
this.store.when('product').updated(refreshScreen); // match any product
this.store.when('full_version').owned(unlockApp); // match a specific product
this.store.when('subscription').approved(serverCheck); // match all subscriptions
this.store.when('downloadable content').downloaded(showContent);
```

The `updated` event is fired whenever one of the fields of a product is
changed (its `owned` status for instance).

This event provides a generic way to track the statuses of your purchases,
to unlock features when needed and to refresh your views accordingly.

## Registering products

The store needs to know the type and identifiers of your products before you
can use them in your code.

Use `store.register()` to define them before your first call to `store.refresh()`.

Once registered, you can use `store.get()` to retrieve an `IAPProduct` object.

```tsx
 this.store.register({
   id: "my_consumable1",
   type: this.store.CONSUMABLE
 });
 ...
 const p = this.store.get("my_consumable1");
```

The product `id` and `type` have to match products defined in your
Apple, Google or Microsoft developer consoles.

Learn more about it [from the wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki).

## Displaying products

Right after you registered your products, nothing much is known about them
except their `id`, `type` and an optional `alias`.

When you perform the initial call to `store.refresh()`, the platforms' server will
be contacted to load informations about the registered products: human
readable `title` and `description`, `price`, etc.

This isn't an optional step, store owners require you
to display information about a product exactly as retrieved from their server: no
hard-coding of price and title allowed! This is also convenient for you
as you can change the price of your items knowing that it'll be reflected instantly
on your clients' devices.

Note that the information may not be available when the first view that needs
them appears on screen. For you, the best option is to have your view monitor
changes made to the product.

## Purchasing

#### initiate a purchase

Purchases are initiated using the `store.order("some_product_id")` method.

The store will manage the internal purchase flow. It'll end:

- with an `approved` event. The product enters the `APPROVED` state.
- with a `cancelled` event. The product gets back to the `VALID` state.
- with an `error` event. The product gets back to the `VALID` state.

See the product life-cycle section for details about product states.

#### finish a purchase

Once the transaction is approved, the product still isn't owned: the store needs
confirmation that the purchase was delivered before closing the transaction.

To confirm delivery, you'll use the `product.finish()` method.

#### example usage

During initialization:

```tsx
this.store.when('extra_chapter').approved((product: IAPProduct) => {
  // download the feature
  app.downloadExtraChapter().then(() => product.finish());
});
```

When the purchase button is clicked:

```tsx
this.store.order('extra_chapter');
```

#### un-finished purchases

If your app wasn't able to deliver the content, `product.finish()` won't be called.

Don't worry: the `approved` event will be re-triggered the next time you
call `store.refresh()`, which can very well be the next time
the application starts. Pending transactions are persistant.

#### simple case

In the most simple case, where:

- delivery of purchases is only local ;
- you don't want (or need) to implement receipt validation ;

You may just want to finish all purchases automatically. You can do it this way:

```js
this.store.when('product').approved((p: IAPProduct) => p.finish());
```

NOTE: the "product" query will match any purchases (see "queries" to learn more details about queries).

## Receipt validation

To get the most up-to-date information about purchases (in case a purchase have been canceled, or a subscription renewed),
you should implement server side receipt validation.

This also protects you against fake "purchases", made by some users using
"free in-app purchase" apps on their devices.

When a purchase has been approved by the store, it's enriched with
transaction information (see `product.transaction` attribute).

To verify a purchase you'll have to do three things:

- configure the validator.
- call `product.verify()` from the `approved` event, before finishing the transaction.
- finish the transaction when transaction is `verified`.

**Shameless Plug**: this is a feature many users struggle with, so as the author of this plugin, we can provide it to you as-a-service: https://billing.fovea.cc/
(which is free until you start making serious money)

#### example using a validation URL

```js
this.store.validator = 'https://billing.fovea.cc/';

this.store
  .when('my stuff')
  .approved((p: IAPProduct) => p.verify())
  .verified((p: IAPProduct) => p.finish());
```

## Subscriptions

For subscription, you MUST implement remote receipt validation.

When the receipt validator returns a `store.PURCHASE_EXPIRED` error code, the subscription will
automatically loose its `owned` status.

Typically, you'll enable and disable access to your content this way.

```tsx
this.store.when('my_subcription').updated((product: IAPProduct) => {
  if (product.owned) app.subscriberMode();
  else app.guestMode();
});
```

## Product life-cycle

A product will change state during the application execution.

Find below a diagram of the different states a product can pass by.

```
REGISTERED +--> INVALID
           |
           +--> VALID +--> REQUESTED +--> INITIATED +-+
                                                      |
                ^      +------------------------------+
                |      |
                |      |             +--> DOWNLOADING +--> DOWNLOADED +
                |      |             |                                |
                |      +--> APPROVED +--------------------------------+--> FINISHED +--> OWNED
                |                                                             |
                +-------------------------------------------------------------+

#### Notes

 - When finished, a consumable product will get back to the `VALID` state, while other will enter the `OWNED` state.
 - Any error in the purchase process will bring a product back to the `VALID` state.
 - During application startup, products may go instantly from `REGISTERED` to `APPROVED` or `OWNED`, for example if they are purchased non-consumables or non-expired subscriptions.
 - Non-Renewing Subscriptions are iOS products only. Please see the [iOS Non Renewing Subscriptions documentation](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/ios.md#non-renewing) for a detailed explanation.

## events

 - `loaded(IAPProduct)`
   - Called when product data is loaded from the store.
 - `updated(IAPProduct)`
   - Called when any change occured to a product.
 - `error(err)`
   - Called when an order failed.
   - The `err` parameter is an error object
 - `approved(IAPProduct)`
   - Called when a product order is approved.
 - `owned(IAPProduct)`
   - Called when a non-consumable product or subscription is owned.
 - `cancelled(IAPProduct)`
   - Called when a product order is cancelled by the user.
 - `refunded(IAPProduct)`
   - Called when an order is refunded by the user.
 - Actually, all other product states have their promise
   - `registered`, `valid`, `invalid`, `requested`,
     `initiated` and `finished`
 - `verified(IAPProduct)`
   - Called when receipt validation successful
 - `unverified(IAPProduct)`
   - Called when receipt verification failed
 - `expired(IAPProduct)`
   - Called when validation find a subscription to be expired
 - `downloading(IAPProduct, progress, time_remaining)`
   - Called when content download is started
 - `downloaded(IAPProduct)`
   - Called when content download has successfully completed

## Learn More

 - [GitHub](https://github.com/j3k0/cordova-plugin-purchase)
 - [GitBook](https://purchase.cordova.fovea.cc/)
 - [Wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki)
 - [API reference](https://github.com/j3k0/cordova-plugin-purchase/blob/master/doc/api.md)

## Technical Support or Questions

If you have questions or need help integrating In-App Purchase, [Open an Issue on GitHub](https://github.com/j3k0/cordova-plugin-purchase/issues) or email us at _support@fovea.cc_.

@interfaces
IAPProduct
IAPProductOptions
IAPProductEvents
```
