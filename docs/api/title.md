---
title: "ion-title"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/title/props.md';
import Events from '@site/static/auto-generated/title/events.md';
import Methods from '@site/static/auto-generated/title/methods.md';
import Parts from '@site/static/auto-generated/title/parts.md';
import CustomProps from '@site/static/auto-generated/title/custom-props.md';
import Slots from '@site/static/auto-generated/title/slots.md';

<head>
  <title>ion-title: Ionic Framework App Title Component for Toolbars</title>
  <meta name="description" content="ion-titleは、ツールバーのタイトルを設定するコンポーネントです。Ionic Frameworkアプリのtitleとcollapsible titleコンポーネントの詳細と使用方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



`ion-title` は、 `Toolbar` のタイトルを設定するコンポーネントです。



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default title -->
<ion-toolbar>
  <ion-title>Default Title</ion-title>
</ion-toolbar>

<!-- Small title above a default title -->
<ion-toolbar>
  <ion-title size="small">Small Title above a Default Title</ion-title>
</ion-toolbar>
<ion-toolbar>
  <ion-title>Default Title</ion-title>
</ion-toolbar>

<!-- Large title -->
<ion-toolbar>
  <ion-title size="large">Large Title</ion-title>
</ion-toolbar>
```

### Collapsible Large Titles

Ionic では、iOS 標準のアプリに存在するCollapsible Large Titlesを作成する方法が用意されています。この設定を行うには、`ion-title`、`ion-header`、（オプションで）`ion-buttons` 要素を設定する必要があります。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>Settings</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Settings</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...

</ion-content>
```

上の例では、2つの `ion-header` 要素があることに注目してください。最初の `ion-header` は折りたたみ可能なヘッダの "折りたたまれた" 状態を表し、2番目の `ion-header` は折りたたみ可能なヘッダの "展開された" 状態を表します。2 番目の `ion-header` は `collapse="condense"` でなければならず、 `ion-content` 内に存在しなければならないことに注意してください。さらに、大きなタイトルのスタイルを取得するには、 `ion-title` は `size="large"` でなければなりません。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons collapse="true" slot="end">
      <ion-button>Click Me</ion-button>
    </ion-buttons>
    <ion-title>Settings</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons collapse="true" slot="end">
        <ion-button>Click Me</ion-button>
      </ion-buttons>
      <ion-title size="large">Settings</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...

</ion-content>
```

この例では、2つの `ion-buttons` のセットを追加し、両方とも `collapse` を `true` に設定していることに注目してください。セカンダリヘッダーが折りたたまれると、セカンダリヘッダーのボタンは隠れ、プライマリヘッダーのボタンが表示されます。これは、ヘッダボタンが常に `ion-title` 要素の隣に表示されるようにするために便利です。

また、 `collapse` が設定されていない `ion-buttons` 要素は、折りたたまれた状態に関わらず常に表示されます。ラージタイトルと `ion-buttons` 要素を `ion-content` の中で使用する場合、 `ion-buttons` 要素は常に `end` スロットに配置されるべきです。

> Collapsible Large Titlesを使用する場合、 `ion-content` では `fullscreen` を `true` に設定し、メインの `ion-header` では `translucent` を `true` に設定することが必要です。

### Collapsible Large Titlesのスタイリング

Collapsible Large Titlesは、他のコンテンツとの関係でシームレスに表示される必要があります。つまり、Collapsible Large Titlesを含む `ion-toolbar` の背景色は、常に `ion-content` の背景色と一致する必要があります。

デフォルトでは、標準のタイトルを含む `ion-toolbar` は `opacity: 0` を使って非表示になっており、スクロールしてラージタイトルを折りたたむと徐々に表示されるようになっています。その結果、標準タイトルの後ろに見える背景色は、実際には `ion-content` の背景色となります。

標準タイトルのあるツールバーの背景色は、 `ion-toolbar` に `--background` という CSS 変数を設定することで変更することができます。これにより、大きなタイトルを折りたたむと、ヘッダの色が変わるような効果が得られます。

ラージタイトルのテキストカラーをスタイルする場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージタイトルをターゲットにする必要があり、そうしないとナビゲーションアニメーションの間にそのスタイルが適用されません。

```css
ion-title.title-large {
  color: purple;
  font-size: 30px;
}
```


</TabItem>


<TabItem value="javascript">

```html
<!-- Default title -->
<ion-toolbar>
  <ion-title>Default Title</ion-title>
</ion-toolbar>

<!-- Small title above a default title -->
<ion-toolbar>
  <ion-title size="small">Small Title above a Default Title</ion-title>
</ion-toolbar>
<ion-toolbar>
  <ion-title>Default Title</ion-title>
</ion-toolbar>

<!-- Large title -->
<ion-toolbar>
  <ion-title size="large">Large Title</ion-title>
</ion-toolbar>
```

### Collapsible Large Titles

Ionic では、iOS 標準のアプリに存在するCollapsible Large Titlesを作成する方法が用意されています。この設定を行うには、`ion-title`、`ion-header`、（オプションで）`ion-buttons` 要素を設定する必要があります。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>Settings</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Settings</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...

</ion-content>
```

上の例では、2つの `ion-header` 要素があることに注目してください。最初の `ion-header` は折りたたみ可能なヘッダの "折りたたまれた" 状態を表し、2番目の `ion-header` は折りたたみ可能なヘッダの "展開された" 状態を表します。2 番目の `ion-header` は `collapse="condense"` でなければならず、 `ion-content` 内に存在しなければならないことに注意してください。さらに、大きなタイトルのスタイルを取得するには、 `ion-title` は `size="large"` でなければなりません。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons collapse="true" slot="end">
      <ion-button>Click Me</ion-button>
    </ion-buttons>
    <ion-title>Settings</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons collapse="true" slot="end">
        <ion-button>Click Me</ion-button>
      </ion-buttons>
      <ion-title size="large">Settings</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...

</ion-content>
```

この例では、2つの `ion-buttons` のセットを追加し、両方とも `collapse` を `true` に設定していることに注目してください。セカンダリヘッダーが折りたたまれると、セカンダリヘッダーのボタンは隠れ、プライマリヘッダーのボタンが表示されます。これは、ヘッダボタンが常に `ion-title` 要素の隣に表示されるようにするために便利です。

また、 `collapse` が設定されていない `ion-buttons` 要素は、折りたたまれた状態に関わらず常に表示されます。ラージタイトルと `ion-buttons` 要素を `ion-content` の中で使用する場合、 `ion-buttons` 要素は常に `end` スロットに配置されるべきです。

> Collapsible Large Titlesを使用する場合、 `ion-content` では `fullscreen` を `true` に設定し、メインの `ion-header` では `translucent` を `true` に設定することが必要です。

### Collapsible Large Titlesのスタイリング

Collapsible Large Titlesは、他のコンテンツとの関係でシームレスに表示される必要があります。つまり、Collapsible Large Titlesを含む `ion-toolbar` の背景色は、常に `ion-content` の背景色と一致する必要があります。

デフォルトでは、標準のタイトルを含む `ion-toolbar` は `opacity: 0` を使って非表示になっており、スクロールして大きなタイトルを折りたたむと、徐々に表示されます。その結果、標準タイトルの後ろに見える背景色は、実際には `ion-content` の背景色となります。

標準タイトルのあるツールバーの背景色は、 `ion-toolbar` に `--background` という CSS 変数を設定することで変更できます。これにより、大きなタイトルを折りたたむと、ヘッダの色が変わるような効果が得られます。

ラージタイトルのテキストカラーをスタイルする場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージタイトルをターゲットにする必要があり、そうしないとナビゲーションアニメーションの間にそのスタイルが適用されません。

```css
ion-title.title-large {
  color: purple;
  font-size: 30px;
}
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import {
  IonTitle,
  IonToolbar
} from '@ionic/react';

export const ToolbarExample: React.FC = () => (
  {/*-- Default title --*/}
  <IonToolbar>
    <IonTitle>Default Title</IonTitle>
  </IonToolbar>

  {/*-- Small title --*/}
  <IonToolbar>
    <IonTitle size="small">Small Title above a Default Title</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>Default Title</IonTitle>
  </IonToolbar>

  {/*-- Large title --*/}
  <IonToolbar>
    <IonTitle size="large">Large Title</IonTitle>
  </IonToolbar>
);
```

### Collapsible Large Titles

Ionic では、純正 iOS アプリに存在するCollapsible Large Titlesを作成する方法が用意されています。この設定を行うには、`IonTitle`、`IonHeader`、（オプションで）`IonButtons` 要素を設定する必要があります。

```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';

export const LargeTitleExample: React.FC = () => (
  <>
    <IonHeader translucent="true">
      <IonToolbar>
        <IonTitle>Settings</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Settings</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      ...

    </IonContent>
  </>
);
```

上の例では、2つの `IonHeader` 要素があることに注目してください。最初の `IonHeader` は折りたたみ可能なヘッダーの "折りたたまれた" 状態を表し、2番目の `IonHeader` は折りたたみ可能なヘッダーの "展開された" 状態を表します。2つ目の `IonHeader` は `collapse="condense"` でなければならず、 `IonContent` 内に存在しなければならないことに注意してください。さらに、大きなタイトルのスタイルを取得するには、`IonTitle` が `size="large"` である必要があります。

```tsx
import React from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/react';

export const LargeTitleExample: React.FC = () => (
  <>
    <IonHeader translucent="true">
      <IonToolbar>
        <IonButtons collapse="true" slot="end">
          <IonButton>Click Me</IonButton>
        </IonButtons>
        <IonTitle>Settings</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons collapse="true" slot="end">
            <IonButton>Click Me</IonButton>
          </IonButtons>
          <IonTitle size="large">Settings</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      ...

    </IonContent>
  </>
);
```

この例では、2つの `IonButtons` のセットを追加し、両方とも `collapse` を `true` に設定していることに注目してください。セカンダリヘッダーが折りたたまれると、セカンダリヘッダーのボタンは隠れ、プライマリヘッダーのボタンが表示されます。これは、ヘッダーボタンが常に `IonTitle` 要素の隣に表示されるようにするために便利です。

また、 `collapse` が設定されていない `IonButtons` 要素は、折りたたまれた状態に関わらず常に表示されます。ラージタイトルと `ion-buttons` 要素を `ion-content` 内で使用する場合、 `ion-buttons` 要素は常に `end` スロットに配置されるべきです。

> Collapsible Large Titlesを使用する場合、`IonContent` では `fullscreen` を `true` に設定し、メインの `IonHeader` では `translucent="true"` を設定する必要があります。

### Collapsible Large Titlesのスタイリング

Collapsible Large Titlesは、他のコンテンツとの関係でシームレスに表示される必要があります。つまり、Collapsible Large Titlesを含む `ion-toolbar` の背景色は、常に `ion-content` の背景色と一致する必要があります。

デフォルトでは、標準のタイトルを含む `ion-toolbar` は `opacity: 0` を使って非表示になっており、スクロールして大きなタイトルを折りたたむと、徐々に表示されます。その結果、標準タイトルの後ろに見える背景色は、実際には `ion-content` の背景色となります。

標準タイトルのあるツールバーの背景色は、 `ion-toolbar` に `--background` という CSS 変数を設定することで変更できます。これにより、大きなタイトルを折りたたむと、ヘッダの色が変わるような効果が得られます。

ラージタイトルのテキストカラーをスタイルする場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージタイトルをターゲットにする必要があり、そうしないとナビゲーションアニメーションの間にそのスタイルが適用されません。

```css
ion-title.title-large {
  color: purple;
  font-size: 30px;
}
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css'
})
export class TitleExample {
  render() {
    return [
      // Default title
      <ion-toolbar>
        <ion-title>Default Title</ion-title>
      </ion-toolbar>,

      // Small title above a default title
      <ion-toolbar>
        <ion-title size="small">Small Title above a Default Title</ion-title>
      </ion-toolbar>,
      <ion-toolbar>
        <ion-title>Default Title</ion-title>
      </ion-toolbar>,

      // Large title
      <ion-toolbar>
        <ion-title size="large">Large Title</ion-title>
      </ion-toolbar>
    ];
  }
}
```


### Collapsible Large Titles

Ionic は、iOS 標準のアプリに存在するCollapsible Large Titlesを作成する方法を提供します。この設定を行うには、`ion-title`、`ion-header`、および（オプションで）`ion-buttons` 要素を設定する必要があります。

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css'
})
export class TitleExample {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Settings</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>

        ...

      </ion-content>
    ];
  }
}
```

上の例では、2つの `ion-header` 要素があることに注目してください。最初の `ion-header` は折りたたみ可能なヘッダの "折りたたまれた" 状態を表し、2番目の `ion-header` は折りたたみ可能なヘッダの "展開された" 状態を表します。2 番目の `ion-header` は `collapse="condense"` でなければならず、 `ion-content` 内に存在しなければならないことに注意してください。さらに、大きなタイトルのスタイルを取得するには、 `ion-title` は `size="large"` でなければなりません。

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css'
})
export class TitleExample {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons collapse={true} slot="end">
            <ion-button>Click Me</ion-button>
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-buttons collapse={true} slot="end">
              <ion-button>Click Me</ion-button>
            </ion-buttons>
            <ion-title size="large">Settings</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>

        ...

      </ion-content>
    ];
  }
}
```

この例では、2つの `ion-buttons` のセットを追加し、両方とも `collapse` を `true` に設定していることに注目してください。セカンダリヘッダーが折りたたまれると、セカンダリヘッダーのボタンは隠れ、プライマリヘッダーのボタンが表示されます。これは、ヘッダボタンが常に `ion-title` 要素の隣に表示されるようにするために便利です。

また、 `collapse` が設定されていない `ion-buttons` 要素は、折りたたまれた状態に関わらず常に表示されます。ラージタイトルと `ion-buttons` 要素を `ion-content` 内で使用する場合、 `ion-buttons` 要素は常に `end` スロットに配置する必要があります。

ラージ・タイトルにスタイルを設定する場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージ・タイトルをターゲットにする必要があり、そうしないとナビゲーション・アニメーションの間にそのスタイルが適用されません。

> 折りたたみ可能なラージタイトルを使用する場合、 `ion-content` では `fullscreen` を `true` に設定し、メインの `ion-header` では `translucent` を `true` に設定することが必要です。

### Collapsible Large Titlesのスタイリング

Collapsible Large Titlesは、他のコンテンツとの関係でシームレスに表示される必要があります。つまり、Collapsible Large Titlesを含む `ion-toolbar` の背景色は、常に `ion-content` の背景色と一致する必要があります。

デフォルトでは、標準のタイトルを含む `ion-toolbar` は `opacity: 0` を使って非表示になっており、スクロールして大きなタイトルを折りたたむと、徐々に表示されます。その結果、標準タイトルの後ろに見える背景色は、実際には `ion-content` の背景色となります。

標準タイトルのあるツールバーの背景色は、 `ion-toolbar` に `--background` という CSS 変数を設定することで変更できます。これにより、大きなタイトルを折りたたむと、ヘッダの色が変わるような効果が得られます。

ラージタイトルのテキストカラーをスタイルする場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージタイトルをターゲットにする必要があり、そうしないとナビゲーションアニメーションの間にそのスタイルが適用されません。

```css
ion-title.title-large {
  color: purple;
  font-size: 30px;
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default title -->
  <ion-toolbar>
    <ion-title>Default Title</ion-title>
  </ion-toolbar>

  <!-- Small title -->
  <ion-toolbar>
    <ion-title size="small">Small Title above a Default Title</ion-title>
  </ion-toolbar>
  <ion-toolbar>
    <ion-title>Default Title</ion-title>
  </ion-toolbar>

  <!-- Large title -->
  <ion-toolbar>
    <ion-title size="large">Large Title</ion-title>
  </ion-toolbar>
</template>

<script>
import { IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonTitle, IonToolbar }
});
</script>
```

### Collapsible Large Titles

Ionic は、iOS 標準のアプリに存在するCollapsible Large Titlesを作成する方法を提供します。この設定を行うには、`ion-title`、`ion-header`、および（オプションで）`ion-buttons` 要素を設定する必要があります。

```html
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>Settings</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Settings</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    ...

  </ion-content>
</template>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonSearchbar, 
    IonTitle, 
    IonToolbar
  }
});
</script>
```

上の例では、2つの `ion-header` 要素があることに注目してください。最初の `ion-header` は折りたたみ可能なヘッダの "折りたたまれた" 状態を表し、2番目の `ion-header` は折りたたみ可能なヘッダの "展開された" 状態を表します。2 番目の `ion-header` は `collapse="condense"` でなければならず、 `ion-content` 内に存在しなければならないことに注意してください。さらに、大きなタイトルのスタイルを取得するには、 `ion-title` は `size="large"` でなければなりません。

```html
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons :collapse="true" slot="end">
        <ion-button>Click Me</ion-button>
      </ion-buttons>
      <ion-title>Settings</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-buttons :collapse="true" slot="end">
          <ion-button>Click Me</ion-button>
        </ion-buttons>
        <ion-title size="large">Settings</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    ...

  </ion-content>
</template>

<script>
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonButton,
    IonButtons,
    IonContent, 
    IonHeader, 
    IonSearchbar, 
    IonTitle, 
    IonToolbar
  }
});
</script>
```

この例では、2つの `ion-buttons` のセットを追加し、両方とも `collapse` を `true` に設定していることに注目してください。セカンダリヘッダーが折りたたまれると、セカンダリヘッダーのボタンは隠れ、プライマリヘッダーのボタンが表示されます。これは、ヘッダボタンが常に `ion-title` 要素の隣に表示されるようにするために便利です。

また、 `collapse` が設定されていない `ion-buttons` 要素は、折りたたまれた状態に関わらず常に表示されます。ラージタイトルと `ion-buttons` 要素を `ion-content` の中で使用する場合、 `ion-buttons` 要素は常に `end` スロットに配置されるべきです。

> 折りたたみ可能なラージタイトルを使用する場合、 `ion-content` では `fullscreen` を `true` に設定し、メインの `ion-header` では `translucent` を `true` に設定することが必要です。

### Collapsible Large Titlesのスタイリング

Collapsible Large Titlesは、他のコンテンツとの関係でシームレスに表示される必要があります。つまり、Collapsible Large Titlesを含む `ion-toolbar` の背景色は、常に `ion-content` の背景色と一致する必要があります。

デフォルトでは、標準のタイトルを含む `ion-toolbar` は `opacity: 0` を使って非表示になっており、スクロールして大きなタイトルを折りたたむと、徐々に表示されます。その結果、標準タイトルの後ろに見える背景色は、実際には `ion-content` の背景色となります。

標準タイトルのあるツールバーの背景色は、 `ion-toolbar` に `--background` という CSS 変数を設定することで変更できます。これにより、大きなタイトルを折りたたむと、ヘッダの色が変わるような効果が得られます。

ラージタイトルのテキストカラーをスタイルする場合、特定のページやタブのコンテキスト内ではなく、グローバルにラージタイトルをターゲットにする必要があり、そうしないとナビゲーションアニメーションの間にそのスタイルが適用されません。

```css
ion-title.title-large {
  color: purple;
  font-size: 30px;
}
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