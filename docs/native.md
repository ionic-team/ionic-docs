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

CapacitorやCordovaを使用したIonicアプリにネイティブデバイスの機能を簡単に追加できる、オープンソースおよびプレミアムプラグインと統合を使用して、ネイティブパワーによるアプリ体験を構築できます。

<intro-end />

:::note

[Read about the changes](https://ionicframework.com/blog/a-new-chapter-for-ionic-native/) coming to the Ionic Native project.

:::

<DocsCards>
  <DocsCard header="Capacitor plugins" img="/img/native/capacitor@2x.png" href="https://capacitorjs.com/docs/plugins">
    <p>
      IonicチームとCapacitorコミュニティによって構築・維持されている、モダンでオープンソースのネイティブランタイムです。
      推奨ネイティブソリューションです。
    </p>
  </DocsCard>
  <DocsCard header="Cordova plugins" img="/img/native/cordova@2x.png" href="/native/community">
    <p>
      コミュニティによって構築、維持されている無料の Cordova プラグインのコレクションです。
      一貫した API と命名規則があります。
    </p>
  </DocsCard>
</DocsCards>

<NativeEnterpriseCard />

:::note
These docs are for apps built with Ionic Framework 4.0.0 and greater. For older Ionic v3 projects, please [see here](https://ionicframework.com/docs/v3/native/).
:::
