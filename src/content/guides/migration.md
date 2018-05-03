---

---

# Migration Guide

## Project structure

One of the major changes between an Ionic 3 app and an Ionic 4 app is the over all project layout and structure. In V3, Ionic apps had a custom convention for how an app should be setup and what that folder structure should look like. In V4, this has been changed to follows a typical setup of each framework supported. 

For example, if an app is using Angular, that project structure will be exactly what an Angular CLI app would be. This change, while not too difficult to accommodate, helps to keep common patterns and documentation consistent.

![A V4 project on the left and a V3 project on the right](../assets/guides/migration/v4-v3-project-setup.png)

The above comparison shows an example project structure of the newer V4 layout (left). For developers with experience in a vanilla Angular project, this should feel really familiar.
There is a `src` directory that acts as the home for the app. This includes the `index.html`, any assets, environment variables, and any app specific config files. Compared to a V3 project which is slightly different.

While migrating an app to take advantage of this new layout, it is suggested that a new project "base" is made with the CLI. Then, with the new project layout, migrate the features of the app piece by piece.

Be aware that pages/components/etc have moved to inside the app folder because `app` is now the home for all of the Angular specific code.

## Changes in Package Name

Another change in V4 is the actual package name of Ionic. For V4, the package name is now `@ionic/angular`. While you migrate an app, update the imports from `ionic-angular` to `@ionic/angular`.

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

## Modifications to Overlays

Overlays in V4 are quite similar to V3, however they now return promises instead of components. Here is a V3 example:

```js
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

// Or if you like async/await

async showAlert(){
  let alert = await this.alertCtrl.create({
    message: "Hello There",
    subHeader: "I'm a subheader"
  })
alert.present()
```

## Markup Changes

Since V4 moved to Custom Elements, there's been a significant change to the markup for each component.
These changes have all been made to follow the Custom Elements spec, and have been documented in a <a href="https://github.com/ionic-team/ionic/blob/master/angular/BREAKING.md#breaking-changes" target="_blank">dedicated file on Github</a>