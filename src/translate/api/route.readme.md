# ion-route

The route component takes a component and renders it when the Browser URL matches the url property.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`ion-router-outlet`](../router-outlet) and the Angular router.

## Navigation Hooks

Navigation hooks can be used to perform tasks or act as navigation guards. Hooks are used by providing functions to the `beforeEnter` and `beforeLeave` properties on each `ion-route`. Returning `true` allows navigation to proceed, while returning `false` causes it to be cancelled. Returning an object of type `NavigationHookOptions` allows you to redirect navigation to another page.

## Interfaces

```typescript
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
```

