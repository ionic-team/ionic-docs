---
title: Config
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ionic Configは、アプリ全体でコンポーネントのプロパティをグローバルに変更する方法を提供します。アプリモード、タブボタンのレイアウト、アニメーションなどを設定できます。

## グローバル設定

利用可能な設定キーは、[`IonicConfig`](#ionicconfig)インターフェースで見つけることができます。

次の例では、リップル効果を無効にし、モードをMaterial Designにデフォルト設定します：

import GlobalExample from '@site/docs/developing/config/global/index.md';

<GlobalExample />

## コンポーネントごとの設定

Ionic Configはリアクティブではありません。コンポーネントがレンダリングされた後に設定の値を更新しても、以前の値のままになります。リアクティブな値が必要な場合は、設定を更新する代わりに、コンポーネントのプロパティを使用することをお勧めします。

import PerComponentExample from '@site/docs/developing/config/per-component/index.md';

<PerComponentExample />

## プラットフォームごとの設定

Ionic Configは、プラットフォームごとに設定することもできます。たとえば、これにより、潜在的に遅いデバイスのブラウザでアプリが実行されている場合にアニメーションを無効にできます。開発者は、Platformユーティリティを活用してこれを実現できます。

次の例では、モバイルWebブラウザでアプリが実行されている場合にのみ、Ionicアプリのすべてのアニメーションを無効にしています。

import PerPlatformExample from '@site/docs/developing/config/per-platform/index.md';

<PerPlatformExample />

### フォールバック

次の例では、プラットフォームに基づいて完全に異なる設定を設定でき、プラットフォームが一致しない場合はデフォルト設定にフォールバックします：

import PerPlatformFallbackExample from '@site/docs/developing/config/per-platform-overrides/index.md';

<PerPlatformFallbackExample />

### オーバーライド

この最後の例では、異なるプラットフォーム要件に基づいて設定オブジェクトを累積できます。

import PerPlatformOverridesExample from '@site/docs/developing/config/per-platform-fallback/index.md';

<PerPlatformOverridesExample />

## モードへのアクセス

場合によっては、アプリケーションロジック内で現在のIonicモードにプログラム的にアクセスする必要があるかもしれません。これは、条件付き動作を適用したり、特定のアセットを取得したり、アクティブなスタイリングモードに基づいて他のアクションを実行したりするのに役立ちます。

import IonicMode from '@site/static/usage/v8/config/mode/index.md';

<IonicMode />

## 設定の読み取り（Angular）

Ionic Angularは、Ionic Configにアクセスするための`Config`プロバイダーを提供します。

### get

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **説明** | 設定値を`any`として返します。設定が定義されていない場合は`null`を返します。 |
| **シグネチャ**   | `get(key: string, fallback?: any) => any`                                        |

#### 例

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
  ]}
>
<TabItem value="angular">

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const mode = config.get('mode');
  }
}
```

</TabItem>
<TabItem value="angular-standalone">

```ts
import { Config } from '@ionic/angular/standalone';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const mode = config.get('mode');
  }
}
```

</TabItem>
</Tabs>

### getBoolean

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **説明** | 設定値を`boolean`として返します。設定が定義されていない場合は`false`を返します。 |
| **シグネチャ**   | `getBoolean(key: string, fallback?: boolean) => boolean`                             |

#### 例

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
  ]}
>
<TabItem value="angular">

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const swipeBackEnabled = config.getBoolean('swipeBackEnabled');
  }
}
```

</TabItem>
<TabItem value="angular-standalone">

```ts
import { Config } from '@ionic/angular/standalone';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const swipeBackEnabled = config.getBoolean('swipeBackEnabled');
  }
}
```

</TabItem>
</Tabs>

### getNumber

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **説明** | 設定値を`number`として返します。設定が定義されていない場合は`0`を返します。 |
| **シグネチャ**   | `getNumber(key: string, fallback?: number) => number`                           |

## インターフェース

### IonicConfig

以下は、Ionicが使用する設定オプションです。

| Config                      | Type                                                                              | 説明                                                                                                                                                                                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`          | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".                                                                                                                                                                                      |
| `actionSheetLeave`          | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".                                                                                                                                                                                      |
| `alertEnter`                | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".                                                                                                                                                                                             |
| `alertLeave`                | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".                                                                                                                                                                                             |
| `animated`                  | `boolean`                                                                         | If `true`, Ionic will enable all animations and transitions across the app.                                                                                                                                                                                                            |
| `backButtonDefaultHref`     | `string`                                                                          | Overrides the default value for the `defaultHref` property in all `<ion-back-button>` components.                                                                                                                                                                                      |
| `backButtonIcon`            | `string`                                                                          | Overrides the default icon in all `<ion-back-button>` components.                                                                                                                                                                                                                      |
| `backButtonText`            | `string`                                                                          | Overrides the default text in all `<ion-back-button>` components.                                                                                                                                                                                                                      |
| `innerHTMLTemplatesEnabled` | `boolean`                                                                         | Relevant Components: `ion-alert`, `ion-infinite-scroll-content`, `ion-loading`, `ion-refresher-content`, `ion-toast`. If `true`, content passed to the relevant components will be parsed as HTML instead of plaintext. Defaults to `false`.                                           |
| `hardwareBackButton`        | `boolean`                                                                         | If `true`, Ionic will respond to the hardware back button in an Android device.                                                                                                                                                                                                        |
| `infiniteLoadingSpinner`    | `SpinnerTypes`                                                                    | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.                                                                                                                                                                                                  |
| `loadingEnter`              | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".                                                                                                                                                                                           |
| `loadingLeave`              | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".                                                                                                                                                                                           |
| `loadingSpinner`            | `SpinnerTypes`                                                                    | Overrides the default spinner for all `ion-loading` overlays.                                                                                                                                                                                                                          |
| `logLevel`                  | `'OFF' \| 'ERROR' \| 'WARN'`                                                      | Configures the logging level for Ionic Framework. If `'OFF'`, no errors or warnings are logged. If `'ERROR'`, only errors are logged. If `'WARN'`, errors and warnings are logged.                                                                                                     |
| `menuIcon`                  | `string`                                                                          | Overrides the default icon in all `<ion-menu-button>` components.                                                                                                                                                                                                                      |
| `menuType`                  | `string`                                                                          | Overrides the default menu type for all `<ion-menu>` components.                                                                                                                                                                                                                       |
| `modalEnter`                | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".                                                                                                                                                                                             |
| `modalLeave`                | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".                                                                                                                                                                                             |
| `mode`                      | `Mode`                                                                            | The mode determines which platform styles to use for the whole application.                                                                                                                                                                                                            |
| `navAnimation`              | `AnimationBuilder`                                                                | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.                                                                                                                                                                               |
| `pickerEnter`               | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".                                                                                                                                                                                            |
| `pickerLeave`               | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".                                                                                                                                                                                            |
| `platform`                  | [`PlatformConfig`](/docs/angular/platform#customizing-platform-detection-methods) | Overrides the default platform detection methods.                                                                                                                                                                                                                                      |
| `popoverEnter`              | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".                                                                                                                                                                                           |
| `popoverLeave`              | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".                                                                                                                                                                                           |
| `refreshingIcon`            | `string`                                                                          | Overrides the default icon in all `<ion-refresh-content>` components.                                                                                                                                                                                                                  |
| `refreshingSpinner`         | `SpinnerTypes`                                                                    | Overrides the default spinner type in all `<ion-refresh-content>` components.                                                                                                                                                                                                          |
| `rippleEffect`              | `boolean`                                                                         | If `true`, Material Design ripple effects will be enabled across the app.                                                                                                                                                                                                              |
| `sanitizerEnabled`          | `boolean`                                                                         | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.                                                                                                                                                                                    |
| `spinner`                   | `SpinnerTypes`                                                                    | Overrides the default spinner in all `<ion-spinner>` components.                                                                                                                                                                                                                       |
| `statusTap`                 | `boolean`                                                                         | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.                                                                                                                                                                                             |
| `swipeBackEnabled`          | `boolean`                                                                         | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                                                                                                                                                                                                    |
| `tabButtonLayout`           | `TabButtonLayout`                                                                 | Overrides the default "layout" of all `ion-bar-button` across the whole application.                                                                                                                                                                                                   |
| `toastDuration`             | `number`                                                                          | Overrides the default `duration` for all `ion-toast` components.                                                                                                                                                                                                                       |
| `toastEnter`                | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".                                                                                                                                                                                             |
| `toastLeave`                | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".                                                                                                                                                                                             |
| `toggleOnOffLabels`         | `boolean`                                                                         | Overrides the default `enableOnOffLabels` in all `ion-toggle` components.                                                                                                                                                                                                              |
| `experimentalCloseWatcher`  | `boolean`                                                                         | **Experimental:** If `true`, the [CloseWatcher API](https://github.com/WICG/close-watcher) will be used to handle all Escape key and hardware back button presses to dismiss menus and overlays and to navigate. Note that the `hardwareBackButton` config option must also be `true`. |
| `focusManagerPriority`      | [`FocusManagerPriority[]`](./managing-focus#types)                                | **Experimental:** When defined, Ionic will move focus to the appropriate element after each page transition. This ensures that users relying on assistive technology are informed when a page transition happens. Disabled by default.                                                 |
