# Runtime Issues

## Blank App

:::note
I have no errors in my app. Why does it show a blank screen?
:::

There are several different reasons this can happen. If you are unable to find a solution on the [Ionic forums](https://forum.ionicframework.com), make sure:

- Polyfills are not included for older browser/versions of android

For projects with `@angular/cli@7.3` or above, polyfills will automatically be included. For project created before that, polyfills need to be manually enabled.

In `src/polyfills.ts`, you must enabled all ES6 polyfills for Android 4.4 support.

Alternatively, a project could be updated to use the latest release of the `@angular/cli` package & `@angular-devkit` packages and include the `es5BrowserSupport` option in the `angular.json`'s build options object:

```diff
        "input": "src/global.scss"
      }
    ],
-   "scripts": []
+   "scripts": [],
+   "es5BrowserSupport": true
  },
  "configurations": {
    "production": {
```

This will automatically include the polyfills for older browsers that need them.

## Directive Not Working

:::note
Why is my custom component/directive not working?
:::

There are a few things you can check. Make sure:

- Your selector doesn't have any misspellings.
- You're using the selector correctly as an attribute, element or class.
- Your selector has the proper syntax:
  - `[attr]` if it's an attribute selector
  - `element` if it's an element selector
  - `.class` if it's a class selector

Here's an example using an attribute selector:

```tsx
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it is an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // We add my-dir as an attribute to match the directive's selector
  template: `<div my-dir>Hello World</div>`,

  // Alternatively, if you were attaching the directive to an element it would be:
  // template: `<my-dir>Hello World</my-dir>`
  // and if you were attaching by class the template would be:
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- Don't forget me! (only if your ionic-angular version is below RC0)
})
class MyPage { }
```

## Click Delays

:::note
Why is there a delay on my click event?
:::

In general, we recommend only adding `(click)` events to elements that are
normally clickable. This includes `<button>` and `<a>` elements. This improves
accessibility as a screen reader will be able to tell that the element is
clickable.

However, you may need to add a `(click)` event to an element that is not
normally clickable. When you do this you may experience a `300ms` delay from the
time you click the element to the event firing. To remove this delay, you can
add the `tappable` attribute to your element.

```html
<div tappable (click)="doClick()">I am clickable!</div>
```

## Angular Change Detection

:::note
Why does Angular change detection run very frequently when my components are initializing?
:::

Angular uses a library called [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/)
which helps it determine when to run change detection.

As of zone.js `0.8.27`, certain APIs for Web Components also cause change
detection to run. This can have the undesirable side effect of your app
slowing down when a large number of components are initializing.

To prevent this from happening, the zone.js flag that manages this portion of
change detection can be disabled. In the `src` directory of your application,
create a file called `zone-flags.ts`. Place the following code into the file:

```tsx
(window as any).__Zone_disable_customElements = true;
```

The `zone-flags.ts` file then needs to be imported into your application's
`polyfills.ts` file. Be sure to import it _before_ `zone.js` is imported:

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // Included with Angular CLI

...
```

This change will only affect applications that depend on zone.js `0.8.27` or
newer. Older versions will not be affected by this change.

:::note
This flag is automatically included when creating an Ionic app via
:::
the Ionic CLI.

## Cordova plugins not working in the browser

At some point in your development you may, try to call Cordova plugin, but get a
warning:

```shell
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

This happens when you try to call a native plugin, but Cordova isn't available.
Thankfully, Ionic Native will print out a nice warning, instead of an error.

In other cases where the plugin is not being used through Ionic Native, plugins
can print a much more obscure warning.

```shell
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

If this happens, test the plugin on a real device or simulator.

## Multiple instances of a provider

If you inject a provider in every component because you want it available to all
of them you will end up with multiple instances of the provider. You should
inject the provider once in the parent component if you want it to be available
to the child components.

```tsx
let id = 0;
export class MyService {
  id: number;

  constructor() {
    this.id = id++;
  }
}

@Component({
  selector: 'my-component',
  template: 'Hello World',
  providers: [MyService], // <-- Creates a new instance of MyService :(
}) // Unnecessary because MyService is in App's providers
class MyComp {
  // id is 1, s is a different MyService instance than MyApp
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService only needs to be here
  directives: [MyComp],
})
class MyApp {
  // id is 0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```
