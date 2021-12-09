# ion-accordion-group

Accordion group is a container for accordion instances. It manages the state of the accordions and provides keyboard navigation.

For more information as well as usage, see the [Accordion Documentation](./accordion)

## Interfaces

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}
```

### AccordionGroupCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: AccordionGroupChangeEventDetail<T>;
  target: HTMLIonAccordionGroupElement;
}
```
