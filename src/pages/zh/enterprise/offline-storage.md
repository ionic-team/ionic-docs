---
title: Ionic Offline Storage
template: enterprise-plugin
version: 2.0.0
minor: 2.0.X
otherVersions:
  - 1.0.X
---

Ionic Offline Storage is a cross-platform data storage system that works on iOS and Android. Powered by [SQLite](https://www.sqlite.org/index.html), a SQL database engine for building powerful, data-driven apps entirely in JavaScript.

This solution makes it easy to add offline storage to Ionic apps that are secure (encrypted on device using 256-bit AES), highly performant, and provide advanced data querying. [Learn more.](https://ionicframework.com/offline-storage)

<native-ent-install plugin-id="offline-storage" variables=""></native-ent-install>

## Getting Started

Offline Storage is powered by SQLite, so it's incredibly easy to use - simply leverage familiar SQL query syntax.

If using Angular, start by injecting Offline Storage as a provider to the project in `app.module.ts`:

```typescript
import { SQLite } from '@ionic-enterprise/offline-storage/ngx';

@NgModule({
  // ... snip ... 
  providers: [
    SQLite
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Next, import `@ionic-enterprise/offline-storage` into the desired class (A dedicated service that encapsulates Offline Storage logic is recommended).

```typescript
import { SQLite, SQLiteObject } from '@ionic-enterprise/offline-storage/ngx';
```

Next, initialize the database then immediately create (or open) a table:

```typescript
private database: SQLiteObject;

constructor(private sqlite: SQLite) { 
  this.initializeDatabase();
}

private async initializeDatabase() {
  // Create or open a table
  this.sqlite.create({
    name: "images.db",
    location: "default",
    // Key/Password used to encrypt the database
    // Strongly recommended to use Identity Vault to manage this
    key: "password"
  }).then((db: SQLiteObject) => {
    this.database = db;

    db.executeSql(
      'CREATE TABLE IF NOT EXISTS software(name, company, type, version)', [])
      .then(() => console.log('Successfully created software table.'))
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
```

## Basic Queries

Insert data into a database table:

```typescript
this.database.transaction((tx) => {
  tx.executeSql("INSERT INTO software (name, company, type, version) VALUES (?,?,?,?)", 
  [ "offline-storage", "ionic", "native", "2.0"], (tx, result) => {
    console.log("insertId: " + result.insertId);  // New Id number
    console.log("rowsAffected: " + result.rowsAffected);  // 1
  });
});
```

Read data from a database table:

```typescript
this.database.transaction((tx) => {
  tx.executeSql("SELECT * from software", [], (tx, result) => {
      // Rows is an array of results. Use zero-based indexing to access
      // each element in the result set: item(0), item(1), etc. 
      for (let i = 0; i < result.rows.length; i++) {
        // { name: "offline-storage", company: "ionic", type: "native", version: "2.0" }
        console.log(result.rows.item(i));

        // ionic
        console.log(result.rows.item(i).company);
      }
    });
});
```

Update data:

```typescript
this.database.transaction((tx) => {
  tx.executeSql("UPDATE software SET version = ? WHERE company = ?", [ "2.2", "ionic" ], 
    (tx, result) => {
      console.log("Rows affected: " + result.rowsAffected);  // 1
  });
});
```

Delete data:

```typescript
this.database.transaction((tx) => {
  tx.executeSql("DELETE FROM software WHERE company = ?", [ "ionic" ], 
    (tx, result) => {
      console.log("Rows affected: " + result.rowsAffected);  // 1
  });
});
```

Close the database:

```typescript
await this.database.close();
```

Delete the database (provide the same configuration details used when creating it):

```typescript
await this.sqlite.deleteDatabase({
  name: "images.db",
  location: "default",
  key: "password"
});
```

## Transactions

### Single-statement Transactions

```typescript
this.database.transaction((tx) => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS software (name, company)');
  tx.executeSql('INSERT INTO software VALUES (?,?)', ['offline', "ionic"]);
  tx.executeSql('INSERT INTO software VALUES (?,?)', ['auth-connect', "ionic"]);
});
```

### Batch Transactions

```typescript
this.database.sqlBatch([
  'CREATE TABLE IF NOT EXISTS software (name, company)',
  [ 'INSERT INTO software VALUES (?,?)', ['offline', "ionic"] ],
  [ 'INSERT INTO software VALUES (?,?)', ['auth-connect', "ionic"] ]
]);
```

## Test Functions

Useful for debugging issues.

```typescript
// Verify that both the JavaScript and native part of this plugin 
// are installed in your Ionic app
await this.sqlite.echoTest();

// Verify basic database access operations including opening a database
// Prints "OPEN database: OK"
await this.sqlite.selfTest();
```

## Index

### Classes

* [SQLite](#sqlite)

### Interfaces

* [SQLiteDatabaseConfig](#sqlitedatabaseconfig)

* * *

## Classes

<a id="sqlite"></a>

### SQLite

**SQLite**:

***name***: SQLite

***description***: Access SQLite databases on the device.

***usage***: ```typescript import { SQLite, SQLiteObject } from '@ionic-enterprise/offline-storage/ngx';

constructor(private sqlite: SQLite) { }

...

this.sqlite.create({ name: 'data.db', location: 'default' }) .then((db: SQLiteObject) => {

    db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
    

}) .catch(e => console.log(e));

```

***classes***: SQLiteObject

***interfaces***: SQLiteDatabaseConfig SQLiteTransaction

<a id="sqlite.create"></a>

### create

▸ **create**(config: *[SQLiteDatabaseConfig](#sqlitedatabaseconfig)*): `Promise`<`SQLiteObject`>

Open or create a SQLite database file.

See the plugin docs for an explanation of all options: <https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database>

**Parameters:**

| Name   | Type                                          | Description            |
| ------ | --------------------------------------------- | ---------------------- |
| config | [SQLiteDatabaseConfig](#sqlitedatabaseconfig) | database configuration |


**Returns:** `Promise`<`SQLiteObject`> Promise<SQLiteObject>

* * *

<a id="sqlite.deletedatabase"></a>

### deleteDatabase

▸ **deleteDatabase**(config: *[SQLiteDatabaseConfig](#sqlitedatabaseconfig)*): `Promise`<`any`>

Deletes a database

**Parameters:**

| Name   | Type                                          | Description            |
| ------ | --------------------------------------------- | ---------------------- |
| config | [SQLiteDatabaseConfig](#sqlitedatabaseconfig) | database configuration |


**Returns:** `Promise`<`any`>

* * *

<a id="sqlite.echotest"></a>

### echoTest

▸ **echoTest**(): `Promise`<`any`>

Verify that both the Javascript and native part of this plugin are installed in your application

**Returns:** `Promise`<`any`>

* * *

<a id="sqlite.selftest"></a>

### selfTest

▸ **selfTest**(): `Promise`<`any`>

Automatically verify basic database access operations including opening a database

**Returns:** `Promise`<`any`>

* * *

* * *

## Interfaces

<a id="sqlitedatabaseconfig"></a>

### SQLiteDatabaseConfig

**SQLiteDatabaseConfig**:

<a id="sqlitedatabaseconfig.createfromlocation"></a>

### `<Optional>` createFromLocation

**● createFromLocation**: *`number`*

support opening pre-filled databases with <https://github.com/litehelpers/cordova-sqlite-ext>

* * *

<a id="sqlitedatabaseconfig.iosdatabaselocation"></a>

### `<Optional>` iosDatabaseLocation

**● iosDatabaseLocation**: *`string`*

iOS Database Location. Example: 'Library'

* * *

<a id="sqlitedatabaseconfig.key"></a>

### `<Optional>` key

**● key**: *`string`*

support encrypted databases with <https://github.com/litehelpers/Cordova-sqlcipher-adapter>

* * *

<a id="sqlitedatabaseconfig.location"></a>

### `<Optional>` location

**● location**: *`string`*

Location of the database. Example: 'default'

* * *

<a id="sqlitedatabaseconfig.name"></a>

### name

**● name**: *`string`*

Name of the database. Example: 'my.db'

* * *

* * *

# Changelog