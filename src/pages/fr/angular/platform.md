---
previousText: 'Configuration'
previousUrl: '/fr/docs/angular/config'
nextText: 'Test'
nextUrl: '/fr/docs/angular/testing'
contributors:
  - liamdebeasi
---


# Plateforme

Le service Platform peut être utilisé pour obtenir des informations sur votre appareil actuel. Vous pouvez obtenir toutes les plateformes associées à l'appareil en utilisant la méthode `platforms` , y compris si l'application est vue depuis une tablette, si elle est sur un appareil mobile ou un navigateur, et sur la plateforme exacte (iOS, Android, etc). Vous pouvez également obtenir l'orientation de l'appareil, s'il utilise la direction du langage de droite à gauche, et bien plus encore. Avec ces informations, vous pouvez personnaliser complètement votre application pour s'adapter à n'importe quel appareil.

## Utilisation

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

## Méthodes

### `is(platformName: Platforms) => boolean`

Selon la plateforme sur laquelle l'utilisateur est, `is(platformName)` retournera vrai ou faux. Notez que la même application peut retourner vrai pour plus d'un nom de plateforme. Par exemple, une application fonctionnant depuis un iPad retournerait vrai pour les noms de plateformes suivants : `mobile`, `ios`, `ipad`, et `tablet`. En outre, si l'application fonctionnait à partir de Cordova, `cordova` serait alors vrai.

#### Paramètres

| Nom            | Type        | Description                                                                                                                                                  |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `platformName` | `Platforms` | Nom de la plateforme. Les options disponibles sont : android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### Platformes

Vous trouverez ci-dessous une liste de toutes les valeurs possibles pour la plateforme ainsi que les descriptions correspondantes.

| Nom de la plateforme | Description                                           |
| -------------------- | ----------------------------------------------------- |
| android              | un appareil fonctionnant sous Android                 |
| capacitor            | un appareil exécutant Capacitor                       |
| cordova              | un appareil exécutant Cordova                         |
| desktop              | un appareil de bureau                                 |
| electron             | un appareil de bureau exécutant Electron              |
| hybrid               | un appareil exécutant Capacitor ou Cordova            |
| ios                  | un appareil fonctionnant sous iOS                     |
| ipad                 | un iPad                                               |
| iphone               | un iPhone                                             |
| mobile               | un appareil mobile                                    |
| mobileweb            | un navigateur Web fonctionnant sur un appareil mobile |
| phablet              | une phablette                                         |
| pwa                  | une application web progressive                       |
| tablet               | une tablette                                          |

### `platforms() => string[]`

Selon le périphérique sur lequel vous êtes, `platforms` peut renvoyer plusieurs valeurs. Chaque valeur possible est une hiérarchie de plateformes. Par exemple, sur un iPhone, il renvoie `mobile`, `ios`, et `iphone`.

### `ready() => Promise<string>`

Renvoie une promesse lorsque la plateforme est prête et que des fonctionnalités natives peuvent être appelées. Si l'application fonctionne à partir d'un navigateur Web, alors la promesse sera résolue lorsque le DOM sera prêt. Lorsque l'application est en cours d'exécution à partir d'un moteur d'application tel que Cordova, alors la promesse se résoudra quand Cordova déclenchera l'événement `deviceready`. La valeur résolue est `readySource`, qui indique la plateforme qui a été utilisée.

Par exemple, lorsque Cordova est prêt, la source prête qui est résolue est `cordova`. La valeur de source prête par défaut sera `dom`. Le `readySource` est utile si une logique différente doit s'exécuter en fonction de la plateforme depuis laquelle l'application est en cours d'exécution. Par exemple, seul Capacitor et Cordova peuvent exécuter le plugin de la barre d'état, de sorte que le Web ne doit pas exécuter la logique du plugin de la barre d'état.

### `isRTL() => boolean`

Retourne si cette application utilise la direction de la langue de droite à gauche ou non. Nous recommandons le fichier `index.html` de l'application qui a déjà le jeu de valeur d'attributs `dir` correct, tel que `<html dir="ltr">` ou `<html dir="rtl">`. [W3C : Marquage structurel et texte de droite à gauche en HTML](http://www.w3.org/International/questions/qa-html-dir)

### `isLandscape() => boolean`

Renvoie `true` si l'application est en mode paysage.

### `isPortrait() => boolean`

Renvoie `true` si l'application est en mode portrait.

### `width() => number`

Récupère la largeur de la fenêtre d'affichage de la plateforme en utilisant `window.innerWidth`.

### `height() => number`

Récupère la hauteur de la fenêtre d'affichage de la plateforme en utilisant `window.innerHeight`.

### `url() => string`

Récupère l'url actuelle.

### `testUserAgent(expression: string) => boolean`

Retourne `true` si l'expression est incluse dans la chaîne user agent.

### Paramètres
| Nom        | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| expression | string | La chaîne qui vérifie l'agent utilisateur |

## Évènements

### `pause`

L'évènement `pause` se déclenche lorsque la plateforme native met l'application en arrière-plan, généralement lorsque l'utilisateur bascule vers une autre application. Cet événement se déclanche quand une application Cordova/Capacitor est mise en arrière-plan mais ne se déclenche pas dans un navigateur web standard.

#### Utilisation

```typescript
this.platform.pause.subscribe(async () => {
  alert('Pause event detected');
});
```

### `resize`

L'événement `redimensionner` se déclenche lorsque la fenêtre du navigateur a changé de dimensions. Cela peut être dû à un redimensionnement physique d'une fenêtre du navigateur, ou à un changement d'orientation du périphérique.

#### Utilisation

```typescript
this.platform.resize.subscribe(async () => {
  alert('Resize event detected');
});
```

### `resume`

L'évènement `resume` se déclenche lorsque la plate-forme native sort l'application de l'arrière-plan. Cet événement se déclenche quand une application Cordova/Capacitor est sortie de l'arrière-plan mais ne se déclenche pas dans un navigateur web standard.

#### Utilisation

```typescript
this.platform.resume.subscribe(async () => {
  alert('Resume event detected');
});
```
