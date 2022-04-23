# ion-item

Itemsは、text, icons, avatars, images, inputsや、その他のnative elements, custom elementsを含むことができる要素です。通常は、他のitemsと共にlistに配置されます。Itemsは、swiped, deleted, reordered, editedなどが可能です。

## clickableなItems

`href` か `button` プロパティが設定されている場合、itemは "clickable（クリック可能）" と見なされます。clickableなitemsには、インタラクティブに操作できることを示す視覚的な違いがいくつかあります。たとえば、clickableなitemは、`md` modeではrippleエフェクトを持ち、`ios` modeではハイライト表示され、`ios` modeでの [detail arrow](/#detail-arrows) が表示されます。

## Detail Arrows

デフォルトでは、[clickableなitems](/#clickable-items) は、`ios` modeで右矢印アイコンを表示します。clickableな要素の右矢印アイコンを非表示にするには、 `detail` プロパティを `false` に設定します。自動的に表示されない項目に右矢印アイコンを表示するには、`detail`プロパティを `true` に設定します。

<!--

TODO add this functionality back as a css variable

This feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:

```css
--item-detail-push-show: true;
```

See the [theming documentation](/docs/theming/css-variables) for more information.

-->


## Itemの配置

Itemは、コンテンツを配置するために [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) を使用します。このロジックにより、エレメントのスタイル設定や配置を気にすることなく、単純でわかりやすいマークアップを使用して複雑なアイテムを作成できます。

次の表に、itemのslotsの詳細と、item内で要素がどこに配置されるかを示します:

| Slot    | Description                                                                 |
|---------|-----------------------------------------------------------------------------|
| `start` | LTRではほかのすべてのコンテンツの左側に配置され、RTLでは `右側` に配置されます        |
| `end`   | LTRではほかのすべてのコンテンツの右側に配置され、RTLでは `左側` に配置されます        |
| none    | Placed inside of the input wrapper.                                         |


### 文字揃え

Itemsはテキストを左揃えにし、テキストがItemsよりも広い場合は省略記号を追加します。テキストを変換するために `<ion-item>` に追加できる属性については、[CSS Utilities Documentation](/docs/layout/css-utilities) を参照してください。


## Inputの強調

### ハイライトのheight

Inputを含むItemは、フォーカスされたとき、有効なとき、無効なときに、異なる色で入力の下枠を強調表示します。デフォルトでは、`md` itemsは height `2px` でハイライトされ、iosはハイライトされません(技術的にはheight `0`に設定される)。heightは `--highlight-height` CSSプロパティーを使用して変更できます。強調表示をオフにするには、この変数を `0` に設定します。CSSプロパティーの設定について詳しくは、[theming documentation](/docs/theming/css-variables)を参照してください。

### ハイライトカラー

ハイライトカラーはItemsの状態に基づいて変化しますが、デフォルトではすべてのstatesでIonicカラーが使用されます。フォーカスすると、Inputハイライトに `primary` colorが使用されます。Inputが有効な場合、`success` colorが使用され、無効なInputは`danger` colorが使用されます。ハイライトカラー変数については、後述の [CSS Custom Properties](#css-custom-properties) を参照してください。

### Counter Formatter

When using `counter`, the default behavior is to format the value that gets displayed as `itemLength / maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property. See the [Usage](#usage) section for an example.

