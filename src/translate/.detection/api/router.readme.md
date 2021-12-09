# ion-router

The router is a component for handling routing inside vanilla and Stencil JavaScript projects.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`ion-router-outlet`](../router-outlet) and the Angular router.

Apps should have a single `ion-router` component in the codebase.
This component controls all interactions with the browser history and it aggregates updates through an event system.

`ion-router` is just a URL coordinator for the navigation outlets of ionic: `ion-nav` and `ion-tabs`.

That means the `ion-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `ion-nav` and `ion-tabs` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `ion-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```
