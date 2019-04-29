# build-translate

## What is?

This script using for translate api, cli, and native document. 
This can do this.

- Create editable file for translate.
- Apply translate file at build.
- Check diff from original file.

## Why?

Some Ionic document is created by resource of JSON file.

|  Type  |  Document URL  | Resource |
| ---- | ---- | ---- |
|  API  | [Components](https://ionicframework.com/docs/components) | `@ionic/docs/core.json` |
|  CLI  |  [Command Reference](https://ionicframework.com/docs/cli)  | [cli.json](https://github.com/ionic-team/ionic-docs/blob/master/scripts/data/cli.json) |
|  Native  | [Ionic Native](https://ionicframework.com/docs/native) | [native.json](https://github.com/ionic-team/ionic-docs/blob/master/scripts/data/native.json) |

And these JSON file include Markdown language for document. 
It is very difficult to translate as it is.

## Installation
1. Move this folder to your project into scripts.
2. create folder `src/translate` and `src/translate/.detection`;

## Usage
### Create editable file

```shell
$ ts-node -P scripts/tsconfig.json scripts/build-translate create
```

Then generate editable file under `src/translate/*`. 

And `src/translate/.detection/*` is use for get diff from original. **don't use or add .gitignore**.

### Apply translate file

```shell
$ ts-node -P scripts/tsconfig.json scripts/build-translate apply
```

Then generate `script/data/translated-api.json` and `script/data/translated-cli.json` and `script/data/translated-native.json`.
This is resource file instead of original file.

#### require change file

##### scripts/build-data/api-reference.ts
```diff
-import { components } from '@ionic/docs/core.json';
+import { components } from '../data/translated-api.json';
```

##### scripts/build-menus/index.ts
```diff
-import { commands } from '../data/cli.json';
+import { commands } from '../data/translated-cli.json';
-import plugins from '../data/native.json';
+import plugins from '../data/translated-native.json';
```

##### scripts/build-pages/page-types/api.ts
```diff
-import { components } from '@ionic/docs/core.json';
+import { components } from '../../data/translated-api.json';
```

##### scripts/build-pages/page-types/cli.ts
```diff
-import { commands } from '../../data/cli.json';
+import { commands } from '../../data/translated-cli.json';
```

##### scripts/build-pages/page-types/native.ts
```diff
-import plugins from '../../data/native.json';
+import plugins from '../../data/translated-native.json';
```

##### .gitignore
```diff
+scripts/data/translated-*
```

### Get diff from original

```shell
$ ts-node -P scripts/tsconfig.json scripts/build-translate diff
```

## Sample
### Japanese Docs
[ionicframework.jp](https://ionicframework.jp)

### diff package.json

```diff
"scripts": {
  "start": "stencil build --dev --serve --watch --es5",
  "prestart": "npm run -s build-all",
  "build": "stencil build --prerender --dev --es5",
- "prebuild": "npm run -s build-all",
+ "prebuild": "npm run translate && npm run -s build-all",
  "lint": "tslint --config tslint.json --project tsconfig.json",
  "build-all": "ts-node -P scripts/tsconfig.json scripts/build-all",
  "build-data": "ts-node -P scripts/tsconfig.json scripts/build-data",
  "build-pages": "ts-node -P scripts/tsconfig.json scripts/build-pages",
  "build-menus": "ts-node -P scripts/tsconfig.json scripts/build-menus",
  "watch-pages": "ts-node -P scripts/tsconfig.json scripts/watch-pages",
+ "translate": "ts-node -P scripts/tsconfig.json scripts/build-translate apply",
+ "translate:create": "ts-node -P scripts/tsconfig.json scripts/build-translate create && ts-node -P scripts/tsconfig.json scripts/build-translate diff"
},
```
