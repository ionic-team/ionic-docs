---
title: Inappbrowser
template: enterprise-plugin
version: 3.0.0
minor: 3.0.X
---



## Index

### Classes

* [InAppBrowser](#inappbrowser)

### Interfaces

* [InAppBrowserEvent](#inappbrowserevent)
* [InAppBrowserOptions](#inappbrowseroptions)

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

**● type**: *`string`*

the eventname, either loadstart, loadstop, loaderror, or exit.

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

___
<a id="inappbrowseroptions.clearcache"></a>

### `<Optional>` clearcache

**● clearcache**: *"yes"*

Set to yes to have the browser's cookie cache cleared before the new window is opened.

___
<a id="inappbrowseroptions.clearsessioncache"></a>

### `<Optional>` clearsessioncache

**● clearsessioncache**: *"yes"*

___
<a id="inappbrowseroptions.closebuttoncaption"></a>

### `<Optional>` closebuttoncaption

**● closebuttoncaption**: *`string`*

___
<a id="inappbrowseroptions.closebuttoncolor"></a>

### `<Optional>` closebuttoncolor

**● closebuttoncolor**: *`string`*

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

___
<a id="inappbrowseroptions.hardwareback"></a>

### `<Optional>` hardwareback

**● hardwareback**: *"yes" \| "no"*

___
<a id="inappbrowseroptions.hidden"></a>

### `<Optional>` hidden

**● hidden**: *"yes" \| "no"*

___
<a id="inappbrowseroptions.hidenavigationbuttons"></a>

### `<Optional>` hidenavigationbuttons

**● hidenavigationbuttons**: *"yes" \| "no"*

___
<a id="inappbrowseroptions.hidespinner"></a>

### `<Optional>` hidespinner

**● hidespinner**: *"yes" \| "no"*

(iOS Only) Set to yes or no to change the visibility of the loading indicator (defaults to no).

___
<a id="inappbrowseroptions.hideurlbar"></a>

### `<Optional>` hideurlbar

**● hideurlbar**: *"yes" \| "no"*

___
<a id="inappbrowseroptions.keyboarddisplayrequiresuseraction"></a>

### `<Optional>` keyboardDisplayRequiresUserAction

**● keyboardDisplayRequiresUserAction**: *"yes" \| "no"*

(iOS Only) Set to yes or no to open the keyboard when form elements receive focus via JavaScript's focus() call (defaults to yes).

___
<a id="inappbrowseroptions.location"></a>

### `<Optional>` location

**● location**: *"yes" \| "no"*

Set to yes or no to turn the InAppBrowser's location bar on or off.

___
<a id="inappbrowseroptions.mediaplaybackrequiresuseraction"></a>

### `<Optional>` mediaPlaybackRequiresUserAction

**● mediaPlaybackRequiresUserAction**: *"yes" \| "no"*

___
<a id="inappbrowseroptions.navigationbuttoncolor"></a>

### `<Optional>` navigationbuttoncolor

**● navigationbuttoncolor**: *`string`*

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

