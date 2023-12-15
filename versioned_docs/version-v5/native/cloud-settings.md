---
sidebar_label: 'Cloud Settings'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Cloud Settings

Stores app settings in cloud storage so if the user re-installs the app or installs it on a different device, the settings will be restored and available in the new installation.

<p>
  <a href="https://github.com/dpa99c/cordova-plugin-cloud-settings" target="_blank" rel="noopener" className="git-link">github.com/dpa99c/cordova-plugin-cloud-settings</a>
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
      $ npm install cordova-plugin-cloud-settings {'\n'}$ npm install @awesome-cordova-plugins/cloud-settings {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-cloud-settings {'\n'}$ npm install
      @awesome-cordova-plugins/cloud-settings {'\n'}
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
import { CloudSettings } from '@awesome-cordova-plugins/cloud-settings/ngx';


constructor(private cloudSettings: CloudSettings) { }

...

this.cloudSettings.exists()
  .then((exists: boolean) => console.log("Saved settings exist: " + exists) )

this.cloudSettings.load()
  .then((settings: any) => this.settings = settings)
  .catch((error: any) => console.error(error));

this.cloudSettings.save(this.settings)
  .then((savedSettings: any) => console.log("Saved settings: " + JSON.stringify(savedSettings)))
  .catch((error: any) => console.error(error));

```
