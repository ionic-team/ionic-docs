# ion-img

Img は、タグがビューポートに表示されているときに画像をLazy Loadするタグです。これは、画像が表示されているときにのみロードされるため、巨大なリストを生成する場合に非常に便利です。このコンポーネントは [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) を内部的に使用します。Intersection Observerは、最近のほとんどのブラウザでサポートされていますが、サポートされていない場合は `setTimeout` で処理されます。

