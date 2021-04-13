---
previousText: 'Votre première application'
previousUrl: '/docs/vue/your-first-app'
nextText: 'Navigation'
nextUrl: '/docs/vue/navigation'
---

# Cycle de vie de Vue

Ce guide explique comment utiliser les événements Lifecycle de Ionic Framework dans une application Ionic Vue.

## Méthodes du cycle de vie du Ionic Framework

Ionic Framework fournit quelques méthodes de cycle de vie que vous pouvez utiliser dans vos applications :

| Nom de l'événement | Description                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `ionViewWillEnter` | S'exécute lorsque le composant vers lequel il est acheminé est sur le point d'être animé en vue. |
| `ionViewDidEnter`  | S'exécute lorsque le composant vers lequel il est acheminé a fini de s'animer.                   |
| `ionViewWillLeave` | S'exécute lorsque le composant d'où provient le routage est sur le point de s'animer.            |
| `ionViewDidLeave`  | S'exécute lorsque le composant vers lequel il est acheminé a fini de s'animer.                   |


Les cycles de vie sont définis de la même manière que les méthodes de cycle de vie de Vue - en tant que fonctions à la racine de votre composant Vue :

```typescript
import { IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  ionViewDidEnter() {
    console.log('Home page did enter');
  },
  ionViewDidLeave() {
    console.log('Home page did leave');
  },
  ionViewWillEnter() {
    console.log('Home page will enter');
  },
  ionViewWillLeave() {
    console.log('Home page will leave');
  },
  components: {
    IonPage
  }
})
```

### Crochets de l'API de composition

Ces cycles de vie peuvent également être exprimés à l'aide de l'API de composition de Vue 3 :

```typescript
import {
  IonPage,
  onIonViewWillEnter,
  onIonViewDidEnter,
  onIonViewWillLeave,
  onIonViewDidLeave
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonPage
  },
  setup() {
    onIonViewDidEnter(() => {
      console.log('Home page did enter');
    });

    onIonViewDidLeave(() => {
      console.log('Home page did leave');
    });

    onIonViewWillEnter(() => {
      console.log('Home page will enter');
    });

    onIonViewWillLeave(() => {
      console.log('Home page will leave');
    });
  }
})
```

> Les pages de votre application doivent utiliser le composant `IonPage` pour que les méthodes et les crochets du cycle de vie se déclenchent correctement.

## Comment Ionic Framework gère la vie d'une page

Ionic Framework possède sa sortie de routeur, appelée `<ion-router-outlet>`. Cet outlet étend le `<router-view>` de Vue Router avec quelques fonctionnalités supplémentaires pour permettre de meilleures expériences pour les appareils mobiles.

Lorsqu'une application est enveloppée dans `<ion-router-outlet>`, Ionic Framework traite la navigation un peu différemment. Lorsque vous naviguez vers une nouvelle page, Ionic Framework conserve l'ancienne page dans le DOM existant, mais la cache de votre vue et fait passer la nouvelle page. La raison pour laquelle nous faisons cela est double :

1) Nous pouvons maintenir l'état de l'ancienne page (données à l'écran, position de défilement, etc...). 2) Nous pouvons assurer une transition plus douce vers la page, puisqu'elle est déjà présente et qu'il n'est pas nécessaire de la créer.

Les pages ne sont retirées du DOM que lorsqu'elles sont "sautées", par exemple en appuyant sur le bouton "Back" de l'interface utilisateur ou sur le bouton "Back" du navigateur.

En raison de ce traitement spécial, certains composants Vue Router tels que `<keep-alive>`, `<transition>`, et `<router-view>` ne doivent pas être utilisés dans les applications Ionic Vue. En outre, l'API Scroll Behavior de Vue Router n'est pas nécessaire ici, car la position de défilement de chaque page est préservée automatiquement.

Toutes les méthodes de cycle de vie de Vue (`mounted`, `beforeUnmount`, etc...) sont également disponibles pour vous. Cependant, étant donné que Ionic Vue gère la durée de vie d'une page, certains événements peuvent ne pas se déclencher quand vous l'attendez. Par exemple, `mounted` se déclenche la première fois qu'une page est affichée, mais si vous naviguez loin de la page, Ionic Framework pourrait garder la page autour dans le DOM, et une visite ultérieure de la page pourrait ne pas appeler `mounted` à nouveau. Ce scénario est la raison principale pour laquelle les méthodes de cycle de vie du cadre Ionic existent, pour vous donner un moyen d'appeler la logique lorsque les vues entrent et sortent lorsque les événements du cadre natif ne se déclenchent pas.

## Orientations pour chaque méthode du cycle de vie

Vous trouverez ci-dessous quelques conseils sur les cas d'utilisation pour chacun des événements du cycle de vie.

- `ionViewWillEnter` - Puisque `ionViewWillEnter` est appelé chaque fois que l'on navigue vers la vue (qu'elle soit initialisée ou non), c'est une bonne méthode pour charger des données à partir de services.
- `ionViewDidEnter` - Si vous constatez des problèmes de performance en utilisant `ionViewWillEnter` lors du chargement des données, vous pouvez faire vos appels de données dans `ionViewDidEnter` à la place. Toutefois, cet événement ne se déclenchera pas avant que la page ne soit visible pour l'utilisateur, de sorte que vous pourriez vouloir utiliser soit un indicateur de chargement, soit un écran squelette tel que [ion-skeleton-text](../api/skeleton-text), afin que le contenu ne clignote pas de manière non naturelle après la transition.
- `ionViewWillLeave` - Peut être utilisé pour le nettoyage, comme le désabonnement des sources de données. Puisque `beforeUnmount` pourrait ne pas se déclencher lorsque vous naviguez à partir de la page actuelle, mettez votre code de nettoyage ici si vous ne voulez pas qu'il soit actif lorsque l'écran n'est pas visible.
- `ionViewDidLeave` - Lorsque cet événement se déclenche, vous savez que la nouvelle page a effectué une transition complète, donc toute logique que vous ne feriez pas normalement lorsque la vue est visible peut aller ici.