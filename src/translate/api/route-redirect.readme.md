# ion-route-redirect

A route redirect can only be used with an `ion-router` as a direct child of it.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`ion-router-outlet`](../router-outlet) and the Angular router.

The route redirect has two configurable properties:
 - `from`
 - `to`

It redirects "from" a URL "to" another URL. When the defined `ion-route-redirect` rule matches, the router will redirect from the path specified in the `from` property to the path in the `to` property. In order for a redirect to occur the `from` path needs to be an exact match to the navigated URL.


## Multiple Route Redirects

An arbitrary number of redirect routes can be defined inside an `ion-router`, but only one can match.

A route redirect will never call another redirect after its own redirect, since this could lead to infinite loops.

Take the following two redirects:

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>
  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>
</ion-router>
```

If the user navigates to `/admin` the router will redirect to `/login` and stop there. It will never evaluate more than one redirect.

