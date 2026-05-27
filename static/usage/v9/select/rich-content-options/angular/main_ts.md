```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      /**
       * `innerHTMLTemplatesEnabled` must be enabled for rich-content
       * select options to render correctly.
       */
      innerHTMLTemplatesEnabled: true,
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
```
