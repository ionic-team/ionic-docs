---
previousText: 'Android, iOS, and the Camera - Oh My!'
previousUrl: '/docs/developer-resources/guides/first-app-v4/ios-android-camera'
nextText: 'Theming'
nextUrl: '/docs/developer-resources/guides/first-app-v4/theming'
---

# Creating a Photo Gallery with Device Storage

<p class="intro">
Last time, we successfully added the Camera plugin to the About page of our Tabs app. Currently, the photo is replaced each time a new one is taken. What if we wanted to display multiple photos together? Let’s create a photo gallery. You can follow along with the complete code for this [on GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4).
</p>

## Creating a Dedicated Photo Service
From a terminal window, navigate to your Ionic project and run:

```shell
$ ionic g service services/Photo
```

This creates a PhotoService class in a dedicated "services" folder:

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

Within this class, add a Photo class. The “data” property represents the base64 image data of a captured photo:

```Javascript
class Photo {
  data: any;
}
```

Then, create a Photos array to represent our photo gallery:

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

Back in `about.page.ts`, import PhotoService:

```Javascript
import { PhotoService } from '../services/photo.service';
```

Add it to the Constructor:

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

Next, move all code pertaining to the Camera plugin to the PhotoService class. This includes the takePicture method, the Camera import, and the About page constructor.

Continuing on, we need to convert currentImage variable references to the new photos array. Start by adding the captured photo data into the photos array:

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // Add new photo to gallery
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // Handle error
    console.log("Camera issue: " + err);
});
```

In `about.page.ts`, remove the currentImage variable and the reference to Camera in the constructor, leaving only PhotoService:

```Javascript
export class AboutPage {
  constructor(public photoService: PhotoService) {  }
}
```

Next, in `about.page.html`, remove the currentImage img tag. In its place, use an ion-grid component, which provides a great way to arrange elements on a page. In this case, we’ll use it to display 2 photos per row.

```html
<ion-grid>
  <ion-row>
  <ion-col col-6 *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
      </ion-col>
  </ion-row>
</ion-grid>
```

Here, we loop through each photo in the PhotoServices photos array, adding a new column for each. Since an ion-row consists of 12 “blocks” of space, and we’re setting the size to 6 (“col-6”), only 2 photos are displayed per row.

Last, update the Fab button to call the PhotoService’s `takePicture` method:

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

Excellent! We now have a basic photo gallery working.

## Saving photos to the device

Having a working photo gallery is pretty cool, but you’ll likely notice that when the app is closed, the photos are lost forever. That’s no good, so let’s add the [Ionic Storage plugin](https://ionicframework.com/docs/storage/), as easy way to store key/value pairs and JSON objects. When running in a native app context, Storage will prioritize using SQLite, one of the most stable and widely used file-based databases. When running on the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order.

The Storage plugin works perfectly for our base64 image data. To begin, add the SQLite plugin for native:

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

Next, add the JavaScript library for the web:

```shell
$ npm install --save @ionic/storage
```

Last, import the Storage module and add it to the imports list in `app.module.ts`:

```Javascript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

It’s now ready to be used in our PhotoService class. Import it:

```Javascript
import { Storage } from '@ionic/storage';
```

Then inject it via the constructor:

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

To add the capability to save photos, there’s only a couple steps left. Update the `takePicture()` method to save the entire photos array after each photo is taken using the storage.set method:

```Javascript
this.camera.getPicture(options).then((imageData) => {
  // Add new photo to gallery
  this.photos.unshift({
    data: 'data:image/jpeg;base64,' + imageData
  });

  // Save all photos for later viewing
  this.storage.set('photos', this.photos);
}, (err) => {
  // Handle error
  console.log("Camera issue: " + err);
});
```

We still need to load the saved photos when the app is first opened. This is simple enough - retrieve the “photos” key then assign its value to the photos array:

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

Over in the About page, call the loadSaved method once it begins loading:

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

Sweet! Photos are now saved to your device. To demonstrate that they are indeed being saved, force close DevApp, reopen it, and open the About page.  Or, shake your device to have the Control Menu pop up, then tap “Exit preview.” Afterwards, reload this app to view the photos.

Finally, back up your changes to Ionic Pro:

```shell
git add .
git commit -m "implemented photo gallery"
git push ionic master
```

Next up, we’ll look at how to apply a custom theme to an Ionic app.