# ion-textarea

The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

Unlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.

The textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.

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
