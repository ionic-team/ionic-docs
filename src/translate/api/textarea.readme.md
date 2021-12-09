# ion-textarea

textareaコンポーネントは複数行テキストの入力のためのコンポーネントです。ネイティブのtextarea要素がこのコンポーネントの内部に描画されます。ネイティブのtextareaを制御することによって、textareaコンポーネントのユーザ体験と対話性が向上します。

ネイティブのtextarea要素とは異なり、Ionicのtextareaは要素内部のコンテンツからその値を読み込むことをサポートしていません。textareaの値は`value`属性で設定しなくてはなりません。

textareaコンポーネントはIonicのプロパティに加えて[ネイティブのtextareaの属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)に対応します。

## Interfaces

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null;
}
```

### TextareaCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TextareaCustomEvent extends CustomEvent {
  detail: TextareaChangeEventDetail;
  target: HTMLIonTextareaElement;
}
```
