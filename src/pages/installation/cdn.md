---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
---

# Ionic Packages

Ionicをインストールする方法は、あなたがAngularを使うのか、他のフレームワークを使うのか（もしくは使わないのか）によって変わります。

## AngularでIonicをつかう

Angularを使うときは、npmから `@ionic/angular` パッケージをインストールしてください。これには、すべてのIonicコンポーネントと、IonicをAngularで使うための機能が含まれています。

```shell
$ npm install @ionic/angular@latest --save
```

Each time there is a new Ionic release, the [version](/docs/intro/versioning) will increment. The version can be [updated using npm](/docs/faq/tips#updating-dependencies), as well.


## CDNでIonicをつかう

Ionicは、簡単に`<script>`タグを使用してCDNから直接利用することもできます。

CDNをつかってIonic Frameworkにアクセスするためには、[unpkg](https://unpkg.com)を使うことをおすすめします。最新版を入手するには、HTMLファイルの`<head></head>`要素内に`script`タグを追加します。

```html
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
```

これで、何もインストールしなくても、すべてのIonicコンポーネントを利用することができます。

<blockquote>
  <p>
    これはAngularなどフレームワークをインストールしません。`<script>`タグを利用することにより、何もインストールしなくてもIonicコンポーネントを使用できます。
  </p>
</blockquote>


## CDNでIoniconsをつかう

Ionic Frameworkを使用している場合、Ioniconsはデフォルトでパッケージに含まれているので、インストールは不要です。もしIonic FrameworkなしにIoniconsを使う場合は、次の`<script>`のコードを閉じタグ`</body>`の直前に配置します。

```html
<script src="https://unpkg.com/ionicons@4.0.0/dist/ionicons.js"></script>
```

