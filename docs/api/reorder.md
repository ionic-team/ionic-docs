---
title: "ion-reorder"
---
import Props from '@ionic-internal/component-api/v8/reorder/props.md';
import Events from '@ionic-internal/component-api/v8/reorder/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder/slots.md';

<head>
  <title>ion-reorder: Drag and Drop Icon to Reorder Items</title>
  <meta name="description" content="ion-reorderは、ion-reorder-groupの中のアイテムをドラッグ＆ドロップするために使用されるアンカーです。カスタム並び替えアイコンとアイテムの詳細については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Reorderは、アイテムのグループ内での順序を変更するためにアイテムをドラッグできるようにするコンポーネントです。視覚的なドラッグ＆ドロップのインターフェイスを提供するために、[reorder group](./reorder-group)内で使用されなければなりません。

Reorderはアイテムをドラッグ＆ドロップするためのアンカーです。reorderが完了すると、reorder groupから `ionItemReorder` イベントがdispatchされ、`complete` メソッドを呼び出す必要があります。


## 基本的な使い方

Reorderの最も基本的な例は、アイテムの中にスロットを入れることです。デフォルトでは、reorder groupのreorder機能は無効になっています。reorder groupの `disabled` プロパティを `false` に設定することで有効にすることができます。Reorderアイコンを使ってアイテムをドラッグ＆ドロップし、並び替えることができます。

import Basic from '@site/static/usage/v8/reorder/basic/index.md';

<Basic />


## 並べ替えの切り替え

場合によっては、並べ替えの機能を切り替えるオプションが欲しいかもしれない。これは、関数や変数に基づいて `disabled` プロパティをリアクティブにすることで実現できます。

import TogglingDisabled from '@site/static/usage/v8/reorder/toggling-disabled/index.md';

<TogglingDisabled />


## Custom Reorder Icon

Reorderコンポーネントは、iOSでは3行、Material Designでは2行のReorderアイコンを使用しています。これは、利用可能なIoniconのいずれかを使って、Reorderの中に[Icon](https://ionic.io/ionicons)コンポーネントを追加することでカスタマイズできます。

import CustomIcon from '@site/static/usage/v8/reorder/custom-icon/index.md';

<CustomIcon />


## Reorder Wrapper

並び替えは、項目を囲むラッパーとして使うこともできます。下の項目のどこかをクリックし、ドラッグすると、リストの順番を入れ替えることができます。

import Wrapper from '@site/static/usage/v8/reorder/wrapper/index.md';

<Wrapper />


## データの更新

パラメータを指定せずに reorder グループに対して `complete` メソッドを呼び出すと、DOM ノードが並べ替えられます。項目がソートが必要なデータの配列からレンダリングされた場合、データと DOM が同期しない可能性があります。

並べ替えの完了時に配列をソートするには、`complete` メソッドのパラメータとして配列を渡す必要があります。complete`メソッドは配列をソートして返し、再代入できるようにする。配列を渡すと、IonicはDOMノードの並び替えを行わないので注意してください。

場合によっては、アプリが独自に配列と DOM ノードの両方を並べ替える必要があるかもしれません。その場合は `complete` メソッドに `false` をパラメータとして渡す必要があります。これにより、Ionicはreorder group内のDOMノードの並び替えを行わないようになります。

どのようなアプローチを取るにせよ、ループの中でアイテムを提供する場合は、アイテムを並べ替えるための安定したIDを提供する必要があります。つまり、Angularでは `trackBy` を使用し、ReactとVueでは `key` を使用します。

import UpdatingData from '@site/static/usage/v8/reorder/updating-data/index.md';

<UpdatingData />


## 仮想スクロールでの使用

Reorderを正しく動作させるには、スクロールコンテナが必要です。仮想スクロールソリューションを使用する場合は、カスタムスクロールターゲットを指定する必要があります。コンテンツのスクロールを無効にし、スクロールを担当する要素に `.ion-content-scroll-host` クラスを追加する必要があります。

import CustomScrollTarget from '@site/static/usage/v8/reorder/custom-scroll-target/index.md';

<CustomScrollTarget />


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
