---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Colors'
previousUrl: '/docs/theming/colors'
nextText: 'Dark Mode'
nextUrl: '/docs/theming/dark-mode'
---

# Temas

O Ionic fornece muitas variáveis globais que são usadas em todos os componentes para alterar o tema padrão de todo o aplicativo. [Cores do Aplicativo](#application-colors) são úteis para alterar a aparência da maioria dos componentes Ionic, e [Stepped Colors](#stepped-colors) são usadas como variações em alguns dos componentes Ionic.

## Cores do aplicativo

As cores do aplicativo são usadas em vários lugares em Ionic. Elas são úteis para criar facilmente, seja temas escuros ou temas que correspondem a uma marca.

É importante notar que as variáveis para "background" e "text-color" também exigem que uma variável RGB seja definida em <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">RGB</a>. Veja [O problema de cores com Transparência](./advanced#the-alpha-problem) para entender por quê a propriedade `rgb` também é necessária.

| Nome                               | Descrição                                   |
| ---------------------------------- | ------------------------------------------- |
| `--ion-background-color`           | Cor de fundo de todo o app                  |
| `--ion-background-color-rgb`       | Cor de fundo de todo o app em formato RGB   |
| `--ion-text-color`                 | Cor do texto de todo o app                  |
| `--ion-text-color-rgb`             | Cor do texto de todo o app em formato RGB   |
| `--ion-backdrop-color`             | Cor do componente Backdrop                  |
| `--ion-overlay-background-color`   | Cor de fundo das camadas de sobreposições   |
| `--ion-border-color`               | Cor da borda                                |
| `--ion-box-shadow-color`           | Cor da sombra                               |
| `--ion-tab-bar-background`         | Cor de fundo da Tab bar                     |
| `--ion-tab-bar-background-focused` | Cor de fundo da Tab bar em foco             |
| `--ion-tab-bar-border-color`       | Cor da borda da Tab bar                     |
| `--ion-tab-bar-color`              | Cor da Tab bar                              |
| `--ion-tab-bar-color-activated`    | Cor da Tab ativa                            |
| `--ion-toolbar-background`         | Fundo da barra de Toolbar                   |
| `--ion-toolbar-border-color`       | Cor da borda da Toolbar                     |
| `--ion-toolbar-color`              | Cor dos componentes Toolbar                 |
| `--ion-toolbar-color-activated`    | Cor dos componentes ativados Toolbar        |
| `--ion-toolbar-color-unchecked`    | Cor dos componentes não checados na Toolbar |
| `--ion-toolbar-color-checked`      | Cor dos componentes verificados na Toolbar  |
| `--ion-item-background`            | Cor de fundo do Item                        |
| `--ion-item-background-activated`  | Cor de fundo do Item ativado                |
| `--ion-item-border-color`          | Cor da borda do Item                        |
| `--ion-item-color`                 | Cor dos componentes do Item                 |
| `--ion-placeholder-color`          | Cor do placeholder do Item                  |


## Stepped Colors

After exploring different ways to customize the Ionic theme, we found that we couldn't use just one background or text color. In order to imply importance and depth throughout the design, we need to use different shades of the background and text colors. To accommodate this pattern, we created stepped colors.

While updating the background (`--ion-background-color`) and text (`--ion-text-color`) variables will change the look of the app for most components, there are certain Ionic components where it may look off, or broken. This will be more apparent when applying a darker theme.

In some components we use a shade darker than the background or lighter than the text. For example, an item heading text may need to be <code-color mode="md" value="#404040"></code-color>, which is a few shades lighter than our default text color. Meanwhile, the loading component background is a shade darker than white, using <code-color mode="md" value="#f2f2f2"></code-color>. We use stepped colors in order to define these slight variations. It is important to update the stepped colors when updating the background or text color of an application.</p>

<p>By default, the Ionic stepped colors start at the default background color value <code-color mode="md" value="#ffffff"></code-color> and mix with the text color value <code-color mode="md" value="#000000"></code-color> using an increasing percentage. The full list of stepped colors is shown in the generator below.</p>

<h2>Stepped Color Generator</h2>

<p>Create a custom background and text color theme for your app. Update the background or text color’s hex values below, then copy and paste the generated code directly into your Ionic project.</p>

<p><stepped-color-generator mode="md" no-prerender></stepped-color-generator></p>