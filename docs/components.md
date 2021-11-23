---
title: UI Components
hide_table_of_contents: true
---

import DocsCard from '@theme/DocsCard';
import DocsCards from '@theme/DocsCards';

<head>
  <title>UI Components | User Interface Application Building Components</title>
  <meta name="description" content="Ionic Framework comes stock with a number of high-level UI components, including cards, lists, and tabs to quickly and easily build your app's user interface." />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic apps are made of high-level building blocks called Components, which allow you to quickly construct the UI for your app. Ionic comes stock with a number of components, including cards, lists, and tabs. Once you’re familiar with the basics, refer to the [API Index](api.md) for a complete list of each component and sub-component.

<intro-end />

<DocsCards>
  <DocsCard header="Action Sheet" href="api/action-sheet" img={require('./components/_assets/img/feature-component-actionsheet-icon.png').default}>
    <p>Action Sheets display a set of options with the ability to confirm or cancel an action.</p>
  </DocsCard>

  <DocsCard header="Alert" href="api/alert" icon={require('./components/_assets/img/component-alert-icon.png').default}>
    <p>Alerts are a great way to offer the user the ability to choose a specific action or list of actions.</p>
  </DocsCard>

  <DocsCard header="Badge" href="api/badge" icon={require('./components/_assets/img/component-badge-icon.png').default}>
    <p>Badges are a small component that typically communicate a numerical value to the user.</p>
  </DocsCard>

  <DocsCard header="Button" href="api/button" icon={require('./components/_assets/img/component-button-icon.png').default}>
    <p>Buttons let your users take action. They're an essential way to interact with and navigate through an app.</p>
  </DocsCard>

  <DocsCard header="Card" href="api/card" icon={require('./components/_assets/img/component-card-icon.png').default}>
    <p>Cards are a great way to display an important piece of content, and can contain images, buttons, text, and more.</p>
  </DocsCard>

  <DocsCard header="Checkbox" href="api/checkbox" icon={require('./components/_assets/img/component-checkbox-icon.png').default}>
    <p>Checkboxes can be used to let the user know they need to make a binary decision.</p>
  </DocsCard>

  <DocsCard header="Chip" href="api/chip" icon={require('./components/_assets/img/component-chip-icon.png').default}>
    <p>Chips are a compact way to display data or actions.</p>
  </DocsCard>

  <DocsCard header="Content" href="api/content" icon={require('./components/_assets/img/component-content-icon.png').default}>
    <p>Content is the quintessential way to interact with and navigate through an app.</p>
  </DocsCard>

  <DocsCard header="Date & Time Pickers" href="api/datetime" icon={require('./components/_assets/img/component-datetimepicker-icon.png').default}>
    <p>Date & time pickers are used to present an interface that makes it easy for users to select dates and times.</p>
  </DocsCard>

  <DocsCard header="Floating Action Button" href="api/fab" icon={require('./components/_assets/img/component-fab-icon.png').default}>
    <p>Floating action buttons are circular buttons that perform a primary action on a screen.</p>
  </DocsCard>

  <DocsCard header="Icons" href="https://ionic.io/ionicons" img={require('./components/_assets/img/feature-component-icons-icon.png').default}>
    <p>Beautifully designed icons for use in web, iOS, Android, and desktop apps.</p>
  </DocsCard>

  <DocsCard header="Grid" href="api/grid" icon={require('./components/_assets/img/component-grid-icon.png').default}>
    <p>The grid is a powerful mobile-first system for building custom layouts.</p>
  </DocsCard>

  <DocsCard header="Infinite Scroll" href="api/infinite-scroll" icon={require('./components/_assets/img/component-infinitescroll-icon.png').default}>
    <p>Infinite scroll allows you to load new data as the user scrolls through your app.</p>
  </DocsCard>

  <DocsCard header="Input" href="api/input" icon={require('./components/_assets/img/component-input-icon.png').default}>
    <p>Inputs provides a way for users to enter data in your app.</p>
  </DocsCard>

  <DocsCard header="Item" href="api/item" icon={require('./components/_assets/img/component-item-icon.png').default}>
    <p>Items are an all-purpose UI container that can be used as part of a list.</p>
  </DocsCard>

  <DocsCard header="List" href="api/list" icon={require('./components/_assets/img/component-lists-icon.png').default}>
    <p>Lists can display rows of information, such as a contact list, playlist, or menu.</p>
  </DocsCard>

  <DocsCard header="Navigation" href="api/nav" img={require('./components/_assets/img/feature-component-navigation-icon.png').default}>
    <p>Navigation is how users move between different pages in your app.</p>
  </DocsCard>

  <DocsCard header="Menu" href="api/menu" icon={require('./components/_assets/img/component-menu-icon.png').default}>
    <p>Menus are a common navigation pattern. They can be permanently on-screen, or revealed when needed.</p>
  </DocsCard>

  <DocsCard header="Modal" href="api/modal" icon={require('./components/_assets/img/component-modal-icon.png').default}>
    <p>Modals slide in and off screen to display a temporary UI and are often used for login or sign-up pages.</p>
  </DocsCard>

  <DocsCard header="Popover" href="api/popover" icon={require('./components/_assets/img/component-popover-icon.png').default}>
    <p>Popover provides an easy way to present information or options without changing contexts.</p>
  </DocsCard>

  <DocsCard header="Progress Indicators" href="api/progress-bar" icon={require('./components/_assets/img/component-progress-icon.png').default}>
    <p>Progress indicators visualize the progression of an operation or activity.</p>
  </DocsCard>

  <DocsCard header="Radio" href="api/radio" icon={require('./components/_assets/img/component-radio-icon.png').default}>
    <p>Radio inputs allow you to present a set of exclusive options.</p>
  </DocsCard>

  <DocsCard header="Refresher" href="api/refresher" icon={require('./components/_assets/img/component-refresher-icon.png').default}>
    <p>Refresher provides pull-to-refresh functionality on a content component.</p>
  </DocsCard>

  <DocsCard header="Searchbar" href="api/searchbar" img={require('./components/_assets/img/feature-component-search-icon.png').default}>
    <p>Searchbar is used to search or filter items, usually from a toolbar.</p>
  </DocsCard>

  <DocsCard header="Reorder" href="api/reorder" icon={require('./components/_assets/img/component-reorder-icon.png').default}>
    <p>Reorder lets users drag and drop to reorder a list of items.</p>
  </DocsCard>

  <DocsCard header="Routing" href="api/router" icon={require('./components/_assets/img/component-routing-icon.png').default}>
    <p>Routing allows navigation based on the current path.</p>
  </DocsCard>

  <DocsCard header="Segment" href="api/segment" icon={require('./components/_assets/img/component-segment-icon.png').default}>
    <p>Segments provide a set of exclusive buttons that can be used as a filter or view switcher.</p>
  </DocsCard>

  <DocsCard header="Select" href="api/select" icon={require('./components/_assets/img/component-select-icon.png').default}>
    <p>Select is similar to the native HTML select, with a few improvements to sorting and selecting.</p>
  </DocsCard>

  <DocsCard header="Slides" href="api/slides" icon={require('./components/_assets/img/component-slides-icon.png').default}>
    <p>Slides make it easy to create complex UI such as galleries, tutorials, and page-based layouts.</p>
  </DocsCard>

  <DocsCard header="Tabs" href="api/tabs" img={require('./components/_assets/img/feature-component-tabs-icon.png').default}>
    <p>Tabs enable tabbed navigation, a standard navigation pattern in modern apps.</p>
  </DocsCard>

  <DocsCard header="Toast" href="api/toast" icon={require('./components/_assets/img/component-toast-icon.png').default}>
    <p>Toast is used to show a notification over the top of an app's content. It can be temporary or dismissable.</p>
  </DocsCard>

  <DocsCard header="Toggle" href="api/toggle" icon={require('./components/_assets/img/component-toggle-icon.png').default}>
    <p>Toggles are an input for binary options, often used for options and switches.</p>
  </DocsCard>

  <DocsCard header="Toolbar" href="api/toolbar" icon={require('./components/_assets/img/component-toolbar-icon.png').default}>
    <p>Toolbars are used to house information and actions relating to your app.</p>
  </DocsCard>
</DocsCards>
