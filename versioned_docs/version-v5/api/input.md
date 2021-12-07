---
sidebar_label: 'ion-input'
demoUrl: '/docs/demos/api/input/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/input/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-input

The input component is a wrapper to the HTML input element with custom styling and additional functionality. It accepts most of the same properties as the HTML input, but works great on desktop devices and integrates with the keyboard on mobile devices.

It is meant for text `type` inputs only, such as `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, and `"url"`. It supports all standard text input events including keyup, keydown, keypress, and more.

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clearInput value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- Default Input -->
<ion-input></ion-input>

<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clear-input value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>

<!-- Inputs with labels -->
<ion-item>
  <ion-label>Default Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked Label</ion-label>
  <ion-input></ion-input>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
} from '@ionic/react';

export const InputExamples: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonInput Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Default Input with Placeholder</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={(e) => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Input with clear button when there is a value</IonItemDivider>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Enter Input"
              onIonChange={(e) => setText(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>

          <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
            <IonInput
              type="number"
              value={number}
              placeholder="Enter Number"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

          <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem>

          <IonItemDivider>Inputs with labels</IonItemDivider>

          <IonItem>
            <IonLabel>Default Label</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Floating Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Fixed Label</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Stacked Label</IonLabel>
            <IonInput value={text}> </IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-example',
  styleUrl: 'input-example.css',
})
export class InputExample {
  render() {
    return [
      // Default Input
      <ion-input></ion-input>,

      // Input with value
      <ion-input value="custom"></ion-input>,

      // Input with placeholder
      <ion-input placeholder="Enter Input"></ion-input>,

      // Input with clear button when there is a value
      <ion-input clearInput value="clear me"></ion-input>,

      // Number type input
      <ion-input type="number" value="333"></ion-input>,

      // Disabled input
      <ion-input value="Disabled" disabled></ion-input>,

      // Readonly input
      <ion-input value="Readonly" readonly></ion-input>,

      // Inputs with labels
      <ion-item>
        <ion-label>Default Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">Floating Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">Fixed Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">Stacked Label</ion-label>
        <ion-input></ion-input>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- Default Input -->
  <ion-input></ion-input>

  <!-- Input with value -->
  <ion-input value="custom"></ion-input>

  <!-- Input with placeholder -->
  <ion-input placeholder="Enter Input"></ion-input>

  <!-- Input with clear button when there is a value -->
  <ion-input clear-input value="clear me"></ion-input>

  <!-- Number type input -->
  <ion-input type="number" value="333"></ion-input>

  <!-- Disabled input -->
  <ion-input value="Disabled" disabled></ion-input>

  <!-- Readonly input -->
  <ion-input value="Readonly" readonly></ion-input>

  <!-- Inputs with labels -->
  <ion-item>
    <ion-label>Default Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed Label</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked Label</ion-label>
    <ion-input></ion-input>
  </ion-item>
</template>

<script>
  import { IonLabel, IonInput, IonItem } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonInput, IonItem },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### accept

|                 |                                                                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers. |
| **Attribute**   | `accept`                                                                                                                                                                                                                                |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                   |
| **Default**     | `undefined`                                                                                                                                                                                                                             |

### autocapitalize

|                 |                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.<br />Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute**   | `autocapitalize`                                                                                                                                                                                               |
| **Type**        | `string`                                                                                                                                                                                                       |
| **Default**     | `'off'`                                                                                                                                                                                                        |

### autocomplete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Indicates whether the value of the control can be automatically completed by the browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Attribute**   | `autocomplete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"on" \| "off" \| "name" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "email" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "url" \| "photo"` |
| **Default**     | `'off'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### autocorrect

|                 |                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------- |
| **Description** | Whether auto correction should be enabled when the user is entering/editing the text value. |
| **Attribute**   | `autocorrect`                                                                               |
| **Type**        | `"off" \| "on"`                                                                             |
| **Default**     | `'off'`                                                                                     |

### autofocus

|                 |                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| **Description** | This Boolean attribute lets you specify that a form control should have input focus when the page loads. |
| **Attribute**   | `autofocus`                                                                                              |
| **Type**        | `boolean`                                                                                                |
| **Default**     | `false`                                                                                                  |

### clearInput

|                 |                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input. |
| **Attribute**   | `clear-input`                                                                                         |
| **Type**        | `boolean`                                                                                             |
| **Default**     | `false`                                                                                               |

### clearOnEdit

|                 |                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types. |
| **Attribute**   | `clear-on-edit`                                                                                                                          |
| **Type**        | `boolean \| undefined`                                                                                                                   |
| **Default**     | `undefined`                                                                                                                              |

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
| **Default**     | `0`                                                                                                                                                                     |

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

### max

|                 |                                                                                   |
| --------------- | --------------------------------------------------------------------------------- |
| **Description** | The maximum value, which must not be less than its minimum (min attribute) value. |
| **Attribute**   | `max`                                                                             |
| **Type**        | `string \| undefined`                                                             |
| **Default**     | `undefined`                                                                       |

### maxlength

|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter. |
| **Attribute**   | `maxlength`                                                                                                                                                                      |
| **Type**        | `number \| undefined`                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                      |

### min

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | The minimum value, which must not be greater than its maximum (max attribute) value. |
| **Attribute**   | `min`                                                                                |
| **Type**        | `string \| undefined`                                                                |
| **Default**     | `undefined`                                                                          |

### minlength

|                 |                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter. |
| **Attribute**   | `minlength`                                                                                                                                                                      |
| **Type**        | `number \| undefined`                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                      |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### multiple

|                 |                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored. |
| **Attribute**   | `multiple`                                                                                                                                                  |
| **Type**        | `boolean \| undefined`                                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                                 |

### name

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | The name of the control, which is submitted with the form data. |
| **Attribute**   | `name`                                                          |
| **Type**        | `string`                                                        |
| **Default**     | `this.inputId`                                                  |

### pattern

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, `"date"`, or `"password"`, otherwise it is ignored. When the type attribute is `"date"`, `pattern` will only be used in browsers that do not support the `"date"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information. |
| **Attribute**   | `pattern`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### placeholder

|                 |                                                             |
| --------------- | ----------------------------------------------------------- |
| **Description** | Instructional text that shows before the input has a value. |
| **Attribute**   | `placeholder`                                               |
| **Type**        | `null \| string \| undefined`                               |
| **Default**     | `undefined`                                                 |

### readonly

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | If `true`, the user cannot modify the value. |
| **Attribute**   | `readonly`                                   |
| **Type**        | `boolean`                                    |
| **Default**     | `false`                                      |

### required

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | If `true`, the user must fill in a value before submitting a form. |
| **Attribute**   | `required`                                                         |
| **Type**        | `boolean`                                                          |
| **Default**     | `false`                                                            |

### size

|                 |                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored. |
| **Attribute**   | `size`                                                                                                                                                                                                                                                                                                                                         |
| **Type**        | `number \| undefined`                                                                                                                                                                                                                                                                                                                          |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                    |

### spellcheck

|                 |                                                                    |
| --------------- | ------------------------------------------------------------------ |
| **Description** | If `true`, the element will have its spelling and grammar checked. |
| **Attribute**   | `spellcheck`                                                       |
| **Type**        | `boolean`                                                          |
| **Default**     | `false`                                                            |

### step

|                 |                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Works with the min and max attributes to limit the increments at which a value can be set.<br />Possible values are: `"any"` or a positive floating point number. |
| **Attribute**   | `step`                                                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                       |

### type

|                 |                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The type of control to display. The default type is text.                                                                                |
| **Attribute**   | `type`                                                                                                                                   |
| **Type**        | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week"` |
| **Default**     | `'text'`                                                                                                                                 |

### value

|                 |                                         |
| --------------- | --------------------------------------- |
| **Description** | The value of the input.                 |
| **Attribute**   | `value`                                 |
| **Type**        | `null \| number \| string \| undefined` |
| **Default**     | `''`                                    |

## Events

| Name        | Description                             |
| ----------- | --------------------------------------- |
| `ionBlur`   | Emitted when the input loses focus.     |
| `ionChange` | Emitted when the value has changed.     |
| `ionFocus`  | Emitted when the input has focus.       |
| `ionInput`  | Emitted when a keyboard input occurred. |

## Methods

### getInputElement

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | Returns the native `<input>` element used under the hood. |
| **Signature**   | `getInputElement() => Promise<HTMLInputElement>`          |

### setFocus

|                 |                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Description** | Sets focus on the native `input` in `ion-input`. Use this method instead of the global<br />`input.focus()`. |
| **Signature**   | `setFocus() => Promise<void>`                                                                                |

## CSS Custom Properties

| Name                        | Description                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `--background`              | Background of the input                                                                                  |
| `--color`                   | Color of the input text                                                                                  |
| `--padding-bottom`          | Bottom padding of the input                                                                              |
| `--padding-end`             | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the input |
| `--padding-start`           | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the input |
| `--padding-top`             | Top padding of the input                                                                                 |
| `--placeholder-color`       | Color of the input placeholder text                                                                      |
| `--placeholder-font-style`  | Font style of the input placeholder text                                                                 |
| `--placeholder-font-weight` | Font weight of the input placeholder text                                                                |
| `--placeholder-opacity`     | Opacity of the input placeholder text                                                                    |
