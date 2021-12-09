# ion-input

inputコンポーネントは、カスタム・スタイル設定と追加機能を持つHTMLのInput要素のラッパーです。HTML Inputとほとんど同じプロパティーを受け入れますが、デスクトップ・デバイスでは優れた動作をし、モバイル・デバイスではキーボードと統合されます。

`"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, と `"url"` などは、Inputのtypeのみで利用できます。 keyup, keydown, keypressなど、すべての標準のtext inputの入力イベントをサポートします。

## Interfaces

### InputChangeEventDetail

```typescript
interface InputChangeEventDetail {
  value: string | undefined | null;
}
```

### InputCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail;
  target: HTMLIonInputElement;
}
```
