---
title: Keyboard
template: enterprise-plugin
version: 2.2.0
minor: 2.2.X
---



## Index

### Enumerations

* [KeyboardResizeMode](../#keyboardresizemode)
* [KeyboardStyle](../#keyboardstyle)

### Classes

* [Keyboard](../#keyboard)

---

## Enumerations

<a id="keyboardresizemode"></a>

###  KeyboardResizeMode

**KeyboardResizeMode**: 

<a id="keyboardresizemode.body"></a>

###  Body

**Body**:  = "body"

___
<a id="keyboardresizemode.ionic"></a>

###  Ionic

**Ionic**:  = "ionic"

___
<a id="keyboardresizemode.native"></a>

###  Native

**Native**:  = "native"

___
<a id="keyboardresizemode.none"></a>

###  None

**None**:  = "none"

___

___
<a id="keyboardstyle"></a>

###  KeyboardStyle

**KeyboardStyle**: 

<a id="keyboardstyle.dark"></a>

###  Dark

**Dark**:  = "dark"

___
<a id="keyboardstyle.light"></a>

###  Light

**Light**:  = "light"

___

___

## Classes

<a id="keyboard"></a>

###  Keyboard

**Keyboard**: 

*__name__*: Keyboard

*__description__*: Keyboard plugin for Cordova.

*__usage__*:
 ```typescript
import { Keyboard } from '@ionic-enterprise/keyboard/ngx';

constructor(private keyboard: Keyboard) { }

...

this.keyboard.show();

this.keyboard.hide();

```

<a id="keyboard.isvisible"></a>

###  isVisible

**● isVisible**: *`boolean`*

Check keyboard status visible or not.

*__returns__*: 

___
<a id="keyboard.disablescroll"></a>

###  disableScroll

▸ **disableScroll**(disable: *`boolean`*): `void`

Programatically enable or disable the WebView scroll

**Parameters:**

| Name | Type |
| ------ | ------ |
| disable | `boolean` |

**Returns:** `void`

___
<a id="keyboard.hide"></a>

###  hide

▸ **hide**(): `void`

Hide the keyboard if shown.

**Returns:** `void`

___
<a id="keyboard.hideformaccessorybar"></a>

###  hideFormAccessoryBar

▸ **hideFormAccessoryBar**(hide: *`boolean`*): `void`

Hide the keyboard accessory bar with the next, previous and done buttons.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hide | `boolean` |   |

**Returns:** `void`

___
<a id="keyboard.onkeyboarddidhide"></a>

###  onKeyboardDidHide

▸ **onKeyboardDidHide**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard did hide. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

___
<a id="keyboard.onkeyboarddidshow"></a>

###  onKeyboardDidShow

▸ **onKeyboardDidShow**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard did show. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

___
<a id="keyboard.onkeyboardhide"></a>

###  onKeyboardHide

▸ **onKeyboardHide**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

___
<a id="keyboard.onkeyboardshow"></a>

###  onKeyboardShow

▸ **onKeyboardShow**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

___
<a id="keyboard.onkeyboardwillhide"></a>

###  onKeyboardWillHide

▸ **onKeyboardWillHide**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

___
<a id="keyboard.onkeyboardwillshow"></a>

###  onKeyboardWillShow

▸ **onKeyboardWillShow**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

___
<a id="keyboard.setkeyboardstyle"></a>

###  setKeyboardStyle

▸ **setKeyboardStyle**(style: *[KeyboardStyle](../#keyboardstyle)*): `void`

Programatically set Keyboard style

**Parameters:**

| Name | Type |
| ------ | ------ |
| style | [KeyboardStyle](../#keyboardstyle) |

**Returns:** `void`

___
<a id="keyboard.setresizemode"></a>

###  setResizeMode

▸ **setResizeMode**(mode: *[KeyboardResizeMode](../#keyboardresizemode)*): `void`

Programatically set the resize mode

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| mode | [KeyboardResizeMode](../#keyboardresizemode) |   |

**Returns:** `void`

___
<a id="keyboard.show"></a>

###  show

▸ **show**(): `void`

Force keyboard to be shown.

**Returns:** `void`

___

___

# Changelog


## [2.2.0](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/compare/2.1.3...v2.2.0) (2019-09-03)


### Features

* **windows:** add windows implementation
* **android:** add resizeOnFullScreen preference for Android
* **ios:** Added Keyboard.setKeyboardStyle method
* **ios:** reimplement disableScroll method


### Bug Fixes

* **android:** Avoid conflicts when ionic-plugin-keyboard is installed
* **ios:** respect KeyboardAppearanceDark preference from webview plugin
* **ios:** Delay resize until keyboard animation finish
* **ios:** Avoid duplicate hide event when user changes field


