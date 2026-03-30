---
title: Utility Functions
sidebar_label: Utility Functions
---

<head>
  <title>Ionic React Utility Functions: useIonRouter Hook</title>
  <meta
    name="description"
    content="Ionic React utility functions including useIonRouter for programmatic navigation with custom transitions, Ionic-aware back navigation, and routing history control."
  />
</head>

Ionic React provides utility functions for common tasks like programmatic navigation and controlling page transitions.

## Router

### useIonRouter

▸ **useIonRouter**(): [`UseIonRouterResult`](#useionrouterresult)

Returns the Ionic router instance, which provides methods for programmatic navigation with control over page transitions. Use this hook instead of React Router's `useNavigate` when you need to customize the transition animation or use Ionic-aware back navigation.

#### Customizing Page Transitions

```tsx
import { useIonRouter } from '@ionic/react';
import { customAnimation } from '../animations/customAnimation';

const MyComponent: React.FC = () => {
  const router = useIonRouter();

  const goToPage = () => {
    router.push('/my-page', 'forward', 'push', undefined, customAnimation);
  };

  const goBack = () => {
    router.goBack(customAnimation);
  };

  ...
};
```

#### Back Navigation

The `goBack()` method navigates within the current Ionic navigation stack, unlike React Router's `navigate(-1)` which follows the browser's linear history.

```tsx
import { useIonRouter } from '@ionic/react';

const MyComponent: React.FC = () => {
  const router = useIonRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.goBack();
    }
  };

  ...
};
```

#### canGoBack

Use `canGoBack()` to check whether there are additional routes in the Ionic router's history. This is useful when deciding whether to show a back button or handle the hardware back button on Android.

```tsx
import { useIonRouter } from '@ionic/react';

const MyComponent: React.FC = () => {
  const router = useIonRouter();

  // Returns true if more entries exist in Ionic's history stack
  const hasHistory = router.canGoBack();

  ...
};
```

#### navigateRoot

Use `navigateRoot()` to navigate to a new root pathname, clearing the navigation history and unmounting all previous views. After navigation, `canGoBack()` will return `false`. This is useful for navigating to a new root after login or logout.

```tsx
import { useIonRouter } from '@ionic/react';

const MyComponent: React.FC = () => {
  const router = useIonRouter();

  const handleLogout = () => {
    router.navigateRoot('/login');
  };

  ...
};
```

Review the [React Navigation Documentation](./navigation.md) for more navigation examples.

### Interfaces

#### UseIonRouterResult

```typescript
import { AnimationBuilder, RouterDirection, RouteAction, RouterOptions, RouteInfo } from '@ionic/react';

type UseIonRouterResult = {
  /**
   * Navigates to a new pathname
   * @param pathname - The path to navigate to
   * @param routerDirection - Optional - The RouterDirection to use for transition purposes, defaults to 'forward'
   * @param routeAction - Optional - The RouteAction to use for history purposes, defaults to 'push'
   * @param routerOptions - Optional - Any additional parameters to pass to the router
   * @param animationBuilder - Optional - A custom transition animation to use
   */
  push(
    pathname: string,
    routerDirection?: RouterDirection,
    routeAction?: RouteAction,
    routerOptions?: RouterOptions,
    animationBuilder?: AnimationBuilder
  ): void;
  /**
   * Navigates backwards in history, using the IonRouter to determine history
   * @param animationBuilder - Optional - A custom transition animation to use
   */
  goBack(animationBuilder?: AnimationBuilder): void;
  /**
   * Navigates to a new root pathname, clearing the navigation history and unmounting all previous views.
   * After navigation, canGoBack() will return false. Useful for navigating to a new root after login/logout.
   * @param pathname - The path to navigate to
   * @param animationBuilder - Optional - A custom transition animation to use
   */
  navigateRoot(pathname: string, animationBuilder?: AnimationBuilder): void;
  /**
   * Determines if there are any additional routes in the Router's history. However, routing is not prevented if the browser's history has more entries. Returns true if more entries exist, false if not.
   */
  canGoBack(): boolean;
  /**
   * Information about the current route.
   */
  routeInfo: RouteInfo;
  /**
   * @deprecated Use goBack instead.
   * @param animationBuilder - Optional - A custom transition animation to use
   */
  back(animationBuilder?: AnimationBuilder): void;
};
```
