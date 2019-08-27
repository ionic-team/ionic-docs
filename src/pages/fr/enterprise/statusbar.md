---
title: Statusbar
template: enterprise-plugin
version: 2.4.2
minor: 2.4.X
---



## Index

### Classes

* [StatusBar](#statusbar)

* * *

## Classes

<a id="statusbar"></a>

### StatusBar

**StatusBar**:

***name***: Status Bar

***description***: Manage the appearance of the native status bar.

***usage***:

```typescript
import { StatusBar } from '@ionic-enterprise/statusbar/ngx';

constructor(private statusBar: StatusBar) { }

...

// let status bar overlay webview
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.backgroundColorByHexString('#ffffff');
```

<a id="statusbar.isvisible"></a>

### isVisible

**● isVisible**: *`boolean`*

Whether the StatusBar is currently visible or not.

* * *

<a id="statusbar.backgroundcolorbyhexstring"></a>

### backgroundColorByHexString

▸ **backgroundColorByHexString**(hexString: *`string`*): `void`

Set the status bar to a specific hex color (CSS shorthand supported!).

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.

**Parameters:**

| Name      | Type     | Description                 |
| --------- | -------- | --------------------------- |
| hexString | `string` | The hex value of the color. |


**Returns:** `void`

* * *

<a id="statusbar.backgroundcolorbyname"></a>

### backgroundColorByName

▸ **backgroundColorByName**(colorName: *`string`*): `void`

Set the status bar to a specific named color. Valid options: black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.

iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.

**Parameters:**

| Name      | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| colorName | `string` | The name of the color (from above) |


**Returns:** `void`

* * *

<a id="statusbar.hide"></a>

### hide

▸ **hide**(): `void`

Hide the StatusBar

**Returns:** `void`

* * *

<a id="statusbar.overlayswebview"></a>

### overlaysWebView

▸ **overlaysWebView**(doesOverlay: *`boolean`*): `void`

Set whether the status bar overlays the main app view. The default is true.

**Parameters:**

| Name        | Type      | Description                                        |
| ----------- | --------- | -------------------------------------------------- |
| doesOverlay | `boolean` | Whether the status bar overlays the main app view. |


**Returns:** `void`

* * *

<a id="statusbar.show"></a>

### show

▸ **show**(): `void`

Show the StatusBar

**Returns:** `void`

* * *

<a id="statusbar.styleblackopaque"></a>

### styleBlackOpaque

▸ **styleBlackOpaque**(): `void`

Use the blackOpaque statusbar (light text, for dark backgrounds).

**Returns:** `void`

* * *

<a id="statusbar.styleblacktranslucent"></a>

### styleBlackTranslucent

▸ **styleBlackTranslucent**(): `void`

Use the blackTranslucent statusbar (light text, for dark backgrounds).

**Returns:** `void`

* * *

<a id="statusbar.styledefault"></a>

### styleDefault

▸ **styleDefault**(): `void`

Use the default statusbar (dark text, for light backgrounds).

**Returns:** `void`

* * *

<a id="statusbar.stylelightcontent"></a>

### styleLightContent

▸ **styleLightContent**(): `void`

Use the lightContent statusbar (light text, for dark backgrounds).

**Returns:** `void`

* * *

* * *