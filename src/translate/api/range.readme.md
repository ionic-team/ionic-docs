# ion-range

Range sliderを使用すると、sliderのつまみを動かして値の範囲を選択できます。
2つのつまみを使用できますが、デフォルトでは、
1つのつまみで範囲の値を制御します。

## Range Labels

要素に `slot="start"` または `slot="end"` を追加すると、
Labelを範囲の両側に配置できます。
要素は `ion-label` である必要はなく、
任意の要素に追加して、rangeの左または右に配置できます。

## Custom Pin Formatters

When using a pin, the default behavior is to round the value that gets displayed using `Math.round()`. This behavior can be customized by passing in a formatter function to the `pinFormatter` property. See the [Usage](#usage) section for an example.

## Interfaces

### RangeChangeEventDetail

```typescript
interface RangeChangeEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveStartEventDetail

```typescript
interface RangeKnobMoveStartEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveEndEventDetail

```typescript
interface RangeKnobMoveEndEventDetail {
  value: RangeValue;
}
```

### RangeCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
```

## Types

### RangeValue

```typescript
type RangeValue = number | { lower: number, upper: number };
```
