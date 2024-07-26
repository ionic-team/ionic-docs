---
sidebar_label: 'Background Fetch'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Background Fetch

iOS Background Fetch Implementation. See: https://developer.apple.com/reference/uikit/uiapplication#1657399
iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user's prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch

<p>
  <a href="https://github.com/transistorsoft/cordova-plugin-background-fetch" target="_blank" rel="noopener" className="git-link">github.com/transistorsoft/cordova-plugin-background-fetch</a>
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

    $ npm install cordova-plugin-background-fetch
    $ npm install @awesome-cordova-plugins/background-fetch
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-background-fetch
    $ npm install @awesome-cordova-plugins/background-fetch

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

```tsx
import { BackgroundFetch, BackgroundFetchConfig } from '@awesome-cordova-plugins/background-fetch/ngx';


constructor(private backgroundFetch: BackgroundFetch) {

  const config: BackgroundFetchConfig = {
    stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
  }

  backgroundFetch.configure(config)
     .then(() => {
         console.log('Background Fetch initialized');

         this.backgroundFetch.finish();

     })
     .catch(e => console.log('Error initializing background fetch', e));

  // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
  backgroundFetch.start();

  // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
  backgroundFetch.stop();


}

```
