---
previousText: 'Web View'
previousUrl: '/docs/building/webview'
---

# Storage

Storage は、key/valueのペアとJSONオブジェクトを保存するための簡単な方法です。
Storage はデバイス上の様々なStorageエンジンを利用し、
プラットフォームに応じて利用できる最善のものを選択します。

ネイティブアプリケーション上で実行する場合、
Storageはもっとも安定して広く使用されているファイルベースのデータベースの1つである
SQLiteを使用することを優先し、ディスク容量が少ない状況ではOSがデータを削除することのある 
localstorage や IndexedDB といった落とし穴を避けます。

WebであったりProgressive Web Appとして実行している時は、
Storageは IndexedDB、WebSQL、およびlocalstorageの順に使用しようとします。


## Usage


もしSQLiteを使いたいときは、まずcordova-sqlite-storage プラグインをインストールします:
```bash
ionic cordova plugin add cordova-sqlite-storage
```

次に、パッケージをインストールします（Ionic V1よりもバージョンが新しい時に可能です）:
```bash
npm install --save @ionic/storage
```

そして、以下をあなたの `NgModule` デコレーションに追加します（例えば、 `src/app/app.module.ts` に追記ください）:

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

最後に、あなたのComponentsやpageに注入します:
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


### Storage の設定

Storageエンジンは、特定のストレージエンジンの優先順位、 localForageに渡す任意の設定の両方で構成されます。 localForageの設定ドキュメントについては、こちらをご覧ください:
https://github.com/localForage/localForage#configuration

Note: どのカスタム設定も、デフォルト設定とマージされます。

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


## Instance Members


### constructor

LocalForageに渡すドライバの順序とその他の設定オプションを使用して、
新しいStorageインスタンスを作成します。

利用可能なドライバオプション: ['sqlite', 'indexeddb', 'websql', 'localstorage'] 
そして、これはデフォルトの優先順です。

<br><br>






### driver

使用されているドライバの名前を取得します。


<br><br>



### clear()
保存されているすべてのデータを削除します。 WARNING: HOT!

__Returns:__ Returns a promise that resolves when the store is cleared




<br><br>



### forEach()
key, valueの値を順に取得します。

__Returns:__ Returns a promise that resolves when the iteration has finished.




<h4>Parameters</h4>
<dl><dt><h5>iteratorCallback</h5></dt><dd>a callback of the form (value, key, iterationNumber)</dd></dl><br><br>



### get()
keyを引数にいれることによって、valueを取得します。

__Returns:__ Returns a promise with the value of the given key




<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl><br><br>



### keys()


__Returns:__ Returns a promise that resolves with the keys in the store.




<br><br>



### length()


__Returns:__ Returns a promise that resolves with the number of keys stored.




<br><br>



### ready()
storeが利用可能になったことを反映します。

__Returns:__ Returns a promise that resolves when the store is ready




<br><br>



### remove()
keyを引数にわたすことで、valueを削除します。

__Returns:__ Returns a promise that resolves when the value is removed




<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd></dl><br><br>



### set()
keyを引数にわたすことでvalueを保存します。

__Returns:__ Returns a promise that resolves when the key and value are set




<h4>Parameters</h4>
<dl><dt><h5>key</h5><strong>Type:</strong> <code>string</code></dt><dd>the key to identify this value</dd><dt><h5>value</h5><strong>Type:</strong> <code>any</code></dt><dd>the value for this key</dd></dl><br><br>
