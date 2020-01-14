---
title: Deep Links
template: enterprise-plugin
version: 1.0.21
minor: 1.0.X
---

The Deep Links plugin provides deep linking support for both Android App Links and iOS Universal Links. 

Deep links point to a page inside of a mobile app. For example, if you had an online store selling products, upon navigating to a website link (https://yoursite.com/product/cool-beans) the app could open and navigate to display the Cool Beans product.

The mobile app can also be opened directly to the Cool Beans product page using a custom URL scheme, like `coolbeans://product/cool-beans`.

<native-ent-install plugin-id="deeplinks" variables=""></native-ent-install>

## Index

### Classes

* [Deeplinks](#deeplinks)

### Interfaces

* [DeeplinkMatch](#deeplinkmatch)
* [DeeplinkOptions](#deeplinkoptions)

---

## Classes

<a id="deeplinks"></a>

###  Deeplinks

**Deeplinks**: 

Please read the [ionic plugin deeplinks docs](https://github.com/ionic-team/ionic-plugin-deeplinks) for iOS and Android integration. You must add `universal-links` to your `config.xml` and set up Apple App Site Association (AASA) for iOS and Asset Links for Android.

*__usage__*:
 ```typescript
import { Deeplinks } from '@ionic-enterprise/deeplinks/ngx';

constructor(private deeplinks: Deeplinks) { }

this.deeplinks.route({
     '/about-us': AboutPage,
     '/universal-links-test': AboutPage,
     '/products/:productId': ProductPage
   }).subscribe(match => {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     console.log('Successfully matched route', match);
   }, nomatch => {
     // nomatch.$link - the full link data
     console.error('Got a deeplink that didn\'t match', nomatch);
   });
```

Alternatively, if you're using Ionic, there's a convenience method that takes a reference to a `NavController` and handles the actual navigation for you:

```typescript
this.deeplinks.routeWithNavController(this.navController, {
  '/about-us': AboutPage,
  '/products/:productId': ProductPage
}).subscribe(match => {
    // match.$route - the route we matched, which is the matched entry from the arguments to route()
    // match.$args - the args passed in the link
    // match.$link - the full link data
    console.log('Successfully matched route', match);
  }, nomatch => {
    // nomatch.$link - the full link data
    console.error('Got a deeplink that didn\'t match', nomatch);
  });
```

See the [Ionic Deeplinks Demo](https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to retrieve the `NavController` reference at runtime.

*__interfaces__*: DeeplinkMatch

<a id="deeplinks.route"></a>

###  route

▸ **route**(paths: *`any`*): `Observable`<[DeeplinkMatch](#deeplinkmatch)>

Define a set of paths to match against incoming deeplinks.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| paths | `any` |  Define a set of paths to match against incoming deeplinks. paths takes an object of the form { 'path': data }. If a deeplink matches the path, the resulting path-data pair will be returned in the promise result which you can then use to navigate in the app as you see fit. |

**Returns:** `Observable`<[DeeplinkMatch](#deeplinkmatch)>
Returns an Observable that is called each time a deeplink comes through, and
errors if a deeplink comes through that does not match a given path.

___
<a id="deeplinks.routewithnavcontroller"></a>

###  routeWithNavController

▸ **routeWithNavController**(navController: *`any`*, paths: *`any`*, options?: *[DeeplinkOptions](#deeplinkoptions)*): `Observable`<[DeeplinkMatch](#deeplinkmatch)>

This is a convenience version of `route` that takes a reference to a NavController from Ionic, or a custom class that conforms to this protocol:

NavController.push = function(View, Params){}

This handler will automatically navigate when a route matches. If you need finer-grained control over the behavior of a matching deeplink, use the plain `route` method.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| navController | `any` |  Define a set of paths to match against incoming deeplinks. paths takes an object of the form { 'path': data }. If a deeplink matches the path, the resulting path-data pair will be returned in the promise result which you can then use to navigate in the app as you see fit. |
| paths | `any` |   |
| `Optional` options | [DeeplinkOptions](#deeplinkoptions) |   |

**Returns:** `Observable`<[DeeplinkMatch](#deeplinkmatch)>
Returns an Observable that resolves each time a deeplink comes through, and
errors if a deeplink comes through that does not match a given path.

___

___

## Interfaces

<a id="deeplinkmatch"></a>

###  DeeplinkMatch

**DeeplinkMatch**: 

<a id="deeplinkmatch._args"></a>

###  $args

**● $args**: *`any`*

Any arguments passed either through route parameters or GET parameters

___
<a id="deeplinkmatch._link"></a>

###  $link

**● $link**: *`any`*

The deeplink object processed from the plugin, along with any any internal native data available as "extras" at the time the route was matched (for example, Facebook sometimes adds extra data)

___
<a id="deeplinkmatch._route"></a>

###  $route

**● $route**: *`any`*

The route info for the matched route

___

___
<a id="deeplinkoptions"></a>

###  DeeplinkOptions

**DeeplinkOptions**: 

<a id="deeplinkoptions.root"></a>

###  root

**● root**: *`boolean`*

Set the matched route as root page using `navCtrl.setRoot()` method.

___

___

