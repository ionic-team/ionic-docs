# Build Options

Developers have two options for using Ionic components: Standalone or Modules. This guide covers both options as well as the benefits and downsides of each approach. Most of the Angular examples on this documentation website use the Modules approach for now.

## Standalone

### Overview

Developers can use Ionic components as [Angular standalone components](https://angular.io/guide/standalone-components) which provides a simplified way to build Angular applications. This option involves importing specific Ionic components in the Angular components you want to use them in.

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

### Benefits

1. Enables treeshaking so the final build output only includes the code necessary to run your app which reduces overall build size.
2. Avoids the use of `NgModule`s to streamline the development experience and make your code easier to understand.
3. Allows developers to also use newer Angular features such as [ESBuild Support](https://angular.io/guide/esbuild).

### Drawbacks

1. Ionic components need to be imported into every Angular component they want to be used in which can be time consuming to set up.

## Modules

### Overview

Developers can also use the Modules approach by importing `IonicModule` and calling `IonicModule.forRoot()` in the `imports` array in `app.module.ts`. This registers a version of Ionic where Ionic components will be lazily loaded as needed.

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

### Benefits

1. Since components are lazily loaded as needed, developers do not need to spend time manually importing and registering each Ionic component.

### Drawbacks

1. Lazily loading Ionic components means that the compiler does not know which components are needed at build time. This means your final application bundle may be much larger than it needs to be.
2. Developers are unable to use newer Angular features such as [ESBuild Support](https://angular.io/guide/esbuild).

## Migrating from Modules to Standalone

The Standalone option is newer than the Modules option, so developers may wish to switch during the development of their application. This guide details the steps needed to migrate as well as limitations to be aware of.

### Steps to Migrate

1.

### Limitations
