---
title: "ion-refresher"
---
import Props from '@ionic-internal/component-api/v7/refresher/props.md';
import Events from '@ionic-internal/component-api/v7/refresher/events.md';
import Methods from '@ionic-internal/component-api/v7/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v7/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/refresher/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/refresher/slots.md';

<head>
  <title>ion-refresher: Pull-to-Refresh Page Content on Ionic Apps</title>
  <meta name="description" content="ion-refresherは、コンテンツコンポーネントにpull-to-refresh機能を提供します。これにより、ユーザーはタッチ操作でページをプルダウンし、より多くのデータを取得することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


リフレッシャーは、コンテンツコンポーネントにプルトゥリフレッシュ機能を提供します。pull-to-refreshパターンは、ユーザがより多くのデータを取得するために、データのリストをプルダウンすることを可能にします。

データは、リフレッシャーの出力イベント中に変更する必要があります。非同期処理が完了し、リフレッシュが終了したら、リフレッシュに対して `complete()` を呼び出す必要があります。


## 基本的な使い方

import Basic from '@site/static/usage/v7/refresher/basic/index.md';

<Basic />


## Pull プロパティ

リフレッシャーには、引くジェスチャーをカスタマイズするためのプロパティがいくつかあります。 `pullFactor` プロパティを設定すると引っ張るスピードを、`pullMin` プロパティを設定するとユーザが引っ張る最小距離を、`pullMax` プロパティを設定するとリフレッシャーが `refreshing` 状態になる前にユーザが引っ張る最大距離を変更することができます。

これらのプロパティは、[native refresher](#native-refreshers)が有効な場合には適用されません。

import PullProperties from '@site/static/usage/v7/refresher/pull-properties/index.md';

<PullProperties />


## カスタムリフレッシャーコンテンツ

デフォルトのアイコン、スピナー、テキストは、リフレッシャーの状態が `pulling` か `refreshing` かによって、[リフレッシャーコンテンツ](./refresher-content) 上でカスタマイズすることができます。

`pullingIcon`を設定すると、[native refresher](#native-refreshers)が無効になります。

import CustomContent from '@site/static/usage/v7/refresher/custom-content/index.md';

<CustomContent />


## Native Refreshers

iOSとAndroidの両プラットフォームは、pull-to-refreshにネイティブのような流動的な感覚を与えるために、それぞれのデバイスが公開するプロパティを使用するリフレッシュ機能を提供します。

iOSとMaterial Designのネイティブリフレッシュ機能は、Ionicのデフォルトで有効になっています。ただし、iOSネイティブのリフレッシュ機能は、正しく動作するためにラバーバンドスクロールに依存しており、結果としてiOSデバイスとのみ互換性があります。ラバーバンドスクロールをサポートしていないデバイスでiOSモードで動作するアプリのために、フォールバックリフレッシャーを提供しています。

ネイティブのリフレッシャーでは、マテリアルデザイン用の `circular` スピナーを使用しますが、iOS では `lines` スピナーを使用します。iOSでは、ティックマークはページが下に引っ張られるにつれて徐々に表示されます。

[Pullプロパティ](#pull-properties)、`closeDuration`、`snapbackDuration`のような特定のリフレッシャープロパティは、ネイティブリフレッシャーの多くがスクロールベースであるため、互換性がありません。サポートされていないプロパティの詳細については、[Properties](#properties)を参照してください。

[リフレッシュコンテンツ](#custom-refresher-content)の `pullingIcon` を任意のアイコンまたはスピナーに設定することで、ネイティブリフレッシュモードを無効にすることができます。使用可能な値については、[Ionicons](https://ionic.io/ionicons) および [Spinner](./spinner) のドキュメントを参照してください。


## Usage with Virtual Scroll

Refresher が機能するためには、スクロールコンテナが必要です。仮想スクロールを使用する場合は、`ion-content` のスクロールを無効にし、`.ion-content-scroll-host` クラスターゲットで、どの要素コンテナがスクロールコンテナを担当するかを指定する必要があります。

import CustomScrollTarget from '@site/static/usage/v7/refresher/custom-scroll-target/index.md';

<CustomScrollTarget />


## 高度な使用法

リフレッシャーはどのようなタイプのコンテンツでも使用できますが、ネイティブアプリでよくある使用例は、更新時に更新されるデータのリストを表示することです。以下の例では、アプリはデータのリストを生成し、更新が完了したときにリストの先頭にデータを追加します。実際のアプリでは、ネットワークまたはデータベース呼び出しによってリクエストを送信した後に、データを受信して更新します。

import Advanced from '@site/static/usage/v7/refresher/advanced/index.md';

<Advanced />


## Interfaces

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void;
}
```

### RefresherCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
  target: HTMLIonRefresherElement;
}
```

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
