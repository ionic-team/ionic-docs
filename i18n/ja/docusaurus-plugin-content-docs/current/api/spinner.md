---
title: "ion-spinner"
demoUrl: "/docs/demos/api/spinner/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-spinner | Animated Spinner Icon Components and Properties</title>
  <meta name="description" content="The ion-spinner component provides a variety of animated SVG spinners. These icons indicate that the app is loading or performing another process to wait on." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### duration

| | |
| --- | --- |
| **Description** | スピナーアニメーションの持続時間（ミリ秒）。デフォルトはスピナーによって異なる。 |
| **Attribute** | `duration` |
| **Type** | `number \| undefined` |
| **Default** | `undefined` |



### name

| | |
| --- | --- |
| **Description** | 使用するSVGスピナーの名前。名前が提供されない場合、プラットフォームのデフォルトのスピナーが使用されます。 |
| **Attribute** | `name` |
| **Type** | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-sharp" \| "lines-sharp-small" \| "lines-small" \| undefined` |
| **Default** | `undefined` |



### paused

| | |
| --- | --- |
| **Description** | `true`の場合、スピナーのアニメーションは一時停止されます。 |
| **Attribute** | `paused` |
| **Type** | `boolean` |
| **Default** | `false` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--color` | スピナーの色 |

