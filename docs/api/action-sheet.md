---
title: "ion-action-sheet"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/action-sheet/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/action-sheet/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@ionic-internal/component-api/v6/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v6/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v6/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v6/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/action-sheet/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/action-sheet/slots.md';

<head>
  <title>ion-action-sheet | Action Sheet Dialog for iOS and Android Apps</title>
  <meta name="description" content="Action Sheetsはアプリのコンテンツの上に一連のオプションを表示するダイアログで、手動で解除する必要があります。iOSとAndroidのデバイスでの使用方法については、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Action Sheetは複数の選択肢を表示するダイアログです。アプリのコンテンツ上に表示され、ユーザが手動で破棄しないとアプリの利用を再開することはできません。`ios` modeでは、破壊的な選択肢は明示されます（コンテンツの削除などは赤字などでわかりやすく表示されます）。Action Sheetを破棄するには、背景をタップする、デスクトップのパソコンの場合はエスケープキーを押すなど、複数の選択肢があります。

## Buttons

Buttonの `role` プロパティは、 `destructive` か `cancel` のどちらかを利用できます。 roleプロパティがない場合は、プラットフォームに応じたデフォルトの外観となります。`cancel` role を持つButtonは、配列 `buttons` のどこに配置してもAction Sheetの最下部に表示されます。 Note: `destructive` roleをつけるButtonは、一番上のButtonとして配置することをおすすめします。また、背景をタップしてAction Sheetを破棄した場合、cancel role に設定されているhandlerが実行されます。

Buttonは `ActionSheetButton` の `data` プロパティを介してデータを渡すこともできます。これは `onDidDismiss` メソッドの戻り値にある `data` フィールドにデータを入力します。

## カスタマイズ

Action Sheetはscopedによるカプセル化を採用しており、実行時に各スタイルにクラスを追加することで、自動的にCSSをスコープ化します。CSSでscopedセレクタをオーバーライドするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。

私たちは、 `create` メソッドで `cssClass` にカスタムクラスを渡し、それを使ってホストと内部要素にカスタムスタイルを追加することをお勧めします。このプロパティは、スペースで区切られた複数のクラスを受け付けることもできます。 `cssClass` を使用してクラスを渡す例については、[使い方](#usage) のセクションを参照してください。

```css
/* DOES NOT WORK - not specific enough */
.action-sheet-group {
  background: #e5e5e5;
}

/* Works - pass "my-custom-class" in cssClass to increase specificity */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

CSSカスタムプロパティ](#css-custom-properties)は、個々の要素をターゲットにしなくても、アクションシートのスタイルに使用することができます。

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

:::note
IonicのAngularアプリを構築する場合、スタイルはグローバルなスタイルシートファイルに追加する必要があります。詳しくは、以下のAngularセクションの [Style Placement](#style-placement) をお読みください。
:::


## Interfaces

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
  data?: T;
}
```

### ActionSheetOptions

```typescript
interface ActionSheetOptions {
  header?: string;
  subHeader?: string;
  cssClass?: string | string[];
  buttons: (ActionSheetButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```typescript
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'action-sheet-example',
  templateUrl: 'action-sheet-example.html',
  styleUrls: ['./action-sheet-example.css'],
})
export class ActionSheetExample {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
```


### Style Placement

Angularでは、特定のページのCSSは、そのページの要素にのみスコープされます。アクションシートはページ内から表示することができますが、`ion-action-sheet` 要素は現在のページの外側に追加されます。これは、カスタムスタイルはグローバルなスタイルシートファイルに記述する必要があることを意味します。Ionic Angular スターターでは、`src/global.scss` ファイルを使用するか、[`angular.json` の `styles` build オプションに追加して、新しいグローバルスタイルファイルを登録します](https://angular.io/guide/workspace-config#style-script-config).


</TabItem>


<TabItem value="javascript">

```javascript
async function presentActionSheet() {
  const actionSheet = document.createElement('ion-action-sheet');

  actionSheet.header = 'Albums';
  actionSheet.cssClass = 'my-custom-class';
  actionSheet.buttons = [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    id: 'delete-button',
    data: {
      type: 'delete'
    },
    handler: () => {
      console.log('Delete clicked');
    }
  }, {
    text: 'Share',
    icon: 'share',
    data: 10,
    handler: () => {
      console.log('Share clicked');
    }
  }, {
    text: 'Play (open modal)',
    icon: 'caret-forward-circle',
    data: 'Data value',
    handler: () => {
      console.log('Play clicked');
    }
  }, {
    text: 'Favorite',
    icon: 'heart',
    handler: () => {
      console.log('Favorite clicked');
    }
  }, {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }];
  document.body.appendChild(actionSheet);
  await actionSheet.present();

  const { role, data } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role and data', role, data);
}
```


</TabItem>


<TabItem value="react">

```tsx
/* Using with useIonActionSheet Hook */

import React from 'react';
import {
  IonButton,
  IonContent,
  IonPage,
  useIonActionSheet,
} from '@ionic/react';

const ActionSheetExample: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
              header: 'Action Sheet'
            })
          }
        >
          Show ActionSheet
        </IonButton>
        <IonButton
          expand="block"
          onClick={() =>
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet')
          }
        >
          Show ActionSheet using params
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet');
            setTimeout(dismiss, 3000);
          }}
        >
          Show ActionSheet, hide after 3 seconds
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* Using with IonActionSheet Component */

import React, { useState } from 'react';
import { IonActionSheet, IonContent, IonButton } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';

export const ActionSheetExample: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">
        Show Action Sheet
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: share,
          data: 10,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: caretForwardCircle,
          data: 'Data value',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: heart,
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
    </IonContent>
  );
}
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { actionSheetController } from '@ionic/core';

@Component({
  tag: 'action-sheet-example',
  styleUrl: 'action-sheet-example.css'
})
export class ActionSheetExample {
  async presentActionSheet() {
    const actionSheet = await actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentActionSheet()}>Present Action Sheet</ion-button>
      </ion-content>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-button @click="presentActionSheet">Show Action Sheet</ion-button>
</template>

<script>
import { IonButton, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

export default defineComponent({
  components: { IonButton },
  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          header: 'Albums',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              id: 'delete-button', 
              data: {
                type: 'delete'
              },
              handler: () => {
                console.log('Delete clicked')
              },
            },
            {
              text: 'Share',
              icon: share,
              data: 10,  
              handler: () => {
                console.log('Share clicked')
              },
            },
            {
              text: 'Play (open modal)',
              icon: caretForwardCircle,
              data: 'Data value',
              handler: () => {
                console.log('Play clicked')
              },
            },
            {
              text: 'Favorite',
              icon: heart,
              handler: () => {
                console.log('Favorite clicked')
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked')
              },
            },
          ],
        });
      await actionSheet.present();

      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    },
  },
});
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <ion-button @click="setOpen(true)">Show Action Sheet</ion-button>
  <ion-action-sheet
    :is-open="isOpenRef"
    header="Albums"
    css-class="my-custom-class"
    :buttons="buttons"
    @didDismiss="setOpen(false)"
  >
  </ion-action-sheet>
</template>

<script>
import { IonActionSheet, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

export default defineComponent({
  components: { IonActionSheet, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const buttons = [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        data: {
          type: 'delete'
        }
        handler: () => {
          console.log('Delete clicked')
        },
      },
      {
        text: 'Share',
        icon: share,
        data: 10,  
        handler: () => {
          console.log('Share clicked')
        },
      },
      {
        text: 'Play (open modal)',
        icon: caretForwardCircle,
        data: 'Data value',  
        handler: () => {
          console.log('Play clicked')
        },
      },
      {
        text: 'Favorite',
        icon: heart,
        handler: () => {
          console.log('Favorite clicked')
        },
      },
      {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked')
        },
      },
    ];
    
    return { buttons, isOpenRef, setOpen }
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