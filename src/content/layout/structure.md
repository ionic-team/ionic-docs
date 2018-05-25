---
nextText: 'Responsive Grid'
nextUrl: '/docs/layout/grid'
---

# Structure

<p class="intro">
Most Ionic apps follow similar layout structures. Lets dive into what these common layouts are and some common issues to look out for.
</p>

## Common page layouts

Most pages in an Ionic app will have atleast a `header` and `content` while some will also have a footer. Here is a common header + content layout:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Hello World</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <h1>I have some content</h1>
</ion-content>
```

As you can see, the `ion-header` always goes above the content. If we wanted to add a footer to this, it would look like the following example:

```html

<ion-header>
  <ion-toolbar>
    <ion-title>Hello World</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <h1>I have some content</h1>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-buttons slot='end'>
      <ion-button>Navigate</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-footer>
```

It is important to note that the `ion-footer` component should always be below the `ion-content` component.

## Split pane layout

Split pane layouts are another very common layout for apps.

```html
<ion-app>
  <ion-split-pane>

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
            <ion-item button href='/'>
              <ion-icon slot="start" name='home'></ion-icon>
              <ion-label>
                Home
              </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet main></ion-router-outlet>

  </ion-split-pane>
</ion-app>
```

In this case we have a menu that is going to be on the left side of an app and an `ion-router-outlet` which is going to be for the main pages of an app. This markup will give an expanded layout on larger devices such as a tablet or laptop

![expanded layout](/docs/assets/img/layout/largeLayout.png)

and a smaller layout with a slide out menu on mobile devices

![smaller layout](/docs/assets/img/layout/smallLayout.png)

