---
title: Components
nextText: API Reference
nextUrl: /docs/api
previewUrl: /docs/content/component-preview-app/docs-www
previewSource: https://github.com/ionic-team/component-preview/tree/master/src/components
hideTOC: true
---

<p class="intro">
  Ionic apps are made of high-level building blocks called components.
  Components allow you to quickly construct an interface for your app. Ionic
  comes with a number of components, including modals, popups, and cards. Check
  out the examples below to see what each component looks like and to learn how
  to use each one. Once you’re familiar with the basics, head over to the [API
  docs](/docs/api) for ideas on how to customize each component.
</p>

<component-preview></component-preview>

## Action Sheet

Action Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Action Sheets can sometimes be used as an alternative to menus, however, they should not be used for navigation.


## Alert
 
Alerts are a great way to offer the user the ability to choose a specific action or list of actions. Alerts can include contain text, inputs and buttons. They can provide the user with important information, or require them to make a decision (or multiple decisions). Alerts should only be used for quick actions like password verification, small app notifications, or quick options.


## Badge

The Badge component is a small component that typically communicates a numerical value to the user. They are normally used within an item. 

```html
<!-- Default -->
<ion-badge>99</ion-badge>

<!-- Colors -->
<ion-badge color="primary">11</ion-badge>
<ion-badge color="secondary">22</ion-badge>
<ion-badge color="tertiary">33</ion-badge>
<ion-badge color="success">44</ion-badge>
<ion-badge color="warning">55</ion-badge>
<ion-badge color="danger">66</ion-badge>
```


## Button

Buttons are an essential way to interact with and navigate through an app, and should clearly communicate what action will occur after the user taps them. Buttons are highly customizeable with color, shape and size being fully customizeable. We support round buttons, FAB buttons, outline buttons and more!

```html
<ion-button shape="round" color="primary" fill="outline">Hello World</ion-button>
<ion-button size="small">Small Button</ion-button>
```


## Card

Card components are a great way to display important pieces of content, and are quickly emerging as a core design
pattern for apps. Cards can contain images, buttons, text and more. Cards can also be used standalone, in a list or in
a grid.

```html
<ion-card>
    <ion-img src="/assets/myImg.png"></ion-img>
    <ion-card-header>
        <ion-card-title>Hello World</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <p>The content for this card</p>
    </ion-card-content>
</ion-card>
```


## Checkbox

A checkbox can be used to let the user know they need to make a binary decision. It provides a clear visual of either a true or false choice. ion-checkbox should always be used with ion-item. If you prefer the look of radio inputs, you can also use `ion-radio` or if you prefer toggles you can use `ion-toggle`.

```html
<ion-checkbox color="primary" checked></ion-checkbox>
<ion-checkbox color="secondary"></ion-checkbox>
<ion-checkbox color="danger" checked></ion-checkbox>
<ion-checkbox color="light"></ion-checkbox>
<ion-checkbox color="dark" checked></ion-checkbox>
```


## DateTime

DateTime is used to present an interface which makes it easy for users to select dates and times. Datetime will look like a native iOS date picker when rendered on an iOS device and will have a material look on all other platforms. Datetime should always be used within an `ion-item`.

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>
</ion-item>
```

## Fab

A floating action button (FAB) is a circular button that performs the primary, or most common, action on a screen. It floats above the content of the page and is normally colored either the primary or secondary color of the app. FAB buttons can also be positioned easily using the `horizontal`, `vertical` and `slot` attributes.

```html
<ion-fab vertical="bottom" horizontal="end" slot="fixed">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

## Grid

Grid is a powerful mobile-first system for building custom layouts. The Grid component can be used to ensure your app looks great on any device. It is heavily influenced by Bootstrap's grid system.

```html
<ion-grid>
  <ion-row>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col size="6">
      ion-col [size="6"]
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
    <ion-col>
      ion-col
    </ion-col>
  </ion-row>
</ion-grid>
```

## Infinite Scroll

An infinite scroll allows you to perform an action when the user scrolls a specified distance from the bottom or top of the page, such as loading more data in a long list of paginated data. It is also very customizeable with different loading indicators supported.


```html
<ion-infinite-scroll>
  <ion-infinite-scroll-content
    loadingSpinner="bubbles"
    loadingText="Loading more data...">
  </ion-infinite-scroll-content>
</ion-infinite-scroll>
```

## Input

Inputs allow users to enter data into a UI. They typically appear in forms and dialogs. They should always be wrapped with an `ion-item`.

```html
<ion-item>
  <ion-input required type="text" placeholder="First Name"></ion-input>
</ion-item>
```

## List

The list component is used to display rows of information, such as a contact list, playlist, or menu. It can display cards, list items and more. Lists are also very customizeable and match the design of the native Android and iOS lists by default.

```html
<ion-list>
  <ion-item>
    <ion-avatar slot="start">
      <img src="/docs/assets/img/avatar-finn.png"></img>
    </ion-avatar>
    <ion-label>
      <h2>Finn</h2>
      <h3>I'm a big deal</h3>
      <p>Listen, I've had a pretty messed up day...</p>
    </ion-label>
  </ion-item>
</ion-list>
```


## Loading

Loading is an overlay that prevents user interaction while indicating activity. 


## Menu

Menus are a common navigation pattern for apps. Menus can either be permanently on-screen (split-pane), swiped into view or toggled through a menu button.

```html
<ion-menu side="start">
  <ion-header translucent>
    <ion-toolbar color="secondary">
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-menu>
```

## Modal

Modals slide in and off screen to display a temporary UI. Modals are often used for login or signup pages, message composition,and option selection.


## Nav

Navigation is how users move between different pages in your app. Ionic’s navigation follows standard navigation concepts and animated transitions. Ionic's nav can also adapt to larger viewports using [ion-split-pane](/docs/api/split-pane)

```html
<ion-app>
  <ion-nav root="page-one"></ion-nav>
</ion-app>
```

## Popover

The Popover is a view that floats above an app’s content. Popovers provide an easy way to present or gather information from the user and are commonly used in the following situations:

- Show more info about the current view
- Select a commonly used tool or configuration
- Present a list of actions to perform inside one of your views


## Range

A Range is a form control that lets users select from a range of values by moving a slider knob along the slider bar. Range must always be wrapped in an `ion-item`

```html
<ion-item>
  <ion-range>
    <ion-icon slot="start" size="small" name="sunny"></ion-icon>
    <ion-icon slot="end" name="sunny"></ion-icon>
  </ion-range>
</ion-item>
```

## Refresher

Refresh provides pull-to-refresh functionality on a content component. A common use case for the refresher component is to reload data.

```html
<ion-content fullscreen>
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
</ion-content>
```


## Searchbar

Searchbars are used to search or filter items. They are normally used inside an `ion-toolbar`.

```html
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

## Select

The ion-select component is similar to an HTML `<select>` element, however, Ionic’s select component makes it easier for users to sort through and select the preferred option. It also matches the look of the native Android and iOS select inputs. It must be wrapped in an `ion-item`.

```html
<ion-item>
  <ion-label>Hair Color</ion-label>
  <ion-select value="brown" ok-text="Okay" cancel-text="Dismiss">
    <ion-select-option value="brown">Brown</ion-select-option>
    <ion-select-option value="blonde">Blonde</ion-select-option>
    <ion-select-option value="black">Black</ion-select-option>
    <ion-select-option value="red">Red</ion-select-option>
  </ion-select>
</ion-item>
```

## Slides

Slides make it easy to create complex UI such as galleries, tutorials, and page-based layouts.

```html
<ion-slides pager="true">
  <ion-slide>
    <h1>Slide 1</h1>
  </ion-slide>

  <ion-slide>
    <h1>Slide 2</h1>
  </ion-slide>

  <ion-slide>
    <h1>Slide 3</h1>
  </ion-slide>
</ion-slides>
```

## Spinner

The `ion-spinner` component provides a variety of animated SVG spinners. Spinners enables you to give users feedback that the app is actively processing/thinking/waiting/chillin’ out, or whatever you’d like it to indicate.

```html
<ion-spinner></ion-spinner>
<ion-spinner name="lines"></ion-spinner>
```

## Tabs

Tabs enable tabbed navigation, a standard navigation pattern in modern apps. Tabs can display an icon and label to give the user visual feedback of where they are in the app. Tabs can also easily be placed at the top of an app, although by default they are placed at the bottom to match the Material Design and iOS design guidelines.

```html
<ion-tabs>
  <ion-tab label="Music" icon="musical-note"></ion-tab>
  <ion-tab label="Profile" icon="person"></ion-tab>
  <ion-tab label="people" icon="people"></ion-tab>
</ion-tabs>
```

## Toast

The toast component is a subtle notification that appears on top of an app’s content. The toast component can be used to display a short message to the user. Toasts are displayed full width across the bottom of your app on mobile. On tablet / desktop devices the toast will be centered and not full width.


## Virtual Scroll

Virtual Scroll is a virtual list that allows you to performantly scroll through huge lists. Virtual Scroll only renders the items that are currently being viewed in the list.