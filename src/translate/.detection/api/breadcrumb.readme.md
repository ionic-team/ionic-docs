# ion-breadcrumb

A Breadcrumb is a single navigation item that is a child of the Breadcrumbs component. A breadcrumb can link elsewhere in an app or it can be plain text. Each breadcrumb has a separator between it and the next breadcrumb and can optionally contain an icon.

## Interfaces

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing .

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
}
```

