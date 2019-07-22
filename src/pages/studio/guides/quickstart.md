---

---

# Quickstart

The quickstart tutorial walks you through starting a new app, the basics of Compose and Code, creating new app features, and serving your app.

<blockquote>
🚧 These docs are a work-in-progress. Check back frequently for updates!
</blockquote>

## Start a New App

Ionic apps can be created right in Ionic Studio.

You may have an existing Ionic 4 app you wish to use in Studio, in which case you may need to adapt this tutorial to your unique app.

To create a new Ionic project:

1. Open the New Project modal with **File** &raquo; **New Project**. ![Start a New Project with Studio](/docs/assets/img/studio/ss-new-project.png)
1. Supply a name for your app. This can be changed later.
1. Optionally supply a Bundle ID (aka Package ID), which is used to identify your app when published. It's okay to leave this blank for now.
1. Choose the **tabs** starter template for your app.
1. Click **Create Project**.

## Code & Compose

Ionic Studio offers two main modes for making changes to your app: **Code** and **Compose**. [Code mode](/docs/studio/code) is a text editor like VS Code, Atom, et al. [Compose mode](/docs/studio/compose) is a split view of code and canvas for building pages &amp; components.

### Composing Components

For this quickstart tutorial, we are going to focus on using Compose to update a page.

1. Open Compose mode by clicking the cursor icon in the navigation menu.
    ![Compose Page Index](/docs/assets/img/studio/ss-page-index.png)
1. Open the **Tab1Page** provided by the **tabs** starter template.
    ![Compose](/docs/assets/img/studio/ss-compose.png)
1. **Change text** by double-clicking in the canvas. Change "Tab One" to "My New Page".
1. **Delete elements** by clicking on them and pressing the Delete or Backspace key. Delete the `<ion-img>` inside the card that shows `shapes.svg`.
1. **Insert elements** by clicking on the cube icon in the header and dragging them into the canvas or code. Add a button at the bottom of the card.
1. **Modify component properties** by clicking on the component and using the properties panel. Change the **Theme Color** of your button to **Secondary**.
1. **Save your changes** with <kbd>Ctrl</kbd>+<kbd>S</kbd> (or <kbd>Command</kbd>+<kbd>S</kbd> for macOS), or with **File** &raquo; **Save**.

Compose uses the component code itself as a source of truth for rendering a preview in the canvas. Try making direct changes to the code to see how the canvas reacts.

## Serving Your App

Serving your app will start a livereload server and display your app in a separate browser window.

## Running Your App

Running your app will prompt you to select a native target, which can be an emulator or hardware device plugged in to your computer. Since running your app will deploy to an actual native device, it does require some setup.

* For Android, see [Android Setup](/docs/installation/android)
* For iOS, see [iOS Setup](/docs/installation/ios)

Running your app can also make debugging more difficult than simply serving your app, but it is the only way to test the native functionality of your app.
