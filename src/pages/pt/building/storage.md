---
previousText: 'Web View'
previousUrl: '/docs/building/webview'
---

# Data Storage

There are variety of options available for storing data within an Ionic app.

## Ionic Offline Storage

[Ionic Offline Storage](/docs/enterprise/offline-storage) is a cross-platform data storage system that works on iOS and Android. It makes it easy to add offline storage to Ionic apps that is secure (encrypted on device), highly performant, and provides advanced NoSQL data querying.

Created for teams building complex, data-driven apps, apps managing sensitive data, or apps used in areas with unreliable cell service/internet connections. Interested? [Start here.](https://ionicframework.com/offline-storage#get-started)

## Ionic Storage

Ionic Storage is a free, open source alternative for indie devs, students & hobbyists. It provides an easy way to store key/value pairs and JSON objects.

It uses a variety of storage engines underneath, picking the best one available depending on the platform:

* When running in a native app context, Storage will prioritize using SQLite, as it's one of the most stable and widely used file-based databases, and avoids some of the pitfalls of things like localstorage and IndexedDB, such as the OS deciding to clear out such data in low disk-space situations.
* When running in the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order.

### Usage

First, if you'd like to use SQLite, install the cordova-sqlite-storage plugin:

```bash
ionic cordova plugin add cordova-sqlite-storage
```

Next, install the package (comes by default for Ionic apps > Ionic V1):

```bash
npm install --save @ionic/storage
```

Next, add it to the imports list in your `NgModule` declaration (for example, in `src/app/app.module.ts`):

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
  ]
})
export class AppModule {}
```

Finally, inject it into any of your components or pages:

```typescript
import { Storage } from '@ionic/storage-angular';

export class MyApp {
  constructor(private storage: Storage) { }

  ...

  // set a key/value
  storage.set('name', 'Max');

  // Or to get a key/value pair
  storage.get('age').then((val) => {
    console.log('Your age is', val);
  });
}
```

### Configuring Storage

The Storage engine can be configured both with specific storage engine priorities, or custom configuration options to pass to localForage. See the localForage config docs for possible options: https://github.com/localForage/localForage#configuration

Note: Any custom configurations will be merged with the default configuration

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [...],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [...],
  entryComponents: [...],
   providers: [...]
})
export class AppModule { }
```

### Instance Members

#### constructor

Create a new Storage instance using the order of drivers and any additional config options to pass to LocalForage.

Possible driver options are: ['sqlite', 'indexeddb', 'websql', 'localstorage'] and the default is that exact ordering.

<br />  


#### driver

Get the name of the driver being used.

<br />  


#### clear()

Clear the entire key value store. WARNING: HOT!

**Returns:** Returns a promise that resolves when the store is cleared

<br />  


#### forEach()

Iterate through each key,value pair.

**Returns:** Returns a promise that resolves when the iteration has finished.

<h4>Parameters</h4>

<dl><dt><h5>iteratorCallback</h5></dt><dd>a callback of the form (value, key, iterationNumber)</dd></dl>

  
  


#### get()

Get the value associated with the given key.

**Returns:** Returns a promise with the value of the given key

<h4>Parameters</h4>

<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl>

  
  


#### keys()

**Returns:** Returns a promise that resolves with the keys in the store.

<br />  


#### length()

**Returns:** Returns a promise that resolves with the number of keys stored.

<br />  


#### ready()

Reflect the readiness of the store.

**Returns:** Returns a promise that resolves when the store is ready

<br />  


#### remove()

Remove any value associated with this key.

**Returns:** Returns a promise that resolves when the value is removed

<h4>Parameters</h4>

<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl>

  
  


#### set()

Set the value for the given key.

**Returns:** Returns a promise that resolves when the key and value are set

<h4>Parameters</h4>

<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd><dt><h5>value</h5><strong>Type:</strong> <code>any</code></dt><dd>the value for this key</dd></dl>

