---
sidebar_label: 'ion-text'
demoUrl: '/docs/demos/api/text/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/text/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-text

The text component is a simple component that can be used to style the text color of any element. The `ion-text` element should wrap the element in order to change the text color of that element.

## Usage

```html
<ion-text color="secondary">
  <h1>H1: The quick brown fox jumps over the lazy dog</h1>
</ion-text>

<ion-text color="primary">
  <h2>H2: The quick brown fox jumps over the lazy dog</h2>
</ion-text>

<ion-text color="light">
  <h3>H3: The quick brown fox jumps over the lazy dog</h3>
</ion-text>

<ion-text color="danger">
  <h4>H4: The quick brown fox jumps over the lazy dog</h4>
</ion-text>

<ion-text color="dark">
  <h5>H5: The quick brown fox jumps over the lazy dog</h5>
</ion-text>

<p>
  I saw a werewolf with a Chinese menu in his hand. Walking through the
  <ion-text color="danger"><sub>streets</sub></ion-text> of Soho in the rain. He
  <ion-text color="primary"><i>was</i></ion-text> looking for a place called Lee Ho Fook's. Gonna get a
  <ion-text color="secondary"><a>big dish of beef chow mein.</a></ion-text>
  <ion-text color="danger"><ion-icon name="cut"></ion-icon></ion-text>
</p>
```

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |
