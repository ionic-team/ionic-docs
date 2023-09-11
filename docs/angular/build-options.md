# Build Options

Developers have two options for using Ionic components: Standalone or Modules. This guide covers both options as well as the benefits and downsides of each approach. Most of the Angular examples on this documentation website use the Modules approach for now.

While the Standalone approach is newer and makes use of more modern Angular APIs, the Modules approach will continue to be supported in Ionic.

## Standalone

### Overview

Developers can use Ionic components as [Angular standalone components](https://angular.io/guide/standalone-components) which provides a simplified way to build Angular applications. This option involves importing specific Ionic components in the Angular components you want to use them in.

**Benefits**

1. Enables treeshaking so the final build output only includes the code necessary to run your app which reduces overall build size.
2. Avoids the use of `NgModule`s to streamline the development experience and make your code easier to understand.
3. Allows developers to also use newer Angular features such as [ESBuild Support](https://angular.io/guide/esbuild).

**Drawbacks**

1. Ionic components need to be imported into every Angular component they want to be used in which can be time consuming to set up.

### Usage

:::caution
All Ionic standalone imports should be imported from the `@ionic/angular/standalone` package. Importing from the `@ionic/angular` package may pull in lazy loaded Ionic code which can interfere with treeshaking.
:::

In the example below, we are importing `IonContent` and `IonButton` from `@ionic/angular/standalone` and passed to `imports` for use in the component template. We would get a compiler error if these components were not imported and provided to the `imports` array.

```typescript
import { Component } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent],
})
export class HomePage {
  constructor() {}
}
```

Ionic Angular needs to be configured when the Angular application calls `bootstrapApplication` using the `provideIonicAngular` function. Developers can pass any [IonicConfig](../developing/config#ionicconfig) values as an object in this function. Note that `provideIonicAngular` needs to be called even if no custom config is passed.

```typescript
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
    provideRouter(routes),
  ],
});
```

## Modules

### Overview

Developers can also use the Modules approach by importing `IonicModule` and calling `IonicModule.forRoot()` in the `imports` array in `app.module.ts`. This registers a version of Ionic where Ionic components will be lazily loaded as needed.

**Benefits**

1. Since components are lazily loaded as needed, developers do not need to spend time manually importing and registering each Ionic component.

**Drawbacks**

1. Lazily loading Ionic components means that the compiler does not know which components are needed at build time. This means your final application bundle may be much larger than it needs to be.
2. Developers are unable to use newer Angular features such as [ESBuild Support](https://angular.io/guide/esbuild).

### Usage

In the example below, we are using `IonicModule` to create a lazily loaded version of Ionic. We can then reference any Ionic component without needing to explicitly import it.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Migrating from Modules to Standalone

:::note
This migration guide assumes the Angular components in your application are already standalone components.
:::

The Standalone option is newer than the Modules option, so developers may wish to switch during the development of their application. This guide details the steps needed to migrate as well as limitations to be aware of.

### Steps to Migrate

1. Remove the `IonicModule` call in `main.ts` in favor of `provideIonicAngular` imported from `@ionic/angular/standalone`. Any config passed to `IonicModule.forRoot` can be passed as an object to this new function.

```diff
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
+ import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
-   importProvidersFrom(IonicModule.forRoot({ mode: 'md' })),
+   provideIonicAngular({ mode: 'md' }),
    provideRouter(routes),
  ],
});
```

2. Remove any references to `IonicModule` found elsewhere in your application.

3. Update any existing imports from `@ionic/angular` to import from `@ionic/angular/standalone` instead.

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

4. Add imports for each Ionic component in the Angular component where they are used. Be sure to pass the imports to the `imports` array on your Angular component.


```diff
import { Component } from '@angular/core';
+ import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
+ imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
```

5. If you are using Ionicons, define the icon SVG data used in each Angular component using `addIcons`. This allows you to continue referencing icons by string name in your component template. Note that you will need to do this for any additional icons added.

```diff
import { Component } from '@angular/core';
+ import { IonIcon } from '@ionic/angular/standalone';
+ import { addIcons } from 'ionicons';
+ import { alarm, logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
+ imports: [IonIcon],
})
export class TestComponent {
  constructor() {
    addIcons({ alarm, logoIonic });
  }
}
```

6. Remove the following code from your `angular.json` file is present. Note that it may appear multiple times in your `angular.json` file.

```diff
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

### Limitations
