import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Build Options

Developers have two options for using Ionic components: Standalone or Modules. This guide covers both options as well as the benefits and downsides of each approach.

While the Standalone approach is newer and makes use of more modern Angular APIs, the Modules approach will continue to be supported in Ionic. Most of the Angular examples on this documentation website use the Modules approach.

## Standalone

:::info
Ionic UI components as Angular standalone components is supported starting in Ionic v7.5.
:::

### Overview

Developers can use Ionic components as standalone components to take advantage of treeshaking and newer Angular features. This option involves importing specific Ionic components in the Angular components you want to use them in. Developers can use Ionic standalone components even if their Angular application is NgModule-based.

See the [Standalone Migration Guide](#migrating-from-modules-to-standalone) for instructions on how to update your Ionic app to make use of Ionic standalone components.

**Benefits**

1. Enables treeshaking so the final build output only includes the code necessary to run your app which reduces overall build size.
2. Avoids the use of NgModules to streamline the development experience and make your code easier to understand.
3. Allows developers to also use newer Angular features such as [ESBuild](https://angular.io/guide/esbuild).

**Drawbacks**

1. Ionic components need to be imported into every Angular component they are used in which can be time consuming to set up.

### Usage with Standalone-based Applications

:::warning
All Ionic imports should be imported from the `@ionic/angular/standalone` submodule. This includes imports such as components, directives, providers, and types. Importing from `@ionic/angular` may pull in lazy loaded Ionic code which can interfere with treeshaking.
:::

**Bootstrapping and Configuration**

Ionic Angular needs to be configured when the Angular application calls `bootstrapApplication` using the `provideIonicAngular` function. Developers can pass any [IonicConfig](../developing/config#ionicconfig) values as an object in this function. Note that `provideIonicAngular` needs to be called even if no custom config is passed.

```typescript title="main.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
    provideRouter(routes),
  ],
});
```

**Components**

In the example below, we are importing `IonContent` and `IonButton` from `@ionic/angular/standalone` and passing them to `imports` for use in the component template. We would get a compiler error if these components were not imported and provided to the `imports` array.

```typescript title="home.page.ts"
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

**Icons**

The icon SVG data needs to be defined in the Angular component so it can be loaded correctly. Developers can use the `addIcons` function from `ionicons` to map the SVG data to a string name. Developers can then reference the icon by its string name using the `name` property on `IonIcon`.

We recommend calling `addIcons` in the Angular component `constructor` so the data is only added if the Angular component is being used.

For developers using Ionicons 7.2 or newer, passing only the SVG data will cause the string name to be automatically generated.

```typescript title="home.page.ts"
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

Icons can also be registered in entry points such as `app.component.ts` to avoid the need to call `addIcons` multiple times. Developers should be aware that the initial application chunk may increase because the registered icons will need to be loaded at application start. However, if your application uses a small number of icons the impact of this may be minimal.

```typescript title="app.component.ts"
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
})
export class AppComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ logoIonic });
  }
}
```

Icons registered in an application entry point can then be referenced by name anywhere in the application.

```html title="home.page.html"
<!--
  logoIonic was registered in app.component.ts instead of home.page.ts,
  but it can still be used in home.page.html.
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**Routing**

Developers who wish to use `routerLink`, `routerAction`, or `routerDirection` on Ionic components should import the `IonRouterLink` directive. Developers who wish to use these routing features on anchor (`<a>`) elements should import `IonRouterLinkWithHref` instead.

```typescript title="home.page.ts"
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    RouterLink, // required to get base routerLink behavior for @angular/router
    IonRouterLink, // use IonRouterLinkWithHref if you are using an <a> element instead
  ],
})
export class HomePage {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">Go to Foo Page</ion-button>
```

**Testing**

Ionic Angular's standalone components use ES Modules. As a result, developers using Jest should ensure that ES Modules are transpiled to a format that Jest can use. Developers using Jest should add the following to their Jest config:

<Tabs groupId="package-manager" defaultValue="npm" values={[{ value: 'npm', label: 'npm' }, { value: 'pnpm', label: 'pnpm' }]}>
<TabItem value="npm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)"]
```

</TabItem>
<TabItem value="pnpm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/.pnpm/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)@)"]
```

</TabItem>
</Tabs>

### Usage with NgModule-based Applications

:::warning
All Ionic imports should be imported from the `@ionic/angular/standalone` submodule. This includes imports such as components, directives, providers, and types. Importing from `@ionic/angular` may pull in lazy loaded Ionic code which can interfere with treeshaking.
:::

**Bootstrapping and Configuration**

Ionic Angular needs to be configured in the `providers` array of `app.module.ts` using the `provideIonicAngular` function. Developers can pass any [IonicConfig](../developing/config#ionicconfig) values as an object in this function. Note that `provideIonicAngular` needs to be called even if no custom config is passed.

```typescript title="app.module.ts"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideIonicAngular(), { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Components**

In the example below, we are importing `IonContent` and `IonButton` from `@ionic/angular/standalone` and passing them to `imports` array in the Angular component's NgModule for use in the component template. We would get a compiler error if these components were not imported and provided to the `imports` array.

```typescript title="home.module.ts"
import { NgModule } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular/standalone';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [IonButton, IonContent, HomePageRoutingModule],
  declarations: [HomePage],
})
export class HomePageModule {}
```

**Icons**

The icon SVG data needs to be defined in the Angular component so it can be loaded correctly. Developers can use the `addIcons` function from `ionicons` to map the SVG data to a string name. Developers can then reference the icon by its string name using the `name` property on `IonIcon`. The `IonIcon` component should be added in `app.module.ts` just like the other Ionic components.

We recommend calling `addIcons` in the Angular component `constructor` so the data is only added if the Angular component is being used.

For developers using Ionicons 7.2 or newer, passing only the SVG data will cause the string name to be automatically generated.

```typescript title="home.page.ts"
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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

Icons can also be registered in entry points such as `app.component.ts` to avoid the need to call `addIcons` multiple times. Developers should be aware that the initial application chunk may increase because the registered icons will need to be loaded at application start. However, if your application uses a small number of icons the impact of this may be minimal.

```typescript title="app.component.ts"
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ logoIonic });
  }
}
```

Icons registered in an application entry point can then be referenced by name anywhere in the application.

```html title="home.page.html"
<!--
  logoIonic was registered in app.component.ts instead of home.page.ts,
  but it can still be used in home.page.html.
-->
<ion-icon name="logo-ionic"></ion-icon>
```

**Routing**

Developers who wish to use `routerLink`, `routerAction`, or `routerDirection` on Ionic components should import the `IonRouterLink` directive. Developers who wish to use these routing features on anchor (`<a>`) elements should import `IonRouterLinkWithHref` instead.

```typescript title="home.module.ts"
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonButton,
    RouterLink, // required to get base routerLink behavior for @angular/router
    IonRouterLink, // use IonRouterLinkWithHref if you are using an <a> element instead
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
```

```html title="home.page.html"
<ion-button routerLink="/foo" routerDirection="root">Go to Foo Page</ion-button>
```

**Testing**

Ionic Angular's standalone components use ES Modules. As a result, developers using Jest should ensure that ES Modules are transpiled to a format that Jest can use. Developers using Jest should add the following to their Jest config:

<Tabs groupId="package-manager" defaultValue="npm" values={[{ value: 'npm', label: 'npm' }, { value: 'pnpm', label: 'pnpm' }]}>
<TabItem value="npm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)"]
```

</TabItem>
<TabItem value="pnpm">

```json

"transformIgnorePatterns": ["<rootDir>/node_modules/.pnpm/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)@)"]
```

</TabItem>
</Tabs>

## Modules

### Overview

Developers can also use the Modules approach by importing `IonicModule` and calling `IonicModule.forRoot()` in the `imports` array in `app.module.ts`. This registers a version of Ionic where Ionic components will be lazily loaded at runtime.

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

:::tip
Try our automated utility for migrating to standalone!

See https://github.com/ionic-team/ionic-angular-standalone-codemods for instructions on how to get started. All issues related to the migration utility should be filed on the linked repo.
:::

The Standalone option is newer than the Modules option, so developers may wish to switch during the development of their application. This guide details the steps needed to migrate.

Migrating to Ionic standalone components must be done all at the same time and cannot be done gradually. The Modules and Standalone approaches use two different build systems of Ionic that cannot be used at the same time.

Developers are encouraged to try the [automated migration utility](https://github.com/ionic-team/ionic-angular-standalone-codemods), though they can also follow the steps below if they would like to manually migrate their applications.

### Standalone-based Applications

Follow these steps if your Angular application is already using the standalone architecture, and you want to use Ionic UI components as standalone components too.

1. Run `npm install @ionic/angular@latest` to ensure you are running the latest version of Ionic. Ionic UI Standalone Components is supported in Ionic v7.5 or newer.

2. Run `npm install ionicons@latest` to ensure you are running the latest version of Ionicons. Ionicons v7.2 brings usability improvements that reduce the code boilerplate needed to use icons with standalone components.

3. Remove the `IonicModule` call in `main.ts` in favor of `provideIonicAngular` imported from `@ionic/angular/standalone`. Any config passed to `IonicModule.forRoot` can be passed as an object to this new function.

```diff title="main.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
+ import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /**
     * The custom config serves as an example
     * of how to pass a config to provideIonicAngular.
     * You do not need to set "mode: 'ios'" to
     * use Ionic standalone components.
     */
-   importProvidersFrom(IonicModule.forRoot({ mode: 'ios' })),
+   provideIonicAngular({ mode: 'ios' }),
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

```diff title="app.component.ts"
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

```diff title="test.component.ts"
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
+   addIcons({ alarm, logoIonic });
  }
}
```

8. Remove the following code from your `angular.json` file if present. Note that it may appear multiple times.

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9. If you are using `routerLink`, `routerDirection`, or `routerAction` be sure to import the `IonRouterLink` directive for Ionic components or `IonRouterLinkWithHref` directive for `<a>` elements.

```diff title="test.component.ts"
import { Component } from '@angular/core';
- import { IonButton } from '@ionic/angular/standalone';
+ import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonButton,
+   IonRouterLink
  ],
})
export class TestComponent {}
```

10. If you are using VSCode it is recommended to ignore the `@ionic/angular/common` and `@ionic/angular` module specifiers for import recommendations.

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```

### NgModule-based Applications

Follow these steps if your Angular application is still using the NgModule architecture, but you want to adopt Ionic UI components as standalone components now.

1. Run `npm install @ionic/angular@latest` to ensure you are running the latest version of Ionic. Ionic UI Standalone Components is supported in Ionic v7.5 or newer.

2. Run `npm install ionicons@latest` to ensure you are running the latest version of Ionicons. Ionicons v7.2 brings usability improvements that reduce the code boilerplate needed to use icons with standalone components.

3. Remove the `IonicModule` call in `app.module.ts` in favor of `provideIonicAngular` imported from `@ionic/angular/standalone`. Any config passed to `IonicModule.forRoot` can be passed as an object to this new function.

```diff title="app.module.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
+ import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent],
- imports: [BrowserModule, IonicModule.forRoot({ mode: 'ios' }), AppRoutingModule],
+ imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /**
     * The custom config serves as an example
     * of how to pass a config to provideIonicAngular.
     * You do not need to set "mode: 'ios'" to
     * use Ionic standalone components.
     */
+   provideIonicAngular({ mode: 'ios' }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

4. Remove any references to `IonicModule` found elsewhere in your application.

5. Update any existing imports from `@ionic/angular` to import from `@ionic/angular/standalone` instead.

```diff
- import { Platform } from '@ionic/angular';
+ import { Platform } from '@ionic/angular/standalone';
```

6. Add imports for each Ionic component in the NgModule for the Angular component where they are used. Be sure to pass the components to the `imports` array on the module.

```diff title="app.module.ts"
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
- import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
+ import { provideIonicAngular, IonicRouteStrategy, IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [AppComponent],
- imports: [BrowserModule, AppRoutingModule],
+ imports: [BrowserModule, AppRoutingModule, IonApp, IonRouterOutlet],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

For example, all modules that are using Ionic components need to have the Ionic components imported in their component module.

```diff title="home.module.ts"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

+ import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
+    IonContent,
+    IonHeader,
+    IonTitle,
+    IonToolbar
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
```

7. If you are using Ionicons, define the icon SVG data used in each Angular component using `addIcons`. This allows you to continue referencing icons by string name in your component template. Note that you will need to do this for any additional icons added. The `IonIcon` component should still be provided in the NgModule.

```diff title="test.component.ts"
import { Component } from '@angular/core';
+ import { addIcons } from 'ionicons';
+ import { alarm, logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class TestComponent {
  constructor() {
+   addIcons({ alarm, logoIonic });
  }
}
```

```diff title="test.module.ts"
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
+ import { IonIcon } from '@ionic/angular/standalone';

@NgModule({
  imports: [
+   IonIcon,
  ],
  declarations: [TestComponent]
})
export class TestComponentModule {}
```

8. Remove the following code from your `angular.json` file if present. Note that it may appear multiple times.

```diff title="angular.json"
- {
-   "glob": "**/*.svg",
-   "input": "node_modules/ionicons/dist/ionicons/svg",
-   "output": "./svg"
- }
```

9. If you are using `routerLink`, `routerDirection`, or `routerAction` be sure to import the `IonRouterLink` directive for Ionic components or `IonRouterLinkWithHref` directive for `<a>` elements.

```diff title="test.module.ts"
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
- import { IonButton } from '@ionic/angular/standalone';
+ import { IonButton, IonRouterLink } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    IonButton,
+   IonRouterLink,
  ],
  declarations: [TestComponent]
})
```

10. If you are using VSCode it is recommended to ignore the `@ionic/angular/common` and `@ionic/angular` module specifiers for import recommendations.

```json title=".vscode/settings.json"
{
  "typescript.preferences.autoImportFileExcludePatterns": ["@ionic/angular/common", "@ionic/angular"]
}
```
