---
title: Capacitor Plugins
sidebar_label: Setup
hide_table_of_contents: true
slug: /native/setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Capacitorプラグイン | Ionicアプリ用のCapacitor Coreプラグイン</title>
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

Capacitorを使い始めるのは、Ionic開発者にとってかなり簡単です。プロジェクトにプラグインを追加するのは、プロジェクトに必要な依存関係を追加するのと変わりません。
<intro-end />

## インストール

プラグインをインストールするには、使いたいプラグインを見つけ、npmなどのパッケージマネージャーを使ってインストールする：

```shell
# Install the Capacitor Plugins
$ npm install @capacitor/camera
```

## 使い方

一度インストールすれば、プラグインをコンポーネントにインポートし、コードから直接ネイティブ機能を呼び出すことができます。

[Camera plugin](native/camera.md)を例にして、まずインストールしてみましょう：

````mdx-code-block
<Tabs
  groupId="framework"
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
  const [imageSrc, setImageSrc] = useState('');

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
