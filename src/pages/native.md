# Ionic Native
Ionic Native is a curated set of Cordova plugins that make it easy to add native functionality to any Ionic app.

These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, [please see here](http://ionicframework.com/docs/v3/native/).

## Community Edition
Ionic Native CE is a set of open source plugins maintained by community contributors.
Ionic does not maintain, fix, improve, or provide any guarantee that these plugins function.

## Enterprise Edition
For teams that require dedicated native plugin support, fixes, improvements, or implementation guidance, Ionic Native EE is available.

Here's a feature comparison:

<div class="native-ee-pricing">
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <td>
            <h2>Features</h2>
          </td>
          <th>
            <div class="plan-wrap"> 
              <h2>Community Edition</h2>
              <div class="price"><strong>$0</strong>/mo</div>
            </div>
          </th>
          <th>
            <div class="plan-wrap">
              <h2>Enterprise Edition</h2>
              <div class="price" data-toggle="billing-team">
                Starting at <strong>$5k</strong>/year</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="stripe">
          <th>
            Maintainer
          </th>
          <td>OSS Community</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <th>
            Regular Release Cycles & Updates
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Support SLA & Ticketing System
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Advisory & Support
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Security & Bug fixes 
          </th>
          <td>OSS Community</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Implementation Guidance
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Guaranteed SLA
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th></th>
          <td></td>
          <td><a style="background-color: #213049; color: #cddfff;"
                href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Usage
All plugins have two components - the native code (Cordova) and the JavaScript code.
Cordova plugins are also wrapped in a `Promise` or `Observable` in order to provide a common plugin interface.
Below are various framework options using the Camera plugin as an example.

## Angular
Import the plugin in a `@NgModule` and add it to the list of Providers. For Angular, the import path should end with `/ngx`.  Angular's change detection is automatically handled.

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

After the plugin has been declared, it can be imported and injected like any other service:

```typescript
// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo
      
    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }
}
```

## Vanilla JavaScript
Ionic Native can also be used in a vanilla JavaScript app targeting ES2015+ and/or TypeScript. To use any plugin, import the class from the appropriate package and use its static methods:

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```