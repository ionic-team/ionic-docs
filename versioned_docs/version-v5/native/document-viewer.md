---
title: 'Document Viewer | Cordova Plugin Document Viewer for PDF Files'
description: 'Cordova plugin document viewer offers a slim API to view PDF files either stored in the apps assets folder or in any other file system directory available.'
sidebar_label: 'Document Viewer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Document Viewer

This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/\*) or in any other file system directory available via the cordova file plugin.

<p>
  <a href="https://github.com/sitewaerts/cordova-plugin-document-viewer" target="_blank" rel="noopener" className="git-link">github.com/sitewaerts/cordova-plugin-document-viewer</a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer premium advisory services for both community plugins and premier plugins.</p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-document-viewer {'\n'}$ npm install @awesome-cordova-plugins/document-viewer {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-document-viewer {'\n'}$ npm install
      @awesome-cordova-plugins/document-viewer {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">Learn More</a> or if you're interested in an enterprise version of this plugin <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Android
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';


constructor(private document: DocumentViewer) { }

...
const options: DocumentViewerOptions = {
  title: 'My PDF'
}

this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)

```
