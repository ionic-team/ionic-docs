---
title: Vibration
template: enterprise-plugin
version: 3.1.0
minor: 3.1.X
---

Le plugin Vibration offre la possibilité de faire vibrer l'appareil pendant une durée donnée.

<native-ent-install plugin-id="vibration" variables=""></native-ent-install>

## Index

### Classes

* [Vibration](#vibration)

* * *

## Classes

<a id="vibration"></a>

### Vibration

***usage***:

```typescript
import { Vibration } from '@ionic-enterprise/vibration/ngx';

constructor(private vibration: Vibration) { }

...

// Vibrer l'appareil pendant une seconde
// La durée est ignorée sur iOS.
this.vibration.vibrate(1000);

// Vibre 2 secondes
// Pause pendant 1 seconde
// Vibre pendant 2 secondes
// Les modèles fonctionnent uniquement sur Android
this.vibration.vibrate([2000,1000,2000]);

// Arrête immédiatement les vibrations actuelles
// Fonctionne sur Android uniquement
this.vibration.vibrate(0);
```

<a id="vibration.vibrate"></a>

### vibrer

▸ ** vibrer ** (heure: * ` numéro ` \ | ` numéro ` [] *): ` void `

Fait vibrer l'appareil pendant une durée donnée.

**Paramètres :**

| Nom   | Type          | Description                                                                                                                                                                          |
| ----- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| temps | ` numéro ` \ | ` numéro ` [] | Millisecondes pour faire vibrer l'appareil. Si passé un tableau de nombres, il définira un modèle de vibration. Passez 0 pour arrêter immédiatement toute vibration. |


** Renvoie: ** ` void `

* * *

* * *