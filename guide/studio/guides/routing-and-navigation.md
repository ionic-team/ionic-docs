# Routing and Navigation

A key part of developing Ionic apps is setting up routing and ensuring fluid navigation between pages.

The Ionic Framework docs have a [great primer](../../angular/navigation.md) on Angular routing and navigation.

## Quick Tips

The following tips assume you already know the basics about Angular routing.

### Adding a New Page

When you add a new Page in Ionic Studio, it is automatically added to the routing configuration inside of `app-routing.module.ts`.

<figure>
  <img alt="Page added to App Routing Module" src="/img/studio/ss-page-routing-module.png" />
</figure>

If you'd like to change where this page is "located", you might want to move the Route into a different routing or module file.

### Using a Page in Multiple Places

You can use the same page in multiple places by ensuring that a route exists for it from those locations. For instance, if you'd like the "Detail" Page to be accessible inside of Tab1 of your application as well as Tab2, you'd want a `/detail` declaration in the router for both Tab1 and Tab2.

### Using RouterLink

You should be using the `[routerLink]="['/tabs','tab1']"` style of navigation when trying to make a button or list-item (or other component) link to a different page.

If this throws an error, you need to ensure that RouterModule is included in your pages module.
