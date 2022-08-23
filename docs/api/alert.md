---
title: "ion-alert"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/alert/props.md';
import Events from '@site/static/auto-generated/alert/events.md';
import Methods from '@site/static/auto-generated/alert/methods.md';
import Parts from '@site/static/auto-generated/alert/parts.md';
import CustomProps from '@site/static/auto-generated/alert/custom-props.md';
import Slots from '@site/static/auto-generated/alert/slots.md';

<head>
  <title>ion-alert: Ionic API Alert Buttons with Custom Message Prompts</title>
  <meta name="description" content="ion-alert dialog presents or collects information using inputs. Custom alert button messages appear above the app's content and must be manually dismissed." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />



An Alert is a dialog that presents users with information or collects information from the user using inputs. An alert appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. It can also optionally have a `header`, `subHeader` and `message`.

## Presenting

### Controller

import Controller from '@site/static/usage/alert/presenting/controller/index.md';

<Controller />

### Inline

When using Ionic with React or Vue, `ion-alert` can also be placed directly in the template through use of the `isOpen` property. Note that `isOpen` must be set to `false` manually when the alert is dismissed; it will not be updated automatically.

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

function Example() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowAlert(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={['OK']}
      />
    </IonContent>
  );
}
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-content>
    <ion-button @click="setOpen(true)">Show Alert</ion-button>
    <ion-alert
      :is-open="isOpenRef"
      header="Alert"
      sub-header="Important message"
      message="This is an alert!"
      :buttons="['OK']"
      @didDismiss="setOpen(false)"
    ></ion-alert>
  </ion-content>
</template>

<script lang="ts">
import { IonAlert, IonButton, IonContent } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonAlert, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    
    return { isOpenRef, setOpen }
  }
});
</script>
```

</TabItem>
</Tabs>

## Buttons

In the array of `buttons`, each button includes properties for its `text`, and optionally a `handler`. If a handler returns `false` then the alert will not automatically be dismissed when the button is clicked. All buttons will show up in the order they have been added to the `buttons` array from left to right. Note: The right most button (the last one in the array) is the main button.

Optionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.

import Buttons from '@site/static/usage/alert/buttons/index.md';

<Buttons />


## Inputs

Alerts can also include several different inputs whose data can be passed back to the app. Inputs can be used as a simple way to prompt users for information. Radios, checkboxes and text inputs are all accepted, but they cannot be mixed. For example, an alert could have all radio button inputs, or all checkbox inputs, but the same alert cannot mix radio and checkbox inputs. Do note however, different types of "text" inputs can be mixed, such as `url`, `email`, `text`, `textarea` etc. If you require a complex form UI which doesn't fit within the guidelines of an alert then we recommend building the form within a modal instead.

### Text Inputs Example

import TextInputs from '@site/static/usage/alert/inputs/text-inputs/index.md';

<TextInputs />

### Radio Example

import Radios from '@site/static/usage/alert/inputs/radios/index.md';

<Radios />

## Customization

Alert uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces.

```css
/* DOES NOT WORK - not specific enough */
.alert-wrapper {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Alert without needing to target individual elements:

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

import Customization from '@site/static/usage/alert/customization/index.md';

<Customization />

:::note
 If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file.
:::

## Accessibility

Ionic automatically sets the Alert's `role` to either [`alertdialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role) if there are any inputs or buttons included, or [`alert`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) if there are none.

If the `header` property is defined for the Alert, the `aria-labelledby` attribute will be automatically set to the header's ID. The `subHeader` element will be used as a fallback if `header` is not defined. Similarly, the `aria-describedby` attribute will be automatically set to the ID of the `message` element if that property is defined.

It is strongly recommended that your Alert have a `message`, as well as either a `header` or `subHeader`, in order to align with the ARIA spec. If you choose not to include a `header` or `subHeader`, an alternative is to provide a descriptive `aria-label` using the `htmlAttributes` property.

All ARIA attributes can be manually overwritten by defining custom values in the `htmlAttributes` property of the Alert.


## Interfaces

### AlertButton

```typescript
interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | {[key: string]: any};
}
```


### AlertInput

```typescript
interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: { [key: string]: any };
  tabindex?: number;
}
```


### AlertOptions

```typescript
interface AlertOptions {
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  inputs?: AlertInput[];
  buttons?: (AlertButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  htmlAttributes?: { [key: string]: any };

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />