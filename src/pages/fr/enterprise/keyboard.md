---
title: Keyboard
template: enterprise-plugin
version: 2.2.0
minor: 2.2.X
---

The Keyboard plugin allows you to configure the keyboard behavior (show/hide) and display (sizing/visibility).

<native-ent-install plugin-id="keyboard" variables="" capacitor-slug="keyboard"></native-ent-install>

### Preferences

You can add the following preferences in your `config.xml`:

#### iOS Only Preferences

- **KeyboardResize** (boolean, defaults to true). If `true` Showing/hiding the keyboard will trigger some kind of resizing of the app (see KeyboardResizeMode). If `false` Web will not be resized when the keyboard shows up.
    
          <preference name="KeyboardResize" value="true" />
        

- **KeyboardResizeMode** (String, 'native' by default). Possible values:
    
    - `native`: The whole native webview will be resized when the keyboard shows/hides, it will affect the `vh` relative unit.
    - `body`: Only the html `<body>` element will be resized. Relative units are not affected, because the viewport does not change.
    - `ionic`: Only the html `ion-app` element will be resized. Only for ionic apps.
        
                <preference name="KeyboardResizeMode" value="native" />
            

- **KeyboardStyle** (String, 'light' by default). Possible values:
    
    - `light`
    - `dark`
        
              <preference name="KeyboardStyle" value="dark" />
            

- **HideKeyboardFormAccessoryBar** (boolean, defaults to true). If set to `true` it hides the keyboard accessory bar. If set to `false` it shows the keyboard accessory bar.
    
          <preference name="HideKeyboardFormAccessoryBar" value="false" />
        

#### Android Only Preferences

- **resizeOnFullScreen** (boolean, defaults to false). There is an Android bug that prevents the keyboard from resizing the WebView when the app is in full screen (i.e. if StatusBar plugin is used to hide the StatusBar). This setting, if set to true, add a workaround that resizes the WebView even when the app is in full screen.
    
          <preference name="resizeOnFullScreen" value="true" />
        

## Index

### Enumerations

* [KeyboardResizeMode](../#keyboardresizemode)
* [KeyboardStyle](../#keyboardstyle)

### Classes

* [Keyboard](../#keyboard)

* * *

## Enumerations

<a id="keyboardresizemode"></a>

### KeyboardResizeMode

**KeyboardResizeMode**:

<a id="keyboardresizemode.body"></a>

### Body

**Body**: = "body"

* * *

<a id="keyboardresizemode.ionic"></a>

### Ionic

**Ionic**: = "ionic"

* * *

<a id="keyboardresizemode.native"></a>

### Native

**Native**: = "native"

* * *

<a id="keyboardresizemode.none"></a>

### None

**None**: = "none"

* * *

* * *

<a id="keyboardstyle"></a>

### KeyboardStyle

**KeyboardStyle**:

<a id="keyboardstyle.dark"></a>

### Dark

**Dark**: = "dark"

* * *

<a id="keyboardstyle.light"></a>

### Light

**Light**: = "light"

* * *

* * *

## Classes

<a id="keyboard"></a>

### Keyboard

**Keyboard**:

***name***: Keyboard

***description***: Keyboard plugin for Cordova.

***usage***:

```typescript
import { Keyboard } from '@ionic-enterprise/keyboard/ngx';

constructor(private keyboard: Keyboard) { }

...

this.keyboard.show();

this.keyboard.hide();

```

<a id="keyboard.isvisible"></a>

### isVisible

**● isVisible**: *`boolean`*

Check keyboard status visible or not.

***returns***:

* * *

<a id="keyboard.disablescroll"></a>

### disableScroll

▸ **disableScroll**(disable: *`boolean`*): `void`

Programatically enable or disable the WebView scroll

**Parameters:**

| Name    | Type      |
| ------- | --------- |
| disable | `boolean` |


**Returns:** `void`

* * *

<a id="keyboard.hide"></a>

### hide

▸ **hide**(): `void`

Hide the keyboard if shown.

**Returns:** `void`

* * *

<a id="keyboard.hideformaccessorybar"></a>

### hideFormAccessoryBar

▸ **hideFormAccessoryBar**(hide: *`boolean`*): `void`

Hide the keyboard accessory bar with the next, previous and done buttons.

**Parameters:**

| Name | Type      | Description |
| ---- | --------- | ----------- |
| hide | `boolean` |             |


**Returns:** `void`

* * *

<a id="keyboard.onkeyboarddidhide"></a>

### onKeyboardDidHide

▸ **onKeyboardDidHide**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard did hide. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

* * *

<a id="keyboard.onkeyboarddidshow"></a>

### onKeyboardDidShow

▸ **onKeyboardDidShow**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard did show. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

* * *

<a id="keyboard.onkeyboardhide"></a>

### onKeyboardHide

▸ **onKeyboardHide**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

* * *

<a id="keyboard.onkeyboardshow"></a>

### onKeyboardShow

▸ **onKeyboardShow**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

* * *

<a id="keyboard.onkeyboardwillhide"></a>

### onKeyboardWillHide

▸ **onKeyboardWillHide**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard will hide. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

* * *

<a id="keyboard.onkeyboardwillshow"></a>

### onKeyboardWillShow

▸ **onKeyboardWillShow**(): `Observable`<`any`>

Creates an observable that notifies you when the keyboard will show. Unsubscribe to observable to cancel event watch.

**Returns:** `Observable`<`any`>

* * *

<a id="keyboard.setkeyboardstyle"></a>

### setKeyboardStyle

▸ **setKeyboardStyle**(style: *[KeyboardStyle](../#keyboardstyle)*): `void`

Programatically set Keyboard style

**Parameters:**

| Name  | Type                               |
| ----- | ---------------------------------- |
| style | [KeyboardStyle](../#keyboardstyle) |


**Returns:** `void`

* * *

<a id="keyboard.setresizemode"></a>

### setResizeMode

▸ **setResizeMode**(mode: *[KeyboardResizeMode](../#keyboardresizemode)*): `void`

Programatically set the resize mode

**Parameters:**

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| mode | [KeyboardResizeMode](../#keyboardresizemode) |             |


**Returns:** `void`

* * *

<a id="keyboard.show"></a>

### show

▸ **show**(): `void`

Force keyboard to be shown.

**Returns:** `void`

* * *

* * *

# Changelog

## [2.2.0](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/compare/2.1.3...v2.2.0) (2019-09-03)

### Features

* **windows:** add windows implementation
* **android:** add resizeOnFullScreen preference for Android ([#106](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/106)) ([169c73c](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/169c73c227ebb336af6bb3edb3ccfde536913338))
* **ios:** Added Keyboard.setKeyboardStyle method ([#79](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/79)) ([4c03a7e](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/4c03a7e0ca6821fa823128cc5e7544437932d67c))
* **ios:** reimplement disableScroll method ([#102](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/102)) ([b33e7a2](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/b33e7a29909e51c7bff95851925f97edd5164cb7))

### Bug Fixes

* **android:** Avoid conflicts when ionic-plugin-keyboard is installed ([#104](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/104)) ([893dc8e](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/893dc8e230a792b1b7a6d433e5db74a3e1022486))
* **ios:** respect KeyboardAppearanceDark preference from webview plugin ([#101](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/101)) ([b00e3a9](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/b00e3a92b3f8ecb31e9914d4abda503a332249d0))
* **ios:** Delay resize until keyboard animation finish ([#81](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/81)) ([d729cbf](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/d729cbf314eba47cb3fdfb56bc2df27305828738))
* **ios:** Avoid duplicate hide event when user changes field ([#68](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/issues/68)) ([4a0e018](https://github.com/ionic-team/cordova-plugin-ionic-keyboard/commit/4a0e0182822253427e1df12246252798dbe0a496))