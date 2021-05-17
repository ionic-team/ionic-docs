---
previousText: 'Boutons de Retour Matériel'
previousUrl: '/docs/developing/hardware-back-button'
---

# Clavier

La personnalisation et la prise en compte de la présence d'un clavier à l'écran sont deux obstacles courants auxquels les développeurs sont confrontés lorsqu'ils créent des applications mobiles et des PWA. Ce guide présente les différents outils disponibles pour gérer le clavier à l'écran dans votre application.

## inputmode

L'attribut `inputmode` permet aux développeurs de préciser quel type de données peut être saisi dans une entrée. Cela incitera le navigateur à afficher un clavier comprenant des boutons correspondant à ce que l'utilisateur peut saisir. Par exemple, `inputmode="email"` affichera un clavier avec la touche `@` ainsi que d'autres optimisations pour la saisie des emails.

Comme `inputmode` est un attribut global, il peut être utilisé sur des composants Ionic tels que `ion-input` et `ion-textarea` en plus des éléments de saisie ordinaires.

Les entrées qui _exigent_ un certain type de données doivent utiliser l'attribut `type` à la place. Par exemple, les entrées qui nécessitent un email doivent utiliser `type="email"` plutôt que de spécifier un `inputmode.` Ceci parce que les données qui seront entrées seront toujours sous la forme d'un email. En revanche, si la saisie accepte un email ou un nom d'utilisateur, l'utilisation de `inputmode="email"` est appropriée car les données saisies ne seront pas toujours une adresse email.

Pour une liste des valeurs acceptées, voir le <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode Documentation</a>.

### Utilisation
<docs-tabs> <docs-tab tab="Javascript">

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
</docs-tab> <docs-tab tab="Angular">

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
</docs-tab> <docs-tab tab="React">

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
</docs-tab> <docs-tab tab="Vue">

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
</docs-tab> </docs-tabs>

<docs-codepen user="ionic" slug="abvJVVv" height="400"></docs-codepen>

> L'attribut `inputmode` est pris en charge sur les appareils utilisant Chrome 66+ et iOS Safari 12.2+ : https://caniuse.com/#search=inputmode.

## enterkeyhint

L'attribut `enterkeyhint` permet aux développeurs de spécifier quel type d'étiquette ou d'icône d'action doit être affiché pour la touche "Entrée". L'utilisation du `enterkeyhint` permet à l'utilisateur de savoir ce qui se passera lorsqu'il appuiera sur la touche "Entrée". La valeur qui doit être spécifiée ici dépend du contexte de ce que fait l'utilisateur. Par exemple, si l'utilisateur tape dans une boîte de recherche, les développeurs doivent s'assurer que l'entrée a `enterkeyhint="search"`.

Comme `enterkeyhint` est un attribut global, il peut être utilisé sur des composants Ionic tels que `ion-input` et `ion-textarea` en plus des éléments de saisie ordinaires.

Pour une liste des valeurs acceptées, voir la norme <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint Standard</a>.

### Utilisation
<docs-tabs> <docs-tab tab="Javascript">

```html
<ion-item>
  <ion-label>Entrez la requête de recherche</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</docs-tab> <docs-tab tab="Angular">

```html
<ion-item>
  <ion-label>Entrez la requête de recherche</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</docs-tab> <docs-tab tab="React">

```html
<IonItem>
  <IonLabel>Entrez la requête de recherche</IonLabel>
  <IonInput enterkeyhint="search" type="search"></IonInput>
</IonItem>
```
</docs-tab> <docs-tab tab="Vue">

```html
<ion-item>
  <ion-label>Entrez la requête de recherche</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</docs-tab> </docs-tabs>

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
<docs-tabs> <docs-tab tab="Javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', ev => {
  const { keyboardHeight } = ev;
  // Do something with the keyboard height such as translating an input above the keyboard.
});

window.addEventListener('ionKeyboardDidHide', () => {
  // Move input back to original location
});
```
</docs-tab> <docs-tab tab="Angular">

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
</docs-tab> <docs-tab tab="React">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// Do something with the keyboard height such as translating an input above the keyboard
```
</docs-tab> <docs-tab tab="Vue">

```typescript
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);
});


```
</docs-tab> </docs-tabs>

> For apps running in a mobile web browser or as a PWA, Keyboard Lifecycle Events are only supported on Chrome 62+ and iOS Safari 13.0+.
