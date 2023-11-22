---
title: Autofocus
---

<head>
  <title>Autofocus</title>
  <meta
    name="description"
    content="Learn how to manage focus in Ionic applications using the setFocus API instead of the autofocus attribute."
  />
</head>

The `autofocus` attribute is a standard HTML attribute that allows developers to set focus to an element when a page loads. This attribute is commonly used to set focus to the first input element on a page. However, the `autofocus` attribute can cause issues in routing applications when navigating between pages. This is because the `autofocus` attribute will set focus to the element when the page loads, but will not set focus to the element when the page is revisited.

# Managing Focus

Ionic provides a `setFocus` API that allows developers to manually set focus to an element. This API should be used in place of the `autofocus` attribute and called within the `ionViewDidEnter` lifecycle event for routing applications, within the `didPresent` lifecycle event for overlays, and the `appload` event for vanilla JavaScript applications.

The example below highlights the difference in behavior between the `autofocus` attribute and the `setFocus` API.

import Basic from '@site/static/usage/v7/autofocus/basic/index.md';

<Basic />

:::warning Warning

Developers will receive a warning in their console when using the `autofocus` attribute in the StackBlitz examples due to cross-origin restrictions.

:::
