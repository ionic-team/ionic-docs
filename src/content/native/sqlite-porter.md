# SQLitePorter 


This Cordova/Phonegap plugin can be used to import/export to/from a SQLite database using either SQL or JSON.


Repo: [https://github.com/dpa99c/cordova-sqlite-porter](https://github.com/dpa99c/cordova-sqlite-porter)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add uk.co.workingedge.cordova.plugin.sqliteporter
$ npm install --save @ionic-native/sqlite-porter
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* BlackBerry 10
* Browser
* iOS
* Tizen
* Windows
* Windows Phone




### Usage


```typescript
import { SQLitePorter } from '@ionic-native/sqlite-porter';


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




<p><br></p>

## Instance Members

### exportDbToJson

Exports a SQLite DB as a JSON structure

<dl>
<dt><h4>db</h4><strong>Type: </strong><code>any</code></dt>
<dd>Database object</dd>
</dl>

### exportDbToSql

Exports a SQLite DB as a set of SQL statements.

<dl>
<dt><h4>db</h4><strong>Type: </strong><code>any</code></dt>
<dd>Database object</dd>
</dl>

### importJsonToDb

Converts table structure and/or row data contained within a JSON structure into SQL statements that can be executed against a SQLite database. Can be used to import data into the database and/or create the table structure.

<dl>
<dt><h4>db</h4><strong>Type: </strong><code>any</code></dt>
<dd>Database object</dd><dt><h4>json</h4><strong>Type: </strong><code>any</code></dt>
<dd>JSON structure containing row data and/or table structure as either a JSON object or string</dd>
</dl>

### importSqlToDb

Executes a set of SQL statements against the defined database. Can be used to import data defined in the SQL statements into the database, and may additionally include commands to create the table structure.

<dl>
<dt><h4>db</h4><strong>Type: </strong><code>any</code></dt>
<dd>Database object</dd><dt><h4>sql</h4><strong>Type: </strong><code>string</code></dt>
<dd>SQL statements to execute against the database</dd>
</dl>

### wipeDb

Wipes all data from a database by dropping all existing tables

<dl>
<dt><h4>db</h4><strong>Type: </strong><code>any</code></dt>
<dd>Database object</dd>
</dl>

<p><br></p>

