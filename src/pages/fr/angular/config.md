---
previousText: 'Navigation/Routing'
previousUrl: '/docs/angular/navigation'
nextText: 'Platform'
nextUrl: '/docs/angular/platform'
contributors:
  - liamdebeasi
  - mhartington
---

# Configuration

Ionic Config fournit un moyen de changer les propriétés des composants globalement à travers une application. Il peut définir le mode application, la mise en page des onglets, les animations, et plus encore.

## Configuration globale

Pour remplacer la configuration Ionic initiale de l'application, fournissez une configuration dans `IonicModule.forRoot` dans le fichier `app.module.ts`.

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }),
    AppRoutingModule
  ],
  ...
})
```

Dans l'exemple ci-dessus, nous désactivons l'effet d'ondulation de Material Design à travers l'application, et nous forçons le mode à être Material Design.


## Configuration par composant

Ionic Config n'est pas réactif, donc il est recommandé d'utiliser les propriétés d'un composant lorsque vous voulez remplacer son comportement par défaut plutôt que de définir sa configuration globalement.

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'Go Back'
    }),
    AppRoutingModule
  ],
  ...
})
```

Ceci définira le texte par défaut pour le `bouton ion-back-` à `Retourner`. Cependant, si vous deviez changer la valeur de la configuration de `backButtonText` à `Ne pas revenir`, le `bouton ion-back-button` texte par défaut resterait par défaut à `Retour` car le composant a déjà été initialisé et rendu. Au lieu de cela, il est recommandé d'utiliser la propriété `text` sur `ion-back-button`.

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

Dans cet exemple, nous avons utilisé notre `bouton ion-back-` de manière à ce que le texte puisse être mis à jour dynamiquement s'il devait y avoir un changement qui le justifiait, comme un changement de langue ou de langue. La méthode `getBackButtonText` serait responsable de retourner le texte correct.

## Configuration de la plateforme

Ionic Config peut également être défini sur une base par plate-forme. Par exemple, cela vous permet de désactiver les animations si l'application est en cours d'exécution dans un navigateur sur un appareil potentiellement plus lent. Les développeurs peuvent profiter des utilitaires Platform pour y parvenir.

Puisque la configuration est définie au moment de l'exécution, vous n'aurez pas accès à l'injection de dépendance de la plate-forme. Au lieu de cela, vous pouvez utiliser les fonctions sous-jacentes que le fournisseur utilise directement.

Dans l'exemple suivant, nous ne désactivons toutes les animations dans notre application Ionic que si l'application fonctionne dans un navigateur Web mobile. L'appel `isPlatform()` retourne `true` ou `false` basé sur la plate-forme qui est passée. Voir la [Documentation de la plateforme](./platform#platforms) pour une liste de valeurs possibles.


```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    }),
    AppRoutingModule
  ],
  ...
})
```

The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:

```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

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
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

Enfin, cet exemple vous permet d'accumuler un objet de configuration basé sur des exigences différentes de la plateforme :

```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

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
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

## Options de configuration

Voici une liste des options de configuration qu'Ionic utilise.

| Configuration            | Type               | Description                                                                                                                         |
| ------------------------ | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `actionSheetLeave`       | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `alertEnter`             | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `alertLeave`             | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `animated`               | `boolean`          | Si `vrai`, Ionic activera toutes les animations et transitions dans l'application.                                                  |
| `backButtonIcon`         | `string`           | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `backButtonText`         | `string`           | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `hardwareBackButton`     | `boolean`          | Si `true`, Ionic répondra au bouton retour matériel d'un appareil Android.                                                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `loadingEnter`           | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `loadingLeave`           | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `loadingSpinner`         | `SpinnerTypes`     | Remplace le spinner par défaut pour toutes les surcouches de `chargement d'ions`.                                                   |
| `menuIcon`               | `string`           | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `menuType`               | `string`           | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `modalEnter`             | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `modalLeave`             | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `mode`                   | `Mode`             | Le mode détermine les styles de plate-forme à utiliser pour l'ensemble de l'application.                                            |
| `navAnimation`           | `AnimationBuilder` | Outrepasse l'animation par défaut de tous les `ion-nav` et `ion-router-outlet` sur l'ensemble de l'application.                     |
| `pickerEnter`            | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `pickerLeave`            | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `popoverEnter`           | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `popoverLeave`           | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `refreshingIcon`         | `string`           | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `refreshingSpinner`      | `SpinnerTypes`     | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `sanitizerEnabled`       | `boolean`          | Si `true`, Ionic activera un nettoyeur DOM de base sur les propriétés des composants qui acceptent le HTML personnalisé.            |
| `spinner`                | `SpinnerTypes`     | Remplace l'icône par défaut dans tous les composants `< ion-back-button>`.                                                    |
| `statusTap`              | `boolean`          | Si `true`, cliquer ou appuyer sur la barre d'état fera défiler le contenu vers le haut.                                             |
| `swipeBackEnabled`       | `boolean`          | Si `vrai`, Ionic activera le geste "glisser-retour" sur l'application.                                                              |
| `tabButtonLayout`        | `TabButtonLayout`  | Outrepasse l'animation par défaut de tous les ion-nav et `ion-router-outlet` sur l'ensemble de l'application.                       |
| `toastEnter`             | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
| `toastLeave`             | `AnimationBuilder` | Fournit une animation de saisie personnalisée pour toutes les `ion-action-sheet`, en remplaçant l'animation par défaut "animation". |
