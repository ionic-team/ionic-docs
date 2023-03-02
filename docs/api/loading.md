---
title: "ion-loading"
---
import Props from '@ionic-internal/component-api/v7/loading/props.md';
import Events from '@ionic-internal/component-api/v7/loading/events.md';
import Methods from '@ionic-internal/component-api/v7/loading/methods.md';
import Parts from '@ionic-internal/component-api/v7/loading/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/loading/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/loading/slots.md';

<head>
  <title>Loading | Application Loading Indicator Overlay | ion-loading</title>
  <meta name="description" content="The ion-loading overlay indicates activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.

## Basic Usage

Once presented, the loading indicator will display indefinitely by default. Developers can manually dismiss the loading indicator after creation by calling the `dismiss()` method on the component. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.

Alternatively, developers can configure the loading indicator to dismiss automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options.

### Inline (Recommended)

import Inline from '@site/static/usage/v7/loading/inline/index.md';

<Inline />

### Controller

import Controller from '@site/static/usage/v7/loading/controller/index.md';

<Controller />

## Customization

### Spinners

The spinner that is used can be customized using the `spinner` property. See the [spinner property documentation](#spinner) for a full list of options.

import Spinners from '@site/static/usage/v7/loading/spinners/index.md';

<Spinners />

### Theming

Loading uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class and using that to add custom styles to the host and inner elements.

import Theming from '@site/static/usage/v7/loading/theming/index.md';

<Theming />

:::note
 `ion-loading` is presented at the root of your application, so we recommend placing any `ion-loading` styles in a global stylesheet.
:::

## Accessibility
  
Ionic automatically sets Loading's `role` to [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role).

If the `message` property is defined for Loading, then the `aria-labelledby` attribute will be automatically set to the message element's ID. Otherwise, `aria-labelledby` will not be set, and developers must provide an `aria-label` using the `htmlAttributes` property.
  
All ARIA attributes can be manually overwritten by defining custom values in the `htmlAttributes` property of Loading.

## Interfaces

### LoadingOptions

```typescript
interface LoadingOptions {
  spinner?: SpinnerTypes | null;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  showBackdrop?: boolean;
  duration?: number;
  translucent?: boolean;
  animated?: boolean;
  backdropDismiss?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

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
