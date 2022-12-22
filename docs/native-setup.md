---
title: Capacitor Plugins
sidebar_label: Setup
hide_table_of_contents: true
slug: /native/setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Capacitor Plugins | Capacitor Core Plugins for Ionic Apps</title>
  <meta
    name="description"
    content="Capacitor offers a collection APIs that make adding native functionality to your Ionic app as simple as using any JavaScript library."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Getting started with Capacitor is fairly straight forward for Ionic developers. Adding plugins to your project is no different than adding any dependencies you may need to a project.
<intro-end />

## Install

To install a plugin, find the plugin you want to use and install it using your package manager, like npm:

```shell
# Install the Capacitor Plugins
$ npm install @capacitor/camera
```

## Usage

Once installed, plugins can be imported into a component and you can call the native functionality directly from your code.

Using the [Camera plugin](native/camera.md) as an example, first install it:

````mdx-code-block
<Tabs
  groupId="runtime"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="javascript">

```javascript
import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  imageElement.src = imageUrl;
};
```

</TabItem>
<TabItem value="angular">

```javascript
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({...})
export class CameraComponent{
  public imageSrc = '';

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;
  };

}
```

</TabItem>
<TabItem value="vue">

```typescript

<template>
...
</template>

<script setup lang="typescript">
import { ref } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
const imageSrc = ref('');

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  imageSrc.value = imageUrl;
};

</script>

```

</TabItem>
<TabItem value="react">

```javascript
import { Camera, CameraResultType } from '@capacitor/camera';
import { useState } from 'react';

export function CameraComponent() {
  const [imageSrc, setImageSrc] = usetState('');

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    setImageSrc(imageUrl);
  };
  return (...)
}
```

</TabItem>
</Tabs>
````
