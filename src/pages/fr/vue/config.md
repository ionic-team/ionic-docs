---
previousText: 'Navigation'
previousUrl: '/docs/vue/navigation'
nextText: 'Plateforme'
nextUrl: '/docs/vue/platform'
---

# Configuration

Ionic Config offre un moyen de modifier les propriétés des composants de manière globale dans une application. Il peut définir le mode de l'application, la disposition des boutons d'onglet, les animations, etc.

## Configuration globale

Pour remplacer la configuration initiale de Ionic pour l'application, fournissez votre objet de configuration comme paramètre supplémentaire lors de l'installation du plugin `IonicVue` :

```typescript
createApp(App)
  .use(IonicVue, {
    rippleEffect: false,
    mode: 'md'
  })
```

Dans l'exemple ci-dessus, nous désactivons l'effet d'ondulation Material Design dans toute l'application, et nous forçons le mode à être Material Design.

## Configuration par plateforme

Ionic Config peut également être défini sur une base par plate-forme. Par exemple, cela vous permet de désactiver les animations si l'application est en cours d'exécution dans un navigateur sur un appareil potentiellement plus lent. Les développeurs peuvent tirer parti des utilitaires de la plate-forme pour y parvenir.

Dans l'exemple suivant, nous désactivons toutes les animations de notre application Ionic uniquement si l'application s'exécute dans un navigateur Web mobile. L'appel `isPlatform()` retourne `true` ou `false` basé sur la plate-forme qui est passée. Voir la [Documentation de la plateforme](./platform#platforms) pour une liste de valeurs possibles.


```typescript
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App)
  .use(IonicVue, {
    animated: !isPlatform('mobileweb')
  })
```

L'exemple suivant vous permet de définir une configuration entièrement différente en fonction de la plate-forme, et de revenir à une configuration par défaut si aucune plate-forme ne correspond :

```typescript
import { IonicVue, isPlatform } from '@ionic/vue';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide'
    }
  }

  return {
    menuIcon: 'ellipsis-vertical'
  }
}

createApp(App)
  .use(IonicVue, getConfig());
```

Enfin, cet exemple vous permet d'accumuler un objet de configuration en fonction des exigences des différentes plates-formes :


```typescript
import { IonicVue, isPlatform } from '@ionic/vue';

const getConfig = () => {
  let config = {
    animated: false
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous'
    }
  }

  return config;
}

createApp(App)
  .use(IonicVue, getConfig());
```

## Options de configuration

Voici une liste des options de configuration qu'Ionic utilise.

| Configuration            | Type               | Description                                                                                                            |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour toutes les `ion-action-sheet`, remplaçant l'"animation" par défaut.  |
| `actionSheetLeave`       | `AnimationBuilder` | Fournit une animation de sortie personnalisée pour toutes les `ion-action-sheet`, remplaçant l'"animation" par défaut. |
| `alertEnter`             | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-alert`, remplaçant l'"animation" par défaut.           |
| `alertLeave`             | `AnimationBuilder` | Fournit une animation de départ personnalisée pour tous les `ion-alert`, remplaçant l'"animation" par défaut.          |
| `animated`               | `boolean`          | Si `true`, Ionic activera toutes les animations et transitions à travers l'app.                                        |
| `backButtonIcon`         | `string`           | Remplace l'icône par défaut dans tous les composants `<ion-back-button>`.                                        |
| `backButtonText`         | `string`           | Remplace le texte par défaut dans tous les composants `<ion-back-button>`.                                       |
| `hardwareBackButton`     | `boolean`          | Si `true`, Ionic répondra au bouton arrière matériel d'un appareil Android.                                            |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Remplace le type de spinner par défaut dans tous les composants `<ion-infinite-scroll-content>`.                 |
| `loadingEnter`           | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-loading`, remplaçant l'"animation" par défaut.         |
| `loadingLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".                           |
| `loadingSpinner`         | `SpinnerTypes`     | Overrides the default spinner for all `ion-loading` overlays.                                                          |
| `menuIcon`               | `string`           | Overrides the default icon in all `<ion-menu-button>` components.                                                |
| `menuType`               | `string`           | Overrides the default menu type for all `<ion-menu>` components.                                                 |
| `modalEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".                             |
| `modalLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".                             |
| `mode`                   | `Mode`             | The mode determines which platform styles to use for the whole application.                                            |
| `navAnimation`           | `AnimationBuilder` | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.               |
| `pickerEnter`            | `AnimationBuilder` | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".                            |
| `pickerLeave`            | `AnimationBuilder` | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".                            |
| `popoverEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".                           |
| `popoverLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".                           |
| `refreshingIcon`         | `string`           | Overrides the default icon in all `<ion-refresh-content>` components.                                            |
| `refreshingSpinner`      | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-refresh-content>` components.                                    |
| `sanitizerEnabled`       | `boolean`          | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.                    |
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.                                                 |
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.                             |
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                                    |
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.                                   |
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".                             |
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".                             |
