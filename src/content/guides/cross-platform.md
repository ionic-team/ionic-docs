---

---

# Cross Platform

<p class="intro" markdown="1">
Ionic is built from the ground up to make cross platform development easy. Ionic apps can be deployed to Native Android, iOS, Progressive Web Apps and Electron, all from one codebase. There are some points to keep in mind when optimizing your app to work across these platforms.
</p>

## Cordova Plugins

In a native environment, it's common to make calls to some type of native API. But in a web environment, such as when an app is running as a PWA, these API calls won’t work because there’s no native bridge. There are a few way to handle this.

### Use Ionic Native plugins

<strong>Ionic Native</strong> has its own internal logic to detect if it is inside of a native environment. Instead of throwing a runtime error, it will simply print a warning of the situation if it is not and Cordova plugins are not available. This way the app won’t break and will continue to work - although without the native functionality.

### Detect native platform

In an app’s logic, whenever it is needed to make a native API call, it is recommended to always check the status of the native environment first. For example:

```typescript
this.platform.ready()
.then(() => {
    if(this.platform.is('cordova')) {
      // make your native calls
    } else {
      // fall back to browser APIs
    }
})
```

This bit of code can be incredibly helpful when targeting environments where access to the native APIs is uncertain.

### Fallback to browser based APIs

Many native APIs that people tend to use (for example, the File API), are simply available in the browser. The APIs are always improving and catching up to native, so it is recommended to research them. Taking the first two points into consideration, it's fairly easy to create a nice experience that will adapt for the platform an app is run on.


## Desktop

When planning to deploy an app to desktop either using <a href="https://electronjs.org" target="_blank">Electron</a> or as a <strong>PWA</strong> it is important to ensure the app works smoothly on larger devices.

### Layout
Many people rarely notice the layout of an app, but it can have a massive impact on experience and usability. Consider this pretty common UI pattern:

```html
<ion-content>
  <ion-list>
    <ion-item>Item 1</ion-item>
    <ion-item>Item 2</ion-item>
    <ion-item>Item 3</ion-item>
    <ion-item>Item 4</ion-item>
    <ion-item>Item 5</ion-item>
  </ion-list>
</ion-content>
```
This will render 5 list items with a width of 100% each. This may look great on a mobile device, but viewing this on a desktop browser is a different story. While mobile devices all have different screen sizes, they tend to fall into a range of 350px - 600px in width. Compare that to a desktop screen size of anywhere between 720px to 1080px, and sometimes even more, and the experience is drastically different.

The items become stretched and distorted because of the wide screen width. To improve this experience consider using the `ion-grid` component.

This list view can be easily rewritten into something more usable on larger screens:

```html
<ion-content>
  <ion-grid fixed>
    <ion-list>
      <ion-item>Item 1</ion-item>
      <ion-item>Item 2</ion-item>
      <ion-item>Item 3</ion-item>
      <ion-item>Item 4</ion-item>
      <ion-item>Item 5</ion-item>
    </ion-list>
  </ion-grid>
</ion-content>
```

By wrapping the list in an `ion-grid` element, the Ionic grid system is added to our layout. Adding the fixed attribute to the grid element tells it to have a fixed width based on the screen size. Having a fixed width is perfect for larger screens.

The grid can do more with the addition of the `ion-row` and `ion-col` elements. Similar to projects like Bootstrap, a grid layout is defined where the columns in the grid are sized at certain breakpoints.

```html
<ion-grid>
  <ion-row>
    <ion-col
      col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3
      *ngFor="let item of [1,2,3,4,5]">
      <ion-card>Item </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
```

There’s a lot going on in the example above. These are the key points:

- The `ion-col` gets its width from the `col-{size}` attributes added to it, where `{size}` is the number of columns to take up out of the total available columns. The default number of available columns is 12.

- The `col-` attribute can have a breakpoint added before the size, `col-{breakpoint}-{size}`. This sets the size for the specified breakpoint and above.

- If a size without a breakpoint argument is applied, it assumes the smallest break point, xs, so `col-12` === `col-xs-12`.
A living example of this is the example app, <strong>Ionic Conference</strong> which uses the grid for it’s speaker view.

## Storage

Most apps at some point will need to store some sort of data locally. Whether it’s storing some json from an XHR request, or saving an auth token, there are many different storage options available. On top of this, the app is running in a native environment, it is possible to create a full SQLite database and store data there. All of these different storage mechanisms have their own advantages and disadvantages, but Ionic developers should not have to worry about that.

### Ionic Storage module

In this case, <a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic’s Storage library</a> is a perfect candidate for the multi-environment use case. Built on top of the well tested LocalForage library, Ionic’s storage class provides an adaptable storage mechanism that will pick the best storage solution for the current run time.

Currently this means it will run through SQLite for native, IndexedDB (if available), WebSql, or Local Storage. By handling all of this, it writing to storage using a stable API.

```typescript
class MyClass {
  constructor(public storage: Storage) {}

  setData(key, value) {
    this.storage.set(key, value)
    .then(res => console.log(res))
  }
  getData(key) {
    this.storage.get(key)
    .then(keyVal => console.log('Key is', keyVal))
  }
}
```

There are other storage solutions out there as well, such as PouchDB, which provide a similar, adaptable storage mechanism.
