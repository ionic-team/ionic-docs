---
title: Couchbase Lite
template: enterprise-plugin
version: 1.0.0
minor: 1.0.X
---

# Couchbase Lite

Couchbase Lite is a fully-featured embedded NoSQL database that runs locally on mobile devices. It offers broad support for all major platforms including iOS, macOS, Android, Windows, Electron, and hybrid apps like Ionic.

This solution (also known as [Ionic Offline Storage](/docs/enterprise/offline-storage)) makes it easy to add offline storage to Ionic apps that are secure (encrypted on device), highly performant, and provide advanced data querying. [Learn more.](https://ionicframework.com/offline-storage)

<native-ent-install plugin-id="offline-storage" variables=""></native-ent-install>

## Reference Apps

1) A full [CRUD implementation](https://github.com/ionic-team/cs-demo-couchbase-lite), including querying, responding to data changes, and deleting documents. Follow along with the corresponding [blog post](https://ionicframework.com/blog/build-secure-offline-apps-with-ionic-couchbase-lite/).

2) A complete [offline search experience](https://github.com/ionic-team/demo-offlinestorage-search) that includes advanced querying examples, multiple filters, and wildcard searches. Follow along with the corresponding [webinar video](https://youtu.be/_2C047pQwxU?t=1003).

## Getting Started

After installing the plugin, import `@ionic-enterprise/offline-storage` into the desired class (A dedicated service class that encapsulates Offline Storage logic is recommended).

```typescript
import {
    BasicAuthenticator,
    CordovaEngine,
    Database,
    Function,
    Meta,
    MutableDocument,
    QueryBuilder,
    SelectResult,
    DataSource,
    Expression,
    Ordering,
    Query,
    ResultSet,
    Result,
    Replicator,
    ReplicatorConfiguration,
    ReplicatorChange,
    URLEndpoint,
    ArrayFunction,
    PropertyExpression,
    Join
} from '@ionic-enterprise/offline-storage';
```

Next, initialize the database:

```typescript
/*  
    Note about encryption: In a real-world app, the encryption key 
    should not be hardcoded like it is here. One strategy is to 
    auto generate a unique encryption key per user on initial app 
    load, then store it securely in the device's keychain for later
    retrieval. Ionic's Identity Vault plugin is an option. Using 
    IV’s storage API, you can ensure that the key cannot be read
    or accessed without the user being authenticated first.
*/
private async initializeDatabase(): Promise<void> {
    return new Promise(resolve => {
        IonicCBL.onReady(async () => {
            const config = new DatabaseConfiguration();
            config.setEncryptionKey('8e31f8f6-60bd-482a-9c70-69855dd02c38');
            this.database = new Database('DATABASE_NAME', config);
            this.database.setEngine(
            new CordovaEngine({
                allResultsChunkSize: 9999
            }));
            await this.database.open();

            resolve();
        });
    });
}
```

Create a new document and save it to the database:

```typescript
// Create a new document (i.e. a record) in the database.
let mutableDoc = new MutableDocument()
    .setFloat("version", 2.0)
    .setString("type", "SDK")
    .setString("company", "Ionic");

// Save it to the database.
await this.database.save(mutableDoc);
```

Run a simple Query:

```typescript
// Create a query to fetch documents of type SDK.
let query = QueryBuilder.select(SelectResult.property("version"),
        SelectResult.property("type"),
        SelectResult.property("company"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("SDK")));
const result = await (await query.execute()).allResults();
console.log("Number of rows:  " + result.size());
```

Build and run. You should see a row count of one printed to the console, as the document was successfully persisted to the database.

For more details, please refer to the [Offline Storage](/docs/enterprise/offline-storage) page.