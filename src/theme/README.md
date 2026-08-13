# Theme folder

このフォルダーは、ベースの Docusaurus テーマを上書きするために使用されます。ここには[スウィズルされたコンポーネント](https://docusaurus.io/docs/swizzling)が格納されます。将来のバージョンでの変更を可能にするため、コンポーネントは絶対に必要な場合を除きスウィズルしてはいけません。もし`@theme-original`エイリアスを使用してコンポーネントを浅くスウィズルできる場合は、十分に検討するべきです。

ラップされたコンポーネントは`@theme-original`からインポートされ、当社自身のコードであるため、リポジトリの Prettier 設定に従います。エジェクトされたコンポーネントは上流の完全なコピーであるため、それぞれが`.prettierignore`にパスで一覧されており、上流のフォーマットを維持することでコピーを`@docusaurus/theme-classic`と比較できるようにしています。コンポーネントをエジェクトする際にそのエントリーを追加してください。CI ではチェックされないため、エントリーがない場合、Prettier によってコピーが再フォーマットされ、上流との差異が誰にも気づかれずに失われます。

すべてのコード更新にはコメントを付けて、よりスムーズなバージョン更新を可能にしてください。安全でない方法でスウィズルされたコンポーネントのスタイルファイルは絶対に編集してはいけません。スタイリングはすべて[コンポーネントパーシャル](/src/styles/components)から行うべきです。

- オリジナルテーマ: [`@docusaurus/theme-classic`](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic)
- [オリジナルテーマのソース](https://github.com/facebook/docusaurus/tree/v3.10.2/packages/docusaurus-theme-classic/src/theme)
