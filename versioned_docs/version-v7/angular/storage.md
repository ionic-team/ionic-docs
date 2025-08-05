---
title: Data Storage
sidebar_label: Storage
---

<head>
  <title>Angular App Data Storage Options - Ionic Documentation</title>
  <meta
    name="description"
    content="A variety of options are available for storing data within Ionic apps made using Angular. Choose the options that best fit your storage needs."
  />
</head>

There are a variety of options available for storing data within an Ionic application. It is best to choose options that best fit the needs of your application. A single application may have requirements that span multiple options. 

:::info
Some storage options involve third-party plugins or products. In such cases, we neither endorse nor support those plugins or products. We are mentioning them here for informational purposes only.
:::

Here are some common use cases and solutions:

## Local Application Settings and Data

Many applications need to locally store settings as well as other lightweight key/value data. The [Capacitor Preferences](https://capacitorjs.com/docs/apis/preferences) plugin is specifically designed to handle these scenarios.

## Relational Data Storage (Mobile Only)

Some applications, especially those following an offline-first methodology, may require locally storing high volumes of complex relational data. For such scenarios, a SQLite plugin may be used. The most common SQLite plugin offerings are:

- [Cordova SQLite Storage](https://github.com/storesafe/cordova-sqlite-storage) (a [convenience wrapper](https://danielsogl.gitbook.io/awesome-cordova-plugins/sqlite) also exists for this plugin to aid in implementation)
- [Capacitor Community SQLite Plugin](https://github.com/capacitor-community/sqlite)

## Non-Relational High Volume Data Storage (Mobile and Web)

For applications that need to store a high volume of data as well as operate on both web and mobile, a potential solution is to create a key/value pair data storage service that uses [indexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) on the web and one of the previously mentioned SQLite plugins on mobile.

Here a sample of how this can be accomplished:

- [Full application](https://github.com/ionic-enterprise/tutorials-and-demos-ng/tree/main/demos/sqlcipher-kv-pair)
- [Mobile Service](https://github.com/ionic-enterprise/tutorials-and-demos-ng/blob/main/demos/sqlcipher-kv-pair/src/app/core/mobile-kv-store.ts)
- [Web Service](https://github.com/ionic-enterprise/tutorials-and-demos-ng/blob/main/demos/sqlcipher-kv-pair/src/app/core/web-kv-store.ts)

## Other Options

Other storage options that provide local as well as cloud-based storage that work well within Capacitor applications also exist and may integrate well with your application.

For example:

- [PouchDB](https://pouchdb.com/)
- [Firestore](https://firebase.google.com/docs/firestore)