---
title: Filesystem
template: enterprise-plugin
version: 1.1.0
minor: 1.1.X
otherVersions:
  - 1.0.X
---

The Filesystem plugin presents a simple and intuitive interface for common file operations such as reading/writing and listing the contents of directories.

<native-ent-install plugin-id="filesystem" variables="" capacitor-slug="filesystem"></native-ent-install>

## Usage

The Filesystem plugin ships with a native Angular & es2015+/Typescript wrappers as well as being available on window.

```typescript
// Angular
import { Filesystem } from '@ionic-enterprise/filesystem/ngx';
import { Directories } from '@ionic-enterprise/filesystem';

...

constructor(private filesystem: Filesystem) { }

async statApplicationDirectory() {
  const info = await this.filesystem.stat({path: '/', directory: Directories.Application});
  console.log('Stat Info: ', info);
}

...

// ES2015+/TypeScript
import { Directories, Filesystem } from '@ionic-enterprise/filesystem';

Filesystem.stat({path: '/', directory: Directories.Application})
  .then((info) => console.log('Stat Info: ',  info))
  .catch((e) => console.log('Error occurred while doing stat: ', e));

...

// Vanilla JS
document.addEventListener('deviceready', () => {
  IonicFilesystem.stat({path: '/', directory: IonicFilesystem.Directories.Application})
    .then((info) => console.log('Stat Info: ',  info))
    .catch((e) => console.log('Error occurred while doing stat: ', e));
});
```

## API Documentation

You can find the API and interface documentation for everything below. The main classes to pay attention to are:

* [Filesystem](#filesystem) - This is the main API for interacting with the filesystem.
* [Directories](#directories) - The available directory locations for the application.
* [Encodings](#encodings) - The available encodings when reading/writing a file.

## Index

### Enumerations

* [Directories](#directories)
* [Encodings](#encodings)

### Classes

* [Filesystem](#filesystem)

### Interfaces

* [CopyOptions](#copyoptions)
* [EmptyResult](#emptyresult)
* [FileReadOptions](#filereadoptions)
* [FileReadResult](#filereadresult)
* [FileWriteOptions](#filewriteoptions)
* [GetUriResult](#geturiresult)
* [MkdirOptions](#mkdiroptions)
* [PathOptions](#pathoptions)
* [ReaddirResult](#readdirresult)
* [RenameOptions](#renameoptions)
* [RmdirOptions](#rmdiroptions)
* [StatResult](#statresult)

* * *

## Enumerations

<a id="directories"></a>

### Directories

**Directories**:

The avaiable directories on the system

<a id="directories.application"></a>

### Application

**Application**: = "APPLICATION"

The Application directory

* * *

<a id="directories.cache"></a>

### Cache

**Cache**: = "CACHE"

The Cache directory

* * *

<a id="directories.data"></a>

### Data

**Data**: = "DATA"

The Data directory

* * *

<a id="directories.documents"></a>

### Documents

**Documents**: = "DOCUMENTS"

The Documents directory

* * *

<a id="directories.external"></a>

### External

**External**: = "EXTERNAL"

The external directory (Android only)

* * *

<a id="directories.externalstorage"></a>

### ExternalStorage

**ExternalStorage**: = "EXTERNAL_STORAGE"

The external storage directory (Android only)

* * *

* * *

<a id="encodings"></a>

### Encodings

**Encodings**:

The possible encoding types

<a id="encodings.ascii"></a>

### ASCII

**ASCII**: = "ascii"

ASCII encoding

* * *

<a id="encodings.utf16"></a>

### UTF16

**UTF16**: = "utf16"

UTF16 encoding

* * *

<a id="encodings.utf8"></a>

### UTF8

**UTF8**: = "utf8"

UTF8 encoding

* * *

* * *

## Classes

<a id="filesystem"></a>

### Filesystem

***usage***:

```typescript
// Angular
import { Filesystem } from '@ionic-enterprise/filesystem/ngx';
import { Directories } from '@ionic-enterprise/filesystem';

...

constructor(private filesystem: Filesystem) { }

async statApplicationDirectory() {
  const info = await this.filesystem.stat({path: '/', directory: Directories.Application});
  console.log('Stat Info: ', info);
}

...

// ES2015+/TypeScript
import { Directories, Filesystem } from '@ionic-enterprise/filesystem';

Filesystem.stat({path: '/', directory: Directories.Application})
  .then((info) => console.log('Stat Info: ',  info))
  .catch((e) => console.log('Error occurred while doing stat: ', e));

...

// Vanilla JS
document.addEventListener('deviceready', () => {
  IonicFilesystem.stat({path: '/', directory: IonicFilesystem.Directories.Application})
    .then((info) => console.log('Stat Info: ',  info))
    .catch((e) => console.log('Error occurred while doing stat: ', e));
});
```

<a id="filesystem.directories"></a>

### Directories

**● Directories**: *[Directories](#directories)* = Directories

The avaiable directories on the system

* * *

<a id="filesystem.encodings"></a>

### Encodings

**● Encodings**: *[Encodings](#encodings)* = Encodings

The possible encoding types

* * *

<a id="filesystem.appendfile"></a>

### appendFile

▸ **appendFile**(options: *[FileWriteOptions](#filewriteoptions)*): `Promise`<[EmptyResult](#emptyresult)>

Append to a file on disk in the specified location on device

**Parameters:**

| Name    | Type                                  | Description                 |
| ------- | ------------------------------------- | --------------------------- |
| options | [FileWriteOptions](#filewriteoptions) | options for the file append |


**Returns:** `Promise`<[EmptyResult](#emptyresult)> a promise that resolves with the file write result

* * *

<a id="filesystem.copy"></a>

### copy

▸ **copy**(options: *[CopyOptions](#copyoptions)*): `Promise`<[EmptyResult](#emptyresult)>

Copy a file or directory

**Parameters:**

| Name    | Type                        | Description                        |
| ------- | --------------------------- | ---------------------------------- |
| options | [CopyOptions](#copyoptions) | the options for the copy operation |


**Returns:** `Promise`<[EmptyResult](#emptyresult)>

* * *

<a id="filesystem.deletefile"></a>

### deleteFile

▸ **deleteFile**(options: *[PathOptions](#pathoptions)*): `Promise`<[EmptyResult](#emptyresult)>

Delete a file from disk

**Parameters:**

| Name    | Type                        | Description                 |
| ------- | --------------------------- | --------------------------- |
| options | [PathOptions](#pathoptions) | options for the file delete |


**Returns:** `Promise`<[EmptyResult](#emptyresult)> a promise that resolves with the deleted file data result

* * *

<a id="filesystem.geturi"></a>

### getUri

▸ **getUri**(options: *[PathOptions](#pathoptions)*): `Promise`<[GetUriResult](#geturiresult)>

Return full File URI for a path and directory

**Parameters:**

| Name    | Type                        | Description                        |
| ------- | --------------------------- | ---------------------------------- |
| options | [PathOptions](#pathoptions) | the options for the stat operation |


**Returns:** `Promise`<[GetUriResult](#geturiresult)> a promise that resolves with the file stat result

* * *

<a id="filesystem.mkdir"></a>

### mkdir

▸ **mkdir**(options: *[MkdirOptions](#mkdiroptions)*): `Promise`<[EmptyResult](#emptyresult)>

Create a directory.

**Parameters:**

| Name    | Type                          | Description           |
| ------- | ----------------------------- | --------------------- |
| options | [MkdirOptions](#mkdiroptions) | options for the mkdir |


**Returns:** `Promise`<[EmptyResult](#emptyresult)> a promise that resolves with the mkdir result

* * *

<a id="filesystem.readfile"></a>

### readFile

▸ **readFile**(options: *[FileReadOptions](#filereadoptions)*): `Promise`<[FileReadResult](#filereadresult)>

Read a file from disk

**Parameters:**

| Name    | Type                                | Description               |
| ------- | ----------------------------------- | ------------------------- |
| options | [FileReadOptions](#filereadoptions) | options for the file read |


**Returns:** `Promise`<[FileReadResult](#filereadresult)> a promise that resolves with the read file data result

* * *

<a id="filesystem.readdir"></a>

### readdir

▸ **readdir**(options: *[PathOptions](#pathoptions)*): `Promise`<[ReaddirResult](#readdirresult)>

Return a list of files from the directory (not recursive)

**Parameters:**

| Name    | Type                        | Description                           |
| ------- | --------------------------- | ------------------------------------- |
| options | [PathOptions](#pathoptions) | the options for the readdir operation |


**Returns:** `Promise`<[ReaddirResult](#readdirresult)> a promise that resolves with the readdir directory listing result

* * *

<a id="filesystem.rename"></a>

### rename

▸ **rename**(options: *[RenameOptions](#renameoptions)*): `Promise`<[EmptyResult](#emptyresult)>

Rename a file or directory

**Parameters:**

| Name    | Type                            | Description                          |
| ------- | ------------------------------- | ------------------------------------ |
| options | [RenameOptions](#renameoptions) | the options for the rename operation |


**Returns:** `Promise`<[EmptyResult](#emptyresult)>

* * *

<a id="filesystem.rmdir"></a>

### rmdir

▸ **rmdir**(options: *[RmdirOptions](#rmdiroptions)*): `Promise`<[EmptyResult](#emptyresult)>

Remove a directory

**Parameters:**

| Name    | Type                          | Description                          |
| ------- | ----------------------------- | ------------------------------------ |
| options | [RmdirOptions](#rmdiroptions) | the options for the directory remove |


**Returns:** `Promise`<[EmptyResult](#emptyresult)>

* * *

<a id="filesystem.stat"></a>

### stat

▸ **stat**(options: *[PathOptions](#pathoptions)*): `Promise`<[StatResult](#statresult)>

Return data about a file

**Parameters:**

| Name    | Type                        | Description                        |
| ------- | --------------------------- | ---------------------------------- |
| options | [PathOptions](#pathoptions) | the options for the stat operation |


**Returns:** `Promise`<[StatResult](#statresult)> a promise that resolves with the file stat result

* * *

<a id="filesystem.writefile"></a>

### writeFile

▸ **writeFile**(options: *[FileWriteOptions](#filewriteoptions)*): `Promise`<[EmptyResult](#emptyresult)>

Write a file to disk in the specified location on device

**Parameters:**

| Name    | Type                                  | Description                |
| ------- | ------------------------------------- | -------------------------- |
| options | [FileWriteOptions](#filewriteoptions) | options for the file write |


**Returns:** `Promise`<[EmptyResult](#emptyresult)> a promise that resolves with the file write result

* * *

* * *

## Interfaces

<a id="copyoptions"></a>

### CopyOptions

**CopyOptions**:

<a id="copyoptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The system directory containing the existing file or directory

* * *

<a id="copyoptions.from"></a>

### from

**● from**: *`string`*

The existing file or directory

* * *

<a id="copyoptions.to"></a>

### to

**● to**: *`string`*

The destination file or directory

* * *

<a id="copyoptions.todirectory"></a>

### `<Optional>` toDirectory

**● toDirectory**: *[Directories](#directories)*

The system directory containing the destination file or directory. If not supplied will use the 'directory' parameter as the destination

* * *

* * *

<a id="emptyresult"></a>

### EmptyResult

**EmptyResult**:

* * *

<a id="filereadoptions"></a>

### FileReadOptions

**FileReadOptions**:

<a id="filereadoptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The directory to start in

* * *

<a id="filereadoptions.encoding"></a>

### `<Optional>` encoding

**● encoding**: *[Encodings](#encodings)*

The encoding to read/write the file in, if not provided, data is read as binary and returned as base64 encoded data.

Pass [Encodings.UTF8](#encodings.utf8) to read data as string

* * *

<a id="filereadoptions.path"></a>

### path

**● path**: *`string`*

The path to the file or directory with one of the [Directories](#directories)

* * *

* * *

<a id="filereadresult"></a>

### FileReadResult

**FileReadResult**:

<a id="filereadresult.data"></a>

### data

**● data**: *`string`*

The data in the file

* * *

* * *

<a id="filewriteoptions"></a>

### FileWriteOptions

**FileWriteOptions**:

<a id="filewriteoptions.data"></a>

### data

**● data**: *`string`*

The data to write

* * *

<a id="filewriteoptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The directory to start in

* * *

<a id="filewriteoptions.encoding"></a>

### `<Optional>` encoding

**● encoding**: *[Encodings](#encodings)*

The encoding to write the file in

* * *

<a id="filewriteoptions.path"></a>

### path

**● path**: *`string`*

The path to the file or directory with one of the [Directories](#directories)

* * *

* * *

<a id="geturiresult"></a>

### GetUriResult

**GetUriResult**:

<a id="geturiresult.uri"></a>

### uri

**● uri**: *`string`*

* * *

* * *

<a id="mkdiroptions"></a>

### MkdirOptions

**MkdirOptions**:

<a id="mkdiroptions.createintermediatedirectories"></a>

### createIntermediateDirectories

**● createIntermediateDirectories**: *`boolean`*

Whether to create any missing parent directories as well

* * *

<a id="mkdiroptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The directory to start in

* * *

<a id="mkdiroptions.path"></a>

### path

**● path**: *`string`*

The path to the file or directory with one of the [Directories](#directories)

* * *

* * *

<a id="pathoptions"></a>

### PathOptions

**PathOptions**:

<a id="pathoptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The directory to start in

* * *

<a id="pathoptions.path"></a>

### path

**● path**: *`string`*

The path to the file or directory with one of the [Directories](#directories)

* * *

* * *

<a id="readdirresult"></a>

### ReaddirResult

**ReaddirResult**:

<a id="readdirresult.files"></a>

### files

**● files**: *`string`[]*

the list of files in the directory

* * *

* * *

<a id="renameoptions"></a>

### RenameOptions

**RenameOptions**:

<a id="renameoptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The system directory containing the existing file or directory

* * *

<a id="renameoptions.from"></a>

### from

**● from**: *`string`*

The existing file or directory

* * *

<a id="renameoptions.to"></a>

### to

**● to**: *`string`*

The destination file or directory

* * *

<a id="renameoptions.todirectory"></a>

### `<Optional>` toDirectory

**● toDirectory**: *[Directories](#directories)*

The system directory containing the destination file or directory. If not supplied will use the 'directory' parameter as the destination

* * *

* * *

<a id="rmdiroptions"></a>

### RmdirOptions

**RmdirOptions**:

<a id="rmdiroptions.directory"></a>

### `<Optional>` directory

**● directory**: *[Directories](#directories)*

The directory to start in

* * *

<a id="rmdiroptions.path"></a>

### path

**● path**: *`string`*

The path to the file or directory with one of the [Directories](#directories)

* * *

<a id="rmdiroptions.recursive"></a>

### recursive

**● recursive**: *`boolean`*

Whether to recursively remove the contents of the directory (defaults to false)

* * *

* * *

<a id="statresult"></a>

### StatResult

**StatResult**:

<a id="statresult.ctime"></a>

### `<Optional>` ctime

**● ctime**: *`undefined` \| `number`*

The created time if available

* * *

<a id="statresult.mtime"></a>

### mtime

**● mtime**: *`number`*

The last modified time

* * *

<a id="statresult.size"></a>

### size

**● size**: *`number`*

The size of the item

* * *

<a id="statresult.type"></a>

### type

**● type**: *"file" \| "directory"*

Whether the item is a file or a directory

* * *

<a id="statresult.uri"></a>

### uri

**● uri**: *`string`*

The size of the item

* * *

* * *

## Change Log

### \[1.1.0\] (2019-09-03)

### Bug Fixes

* Free saved call after permission result 
* **android:** remove incorrect trailing newline in readFile when using encoding 
* **ios:** make readdir return only file names 
* **iOS:** Update iOS deleteFile method bug where deleteFile would actually make a directory. 
* **iOS:** use proper getUri method 

### Features

* Add recursive option for rmdir 
* add rename and copy implementations 

### \[1.0.2\] (2019-08-02)

### Bug Fixes

* **iOS:** Update iOS deleteFile method bug where deleteFile would actually make a directory.