---
sidebar_label: 'Badge'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Badge

The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.

Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).

Android Note: Badges have historically only been a feature implemented by third party launchers and not visible unless one of those launchers was being used (E.G. Samsung or Nova Launcher) and if enabled by the user. As of Android 8 (Oreo), [notification badges](https://developer.android.com/training/notify-user/badges) were introduced officially to reflect unread notifications. This plugin is unlikely to work as expected on devices running Android 8 or newer. Please see the [local notifications plugin docs](https://github.com/katzer/cordova-plugin-local-notifications) for more information on badge use with notifications.

<p>
  <a href="https://github.com/katzer/cordova-plugin-badge" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-badge</a>
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
      $ npm install cordova-plugin-badge {'\n'}$ npm install @awesome-cordova-plugins/badge {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-badge {'\n'}$ npm install @awesome-cordova-plugins/badge {'\n'}
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
- Browser
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Badge } from '@awesome-cordova-plugins/badge/ngx';

constructor(private badge: Badge) { }

...

this.badge.set(10);
this.badge.increase(1);
this.badge.clear();
```
