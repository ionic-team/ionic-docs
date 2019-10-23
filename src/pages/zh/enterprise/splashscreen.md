---
title: Splash Screen
template: enterprise-plugin
version: 5.0.2
minor: 5.0.X
---

The Splash Screen plugin provides control options for displaying and hiding a splash screen, commonly during application launch.

<native-ent-install plugin-id="splashscreen" variables=""></native-ent-install>

## Index

### Classes

* [SplashScreen](#splashscreen)

* * *

## Classes

<a id="splashscreen"></a>

### SplashScreen

***usage***:

```typescript
import { SplashScreen } from '@ionic-enterprise/splashscreen/ngx';

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
```

<a id="splashscreen.hide"></a>

### hide

▸ **hide**(): `void`

Hides the splashscreen

**Returns:** `void`

* * *

<a id="splashscreen.show"></a>

### show

▸ **show**(): `void`

Shows the splashscreen

**Returns:** `void`

* * *

* * *