# ion-nav

Navは、任意のコンポーネントをロードし、スタックに新しいコンポーネントを追加するためのスタンドアロンコンポーネントです

RouterOutletとは異なり、Navは特定のルーターに関連付けられていません。つまり、Navコンポーネントをロードして他のコンポーネントをスタックに追加しても、ルーター全体のアプリケーションには影響しません。これは、独自のサブナビゲーションを必要とするが、アプリのURLに縛られないモーダルを持つことができるユースケースに適しています。

## Interfaces

### NavCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface NavCustomEvent extends CustomEvent {
  target: HTMLIonNavElement;
}
```
