# Ionic Native

<p class="intro" markdown="1">
Ionic Native is a curated set of community-created wrappers for Cordova plugins that makes adding native functionality to an Ionic app easy.
Ionic Native wraps Cordova plugins in a Promise or Observable, providing a common interface for all plugins, and dealing with Angular's change detection.
</p>

<blockquote>
  <p>Ionic Native is largely a set of <i>community maintained</i> plugins, and while the community is quick to find and fix issues, certain plugins may not function properly. For teams that require dedicated Native plugin support, the Ionic team has options available. Please <a href="mailto:sales@ionicframework.com">contact us</a> for more information.</p>
</blockquote>

## Usage with Angular apps

To use a plugin, import and add the plugin injectable to a `@NgModule`. For Angular, the import path should end with `/ngx`.

```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera/ngx';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

After the plugin has been declared, it can be imported and injected like any other service.

```typescript
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({ ... })
export class MyComponent {

  constructor(private geolocation: Geolocation, private platform: Platform) {

    platform.ready().then(() => {

      // get position
      geolocation.getCurrentPosition().then(pos => {
        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)
      });


      // watch position
      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log(`lat: ${pos.coords.latitude}, lon: ${pos.coords.longitude}`)
        this.position = pos;
      });

      // to stop watching
      watch.unsubscribe();
    });

  }

}
```

## Usage with ES2015+/TypeScript

Ionic Native can also be used a vanilla JS app with ES2015+/Typescript. To use any plugin, import the class from the appropriate package, and use it's static methods.

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```
