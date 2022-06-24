---
title: "ion-loading"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/loading/props.md';
import Events from '@site/static/auto-generated/loading/events.md';
import Methods from '@site/static/auto-generated/loading/methods.md';
import Parts from '@site/static/auto-generated/loading/parts.md';
import CustomProps from '@site/static/auto-generated/loading/custom-props.md';
import Slots from '@site/static/auto-generated/loading/slots.md';

<head>
  <title>Loading | Application Loading Indicator Overlay | ion-loading</title>
  <meta name="description" content="The ion-loading overlay indicates activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="scoped" />


An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.

## Dismissing

The loading indicator can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options. To dismiss the loading indicator after creation, call the `dismiss()` method on the loading instance. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.

## Customization

Loading uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector.

We recommend passing a custom class to `cssClass` in the `create` method and using that to add custom styles to the host and inner elements. This property can also accept multiple classes separated by spaces. View the [Usage](#usage) section for an example of how to pass a class using `cssClass`.

```css
/* DOES NOT WORK - not specific enough */
ion-loading {
  color: green;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class {
  color: green;
}
```

Any of the defined [CSS Custom Properties](#css-custom-properties) can be used to style the Loading without needing to target individual elements:

```css
.my-custom-class {
  --background: #222;
  --spinner-color: #fff;

  color: #fff;
}
```

:::note
 If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.
:::


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


<Props />
<Events />
<Methods />
<Parts />
<CustomProps />
<Slots />