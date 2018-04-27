# Deeplinks 

This plugin handles deeplinks on iOS and Android for both custom URL scheme links
and Universal App Links.


Repo: [https://github.com/ionic-team/ionic-plugin-deeplinks](https://github.com/ionic-team/ionic-plugin-deeplinks)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/
$ npm install --save @ionic-native/deeplinks
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
import { Deeplinks } from '@ionic-native/deeplinks';

constructor(private deeplinks: Deeplinks) { }

this.deeplinks.route({
     '/about-us': AboutPage,
     '/universal-links-test': AboutPage,
     '/products/:productId': ProductPage
   }).subscribe((match) => {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     console.log('Successfully matched route', match);
   }, (nomatch) => {
     // nomatch.$link - the full link data
     console.error('Got a deeplink that didn\'t match', nomatch);
   });
```

Alternatively, if you're using Ionic, there's a convenience method that takes a reference to a `NavController` and handles
the actual navigation for you:

```typescript
this.deeplinks.routeWithNavController(this.navController, {
  '/about-us': AboutPage,
  '/products/:productId': ProductPage
}).subscribe((match) => {
    // match.$route - the route we matched, which is the matched entry from the arguments to route()
    // match.$args - the args passed in the link
    // match.$link - the full link data
    console.log('Successfully matched route', match);
  }, (nomatch) => {
    // nomatch.$link - the full link data
    console.error('Got a deeplink that didn\'t match', nomatch);
  });
```

See the [Ionic Deeplinks Demo](https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to
retrieve the `NavController` reference at runtime.




<p><br></p>

## Instance Members

### route

Define a set of paths to match against incoming deeplinks.

<dl>
<dt><h4>paths</h4><strong>Type: </strong><code>any</code></dt>
<dd>Define a set of paths to match against incoming deeplinks.
paths takes an object of the form { 'path': data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.</dd>
</dl>

### routeWithNavController

This is a convenience version of `route` that takes a reference to a NavController
from Ionic, or a custom class that conforms to this protocol:

<dl>
<dt><h4>navController</h4><strong>Type: </strong><code>any</code></dt>
<dd>Define a set of paths to match against incoming deeplinks.
paths takes an object of the form { 'path': data }. If a deeplink
matches the path, the resulting path-data pair will be returned in the
promise result which you can then use to navigate in the app as you see fit.
</dd><dt><h4>paths</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd><dt><h4>options</h4><strong>Type: </strong><code>DeeplinkOptions</code></dt>
<dd>See DeeplinkOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## DeeplinkMatch

<dl>
<dt><h4>$args</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Any arguments passed either through route parameters or GET parameters</dd><dt><h4>$link</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The deeplink object processed from the plugin, along with any
any internal native data available as "extras" at the time
the route was matched (for example, Facebook sometimes adds extra data)</dd><dt><h4>$route</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The route info for the matched route</dd>
</dl>

## DeeplinkOptions

<dl>
<dt><h4>root</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set the matched route as root page using `navCtrl.setRoot()` method.</dd>
</dl>

