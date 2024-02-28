---
sidebar_label: 'Code Push'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Code Push

CodePush plugin for Cordova by Microsoft that supports iOS and Android.

For more info, please see https://github.com/Dellos7/example-cordova-code-push-plugin

<p>
  <a href="https://github.com/Microsoft/cordova-plugin-code-push" target="_blank" rel="noopener" className="git-link">github.com/Microsoft/cordova-plugin-code-push</a>
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
      $ npm install cordova-plugin-code-push {'\n'}$ npm install @awesome-cordova-plugins/code-push {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-code-push {'\n'}$ npm install @awesome-cordova-plugins/code-push {'\n'}
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

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { CodePush } from '@awesome-cordova-plugins/code-push/ngx';

constructor(private codePush: CodePush) { }

...

// note - mostly error & completed methods of observable will not fire
// as syncStatus will contain the current state of the update
this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));

```
