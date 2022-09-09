---
title: "ion-toggle"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/toggle/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toggle/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/toggle/props.md';
import Events from '@site/static/auto-generated/toggle/events.md';
import Methods from '@site/static/auto-generated/toggle/methods.md';
import Parts from '@site/static/auto-generated/toggle/parts.md';
import CustomProps from '@site/static/auto-generated/toggle/custom-props.md';
import Slots from '@site/static/auto-generated/toggle/slots.md';

<head>
  <title>Toggle | ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggleは、1つのオプションの状態を変更します。ion-toggleを使用して、アプリケーションのオン/オフを切り替えることができるカスタマイズ可能なトグルボタンを作成します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



1つのオプションの状態を切り替えます。Toggleのオン/オフを切り替えるには、Toggleをクリックするかスワイプします。また、 `checked` プロパティを設定して、プログラムでcheckedすることもできます。

## カスタマイズ

### 背景のカスタマイズ

Toggleトラックとハンドルの背景は、CSS変数を使ってカスタマイズすることができます。また、Toggleがチェックされたときに背景を異なるように設定するための変数もあります。

```css
ion-toggle {
  --background: #000;
  --background-checked: #7a49a5;

  --handle-background: #7a49a5;
  --handle-background-checked: #000;
}
```

これらの変数は `background` プロパティを設定しますが、これは省略形なので、 [background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background) が受け入れるどんな値でも受け入れることができます。

より複雑なケースでは、ハンドルの背景に画像を追加することもできます。

```css
ion-toggle {
  --handle-background-checked: #fff url(/assets/power-icon.png) no-repeat center / contain;
}
```

さらに一歩進んで、`::before` や `::after` という擬似要素を使って、テキストを背景の上に配置することもできます。

```css
ion-toggle::before {
  position: absolute;

  top: 16px;
  left: 10px;

  content: "ON";

  color: white;
  font-size: 8px;

  z-index: 1;
}
```


### 幅のカスタマイズ

トグルの幅を**小さく**すると、トラックの幅が狭くなり、ハンドルはデフォルトの幅のままになります。必要であれば、`--handle-width`を設定すると、ハンドルがより狭くなります。

```css
ion-toggle {
  width: 40px;
}
```

Toggleの幅を**大きく**調整すると、ハンドルはデフォルトの幅のままで、トラックの幅が広くなります。必要であれば、`--handle-width`を設定して、ハンドルをより広くすることができます。

```css
ion-toggle {
  width: 100px;
}
```

### 高さのカスタマイズ

Toggleの高さをデフォルトより**小さく**調整すると、ハンドルの高さがトラックに合わせて自動的にサイズ調整されます。 `ios` では、ハンドルはトラックより短く (`100% - 4px`) 、`md` では、ハンドルはトラックより高く (`100% + 6px`) なります。

```css
ion-toggle {
  height: 15px;
}
```

:::note
 Note: これはハンドルの幅には影響しません。幅は `--handle-width` を使用して設定する必要があります。
:::


Toggleの高さを**大きく**すると、中央のハンドルはデフォルトの高さに保たれます。これは `--handle-height` を設定することで変更することができます。これは任意の量を設定することができますが、 `--handle-max-height` を超えることはありません。

```css
ion-toggle {
  height: 60px;
}
```

:::note
 Note: これはハンドルの幅には影響しません。幅は `--handle-width` を使用して設定する必要があります。
:::


### スペーシングのカスタマイズ

スペーシングとは、ハンドルとトラックの間の水平方向の隙間のことです。デフォルトでは、`ios` **のみ**でハンドルの周囲に `2px` のスペーシングがあります。md` モードでは、デフォルトのスペーシングはありません。

水平方向の**間隔をなくすには、 `--handle-spacing` を `0px` に設定します。

```css
ion-toggle {
  --handle-spacing: 0px;
}
```

ハンドルの高さが固定されているため、上下の間隔をなくすには、高さを100%に設定します。

```css
ion-toggle {
  --handle-spacing: 0px;
  --handle-height: 100%;
}
```


### Border Radiusのカスタマイズ

ハンドルのBorder Radius半径を変更するには、`--handle-border-radius` を使用します。

```css
ion-toggle {
  --handle-border-radius: 14px 4px 4px 14px;
}
```

Toggleがチェックされたときだけ `border-radius` をターゲットにするには、`.toggle-checked` をターゲットにします。

```css
ion-toggle.toggle-checked {
  --handle-border-radius: 4px 14px 14px 4px;
}
```


### Box Shadowのカスタマイズ

ハンドルの `box-shadow` を変更するには、`--handle-box-shadow` を使用することができます。

```css
ion-toggle {
  --handle-box-shadow: 4px 0 2px 0 red;
}
```

Toggleがチェックされたときだけボックスシャドウをターゲットにするには、`.toggle-checked`をターゲットにします。

```css
ion-toggle.toggle-checked {
  --handle-box-shadow: -4px 0 2px 0 red;
}
```

box-shadow` が Toggle コンテナをオーバーフローするようにするには、[customizing overflow](#customizing-overflow) のセクションを参照してください。


### Overflowのカスタマイズ

Toggleで `overflow` を設定すると、Toggleハンドルに継承されます。デフォルトでは、オーバーフローは `ios` でのみ `hidden` に設定されています。 `box-shadow` は `contain` css プロパティによって切り取られたまま表示されます。toggleコンテナをオーバーフローさせるには、 `contain` を `none` に設定します。

```css
ion-toggle {
  --handle-box-shadow: 0 3px 12px rgba(255, 0, 0, 0.6), 0 3px 1px rgba(50, 70, 255, 0.6);

  overflow: visible;

  contain: none;
}
```

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
}
```




## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Toggle -->
<ion-toggle></ion-toggle>

<!-- Disabled Toggle -->
<ion-toggle disabled></ion-toggle>

<!-- Checked Toggle -->
<ion-toggle checked></ion-toggle>

<!-- Toggle Colors -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- Toggles in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
  </ion-item>
</ion-list>
```


</TabItem>


<TabItem value="javascript">

```html
<!-- Default Toggle -->
<ion-toggle></ion-toggle>

<!-- Disabled Toggle -->
<ion-toggle disabled></ion-toggle>

<!-- Checked Toggle -->
<ion-toggle checked></ion-toggle>

<!-- Toggle Colors -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- Toggles in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle slot="end" value="pepperoni" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle slot="end" value="sausage" disabled></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle slot="end" value="mushrooms"></ion-toggle>
  </ion-item>
</ion-list>
```


</TabItem>


<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

export const ToggleExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToggleExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>

          <IonItemDivider>Default Toggle</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>Disabled Toggle</IonItemDivider>
          <IonItem><IonToggle disabled /></IonItem>

          <IonItemDivider>Checked Toggle</IonItemDivider>
          <IonItem><IonToggle checked /></IonItem>

          <IonItemDivider>Toggle Colors</IonItemDivider>
          <IonItem><IonToggle color="primary" /></IonItem>
          <IonItem><IonToggle color="secondary" /></IonItem>
          <IonItem><IonToggle color="danger" /></IonItem>
          <IonItem><IonToggle color="light" /></IonItem>
          <IonItem><IonToggle color="dark" /></IonItem>

          <IonItemDivider>Toggles in a List</IonItemDivider>
          <IonItem>
            <IonLabel>Pepperoni</IonLabel>
            <IonToggle value="pepperoni" />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" disabled={true} />
          </IonItem>

          <IonItem>
            <IonLabel>Mushrooms</IonLabel>
            <IonToggle value="mushrooms" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'toggle-example',
  styleUrl: 'toggle-example.css'
})
export class ToggleExample {
  @State() pepperoni: boolean = false;
  @State() sausage: boolean = true;
  @State() mushrooms: boolean = false;

  render() {
    return [
      // Default Toggle
      <ion-toggle></ion-toggle>,

      // Disabled Toggle
      <ion-toggle disabled></ion-toggle>,

      // Checked Toggle
      <ion-toggle checked></ion-toggle>,

      // Toggle Colors
      <ion-toggle color="primary"></ion-toggle>,
      <ion-toggle color="secondary"></ion-toggle>,
      <ion-toggle color="danger"></ion-toggle>,
      <ion-toggle color="light"></ion-toggle>,
      <ion-toggle color="dark"></ion-toggle>,

      // Toggles in a List
      <ion-list>
        <ion-item>
          <ion-label>Pepperoni</ion-label>
          <ion-toggle checked={this.pepperoni} onIonChange={(ev) => this.pepperoni = ev.detail.checked}></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Sausage</ion-label>
          <ion-toggle checked={this.sausage} onIonChange={(ev) => this.sausage = ev.detail.checked} disabled={true}></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Mushrooms</ion-label>
          <ion-toggle checked={this.mushrooms} onIonChange={(ev) => this.mushrooms = ev.detail.checked}></ion-toggle>
        </ion-item>
      </ion-list>,

      <div>
        Pepperoni: {this.pepperoni ? "true" : "false"}<br/>
        Sausage: {this.sausage ? "true" : "false"}<br/>
        Mushrooms: {this.mushrooms ? "true" : "false"}
      </div>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default Toggle -->
  <ion-toggle></ion-toggle>

  <!-- Disabled Toggle -->
  <ion-toggle disabled></ion-toggle>

  <!-- Checked Toggle -->
  <ion-toggle checked></ion-toggle>

  <!-- Toggle Colors -->
  <ion-toggle color="primary"></ion-toggle>
  <ion-toggle color="secondary"></ion-toggle>
  <ion-toggle color="danger"></ion-toggle>
  <ion-toggle color="light"></ion-toggle>
  <ion-toggle color="dark"></ion-toggle>

  <!-- Toggles in a List -->
  <ion-list>
    <ion-item>
      <ion-label>Pepperoni</ion-label>
      <ion-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="pepperoni"
        :checked="toppings.value.indexOf('pepperoni') !== -1">
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Sausage</ion-label>
      <ion-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="sausage"
        :checked="toppings.value.indexOf('pepperoni') !== -1"
        disabled="true">
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Mushrooms</ion-label>
      <ion-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="mushrooms"
        :checked="toppings.value.indexOf('pepperoni') !== -1">
      </ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonLabel, IonList, IonItem, IonToggle } from '@ionic/vue';
import { defineComponent, vue } from 'vue';

export default defineComponent({
  components: { IonLabel, IonList, IonItem, IonToggle },
  setup() {
    const toppings = ref([]);
    
    return { toppings };
  }
});
</script>
```


</TabItem>

</Tabs>

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