---
previousText: 'Environment Setup'
previousUrl: '/docs/installation/environment'
nextText: 'Android Setup'
nextUrl: '/docs/installation/android'
---

# iOS セットアップ

iOSをターゲットにするには、追加の環境設定が必要です。残念ながら、iOSアプリはmacOS上でしか作成できません。

## Xcode

<a href="https://developer.apple.com/xcode/" target="_blank">Xcode</a>は、ネイティブiOSアプリを作成するためのIDEです。iOS SDKとXcodeのコマンドラインツールが含まれています。XcodeはAppleアカウントをつかって<a href="https://developer.apple.com/download/" target="_blank">無料でダウンロード</a>できます。App Storeからもインストールできます。

<blockquote>
  <p>XCode 9を使用することをお勧めします。CordovaでのXcode 10サポートはまだ進行中です。詳細は<a href="https://github.com/apache/cordova-ios/issues/407" target="_blank">このIssue</a>をご覧ください。</p>
</blockquote>


### Development Team の設定

すべてのiOSアプリは、開発用であっても code signed （署名）されている必要があります。幸いなことに、Xcodeは automatic code signing によってこれを容易にします。唯一の前提条件はApple IDを用意していることです。

Xcodeを開き、 **Xcode** &raquo; **Preferences** &raquo; **Accounts** に移動します。アカウントがリストにない場合は、Apple IDを追加してください。ログインすると、Personal TeamがApple IDのチームリストに表示されます。

![Xcode Accounts](/docs/assets/img/installation/ios-xcode-accounts.png)

### iOS Simulator の作成

iOSシミュレータは、Mac上でiOSデバイスをエミュレートします。次のドキュメントはiOSシミュレータをセットアップするための簡単な方法です。詳しくは、 <a href="https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html" target="_blank">Apple's documentation</a> を参照してください。

Xcodeを開き、**Window** &raquo; **Devices and Simulators** に移動します。**iPhone X** のシュミレーターがまだ存在しない場合は作成します。

![iOS Simulators](/docs/assets/img/installation/ios-xcode-simulators-setup.png)

## ios-sim & ios-deploy

<a href="https://github.com/phonegap/ios-sim" target="_blank">`ios-sim`</a> と <a href="https://github.com/phonegap/ios-deploy" target="_blank">`ios-deploy`</a> は開発中のiOSシミュレータとiOSデバイスにアプリケーションを配備するユーティリティです。それらは [npm](/docs/faq/glossary#npm) を使って、グローバルにインストールすることができます

```shell
$ npm install -g ios-sim
$ npm install -g ios-deploy
```
