---

---

# Quickstart

The quickstart tutorial walks you through starting a new app, the basics of Compose and Code, and serving your app.

> 🚧 These docs are a work-in-progress. Check back frequently for updates!

## Start a New App

To create a new Ionic project:

1. Open the New Project modal with **File** &raquo; **New Project**. ![Start a New Project with Studio](/docs/assets/img/studio/ss-new-project.png)
1. Supply a name for your app. This can be changed later.
1. Optionally supply a Bundle ID (aka [Package ID](/docs/faq/glossary#package-id)), which is used to identify your app when published. It's okay to leave this blank for now.
1. Choose the **tabs** starter template for your app.
1. Click **Create Project**.

## Code & Compose

Ionic Studio offers two main modes for making changes to your app: **Code** and **Compose**. [Code mode](/docs/studio/code) is a text editor like VS Code, Atom, et al. [Compose mode](/docs/studio/compose) is a split view of code and canvas for building pages &amp; components.

### Composing Components

For this quickstart tutorial, we are going to focus on using Compose to update a page.

1. Open Compose mode by clicking the cursor icon in the navigation menu. ![Compose Page Index](/docs/assets/img/studio/ss-page-index.png)
1. Open the **Tab1Page** provided by the **tabs** starter template. ![Compose](/docs/assets/img/studio/ss-compose.png)
1. **Select elements** by hovering over the canvas and double-clicking into the layers OR holding <kbd>Ctrl</kbd> (or <kbd>Command</kbd> for macOS) to fine-select.
1. **Change text** by selecting the containing element and double-clicking it. Change the title text from "Tab One" to "My New Page".
1. **Delete elements** by selecting them and pressing the Delete or Backspace key. Delete the `<ion-img>` inside the card that shows `shapes.svg`.
1. **Insert elements** by opening the dropdown menus in the header and dragging elements into the canvas or code. Add a button at the bottom of the card.
1. **Modify component properties** by clicking on the component and using the properties panel. Change the **Theme Color** of your button to **Secondary**.
1. **Save your changes** with <kbd>Ctrl</kbd>+<kbd>S</kbd> (or <kbd>Command</kbd>+<kbd>S</kbd> for macOS), or with **File** &raquo; **Save**.

Compose uses the component code itself as a source of truth for rendering a preview in the canvas. Try making direct changes to the code to see how the canvas reacts.

## Serving Your App

Serving your app will start a [Live Reload](/docs/faq/glossary#livereload) server and display your app in a separate browser window.

<figure>
  <img alt="Run Menu" src="/docs/assets/img/studio/ss-run-menu.png" />
</figure>

While serving your app, changes made when files are saved will automatically reload the Serve Window.

See the documentation for [Serving Apps](/docs/studio/running#serving-apps) for more information. To run your app on a real device or emulator, first make sure your computer is setup for a [native iOS or Android environment](/docs/studio/native). Then, see the docs for [Running Apps](/docs/studio/running#running-apps).
