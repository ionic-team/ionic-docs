---
previousText: 'Navegação/Rota'
previousUrl: '/docs/angular/navegação'
nextText: 'Plataforma'
nextUrl: '/docs/angular/plataforma'
contributors:
  - liamdebeasi
  - mhartington
---

# Configuração

A Configuração do Ionic fornece uma maneira de alterar as propriedades dos componentes globalmente através de um aplicativo. Isto pode definir o modo de aplicativo, guia o layout do botão, animações e muito mais.

## Utilização

### Global

Para substituir a configuração inicial para o aplicativo Ionic, forneça uma configuração no `IonicModule.forRoot` no arquivo `app.module.ts`.

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

No exemplo acima, estamos desativando o efeito cascata do Design de materiais no aplicativo e forçando o modo a ser Design de materiais.


### Por componente

O Configuração do Ionic não é reativa, portanto, é recomendável usar as propriedades de um componente quando você deseja substituir seu comportamento padrão em vez de definir sua configuração globalmente.

```typescript
import { createAnimation, IonicModule } from '@ionic/angular';

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

Isto definirá o texto padrão para o `ion-back-button` para `Go Back`. No entanto, se você alterar o valor da configuração do `backButtonText` para `Não Volte`, o `ion-back-button` o texto padrão ainda será `Go Back` como o componente já foi inicializado e renderizado. Em vez disso, é recomendado usar o `text` em propriedade do `ion-back-button`.

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

Neste exemplo nós usamos nosso `ion-back-button` de tal forma que o texto pode ser atualizado dinamicamente se houver uma mudança que mereça ser feita tais como uma mudança de idioma ou de localidade. O método `getBackButtonText` seria responsável por retornar o texto correto.


## Opções de configuração

Abaixo está uma lista das opções de configuração que o Ionic usa.

| Configuração             | Tipo               | Descrição                                                                                                |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | Fornece uma animação customizada para todos os `ion-action-sheet`, substituindo o padrão "animation".    |
| `actionSheetLeave`       | `AnimationBuilder` | Fornece uma animação customizada para todos os `ion-action-sheet`, substituindo o padrão "animation".    |
| `alertEnter`             | `AnimationBuilder` | Fornece uma animação customizada para todos os `ion-action-sheet`, substituindo o padrão "animation".    |
| `alertLeave`             | `AnimationBuilder` | Fornece uma animação customizada para todos os `ion-action-sheet`, substituindo o padrão "animation".    |
| `animated`               | `boolean`          | If `true`, Ionic will enable all animations and transitions across the app.                              |
| `backButtonIcon`         | `string`           | Overrides the default icon in all `<ion-back-button>` components.                                  |
| `backButtonText`         | `string`           | Overrides the default text in all `<ion-back-button>` components.                                  |
| `hardwareBackButton`     | `boolean`          | If `true`, Ionic will respond to the hardware back button in an Android device.                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.              |
| `loadingEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".             |
| `loadingLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".             |
| `loadingSpinner`         | `SpinnerTypes`     | Overrides the default spinner for all `ion-loading` overlays.                                            |
| `menuIcon`               | `string`           | Overrides the default icon in all `<ion-menu-button>` components.                                  |
| `menuType`               | `string`           | Overrides the default menu type for all `<ion-menu>` components.                                   |
| `modalEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".               |
| `modalLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".               |
| `mode`                   | `Mode`             | The mode determines which platform styles to use for the whole application.                              |
| `navAnimation`           | `AnimationBuilder` | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application. |
| `pickerEnter`            | `AnimationBuilder` | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".              |
| `pickerLeave`            | `AnimationBuilder` | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".              |
| `popoverEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".             |
| `popoverLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".             |
| `refreshingIcon`         | `string`           | Overrides the default icon in all `<ion-refresh-content>` components.                              |
| `refreshingSpinner`      | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-refresh-content>` components.                      |
| `sanitizerEnabled`       | `boolean`          | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.      |
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.                                   |
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.                     |
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |