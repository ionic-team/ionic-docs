# ion-modal

Modalは、アプリのコンテンツの上に表示されるダイアログであり、インタラクションを再開する前にはアプリによって消されなければならない。選択できるオプションが多い場合や、リスト内の項目をフィルタする場合、およびその他の多くのユースケースで、Selectコンポーネントとして役立ちます。


### Creating

Modalは、[Modal Controller](../modal-controller) を使用して作成できます。Modalオプションをmodal controllerの作成メソッドに渡すことでカスタマイズできます。


### Passing parameters

Modalをつくる時は、新しくつくるModalにパラメーターを渡す必要があります:

```ts
// Create a modal using MyModalComponent with some initial data
const modal = await modalController.create({
  component: MyModalComponent,
  componentProps: {
    'prop1': value,
    'prop2': value2
  }
});
```

内部では、コントローラが新しい `ion-modal` を作成し、指定されたComponentをそれにアタッチします。
また、指定した `componentProps` をComponentのインスタンスに割り当てます:

```js
// pseudo-code
const instance = create(MyModalComponent);
instance.prop1 = value;
instance.prop2 = value2;
```

このようにして、Componentは渡されたパラメーターにアクセスすることができます。"Usage" セクションで各フレームワークの詳細なコード例を調べてください。


### Returning data

また、Modalsを終了すると、コントローラにデータを返すこともできます。

```js
const modal = await modalController.create({...});
const { data } = await modal.onDidDismiss();
console.log(data);
```

```js
// Dismiss the top modal returning some data object
modalController.dismiss({
  'result': value
})
```
