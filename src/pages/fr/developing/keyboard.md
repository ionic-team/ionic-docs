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

> L'attribut `enterkeyhint` est pris en charge sur les appareils utilisant Chrome 77+ et iOS Safari 13.4+.

## Mode sombre

Par défaut, le thème du clavier est déterminé par le système d'exploitation. Par exemple, si le mode sombre est activé sur iOS, le clavier de votre application apparaîtra avec un thème sombre, même si votre application n'a pas de thème sombre dans son CSS.

Lorsqu'une application est exécutée dans un navigateur Web mobile ou en tant que PWA, il n'est pas possible de forcer le clavier à s'afficher avec un certain thème.

Lorsque vous exécutez une application dans Capacitor ou Cordova, il est possible de forcer le clavier à s'afficher avec un certain thème. Pour plus d'informations concernant cette configuration, voir le <a href="https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Documentation du clavier du condensateur</a>.


## Cacher la barre d'accessoires

Lors de l'exécution de tout type d'application web, iOS affiche une barre d'accessoires au-dessus du clavier. Cela permet aux utilisateurs de passer aux entrées suivantes ou précédentes ainsi que de fermer le clavier.

Lorsqu'une application est exécutée dans un navigateur Web mobile ou en tant que PWA, il n'est pas possible de masquer la barre d'accessoires.

Lorsque vous exécutez une application dans Capacitor ou Cordova, il est possible de masquer la barre d'accessoires. Pour plus d'informations concernant cette configuration, voir le <a href="https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Documentation du clavier du condensateur</a>.


## Événements du cycle de vie du clavier

La détection de la présence d'un clavier à l'écran est utile pour ajuster le positionnement d'une entrée qui serait autrement cachée par le clavier. Pour les applications Capacitor et Cordova, les développeurs s'appuient généralement sur des plugins clavier natifs pour écouter les événements du cycle de vie du clavier. Pour les applications fonctionnant dans un navigateur mobile ou en tant que PWA, les développeurs peuvent utiliser l'API <a href="https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API" rel="noreferrer" target="_blank">Visual Viewport API</a> lorsque celle-ci est prise en charge. Ionic Framework enveloppe ces deux approches et émet des événements `ionKeyboardDidShow` et `ionKeyboardDidHide` sur la `window`. La charge utile de l'événement `ionKeyboardDidShow` contient une approximation de la hauteur du clavier en pixels.

### Utilisation
<docs-tabs> <docs-tab tab="Javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', ev => {
  const { keyboardHeight } = ev;
  // Faites quelque chose avec la hauteur du clavier, comme traduire une entrée au-dessus du clavier.
});

window.addEventListener('ionKeyboardDidHide', () => {
  // Remettre l'entrée à l'emplacement d'origine
});
```
</docs-tab> <docs-tab tab="Angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(ev => {
    const { keyboardHeight } = ev;
    // Faites quelque chose avec la hauteur du clavier, comme traduire une entrée au-dessus du clavier.
  });

  this.platform.keyboardDidHide.subscribe(() => {
    // Remettre l'entrée à l'emplacement d'origine
  });
}
```
</docs-tab> <docs-tab tab="React">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// Faire quelque chose avec la hauteur du clavier, par exemple traduire une entrée au-dessus du clavier
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

> Pour les applications exécutées dans un navigateur Web mobile ou en tant que PWA, les événements du cycle de vie du clavier ne sont pris en charge que sur Chrome 62+ et iOS Safari 13.0+.
