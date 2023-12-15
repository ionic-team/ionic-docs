---
sidebar_label: 'SQLite Porter'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# SQLite Porter

This Cordova/Phonegap plugin can be used to import/export to/from a SQLite database using either SQL or JSON.

<p>
  <a href="https://github.com/dpa99c/cordova-sqlite-porter" target="_blank" rel="noopener" className="git-link">github.com/dpa99c/cordova-sqlite-porter</a>
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
      $ npm install uk.co.workingedge.cordova.plugin.sqliteporter {'\n'}$ npm install
      @awesome-cordova-plugins/sqlite-porter {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter {'\n'}$ npm install
      @awesome-cordova-plugins/sqlite-porter {'\n'}
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

- Amazon Fire OS
- Android
- BlackBerry 10
- Browser
- iOS
- Tizen
- Windows
- Windows Phone

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';


constructor(private sqlitePorter: SQLitePorter) { }

...

let db = window.openDatabase('Test', '1.0', 'TestDB', 1 * 1024);
// or we can use SQLite plugin
// we will assume that we injected SQLite into this component as sqlite
this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: any) => {
    let dbInstance = db._objectInstance;
    // we can pass db._objectInstance as the database option in all SQLitePorter methods
  });


let sql = 'CREATE TABLE Artist ([Id] PRIMARY KEY, [Title]);' +
           'INSERT INTO Artist(Id,Title) VALUES ("1","Fred");';

this.sqlitePorter.importSqlToDb(db, sql)
  .then(() => console.log('Imported'))
  .catch(e => console.error(e));


```
