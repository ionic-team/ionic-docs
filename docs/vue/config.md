# Config

Ionic Configは、アプリケーション全体にわたってコンポーネントのプロパティをグローバルに変更する方法を提供します。Ionic Configは、アプリのモード、タブボタンのレイアウト、アニメーションなどを設定できます。

## グローバル設定

アプリケーションの初期のIonic Configを上書きするには、IonicVueプラグインのインストール時に追加パラメータとしてConfigオブジェクトを指定します。

```tsx
createApp(App).use(IonicVue, {
  rippleEffect: false,
  mode: 'md',
});
```

上の例では、Material Designのリップル効果を無効にし、モードをMaterial Designにしています。

## プラットフォームごとの構成

Ionic Configは、プラットフォームごとに設定することもできます。例えば、遅い可能性のあるデバイス上のブラウザでアプリを実行している場合、アニメーションを無効にすることができます。開発者は、プラットフォーム・ユーティリティーを利用してこれを実現することができます。

次の例では、アプリケーションがモバイルWebブラウザで実行されている場合にのみ、Ionicアプリケーションのすべてのアニメーションを無効にしています。
`isPlatform ()` 呼び出しは、渡されたプラットフォームに基づいて `true` または `false` を返します。 [Platform Documentation](platform.md#platforms) を指定します。

```tsx
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App).use(IonicVue, {
  animated: !isPlatform('mobileweb'),
});
```

次の例では、プラットフォームに基づいてまったく異なる構成を設定し、一致するプラットフォームがない場合はデフォルトの構成に戻すことができます:

```tsx
import { IonicVue, isPlatform } from '@ionic/vue';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide',
    };
  }

  return {
    menuIcon: 'ellipsis-vertical',
  };
};

createApp(App).use(IonicVue, getConfig());
```

最後に、この例では、異なるプラットフォーム要件に基づいて構成オブジェクトを蓄積できます:

```tsx
import { IonicVue, isPlatform } from '@ionic/vue';

const getConfig = () => {
  let config = {
    animated: false,
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous',
    };
  }

  return config;
};

createApp(App).use(IonicVue, getConfig());
```

## Interfaces

### Configオプション

以下はIonicで使用できる設定オプションのリストです。

| Config                   | Type                                                                          | Description                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".        |
| `actionSheetLeave`       | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".        |
| `alertEnter`             | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".               |
| `alertLeave`             | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".               |
| `animated`               | `boolean`                                                                     | If `true`, Ionic will enable all animations and transitions across the app.                              |
| `backButtonDefaultHref`  | `string`                                                                      | Overrides the default value for the `defaultHref` property in all `<ion-back-button>` components.        |
| `backButtonIcon`         | `string`                                                                      | Overrides the default icon in all `<ion-back-button>` components.                                        |
| `backButtonText`         | `string`                                                                      | Overrides the default text in all `<ion-back-button>` components.                                        |
| `hardwareBackButton`     | `boolean`                                                                     | If `true`, Ionic will respond to the hardware back button in an Android device.                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`                                                                | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.                    |
| `loadingEnter`           | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".             |
| `loadingLeave`           | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".             |
| `loadingSpinner`         | `SpinnerTypes`                                                                | Overrides the default spinner for all `ion-loading` overlays.                                            |
| `menuIcon`               | `string`                                                                      | Overrides the default icon in all `<ion-menu-button>` components.                                        |
| `menuType`               | `string`                                                                      | Overrides the default menu type for all `<ion-menu>` components.                                         |
| `modalEnter`             | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".               |
| `modalLeave`             | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".               |
| `mode`                   | `Mode`                                                                        | The mode determines which platform styles to use for the whole application.                              |
| `navAnimation`           | `AnimationBuilder`                                                            | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application. |
| `pickerEnter`            | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".              |
| `pickerLeave`            | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".              |
| `platform`               | [`PlatformConfig`](/docs/vue/platform#customizing-platform-detection-methods) | Overrides the default platform detection methods.                                                        |
| `popoverEnter`           | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".             |
| `popoverLeave`           | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".             |
| `refreshingIcon`         | `string`                                                                      | Overrides the default icon in all `<ion-refresh-content>` components.                                    |
| `refreshingSpinner`      | `SpinnerTypes`                                                                | Overrides the default spinner type in all `<ion-refresh-content>` components.                            |
| `sanitizerEnabled`       | `boolean`                                                                     | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.      |
| `spinner`                | `SpinnerTypes`                                                                | Overrides the default spinner in all `<ion-spinner>` components.                                         |
| `statusTap`              | `boolean`                                                                     | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`                                                                     | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`                                                             | Overrides the default "layout" of all `ion-bar-button` across the whole application.                     |
| `toastDuration`          | `number`                                                                      | Overrides the default `duration` for all `ion-toast` components.                                         |
| `toastEnter`             | `AnimationBuilder`                                                            | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder`                                                            | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |
| `toggleOnOffLabels`      | `boolean`                                                                     | Overrides the default `enableOnOffLabels` in all `ion-toggle` components.                                |
