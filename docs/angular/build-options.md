# Build Options

Developers have two options for using Ionic components: Standalone or Modules. This guide covers both options as well as the benefits and downsides of each approach.

While the Standalone approach is newer and makes use of more modern Angular APIs, the Modules approach will continue to be supported in Ionic. Most of the Angular examples on this documentation website use the Modules approach.

## Standalone

:::info
Ionic UI components as Angular standalone components is supported starting in Ionic v7.5.
:::

### Overview

Developers with Angular applications that use [standalone components](https://angular.io/guide/standalone-components) can also use Ionic components as standalone components to provide a simplified way to build Angular applications. This option involves importing specific Ionic components in the Angular components you want to use them in.

**Benefits**

1. Enables treeshaking so the final build output only includes the code necessary to run your app which reduces overall build size.
2. Avoids the use of `NgModule`s to streamline the development experience and make your code easier to understand.
3. Allows developers to also use newer Angular features such as [ESBuild](https://angular.io/guide/esbuild).

**Drawbacks**

1. Ionic components need to be imported into every Angular component they are used in which can be time consuming to set up.

### Usage

:::caution
All Ionic imports should be imported from the `@ionic/angular/standalone` submodule. This includes imports such as components, directives, providers, and types. Importing from `@ionic/angular` may pull in lazy loaded Ionic code which can interfere with treeshaking.
:::

**Components**

In the example below, we are importing `IonContent` and `IonButton` from `@ionic/angular/standalone` and passing them to `imports` for use in the component template. We would get a compiler error if these components were not imported and provided to the `imports` array.

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

**Bootstrapping and Configuration**

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

**Icons**

The icon SVG data needs to be defined in the Angular component so it can be loaded correctly. Developers can use the `addIcons` function from `ionicons` to map the SVG data to a string name. Developers can then reference the icon by its string name using the `name` property on `IonIcon`.

We recommend calling `addIcons` in the Angular component `constructor` so the data is only added if the Angular component is being used.

For developers using Ionicons 7.2 or newer, passing only the SVG data will cause the string name to be automatically generated.

```typescript
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon],
})
export class HomePage {
  constructor() {
    /**
     * On Ionicons 7.2+ this icon
     * gets mapped to a "logo-ionic" key.
     * Alternatively, developers can do:
     * addIcons({ 'logo-ionic': logoIonic });
     */
    addIcons({ logoIonic });
  }
}
```

## Modules

### Overview

Developers can also use the Modules approach by importing `IonicModule` and calling `IonicModule.forRoot()` in the `imports` array in `app.module.ts`. This registers a version of Ionic where Ionic components will be lazily loaded as needed.

**Benefits**

1. Since components are lazily loaded as needed, developers do not need to spend time manually importing and registering each Ionic component.

**Drawbacks**

1. Lazily loading Ionic components means that the compiler does not know which components are needed at build time. This means your final application bundle may be much larger than it needs to be.
2. Developers are unable to use newer Angular features such as [ESBuild](https://angular.io/guide/esbuild).

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
This migration guide assumes the Angular components in your application are already standalone components. See [Migrating to Standalone](https://angular.io/guide/standalone-migration) if your Angular application is not already using standalone components.
:::

The Standalone option is newer than the Modules option, so developers may wish to switch during the development of their application. This guide details the steps needed to migrate as well as limitations to be aware of.

### Steps to Migrate

1. Run `npm install @ionic/angular@latest` to ensure you are running the latest version of Ionic. Ionic UI Standalone Components is supported in Ionic v7.5 or newer.

2. Run `npm install ionicons@latest` to ensure you are running the latest version of Ionicons. Ionicons v7.2 brings usability improvements that reduce the code boilerplate needed to use icons with standalone components.

3. Remove the `IonicModule` call in `main.ts` in favor of `provideIonicAngular` imported from `@ionic/angular/standalone`. Any config passed to `IonicModule.forRoot` can be passed as an object to this new function.

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

4. Remove any references to `IonicModule` found elsewhere in your application.

5. Update any existing imports from `@ionic/angular` to import from `@ionic/angular/standalone` instead.

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6. Add imports for each Ionic component in the Angular component where they are used. Be sure to pass the imports to the `imports` array on your Angular component.

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

7. If you are using Ionicons, define the icon SVG data used in each Angular component using `addIcons`. This allows you to continue referencing icons by string name in your component template. Note that you will need to do this for any additional icons added.

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

8. Remove the following code from your `angular.json` file if present. Note that it may appear multiple times.

```diff
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

### Limitations

1. Your application must already make use of standalone APIs. Using Ionic UI components as standalone components in an application that uses `NgModule` is not supported.
2. Migrating to Ionic standalone components must be done all at the same time and cannot be done gradually. The Modules and Standalone approaches use two different build systems of Ionic that cannot be used at the same time.
