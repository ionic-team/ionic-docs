---
sidebar_label: 'Build Info'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Build Info

This plugin provides build information.

<p>
  <a href="https://github.com/lynrin/cordova-plugin-buildinfo" target="_blank" rel="noopener" className="git-link">github.com/lynrin/cordova-plugin-buildinfo</a>
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
      $ npm install cordova-plugin-buildinfo {'\n'}$ npm install @awesome-cordova-plugins/build-info {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-buildinfo {'\n'}$ npm install @awesome-cordova-plugins/build-info {'\n'}
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
- macOS
- browser
- Electron

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```
import { BuildInfo } from '@awesome-cordova-plugins/build-info/ngx';

this.platform.ready().then(() => {
    console.log('BuildInfo.baseUrl        =' + BuildInfo.baseUrl)
    console.log('BuildInfo.packageName    =' + BuildInfo.packageName)
    console.log('BuildInfo.basePackageName=' + BuildInfo.basePackageName)
    console.log('BuildInfo.displayName    =' + BuildInfo.displayName)
    console.log('BuildInfo.name           =' + BuildInfo.name)
    console.log('BuildInfo.version        =' + BuildInfo.version)
    console.log('BuildInfo.versionCode    =' + BuildInfo.versionCode)
    console.log('BuildInfo.debug          =' + BuildInfo.debug)
    console.log('BuildInfo.buildType      =' + BuildInfo.buildType)
    console.log('BuildInfo.flavor         =' + BuildInfo.flavor)
    console.log('BuildInfo.buildDate      =' + BuildInfo.buildDate)
    console.log('BuildInfo.installDate    =' + BuildInfo.installDate)
})
```
