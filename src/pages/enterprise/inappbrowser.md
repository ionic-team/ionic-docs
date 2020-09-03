---
title: InAppBrowser
template: enterprise-plugin
version: 4.0.0
minor: 4.0.X
---

The InAppBrowser plugin provides the ability to launch a web browser within the app.

<native-ent-install plugin-id="inappbrowser" variables=""></native-ent-install>

## Index

### Classes

* [InAppBrowser](#inappbrowser)

### Interfaces

* [InAppBrowserEvent](#inappbrowserevent)
* [InAppBrowserOptions](#inappbrowseroptions)

### Type aliases

* [InAppBrowserEventType](#inappbrowsereventtype)

---

## Classes

<a id="inappbrowser"></a>

###  InAppBrowser

**InAppBrowser**: 

*__name__*: In App Browser

*__description__*: Launches in app Browser

*__usage__*:
 ```typescript
import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';

constructor(private iab: InAppBrowser) { }

...

const browser = this.iab.create('https://ionicframework.com/');

browser.executeScript(...);

browser.insertCSS(...);
browser.on('loadstop').subscribe(event => {
   browser.insertCSS({ code: "body{color: red;" });
});

browser.close();

```

*__classes__*: InAppBrowserObject

*__interfaces__*: InAppBrowserEvent InAppBrowserOptions

<a id="inappbrowser.create"></a>

###  create

▸ **create**(url: *`string`*, target?: *`string`*, options?: *`string` \| [InAppBrowserOptions](#inappbrowseroptions)*): `InAppBrowserObject`

Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| url | `string` |  The URL to load. |
| `Optional` target | `string` |  The target in which to load the URL, an optional parameter that defaults to \_self. |
| `Optional` options | `string` \| [InAppBrowserOptions](#inappbrowseroptions) |  Options for the InAppBrowser. Optional, defaulting to: location=yes. The options string must not contain any blank space, and each feature's name/value pairs must be separated by a comma. Feature names are case insensitive. |

**Returns:** `InAppBrowserObject`

___

___

## Interfaces

<a id="inappbrowserevent"></a>

###  InAppBrowserEvent

**InAppBrowserEvent**: 

<a id="inappbrowserevent.at_target"></a>

###  AT_TARGET

**● AT_TARGET**: *`number`*

___
<a id="inappbrowserevent.bubbling_phase"></a>

###  BUBBLING_PHASE

**● BUBBLING_PHASE**: *`number`*

___
<a id="inappbrowserevent.capturing_phase"></a>

###  CAPTURING_PHASE

**● CAPTURING_PHASE**: *`number`*

___
<a id="inappbrowserevent.event"></a>

###  Event

**● Event**: *`object`*

#### Type declaration

 constructor : function
⊕ **new __type**(type: *`string`*, eventInitDict?: *`EventInit`*): `Event`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` eventInitDict | `EventInit` |

**Returns:** `Event`

 AT_TARGET: `number`

 BUBBLING_PHASE: `number`

 CAPTURING_PHASE: `number`

 NONE: `number`

 prototype: `Event`

___
<a id="inappbrowserevent.none-1"></a>

###  NONE

**● NONE**: *`number`*

___
<a id="inappbrowserevent.bubbles"></a>

###  bubbles

**● bubbles**: *`boolean`*

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

___
<a id="inappbrowserevent.cancelbubble"></a>

###  cancelBubble

**● cancelBubble**: *`boolean`*

___
<a id="inappbrowserevent.cancelable"></a>

###  cancelable

**● cancelable**: *`boolean`*

___
<a id="inappbrowserevent.code"></a>

###  code

**● code**: *`number`*

the error code, only in the case of loaderror.

___
<a id="inappbrowserevent.composed"></a>

###  composed

**● composed**: *`boolean`*

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

___
<a id="inappbrowserevent.currenttarget"></a>

###  currentTarget

**● currentTarget**: *`EventTarget` \| `null`*

Returns the object whose event listener's callback is currently being invoked.

___
<a id="inappbrowserevent.defaultprevented"></a>

###  defaultPrevented

**● defaultPrevented**: *`boolean`*

___
<a id="inappbrowserevent.eventphase"></a>

###  eventPhase

**● eventPhase**: *`number`*

___
<a id="inappbrowserevent.istrusted"></a>

###  isTrusted

**● isTrusted**: *`boolean`*

Returns true if event was dispatched by the user agent, and false otherwise.

___
<a id="inappbrowserevent.message"></a>

###  message

**● message**: *`string`*

the error message, only in the case of loaderror.

___
<a id="inappbrowserevent.returnvalue"></a>

###  returnValue

**● returnValue**: *`boolean`*

___
<a id="inappbrowserevent.srcelement"></a>

###  srcElement

**● srcElement**: *`Element` \| `null`*

*__deprecated__*: 

___
<a id="inappbrowserevent.target"></a>

###  target

**● target**: *`EventTarget` \| `null`*

Returns the object to which event is dispatched (its target).

___
<a id="inappbrowserevent.timestamp"></a>

###  timeStamp

**● timeStamp**: *`number`*

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

___
<a id="inappbrowserevent.type"></a>

###  type

**● type**: *[InAppBrowserEventType](#inappbrowsereventtype)*

the event name

___
<a id="inappbrowserevent.url"></a>

###  url

**● url**: *`string`*

the URL that was loaded.

___
<a id="inappbrowserevent.composedpath"></a>

###  composedPath

▸ **composedPath**(): `EventTarget`[]

**Returns:** `EventTarget`[]

___
<a id="inappbrowserevent.initevent"></a>

###  initEvent

▸ **initEvent**(type: *`string`*, bubbles?: *`boolean`*, cancelable?: *`boolean`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| `Optional` bubbles | `boolean` |
| `Optional` cancelable | `boolean` |

**Returns:** `void`

___
<a id="inappbrowserevent.preventdefault"></a>

###  preventDefault

▸ **preventDefault**(): `void`

**Returns:** `void`

___
<a id="inappbrowserevent.stopimmediatepropagation"></a>

###  stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

**Returns:** `void`

___
<a id="inappbrowserevent.stoppropagation"></a>

###  stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

**Returns:** `void`

___

___
<a id="inappbrowseroptions"></a>

###  InAppBrowserOptions

**InAppBrowserOptions**: 

<a id="inappbrowseroptions.allowinlinemediaplayback"></a>

### `<Optional>` allowInlineMediaPlayback

**● allowInlineMediaPlayback**: *"yes" \| "no"*

(iOS Only) Set to yes or no to allow in-line HTML5 media playback, displaying within the browser window rather than a device-specific playback interface. The HTML's video element must also include the webkit-playsinline attribute (defaults to no)

___
<a id="inappbrowseroptions.beforeload"></a>

### `<Optional>` beforeload

**● beforeload**: *"yes" \| "get" \| "post"*

set to enable the beforeload event to modify which pages are actually loaded in the browser. Accepted values are get to intercept only GET requests, post to intercept on POST requests or yes to intercept both GET & POST requests. Note that POST requests are not currently supported and will be ignored (if you set beforeload=post it will raise an error).

___
<a id="inappbrowseroptions.clearcache"></a>

### `<Optional>` clearcache

**● clearcache**: *"yes"*

Set to yes to have the browser's cookie cache cleared before the new window is opened.

___
<a id="inappbrowseroptions.cleardata"></a>

### `<Optional>` cleardata

**● cleardata**: *"yes"*

set to yes to have the browser's entire local storage cleared (cookies, HTML5 local storage, IndexedDB, etc.) before the new window is opened

___
<a id="inappbrowseroptions.clearsessioncache"></a>

### `<Optional>` clearsessioncache

**● clearsessioncache**: *"yes"*

Set to yes to have the session cookie cache cleared before the new window is opened. For WKWebView, requires iOS 11+ on target device.

___
<a id="inappbrowseroptions.closebuttoncaption"></a>

### `<Optional>` closebuttoncaption

**● closebuttoncaption**: *`string`*

(Android) Set to a string to use as the close button's caption instead of a X. Note that you need to localize this value yourself. (iOS) Set to a string to use as the Done button's caption. Note that you need to localize this value yourself.

___
<a id="inappbrowseroptions.closebuttoncolor"></a>

### `<Optional>` closebuttoncolor

**● closebuttoncolor**: *`string`*

(Android) Set to a valid hex color string, for example: #00ff00, and it will change the close button color from default, regardless of being a text or default X. Only has effect if user has location set to yes. (iOS) Set as a valid hex color string, for example: #00ff00, to change from the default Done button's color. Only applicable if toolbar is not disabled.

___
<a id="inappbrowseroptions.disallowoverscroll"></a>

### `<Optional>` disallowoverscroll

**● disallowoverscroll**: *"yes" \| "no"*

(iOS Only) Set to yes or no (default is no). Turns on/off the UIWebViewBounce property.

___
<a id="inappbrowseroptions.enableviewportscale"></a>

### `<Optional>` enableViewportScale

**● enableViewportScale**: *"yes" \| "no"*

(iOS Only) Set to yes or no to prevent viewport scaling through a meta tag (defaults to no).

___
<a id="inappbrowseroptions.footer"></a>

### `<Optional>` footer

**● footer**: *"yes" \| "no"*

(Android Only) Set to yes to show a close button in the footer similar to the iOS Done button. The close button will appear the same as for the header hence use closebuttoncaption and closebuttoncolor to set its properties

___
<a id="inappbrowseroptions.footercolor"></a>

### `<Optional>` footercolor

**● footercolor**: *`string`*

(Android Only) Set to a valid hex color string, for example #00ff00 or #CC00ff00 (#aarrggbb), and it will change the footer color from default. Only has effect if user has footer set to yes

___
<a id="inappbrowseroptions.fullscreen"></a>

### `<Optional>` fullscreen

**● fullscreen**: *"yes"*

(Windows only) Set to yes to create the browser control without a border around it. Please note that if location=no is also specified, there will be no control presented to user to close IAB window.

___
<a id="inappbrowseroptions.hardwareback"></a>

### `<Optional>` hardwareback

**● hardwareback**: *"yes" \| "no"*

(Android & Windows Only) Set to yes to use the hardware back button to navigate backwards through the InAppBrowser's history. If there is no previous page, the InAppBrowser will close. The default value is yes, so you must set it to no if you want the back button to simply close the InAppBrowser.

___
<a id="inappbrowseroptions.hidden"></a>

### `<Optional>` hidden

**● hidden**: *"yes" \| "no"*

Set to yes to create the browser and load the page, but not show it. The loadstop event fires when loading is complete. Omit or set to no (default) to have the browser open and load normally.

___
<a id="inappbrowseroptions.hidenavigationbuttons"></a>

### `<Optional>` hidenavigationbuttons

**● hidenavigationbuttons**: *"yes" \| "no"*

(Android) Set to yes to hide the navigation buttons on the location toolbar, only has effect if user has location set to yes. The default value is no. (iOS) Set to yes or no to turn the toolbar navigation buttons on or off (defaults to no). Only applicable if toolbar is not disabled.

___
<a id="inappbrowseroptions.hidespinner"></a>

### `<Optional>` hidespinner

**● hidespinner**: *"yes" \| "no"*

(iOS Only) Set to yes or no to change the visibility of the loading indicator (defaults to no).

___
<a id="inappbrowseroptions.hideurlbar"></a>

### `<Optional>` hideurlbar

**● hideurlbar**: *"yes" \| "no"*

(Android) Set to yes to hide the url bar on the location toolbar, only has effect if user has location set to yes. The default value is no.

___
<a id="inappbrowseroptions.keyboarddisplayrequiresuseraction"></a>

### `<Optional>` keyboardDisplayRequiresUserAction

**● keyboardDisplayRequiresUserAction**: *"yes" \| "no"*

(iOS Only) Set to yes or no to open the keyboard when form elements receive focus via JavaScript's focus() call (defaults to yes).

___
<a id="inappbrowseroptions.lefttoright"></a>

### `<Optional>` lefttoright

**● lefttoright**: *"yes" \| "no"*

(Android) Set to yes to swap positions of the navigation buttons and the close button. Specifically, navigation buttons go to the left and close button to the right. (iOS) Set to yes to swap positions of the navigation buttons and the close button. Specifically, close button goes to the right and navigation buttons to the left.

___
<a id="inappbrowseroptions.location"></a>

### `<Optional>` location

**● location**: *"yes" \| "no"*

Set to yes or no to turn the InAppBrowser's location bar on or off.

___
<a id="inappbrowseroptions.mediaplaybackrequiresuseraction"></a>

### `<Optional>` mediaPlaybackRequiresUserAction

**● mediaPlaybackRequiresUserAction**: *"yes" \| "no"*

Set to yes to prevent HTML5 audio or video from autoplaying (defaults to no).

___
<a id="inappbrowseroptions.navigationbuttoncolor"></a>

### `<Optional>` navigationbuttoncolor

**● navigationbuttoncolor**: *`string`*

(Android) Set to a valid hex color string, for example: #00ff00, and it will change the color of both navigation buttons from default. Only has effect if user has location set to yes and not hidenavigationbuttons set to yes. (iOS) Set as a valid hex color string, for example: #00ff00, to change from the default color. Only applicable if navigation buttons are visible.

___
<a id="inappbrowseroptions.presentationstyle"></a>

### `<Optional>` presentationstyle

**● presentationstyle**: *"pagesheet" \| "formsheet" \| "fullscreen"*

(iOS Only) Set to pagesheet, formsheet or fullscreen to set the presentation style (defaults to fullscreen).

___
<a id="inappbrowseroptions.shouldpauseonsuspend"></a>

### `<Optional>` shouldPauseOnSuspend

**● shouldPauseOnSuspend**: *"yes" \| "no"*

(Android Only) Set to yes to make InAppBrowser WebView to pause/resume with the app to stop background audio (this may be required to avoid Google Play issues)

___
<a id="inappbrowseroptions.suppressesincrementalrendering"></a>

### `<Optional>` suppressesIncrementalRendering

**● suppressesIncrementalRendering**: *"yes" \| "no"*

(iOS Only) Set to yes or no to wait until all new view content is received before being rendered (defaults to no).

___
<a id="inappbrowseroptions.toolbar"></a>

### `<Optional>` toolbar

**● toolbar**: *"yes" \| "no"*

(iOS Only) Set to yes or no to turn the toolbar on or off for the InAppBrowser (defaults to yes)

___
<a id="inappbrowseroptions.toolbarcolor"></a>

### `<Optional>` toolbarcolor

**● toolbarcolor**: *`string`*

(Android) Set to a valid hex color string, for example: #00ff00, and it will change the color the toolbar from default. Only has effect if user has location set to yes. (iOS) Set as a valid hex color string, for example: #00ff00, to change from the default color of the toolbar. Only applicable if toolbar is not disabled.

___
<a id="inappbrowseroptions.toolbarposition"></a>

### `<Optional>` toolbarposition

**● toolbarposition**: *"top" \| "bottom"*

(iOS Only) Set to top or bottom (default is bottom). Causes the toolbar to be at the top or bottom of the window.

___
<a id="inappbrowseroptions.toolbartranslucent"></a>

### `<Optional>` toolbartranslucent

**● toolbartranslucent**: *"yes" \| "no"*

(iOS Only) Set to yes or no to make the toolbar translucent(semi-transparent) (defaults to yes). Only applicable if toolbar is not disabled.

___
<a id="inappbrowseroptions.transitionstyle"></a>

### `<Optional>` transitionstyle

**● transitionstyle**: *"fliphorizontal" \| "crossdissolve" \| "coververtical"*

(iOS Only) Set to fliphorizontal, crossdissolve or coververtical to set the transition style (defaults to coververtical).

___
<a id="inappbrowseroptions.usewideviewport"></a>

### `<Optional>` useWideViewPort

**● useWideViewPort**: *"yes" \| "no"*

(Android Only) Sets whether the WebView should enable support for the "viewport" HTML meta tag or should use a wide viewport. When the value of the setting is no, the layout width is always set to the width of the WebView control in device-independent (CSS) pixels. When the value is yes and the page contains the viewport meta tag, the value of the width specified in the tag is used. If the page does not contain the tag or does not provide a width, then a wide viewport will be used. (defaults to yes).

___
<a id="inappbrowseroptions.zoom"></a>

### `<Optional>` zoom

**● zoom**: *"yes" \| "no"*

(Android Only) Set to yes to show Android browser's zoom controls, set to no to hide them. Default value is yes.

___

___

## Type aliases

<a id="inappbrowsereventtype"></a>

###  InAppBrowserEventType

**Ƭ InAppBrowserEventType**: *"loadstart" \| "loadstop" \| "loaderror" \| "exit" \| "beforeload" \| "message"*

___

# Release Notes

### 4.0.0 (Jun 09, 2020)

* [GH-715](https://github.com/apache/cordova-plugin-inappbrowser/pull/715) (ios): fix regression in 2706f34
* [GH-656](https://github.com/apache/cordova-plugin-inappbrowser/pull/656) (ios) Remove fake status bar with hardcoded height to fix issues in **iOS** devices with a notch
* [GH-693](https://github.com/apache/cordova-plugin-inappbrowser/pull/693) fix(ios): Allow loading local html files
* [GH-293](https://github.com/apache/cordova-plugin-inappbrowser/pull/293)  **Android**: SSL errors handling in **Android**
* [GH-672](https://github.com/apache/cordova-plugin-inappbrowser/pull/672) fix(ios): prevent statusbar rotation after closing `InAppBrowser`
* [GH-669](https://github.com/apache/cordova-plugin-inappbrowser/pull/669) Allow App using `InAppBrowser` to be hosted in a cross-origin iframe
* [GH-600](https://github.com/apache/cordova-plugin-inappbrowser/pull/600) (all platforms): remove "window.open" overwrite
* [GH-515](https://github.com/apache/cordova-plugin-inappbrowser/pull/515) Fix incorrect TypeScript typings
* [GH-654](https://github.com/apache/cordova-plugin-inappbrowser/pull/654) add check for openInSystem postNotification
* [GH-442](https://github.com/apache/cordova-plugin-inappbrowser/pull/442) fix(android): Reset lefttoright if not set
* [GH-648](https://github.com/apache/cordova-plugin-inappbrowser/pull/648) (android) Correcting the documentation regarding lefttoright opt…
* [GH-634](https://github.com/apache/cordova-plugin-inappbrowser/pull/634) (android) Added option to turn on/off fullscreen mode in **Android**
* [GH-616](https://github.com/apache/cordova-plugin-inappbrowser/pull/616) (android) `InAppBrowser`: java.lang.IllegalArgumentException
* [GH-635](https://github.com/apache/cordova-plugin-inappbrowser/pull/635) breaking(ios): remove UIWebView
* [GH-503](https://github.com/apache/cordova-plugin-inappbrowser/pull/503) Defensive code to prevent NULL reference exceptions for async
* [GH-524](https://github.com/apache/cordova-plugin-inappbrowser/pull/524) Replace "beforeload" with BEFORELOAD
* [GH-568](https://github.com/apache/cordova-plugin-inappbrowser/pull/568) Update missing closed brace to the insert.CSS
* [GH-401](https://github.com/apache/cordova-plugin-inappbrowser/pull/401) Move createIframeBridge to injectDeferredObject

### 3.2.2 (Dec 13, 2019)

-   fix: update types to make beforeload work
-   chore: remove unused usewkwebview references

### 3.2.1 (Oct 01, 2019)

-   fix(ios): make create work on iOS 13

### 3.2.0 (Sept 06, 2019)

-   feat(ios): remove UIWebView code


### 3.1.0 (Jun 27, 2019)

-   chore: fix repo and issue urls and license in package.json and plugin.xml ([`8edfb9e`](https://github.com/apache/cordova-plugin-inappbrowser/commit/8edfb9e))
-   chore: unknown changes because of linebreak change in binary files ([`e44ad91`](https://github.com/apache/cordova-plugin-inappbrowser/commit/e44ad91))
-   build: add `.npmignore` to remove unneeded files from npm package ([`0ec4a11`](https://github.com/apache/cordova-plugin-inappbrowser/commit/0ec4a11))
-   build: add `.gitattributes` to force LF (instead of possible CRLF on Windows) ([`2751255`](https://github.com/apache/cordova-plugin-inappbrowser/commit/2751255))
-   ci(travis): Update Travis CI configuration for new paramedic ([#478](https://github.com/apache/cordova-plugin-inappbrowser/issues/478)) ([`c2bb6c1`](https://github.com/apache/cordova-plugin-inappbrowser/commit/c2bb6c1))
-   docs: remove outdated translations ([`cc5ee00`](https://github.com/apache/cordova-plugin-inappbrowser/commit/cc5ee00))
-   fix(android): Fix beforeload for Android &lt;= 7 ([#427](https://github.com/apache/cordova-plugin-inappbrowser/issues/427)) ([`94fec84`](https://github.com/apache/cordova-plugin-inappbrowser/commit/94fec84))
-   ci(travis) Fix failing CI tests ([#460](https://github.com/apache/cordova-plugin-inappbrowser/issues/460)) ([`a162bd9`](https://github.com/apache/cordova-plugin-inappbrowser/commit/a162bd9))
-   test: Fix test spec.5 to close inappbrowser after loadstop event ([#440](https://github.com/apache/cordova-plugin-inappbrowser/issues/440)) ([`5f1afbd`](https://github.com/apache/cordova-plugin-inappbrowser/commit/5f1afbd), [`af44235`](https://github.com/apache/cordova-plugin-inappbrowser/commit/af44235))
-   fix(android): Prevent malformed callbackId from reaching app cordova view ([#436](https://github.com/apache/cordova-plugin-inappbrowser/issues/436)) ([`6861084`](https://github.com/apache/cordova-plugin-inappbrowser/commit/6861084), [`c95dbcb`](https://github.com/apache/cordova-plugin-inappbrowser/commit/c95dbcb))
-   feat: [CB-13969](https://issues.apache.org/jira/browse/CB-13969): Allow close button and navigation buttons positions to be swapped ([#262](https://github.com/apache/cordova-plugin-inappbrowser/issues/262)) ([`d01bd25`](https://github.com/apache/cordova-plugin-inappbrowser/commit/d01bd25), [`f861655`](https://github.com/apache/cordova-plugin-inappbrowser/commit/f861655), [`9c7c2f3`](https://github.com/apache/cordova-plugin-inappbrowser/commit/9c7c2f3), [`3c0a42e`](https://github.com/apache/cordova-plugin-inappbrowser/commit/3c0a42e), [`5359f6c`](https://github.com/apache/cordova-plugin-inappbrowser/commit/5359f6c), [`df84dda`](https://github.com/apache/cordova-plugin-inappbrowser/commit/df84dda), [`2bcec40`](https://github.com/apache/cordova-plugin-inappbrowser/commit/2bcec40), [`fc0c560`](https://github.com/apache/cordova-plugin-inappbrowser/commit/fc0c560), [`5ead1e6`](https://github.com/apache/cordova-plugin-inappbrowser/commit/5ead1e6), [`c7931fa`](https://github.com/apache/cordova-plugin-inappbrowser/commit/c7931fa), [`e2adf1b`](https://github.com/apache/cordova-plugin-inappbrowser/commit/e2adf1b), [`4adf4c7`](https://github.com/apache/cordova-plugin-inappbrowser/commit/4adf4c7), [`cbe3a42`](https://github.com/apache/cordova-plugin-inappbrowser/commit/cbe3a42), [`74ccef1`](https://github.com/apache/cordova-plugin-inappbrowser/commit/74ccef1), [`ec6af56`](https://github.com/apache/cordova-plugin-inappbrowser/commit/ec6af56), [`b06ad8e`](https://github.com/apache/cordova-plugin-inappbrowser/commit/b06ad8e), [`313e0ae`](https://github.com/apache/cordova-plugin-inappbrowser/commit/313e0ae), [`05e37a1`](https://github.com/apache/cordova-plugin-inappbrowser/commit/05e37a1), [`0c6189e`](https://github.com/apache/cordova-plugin-inappbrowser/commit/0c6189e), [`d940b59`](https://github.com/apache/cordova-plugin-inappbrowser/commit/d940b59), [`f3d7f72`](https://github.com/apache/cordova-plugin-inappbrowser/commit/f3d7f72))
-   docs: Add headline to window.open documentation ([#406](https://github.com/apache/cordova-plugin-inappbrowser/issues/406)) ([`92243cd`](https://github.com/apache/cordova-plugin-inappbrowser/commit/92243cd))
-   fix(ios): Fix iframes in iOS/WKWebView which were broken by [#418](https://github.com/apache/cordova-plugin-inappbrowser/issues/418) ([#425](https://github.com/apache/cordova-plugin-inappbrowser/issues/425)) ([`388e3f6`](https://github.com/apache/cordova-plugin-inappbrowser/commit/388e3f6))
-   chore(github): Add or update GitHub pull request and issue template ([`ae329bc`](https://github.com/apache/cordova-plugin-inappbrowser/commit/ae329bc))
-   fix(ios): Handle non-default target attribute values (e.g. target=on links in WKWebView implementation on iOS ([#418](https://github.com/apache/cordova-plugin-inappbrowser/issues/418)) ([`9f4b729`](https://github.com/apache/cordova-plugin-inappbrowser/commit/9f4b729))
-   fix(types): remove unused replace parameter ([#410](https://github.com/apache/cordova-plugin-inappbrowser/issues/410)) ([`6db2f2d`](https://github.com/apache/cordova-plugin-inappbrowser/commit/6db2f2d))
-   documentation: Example documentation - Fix callBack function name ([#383](https://github.com/apache/cordova-plugin-inappbrowser/issues/383)) ([`a890e60`](https://github.com/apache/cordova-plugin-inappbrowser/commit/a890e60), [`2500b08`](https://github.com/apache/cordova-plugin-inappbrowser/commit/2500b08))
-   fix: Fix beforeload to work with POST requests ([#367](https://github.com/apache/cordova-plugin-inappbrowser/issues/367)) ([`632a395`](https://github.com/apache/cordova-plugin-inappbrowser/commit/632a395))
-   feat: (iOS & Android) Add postMessage API support ([#362](https://github.com/apache/cordova-plugin-inappbrowser/issues/362)) ([`c54d100`](https://github.com/apache/cordova-plugin-inappbrowser/commit/c54d100))
-   fix(ios): Fixes loadAfterBeforeload on iOS. ([#350](https://github.com/apache/cordova-plugin-inappbrowser/issues/350)) ([`0fd43ae`](https://github.com/apache/cordova-plugin-inappbrowser/commit/0fd43ae))
-   fix(ios): Fix crashes when using WKWebView implementation on iOS 9. ([#337](https://github.com/apache/cordova-plugin-inappbrowser/issues/337)) ([`3b82c16`](https://github.com/apache/cordova-plugin-inappbrowser/commit/3b82c16))
-   fix(ios): Fix iOS CDVWKInAppBrowser evaluateJavascript method randomly gets blocked on ios 12 ([#341](https://github.com/apache/cordova-plugin-inappbrowser/issues/341)) ([`978b147`](https://github.com/apache/cordova-plugin-inappbrowser/commit/978b147))
-   docs: remove unwanted information in README table ([#308](https://github.com/apache/cordova-plugin-inappbrowser/issues/308)) ([`3eadde6`](https://github.com/apache/cordova-plugin-inappbrowser/commit/3eadde6))
-   fix(ios): This lets the default window layering do it's thing. ([#336](https://github.com/apache/cordova-plugin-inappbrowser/issues/336)) ([`c24bb46`](https://github.com/apache/cordova-plugin-inappbrowser/commit/c24bb46), [`27fe8ec`](https://github.com/apache/cordova-plugin-inappbrowser/commit/27fe8ec))
-   feat(ios): [CB-7179](https://issues.apache.org/jira/browse/CB-7179) (iOS): Add optional WKWebView support for iOS ([#271](https://github.com/apache/cordova-plugin-inappbrowser/issues/271)) ([`10a0669`](https://github.com/apache/cordova-plugin-inappbrowser/commit/10a0669), [`3927b8f`](https://github.com/apache/cordova-plugin-inappbrowser/commit/3927b8f), [`8248215`](https://github.com/apache/cordova-plugin-inappbrowser/commit/8248215), [`61014dd`](https://github.com/apache/cordova-plugin-inappbrowser/commit/61014dd), [`c41f5b5`](https://github.com/apache/cordova-plugin-inappbrowser/commit/c41f5b5), [`19c6dfe`](https://github.com/apache/cordova-plugin-inappbrowser/commit/19c6dfe), [`7f5fa2a`](https://github.com/apache/cordova-plugin-inappbrowser/commit/7f5fa2a), [`5d2df21`](https://github.com/apache/cordova-plugin-inappbrowser/commit/5d2df21), [`86cc778`](https://github.com/apache/cordova-plugin-inappbrowser/commit/86cc778), [`cbfa195`](https://github.com/apache/cordova-plugin-inappbrowser/commit/cbfa195), [`52e3534`](https://github.com/apache/cordova-plugin-inappbrowser/commit/52e3534), [`8165232`](https://github.com/apache/cordova-plugin-inappbrowser/commit/8165232), [`e2210bd`](https://github.com/apache/cordova-plugin-inappbrowser/commit/e2210bd), [`dc7fa34`](https://github.com/apache/cordova-plugin-inappbrowser/commit/dc7fa34), [`b48e02f`](https://github.com/apache/cordova-plugin-inappbrowser/commit/b48e02f), [`27e6c67`](https://github.com/apache/cordova-plugin-inappbrowser/commit/27e6c67))
-   docs: remove JIRA link ([`d9cafcd`](https://github.com/apache/cordova-plugin-inappbrowser/commit/d9cafcd))
-   chore(types): [CB-12941](https://issues.apache.org/jira/browse/CB-12941): update typings ([#267](https://github.com/apache/cordova-plugin-inappbrowser/issues/267)) ([`a0c267f`](https://github.com/apache/cordova-plugin-inappbrowser/commit/a0c267f))
-   feat: [CB-14188](https://issues.apache.org/jira/browse/CB-14188): add beforeload event, catching navigation before it happens ([#276](https://github.com/apache/cordova-plugin-inappbrowser/issues/276)) ([`228703a`](https://github.com/apache/cordova-plugin-inappbrowser/commit/228703a), [`eafaeda`](https://github.com/apache/cordova-plugin-inappbrowser/commit/eafaeda))
-   ci(travis): reenable testing on all platforms ([`0ed0bf5`](https://github.com/apache/cordova-plugin-inappbrowser/commit/0ed0bf5))
-   ci(travis): also accept terms for android sdk `android-27` ([`f8ad528`](https://github.com/apache/cordova-plugin-inappbrowser/commit/f8ad528))
-   fix(android): [CB-10795](https://issues.apache.org/jira/browse/CB-10795): Exclude current app from external intent list ([#154](https://github.com/apache/cordova-plugin-inappbrowser/issues/154)) ([`a078337`](https://github.com/apache/cordova-plugin-inappbrowser/commit/a078337))
-   fix(ios): [CB-14234](https://issues.apache.org/jira/browse/CB-14234): Don't call handleOpenURL for system URLs ([#278](https://github.com/apache/cordova-plugin-inappbrowser/issues/278)) ([`cf58b04`](https://github.com/apache/cordova-plugin-inappbrowser/commit/cf58b04))
-   fix(ios): [CB-12875](https://issues.apache.org/jira/browse/CB-12875): (iOS) Pushes the inappbrowser window to a higher ui level than the existing apps window. ([#284](https://github.com/apache/cordova-plugin-inappbrowser/issues/284)) ([`dc5329d`](https://github.com/apache/cordova-plugin-inappbrowser/commit/dc5329d))
-   ci: Quick CI fixes ([#277](https://github.com/apache/cordova-plugin-inappbrowser/issues/277))  ([`de86501`](https://github.com/apache/cordova-plugin-inappbrowser/commit/de86501), [`07d9a99`](https://github.com/apache/cordova-plugin-inappbrowser/commit/07d9a99), [`81f1437`](https://github.com/apache/cordova-plugin-inappbrowser/commit/81f1437), [`a464ea6`](https://github.com/apache/cordova-plugin-inappbrowser/commit/a464ea6), [`e75fe14`](https://github.com/apache/cordova-plugin-inappbrowser/commit/e75fe14), [`eb245ec`](https://github.com/apache/cordova-plugin-inappbrowser/commit/eb245ec))
-   fix(ios): [CB-12922](https://issues.apache.org/jira/browse/CB-12922) (ios): fix In-app browser does not cede control ([#272](https://github.com/apache/cordova-plugin-inappbrowser/issues/272)) ([`dac06aa`](https://github.com/apache/cordova-plugin-inappbrowser/commit/dac06aa), [`9cc7f69`](https://github.com/apache/cordova-plugin-inappbrowser/commit/9cc7f69))
-   fix(android): [CB-14061](https://issues.apache.org/jira/browse/CB-14061): (android) comply with RFC 3986 for custom URL scheme handling ([#269](https://github.com/apache/cordova-plugin-inappbrowser/issues/269)) ([`f57ede9`](https://github.com/apache/cordova-plugin-inappbrowser/commit/f57ede9), [`26cf6e4`](https://github.com/apache/cordova-plugin-inappbrowser/commit/26cf6e4))
-   fix(android): [CB-14048](https://issues.apache.org/jira/browse/CB-14048): (android) allowedSchemes check empty string fix ([#268](https://github.com/apache/cordova-plugin-inappbrowser/issues/268)) ([`57eda78`](https://github.com/apache/cordova-plugin-inappbrowser/commit/57eda78), [`33aff11`](https://github.com/apache/cordova-plugin-inappbrowser/commit/33aff11))


### 3.0.0 (Apr 12, 2018)
* [CB-13659](https://issues.apache.org/jira/browse/CB-13659) **iOS** Add hidespinner option
* In file `AppBrowser.java`: New code within `shouldOverrideUrlLoading()` to check for whitelisting custom schemes via a new `AllowedSchemes` preference configuration item.  Allows custom schemes like `mycoolapp://` or `wevotetwitterscheme://`
* `InAppBrowser.java`: New method `isURLWhileListed` to check for whitelisting of `AllowedSchemes` in a new preference configuration item. There is a new check in `shouldOverrideUrlLoading`, to allow whitelisted custom schemes like "mycoolapp://"
* Add customisation of the navigation buttons for **iOS**
* Fix navigation buttons on **iOS**
