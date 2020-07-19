---
title: 剪贴板
template: 企业版插件
version: 1.2.0
minor: 1.2.X
---

剪贴板插件提供方案设备剪贴板的能力，包括复制，粘贴功能。

<native-ent-install plugin-id="clipboard" variables=""></native-ent-install>

## 索引

### Classes

* [Clipboard](#clipboard)

* * *

## Classes

<a id="clipboard"></a>

### Clipboard

***使用***:

```typescript
import { Clipboard } from '@ionic-enterprise/clipboard/ngx';

constructor(private clipboard: Clipboard) { }

...

this.clipboard.copy('Hello world');

this.clipboard.paste().then(
   (resolve: string) => {
      alert(resolve);
    },
    (reject: string) => {
      alert('Error: ' + reject);
    }
  );

this.clipboard.clear();
```

<a id="clipboard.clear"></a>

### clear

▸ **clear**(): `Promise`<`any`>

清除粘贴板中文本

**Returns:** `Promise`<`any`> 文本清除后返回promise

* * *

<a id="clipboard.copy"></a>

### copy

▸ **copy**(text: *`string`*): `Promise`<`any`>

拷贝指定的文本

**参数：**

| 名称   | 类型       | 描述            |
| ---- | -------- | ------------- |
| text | `string` | 获取系统剪贴板中拷贝的文本 |


**Returns:**文本被拷贝后返回 `Promise`<`any`>

* * *

<a id="clipboard.paste"></a>

### paste

▸ **paste**(): `Promise`<`any`>

粘贴粘贴板中的文本

**Returns:** 粘贴完成后返回`Promise`<`any`>

* * *

* * *