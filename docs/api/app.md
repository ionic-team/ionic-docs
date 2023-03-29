---
title: "ion-app"
---
import Props from '@ionic-internal/component-api/v7/app/props.md';
import Events from '@ionic-internal/component-api/v7/app/events.md';
import Methods from '@ionic-internal/component-api/v7/app/methods.md';
import Parts from '@ionic-internal/component-api/v7/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/app/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/app/slots.md';

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-appは、Ionicアプリケーションのためのコンテナ要素です。アプリは、メニュー、ヘッダー、コンテンツ、フッターなど、多くのIonicコンポーネントを持つことができます。詳しくはこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


AppはIonicアプリケーションのコンテナ要素です。プロジェクトごとに `<ion-app>` 要素は1つだけにしてください。アプリケーションには、menus, headers, content, footersなど、多くのIonicコンポーネントを含めることができます。オーバーレイコンポーネントは、表示されるときに `<ion-app>` に追加されます。

`ion-app`を使用すると、以下の動作が可能になります。

* [キーボードライフサイクルイベント](../developing/keyboard#keyboard-lifecycle-events) は、ネイティブプラグインを必要なくなります。
* Android 端末のハードウェアバックボタンの動作をカスタマイズするための [Hardware Back Button Listeners](../developing/hardware-back-button) を使えます
* Capacitor や Cordova でステータスバーをサポートし、ステータスバーをタップすることでビューの最上部にスクロールできるようになります。
* テキスト入力が画面上のキーボードにかからないように、コンテンツをスクロールさせるスクロールアシストユーティリティが使えます。
* Material Design モードでのボタン操作時の[Ripple effect](./リップルエフェクト) が使えます。
* Ionicアプリの使用感をよりネイティブなものにする、その他のタップやフォーカスのユーティリティが使えます。


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
