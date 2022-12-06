---
title: Native APIs
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

import NativeEnterpriseCard from '@components/page/native/NativeEnterpriseCard';

<head>
  <title>Native APIs: Open-Source Native Device Plugins and Integrations</title>
  <meta
    name="description"
    content="Build native-powered app experiences with Native APIs. Ionic's open-source plugins and integrations make it easy to add native device functionality to any app."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Build native-powered app experiences with a collection of open source and premium plugins and integrations that make it easy to add native device functionality to any Ionic app with Capacitor or Cordova.

<intro-end />

:::note

[Read about the changes](https://ionicframework.com/blog/a-new-chapter-for-ionic-native/) coming to the Ionic Native project.

:::

<DocsCards>
  <DocsCard header="Capacitor plugins" img="/img/native/capacitor@2x.png" href="https://capacitorjs.com/docs/plugins">
    <p>
      A modern, open source native runtime built and maintained by the Ionic team and the Capacitor community. Our
      recommended native solution.
    </p>
  </DocsCard>
  <DocsCard header="Cordova plugins" img="/img/native/cordova@2x.png" href="/native/community">
    <p>
      A collection of free Cordova plugins, built and maintained by the community, with TypeScript wrappers and a
      consistent API and naming convention.
    </p>
  </DocsCard>
</DocsCards>

<NativeEnterpriseCard />

:::note
These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please [see here](https://ionicframework.com/docs/v3/native/).
:::
