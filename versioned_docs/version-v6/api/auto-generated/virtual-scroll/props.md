

### approxFooterHeight 

| | |
| --- | --- |
| **Description** | The approximate width of each footer template's cell. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units. Note that the actual rendered size of each cell comes from the app's CSS, whereas this approximation is used to help calculate initial dimensions before the item has been rendered. |
| **Attribute** | `approx-footer-height` |
| **Type** | `number` |
| **Default** | `30` |



### approxHeaderHeight 

| | |
| --- | --- |
| **Description** | The approximate height of each header template's cell. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units. Note that the actual rendered size of each cell comes from the app's CSS, whereas this approximation is used to help calculate initial dimensions before the item has been rendered. |
| **Attribute** | `approx-header-height` |
| **Type** | `number` |
| **Default** | `30` |



### approxItemHeight 

| | |
| --- | --- |
| **Description** | It is important to provide this if virtual item height will be significantly larger than the default The approximate height of each virtual item template's cell. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units. Note that the actual rendered size of each cell comes from the app's CSS, whereas this approximation is used to help calculate initial dimensions before the item has been rendered. |
| **Attribute** | `approx-item-height` |
| **Type** | `number` |
| **Default** | `45` |



### footerFn 

| | |
| --- | --- |
| **Description** | Section footers and the data used within its given template can be dynamically created by passing a function to `footerFn`. The logic within the footer function can decide if the footer template should be used, and what data to give to the footer template. The function must return `null` if a footer cell shouldn't be created. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number, items: any[]) => string ｜ null ｜ undefined) ｜ undefined` |
| **Default** | `undefined` |



### footerHeight 

| | |
| --- | --- |
| **Description** | An optional function that maps each item footer within their height. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) ｜ undefined` |
| **Default** | `undefined` |



### headerFn 

| | |
| --- | --- |
| **Description** | Section headers and the data used within its given template can be dynamically created by passing a function to `headerFn`. For example, a large list of contacts usually has dividers between each letter in the alphabet. App's can provide their own custom `headerFn` which is called with each record within the dataset. The logic within the header function can decide if the header template should be used, and what data to give to the header template. The function must return `null` if a header cell shouldn't be created. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number, items: any[]) => string ｜ null ｜ undefined) ｜ undefined` |
| **Default** | `undefined` |



### headerHeight 

| | |
| --- | --- |
| **Description** | An optional function that maps each item header within their height. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) ｜ undefined` |
| **Default** | `undefined` |



### itemHeight 

| | |
| --- | --- |
| **Description** | An optional function that maps each item within their height. When this function is provides, heavy optimizations and fast path can be taked by `ion-virtual-scroll` leading to massive performance improvements.<br /><br />This function allows to skip all DOM reads, which can be Doing so leads to massive performance |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) ｜ undefined` |
| **Default** | `undefined` |



### items 

| | |
| --- | --- |
| **Description** | The data that builds the templates within the virtual scroll. It's important to note that when this data has changed, then the entire virtual scroll is reset, which is an expensive operation and should be avoided if possible. |
| **Attribute** | `undefined` |
| **Type** | `any[] ｜ undefined` |
| **Default** | `undefined` |



### nodeRender 

| | |
| --- | --- |
| **Description** | NOTE: only Vanilla JS API. |
| **Attribute** | `undefined` |
| **Type** | `((el: HTMLElement ｜ null, cell: Cell, domIndex: number) => HTMLElement) ｜ undefined` |
| **Default** | `undefined` |



### renderFooter 

| | |
| --- | --- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the footer to be rendered. Returns a JSX virtual-dom. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) ｜ undefined` |
| **Default** | `undefined` |



### renderHeader 

| | |
| --- | --- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the header to be rendered. Returns a JSX virtual-dom. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) ｜ undefined` |
| **Default** | `undefined` |



### renderItem 

| | |
| --- | --- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the items to be rendered. Returns a JSX virtual-dom. |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) ｜ undefined` |
| **Default** | `undefined` |

