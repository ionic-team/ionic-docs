---
previousText: '测试'
previousUrl: '/docs/angular/testing'
nextText: '性能'
nextUrl: '/docs/angular/performance'
---

# 数据存储

有多种选项可用于在Ionic应用程序中存储数据。

## Ionic Offline Storage

[Ionic Offline Storage](/docs/enterprise/offline-storage) 是一个可在 iOS 和 Android 上运行的跨平台数据 存储系统。 它使得将离线存储添加到安全的离线应用(在设备上加密)，表现良好，并提供高级的 NoSQL 数据查询。

为团队创建复杂的，数据驱动的应用程序，管理敏感数据的应用程序或在小区服务/互联网连接不可靠的区域中使用的应用程序而创建。 感兴趣吗？ [点击这里开始](https://ionicframework.com/offline-storage#get-started)

## Ionic Storage

Ionic Storage 是独立开发者，学生和业余爱好者的免费开源替代方案。 它为存储密钥/值对和 JSON 对象提供了一个容易的方法。

它在下方使用各种存储引擎，根据平台选择最好的引擎：

* 在本机应用程序中运行时，存储将使用 SQLite 进行优先级排序，因为它是最稳定且使用最广泛的基于文件的数据库之一，并且避免了诸如 localstorage 和 IndexedDB 之类的某些陷阱，例如OS决定清除磁盘空间不足情况下的此类数据。
* 在网络中运行或作为渐进式Web应用程序运行时，Storage会尝试按该顺序使用IndexedDB，WebSQL和localstorage。

### 用法

首先，如果你想要使用 SQLite，请安装 cordova-sqlite-stockage 插件：
```bash
ionic cordova plugin add cordova-sqlite-storage
```

接下来，安装软件包：
```bash
npm install --save @ionic/storage
```

接下来，在您的 `NgModule` 声明中将其添加到导入列表中(例如，在 `src/app/app.module.ts` 中)：

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

最后，注入到您的任何组件或页面：
```typescript
import { Storage } from '@ionic/storage';

export class MyApp {
  constructor(private storage: Storage) { }

  ...

  // 设置键/值
  storage.set('name', 'Max');

  // 或获取键/值对
  storage.get('age').then((val) => {
    console.log('Your age is', val);
  });
}
```


### 配置存储

可以使用特定的存储引擎优先级或自定义配置选项来配置存储引擎，以传递给localForage。 请参阅localForage配置文档以获取可能的选项：https://github.com/localForage/localForage#configation

注意：任何自定义配置都将与默认配置合并

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


### 实例成员


#### 构造器

创建一个新的存储实例使用驱动程序的顺序和任何附加配置选项传递到 LocalForage。

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
