---
title: "SQLite | Install Cordova SQLite Plugin for iOS and Android Apps"
description: "Access SQLite databases on supported iOS, Android, macOS, and Windows devices by installing the Cordova SQLite Plugin for Ionic Framework Applications."
sidebar_label: "SQLite
"
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# SQLite

Access SQLite databases on the device.

<p>
  <a href="https://github.com/litehelpers/Cordova-sqlite-storage" target="_blank" rel="noopener" className="git-link">github.com/litehelpers/Cordova-sqlite-storage</a>
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
      $ npm install cordova-sqlite-storage {'\n'}$ npm install @awesome-cordova-plugins/sqlite {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-sqlite-storage {'\n'}$ npm install @awesome-cordova-plugins/sqlite {'\n'}
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
- macOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

constructor(private sqlite: SQLite) { }

...

this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));


  })
  .catch(e => console.log(e));

```
