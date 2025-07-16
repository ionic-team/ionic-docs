---
title: "ion-virtual-scroll"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-virtual-scroll | Angular Virtual Scroll List for Ionic Apps</title>
  <meta name="description" content="ion-virtual-scroll, supported in Angular, displays a virtual, infinite list. Records are passed to the virtual scroll containing the data to create templates." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';




  
## Properties


### approxFooterHeight

| | |
| --- | --- |
| **Description** | 各フッターテンプレートのセルのおおよその幅を指定します。この寸法は、初期化時に作成されるべきセルの数を決定したり、スクロール可能な領域の高さを計算したりするのに使用されます。この高さの値には `px` 単位しか使用できません。各セルの実際のレンダリングサイズはアプリのCSSから得られますが、この近似値はアイテムがレンダリングされる前に初期寸法を計算するために使用されることに注意してください。 |
| **Attribute** | `approx-footer-height` |
| **Type** | `number` |
| **Default** | `30` |



### approxHeaderHeight

| | |
| --- | --- |
| **Description** | 各ヘッダーテンプレートのセルのおおよその高さを表します。この寸法は、初期化時に作成されるべきセルの数を決定したり、スクロール可能な領域の高さを計算したりするのに使用されます。この高さの値には `px` 単位しか使用できません。各セルの実際のレンダリングサイズはアプリのCSSから得られますが、この近似値はアイテムがレンダリングされる前に初期寸法を計算するために使用されることに注意してください。 |
| **Attribute** | `approx-header-height` |
| **Type** | `number` |
| **Default** | `30` |



### approxItemHeight

| | |
| --- | --- |
| **Description** | 仮想アイテムの高さがデフォルトよりかなり大きくなる場合は、これを指定することが重要です。 各仮想アイテムテンプレートのセルのおおよその高さ。この寸法は、初期化時に作成されるべきセルの数を決定したり、スクロール可能な領域の高さを計算したりするのに使用されます。この高さの値には `px` 単位しか使用できません。各セルの実際のレンダリングサイズはアプリの CSS から得られるもので、この近似値はアイテムがレンダリングされる前に初期寸法を計算するのに役立つものであることに注意してください。 |
| **Attribute** | `approx-item-height` |
| **Type** | `number` |
| **Default** | `45` |



### footerFn

| | |
| --- | --- |
| **Description** | セクションフッターと与えられたテンプレート内で使用されるデータは、`footerFn`に関数を渡すことで動的に作成することができます。フッター関数内のロジックは、フッターテンプレートを使用するかどうか、またフッターテンプレートにどのようなデータを与えるかを決定することができます。フッターセルが作成されない場合は、関数は `null` を返さなければなりません。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number, items: any[]) => string \| null \| undefined) \| undefined` |
| **Default** | `undefined` |



### footerHeight

| | |
| --- | --- |
| **Description** | 各項目のフッターをその高さ内にマッピングするオプション関数。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) \| undefined` |
| **Default** | `undefined` |



### headerFn

| | |
| --- | --- |
| **Description** | セクションヘッダーとそのテンプレート内で使用されるデータは、`headerFn`に関数を渡すことによって動的に作成することができます。例えば、大きな連絡先リストでは、通常、アルファベットの各文字の間に仕切りがあります。アプリは独自のカスタム `headerFn` を提供することができ、データセット内の各レコードで呼び出される。ヘッダー関数内のロジックは、ヘッダーテンプレートを使用するかどうか、またヘッダーテンプレートにどのようなデータを与えるかを決定することができる。ヘッダーセルが作成されない場合は、この関数は `null` を返さなければなりません。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number, items: any[]) => string \| null \| undefined) \| undefined` |
| **Default** | `undefined` |



### headerHeight

| | |
| --- | --- |
| **Description** | 各項目のヘッダを高さの範囲内でマッピングするオプション関数。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) \| undefined` |
| **Default** | `undefined` |



### itemHeight

| | |
| --- | --- |
| **Description** | 各アイテムをその高さ内にマッピングするオプションの関数です。この関数が提供されると、`ion-virtual-scroll`によって重い最適化と高速パスが取られるようになり、大幅な性能向上が期待できる。  この関数は、DOMの読み込みをすべてスキップすることができ、Doingすることで大幅なパフォーマンスの向上につながります。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) \| undefined` |
| **Default** | `undefined` |



### items

| | |
| --- | --- |
| **Description** | 仮想スクロール内のテンプレートを構築するためのデータです。このデータが変更された場合、仮想スクロール全体がリセットされることになります。 |
| **Attribute** | `undefined` |
| **Type** | `any[] \| undefined` |
| **Default** | `undefined` |



### nodeRender

| | |
| --- | --- |
| **Description** | 注：Vanilla JS APIのみです。 |
| **Attribute** | `undefined` |
| **Type** | `((el: HTMLElement \| null, cell: Cell, domIndex: number) => HTMLElement) \| undefined` |
| **Default** | `undefined` |



### renderFooter

| | |
| --- | --- |
| **Description** | 注：ステンシル用のJSX APIのみ。  フッターをレンダリングするためのrender関数を提供します。JSXのvirtual-domを返します。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) \| undefined` |
| **Default** | `undefined` |



### renderHeader

| | |
| --- | --- |
| **Description** | 注：ステンシル用のJSX APIのみ。  レンダリングされるヘッダーのrender関数を提供します。JSXのvirtual-domを返します。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) \| undefined` |
| **Default** | `undefined` |



### renderItem

| | |
| --- | --- |
| **Description** | 注：ステンシル用のJSX APIのみ。  レンダリングするアイテムのレンダー関数を用意します。JSXのvirtual-domを返します。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) \| undefined` |
| **Default** | `undefined` |



## Methods


### checkEnd

| | |
| --- | --- |
| **Description** | このメソッドは、アイテム配列の末尾をダーティとしてマークし、再レンダリングできるようにします。  これは次のように呼び出すのと同じです： ``js virtualScroll.checkRange(lastItemLen); ```。 |
| **Signature** | `checkEnd() => Promise<void>` |


### checkRange

| | |
| --- | --- |
| **Description** | このメソッドは、アイテムのサブセットをダーティとしてマークし、再レンダリングができるようにします。アイテムは、コンテンツまたはそのスタイルが変更されるたびに、ダーティとしてマークされる必要があります。  更新されるアイテムのサブセットは、オフセットと長さで指定することができます。 |
| **Signature** | `checkRange(offset: number, len?: number) => Promise<void>` |


### positionForItem

| | |
| --- | --- |
| **Description** | 指定されたインデックスの位置にある仮想アイテムの位置を返します。 |
| **Signature** | `positionForItem(index: number) => Promise<number>` |


