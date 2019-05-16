---
title: 'Code & Compose'
previousText: 'Quickstart Overview'
previousUrl: '/docs/studio/quickstart'
nextText: 'Running Your App'
nextUrl: '/docs/studio/quickstart/running'
---

Ionic Studio offers two main modes for making changes to your app: Code and Compose. [Code mode](/docs/studio/code) is a text editor like VS Code, Atom, et al. [Compose mode](/docs/studio/compose) is a split view of code and canvas for building pages &amp; components.

<blockquote>
🚧 These docs are a work-in-progress. Check back frequently for updates!
</blockquote>

## Composing Components

For this quickstart tutorial, we are going to focus on using Compose to update a page.

1. Open Compose mode by clicking the cursor icon in the navigation menu.
    ![Compose Page Index](/docs/assets/img/studio/ss-page-index.png)
1. Open the **Tab1Page** provided by the **tabs** starter template.
    ![Compose](/docs/assets/img/studio/ss-compose.png)
1. **Change text** by double-clicking in the canvas. Change "Tab One" to "My New Page".
1. **Delete elements** by clicking on them and pressing the Delete or Backspace key. Delete the `<ion-img>` inside the card that shows `shapes.svg`.
1. **Insert elements** by clicking on the cube icon in the header and dragging them into the canvas or code. Add a button at the bottom of the card.
1. **Modify component properties** by clicking on the component and using the properties panel. Change the **Theme Color** of your button to **Secondary**.
1. **Save your changes** with `⌘S`, or with **File** &raquo; **Save**.

Compose uses the component code itself as a source of truth for rendering a preview in the canvas. Try making direct changes to the code to see how the canvas reacts.
