---
previousText: 'Configuration'
previousUrl: '/docs/vue/config'
nextText: 'Progressive Web Apps avec Vue'
nextUrl: '/docs/vue/pwa'
---

# Plateforme

## isPlatform

La méthode `isPlatform` peut être utilisée pour tester si votre application fonctionne sur une certaine plateforme :

```typescript
import { isPlatform } from '@ionic/vue';

isPlatform('ios'); // retourne vrai quand il est exécuté sur un appareil iOS
```

En fonction de la plateforme sur laquelle se trouve l'utilisateur, isPlatform(platformName) renvoie true ou false. Notez que la même application peut renvoyer un résultat positif pour plus d'un nom de plate-forme. Par exemple, une application exécutée à partir d'un iPad renverrait la réponse vraie pour les noms de plate-forme : mobile, ios, ipad et tablet. En outre, si l'application est exécutée à partir de Cordova, Cordova sera vrai.

## getPlatforms

La méthode `getPlatforms` peut être utilisée pour déterminer sur quelles plateformes votre application fonctionne actuellement.

```typescript
import { getPlatforms } from '@ionic/vue';

getPlatforms(); // renvoie ["iphone", "ios", "mobile", "mobileweb"] depuis un iPhone
```

Selon le périphérique sur lequel vous vous trouvez, `getPlatforms` peut renvoyer plusieurs valeurs. Chaque valeur possible est une hiérarchie de plateformes. Par exemple, sur un iPhone, il reviendrait mobile, ios et iphone.

## Les Platformes

Vous trouverez ci-dessous un tableau répertoriant toutes les valeurs possibles de la plate-forme ainsi que les descriptions correspondantes.

| Nom de la plateforme | Description                                           |
| -------------------- | ----------------------------------------------------- |
| android              | un appareil fonctionnant sous Android                 |
| capacitor            | un appareil exécutant Capacitor                       |
| cordova              | un appareil exécutant Cordova                         |
| desktop              | un appareil de bureau                                 |
| electron             | un appareil de bureau exécutant Electron              |
| hybrid               | un appareil exécutant Capacitor ou Cordova            |
| ios                  | un appareil fonctionnant sous iOS                     |
| ipad                 | un appareil iPad                                      |
| iphone               | un appareil iPhone                                    |
| mobile               | un appareil mobile                                    |
| mobileweb            | un navigateur Web fonctionnant sur un appareil mobile |
| phablet              | un appareil phablet                                   |
| pwa                  | une application PWA                                   |
| tablet               | a tablet device                                       |
