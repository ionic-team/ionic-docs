---
title: Toast Capacitor Plugin API
description: The Toast API provides a notification pop up for displaying important information to a user. Just like real toast!
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/toast/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/toast/src/definitions.ts
sidebar_label: Toast
---
# @capacitor/toast

The Toast API provides a notification pop up for displaying important information to a user. Just like real toast!

## Install

```bash
npm install @capacitor/toast
npx cap sync
```

## PWA Notes

[PWA Elements](https://capacitorjs.com/docs/web/pwa-elements) are required for the Toast plugin to work.

## Example

```typescript
import { Toast } from '@capacitor/toast';

const showHelloToast = async () => {
  await Toast.show({
    text: 'Hello!',
  });
};
```

## API

<docgen-index>

* [`show(...)`](#show)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>


### show(...)

```typescript
show(options: ShowOptions) => Promise<void>
```

Shows a Toast on the screen

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#showoptions">ShowOptions</a></code> |

**Since:** 1.0.0

--------------------


### Interfaces


#### ShowOptions

| Prop           | Type                                       | Description                                                                        | Default               | Since |
| -------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- | --------------------- | ----- |
| **`text`**     | <code>string</code>                        | Text to display on the Toast                                                       |                       | 1.0.0 |
| **`duration`** | <code>'short' \| 'long'</code>             | Duration of the Toast, either 'short' (2000ms) or 'long' (3500ms)                  | <code>'short'</code>  | 1.0.0 |
| **`position`** | <code>'top' \| 'center' \| 'bottom'</code> | Position of the Toast. On Android 12 and newer all toasts are shown at the bottom. | <code>'bottom'</code> | 1.0.0 |

</docgen-api>