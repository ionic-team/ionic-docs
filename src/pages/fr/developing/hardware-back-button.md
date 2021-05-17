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

## Appeler plusieurs gestionnaires

Chaque rappel de bouton retour matériel a un paramètre `processNextHandler`. L'appel de cette fonction vous permet de continuer à appeler les gestionnaires de boutons de retour matériel.

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

Cet exemple montre comment indiquer à Ionic Framework que vous voulez que le prochain gestionnaire soit déclenché. Tous les callbacks sont fournis avec une fonction `processNextHandler` comme paramètre. L'appel de cette fonction entraînera le déclenchement du gestionnaire suivant, s'il existe.

## Gestionnaires avec les mêmes priorités

En interne, Ionic Framework utilise quelque chose de similaire à une file d'attente prioritaire pour gérer les gestionnaires de boutons de retour matériels. Le gestionnaire ayant la plus grande valeur de priorité sera appelé en premier. Dans le cas où il y a plusieurs gestionnaires avec la même valeur de priorité, le _dernier_ gestionnaire de la même priorité ajouté à cette file d'attente sera le premier gestionnaire à être appelé.

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // Gestionnaire A
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');

    processNextHandler();
  });

  // Gestionnaire B
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');

    processNextHandler();
  });
});
```

Dans l'exemple ci-dessus, les gestionnaires A et B ont une priorité de 10. Depuis que le gestionnaire B a été enregistré en dernier, Ionic Framework appellera le gestionnaire B avant qu'il appelle le gestionnaire A.


## Quitter l'application

Dans certains scénarios, il peut être souhaitable de quitter l'application lorsque vous appuyez sur le bouton de retour matériel. Ceci peut être réalisé par l'utilisation de l'événement `ionBackButton` combiné aux méthodes que Capacitor/Cordova fournissent.

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

Cet exemple montre que l'application se termine lorsque l'utilisateur appuie sur le bouton de retour du matériel et qu'il n'y a plus rien dans la pile de navigation. Il est également possible d'afficher un dialogue de confirmation avant de quitter l'application.

Il est recommandé de vérifier si l'utilisateur se trouve ou non sur la page racine avant de quitter l'application. Les développeurs peuvent utiliser la méthode `canGoBack` sur `IonRouterOutlet` dans Ionic Angular et `IonRouter` dans Ionic React et Ionic Vue.

## Gestionnaires internes du framework

Le tableau ci-dessous répertorie tous les gestionnaires d'événements internes du bouton retour du matériel que Ionic Framework utilise. La colonne `Propagates` note si ce gestionnaire particulier indique ou non à Ionic Framework d'appeler le prochain gestionnaire de bouton retour.

| Gestionnaire | Priorité | Propagation | Description                                                                                                                              |
| ------------ | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Overlays     | 100      | Non         | Applies to overlay components `ion-action-sheet`, `ion-alert`, `ion-loading`, `ion-modal`, `ion-popover`, `ion-picker`, and `ion-toast`. |
| Menu         | 99       | No          | Applies to `ion-menu`.                                                                                                                   |
| Navigation   | 0        | Yes         | Applies to routing navigation (i.e. Angular Routing).                                                                                    |
