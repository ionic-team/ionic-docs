# ion-checkbox

Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the `checked` property. They can also be checked programmatically by setting the `checked` property.

## Interfaces

### CheckboxChangeEventDetail

```typescript
interface CheckboxChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### CheckboxCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface CheckboxCustomEvent<T = any> extends CustomEvent {
  detail: CheckboxChangeEventDetail<T>;
  target: HTMLIonCheckboxElement;
}
```

