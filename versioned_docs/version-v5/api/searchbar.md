---
title: 'Search Bar Icon for Keyboard Text Display | Ion-Search Bar'
description: 'Search bars represent a text field that can be used to search through a collection. Learn to input Ion-Search Bar as an icon on Android & iOS keyboard displays.'
sidebar_label: 'ion-searchbar'
demoUrl: '/docs/demos/api/searchbar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/searchbar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-searchbar

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.

A Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.

## Keyboard Display

### Android

By default, tapping the input will cause the keyboard to appear with a magnifying glass icon on the submit button. You can optionally set the `inputmode` property to `"search"`, which will change the icon from a magnifying glass to a carriage return.

### iOS

By default, tapping the input will cause the keyboard to appear with the text "return" on a gray submit button. You can optionally set the `inputmode` property to `"search"`, which will change the text from "return" to "go", and change the button color from gray to blue. Alternatively, you can wrap the `ion-searchbar` in a `form` element with an `action` property. This will cause the keyboard to appear with a blue submit button that says "search".

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar showCancelButton="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar showCancelButton="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar showCancelButton="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar show-cancel-button="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar show-cancel-button="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar show-cancel-button="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

export const SearchBarExamples: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Default Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}></IonSearchbar>

        <p>Searchbar with cancel button always shown</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="always"
        ></IonSearchbar>

        <p>Searchbar with cancel button never shown</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="never"
        ></IonSearchbar>

        <p>Searchbar with cancel button shown on focus</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus"
        ></IonSearchbar>

        <p>Searchbar with danger color</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          color="danger"
        ></IonSearchbar>

        <p>Searchbar with telephone type</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)} type="tel"></IonSearchbar>

        <p>Searchbar with numeric inputmode</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          inputmode="numeric"
        ></IonSearchbar>

        <p>Searchbar disabled </p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          disabled={true}
        ></IonSearchbar>

        <p>Searchbar with a cancel button and custom cancel button text</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus"
          cancelButtonText="Custom Cancel"
        ></IonSearchbar>

        <p>Searchbar with a custom debounce - Note: debounce only works on onIonChange event</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          debounce={1000}
        ></IonSearchbar>

        <p>Animated Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)} animated></IonSearchbar>

        <p>Searchbar with a placeholder</p>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          placeholder="Filter Schedules"
        ></IonSearchbar>

        <p>Searchbar in a Toolbar</p>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={(e) => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonContent>
      <IonFooter>
        <IonToolbar>Search Text: {searchText ?? '(none)'}</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchbar-example',
  styleUrl: 'searchbar-example.css',
})
export class SearchbarExample {
  render() {
    return [
      // Default Searchbar
      <ion-searchbar></ion-searchbar>,

      // Searchbar with cancel button always shown
      <ion-searchbar showCancelButton="always"></ion-searchbar>,

      // Searchbar with cancel button never shown
      <ion-searchbar showCancelButton="never"></ion-searchbar>,

      // Searchbar with cancel button shown on focus
      <ion-searchbar showCancelButton="focus"></ion-searchbar>,

      // Searchbar with danger color
      <ion-searchbar color="danger"></ion-searchbar>,

      // Searchbar with value
      <ion-searchbar value="Ionic"></ion-searchbar>,

      // Searchbar with telephone type
      <ion-searchbar type="tel"></ion-searchbar>,

      // Searchbar with numeric inputmode
      <ion-searchbar inputmode="numeric"></ion-searchbar>,

      // Searchbar disabled
      <ion-searchbar disabled={true}></ion-searchbar>,

      // Searchbar with a cancel button and custom cancel button text
      <ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>,

      // Searchbar with a custom debounce
      <ion-searchbar debounce={500}></ion-searchbar>,

      // Animated Searchbar
      <ion-searchbar animated={true}></ion-searchbar>,

      // Searchbar with a placeholder
      <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>,

      // Searchbar in a Toolbar
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Searchbar -->
  <ion-searchbar></ion-searchbar>

  <!-- Searchbar with cancel button always shown -->
  <ion-searchbar show-cancel-button="always"></ion-searchbar>

  <!-- Searchbar with cancel button never shown -->
  <ion-searchbar show-cancel-button="never"></ion-searchbar>

  <!-- Searchbar with cancel button shown on focus -->
  <ion-searchbar show-cancel-button="focus"></ion-searchbar>

  <!-- Searchbar with danger color -->
  <ion-searchbar color="danger"></ion-searchbar>

  <!-- Searchbar with value -->
  <ion-searchbar value="Ionic"></ion-searchbar>

  <!-- Searchbar with telephone type -->
  <ion-searchbar type="tel"></ion-searchbar>

  <!-- Searchbar with numeric inputmode -->
  <ion-searchbar inputmode="numeric"></ion-searchbar>

  <!-- Searchbar disabled -->
  <ion-searchbar disabled="true"></ion-searchbar>

  <!-- Searchbar with a cancel button and custom cancel button text -->
  <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

  <!-- Searchbar with a custom debounce -->
  <ion-searchbar debounce="500"></ion-searchbar>

  <!-- Animated Searchbar -->
  <ion-searchbar animated></ion-searchbar>

  <!-- Searchbar with a placeholder -->
  <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

  <!-- Searchbar in a Toolbar -->
  <ion-toolbar>
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
</template>

<script>
  import { IonSearchbar, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar, IonToolbar },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### animated

|                 |                                        |
| --------------- | -------------------------------------- |
| **Description** | If `true`, enable searchbar animation. |
| **Attribute**   | `animated`                             |
| **Type**        | `boolean`                              |
| **Default**     | `false`                                |

### autocomplete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set the input's autocomplete property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Attribute**   | `autocomplete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"on" \| "off" \| "name" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "email" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "url" \| "photo"` |
| **Default**     | `'off'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### autocorrect

|                 |                                       |
| --------------- | ------------------------------------- |
| **Description** | Set the input's autocorrect property. |
| **Attribute**   | `autocorrect`                         |
| **Type**        | `"off" \| "on"`                       |
| **Default**     | `'off'`                               |

### cancelButtonIcon

|                 |                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Description** | Set the cancel button icon. Only applies to `md` mode.<br />Defaults to `"arrow-back-sharp"`. |
| **Attribute**   | `cancel-button-icon`                                                                          |
| **Type**        | `string`                                                                                      |
| **Default**     | `config.get('backButtonIcon', 'arrow-back-sharp') as string`                                  |

### cancelButtonText

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | Set the cancel button text. Only applies to `ios` mode.     |
| **Attribute**   | `cancel-button-text`                                        |
| **Type**        | `string`                                                    |
| **Default**     | `'Cancel'`                                                  |

### clearIcon

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Description** | Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close-sharp"` for `md`. |
| **Attribute**   | `clear-icon`                                                                             |
| **Type**        | `string \| undefined`                                                                    |
| **Default**     | `undefined`                                                                              |

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### debounce

|                 |                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. This also impacts form bindings such as `ngModel` or `v-model`. |
| **Attribute**   | `debounce`                                                                                                                                                              |
| **Type**        | `number`                                                                                                                                                                |
| **Default**     | `250`                                                                                                                                                                   |

### disabled

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Description** | If `true`, the user cannot interact with the input. |
| **Attribute**   | `disabled`                                          |
| **Type**        | `boolean`                                           |
| **Default**     | `false`                                             |

### enterkeyhint

|                 |                                                                                                                                                                 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which enter key to display.<br />Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,<br />`"previous"`, `"search"`, and `"send"`. |
| **Attribute**   | `enterkeyhint`                                                                                                                                                  |
| **Type**        | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`                                                                          |
| **Default**     | `undefined`                                                                                                                                                     |

### inputmode

|                 |                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | A hint to the browser for which keyboard to display.<br />Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,<br />`"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute**   | `inputmode`                                                                                                                                                                |
| **Type**        | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined`                                                                         |
| **Default**     | `undefined`                                                                                                                                                                |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### placeholder

|                 |                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Set the input's placeholder.<br />`placeholder` can accept either plaintext or HTML as a string.<br />To display characters normally reserved for HTML, they<br />must be escaped. For example `<Ionic>` would become<br />`&lt;Ionic&gt;`<br /><br />For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) |
| **Attribute**   | `placeholder`                                                                                                                                                                                                                                                                                                                                      |
| **Type**        | `string`                                                                                                                                                                                                                                                                                                                                           |
| **Default**     | `'Search'`                                                                                                                                                                                                                                                                                                                                         |

### searchIcon

|                 |                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The icon to use as the search icon. Defaults to `"search-outline"` in<br />`ios` mode and `"search-sharp"` in `md` mode. |
| **Attribute**   | `search-icon`                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                    |
| **Default**     | `undefined`                                                                                                              |

### showCancelButton

|                 |                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the behavior for the cancel button. Defaults to `"never"`.<br />Setting to `"focus"` shows the cancel button on focus.<br />Setting to `"never"` hides the cancel button.<br />Setting to `"always"` shows the cancel button regardless<br />of focus state. |
| **Attribute**   | `show-cancel-button`                                                                                                                                                                                                                                              |
| **Type**        | `"always" \| "focus" \| "never"`                                                                                                                                                                                                                                  |
| **Default**     | `'never'`                                                                                                                                                                                                                                                         |

### showClearButton

|                 |                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Sets the behavior for the clear button. Defaults to `"focus"`.<br />Setting to `"focus"` shows the clear button on focus if the<br />input is not empty.<br />Setting to `"never"` hides the clear button.<br />Setting to `"always"` shows the clear button regardless<br />of focus state, but only if the input is not empty. |
| **Attribute**   | `show-clear-button`                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"always" \| "focus" \| "never"`                                                                                                                                                                                                                                                                                                 |
| **Default**     | `'focus'`                                                                                                                                                                                                                                                                                                                        |

### spellcheck

|                 |                                            |
| --------------- | ------------------------------------------ |
| **Description** | If `true`, enable spellcheck on the input. |
| **Attribute**   | `spellcheck`                               |
| **Type**        | `boolean`                                  |
| **Default**     | `false`                                    |

### type

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **Description** | Set the type of the input.                                                  |
| **Attribute**   | `type`                                                                      |
| **Type**        | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` |
| **Default**     | `'search'`                                                                  |

### value

|                 |                               |
| --------------- | ----------------------------- |
| **Description** | the value of the searchbar.   |
| **Attribute**   | `value`                       |
| **Type**        | `null \| string \| undefined` |
| **Default**     | `''`                          |

## Events

| Name        | Description                                     |
| ----------- | ----------------------------------------------- |
| `ionBlur`   | Emitted when the input loses focus.             |
| `ionCancel` | Emitted when the cancel button is clicked.      |
| `ionChange` | Emitted when the value has changed.             |
| `ionClear`  | Emitted when the clear input button is clicked. |
| `ionFocus`  | Emitted when the input has focus.               |
| `ionInput`  | Emitted when a keyboard input occurred.         |

## Methods

### getInputElement

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Returns the native `<input>` element used under the hood. |
| **Signature**   | `getInputElement() => Promise<HTMLInputElement>`          |

### setFocus

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | Sets focus on the specified `ion-searchbar`. Use this method instead of the global<br />`input.focus()`. |
| **Signature**   | `setFocus() => Promise<void>`                                                                            |

## CSS Custom Properties

| Name                        | Description                              |
| --------------------------- | ---------------------------------------- |
| `--background`              | Background of the searchbar input        |
| `--border-radius`           | Border radius of the searchbar input     |
| `--box-shadow`              | Box shadow of the searchbar input        |
| `--cancel-button-color`     | Color of the searchbar cancel button     |
| `--clear-button-color`      | Color of the searchbar clear button      |
| `--color`                   | Color of the searchbar text              |
| `--icon-color`              | Color of the searchbar icon              |
| `--placeholder-color`       | Color of the searchbar placeholder       |
| `--placeholder-font-style`  | Font style of the searchbar placeholder  |
| `--placeholder-font-weight` | Font weight of the searchbar placeholder |
| `--placeholder-opacity`     | Opacity of the searchbar placeholder     |
