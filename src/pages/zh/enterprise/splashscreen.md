---
title: Splashscreen
template: enterprise-plugin
version: 5.0.2
minor: 5.0.X
---



## Index

### Classes

* [SplashScreen](#splashscreen)

* * *

## Classes

<a id="splashscreen"></a>

### SplashScreen

**SplashScreen**:

***name***: Splash Screen

***description***: This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.

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