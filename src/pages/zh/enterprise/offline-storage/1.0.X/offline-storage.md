---
title: 离线存储
template: 企业插件
version: 1.0.0
minor: 1.0.X
---

# Ionic 离线存储

Ionic 离线存储是一个跨平台数据存储系统，用于iOS 和 Android 以及 Electron 桌面上。 由 [Couchbase Lite](https://docs.couchbase.com/couchbase-lite/2.6/index.html)驱动，一个 NoSQL 数据库引擎提供简单但强大的查询、复制和同步 API。

这个解决方案可以轻松地将离线存储添加到具有安全性(在设备上加密)、高度性能并提供高级数据查询的 Ionic 应用中。 [了解更多](https://ionicframework.com/offline-storage)

<native-ent-install plugin-id="offline-storage" variables=""></native-ent-install>

## 项目要求

Couchbase Lite 需要 Android 至少 19 的 SDK。 请确保您至少在 `config.xml` 中有这样做：

```xml
<preference name="android-minSdkVersion" value="19" />
```

为了使用云数据同步、数据复制、冲突解决和delta sync等其他功能，需要订阅Couchbase Server。 若要了解更多信息，请 [取得联系](https://ionicframework.com/enterprise/contact)。

## 参考

1) 完整的 [CRUD 实现](https://github.com/ionic-team/cs-demo-couchbase-lite)，包括查询、响应数据更改和删除文档。 跟随相应的 [博客文章](https://ionicframework.com/blog/build-secure-offline-apps-with-ionic-couchbase-lite/)。

2) 完整的 [离线搜索体验](https://github.com/ionic-team/demo-offlinestorage-search) 个搜索体验，包括高级查询示例、多个过滤器和通配符搜索。 跟随相应的 [博客文章](https://youtu.be/_2C047pQwxU?t=1003)。

## 开始使用

安装插件后，将 `@ionic-enterprise/offline-storage` 导入到所需的类 (推荐一个专用的服务类封装离线存储逻辑)。

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

接下来，初始化数据库：

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

创建一个新文档并保存到数据库：

```typescript
// Create a new document (i.e. a record) in the database.
let mutableDoc = new MutableDocument()
    .setFloat("version", 2.0)
    .setString("type", "SDK")
    .setString("company", "Ionic");

// Save it to the database.
await this.database.save(mutableDoc);
```

运行一个简单查询：

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

构建并运行。 您应该看到打印到控制台的一行计数，因为文档已成功保存到数据库。

双向复制同步网关：

```typescript
// Create replicators to push and pull changes to and from the cloud.
let targetEndpoint = new URLEndpoint(new URI("ws://localhost:4984/example_sg_db"));
let replConfig = new ReplicatorConfiguration(database, targetEndpoint);
replConfig.setReplicatorType(ReplicatorConfiguration.ReplicatorType.PUSH_AND_PULL);

// Add authentication.
replConfig.setAuthenticator(new BasicAuthenticator("john", "pass"));

// Create replicator.
let replicator = new Replicator(replConfig);

// Listen to replicator change events.
replicator.addChangeListener((status) => {
});

// Start replication.
replicator.start();
```

Beyond these docs, reference [Couchbase Lite's documentation](https://docs.couchbase.com/couchbase-lite/current/swift.html#blobs) for more functionality details and examples.

## Database

### 新建数据库
As the top-level entity in the API, new databases can be created using the `Database` class by passing in a name, configuration, or both. The following example creates a database using the `Database(name: string)` constructor:

```typescript
let config = new DatabaseConfiguration();
let database = new Database("my-database", config);
```

The database will be created on the device. Alternatively, the `Database(name: string, config: DatabaseConfiguration)` initializer can be used to provide specific options in the <a href="http://docs.couchbase.com/mobile/2.0/couchbase-lite-java/db022/com/couchbase/lite/DatabaseConfiguration.html"><code>DatabaseConfiguration</code></a> object such as the database directory.

### 加载预建数据库

If your app needs to sync a lot of data initially, but that data is fairly static and won’t change much, it can be a lot more efficient to bundle a database in your application and install it on the first launch. Even if some of the content changes on the server after you create the app, the app’s first pull replication will bring the database up to date.

To use a prebuilt database, you need to set up the database, build the database into your app bundle as a resource, and install the database during the initial launch. After your app launches, it needs to check whether the database exists. If the database does not exist, the app should copy it from the app bundle using the <a href="http://docs.couchbase.com/mobile/2.0/couchbase-lite-java/db022/com/couchbase/lite/Database.html#copy-java.io.File-java.lang.String-com.couchbase.lite.DatabaseConfiguration-"><code>Database.copy(File path, String name, DatabaseConfiguration config)</code></a> method as shown below.

```typescript
let config = new DatabaseConfiguration(getApplicationContext());
ZipUtils.unzip(getAsset("replacedb/android200-sqlite.cblite2.zip"), getApplicationContext().getFilesDir());
let path = new File(getApplicationContext().getFilesDir(), "android-sqlite");
try {
    Database.copy(path, "travel-sample", config);
} catch (e) {
    console.log("Could not load pre-built database");
}
```

## 文档

In Couchbase Lite, a document’s body takes the form of a JSON object — a collection of key/value pairs where the values can be different types of data such as numbers, strings, arrays or even nested objects. Every document is identified by a document ID, which can be automatically generated (as a UUID) or specified programmatically; the only constraints are that it must be unique within the database, and it can’t be changed.

### 初始化

The following methods/initializers can be used:

The `MutableDocument()` initializer can be used to create a new document where the document ID is randomly generated by the database.

The `MutableDocument(withID: string)` initializer can be used to create a new document with a specific ID.

The `database.getDocument(id: string)` method can be used to get a document. If it doesn’t exist in the database, it will return <code>null</code>. This method can be used to check if a document with a given ID already exists in the database.

The following code example creates a document and persists it to the database:

```typescript
let newTask = new MutableDocument();
newTask.setString("type", "task");
newTask.setString("owner", "todo");
newTask.setDate("createdAt", new Date());
try {
    database.save(newTask);
} catch (e) {
    console.log(e.toString());
}
```

Changes to the document are persisted to the database when the <code>save</code> method is called.

### 输入存取器

The `Document` class offers a set of <code>property accessors</code> for various scalar types, including boolean, integers, floating-point and strings. These accessors take care of converting to/from JSON encoding, and make sure you get the type you’re expecting.

In addition, as a convenience we offer <code>Date</code> accessors. Dates are a common data type, but JSON doesn’t natively support them, so the convention is to store them as strings in ISO-8601 format. The following example sets the date on the <code>createdAt</code> property and reads it back using the <code>document.getDate(String key)</code> accessor method.

```typescript
newTask.setValue("createdAt", new Date());
let date = newTask.getDate("createdAt");
```

If the property doesn’t exist in the document it will return the default value for that getter method (0 for <code>getInt</code>, 0.0 for <code>getFloat</code> etc.).

### Batch Operations

If you need to make multiple changes to a database at once, it’s faster to group them together.

The following example persists a few documents in batch:

```typescript
await this.database.inBatch(() => {
  for (let sdk of sdkDataToLoad) {
    let doc = new MutableDocument()
      .setNumber('version', sdk.version)
      .setString('type', sdk.type)
      .setString('company', sdk.company);

    this.database.save(doc);
 }
});
```

At the <strong>local</strong> level this operation is still transactional: no other <code>Database</code> instances, including ones managed by the replicator can make changes during the execution of the block, and other instances will not see partial changes. But Couchbase Mobile is a distributed system, and due to the way replication works, there’s no guarantee that Sync Gateway or other devices will receive your changes all at once.

## Blobs

Used to store large data, such as images.

The following code example adds a blob to the document under the <code>avatar</code> property.

```typescript
let is = getAsset("avatar.jpg");
try {
    let blob = new Blob("image/jpeg", is);
    newTask.setBlob("avatar", blob);
    database.save(newTask);

    let taskBlob = newTask.getBlob("avatar");
    let bytes = taskBlob.getContent();
} catch (e) {
    console.log(e.toString());
} finally {
    try {
        is.close();
    } catch (IOException e) {

    }
}
```

The `Blob` API lets you access the contents as in-memory data (a <code>Data</code> object) or as a <code>InputStream</code>. It also supports an optional <code>type</code> property that by convention stores the MIME type of the contents.

In the example above, "image/jpeg" is the MIME type and "avatar" is the key which references that <code>Blob</code>. That key can be used to retrieve the <code>Blob</code> object at a later time.

When a document is synchronized, the Couchbase Lite replicator will add an <code>_attachments</code> dictionary to the document’s properties if it contains a blob. A random access name will be generated for each <code>Blob</code> which is different to the "avatar" key that was used in the example above.

A blob also has properties such as <code>"digest"</code> (a SHA-1 digest of the data), <code>"length"</code> (the length in bytes), and optionally <code>"content_type"</code> (the MIME type). The data is not stored in the document, but in a separate content-addressable store, indexed by the digest.

## 查询

Database queries are based on expressions, of the form "return __ from documents where __, ordered by __", with semantics based on Couchbase’s N1QL query language.

There are several parts to specifying a query:

 * SELECT: specifies the projection, which is the part of the document that is to be returned.
 * FROM: specifies the database to query the documents from.
 * JOIN: specifies the matching criteria in which to join multiple documents.
 * WHERE: specifies the query criteria that the result must satisfy.
 * GROUP BY: specifies the query criteria to group rows by.
 * ORDER BY: specifies the query criteria to sort the rows in the result.

### SELECT statement

With the SELECT statement, you can query and manipulate JSON data. With projections, you retrieve just the fields that you need and not the entire document.

A `SelectResult` represents a single return value of the query statement. You can specify a comma separated list of `SelectResult` expressions in the select statement of your query. For instance, the following select statement queries for the document <code>_id</code> as well as the <code>type</code> and <code>name</code> properties of all documents in the database. In the query result, we print the <code>_id</code> and <code>name</code> properties of each row using the property name getter method.

```json
{
    "_id": "hotel123",
    "type": "hotel",
    "name": "Apple Droid"
}
```

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("name"),
        SelectResult.property("type"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("hotel")))
    .orderBy(Ordering.expression(Meta.id));

try {
    const resultSet = await (await query.execute()).allResults();
    for (let result of resultSet) {
        console.log("Sample", String.format("hotel id -> %s", result.getString("id")));
        console.log("Sample", String.format("hotel name -> %s", result.getString("name")));
    }
} catch (e) {
    Log.e("Sample", e.getLocalizedMessage());
}
```

The `SelectResult.all()` method can be used to query all the properties of a document. In this case, the document in the result is embedded in a dictionary where the key is the database name. The following snippet shows the same query using <code>SelectResult.all()</code> and the result in JSON.

```typescript
let query = QueryBuilder
    .select(SelectResult.all())
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("airline")));

const results = await (await query.execute()).allResults();

for (var key in results) {
    // SelectResult.all() returns all properties, but puts them into this JSON format:
    // [ { "*": { version: "2.0", type: "SDK", company: "Ionic" } } ]
    // Couchbase can query multiple databases at once, so "*" represents just this single database.
    let singleResult = results[key]["*"];

    // do something with the data
}
```

```json
[
    {
        "*": {
            "callsign": "MILE-AIR",
            "country": "United States",
            "iata": "Q5",
            "icao": "MLA",
            "id": 10,
            "name": "40-Mile Air",
            "type": "airline"
        }
    },
    {
        "*": {
            "callsign": "TXW",
            "country": "United States",
            "iata": "TQ",
            "icao": "TXW",
            "id": 10123,
            "name": "Texas Wings",
            "type": "airline"
        }
    }
]
```

#### Retrieve nested document objects

```json
{
    "_id": "airport123",
    "type": "airport",
    "country": "United States",
    "geo": { "altitude": 456 },
    "tz": "America/Anchorage"
}
```

In the above example, access nested objects like `altitude` using periods (`geo.altitude`):

```typescript
let query = QueryBuilder
    .select(SelectResult.property("geo.altitude"))
    .from(DataSource.database(database));
```

#### Retrieve All Unique Values for One Column

Retrieve all unique values in the database for one specific column of data. Useful for populating [dropdown controls](https://ionicframework.com/docs/api/select) as part of a search interface, for example.

```typescript
// Find all unique Hotel names, for example
// documentPropertyName = "hotel"
public async getAllUniqueValues(documentPropertyName: string) {
    const query = QueryBuilder.selectDistinct(
        SelectResult.property(documentPropertyName))
      .from(DataSource.database(this.database))
      .orderBy(Ordering.property(documentPropertyName).ascending());

    const results = await (await query.execute()).allResults();
    return results.map(x => x[documentPropertyName]);
}
```

### WHERE Statement

Similar to SQL, you can use the where clause to filter the documents to be returned as part of the query. The select statement takes in an <code>Expression</code>. You can chain any number of Expressions in order to implement sophisticated filtering capabilities.

#### Comparison
The <a href="http://docs.couchbase.com/mobile/2.0/couchbase-lite-java/db022/com/couchbase/lite/Expression.html">comparison operators</a> can be used in the WHERE statement to specify on which property to match documents. In the example below, we use the `equalTo` operator to query documents where the `type` property equals "hotel".

```json
{
    "_id": "hotel123",
    "type": "hotel",
    "name": "Apple Droid"
}
```

```typescript
let query = QueryBuilder
    .select(SelectResult.all())
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("hotel")))
    .limit(Expression.intValue(10));
let rs = await (await query.execute()).allResults();
for (let result of rs) {
    let all = result.getDictionary(DATABASE_NAME);
    console.log("Sample", String.format("name -> %s", all.getString("name")));
    console.log("Sample", String.format("type -> %s", all.getString("type")));
}
```

#### Collection Operators

<a href="http://docs.couchbase.com/mobile/2.0/couchbase-lite-java/db022/com/couchbase/lite/ArrayFunction.html">Collection operators</a> are useful to check if a given value is present in an array.</p>

##### CONTAINS Operator

The following example uses the <code>Function.arrayContains</code> to find documents whose <code>public_likes</code> array property contain a value equal to "Armani Langworth".

```typescript
{
    "_id": "hotel123",
    "name": "Apple Droid",
    "public_likes": ["Armani Langworth", "Elfrieda Gutkowski", "Maureen Ruecker"]
}
```

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("name"),
        SelectResult.property("public_likes"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("hotel"))
        .and(ArrayFunction.contains(Expression.property("public_likes"), Expression.string("Armani Langworth"))));
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample", String.format("public_likes -> %s", result.getArray("public_likes").toList()));
```

#### IN Operator

The <code>IN</code> operator is useful when you need to explicitly list out the values to test against. The following example looks for documents whose <code>first</code>, <code>last</code> or <code>username</code> property value equals "Armani".


```typescript
let values = new Expression[] {
    Expression.property("first"),
    Expression.property("last"),
    Expression.property("username")
};

let query = QueryBuilder.select(SelectResult.all())
    .from(DataSource.database(database))
    .where(Expression.string("Armani").in(values));
```

#### Like Operator
The <a href="http://docs.couchbase.com/mobile/2.0/couchbase-lite-java/db022/com/couchbase/lite/Expression.html#like-com.couchbase.lite.Expression-"><code>like</code></a> operator can be used for string matching. It is recommended to use the <code>like</code> operator for case insensitive matches and the <code>regex</code> operator (see below) for case sensitive matches.

In the example below, we are looking for documents of type <code>landmark</code> where the name property exactly matches the string "Royal engineers museum". Note that since <code>like</code> does a case insensitive match, the following query will return "landmark" type documents with name matching "Royal Engineers Museum", "royal engineers museum", "ROYAL ENGINEERS MUSEUM" and so on.

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("country"),
        SelectResult.property("name"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("landmark"))
        .and(Expression.property("name").like(Expression.string("Royal Engineers Museum"))));
let rs = await (await query.execute()).allResults();
for (let result of rs) {
    console.log("Sample", `name -> ${result.getString("name")}`);
}
```

#### Wildcard Match

We can use <code>%</code> sign within a <code>like</code> expression to do a wildcard match against zero or more characters. Using wildcards allows you to have some fuzziness in your search string.

In the example below, we are looking for documents of <code>type</code> "landmark" where the name property matches any string that begins with "eng" followed by zero or more characters, the letter "e", followed by zero or more characters. The following query will return "landmark" type documents with name matching "Engineers", "engine", "english egg" , "England Eagle" and so on. Notice that the matches may span word boundaries.

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("country"),
        SelectResult.property("name"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("landmark"))
        .and(Expression.property("name").like(Expression.string("Eng%e%"))));
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample", `name -> ${result.getString("name")}`);
```

A reusable function can easily be created that formats an expression, usable in a Where clause, for fuzzy searching:

```typescript
// Specify a reserved word
private EMPTY_PLACEHOLDER = "Any";

private formatWildcardExpression(propValue) {
    return Expression.string(
        `%${propValue === this.EMPTY_PLACEHOLDER ? "" : propValue}%`);
}
```

```typescript
// snippet:
.where(Expression.property("office").like(
    this.formatWildcardExpression(office))
```

#### Wildcard Character Match

We can use <code>_</code> sign within a like expression to do a wildcard match against a single character.

In the example below, we are looking for documents of type "landmark" where the <code>name</code> property matches any string that begins with "eng" followed by exactly 4 wildcard characters and ending in the letter "r". The following query will return "landmark" <code>type</code> documents with the <code>name</code> matching "Engineer", "engineer" and so on.

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("country"),
        SelectResult.property("name"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("landmark"))
        .and(Expression.property("name").like(Expression.string("Eng____r"))));
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample", `name -> ${result.getString("name")}`);
```

#### Regex Operator

The <code>regex</code> expression can be used for case sensitive matches. Similar to wildcard <code>like</code> expressions, <code>regex</code> expressions based pattern matching allow you to have some fuzziness in your search string.

In the example below, we are looking for documents of <code>type</code> "landmark" where the name property matches any string (on word boundaries) that begins with "eng" followed by exactly 4 wildcard characters and ending in the letter "r". The following query will return "landmark" type documents with name matching "Engine", "engine" and so on. Note that the <code>\b</code> specifies that the match must occur on word boundaries.

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("country"),
        SelectResult.property("name"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("landmark"))
        .and(Expression.property("name").regex(Expression.string("\\bEng.*r\\b"))));
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample", `name -> ${result.getString("name")}`);
```

### JOIN Statement

The JOIN clause enables you to create new input objects by combining two or more source objects.

The following example uses a JOIN clause to find the airline details which have routes that start from RIX. This example JOINS the document of type "route" with documents of type "airline" using the document ID (<code>_id</code>) on the "airline" document and <code>airlineid</code> on the "route" document.

```typescript
let query = QueryBuilder.select(
    SelectResult.expression(Expression.property("name").from("airline")),
    SelectResult.expression(Expression.property("callsign").from("airline")),
    SelectResult.expression(Expression.property("destinationairport").from("route")),
    SelectResult.expression(Expression.property("stops").from("route")),
    SelectResult.expression(Expression.property("airline").from("route")))
    .from(DataSource.database(database).as("airline"))
    .join(Join.join(DataSource.database(database).as("route"))
        .on(Meta.id.from("airline").equalTo(Expression.property("airlineid").from("route"))))
    .where(Expression.property("type").from("route").equalTo(Expression.string("route"))
        .and(Expression.property("type").from("airline").equalTo(Expression.string("airline")))
        .and(Expression.property("sourceairport").from("route").equalTo(Expression.string("RIX"))));
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample", String.format("%s", result.toMap().toString()));
```

### GROUP BY statement

You can perform further processing on the data in your result set before the final projection is generated. The following example looks for the number of airports at an altitude of 300 ft or higher and groups the results by country and timezone.

```json
{
    "_id": "airport123",
    "type": "airport",
    "country": "United States",
    "geo": { "alt": 456 },
    "tz": "America/Anchorage"
}
```

```typescript
let query = QueryBuilder.select(
    SelectResult.expression(Function.count(Expression.string("*"))),
    SelectResult.property("country"),
    SelectResult.property("tz"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("airport"))
        .and(Expression.property("geo.alt").greaterThanOrEqualTo(Expression.intValue(300))))
    .groupBy(Expression.property("country"),
        Expression.property("tz"))
    .orderBy(Ordering.expression(Function.count(Expression.string("*"))).descending());
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample",
        String.format("There are %d airports on the %s timezone located in %s and above 300ft",
            result.getInt("$1"),
            result.getString("tz"),
            result.getString("country")));
```

```
There are 138 airports on the Europe/Paris timezone located in France and above 300 ft
There are 29 airports on the Europe/London timezone located in United Kingdom and above 300 ft
There are 50 airports on the America/Anchorage timezone located in United States and above 300 ft
There are 279 airports on the America/Chicago timezone located in United States and above 300 ft
There are 123 airports on the America/Denver timezone located in United States and above 300 ft
```

### ORDER BY statement

It is possible to sort the results of a query based on a given expression result. The example below returns documents of type equal to "hotel" sorted in ascending order by the value of the title property.

```typescript
let query = QueryBuilder
    .select(SelectResult.expression(Meta.id),
        SelectResult.property("name"))
    .from(DataSource.database(database))
    .where(Expression.property("type").equalTo(Expression.string("hotel")))
    .orderBy(Ordering.property("name").ascending())
    .limit(Expression.intValue(10));
let rs = await (await query.execute()).allResults();
for (let result of rs)
    console.log("Sample", result.toMap());
```
```
Aberdyfi
Achiltibuie
Altrincham
Ambleside
Annan
Ardèche
Armagh
Avignon
```

## Indexing

Creating indexes can speed up the performance of queries. While indexes make queries faster, they also make writes slightly slower, and the Couchbase Lite database file slightly larger. As such, it is best to only create indexes when you need to optimize a specific case for better query performance.

The following example creates a new index for the <code>type</code> and <code>name</code> properties.

```json
{
  "_id": "hotel123",
  "type": "hotel",
  "name": "Apple Droid"
}
```

```typescript
database.createIndex("TypeNameIndex",
    IndexBuilder.valueIndex(ValueIndexItem.property("type"),
        ValueIndexItem.property("name")));
```

If there are multiple expressions, the first one will be the primary key, the second the secondary key, etc.

Note: Every index has to be updated whenever a document is updated, so too many indexes can hurt performance. Thus, good performance depends on designing and creating the <em>right</em> indexes to go along with your queries.

## Full-Text Search

To run a full-text search (FTS) query, you must have created a full-text index on the expression being matched. Unlike regular queries, the index is not optional. The following example inserts documents and creates an FTS index on the <code>name</code> property.

```typescript
database.createIndex("nameFTSIndex", IndexBuilder.fullTextIndex(FullTextIndexItem.property("name")).ignoreAccents(false));
```

Multiple properties to index can be specified in the index creation method.

With the index created, an FTS query on the property that is being indexed can be constructed and ran. The full-text search criteria is defined as a <code>FullTextExpression</code>. The left-hand side is the full-text index to use and the right-hand side is the pattern to match.

```typescript
let whereClause = FullTextExpression.index("nameFTSIndex").match("buy");
let ftsQuery = QueryBuilder.select(SelectResult.expression(Meta.id))
    .from(DataSource.database(database))
    .where(whereClause);
let ftsQueryResult = await (await ftsQuery.execute()).allResults();
for (let result of ftsQueryResult)
    console.log(String.format("document properties %s", result.getString(0)));
```

In the example above, the pattern to match is a word, the full-text search query matches all documents that contain the word "buy" in the value of the <code>doc.name</code> property.

Full-text search is supported in the following languages: danish, dutch, english, finnish, french, german, hungarian, italian, norwegian, portuguese, romanian, russian, spanish, swedish and turkish.

The pattern to match can also be in the following forms:
 - _prefix queries:_ the query expression used to search for a term prefix is the prefix itself with a "*" character appended to it. For example:

```
"'lin*'"
-- Query for all documents containing a term with the prefix "lin". This will match
-- all documents that contain "linux", but also those that contain terms "linear",
--"linker", "linguistic" and so on.
```

 - _overriding the property name that is being indexed:_ Normally, a token or token prefix query is matched against the document property specified as the left-hand side of the <code>match</code> operator. This may be overridden by specifying a property name followed by a ":" character before a basic term query. There may be space between the ":" and the term to query for, but not between the property name and the ":" character. For example:

```
'title:linux problems'
-- Query the database for documents for which the term "linux" appears in
-- the document title, and the term "problems" appears in either the title
-- or body of the document.</pre>
```

  - _phrase queries:_ a phrase query is a query that retrieves all documents that contain a nominated set of terms or term prefixes in a specified order with no intervening tokens. Phrase queries are specified by enclosing a space separated sequence of terms or term prefixes in double quotes ("). For example:

```
"'"linux applications"'"
-- Query for all documents that contain the phrase "linux applications".</pre>
```

  - _NEAR queries:_ A NEAR query is a query that returns documents that contain a two or more nominated terms or phrases within a specified proximity of each other (by default with 10 or less intervening terms). A NEAR query is specified by putting the keyword "NEAR" between two phrase, token or token prefix queries. To specify a proximity other than the default, an operator of the form "NEAR/" may be used, where is the maximum number of intervening terms allowed. For example:

```
"'database NEAR/2 "replication"'"
-- Search for a document that contains the phrase "replication" and the term
-- "database" with not more than 2 terms separating the two.</pre>
```

  - _AND, OR & NOT query operators:_ The enhanced query syntax supports the AND, OR and NOT binary set operators. Each of the two operands to an operator may be a basic FTS query, or the result of another AND, OR or NOT set operation. Operators must be entered using capital letters. Otherwise, they are interpreted as basic term queries instead of set operators. For example:

```
'couchbase AND database'
-- Return the set of documents that contain the term "couchbase", and the
-- term "database". This query will return the document with docid 3 only.</pre>
```

When using the enhanced query syntax, parenthesis may be used to specify the precedence of the various operators. For example:
```
'("couchbase database" OR "sqlite library") AND linux'
-- Query for the set of documents that contains the term "linux", and at least
-- one of the phrases "couchbase database" and "sqlite library".</pre>
```

### Ordering results

It’s very common to sort full-text results in descending order of relevance. This can be a very difficult heuristic to define, but Couchbase Lite comes with a ranking function you can use. In the <code>OrderBy</code> array, use a string of the form <code>Rank(X)</code>, where <code>X</code> is the property or expression being searched, to represent the ranking of the result.

## Replication

Couchbase Mobile 2.0 uses a new replication protocol based on WebSockets.

### Compatibility

The new protocol is <strong>incompatible</strong> with CouchDB-based databases. And since Couchbase Lite 2 only supports the new protocol, you will need to run a version of Sync Gateway that <a href="compatibility-matrix.html" class="page">supports it</a>.

To use this protocol with Couchbase Lite 2.0, the replication URL should specify WebSockets as the URL scheme (see the "Starting a Replication" section below). Mobile clients using Couchbase Lite 1.x can continue to use <strong>http</strong> as the URL scheme. Sync Gateway 2.0 will automatically use the 1.x replication protocol when a Couchbase Lite 1.x client connects through http://localhost:4984/db and the 2.0 replication protocol when a Couchbase Lite 2.0 client connects through ws://localhost:4984/db.

### Starting Sync Gateway

<a href="https://www.couchbase.com/downloads">Download Sync Gateway</a> and start it from the command line with the configuration file created above.

```bash
~/Downloads/couchbase-sync-gateway/bin/sync_gateway
```

For platform specific installation instructions, refer to the Sync Gateway <a href="https://developer.couchbase.com/documentation/mobile/current/installation/sync-gateway/index.html">installation guide</a>.

### Starting a Replication

Replication can be bidirectional, this means you can start a <code>push</code>/<code>pull</code> replication with a single instance. The replication’s parameters can be specified through the <a href="http://docs.couchbase.com/mobile/2.0/couchbase-lite-java/db022/index.html?com/couchbase/lite/ReplicatorConfiguration.html"><code>ReplicatorConfiguration</code></a> object; for example, if you wish to start a <code>push</code> only or <code>pull</code> only replication.

The following example creates a <code>pull</code> replication with Sync Gateway.

```typescript
class MyClass {
  database: Database;
  replicator: Replicator;

  startReplication() {
    let endpoint = new URLEndpoint('ws://10.0.2.2:4984/db');
    let config = new ReplicatorConfiguration(this.database, endpoint);
    config.setReplicatorType(ReplicatorConfiguration.ReplicatorType.PULL);
    this.replicator = new Replicator(config);
    return this.replicator.start();
  }
}
```

A replication is an asynchronous operation. To keep a reference to the <code>replicator</code> object, you can set it as an instance property.

To verify that documents have been replicated, you can:

 - Monitor the Sync Gateway sequence number returned by the database endpoint (<code>GET /{db}/</code>). The sequence number increments for every change that happens on the Sync Gateway database.

 - Query a document by ID on the Sync Gateway REST API (<code>GET /{db}/{id}</code>).

 - Query a document from the Query Workbench on the Couchbase Server Console.

Couchbase Lite 2.0 uses WebSockets as the communication protocol to transmit data. Some load balancers are not configured for WebSocket connections by default (NGINX for example); so it might be necessary to explicitly enable them in the load balancer’s configuration (see <a href="https://developer.couchbase.com/documentation/mobile/current/guides/sync-gateway/nginx/index.html">Load Balancers</a>).

By default, the WebSocket protocol uses compression to optimize for speed and bandwidth utilization. The level of compression is set on Sync Gateway and can be tuned in the configuration file (<code>replicator_compression</code></a>).

#### Replication Ordering

To optimize for speed, the replication protocol doesn’t guarantee that documents will be received in a particular order. So we don’t recommend to rely on that when using the replication or database change listeners for example.

### Troubleshooting

As always, when there is a problem with replication, logging is your friend. The following example increases the log output for activity related to replication with Sync Gateway.

`Database.setLogLevel(LogDomain.REPLICATOR, LogLevel.VERBOSE);`

### Replication Status

The <code>replication.Status.Activity</code> property can be used to check the status of a replication. For example, when the replication is actively transferring data and when it has stopped.

```typescript
replication.addChangeListener((change) => {
  if (change.activityLevel == Replicator.ActivityLevel.STOPPED)
      console.log("Replication stopped");
});
```

The following table lists the different activity levels in the API and the meaning of each one.

<table class="tableblock frame-all grid-all spread">
<colgroup>
<col style="width: 50%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th class="tableblock halign-left valign-top">State</th>
<th class="tableblock halign-left valign-top">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>STOPPED</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">The replication is finished or hit a fatal error.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>OFFLINE</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">The replicator is offline as the remote host is unreachable.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>CONNECTING</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">The replicator is connecting to the remote host.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>IDLE</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">The replication caught up with all the changes available from the server.
The <code>IDLE</code> state is only used in continuous replications.</p></td>
</tr>
<tr>
<td class="tableblock halign-left valign-top"><p class="tableblock"><code>BUSY</code></p></td>
<td class="tableblock halign-left valign-top"><p class="tableblock">The replication is actively transferring data.</p></td>
</tr>
</tbody>
</table>

### Handling Network Errors

If an error occurs, the replication status will be updated with an <code>Error</code> which follows the standard HTTP error codes. The following example monitors the replication for errors and logs the error code to the console.

```typescript
replication.addChangeListener((change) => {
  let error = change.error;
  if (error != null)
      console.log("Error code::", error.getCode());
});
replication.start();
```

When a permanent error occurs (i.e., <code>404</code>: not found, <code>401</code>: unauthorized), the replicator (continuous or one-shot) will stop permanently. If the error is temporary (i.e., waiting for the network to recover), a continuous replication will retry to connect indefinitely and if the replication is one-shot it will retry for a limited number of times. The following error codes are considered temporary by the Couchbase Lite replicator and thus will trigger a connection retry.

<ul>
<li>
<p><code>408</code>: Request Timeout</p>
</li>
<li>
<p><code>429</code>: Too Many Requests</p>
</li>
<li>
<p><code>500</code>: Internal Server Error</p>
</li>
<li>
<p><code>502</code>: Bad Gateway</p>
</li>
<li>
<p><code>503</code>: Service Unavailable</p>
</li>
<li>
<p><code>504</code>: Gateway Timeout</p>
</li>
<li>
<p><code>1001</code>: DNS resolution error</p>
</li>
</ul>

### Custom Headers

Custom headers can be set on the configuration object. And the replicator will send those header(s) in every request. As an example, this feature can be useful to pass additional credentials when there is an authentication or authorization step being done by a proxy server (between Couchbase Lite and Sync Gateway).

```typescript
let config = new ReplicatorConfiguration(database, endpoint);
config.setHeaders({
  "CustomHeaderName": "Value"
});
```

## 处理冲突

In Couchbase Lite 2.0, document conflicts are automatically resolved. This functionality aims to simplify the default behavior of conflict handling and save disk space (conflicting revisions will no longer be stored in the database). There are 2 different <code>save</code> method signatures to specify how to handle a possible conflict:

 - <code>save(document: MutableDocument)</code>: when concurrent writes to an individual record occur, the conflict is automatically resolved and only one non-conflicting document update is stored in the database. The Last-Write-Win (LWW) algorithm is used to pick the winning revision.
 - <code>save(document: MutableDocument, concurrencyControl: ConcurrencyControl)</code>: attempts to save the document with a concurrency control. The concurrency control parameter has two possible values:
    - <code>lastWriteWins</code>: The last operation wins if there is a conflict.
    - <code>failOnConflict</code>: The operation will fail if there is a conflict.

Similarly to the save operation, the delete operation also has two method signatures to specify how to handle a possible conflict:

  - <code>delete(document: Document)</code>: The last write will win if there is a conflict.
  - <code>delete(document: Document, concurrencyControl: ConcurrencyControl)</code>: attemps to delete the document with a concurrency control. The concurrency control parameter has two possible values:
    - <code>lastWriteWins</code>: The last operation wins if there is a conflict.</p>
    - <code>failOnConflict</code>: The operation will fail if there is a conflict.</p>

## Database Replicas

Database replicas is available in the <strong>Ionic Native</strong> only (<a href="https://www.couchbase.com/downloads" class="bare">https://www.couchbase.com/downloads</a>). Starting in Couchbase Lite 2.0, replication between two local databases is now supported. It allows a Couchbase Lite replicator to store data on secondary storage. It would be especially useful in scenarios where a user’s device is damaged and the data needs to be moved to a different device. Note that the code below won’t compile if you’re running the <strong>Community Plugin</strong> of Couchbase Lite.


<!--
## Certificate Pinning

Couchbase Lite supports certificate pinning.
Certificate pinning is a technique that can be used by applications to "pin" a host to it’s certificate.
The certificate is typically delivered to the client by an out-of-band channel and bundled with the client.
In this case, Couchbase Lite uses this embedded certificate to verify the trustworthiness of the server and no longer needs to rely on a trusted third party for that (commonly referred to as the Certificate Authority).

The <code>openssl</code> command can be used to create a new self-signed certificate and convert the <code>.pem</code> file to a <code>.cert</code> file (see <a href="https://developer.couchbase.com/documentation/mobile/1.5/guides/sync-gateway/configuring-ssl/index.html#creating-your-own-self-signed-certificate">creating your own self-signed certificate</a>).
You should then have 3 files: <code>cert.pem</code>, <code>cert.cer</code> and <code>key.pem</code>.

The <code>cert.pem</code> and <code>key.pem</code> can be used in the Sync Gateway configuration (see <a href="https://developer.couchbase.com/documentation/mobile/1.5/guides/sync-gateway/configuring-ssl/index.html#installing-the-certificate">installing the certificate</a>).

On the Couchbase Lite side, the replication must be configured with the <code>cert.cer</code> file.
</div>
<div class="listingblock">
<div class="content">
<pre class="highlightjs highlight"><code class="language-java hljs" data-lang="java">let inputStream = getAsset(<span class="hljs-string">"cert.cer"</span>);
let cert = IOUtils.toByteArray(inputStream);
inputStream.close();
config.setPinnedServerCertificate(cert);</code></pre>
</div>
</div>
<div class="paragraph">
<p>This example loads the certificate from the application sandbox, then converts it to the appropriate type to configure the replication object.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="thread-safety"><a class="anchor" href="#thread-safety"></a>Thread Safety</h2>
<div class="sectionbody">
<div class="paragraph">
<p>The Couchbase Lite API is thread safe except for calls to mutable objects: <code>MutableDocument</code>, <code>MutableDictionary</code> and <code>MutableArray</code>.</p>
-->

# Changelog
