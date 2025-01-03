---
title: Keyboard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Keyboard Guide: Tools to Manage an On-Screen Mobile App Keyboard</title>
  <meta
    name="description"
    content="Accounting for an on-screen keyboard is a common developer roadblock. This guide introduces the tools available for managing on-screen keyboards in mobile apps."
  />
</head>

Customizing and accounting for the presence of an on-screen keyboard are two common roadblocks developers face when building mobile apps and PWAs. This guide will provide an introduction to the various tools available for managing the on-screen keyboard in your application.

## inputmode

The `inputmode` attribute allows developers to specify what type of data might be entered into an input. This will prompt the browser to show a keyboard that includes buttons relevant to what the user may enter. For example, `inputmode="email"` will display a keyboard with the `@` key as well as other optimizations for entering emails.

Since `inputmode` is a global attribute, it can be used on Ionic components such as `ion-input` and `ion-textarea` in addition to regular input elements.

Inputs that _require_ a certain data type should use the `type` attribute instead. For example, inputs that require an email should use `type="email"` rather than specifying an `inputmode.` This is because the data that will be entered is always going to be in the form of an email. On the other hand, if the input accepts an email or a username, using `inputmode=”email”` is appropriate because the data being entered is not always going to be an email address.

For a list of accepted values, see the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode Documentation</a>.

### Usage

import Inputmode from '@site/static/usage/v7/keyboard/inputmode/index.md';

<Inputmode />

:::note
The `inputmode` attribute is supported on devices running Chrome 66+ and iOS Safari 12.2+: https://caniuse.com/#search=inputmode
:::

## enterkeyhint

The `enterkeyhint` attribute allows developers to specify what type of action label or icon should be shown for the "Enter" key. Using `enterkeyhint` lets the user know what will happen when they tap the “Enter” key. The value that should be specified here depends on the context of what the user is doing. For example, if the user is typing into a searchbox, developers should ensure that the input has `enterkeyhint="search"`.

Since `enterkeyhint` is a global attribute, it can be used on Ionic components such as `ion-input` and `ion-textarea` in addition to regular input elements.

For a list of accepted values, see the <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint Standard</a>.

### Usage

import Enterkeyhint from '@site/static/usage/v7/keyboard/enterkeyhint/index.md';

<Enterkeyhint />

:::note
The `enterkeyhint` attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+.
:::

## Dark Mode

By default the keyboard theme is determined by the OS. For example, if dark mode is enabled on iOS, the keyboard in your app will appear with a dark theme even if your application does not have a dark theme in its CSS.

When running an app in a mobile web browser or as a PWA there is no way to force the keyboard to appear with a certain theme.

When running an app in Capacitor or Cordova, it is possible to force the keyboard to appear with a certain theme. For more information regarding this configuration, see the <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a>.

## Hiding the Accessory Bar

When running any kind of web based application, iOS will show an accessory bar above the keyboard. This allows users to move to the next or previous inputs as well as close the keyboard.

When running an app in a mobile web browser or as a PWA there is no way to hide the accessory bar.

When running an app in Capacitor or Cordova, it is possible to hide the accessory bar. For more information regarding this configuration, see the <a href="https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a>.

## Keyboard Lifecycle Events

Detecting the presence of an on-screen keyboard is useful for adjusting the positioning of an input that would otherwise be hidden by the keyboard. For Capacitor and Cordova apps, developers typically rely on native keyboard plugins to listen for the keyboard lifecycle events. For apps running in a mobile browser or as a PWA, developers can use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API" rel="noreferrer" target="_blank">Visual Viewport API</a> where supported. Ionic Framework wraps both of these approaches and emits `ionKeyboardDidShow` and `ionKeyboardDidHide` events on the `window`. The event payload for `ionKeyboardDidShow` contains an approximation of the keyboard height in pixels.

### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', event => {
  const { keyboardHeight } = event;
  // Do something with the keyboard height such as translating an input above the keyboard.
});

window.addEventListener('ionKeyboardDidHide', () => {
  // Move input back to original location
});
```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(event => {
    const { keyboardHeight } = event;
    // Do something with the keyboard height such as translating an input above the keyboard.
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // Move input back to original location
  });
}
```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Platform } from '@ionic/angular/standalone';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(event => {
    const { keyboardHeight } = event;
    // Do something with the keyboard height such as translating an input above the keyboard.
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // Move input back to original location
  });
}
```
</TabItem>
<TabItem value="react">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// Do something with the keyboard height such as translating an input above the keyboard
```
</TabItem>
<TabItem value="vue">

```tsx
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);
});


```
</TabItem>
</Tabs>
````

:::note
For apps running in a mobile web browser or as a PWA, Keyboard Lifecycle Events are only supported on Chrome 62+ and iOS Safari 13.0+.
:::
