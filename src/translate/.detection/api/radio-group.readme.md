# ion-radio-group

A radio group is a group of [radio buttons](../radio). It allows
a user to select at most one radio button from a set. Checking one radio
button that belongs to a radio group unchecks any previous checked
radio button within the same group.

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
