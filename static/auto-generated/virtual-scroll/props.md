

### approxFooterHeight 

| | |
| --- | --- |
| **Description** | The approximate width of each footer template's cell. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units. Note that the actual rendered size of each cell comes from the app's CSS, whereas this approximation is used to help calculate initial dimensions before the item has been rendered.<br /><br />自動翻訳: 各フッターテンプレートのセルのおおよその幅を指定します。この寸法は、初期化時に作成されるべきセルの数を決定したり、スクロール可能な領域の高さを計算したりするのに使用されます。この高さの値には `px` 単位しか使用できません。各セルの実際のレンダリングサイズはアプリのCSSから得られますが、この近似値はアイテムがレンダリングされる前に初期寸法を計算するために使用されることに注意してください。 |
| **Attribute** | `approx-footer-height` |
| **Type** | `number` |
| **Default** | `30` |



### approxHeaderHeight 

| | |
| --- | --- |
| **Description** | The approximate height of each header template's cell. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units. Note that the actual rendered size of each cell comes from the app's CSS, whereas this approximation is used to help calculate initial dimensions before the item has been rendered.<br /><br />自動翻訳: 各ヘッダーテンプレートのセルのおおよその高さを表します。この寸法は、初期化時に作成されるべきセルの数を決定したり、スクロール可能な領域の高さを計算したりするのに使用されます。この高さの値には `px` 単位しか使用できません。各セルの実際のレンダリングサイズはアプリのCSSから得られますが、この近似値はアイテムがレンダリングされる前に初期寸法を計算するために使用されることに注意してください。 |
| **Attribute** | `approx-header-height` |
| **Type** | `number` |
| **Default** | `30` |



### approxItemHeight 

| | |
| --- | --- |
| **Description** | It is important to provide this if virtual item height will be significantly larger than the default The approximate height of each virtual item template's cell. This dimension is used to help determine how many cells should be created when initialized, and to help calculate the height of the scrollable area. This height value can only use `px` units. Note that the actual rendered size of each cell comes from the app's CSS, whereas this approximation is used to help calculate initial dimensions before the item has been rendered.<br /><br />自動翻訳: 仮想アイテムの高さがデフォルトよりかなり大きくなる場合は、これを指定することが重要です。 各仮想アイテムテンプレートのセルのおおよその高さ。この寸法は、初期化時に作成されるべきセルの数を決定したり、スクロール可能な領域の高さを計算したりするのに使用されます。この高さの値には `px` 単位しか使用できません。各セルの実際のレンダリングサイズはアプリの CSS から得られるもので、この近似値はアイテムがレンダリングされる前に初期寸法を計算するのに役立つものであることに注意してください。 |
| **Attribute** | `approx-item-height` |
| **Type** | `number` |
| **Default** | `45` |



### footerFn 

| | |
| --- | --- |
| **Description** | Section footers and the data used within its given template can be dynamically created by passing a function to `footerFn`. The logic within the footer function can decide if the footer template should be used, and what data to give to the footer template. The function must return `null` if a footer cell shouldn't be created.<br /><br />自動翻訳: セクションフッターと与えられたテンプレート内で使用されるデータは、`footerFn`に関数を渡すことで動的に作成することができます。フッター関数内のロジックは、フッターテンプレートを使用するかどうか、またフッターテンプレートにどのようなデータを与えるかを決定することができます。フッターセルが作成されない場合は、関数は `null` を返さなければならない。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number, items: any[]) => string ｜ null ｜ undefined) ｜ undefined` |
| **Default** | `undefined` |



### footerHeight 

| | |
| --- | --- |
| **Description** | An optional function that maps each item footer within their height.<br /><br />自動翻訳: 各項目のフッターをその高さ内にマッピングするオプション関数。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) ｜ undefined` |
| **Default** | `undefined` |



### headerFn 

| | |
| --- | --- |
| **Description** | Section headers and the data used within its given template can be dynamically created by passing a function to `headerFn`. For example, a large list of contacts usually has dividers between each letter in the alphabet. App's can provide their own custom `headerFn` which is called with each record within the dataset. The logic within the header function can decide if the header template should be used, and what data to give to the header template. The function must return `null` if a header cell shouldn't be created.<br /><br />自動翻訳: セクションヘッダーとそのテンプレート内で使用されるデータは、`headerFn`に関数を渡すことによって動的に作成することができます。例えば、大きな連絡先リストでは、通常、アルファベットの各文字の間に仕切りがあります。アプリは独自のカスタム `headerFn` を提供することができ、データセット内の各レコードで呼び出される。ヘッダー関数内のロジックは、ヘッダーテンプレートを使用するかどうか、またヘッダーテンプレートにどのようなデータを与えるかを決定することができる。ヘッダーセルが作成されない場合は、この関数は `null` を返さなければならない。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number, items: any[]) => string ｜ null ｜ undefined) ｜ undefined` |
| **Default** | `undefined` |



### headerHeight 

| | |
| --- | --- |
| **Description** | An optional function that maps each item header within their height.<br /><br />自動翻訳: 各項目のヘッダを高さの範囲内でマッピングするオプション関数。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) ｜ undefined` |
| **Default** | `undefined` |



### itemHeight 

| | |
| --- | --- |
| **Description** | An optional function that maps each item within their height. When this function is provides, heavy optimizations and fast path can be taked by `ion-virtual-scroll` leading to massive performance improvements.<br /><br />This function allows to skip all DOM reads, which can be Doing so leads to massive performance<br /><br />自動翻訳: 各アイテムをその高さ内にマッピングするオプションの関数です。この関数が提供されると、`ion-virtual-scroll`によって重い最適化と高速パスが取られるようになり、大幅な性能向上が期待できる。  この関数は、DOMの読み込みをすべてスキップすることができ、Doingすることで大幅なパフォーマンスの向上につながります。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => number) ｜ undefined` |
| **Default** | `undefined` |



### items 

| | |
| --- | --- |
| **Description** | The data that builds the templates within the virtual scroll. It's important to note that when this data has changed, then the entire virtual scroll is reset, which is an expensive operation and should be avoided if possible.<br /><br />自動翻訳: 仮想スクロール内のテンプレートを構築するためのデータです。このデータが変更された場合、仮想スクロール全体がリセットされることになります。 |
| **Attribute** | `undefined` |
| **Type** | `any[] ｜ undefined` |
| **Default** | `undefined` |



### nodeRender 

| | |
| --- | --- |
| **Description** | NOTE: only Vanilla JS API.<br /><br />自動翻訳: 注：Vanilla JS APIのみです。 |
| **Attribute** | `undefined` |
| **Type** | `((el: HTMLElement ｜ null, cell: Cell, domIndex: number) => HTMLElement) ｜ undefined` |
| **Default** | `undefined` |



### renderFooter 

| | |
| --- | --- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the footer to be rendered. Returns a JSX virtual-dom.<br /><br />自動翻訳: 注：ステンシル用のJSX APIのみ。  フッターをレンダリングするためのrender関数を提供する。JSXのvirtual-domを返す。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) ｜ undefined` |
| **Default** | `undefined` |



### renderHeader 

| | |
| --- | --- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the header to be rendered. Returns a JSX virtual-dom.<br /><br />自動翻訳: 注：ステンシル用のJSX APIのみ。  レンダリングされるヘッダーのrender関数を提供する。JSXのvirtual-domを返す。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) ｜ undefined` |
| **Default** | `undefined` |



### renderItem 

| | |
| --- | --- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the items to be rendered. Returns a JSX virtual-dom.<br /><br />自動翻訳: 注：ステンシル用のJSX APIのみ。  レンダリングするアイテムのレンダー関数を用意する。JSXのvirtual-domを返す。 |
| **Attribute** | `undefined` |
| **Type** | `((item: any, index: number) => any) ｜ undefined` |
| **Default** | `undefined` |

