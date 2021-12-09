# ion-radio-group

radio groupは[radio buttons](../radio)のグループです。
1つのセットから最大1つのradio buttonを選択できます。
radio groupに属するradio buttonを1つ選択すると、
同じグループ内で以前に選択されていたradio buttonの選択が解除されます。

## Interfaces

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RadioGroupCustomEvent<T = any> extends CustomEvent {
  detail: RadioGroupChangeEventDetail<T>;
  target: HTMLIonRadioGroupElement;
}
```
