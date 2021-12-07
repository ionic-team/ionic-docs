---
sidebar_label: Overlays
---

# Using Overlay Components in React

For Ionic React, there are two techniques you can use to display overlay components like modals, alerts, action sheets, etc. In this guide, we will go over both of them.

## Overlay Hooks

Starting in Ionic React 5.6, we introduced new React hooks you can use to control displaying and dismissing overlays. These hooks provide a programmatic way of controlling the overlays, as well as a way to use overlays outside of your Ionic Page without the need of a state management system.

To use one of the overlay hooks, you import the hook for the overlay you want to use from `@ionic/react`. For example, if we want to use the Alert overlay, we import `useIonAlert`:

```tsx
import { useIonAlert } from '@ionic/react';
```

The hooks return an array, where the first item in the array is the method to present the hook, and the second is the method to dismiss the hook:

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
Overlays often dismiss themselves when the user is done interacting with them, so you might not need to use dismiss/hide method.
:::

To display the overlay, you use the present method, which we destructured to the name `showAlert`. The method takes in a set of parameters that vary depending on each overlay, but generally, they can either take in a simple set of common parameters or an object to specify additional options.

```tsx
showAlert('Hello!', [{ text: 'Ok' }]);
```

For `useIonAlert`, the first parameter is the message to display, and the second is an array of `AlertButtons` to customize the buttons the alert will show.

Alternatively, you can pass in an AlertOptions config object to provide additional parameters, such as a CSS class to add to the markup, a header for the alert, and a callback that gets called when the alert is dismissed:

```tsx
showAlert({
  cssClass: 'my-css',
  header: 'Alert',
  message: 'Hello!',
  buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],
  onDidDismiss: (e) => console.log('alert dismiss'),
});
```

Overlay hooks that display additional custom components as part of their markup, such as [modals](https://ionicframework.com/docs/api/modal) and [popovers](https://ionicframework.com/docs/api/popover), take in a couple of additional parameters when initializing their hooks. The first parameter is the component you want your overlay to display, and the second is an object of additional props you want to pass into the component when it gets constructed:

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>Hello {name}.</div>, {
  name: 'Dave',
});
```

## Overlay Components

Overlays can also be displayed by using components from `@ionic/react`. The components take a `isOpen` prop that you provide to control if the overlay is currently being displayed or not. When `isOpen` switches from true to false (and vise versa), Ionic will open/close the overlay with the appropriate animation. You can also supply any other additional config options as props to the overlay:

```tsx
<IonAlert isOpen={showAlert} message="Hello!" buttons={[{ text: 'Ok' }]} onDidDismiss={() => setShowAlert(false)} />
```

Above, the `showAlert` boolean is a piece of state provided from your application.

When the overlay is dismissed, it is important to tie into the `onDidDismiss` callback and set your state variable to indicate that the overlay is no longer presenting. Ionic React looks for changes to the `isOpen` prop to determine if the overlay should be displayed or not.

For overlays that display custom components, such as [modals](https://ionicframework.com/docs/api/modal) and [popovers](https://ionicframework.com/docs/api/popover), you provide the component as a child to the overlay component:

```tsx
<IonModal isOpen={showModal}>
  <div>Hello!</div>
</IonModal>
```

:::note
The Overlay Components are still a valid way of displaying overlays and are in no way a deprecated method. Use whichever method best fits your application.
:::

## Docs for Overlays in Ionic

For full docs and to see usage examples for both the hook and component approach, visit the docs page for each of the overlays in Ionic:

- [Action Sheet](https://ionicframework.com/docs/api/action-sheet)
- [Alert](https://ionicframework.com/docs/api/modal#usage)
- [Loading](https://ionicframework.com/docs/api/loading)
- [Modal](https://ionicframework.com/docs/api/modal)
- [Picker](https://ionicframework.com/docs/api/picker)
- [Popover](https://ionicframework.com/docs/api/popover)
- [Toast](https://ionicframework.com/docs/api/toast)
