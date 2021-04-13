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

| Configuration            | Type               | Description                                                                                                                 |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour toutes les `ion-action-sheet`, remplaçant l'"animation" par défaut.       |
| `actionSheetLeave`       | `AnimationBuilder` | Fournit une animation de sortie personnalisée pour toutes les `ion-action-sheet`, remplaçant l'"animation" par défaut.      |
| `alertEnter`             | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-alert`, remplaçant l'"animation" par défaut.                |
| `alertLeave`             | `AnimationBuilder` | Fournit une animation de départ personnalisée pour tous les `ion-alert`, remplaçant l'"animation" par défaut.               |
| `animated`               | `boolean`          | Si `true`, Ionic activera toutes les animations et transitions à travers l'app.                                             |
| `backButtonIcon`         | `string`           | Remplace l'icône par défaut dans tous les composants `<ion-back-button>`.                                             |
| `backButtonText`         | `string`           | Remplace le texte par défaut dans tous les composants `<ion-back-button>`.                                            |
| `hardwareBackButton`     | `boolean`          | Si `true`, Ionic répondra au bouton arrière matériel d'un appareil Android.                                                 |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Remplace le type de spinner par défaut dans tous les composants `<ion-infinite-scroll-content>`.                      |
| `loadingEnter`           | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-loading`, remplaçant l'"animation" par défaut.              |
| `loadingLeave`           | `AnimationBuilder` | Fournit une animation de sortie personnalisée pour tous les `ion-loading`, remplaçant l'"animation" par défaut.             |
| `loadingSpinner`         | `SpinnerTypes`     | Remplace le spinner par défaut pour tous les recouvrements `ion-loading`.                                                   |
| `menuIcon`               | `string`           | Remplace l'icône par défaut dans tous les composants `<ion-menu-button>`.                                             |
| `menuType`               | `string`           | Remplace le type de menu par défaut pour tous les composants `<ion-menu>`.                                            |
| `modalEnter`             | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-modal`, remplaçant l'"animation" par défaut.                |
| `modalLeave`             | `AnimationBuilder` | Fournit une animation de sortie personnalisée pour tous les `ion-modal`, remplaçant l'"animation" par défaut.               |
| `mode`                   | `Mode`             | Le mode détermine les styles de plate-forme à utiliser pour l'ensemble de l'application.                                    |
| `navAnimation`           | `AnimationBuilder` | Remplace l'"animation" par défaut de tous les `ion-nav` et `ion-router-outlet` dans toute l'application.                    |
| `pickerEnter`            | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-picker`, remplaçant l'"animation" par défaut.               |
| `pickerLeave`            | `AnimationBuilder` | Fournit une animation de sortie personnalisée pour tous les `ion-picker`, remplaçant l'"animation" par défaut.              |
| `popoverEnter`           | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-popover`, remplaçant l'"animation" par défaut.              |
| `popoverLeave`           | `AnimationBuilder` | Fournit une animation de sortie personnalisée pour tous les `ion-popover`, remplaçant l'"animation" par défaut.             |
| `refreshingIcon`         | `string`           | Remplace l'icône par défaut dans tous les composants `<ion-refresh-content>`.                                         |
| `refreshingSpinner`      | `SpinnerTypes`     | Remplace le type de spinner par défaut dans tous les composants `<ion-refresh-content>`.                              |
| `sanitizerEnabled`       | `boolean`          | Si `true`, Ionic activera un assainisseur DOM de base sur les propriétés des composants qui acceptent du HTML personnalisé. |
| `spinner`                | `SpinnerTypes`     | Remplace le spinner par défaut dans tous les composants `<ion-spinner>`.                                              |
| `statusTap`              | `boolean`          | Si `true`, un clic ou un tapotement sur la barre d'état fera défiler le contenu vers le haut.                               |
| `swipeBackEnabled`       | `boolean`          | Si `true`, Ionic activera le geste "swipe-to-go-back" à travers l'application.                                              |
| `tabButtonLayout`        | `TabButtonLayout`  | Remplace le "layout" par défaut de tous les `ion-bar-button` dans l'ensemble de l'application.                              |
| `toastEnter`             | `AnimationBuilder` | Fournit une animation d'entrée personnalisée pour tous les `ion-toast`, remplaçant l'"animation" par défaut.                |
| `toastLeave`             | `AnimationBuilder` | Fournit une animation de départ personnalisée pour tous les `ion-toast`, remplaçant l'"animation" par défaut.               |
