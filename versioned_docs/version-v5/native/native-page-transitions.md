---
sidebar_label: 'Native Page Transitions'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Native Page Transitions

The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.

<p>
  <a href="https://github.com/Telerik-Verified-Plugins/NativePageTransitions" target="_blank" rel="noopener" className="git-link">github.com/Telerik-Verified-Plugins/NativePageTransitions</a>
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
      $ npm install com.telerik.plugins.nativepagetransitions {'\n'}$ npm install
      @awesome-cordova-plugins/native-page-transitions {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com.telerik.plugins.nativepagetransitions {'\n'}$ npm install
      @awesome-cordova-plugins/native-page-transitions {'\n'}
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
- Windows Phone 8

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';

constructor(private nativePageTransitions: NativePageTransitions) { }

...


// example of adding a transition when a page/modal closes
ionViewWillLeave() {

 let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   }

 this.nativePageTransitions.slide(options)
   .then(onSuccess)
   .catch(onError);

}


// example of adding a transition when pushing a new page
openPage(page: any) {

  this.nativePageTransitions.slide(options);
  this.navCtrl.push(page);

}

```
