---
previousText: 'Conseils pour le Développement'
previousUrl: '/docs/developing/tips'
nextText: 'Clavier'
nextUrl: '/docs/developing/keyboard'
---

# Bouton arrière matériel

Le bouton retour matériel se trouve sur la plupart des appareils Android. Dans les applications natives, il peut être utilisé pour fermer des modales, revenir à la vue précédente, quitter une application, etc. Par défaut dans Ionic, lorsque l'on appuie sur le bouton retour, la vue actuelle est retirée de la pile de navigation et la vue précédente est affichée. Si aucune vue précédente n'existe dans la pile de navigation, rien ne se passe. Ce guide montre comment personnaliser le comportement du bouton retour matériel.

> Le bouton arrière matériel fait référence au bouton arrière physique d'un appareil Android et ne doit pas être confondu avec le bouton arrière du navigateur ou `ion-back-button`. Les informations contenues dans ce guide s'appliquent uniquement aux appareils Android.

## Bouton arrière matériel dans Capacitor et Cordova

Lorsqu'il est exécuté dans une application Capacitor ou Cordova, Ionic Framework émet un événement `ionBackButton` lorsqu'un utilisateur appuie sur le bouton arrière du matériel.

Lorsque vous écoutez l'événement `ionBackButton`, vous pouvez enregistrer un gestionnaire à déclencher. Ce gestionnaire peut effectuer des actions telles que quitter l'application ou ouvrir une boîte de dialogue de confirmation. Une priorité doit être attribuée à chaque gestionnaire. Par défaut, un seul gestionnaire est déclenché par pression sur le bouton de retour du matériel. La valeur de la priorité est utilisée pour déterminer quel callback doit être appelé. C'est utile parce que si vous avez une modale ouverte, vous ne voudriez probablement pas que la modale se ferme _et_ que l'application navigue en arrière lorsque vous appuyez sur le bouton arrière du matériel. Le fait de n'exécuter qu'un seul gestionnaire à la fois permet de fermer la modale mais nécessite toujours une nouvelle pression sur le bouton de retour du matériel pour naviguer en arrière.

Dans certaines situations, vous pouvez souhaiter que plusieurs gestionnaires soient activés. Chaque rappel de gestionnaire passe en paramètre une fonction qui peut être utilisée pour indiquer au framework d'appeler le gestionnaire suivant.

## Bouton de retour matériel dans un navigateur

Lorsque vous exécutez votre application dans un navigateur mobile ou en tant que PWA, la personnalisation du bouton retour matériel sera limitée. En effet, Capacitor et Cordova exposent des fonctionnalités supplémentaires qui ne sont pas exposées dans un navigateur web normal. Par exemple, la fermeture des superpositions et des menus à l'aide du bouton arrière du matériel est une fonctionnalité qui n'est actuellement pas prise en charge lorsque vous exécutez votre application dans un navigateur mobile. Il s'agit de limitations connues et il n'existe pas actuellement de solutions simples.

Pour une prise en charge complète du bouton arrière matériel, nous vous recommandons d'utiliser Capacitor ou Cordova.

> L'événement `ionBackButton` ne sera pas émis lors de l'exécution d'une application dans un navigateur ou en tant que PWA.

## Usage de base

<docs-tabs> <docs-tab tab="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});

```
</docs-tab> <docs-tab tab="angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
}

```
</docs-tab> <docs-tab tab="react">

```typescript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});
```
</docs-tab> <docs-tab tab="vue">

```typescript
import { useBackButton } from '@ionic/vue';

...

export default {
  setup() {
    useBackButton(10, () => {
      console.log('Handler was called!');
    });
  }
}
```
</docs-tab> </docs-tabs>

Dans cet exemple, nous enregistrons un gestionnaire qui sera appelé lorsque le bouton de retour du matériel sera pressé. Nous avons fixé la priorité à 10, et nous n'avons pas indiqué au framework que nous voulons que le gestionnaire suivant soit appelé. Par conséquent, tous les gestionnaires dont la priorité est inférieure à 10 ne seront pas appelés. Un gestionnaire dont la priorité est supérieure à 10 sera appelé en premier.

Dans le cas où il existe des gestionnaires ayant la même valeur de priorité, le gestionnaire qui a été enregistré _en dernier_ sera appelé. Voir [Handlers avec les mêmes priorités](#handlers-with-the-same-priorities) pour plus d'informations.

## Calling Multiple Handlers

Each hardware back button callback has a `processNextHandler` parameter. Calling this function allows you to continue calling hardware back button handlers.

<docs-tabs> <docs-tab tab="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});

```
</docs-tab> <docs-tab tab="angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(5, () => {
    console.log('Another handler was called!');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
}

```
</docs-tab> <docs-tab tab="react">

```typescript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});
```
</docs-tab> <docs-tab tab="vue">

```typescript
import { useBackButton } from '@ionic/vue';

...

export default {
  setup() {
    useBackButton(5, () => {
      console.log('Another handler was called!');
    });

    useBackButton(10, (processNextHandler) => {
      console.log('Handler was called!');

      processNextHandler();
    });
  }
}
```
</docs-tab> </docs-tabs>

This example shows how to indicate to Ionic Framework that you want the next handler to be fired. All callbacks are provided with a `processNextHandler` function as a parameter. Calling this will cause the next handler, if any exists, to be fired.

## Handlers with the Same Priorities

Internally, Ionic Framework uses something similar to a priority queue to manage hardware back button handlers. The handler with the largest priority value will be called first. In the event that there are multiple handlers with the same priority value, the _last_ handler of the same priority added to this queue will be the first handler to be called.

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // Handler A
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');

    processNextHandler();
  });

  // Handler B
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');

    processNextHandler();
  });
});
```

In the example above, both handlers A and B have a priority of 10. Since handler B was registered last, Ionic Framework will call handler B before it calls handler A.


## Exiting the App

In some scenarios, it may be desirable to quit the app when pressing the hardware back button. This can be achieved through the use of the `ionBackButton` event combined with methods that Capacitor/Cordova provide.

<docs-tabs> <docs-tab tab="javascript">

```typescript
import { BackButtonEvent } from '@ionic/core';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

...

const routerEl = document.querySelector('ion-router');
document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
  ev.detail.register(-1, () => {
    const path = window.location.pathname;
    if (path === routerEl.root) {
      App.exitApp();
    }
  });
});
```
</docs-tab> <docs-tab tab="angular">

```typescript
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

...

constructor(
  private platform: Platform,
  private routerOutlet: IonRouterOutlet
) {
  this.platform.backButton.subscribeWithPriority(-1, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
}

```
</docs-tab> <docs-tab tab="react">

```typescript
import { useIonRouter } from '@ionic/react';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

...

const ionRouter = useIonRouter();
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(-1, () => {
    if (!ionRouter.canGoBack()) {
      App.exitApp();
    }
  });
});
```
</docs-tab> <docs-tab tab="vue">

```typescript
import { useBackButton, useIonRouter } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
```
</docs-tab> </docs-tabs>

This example shows the application exiting when the user presses the hardware back button and there is nothing left in the navigation stack. It is also possible to display a confirmation dialog before quitting the app.

It is recommended to check whether or not the user is on the root page prior to exiting the application. Developers can use the `canGoBack` method on `IonRouterOutlet` in Ionic Angular and `IonRouter` in Ionic React and Ionic Vue.

## Internal Framework Handlers

The table below lists all of the internal hardware back button event handlers that Ionic Framework uses. The `Propagates` column notes whether or not that particular handler tells Ionic Framework to call the next back button handler.

| Handler    | Priority | Propagates | Description                                                                                                                              |
| ---------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Overlays   | 100      | No         | Applies to overlay components `ion-action-sheet`, `ion-alert`, `ion-loading`, `ion-modal`, `ion-popover`, `ion-picker`, and `ion-toast`. |
| Menu       | 99       | No         | Applies to `ion-menu`.                                                                                                                   |
| Navigation | 0        | Yes        | Applies to routing navigation (i.e. Angular Routing).                                                                                    |
