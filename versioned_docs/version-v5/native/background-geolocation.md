---
title: 'Background Geolocation: Cordova Background Geolocation Tracking'
description: "This Cordova plugin provides foreground and background geolocation and tracking with battery-saving 'circular region monitoring'  and 'stop detection'."
sidebar_label: 'Background Geolocation'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Background Geolocation

This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation

<p>
  <a href="https://github.com/mauron85/cordova-plugin-background-geolocation" target="_blank" rel="noopener" className="git-link" >github.com/mauron85/cordova-plugin-background-geolocation</a>
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
      $ npm install @mauron85/cordova-plugin-background-geolocation {'\n'}$ npm install
      @awesome-cordova-plugins/background-geolocation {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add @mauron85/cordova-plugin-background-geolocation {'\n'}$ npm install
      @awesome-cordova-plugins/background-geolocation {'\n'}
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

BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.

```tsx
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@awesome-cordova-plugins/background-geolocation/ngx';

constructor(private backgroundGeolocation: BackgroundGeolocation) { }

...

const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

this.backgroundGeolocation.configure(config)
  .then(() => {

    this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
      console.log(location);

      // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
      // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      this.backgroundGeolocation.finish(); // FOR IOS ONLY
    });

  });

// start recording location
this.backgroundGeolocation.start();

// If you wish to turn OFF background-tracking, call the #stop method.
this.backgroundGeolocation.stop();

```
