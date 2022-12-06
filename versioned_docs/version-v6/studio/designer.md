# Designer Overview

The Designer is the powerhouse of Studio, offering a drag-and-drop page builder for pages and components, with a code-behind editor for the template, styles, and scripts (TypeScript)

## Introduction

With the Designer, developers can:

- Drag and drop to build pages and components
- Select from the entire library of Ionic elements for drag-and-drop _and_ code editing.
- Switch between visual and code editing for pages and components
- View and work with most supported Ionic element properties, saving a trip checking the Documentation

<figure>
  <img alt="Designer Mode" src="/img/studio/2/ss-designer.png" />
</figure>

## Pages and Components

In the Designer, pages and components work directly off of the files powering them (TypeScript, HTML, CSS).

When first loaded, the Designer index is shown. This index lsits the pages and custom components that Studio detected in the app. Components detected can be seen by switching to the components tab.

Studio finds pages and components by scanning your project looking for Component source files, so works on a variety of project file layouts.

<blockquote>
  <p>
    Since the difference between pages and components is conceptual, Ionic Studio relies on convention to differentiate
    them. If there are pages missing, make sure each page follows the convention Ionic Studio is expecting:
  </p>
  <p>
    The files that represent each page must have the proper suffixes (e.g. <code>.page.ts</code>,{' '}
    <code>.page.html</code>, <code>.page.scss</code>). See the{' '}
    <a href="https://angular.io/guide/styleguide#naming">Angular style guide</a> for additional information about naming
    conventions.
  </p>
</blockquote>

<figure>
  <img alt="Page Index" src="/img/studio/2/ss-designer-index.png" />
</figure>

Switching to the component section on the Designer index reveals all the components found in the app.

<figure>
  <img alt="Component Index" src="/img/studio/2/ss-component-index.png" />
</figure>

See [Adding Pages and Components](#adding-pages-and-components) to create new pages and components.

## Adding Pages and Components

To add pages or components to an app, click the **New** button in the top right of the page index.

<figure>
  <img alt="New Feature Button" src="/img/studio/2/ss-new-feature.png" />
</figure>

When adding a component (rather than a page), Studio will prompt for the name and a page in which to register it.

<figure>
  <img alt="New Component Modal" src="/img/studio/2/ss-component-new.png" />
</figure>

This adds the component as a _import_ in the NgModule of the selected page, which allows it to be used in that page.

<blockquote>
  The same code changes are necessary to use the component in other pages. See [this
  FAQ](faq.md#using-a-custom-component-in-additional-pages) for details.
</blockquote>

## Drag & Drop

The Designer offers a drag & drop canvas for quickly adding new elements and rearranging existing elements.

### Selecting Elements

To select an element, click on it in the canvas. To select a child element, double click on its parent. Continue to double click to select deeper child elements and to edit text.

To enable fine-selection, which selects the deepest child under the mouse cursor, hold down the <kbd>Ctrl</kbd> key (or <kbd>Command</kbd> for macOS) and hover over an element.

To exit the current selection, use the <kbd>Esc</kbd> key.

To select any element under the cursor, right click and choose an element from the `Select Element` dropdown:

<figure>
  <img alt="Selecting elements" src="/img/studio/2/ss-select-element-menu.png" />
</figure>

To select any element in the current document, access the element tree and click on the element to select:

<figure>
  <img alt="Editing Templates" src="/img/studio/2/ss-tree-select.png" />
</figure>

### Adding New Elements

To add new elements to a page or component, drag and drop a new element from the Elements list, or use right click and "Quick Add" to
add context-specific elements easily.

<figure>
  <img alt="Add Element Menu" src="/img/studio/2/ss-new-elements.png" />
</figure>

Elements may also be dragged into the HTML for a page or component, and will result in a new code snippet being inserted at the cursor position.

### Quick Adding New Elements

Certain elements support quickly adding child elements by right-clicking and selecting an element in the `Quick Add` menu. Some components that support quickly adding new elements include List, List Item, Grid, Segment Button, and more.

<figure>
  <img alt="Quick Add Element Menu" src="/img/studio/2/ss-quick-add-element-menu.png" />
</figure>

### Rearranging Existing Elements

To rearrange existing elements in the canvas, click and hold on it, then drag it into place.

Remember, it is also possible to drag and drop code selections in the code editor.

## Properties Panel

When an element is selected in the Designer canvas, the properties panel will update to reflect the selected element.

<figure>
  <img alt="Properties Panel" src="/img/studio/2/ss-properties-panel.png" />
</figure>

In the properties panel, the properties that can be modified are listed.

For Ionic components, the properties panel contains a link to the component's documentation at the bottom.

<blockquote>
  Unfortunately, the properties panel does not show properties for custom components in your app, but this is a feature
  we'll be adding!
</blockquote>

## Editor View

The HTML, CSS, and JS (TypeScript) for a page or company can be edited by switching to the Editor View:

<figure>
  <img alt="Editor View" src="/img/studio/2/ss-editor-view.png" />
</figure>

## Template Editing

Each page or component has an HTML template that makes up its structure. Template editing makes it easy to make quick edits to the template, such as changing text or dragging in new element code snippets from the Elements list.

<figure>
  <img alt="Editor View" src="/img/studio/2/ss-editor-template.png" />
</figure>

## Styles Editing

The Styles editor contains the CSS (Sass) for that page or component.

Any changes to the styles are reflected in the canvas when saved. The styles in this mode are only applicable to the current page or component.

<figure>
  <img alt="Editor View" src="/img/studio/2/ss-editor-styles.png" />
</figure>

## Scripts Editing

The **Scripts** editor is for making changes to the controller, or logic, behind a page or component. This editor is used for making
quick changes to logic for the page or component. For more complicated changes we recommend opening the project in a full-fledged code editor.

<figure>
  <img alt="Editor View" src="/img/studio/2/ss-editor-code.png" />
</figure>

## Troubleshooting the Canvas

If the canvas gets into an inconsistent or incorrect state, click the reload icon from the canvas utility bar to cause the canvas to reload its current contents:

<figure>
  <img alt="Editing Scripts" src="/img/studio/2/ss-compose-reload.png" />
</figure>
