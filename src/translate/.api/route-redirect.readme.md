# ion-route-redirect

A redirect router can only be used in the scope of `ion-router` as a direct children of it.

> Note: this is only meant for vanilla JavaScript project. For Angular projects, use `ion-router-outlet` and the Angular router.

This route has only two configurable values:
 - `from`
 - `to`

Their meaning is obvious under the context of a redirection, that occurs `from` a given URL `to` another given URL.

In other for a redirection to occurs the `from` path needs to be an exact match of the navigated URL.

## Redirection evaluation

An arbitrary number of redirect routes can be defined inside an `ion-router`, but only one can match.

Also, a redirection route WILL never redirect to another redirection router, since this could lead to infinity loops.

Let's say we have this two redirection rules:

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"/>
  <ion-route-redirect from="/login" to="/admin"/>
</ion-router>
```

And the user navigates to `/admin`. The router will then redirect to `/login` and stop there.

It WILL NOT never evaluate more than one redirection rule in a roll.


## Examples

### Simple path

```html
<ion-route-redirect from="/admin" to="/login">
```

This route will apply (redirect) when the user navigates to: `/admin` but it will NOT apply if the user navigates to `/admin/posts`.

In order to match any subpath of admin, the wildcard character (`*`) needs to be used.

```html
<ion-route-redirect from="/admin/*" to="/login">
```

### Redirect all routes to login

Redirection routes can work as guards, since that can prevent user to navigate to areas to your application based in a given condition, for example, if the user is authenticated or not.


```tsx
{!this.isLoggedIn &&
  <ion-route-redirect from="*" to="/login"/> }
```

A router can be added and removed dynamically to redirect (or guard) some routes from being accessed.

Another approach is to modify the value of `to`, since given `to` the value of `null` or `undefined` makes disables the redirection.

```tsx
 <ion-route-redirect from="*" to={this.isLoggedin ? undefined : '/login'}/>
```
