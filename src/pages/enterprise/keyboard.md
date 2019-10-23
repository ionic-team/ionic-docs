---
title: Keyboard
template: enterprise-plugin
version: 2.1.3
minor: 2.1.X
---

Keyboard
========

The Keyboard plugin allows you to configure the keyboard behavior (show/hide) and display (sizing/visibility).

<native-ent-install plugin-id="keyboard" variables=""></native-ent-install>

Usage
=====

```typescript
// Angular
import { Keyboard } from '@ionic-enterprise/keyboard/ngx';

...

constructor(private keyboard: Keyboard) {
  this.keyboard.setResizeMode('body');
  window.addEventListener('keyboardWillShow', () => console.log('keyboard showing'));
}

...

// ES2015+/TypeScript
import { Keyboard } from '@ionic-enterprise/keyboard';

Keyboard.setResizeMode('body');
window.addEventListener('keyboardWillShow', () => console.log('keyboard showing'));

...

// Vanilla JS
document.addEventListener('deviceready', () => {
  Keyboard.setResizeMode('body');
  window.addEventListener('keyboardWillShow', () => console.log('keyboard showing'));
});
```

Preferences
-----------

### KeyboardResize

> Boolean (true by default)

#### Possible values

*   `true`: Showing/hiding the keyboard will trigger some kind of resizing of the app (see KeyboardResizeMode)
*   `false`: Web will not be resized when the keyboard shows up.

```xml
<preference name="KeyboardResize" value="true" />
```

### KeyboardResizeMode

> String ('native' by default)

#### Possible values

*   `native`: The whole native webview will be resized when the keyboard shows/hides, it will affect the `vh` relative unit.
*   `body`: Only the html `<body>` element will be resized. Relative units are not affected, because the viewport does not change.
*   `ionic`: Only the html `ion-app` element will be resized. Only for ionic apps.

```xml
<preference name="KeyboardResizeMode" value="native" />
```

Methods
-------

### Keyboard.hideFormAccessoryBar

> Hide the keyboard toolbar.

Set to true to hide the additional toolbar that is on top of the keyboard. This toolbar features the Prev, Next, and Done buttons.

```js
Keyboard.hideFormAccessoryBar(value, successCallback);
```

##### Quick Example

```js
Keyboard.hideFormAccessoryBar(true);
Keyboard.hideFormAccessoryBar(false);
Keyboard.hideFormAccessoryBar(null, (currentValue) => { console.log(currentValue); });
```

### Keyboard.hide

> Hide the keyboard

Call this method to hide the keyboard

```js
Keyboard.hide();
```

### Keyboard.show

> Show the keyboard

Call this method to show the keyboard.

```js
Keyboard.show();
```

Properties
----------

### Keyboard.isVisible

> Determine if the keyboard is visible.

Read this property to determine if the keyboard is visible.

```js
if (Keyboard.isVisible) {
    // do something
}
```

Events
------

### keyboardDidHide

> This event is fired when the keyboard is fully closed.

Attach handler to this event to be able to receive notification when keyboard is closed.

```js
window.addEventListener('keyboardDidHide', () => {
    // Describe your logic which will be run each time keyboard is closed.
});
```

### keyboardDidShow

> This event is fired when the keyboard is fully open.

Attach handler to this event to be able to receive notification when keyboard is opened.

```js
window.addEventListener('keyboardDidShow', (event) => {
    // Describe your logic which will be run each time when keyboard is about to be shown.
    console.log(event.keyboardHeight);
});
```

### keyboardWillShow

> This event fires before keyboard will be shown.

Attach handler to this event to be able to receive notification when keyboard is about to be shown on the screen.

```js
window.addEventListener('keyboardWillShow', (event) => {
    // Describe your logic which will be run each time when keyboard is about to be shown.
    console.log(event.keyboardHeight);
});
```

### keyboardWillHide

> This event is fired when the keyboard is fully closed.

Attach handler to this event to be able to receive notification when keyboard is about to be closed.

```js
window.addEventListener('keyboardWillHide', () => {
    // Describe your logic which will be run each time when keyboard is about to be closed.
});
```

## Index

### Classes

* [Keyboard](#keyboard)

---

## Classes

<a id="keyboard"></a>

###  Keyboard

*__usage__*:
 ```typescript
// Angular
import { Keyboard } from '@ionic-enterprise/keyboard/ngx';

...

constructor(private keyboard: Keyboard) {
  this.keyboard.setResizeMode('body');
  window.addEventListener('keyboardWillShow', () => console.log('keyboard showing'));
}

...

// ES2015+/TypeScript
import { Keyboard } from '@ionic-enterprise/keyboard';

Keyboard.setResizeMode('body');
window.addEventListener('keyboardWillShow', () => console.log('keyboard showing'));

...

// Vanilla JS
document.addEventListener('deviceready', () => {
  Keyboard.setResizeMode('body');
  window.addEventListener('keyboardWillShow', () => console.log('keyboard showing'));
});
```

<a id="keyboard.isvisible"></a>

###  isVisible

**get isVisible**(): `boolean`

Whether the keyboard is visible or not

**Returns:** `boolean`

___
<a id="keyboard.hide"></a>

###  hide

▸ **hide**(): `Promise`<`void`>

Hide the keyboard

**Returns:** `Promise`<`void`>
a promise that resolves once the keyboard has been hidden

___
<a id="keyboard.hideformaccessorybar"></a>

###  hideFormAccessoryBar

▸ **hideFormAccessoryBar**(hide: *`boolean`*): `Promise`<`boolean` \| `void`>

Hide the keyboard accessory bar

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| hide | `boolean` |  whether to show or hide the form accessory bar if supported |

**Returns:** `Promise`<`boolean` \| `void`>
a promise that resolves with the current setting (true if bar
will be hidden).

___
<a id="keyboard.setresizemode"></a>

###  setResizeMode

▸ **setResizeMode**(mode: *"native" \| "body" \| "ionic"*): `Promise`<`void`>

Sets the resize behavior of the app when the keyboard shows. 'native' attempts to resize the enter native window, 'body' the webview's document.body, and 'ionic' the root Ionic app element ('ion-app'), if there is one.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| mode | "native" \| "body" \| "ionic" |  The resize mode. |

**Returns:** `Promise`<`void`>
a promise that resolves once the value has been set.

___
<a id="keyboard.show"></a>

###  show

▸ **show**(): `Promise`<`void`>

Show the keyboard, if supported

**Returns:** `Promise`<`void`>
a promise that resolves when the keyboard has been shown

___

___

## Change Log
