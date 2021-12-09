# 自分らしさを！Ionic テーマ

今までは、単なるカメラアプリを壮大なフォトギャラリーに発展してきました。では、Ionic のテーマ設定でフォトギャラリーを独自のものにする方法を見てみましょう。このアプリのビジュアルデザインは非常に重要で、幸運なことに、Ionic はすぐに使える多くの柔軟なテーマを提供してくれます。

Ionic には CSS 変数として定義された9つのデフォルトカラーがあり、UI コンポーネントのカラーを変更するために使用できます:

![v4-theming-defaults](/img/guides/first-app-v4/theming-defaults.png)

base、contrast、shade、tint プロパティを指定することによって、各カラーをさらにカスタマイズできます。これらにより、スタイルを柔軟にコントロールできます:

![v4-theming-properties](/img/guides/first-app-v4/theming-properties.png)

これらのカラーは `src/theme/variables.scss` 内に定義されていることがわかります。

これらの変数をあちこちで変更することで、アプリケーション全体のテーマを簡単に更新することができます！いくつかの色を変更して、DevApp でアプリの更新を見てみましょう。例えば、Primary のデフォルトの青色を紫色に変更します:

```css
/** Ionic における CSS 変数 **/
:root {
  /** primary **/
  --ion-color-primary: #b36bff;
  --ion-color-primary-rgb: 179, 107, 255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #9e5ee0;
  --ion-color-primary-tint: #bb7aff;
}
```

アプリの UI 用にカスタムカラーパレットを作る最も簡単で強力な方法は、Ionic の[カラージェネレーター](../../../theming/color-generator.md)です。色の16進数の値を変更すると、埋め込まれたデモアプリに新しい色が自動的に反映されます。変更が終わったら、生成されたコードを直接 Ionic プロジェクトにコピー&ペーストします。

しかし待ってください、まだあります！Ionic は、アプリケーションが実行されているデバイスに基づいて、プラットフォーム固有のスタイルを自動的に提供し、ユーザーが慣れているネイティブなルック・アンド・フィールを与えます:

![ios and android comparison](/img/guides/first-app-v3/ion-lab-comparison.png)

私たちのアプリでは、これはヘッダーとアイコンがどのようにスタイルされているかで、はっきりと見えます。

もし一貫性が必要な場合は、プラットフォームに関係なく同じモードを使用するように Ionic に指示できます。例えば、マテリアルデザイン(Android プラットフォームのスタイル)を適用するには、App Module クラスでグローバルに設定します。`src/app/app.module.ts` を開き、そして `mode` プロパティを設定します:

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

これで、iOS 版のアプリにマテリアルデザインのスキンが追加されました！

![ios and android comparison](/img/guides/first-app-v3/ion-lab-md-styling.png)

CSS 変数とプラットフォーム固有のスタイルを使用すれば、とても魅力的なIonic アプリケーションを簡単に作成できます。これで、Ionic を使い始めるために必要なものがすべて揃いました。

素晴らしいアプリ作りに旅立ちましょう！
