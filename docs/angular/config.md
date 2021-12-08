---
contributors:
  - liamdebeasi
  - mhartington
---

# Config

Ionic Config provides は、アプリケーション全体でコンポーネントのプロパティをグローバルに変更する方法を提供します。アプリのmode、タブボタンのレイアウト、アニメーションなどを設定できます。

## Global Config

アプリケーションの初期のIonic Configを上書きするには、`IonicModule` に設定を指定します。 `app.module.ts` にある `IonicModule.forRoot` を指定ください。

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }),
    AppRoutingModule
  ],
  ...
})
```

上記の例では、アプリ全体でマテリアルデザインのripple effectを無効にし、同時にmodeをマテリアルデザインに統一しています。


## コンポーネントの設定

Ionic Configはリアクティブではないため、構成をグローバルに設定するのではなく、デフォルトの動作を上書きする場合は、コンポーネントのプロパティを使用することをお勧めします。

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'Go Back'
    }),
    AppRoutingModule
  ],
  ...
})
```

この設定は `ion-back-button` のデフォルトのテキストを `Go Back` に変更します。しかし、この設定を行っていると `backButtonText` を `Do Not Go Back` と変更しても、 `ion-back-button` のテキストは `Go Back` のままでレンダリングされます。ですので、 `ion-back-button` の `text` プロパティを使うことをおすすめします。

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

この例では、 `ion-back-button` を使用して、言語やロケールの変更など、それを保証する変更がある場合にテキストを動的に更新できるようにしています。 `getBackButtonText` メソッドは、正しいテキストを返す処理を行います。

## プラットフォームごとの設定Per-Platform Config

Ionic Configは、プラットフォームごとに設定することもできます。例えば、遅い可能性のあるデバイス上のブラウザでアプリを実行している場合、アニメーションを無効にすることができる。開発者は、プラットフォーム・ユーティリティーを利用してこれを実現することができます。

configは実行時に設定されるため、Platform Dependency Injectionにはアクセスできません。代わりに、プロバイダが直接使用する基本関数を使用できます。

次の例では、アプリケーションがモバイルWebブラウザで実行されている場合にのみ、Ionicアプリケーションのすべてのアニメーションを無効にしています。
`isPlatform ()` 呼び出しは、渡されたプラットフォームに基づいて `true` または `false` を返します。[Platform Documentation](./platform#platforms) で利用可能な値をご覧ください。


```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    }),
    AppRoutingModule
  ],
  ...
})
```

次の例では、プラットフォームに基づいてまったく異なる構成を設定し、一致するプラットフォームがない場合はデフォルトの構成に戻すことができます:

```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide'
    }
  }
  
  return {
    menuIcon: 'ellipsis-vertical'
  }
}
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

最後に、この例では、異なるプラットフォーム要件に基づいて構成オブジェクトを設定できます:

```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  let config = {
    animated: false
  };
  
  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous'
    }
  }
  
  return config;
}
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

## Configオプション

以下はIonicが使用する設定オプションのリストです。

| Config                   | Type               | Description                                                                                              |
|--------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| `actionSheetEnter`       | `AnimationBuilder` | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".
| `actionSheetLeave`       | `AnimationBuilder` | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".
| `alertEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".
| `alertLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".
| `animated`               | `boolean`          | If `true`, Ionic will enable all animations and transitions across the app.
| `backButtonIcon`         | `string`           | Overrides the default icon in all `<ion-back-button>` components.
| `backButtonText`         | `string`           | Overrides the default text in all `<ion-back-button>` components.
| `hardwareBackButton`     | `boolean`          | If `true`, Ionic will respond to the hardware back button in an Android device.
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.
| `loadingEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".
| `loadingLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".
| `loadingSpinner`         | `SpinnerTypes`     | Overrides the default spinner for all `ion-loading` overlays.
| `menuIcon`               | `string`           | Overrides the default icon in all `<ion-menu-button>` components.
| `menuType`               | `string`           | Overrides the default menu type for all `<ion-menu>` components.
| `modalEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".
| `modalLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".
| `mode`                   | `Mode`             | The mode determines which platform styles to use for the whole application.
| `navAnimation`           | `AnimationBuilder` | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.
| `pickerEnter`            | `AnimationBuilder` | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".
| `pickerLeave`            | `AnimationBuilder` | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".
| `popoverEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".
| `popoverLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".
| `refreshingIcon`         | `string`           | Overrides the default icon in all `<ion-refresh-content>` components.
| `refreshingSpinner`      | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-refresh-content>` components.
| `sanitizerEnabled`       | `boolean`          | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".
