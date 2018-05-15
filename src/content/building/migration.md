---
previousText: 'Scaffolding'
previousUrl: '/docs/building/scaffolding'
nextText: 'Cross Platform'
nextUrl: '/docs/building/cross-platform'
---

# Migration Guide

## Overview

We suggest the following general process when migrating an existing application from Ionic version 2 or 3 to Ionic version 4:

- Generate a new project using one of our generic starters
- Copy an app's services from `src/providers` to `src/app/services`
   - Minor rxjs related changes may need to be made. For more details, please see [rxjs's docs](https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md)
   - Services should include `{providedIn: 'root'}` in the `@Injectable()` decorator. For details, please see Angular [provider docs](https://angular.io/guide/providers).
- Copy an app's other root level items (pipes, components, etc) keeping in mind that the directory structure changes from `src/components` to `src/app/components`, etc.
- Copy global Sass styling from `src/app/app.scss` to `src/global.scss`
- Copy the rest of the application, page by page or feature by feature, keeping the following items in mind
   - Emulated Shadow DOM is turned on by default so custom Sass no longer needs to be wrapped in the page tag
   - Certain life-cycle hooks (such as `ionViewDidLoad()`) should be replaced by Angular's hooks (such as `ngOnInit()`)
   - Markup changes may be required in the page or any any components used by the page

In many cases, using the ionic CLI to generate a new object and then copying the code also works very well. For example: `ionic g service weather` will create a shell `Weather` service and test. The code can then be copied from the older project with minor modifications as needed. This helps to ensure proper structure is followed. This also generates shells for unit tests.

## Project structure

One of the major changes between an Ionic 3 app and an Ionic 4 app is the over all project layout and structure. In V3, Ionic apps had a custom convention for how an app should be setup and what that folder structure should look like. In V4, this has been changed to follows a typical setup of each framework supported.

For example, if an app is using Angular, that project structure will be exactly what an Angular CLI app would be. This change, while not too difficult to accommodate, helps to keep common patterns and documentation consistent.

![A V4 project on the left and a V3 project on the right](../assets/img/guides/migration/v4-v3-project-setup.png)

The above comparison shows an example project structure of the newer V4 layout (left). For developers with experience in a vanilla Angular project, this should feel really familiar.

There is a `src` directory that acts as the home for the app. This includes the `index.html`, any assets, environment variables, and any app specific config files. Compared to a V3 project which is slightly different.

While migrating an app to take advantage of this new layout, it is suggested that a new project "base" is made with the CLI. Then, with the new project layout, migrate the features of the app piece by piece.

Be aware that pages/components/etc have moved to inside the app folder because `app` is now the home for all of the Angular specific code.

## Changes in Package Name

Another change in V4 is the actual package name of Ionic. For V4, the package name is now `@ionic/angular`. While migrating an app, update the imports from `ionic-angular` to `@ionic/angular`.

## RxJS Changes

Some minor RxJS changes are required due to the change from RxJS v5.x to v6. Please see the <a href="https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md" target="_blank">RxJS Migtration Guide</a> for details.

## Lifecycle Events

Some of the Ionic lifecycle events are equivalent to Angular lifecycle hooks. For example, `ionViewDidLoad()` fills the same role as the Angular `OnInit` lifecycle hook (`ngOnInit()`). In such cases, use the Angular lifecycle hook.

## Overlay Components

In prior versions of Ionic, overlay components such as Loading, Toast, or Alert were created synchronously. In Ionic V4, these components are all created asynchronously. As a result of this, promises need to be used or async/await.

```ts
// V3
showAlert(){
  let alert = this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  })
  alert.present()
}
```

In V4, a promise is returned instead:

```js
showAlert(){
  this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  }).then(alert => alert.present())

// Or using async/await

async showAlert(){
  let alert = await this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  })
alert.present()
```

## Navigation

In V4, major changes were made to navigation and routing. `NavController` and `ion-nav` have now been deprecated. They can still used, but only if an app is not using lazy loading.

In place of `ion-nav` and `NavController`, Ionic has moved to use `@angular/router` for routing.
The Angular team has  an <a href="http://angular.io/guide/router" target="_blank">excellent guide</a> on their docs site that covers the Router in great detail.

One key difference is that instead of using the `router-outlet` component, Ionic apps use the `ion-router-outlet`.
The component has the same functionality as the standard Angular `router-outlet`, but just includes transitions.

## Lazy Loading

Another change is how lazy loading is done in V4 apps.

In V3, lazy loading was done like this:

```js
// home.page.ts
@IonicPage({
  segment: 'home'
})
@Component({...})
export class HomePage{}

//home.module.ts
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)]
})
export class HomePageModule {}
```

However, in V4, lazy loading is done via the `loadChildren` method of the Angular router:

```js
// home.module.ts
@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

// app.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Markup Changes

Since V4 moved to Custom Elements, there's been a significant change to the markup for each component.
These changes have all been made to follow the Custom Elements spec, and have been documented in a <a href="https://github.com/ionic-team/ionic/blob/master/angular/BREAKING.md#breaking-changes" target="_blank">dedicated file on Github</a>