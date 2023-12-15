---
sidebar_label: '3D Touch'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 3D Touch

The 3D Touch plugin adds 3D Touch capabilities to your Cordova app.

Requires Cordova plugin: `cordova-plugin-3dtouch`. For more info, please see the [3D Touch plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-3dtouch).

<p>
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-3dtouch" target="_blank" rel="noopener" className="git-link">github.com/EddyVerbruggen/cordova-plugin-3dtouch</a>
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
      $ npm install cordova-plugin-3dtouch {'\n'}$ npm install @awesome-cordova-plugins/three-dee-touch {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-3dtouch {'\n'}$ npm install @awesome-cordova-plugins/three-dee-touch{' '}
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

- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.

```tsx
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@awesome-cordova-plugins/three-dee-touch/ngx';

constructor(private threeDeeTouch: ThreeDeeTouch) { }

...

this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));

this.threeDeeTouch.watchForceTouches()
  .subscribe(
    (data: ThreeDeeTouchForceTouch) => {
      console.log('Force touch %' + data.force);
      console.log('Force touch timestamp: ' + data.timestamp);
      console.log('Force touch x: ' + data.x);
      console.log('Force touch y: ' + data.y);
    }
  );


let actions: ThreeDeeTouchQuickAction[] = [
  {
    type: 'checkin',
    title: 'Check in',
    subtitle: 'Quickly check in',
    iconType: 'Compose'
  },
  {
    type: 'share',
    title: 'Share',
    subtitle: 'Share like you care',
    iconType: 'Share'
  },
  {
    type: 'search',
    title: 'Search',
    iconType: 'Search'
  },
  {
    title: 'Show favorites',
    iconTemplate: 'HeartTemplate'
  }
];

this.threeDeeTouch.configureQuickActions(actions);

this.threeDeeTouch.onHomeIconPressed().subscribe(
 (payload) => {
   // returns an object that is the button you presed
   console.log('Pressed the ${payload.title} button')
   console.log(payload.type)

 }
)
```
