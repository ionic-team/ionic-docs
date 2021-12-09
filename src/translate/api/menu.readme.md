# ion-menu

Menuコンポーネントは、現在のビューの横からスライドするナビゲーションパネルです。
デフォルトでは左からスライドしますが、サイドはオーバーライドできます。
Menuの表示はmodeによって異なりますが、表示するtypeはmenuのtypeによって変更することができます。
menu要素は、root content要素と同じ深度である必要があります。
コンテンツにつけるMenuの数に制限はありません。
これらはテンプレートから、またはプログラムでMenuControllerを使用して制御できます。

## Interfaces

### MenuCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface MenuCustomEvent<T = any> extends CustomEvent {
  detail: T;
  target: HTMLIonMenuElement;
}
```
