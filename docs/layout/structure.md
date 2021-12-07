---
title: Structure
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Structure Layout | Structures for Content Layout on Ionic Apps</title>
  <meta
    name="description"
    content="Ionic provides several different layouts that can be used to structure an app and its content—from single page layouts, to split pane views and modals."
  />
</head>

Ionic Framework provides several different layouts that can be used to structure an app. From single page layouts, to split pane views and modals.

## Header and Footer Layout

### Header

<aside>
  <DocsCard href="../api/header" header="Learn More" icon="/icons/component-header-icon.png">
    <code>ion-header</code> API docs
  </DocsCard>
</aside>

The most simple layout available consists of a [header](../api/header.md) and [content](../api/content.md). Most pages in an app generally have both of these, but a header is not required in order to use content.

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>
</ion-app>
```

### Footer

<aside>
  <DocsCard href="../api/footer" header="Learn More" icon="/icons/component-footer-icon.png">
    <code>ion-footer</code> API docs
  </DocsCard>
</aside>

As you can see, a toolbar in a header appears above the content. Sometimes an app needs to have a toolbar below the content, which is when a footer is used.

```html
<ion-app>
  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### Header and Footer

These can also be combined on one page to have a toolbar above _and_ below the content.

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-header-footer) and for React [here](https://stackblitz.com/edit/ionic-react-head-foot).

## Tabs Layout

A layout consisting of horizontal [tabs](../api/tabs.md) can be used to let the user quickly change between content views. Each tab can contain static content or a navigation stack by using an `ion-router-outlet` or `ion-nav`.

```html
<ion-app>
  <ion-tabs>
    <ion-tab tab="home">
      <h1>Home Content</h1>
    </ion-tab>
    <ion-tab tab="settings">
      <h1>Settings Content</h1>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-label>Home</ion-label>
        <ion-icon name="home"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-label>Settings</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
```

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-tabs) and for React [here](https://stackblitz.com/edit/ionic-react-tab-layout).

## Menu Layout

A standard layout among mobile apps includes the ability to toggle a side [menu](../api/menu.md) by clicking a button or swiping it open from the side. Side menus are generally used for navigation, but they can contain any content.

```html
<ion-app>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header> Navigate </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon slot="start" name="home"></ion-icon>
            <ion-label> Home </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </ion-content>
  </ion-page>
</ion-app>

<ion-menu-controller></ion-menu-controller>
```

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-menu-layout) and for React [here](https://stackblitz.com/edit/ionic-react-menu).

## Split Pane Layout

A [split pane](../api/split-pane.md) layout has a more complex structure because it can combine the previous layouts. It allows for multiple views to be displayed when the viewport is above a specified breakpoint. If the device's screen size is below a certain size, the split pane view will be hidden.

By default, the split pane view will show when the screen is larger than `768px`, or the `md` breakpoint, but this can be customized to use different breakpoints by setting the `when` property. Below is an example where the split pane contains a menu that is visible for `sm` screens and up, or when the viewport is larger than `576px`. By resizing the browser horizontally so that the app is smaller than this, the split pane view will disappear.

```html
<ion-app>
  <ion-split-pane when="sm" content-id="main-content">
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header> Navigate </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name="home"></ion-icon>
              <ion-label> Home </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>Main Content</h1>
      </ion-content>
    </div>
  </ion-split-pane>
</ion-app>
```

It's important to note that the element with the `id` matching the `content-id` specified by the split pane will be the main content that is always visible. This can be any element, including an [ion-nav](../api/nav.md), [ion-router-outlet](../api/router-outlet.md), or an [ion-tabs](../api/tabs.md).

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-split-pane) and for React [here](https://stackblitz.com/edit/ionic-react-split-pane).
