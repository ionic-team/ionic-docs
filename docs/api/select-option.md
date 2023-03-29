---
title: "ion-select-option"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v6/select-option/props.md';
import Events from '@ionic-internal/component-api/v6/select-option/events.md';
import Methods from '@ionic-internal/component-api/v6/select-option/methods.md';
import Parts from '@ionic-internal/component-api/v6/select-option/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/select-option/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/select-option/slots.md';

<head>
  <title>Select Option | What Is An Option Select on Ionic Framework Apps</title>
  <meta name="description" content="Select Optionとは？Select OptionはSelectの子要素で、定義された各オプションはSelectダイアログに渡され表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Select Optionsは、Selectの子要素となるコンポーネントです。定義された各オプションは、Selectダイアログに渡され表示されます。詳しくは、[Select docs](select.md) を参照してください。

## カスタマイズ

`ion-select` の子要素として追加された各 `ion-select-option` コンポーネントは、ダイアログに表示するためにインターフェースに渡されます。ここで重要なことは、 `ion-select-option` 要素自体はビューから隠されているということです。つまり、この要素にスタイルを設定しても、ダイアログのオプションに影響を与えることはありません。

```css
/* DOES NOT work */
ion-select-option {
  color: red;
}
```

その代わりに、各インターフェイスオプションは `.select-interface-option` というクラスを持っており、スタイルを設定することができます。オーバーレイはスコープされたコンポーネントであるため、セレクタはそれ自体では動作せず、カスタム `cssClass` をインターフェイスに渡すことが推奨されることを覚えておいてください。

```css
/* This will NOT work on its own */
.select-interface-option {
  color: red;
}

/*
 * "my-custom-interface" needs to be passed in through
 * the cssClass of the interface options for this to work
 */
.my-custom-interface .select-interface-option {
  color: red;
}
```

:::note
 Note: いくつかのインターフェースは、オプションのレンダリング方法によって、より詳細なスタイリングを必要とします。これに関する詳細な情報については、使用法を参照してください。
:::


オプションは、インターフェイスオプションに渡される `ion-select-option` に独自のクラスを追加することで、個別にスタイルを設定することができます。オプションに独自のクラスを設定する例については、以下の [使い方](#usage)セクションを参照してください。




## 使い方

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="javascript">

```html
<ion-item>
  <ion-label>Select</ion-label>
  <ion-select>
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>
```

### Customizing Options

```html
<ion-item>
  <ion-label>Select: Alert Interface</ion-label>
  <ion-select class="custom-options">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>Select: Alert Interface (Multiple Selection)</ion-label>
  <ion-select class="custom-options" multiple="true">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>Select: Popover Interface</ion-label>
  <ion-select interface="popover" class="custom-options">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>Select: Action Sheet Interface</ion-label>
  <ion-select interface="action-sheet" class="custom-options">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* Action Sheet Interface: set color for the action sheet using its button CSS variables */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* Alert Interface: set color for alert options (single selection) */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* Alert Interface: set color for alert options (multiple selection) */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* Alert Interface: set color for checked alert options (single selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-radio-label {
  color: #79193b;
}

/* Alert Interface: set color for checked alert options (multiple selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-checkbox-label {
  color: #79193b;
}
```

```javascript
// Pass a custom class to each select interface for styling
const selects = document.querySelectorAll('.custom-options');

for (var i = 0; i < selects.length; i++) {
  selects[i].interfaceOptions = {
    cssClass: 'my-custom-interface'
  };
};
```

> Note: In the CSS examples, some of the selectors could be combined together, but are separated out in order to better explain what each selector is for.

### Customizing Individual Options

To customize an individual option, set a class on the `ion-select-option`:

```html
<ion-item>
  <ion-label>Select</ion-label>
  <ion-select class="custom-options" interface="popover">
    <ion-select-option value="brown" class="brown-option">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```

```javascript
// Pass a custom class to each select interface for styling
const select = document.querySelector('.custom-options');
select.interfaceOptions = {
  cssClass: 'my-custom-interface'
};
```

</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Select</IonLabel>
          <IonSelect>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
```

### Customizing Options

```tsx
import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

const options = {
  cssClass: 'my-custom-interface'
};

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Select: Alert Interface</IonLabel>
          <IonSelect interfaceOptions={options}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Select: Alert Interface (Multiple Selection)</IonLabel>
          <IonSelect interfaceOptions={options} multiple={true}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Select: Popover Interface</IonLabel>
          <IonSelect interface="popover" interfaceOptions={options}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Select: Action Sheet Interface</IonLabel>
          <IonSelect interface="action-sheet" interfaceOptions={options}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* Action Sheet Interface: set color for the action sheet using its button CSS variables */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* Alert Interface: set color for alert options (single selection) */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* Alert Interface: set color for alert options (multiple selection) */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* Alert Interface: set color for checked alert options (single selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-radio-label {
  color: #79193b;
}

/* Alert Interface: set color for checked alert options (multiple selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-checkbox-label {
  color: #79193b;
}
```

> Note: In the CSS examples, some of the selectors could be combined together, but are separated out in order to better explain what each selector is for.


### Customizing Individual Options

To customize an individual option, set a class on the `ion-select-option`:

```tsx
import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

const options = {
  cssClass: 'my-custom-interface'
};

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Select</IonLabel>
          <IonSelect interface="popover" interfaceOptions={options}>
            <IonSelectOption value="brown" class="brown-option">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-option-example',
  styleUrl: 'select-option-example.css'
})
export class SelectOptionExample {
  render() {
    return [
      <ion-item>
        <ion-label>Select</ion-label>
        <ion-select>
          <ion-select-option value="brown">Brown</ion-select-option>
          <ion-select-option value="blonde">Blonde</ion-select-option>
          <ion-select-option value="black">Black</ion-select-option>
          <ion-select-option value="red">Red</ion-select-option>
        </ion-select>
      </ion-item>
    ];
  }
}
```

### Customizing Options

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-option-example',
  styleUrl: 'select-option-example.css'
})
export class SelectOptionExample {
  options = {
    cssClass: 'my-custom-interface'
  };

  render() {
    return [
      <ion-item>
        <ion-label>Select: Alert Interface</ion-label>
        <ion-select interfaceOptions={options}>
          <ion-select-option value="brown">Brown</ion-select-option>
          <ion-select-option value="blonde">Blonde</ion-select-option>
          <ion-select-option value="black">Black</ion-select-option>
          <ion-select-option value="red">Red</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>Select: Alert Interface (Multiple Selection)</ion-label>
        <ion-select interfaceOptions={options} multiple={true}>
          <ion-select-option value="brown">Brown</ion-select-option>
          <ion-select-option value="blonde">Blonde</ion-select-option>
          <ion-select-option value="black">Black</ion-select-option>
          <ion-select-option value="red">Red</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>Select: Popover Interface</ion-label>
        <ion-select interface="popover" interfaceOptions={options}>
          <ion-select-option value="brown">Brown</ion-select-option>
          <ion-select-option value="blonde">Blonde</ion-select-option>
          <ion-select-option value="black">Black</ion-select-option>
          <ion-select-option value="red">Red</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>Select: Action Sheet Interface</ion-label>
        <ion-select interface="action-sheet" interfaceOptions={options}>
          <ion-select-option value="brown">Brown</ion-select-option>
          <ion-select-option value="blonde">Blonde</ion-select-option>
          <ion-select-option value="black">Black</ion-select-option>
          <ion-select-option value="red">Red</ion-select-option>
        </ion-select>
      </ion-item>
    ];
  }
}
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* Action Sheet Interface: set color for the action sheet using its button CSS variables */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* Alert Interface: set color for alert options (single selection) */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* Alert Interface: set color for alert options (multiple selection) */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* Alert Interface: set color for checked alert options (single selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-radio-label {
  color: #79193b;
}

/* Alert Interface: set color for checked alert options (multiple selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-checkbox-label {
  color: #79193b;
}
```

> Note: In the CSS examples, some of the selectors could be combined together, but are separated out in order to better explain what each selector is for.

### Customizing Individual Options

To customize an individual option, set a class on the `ion-select-option`:

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-option-example',
  styleUrl: 'select-option-example.css'
})
export class SelectOptionExample {
  options = {
    cssClass: 'my-custom-interface'
  };

  render() {
    return [
      <ion-item>
        <ion-label>Select</ion-label>
        <ion-select interface="popover" interfaceOptions={options}>
          <ion-select-option value="brown" class="brown-option">Brown</ion-select-option>
          <ion-select-option value="blonde">Blonde</ion-select-option>
          <ion-select-option value="black">Black</ion-select-option>
          <ion-select-option value="red">Red</ion-select-option>
        </ion-select>
      </ion-item>
    ];
  }
}
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```

</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-item>
    <ion-label>Select</ion-label>
    <ion-select>
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonSelect, IonSelectOption }
});
</script>
```

### Customizing Options

```html
<template>
  <ion-item>
    <ion-label>Select: Alert Interface</ion-label>
    <ion-select :interface-options="options">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>Select: Alert Interface (Multiple Selection)</ion-label>
    <ion-select :interface-options="options" multiple="true">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>Select: Popover Interface</ion-label>
    <ion-select interface="popover" :interface-options="options">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>Select: Action Sheet Interface</ion-label>
    <ion-select interface="action-sheet" :interface-options="options">
      <ion-select-option value="brown">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonSelect, IonSelectOption },
  setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };
    
    return { options }
  }
});
</script>
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* Action Sheet Interface: set color for the action sheet using its button CSS variables */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* Alert Interface: set color for alert options (single selection) */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* Alert Interface: set color for alert options (multiple selection) */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* Alert Interface: set color for checked alert options (single selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-radio-label {
  color: #79193b;
}

/* Alert Interface: set color for checked alert options (multiple selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-checkbox-label {
  color: #79193b;
}
```

> Note: In the CSS examples, some of the selectors could be combined together, but are separated out in order to better explain what each selector is for.


### Customizing Individual Options

To customize an individual option, set a class on the `ion-select-option`:

```html
<template>
  <ion-item>
    <ion-label>Select</ion-label>
    <ion-select interface="popover" :interface-options="options">
      <ion-select-option value="brown" class="brown-option">Brown</ion-select-option>
      <ion-select-option value="blonde">Blonde</ion-select-option>
      <ion-select-option value="black">Black</ion-select-option>
      <ion-select-option value="red">Red</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonSelect, IonSelectOption },
  setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };
    
    return { options }
  }
});
</script>
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
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