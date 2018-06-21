---
nextText: 'Responsive Grid'
nextUrl: '/docs/layout/grid'
---

# Structure

<p class="intro">
Ionic Framework provides several different layouts that can be used to structure an app. From single page layouts, to split pane views and modals.
</p>

## Header and Footer Layout

### Header

The most simple layout available consists of a [header](/docs/api/header) and [content](/docs/api/content). Most pages in an app generally have both of these, but a header is not required in order to use content.

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content padding>
    <h1>Main Content</h1>
  </ion-content>
</ion-app>
```

### Footer

As you can see, a toolbar in a header appears above the content. Sometimes an app needs to have a toolbar below the content, which is when a footer is used.

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content padding>
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-content>
```


## Split Pane Layout

A [split pane](/docs/api/split-pane) layout has a more complex structure. It allows for multiple views to be displayed when the viewport is above a specified breakpoint. If the device's screen size is below a certain size, the split pane view will be hidden.

By default, the split pane view will show when the screen is larger than `768px`, or the `md` breakpoint, but this can be customized to use different breakpoints by setting the `when` property. Below is an example where the split pane contains a menu that is visible for `sm` screens and up, or when the viewport is larger than `576px`. By resizing the browser horizontally so that the app is smaller than this, the split pane view will disappear.


```html
<ion-app>
  <ion-split-pane when="sm">
    <ion-menu>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header>
            Navigate
          </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name='home'></ion-icon>
              <ion-label>
                Home
              </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-page class="ion-page" main>
      <ion-header>
        <ion-toolbar>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content padding>
        Main Content
      </ion-content>
    </ion-page>

  </ion-split-pane>
</ion-app>
```

It's important to note that the element with the `main` attribute will be the main content that is always visible. This can be any element, including an [ion-nav](/docs/api/nav), [ion-router-outlet](/docs/api/router-outlet), or an [ion-tabs](/docs/api/tabs).