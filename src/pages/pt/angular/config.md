---
previousText: 'Navegação/Roteamento'
previousUrl: '/docs/angular/navegação'
nextText: 'Plataforma'
nextUrl: '/docs/angular/plataforma'
contributors:
  - liamdebeasi
  - mhartington
---

# Configuração

A Configuração do Ionic fornece uma maneira de alterar as propriedades dos componentes globalmente através de um aplicativo. Isto pode definir o modo de aplicativo, guia o layout do botão, animações e muito mais.

## Global Config

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


## Per-Component Config

O Configuração do Ionic não é reativa, portanto, é recomendável usar as propriedades de um componente quando você deseja substituir seu comportamento padrão em vez de definir sua configuração globalmente.

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

Isto definirá o texto padrão para o `ion-back-button` para `Go Back`. No entanto, se você alterar o valor da configuração do `backButtonText` para `Não Volte`, o `ion-back-button` o texto padrão ainda será `Go Back` como o componente já foi inicializado e renderizado. Em vez disso, é recomendado usar o `text` em propriedade do `ion-back-button`.

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

Neste exemplo nós usamos nosso `ion-back-button` de tal forma que o texto pode ser atualizado dinamicamente se houver uma mudança que mereça ser feita tais como uma mudança de idioma ou de localidade. O método `getBackButtonText` seria responsável por retornar o texto correto.

## Per-Platform Config

Ionic Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this.

Since the config is set at runtime, you will not have access to the Platform Dependency Injection. Instead, you can use the underlying functions that the provider uses directly.

In the following example, we are disabling all animations in our Ionic app only if the app is running in a mobile web browser. The `isPlatform()` call returns `true` or `false` based upon the platform that is passed in. See the [Platform Documentation](./platform#platforms) for a list of possible values.


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

The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:

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

Finally, this example allows you to accumulate a config object based upon different platform requirements:

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

## Config Options

Below is a list of config options that Ionic uses.

| Configuração             | Tipo               | Descrição                                                                                                                |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `actionSheetEnter`       | `AnimationBuilder` | Fornece uma animação customizada de entrada para todos os `<ion-action-sheet>`, substituindo o padrão "animation". |
| `actionSheetLeave`       | `AnimationBuilder` | Fornece uma animação customizada de saída para todos os `<ion-action-sheet>`, substituindo o padrão "animation".   |
| `alertEnter`             | `AnimationBuilder` | Fornece uma animação customizada de entrada para todos os `<ion-alert>`, substituindo o padrão "animation".        |
| `alertLeave`             | `AnimationBuilder` | Fornece uma animação customizada de saída para todos os `<ion-alert>`, substituindo o padrão "animation".          |
| `animated`               | `boolean`          | Se `true`, o Ionic habilitará todas as animações e transições no aplicativo.                                             |
| `backButtonIcon`         | `string`           | Sobrepõe o ícone padrão em todos os componentes `<ion-back-button>`.                                               |
| `backButtonText`         | `string`           | Sobrepõe o texto padrão em todos os componentes `<ion-back-button>`.                                               |
| `hardwareBackButton`     | `boolean`          | Se `true`, o Ionic responderá ao botão Voltar para o hardware em um dispositivo Android.                                 |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Substitui o tipo padrão spinner em todos os componentes `<ion-infinite-scroll-content>`.                           |
| `loadingEnter`           | `AnimationBuilder` | Fornece uma animação de entrada customizada para todos os `ion-loading`, substituindo o padrão "animation".              |
| `loadingLeave`           | `AnimationBuilder` | Fornece uma animação de saída customizada para todos os `ion-loading`, substituindo o padrão "animation".                |
| `loadingSpinner`         | `SpinnerTypes`     | Substitui o spinner padrão para todas as camadas `ion-loading`.                                                          |
| `menuIcon`               | `string`           | Sobrepõe o ícone padrão em todos os componentes `<ion-menu-button>`.                                               |
| `menuType`               | `string`           | Substitui o tipo de menu padrão em todos os componentes `<ion-menu>`.                                              |
| `modalEnter`             | `AnimationBuilder` | Fornece uma animação de entrada customizada para todos os `ion-modal`, substituindo o padrão "animation".                |
| `modalLeave`             | `AnimationBuilder` | Fornece uma animação de saída customizada para todos os `ion-modal`, substituindo o padrão "animation".                  |
| `mode`                   | `Mode`             | O Mode determina quais estilos de plataforma usar para todo o aplicativo.                                                |
| `navAnimation`           | `AnimationBuilder` | Substitui a "animação" padrão de todos os `ion-nav` e `ion-router-outlet` em todo o aplicativo.                          |
| `pickerEnter`            | `AnimationBuilder` | Fornece uma animação customizada de entrada para todos os `<ion-picker>`, substituindo o padrão "animation".       |
| `pickerLeave`            | `AnimationBuilder` | Fornece uma animação customizada de saída para todos os `<ion-picker>`, substituindo o padrão "animation".         |
| `popoverEnter`           | `AnimationBuilder` | Fornece uma animação customizada de entrada para todos os `<ion-popover>`, substituindo o padrão "animation".      |
| `popoverLeave`           | `AnimationBuilder` | Fornece uma animação customizada de saída para todos os `<ion-popover>`, substituindo o padrão "animation".        |
| `refreshingIcon`         | `string`           | Sobrepõe o ícone padrão em todos os componentes `<ion-refresh-content>`.                                           |
| `refreshingSpinner`      | `SpinnerTypes`     | Substitui o tipo padrão spinner em todos os componentes `<ion-refresh-content>`.                                   |
| `sanitizerEnabled`       | `boolean`          | Se `true`, o Ionic ativará um sanitizador básico do DOM em propriedades de componente que aceitam HTML personalizado.    |
| `spinner`                | `SpinnerTypes`     | Substitui o tipo padrão spinner em todos os componentes `<ion-spinner>`.                                           |
| `statusTap`              | `boolean`          | Se `true`, clicar ou tocar na barra de status fará com que o conteúdo role para o topo.                                  |
| `swipeBackEnabled`       | `boolean`          | Se `true`, o Ionic vai ativar o gesto &ltswipe-to-go-back&gt "deslizar para trás" em todo o aplicativo.                  |
| `tabButtonLayout`        | `TabButtonLayout`  | Substitui o "layout" padrão de todos os botões `ion-bar-bar` em todo o aplicativo.                                       |
| `toastEnter`             | `AnimationBuilder` | Fornece uma animação customizada de entrada para todos os `<ion-toast>`, substituindo o padrão "animation".        |
| `toastLeave`             | `AnimationBuilder` | Fornece uma animação customizada de saída para todos os `<ion-toast>`, substituindo o padrão "animation".          |
