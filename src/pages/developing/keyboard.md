---
previousText: 'Hardware Back Button'
previousUrl: '/docs/developing/hardware-back-button'
---

# Keyboard

Customizing and accounting for the presence of an on-screen keyboard are two common roadblocks developers face when building mobile apps and PWAs. This guide will provide an introduction to the various tools available for managing the on-screen keyboard in your application.

## Working with Forms

Keyboards and forms in single page applications present a unique challenge given how each platform tries to automatically resize webviews or scroll inputs into view. The biggest challenge is ensuring that an input is not covered by the keyboard when it is focused. Ionic Framework provides a few utilities that attempt to bridge the gap between the browser's default behavior and what is typically expected by users in mobile applications.

### iOS WebView Resizing

In Capacitor and Cordova applications, the default iOS webview behavior is to resize the webview when the on-screen keyboard is presented. When the keyboard is dismissed, the webview will then resize back to its full height. As a result, you may notice a flash of black or white where the keyboard used to be. This is empty space, and the webview will quickly resize to take up this space. 

This flash may be undesirable to some developers. To avoid this, developers can change the resize mode for the Keyboard plugin in either Capacitor or Cordova. For example, developers may wish to disable all webview resizing by modifying their `capacitor.config.json` file:

```json
{
  "plugins": {
    "Keyboard": {
      "resize": "none"
    }
  }
}
```

> See [Capacitor Keyboard Configuration](https://capacitorjs.com/docs/apis/keyboard#keyboard-configuration-ios-only) for a full list of options. 

There are still a few issues that exist when it comes to ensuring an input is not covered by the keyboard. This is where the [Scroll Assist](#scroll-assist) and [Scroll Padding](#scroll-padding) utilities can help.

### Scroll Assist

When an input is focused in web content on iOS, the browser will attempt to scroll the input into focus so it is not covered by the keyboard. Unfortunately, this scrolling is done on the `body` which results in your `ion-header` being pushed off screen. Ionic Framework suppresses this behavior and scrolls the input into focus by scrolling on `ion-content` through the Scroll Assist utility.

The general flow of Scroll Assist is to determine how much we need to scroll by, suppress the browser's default scrolling behavior, and then scroll the input into view. However, there are a few points to be aware of. These are not bugs, but rather limitations in handling inputs in webviews:

1. When running your app in a browser or as a PWA on older versions of iOS, the [Keyboard Lifecycle Events](#keyboard-lifecycle-events) may not be supported. As a result, the amount Scroll Assist scrolls by may be more than necessary as it can only estimate the keyboard height. Additionally, there may be a delay before Scroll Assist scrolls the input into view as it does not know exactly when the keyboard opens. This does not impact Capacitor or Cordova applications.

2. When focusing an input that is lower on the screen, you may notice a slight delay before Scroll Assist scrolls the input into view as compared to an input that is higher on the screen. For these inputs, the amount Scroll Assist needs to scroll by is greater than how much we can scroll in the content on focus. As a result, Scroll Assist needs to wait for the keyboard to fully open and for the webview to resize before it has enough scrolling real estate.

3. Additional keyboard accessory bars shown asynchronously can impact when Scroll Assist scrolls to an input. When using an input that has `type="password"` on iOS, the system will show a "Passwords" bar above the keyboard. The problem here is that this bar's height is not included in the initial keyboard open event. When this "Passwords" bar is shown, a second keyboard open event is fired which has the password bar included in the keyboard height. As a result, you may notice a slight delay with Scroll Assist when compared to using an input with `type="text"` because Scroll Assist needs to wait for the second keyboard open event to fire before it scrolls the input into view. 

### Scroll Padding

Unlike in Capacitor and Cordova applications, PWAs and apps running in a browser on iOS do not resize the webview, and the keyboard overlays the webview instead. As a result, no additional scroll height is added to your application content and [Scroll Assist](#scroll-assist) is unable to properly scroll inputs into focus.

To work around this, the Scroll Padding utility will dynamically add `padding-bottom` to the `ion-content` that the focused input is in. This padding is equal to the height of the on-screen keyboard and allows [Scroll Assist](#scroll-assist) to scroll the input into focus as the scrollable height of the content has increased.

> Note: Scroll Padding will have no effect if your inputs are positioned absolutely or fixed as they are removed from the normal flow of the document.

## Customizing Keyboard Layout

Depending on the type of data that is being typed into an input, developers may want to ensure that the appropriate keyboard layout is being presented in order to make that data input easier. Along with setting an input `type`, the web also provides `inputmode` and `enterkeyhint` for some more complex scenarios.

### inputmode

The `inputmode` attribute allows developers to specify what type of data might be entered into an input. This will prompt the browser to show a keyboard that includes buttons relevant to what the user may enter. For example, `inputmode="email"` will display a keyboard with the `@` key as well as other optimizations for entering emails.

Since `inputmode` is a global attribute, it can be used on Ionic components such as `ion-input` and `ion-textarea` in addition to regular input elements.

Inputs that _require_ a certain data type should use the `type` attribute instead. For example, inputs that require an email should use `type="email"` rather than specifying an `inputmode.` This is because the data that will be entered is always going to be in the form of an email. On the other hand, if the input accepts an email or a username, using `inputmode=”email”` is appropriate because the data being entered is not always going to be an email address.

For a list of accepted values, see the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode Documentation</a>.

#### Usage
<docs-tabs>
<docs-tab tab="Javascript">

```html
<ion-item>
  <ion-label>Username or Email</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Enter a number</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</docs-tab>
<docs-tab tab="Angular">

```html
<ion-item>
  <ion-label>Username or Email</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Enter a number</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</docs-tab>
<docs-tab tab="React">

```html
<IonItem>
  <IonLabel>Username or Email</IonLabel>
  <IonInput inputmode="email"></IonInput>
</IonItem>

<IonItem>
  <IonLabel>Enter a number</IonLabel>
  <IonTextarea inputmode="numeric"></IonTextarea>
</IonItem>
```
</docs-tab>
<docs-tab tab="Vue">

```html
<ion-item>
  <ion-label>Username or Email</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Enter a number</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</docs-tab>
</docs-tabs>

<docs-codepen user="ionic" slug="abvJVVv" height="400"></docs-codepen>

> The `inputmode` attribute is supported on devices running Chrome 66+ and iOS Safari 12.2+: https://caniuse.com/#search=inputmode

### enterkeyhint

The `enterkeyhint` attribute allows developers to specify what type of action label or icon should be shown for the "Enter" key. Using `enterkeyhint` lets the user know what will happen when they tap the “Enter” key. The value that should be specified here depends on the context of what the user is doing. For example, if the user is typing into a searchbox, developers should ensure that the input has `enterkeyhint="search"`.

Since `enterkeyhint` is a global attribute, it can be used on Ionic components such as `ion-input` and `ion-textarea` in addition to regular input elements.

For a list of accepted values, see the <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint Standard</a>.

#### Usage
<docs-tabs>
<docs-tab tab="Javascript">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</docs-tab>
<docs-tab tab="Angular">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</docs-tab>
<docs-tab tab="React">

```html
<IonItem>
  <IonLabel>Enter search query</IonLabel>
  <IonInput enterkeyhint="search" type="search"></IonInput>
</IonItem>
```
</docs-tab>
<docs-tab tab="Vue">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</docs-tab>
</docs-tabs>

<docs-codepen user="ionic" slug="GRpWyRB" height="350"></docs-codepen>

> The `enterkeyhint` attribute is supported on devices running Chrome 77+ and iOS Safari 13.4+.

## Dark Mode

By default the keyboard theme is determined by the OS. For example, if dark mode is enabled on iOS, the keyboard in your app will appear with a dark theme even if your application does not have a dark theme in its CSS. 

When running an app in a mobile web browser or as a PWA there is no way to force the keyboard to appear with a certain theme.

When running an app in Capacitor or Cordova, it is possible to force the keyboard to appear with a certain theme. For more information regarding this configuration, see the <a href="https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a>.


## Hiding the Accessory Bar

When running any kind of web based application, iOS will show an accessory bar above the keyboard. This allows users to move to the next or previous inputs as well as close the keyboard.

When running an app in a mobile web browser or as a PWA there is no way to hide the accessory bar.

When running an app in Capacitor or Cordova, it is possible to hide the accessory bar. For more information regarding this configuration, see the <a href="https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a>.


## Keyboard Lifecycle Events

Detecting the presence of an on-screen keyboard is useful for adjusting the positioning of an input that would otherwise be hidden by the keyboard. For Capacitor and Cordova apps, developers typically rely on native keyboard plugins to listen for the keyboard lifecycle events. For apps running in a mobile browser or as a PWA, developers can use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API" rel="noreferrer" target="_blank">Visual Viewport API</a> where supported. Ionic Framework wraps both of these approaches and emits `ionKeyboardDidShow` and `ionKeyboardDidHide` events on the `window`. The event payload for `ionKeyboardDidShow` contains an approximation of the keyboard height in pixels.

### Usage
<docs-tabs>
<docs-tab tab="Javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', ev => {
  const { keyboardHeight } = ev;
  // Do something with the keyboard height such as translating an input above the keyboard.
});

window.addEventListener('ionKeyboardDidHide', () => {
  // Move input back to original location
});
```
</docs-tab>
<docs-tab tab="Angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(ev => {
    const { keyboardHeight } = ev;
    // Do something with the keyboard height such as translating an input above the keyboard.
  });
  
  this.platform.keyboardDidHide.subscribe(() => {
    // Move input back to original location
  });
}
```
</docs-tab>
<docs-tab tab="React">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// Do something with the keyboard height such as translating an input above the keyboard
```
</docs-tab>
<docs-tab tab="Vue">

```typescript
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);
});


```
</docs-tab>
</docs-tabs>

> For apps running in a mobile web browser or as a PWA, Keyboard Lifecycle Events are only supported on Chrome 62+ and iOS Safari 13.0+.
