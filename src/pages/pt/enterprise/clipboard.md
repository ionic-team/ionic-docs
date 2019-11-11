---
title: Clipboard
template: enterprise-plugin
version: 1.2.0
minor: 1.2.X
---

The Clipboard plugin provides access to the device clipboard, including copy and paste functionality.

<native-ent-install plugin-id="clipboard" variables=""></native-ent-install>

## Index

### Classes

* [Clipboard](#clipboard)

* * *

## Classes

<a id="clipboard"></a>

### Clipboard

***usage***:

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

Clear the text stored in clipboard

**Returns:** `Promise`<`any`> Returns a promise after the text has been cleaned

* * *

<a id="clipboard.copy"></a>

### copy

▸ **copy**(text: *`string`*): `Promise`<`any`>

Copies the given text

**Parameters:**

| Name | Type     | Description                                   |
| ---- | -------- | --------------------------------------------- |
| text | `string` | Text that gets copied on the system clipboard |


**Returns:** `Promise`<`any`> Returns a promise after the text has been copied

* * *

<a id="clipboard.paste"></a>

### paste

▸ **paste**(): `Promise`<`any`>

Pastes the text stored in clipboard

**Returns:** `Promise`<`any`> Returns a promise after the text has been pasted

* * *

* * *