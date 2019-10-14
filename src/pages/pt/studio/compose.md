---
---

# Compose Overview

Compose is the powerhouse of Ionic app development, offering a powerful side-by-side coupling of component code and an interactive canvas for building components.

## Introduction

Pages and components are opened in a split view, bringing code and canvas together.

Compose mode features include:

* Quickly navigate and hone in on code
* Immediate feedback upon even the smallest of changes
* Select from a rich library of elements right at your fingertips
* Reorganize the structure of components simply by dragging them around
* Deep understanding of the elements that make up app components
* Focus on building the app, not fighting with the file tree

<figure>
  <img alt="Compose Mode" src="/docs/assets/img/studio/ss-compose.png" />
</figure>

## Pages and Components

In Compose mode, pages and components are brought to life from the collection of files (such as TypeScript, HTML, CSS, Module, and Spec files) that represent them.

When first loaded, the page index is shown. This list comprises the pages that Ionic Studio found in the app.

<blockquote>
  
<p>Since the difference between pages and components is conceptual, Ionic Studio relies on convention to differentiate them. If there are pages missing, make sure each page follows the convention Ionic Studio is expecting:</p>
<p>The files that represent each page must have the proper suffixes (e.g. <code>.page.ts</code>, <code>.page.html</code>, <code>.page.scss</code>). See the <a href="https://angular.io/guide/styleguide#naming">Angular style guide</a> for additional information about naming conventions.</p>
</blockquote>

<figure>
  <img alt="Page Index" src="/docs/assets/img/studio/ss-page-index.png" />
</figure>

Switching to the component index reveals all the components found in the app.

<figure>
  <img alt="Component Index" src="/docs/assets/img/studio/ss-component-index.png" />
</figure>

See [Adding Features](#adding-features) to create new pages and components.

## Adding Features

To add features to an app, click the **Add Feature** button at the top left of Ionic Studio.

<figure>
  <img alt="New Feature Button" src="/docs/assets/img/studio/ss-new-feature-button.png" />
</figure>

There are several types of features available:

* **Pages**
* **Components**
* **Services**
* **Directives**
* **Route Guards**
* **Pipes**

### Adding Components

When adding a component, Ionic Studio will prompt for the name and a page in which to register it.

<figure>
  <img alt="New Component Modal" src="/docs/assets/img/studio/ss-new-component-modal.png" />
</figure>

This adds the component as a *import* in the NgModule of the selected page, which allows it to be used in that page.

<blockquote>
The same code changes are necessary to use the component in other pages. See <a href="/docs/studio/faq#using-a-custom-component-in-additional-pages">this FAQ</a> for details.
</blockquote>

## Template Mode

In **Template** mode, the code on the left and canvas on the right are synchronized. Navigating or making changes in one will update the other. The [properties panel](#properties-panels) is also updated each time the selected element changes.

A great deal can be accomplished with the interactive canvas and the properties panel alone, but template code may need to be manually edited when extensive dynamic template logic is used, or other complex use cases.

<figure>
  <img alt="Editing Templates" src="/docs/assets/img/studio/ss-compose-template.png" />
</figure>

## Drag & Drop

Compose mode offers drag & drop support when adding new elements and rearranging existing elements.

### Selecting Elements

To select an element, click on it in the canvas. To select a child element, double click on its parent. Continue to double click to select deeper child elements and to edit text.

To exit the current selection, use the <kbd>Esc</kbd> key.

To enable fine-selection, which selects the deepest child under the mouse cursor, hold down the <kbd>Ctrl</kbd> key (or <kbd>Command</kbd> for macOS) and hover over an element.

To select any element under the cursor, right click and choose an element from the `Select Element` dropdown:

<figure>
  <img alt="Selecting elements" src="/docs/assets/img/studio/ss-select-element-menu.png" />
</figure>

To select any element in the current document, access the element tree and click on the element to select:

<figure>
  <img alt="Editing Templates" src="/docs/assets/img/studio/ss-element-tree.png" />
</figure>

### Adding New Elements

To add new elements to a template, first open the element insertion dropdowns by clicking one of the buttons near the top of Compose.

<figure>
  <img alt="Add Element Menu" src="/docs/assets/img/studio/ss-add-element-menu.png" />
</figure>

These menus contains HTML elements, Ionic components, and the custom components in the app.

To insert an element, click and hold on it, then drag it into place in either canvas or code (in **Template** mode).

Dragging an element into code allows more precise placement, but dragging it into the canvas may be easier and offers intelligent `slot` usage when using Ionic components.

### Quick Adding New Elements

Certain elements support quickly adding child elements by right-clicking and selecting an element in the `Quick Add` menu. Some components that support quickly adding new elements include List, List Item, Grid, Segment Button, and more.

<figure>
  <img alt="Quick Add Element Menu" src="/docs/assets/img/studio/ss-quick-add-element-menu.png" />
</figure>

### Rearranging Existing Elements

To rearrange existing elements in the canvas, click and hold on it, then drag it into place.

Remember, it is also possible to drag and drop code selections in the code editor.

## Properties Panel

When the cursor is inside of an element in the code editor, or selected in canvas, the properties panel will update to reflect the selected element.

<figure>
  <img alt="Properties Panel" src="/docs/assets/img/studio/ss-properties-panel.png" />
</figure>

In the properties panel, the properties for the selected element are listed. Properties can be changed, as well.

For Ionic components, the properties panel contains a link to the component's documentation at the top, next to its name.

<blockquote>
Unfortunately, the properties panel does not show properties for custom components in your app, but this is a feature we'll be adding!
</blockquote>

## Styles Mode

In **Styles** mode, changes to the component's styles are reflected in the canvas when saved. The styles in this mode are only applicable to the current page or component.

<figure>
  <img alt="Editing Styles" src="/docs/assets/img/studio/ss-compose-styles.png" />
</figure>

## Other Compose Modes

The **Scripts** and **Module** modes are for making changes to the controller and NgModule, respectively. These modes are mostly here for convenience and do not actively change the canvas or properties panel.

<figure>
  <img alt="Editing Scripts" src="/docs/assets/img/studio/ss-compose-scripts.png" />
</figure>

## Troubleshooting the Canvas

If the canvas gets into an inconsistent or incorrect state, click the reload icon from the canvas utility bar to cause the canvas to reload its current contents:

<figure>
  <img alt="Editing Scripts" src="/docs/assets/img/studio/ss-canvas-reload.png" />
</figure>
