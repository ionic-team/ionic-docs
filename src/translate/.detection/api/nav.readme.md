# ion-nav

Nav is a standalone component for loading arbitrary components and pushing new components on to the stack.

Unlike Router Outlet, Nav is not tied to a particular router. This means that if we load a Nav component, and push other components to the stack, they will not affect the app's overall router. This fits use cases where you could have a modal, which needs its own sub-navigation, without making it tied to the apps URL.

## Interfaces

### NavCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface NavCustomEvent extends CustomEvent {
  target: HTMLIonNavElement;
}
```
