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

Developers that want to set focus to an element on "page load" can use the `setFocus` API to set focus to an element. This API should be used in place of the `autofocus` attribute and called within the `ionViewDidEnter` lifecycle event for routing applications and the `appload` event for vanilla JavaScript applications.

The example below highlights the difference in behavior between the `autofocus` attribute and the `setFocus` API.

import Basic from '@site/static/usage/v7/autofocus/basic/index.md';

<Basic />

:::warning Warning

Developers will receive a warning in their console when using the `autofocus` attribute in the StackBlitz examples due to cross-origin restrictions.

:::
