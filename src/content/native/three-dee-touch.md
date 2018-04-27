# ThreeDeeTouch 



Repo: [https://github.com/EddyVerbruggen/cordova-plugin-3dtouch](https://github.com/EddyVerbruggen/cordova-plugin-3dtouch)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-3dtouch
$ npm install --save @ionic-native/three-dee-touch
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.
```typescript
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

constructor(private threeDeeTouch: ThreeDeeTouch) { }

...

this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));

this.threeDeeTouch.watchForceTouches()
  .subscribe(
    (data: ThreeDeeTouchForceTouch) => {
      console.log('Force touch %' + data.force);
      console.log('Force touch timestamp: ' + data.timestamp);
      console.log('Force touch x: ' + data.x);
      console.log('Force touch y: ' + data.y);
    }
  );


let actions: Array<ThreeDeeTouchQuickAction> = [
  {
    type: 'checkin',
    title: 'Check in',
    subtitle: 'Quickly check in',
    iconType: 'Compose'
  },
  {
    type: 'share',
    title: 'Share',
    subtitle: 'Share like you care',
    iconType: 'Share'
  },
  {
    type: 'search',
    title: 'Search',
    iconType: 'Search'
  },
  {
    title: 'Show favorites',
    iconTemplate: 'HeartTemplate'
  }
];

this.threeDeeTouch.configureQuickActions(actions);

this.threeDeeTouch.onHomeIconPressed().subscribe(
 (payload) => {
   // returns an object that is the button you presed
   console.log('Pressed the ${payload.title} button')
   console.log(payload.type)

 }
)
```



<p><br></p>

## Instance Members

### configureQuickActions

setup the 3D-touch actions, takes an array of objects with the following

<dl>
<dt><h4>quickActions</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### disableLinkPreview

Disabled the link preview feature, if enabled.

### enableLinkPreview

Enable Link Preview.
UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.

### isAvailable

You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.

### onHomeIconPressed

When a home icon is pressed, your app launches and this JS callback is invoked.

### watchForceTouches

You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.

<p><br></p>

## ThreeDeeTouchForceTouch

<dl>
<dt><h4>force</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Touch force</dd><dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Timestamp of action</dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>X coordinate of action</dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Y coordinate of action</dd>
</dl>

## ThreeDeeTouchQuickAction

<dl>
<dt><h4>iconTemplate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Icon template <span class="tag">optional</span></dd><dt><h4>iconType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Icon type. Case insensitive <span class="tag">optional</span></dd><dt><h4>subtitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Subtitle <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Title</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Type that can be used in the onHomeIconPressed callback <span class="tag">optional</span></dd>
</dl>

