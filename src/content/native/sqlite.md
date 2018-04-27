# SQLite 


Access SQLite databases on the device.


Repo: [https://github.com/litehelpers/Cordova-sqlite-storage](https://github.com/litehelpers/Cordova-sqlite-storage)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic-native/sqlite
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* macOS
* Windows




### Usage



```typescript
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

constructor(private sqlite: SQLite) { }

...

this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', {})
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));


  })
  .catch(e => console.log(e));

```




<p><br></p>

## Instance Members

### create

Open or create a SQLite database file.

<dl>
<dt><h4>config</h4><strong>Type: </strong><code>SQLiteDatabaseConfig</code></dt>
<dd>See SQLiteDatabaseConfig table below</dd>
</dl>

### deleteDatabase

Deletes a database

<dl>
<dt><h4>config</h4><strong>Type: </strong><code>SQLiteDatabaseConfig</code></dt>
<dd>See SQLiteDatabaseConfig table below</dd>
</dl>

### echoTest

Verify that both the Javascript and native part of this plugin are installed in your application

### selfTest

Automatically verify basic database access operations including opening a database

<p><br></p>

## SQLiteDatabaseConfig

<dl>
<dt><h4>createFromLocation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>support opening pre-filled databases with https://github.com/litehelpers/cordova-sqlite-ext <span class="tag">optional</span></dd><dt><h4>iosDatabaseLocation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>iOS Database Location. Example: 'Library' <span class="tag">optional</span></dd><dt><h4>key</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>support encrypted databases with https://github.com/litehelpers/Cordova-sqlcipher-adapter <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Location of the database. Example: 'default' <span class="tag">optional</span></dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Name of the database. Example: 'my.db'</dd>
</dl>

