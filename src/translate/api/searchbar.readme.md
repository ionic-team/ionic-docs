# ion-searchbar

Searchbarは、collection内の検索に使用できるテキストフィールドを表します。これらは、toolbarまたはメインコンテンツの内部に表示できます。

Listを検索するInputの代わりに、Searchbarを使用する必要があります。Searchbarのテキストフィールドに入力すると、クリアボタンが表示されます。クリアボタンをクリックすると、テキストフィールドが消去され、入力はフォーカスされたままになります。キャンセルボタンを有効にすると、入力がクリアされ、クリック時にフォーカスが失われます。

## Keyboard Display

### Android

By default, tapping the input will cause the keyboard to appear with a magnifying glass icon on the submit button. You can optionally set the `inputmode` property to `"search"`, which will change the icon from a magnifying glass to a carriage return.

### iOS

By default, tapping the input will cause the keyboard to appear with the text "return" on a gray submit button. You can optionally set the `inputmode` property to `"search"`, which will change the text from "return" to "go", and change the button color from gray to blue. Alternatively, you can wrap the `ion-searchbar` in a `form` element with an `action` property. This will cause the keyboard to appear with a blue submit button that says "search".

## Interfaces

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string;
}
```

### SearchbarCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SearchbarCustomEvent extends CustomEvent {
  detail: SearchbarChangeEventDetail;
  target: HTMLIonSearchbarElement;
}
```
