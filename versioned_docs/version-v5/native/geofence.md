---
sidebar_label: 'Geofence'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Geofence

Monitors circular geofences around latitude/longitude coordinates, and sends a notification to the user when the boundary of a geofence is crossed. Notifications can be sent when the user enters and/or exits a geofence.
Geofences persist after device reboot. Geofences will be monitored even when the app is not running.

<p>
  <a href="https://github.com/cowbell/cordova-plugin-geofence" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/cowbell/cordova-plugin-geofence
  </a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>
      If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer
      premium advisory services for both community plugins and premier plugins.
    </p>
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
      $ npm install cordova-plugin-geofence {'\n'}$ npm install @ionic-native/geofence {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-geofence {'\n'}$ npm install @ionic-native/geofence {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">
        Learn More
      </a> or if you're interested in an enterprise version of this plugin <a
        class="btn"
        href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"
      >
        Contact Us
      </a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Android
- iOS
- Windows
- Windows Phone 8

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Geofence } from '@ionic-native/geofence/ngx';

...

constructor(private geofence: Geofence) {
  // initialize the plugin
  geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )
}

...

private addGeofence() {
  //options describing geofence
  let fence = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:       37.285951, //center of geofence radius
    longitude:      -121.936650,
    radius:         100, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          'You crossed a fence', //notification title
        text:           'You just arrived to Gliwice city center.', //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add')
   );
}

```

### Transition Types

Transition type specifies whether the geofence should trigger when the user enters and/or leaves the geofence.

#### Supported values

- 1: Enter
- 2: Leave
- 3: Both

### Defining a Geofence

Geofences are defined by an object that is passed to `addOrUpdate()`. Object properties are:

- id: Any unique ID for the geofence. This ID is used to remove and update a geofence
- latitude: Latitude coordinate of the center of the geofence radius
- longitude: Latitude coordinate of the center of the geofence radius
- radius: Radius from the center to the edge of the geofence
- transitionType: Type of geofence transition to monitor for. See 'Transition Types' above
- notification: Object. Options for defining the notification sent when a geofence is crossed
  - id: Any unique ID
  - title: Notification title
  - text: Notification body
  - openAppOnClick: Boolean. Whether to open the app when the notification is tapped by the user

### Troubleshooting

#### I get compile errors when I run `ionic build ios` or `ionic run ios`.

This could be caused by the Cordova project directory in `/platforms/ios` not being named correctly.
Try running `ionic cordova platform rm &lt;platform>` then run `ionic cordova platform add &lt;platform>` to recreate the
platform directories.
