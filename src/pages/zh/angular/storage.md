---
previousText: '测试'
previousUrl: '/docs/angular/testing'
nextText: '性能'
nextUrl: '/docs/angular/performance'
---

# 数据存储

有多种选项可用于在Ionic应用程序中存储数据。

## Ionic 离线存储

[Ionic离线存储](/docs/enterprise/offline-storage) 是一个可在 iOS 和 Android 上运行的跨平台数据 存储系统。 它使得将离线存储添加到安全的离线应用(在设备上加密)，表现良好，并提供高级的 NoSQL 数据查询。

为团队创建复杂的，数据驱动的应用程序，管理敏感数据的应用程序或在小区服务/互联网连接不可靠的区域中使用的应用程序而创建。 感兴趣吗？ [Start here.](https://ionicframework.com/offline-storage#get-started)

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

Next, install the package:
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
import { Storage } from '@ionic/storage';

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

<br><br>






#### driver

Get the name of the driver being used.


<br><br>



#### clear()
Clear the entire key value store. WARNING: HOT!

__Returns:__ Returns a promise that resolves when the store is cleared




<br><br>



#### forEach()
Iterate through each key,value pair.

__Returns:__ Returns a promise that resolves when the iteration has finished.

<h4>Parameters</h4>
<dl><dt><h5>iteratorCallback</h5></dt><dd>a callback of the form (value, key, iterationNumber)</dd></dl><br><br>



#### get()
Get the value associated with the given key.

__Returns:__ Returns a promise with the value of the given key

<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl><br><br>



#### keys()


__Returns:__ Returns a promise that resolves with the keys in the store.




<br><br>



#### length()


__Returns:__ Returns a promise that resolves with the number of keys stored.




<br><br>



#### ready()
Reflect the readiness of the store.

__Returns:__ Returns a promise that resolves when the store is ready




<br><br>



#### remove()
Remove any value associated with this key.

__Returns:__ Returns a promise that resolves when the value is removed

<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl><br><br>



#### set()
Set the value for the given key.

__Returns:__ Returns a promise that resolves when the key and value are set

<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd><dt><h5>value</h5><strong>Type:</strong> <code>any</code></dt><dd>the value for this key</dd></dl><br><br>
