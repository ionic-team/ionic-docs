---
title: "ion-app"
---
import Props from '@site/static/auto-generated/app/props.md';
import Events from '@site/static/auto-generated/app/events.md';
import Methods from '@site/static/auto-generated/app/methods.md';
import Parts from '@site/static/auto-generated/app/parts.md';
import CustomProps from '@site/static/auto-generated/app/custom-props.md';
import Slots from '@site/static/auto-generated/app/slots.md';

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-appは、Ionicアプリケーションのためのコンテナ要素です。アプリは、メニュー、ヘッダー、コンテンツ、フッターなど、多くのIonicコンポーネントを持つことができます。詳しくはこちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


AppはIonicアプリケーションのコンテナ要素です。プロジェクトごとに `<ion-app>` 要素は1つだけにしてください。アプリケーションには、menus, headers, content, footersなど、多くのIonicコンポーネントを含めることができます。オーバーレイコンポーネントは、表示されるときに `<ion-app>` に追加されます。

Using `ion-app` enables the following behaviors:

* [Keyboard Lifecycle Events](../developing/keyboard#keyboard-lifecycle-events) without the need for any native plugins
* [Hardware Back Button Listeners](../developing/hardware-back-button) for customizing the hardware back button behavior on Android devices
* Status bar support in Capacitor or Cordova which allows users to scroll to the top of the view by tapping the status bar
* Scroll assist utilities which scroll the content so focused text inputs are not covered by the on-screen keyboard
* [Ripple effect](./ripple-effect) when activating buttons on Material Design mode
* Other tap and focus utilities which make the experience of using an Ionic app feel more native


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
