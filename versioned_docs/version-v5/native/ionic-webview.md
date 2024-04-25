---
title: 'WebView | Ionic Framework Cordova WebView App Plugin'
description: 'Cordova WebView plugin allows access to web view utilities on Ionic Framework apps. View the Ionic Web View repository for info on iOS and Android system use.'
sidebar_label: 'Ionic Webview'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Ionic Webview

Access Web View utilities.

Requires the Cordova plugin: `cordova-plugin-ionic-webview` > 2.0. For more info, please see the [Ionic Web View](https://github.com/ionic-team/cordova-plugin-ionic-webview) repository.

<p>
  <a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank" rel="noopener" className="git-link">github.com/ionic-team/cordova-plugin-ionic-webview</a>
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
      $ npm install cordova-plugin-ionic-webview {'\n'}$ npm install @awesome-cordova-plugins/ionic-webview {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ionic-webview {'\n'}$ npm install @awesome-cordova-plugins/ionic-webview{' '}
      {'\n'}
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

## Capacitor

Not Compatible

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';


constructor(private webview: WebView) { }

...

img = this.webview.convertFileSrc('file:///Users/dan/camera-image-12345.png')

```
