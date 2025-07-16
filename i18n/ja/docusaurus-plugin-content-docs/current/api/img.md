---
title: "ion-img"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Img Tag to Lazy Load Images in Viewport | ion-img Tag</title>
  <meta name="description" content="Img tag lazy loads images whenever the tag is in the viewport. Utilize this component when generating large lists—as images are only loaded when visible." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### alt

| | |
| --- | --- |
| **Description** | この属性は、画像を説明する代替テキストを定義します。画像の URL が間違っている場合、画像がサポートされている形式の一つでない場合、または画像がまだダウンロードされていない場合、ユーザにはこのテキストが表示されます。 |
| **Attribute** | `alt` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### src

| | |
| --- | --- |
| **Description** | 画像のURL。この属性は `<img>` 要素では必須です。 |
| **Attribute** | `src` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



## Events

| Name | Description |
| --- | --- |
| `ionError` | imgの読み込みに失敗したときに発行されます。 |
| `ionImgDidLoad` | 画像の読み込みが終了したときに発行されます。 |
| `ionImgWillLoad` | img srcが設定されたときに発行されます。 |


## CSS Shadow Parts

| Name | Description |
| --- | --- |
| `image` | 内側の `img` 要素。 |

