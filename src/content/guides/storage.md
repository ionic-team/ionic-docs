---

---

# Storage

<p class="intro" markdown="1">
`ionic/storage` is a utility library for Ionic/Angular apps that provides a cross-platform API for browser and native devices using a simple key/value approach.
</p>
<p class="intro" markdown="1">
When `ionic/storage` detects that the context is a browser, it attempt to use IndexedDB or LocalStorage, depending on what is available. If the context is a native app, and the SQLite plugin is installed, `ionic/storage` will attempt to use native SQLite, IndexedDB, or LocalStorage. This storage strategy can be customized though.
</p>

## Using Storage

To add `ionic/storage`, run:

```shell
npm install --save @ionic/storage
```

Next add the `IonicStorageModule` to the app's imports.

```typescript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
})
export class AppModule {}
```

Now from a component, inject the `Storage` class and call `get` or `set`.

```typescript
import { Storage } from '@ionic/storage';

@Component(..)
export class HomePage {
  constructor(private storage: Storage) { }

  setVal(key, val){
    this.storage.set(key, val)
  }

  getVal(key){
    this.storage.get(key)
    .then(val => console.log(`Value from storage is ${val}`))
  }
}
```
