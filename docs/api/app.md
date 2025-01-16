---
title: "ion-app"
---
import Props from '@ionic-internal/component-api/v8/app/props.md';
import Events from '@ionic-internal/component-api/v8/app/events.md';
import Methods from '@ionic-internal/component-api/v8/app/methods.md';
import Parts from '@ionic-internal/component-api/v8/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/app/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/app/slots.md';

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-appは、Ionicアプリケーションのためのコンテナ要素です。アプリは、メニュー、ヘッダー、コンテンツ、フッターなど、多くのIonicコンポーネントを持つことができます。詳しくはこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

AppはIonicアプリケーションのコンテナ要素です。1つのプロジェクトにつき`<ion-app>`要素は1つだけです。アプリはメニュー、ヘッダー、コンテンツ、フッターなど多くのIonicコンポーネントを持つことができます。オーバーレイコンポーネントは表示時に `<ion-app>` に追加されます。

`ion-app`を使用すると、以下の動作が可能になります。

* [キーボードライフサイクルイベント](../developing/keyboard#keyboard-lifecycle-events) は、ネイティブプラグインを必要なくなります。
* Android 端末のハードウェアバックボタンの動作をカスタマイズするための [Hardware Back Button Listeners](../developing/hardware-back-button) を使えます
* Capacitor や Cordova でステータスバーをサポートし、ステータスバーをタップすることでビューの最上部にスクロールできるようになります。
* テキスト入力が画面上のキーボードにかからないように、コンテンツをスクロールさせるスクロールアシストユーティリティが使えます。
* Material Design モードでのボタン操作時の[Ripple effect](./リップルエフェクト) が使えます。
* Ionicアプリの使用感をよりネイティブなものにする、その他のタップやフォーカスのユーティリティが使えます。

## Programmatic Focus

Ionic offers focus utilities for components with the `ion-focusable` class. These utilities automatically manage focus for components when certain keyboard keys, like <kbd>Tab</kbd>, are pressed. Components can also be programmatically focused in response to user actions using the `setFocus` method from `ion-app`.

import SetFocus from '@site/static/usage/v8/app/set-focus/index.md';

<SetFocus />

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
