---
previousText: 'Criando uma Galeria de Fotos com Armazenamento no Dispositivo'
previousUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
nextText: 'Ciclo de vida'
nextUrl: '/docs/angular/lifecycle'
---

# Com sua cara! Temas no Ionic

Anteriormente, nós convertemos nosso aplicativo de apenas câmera para uma épica galeria de fotos. Agora, vamos explorar como personalizar a nossa galeria de fotos com temas Ionic. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box.

O ionic tem 9 cores padrões, definidas como variáveis de CSS, que podem ser usadas para trocar a cor dos UI components:

![v4-theming-defaults](/docs/assets/img/guides/first-app-v4/theming-defaults.png)

You can customize each color further by supplying a base, contrast, shade, and tint properties. Isso proporciona um controle mais flexível para seus estilos:

![v4-theming-properties](/docs/assets/img/guides/first-app-v4/theming-properties.png)

Você pode achar essas cores definidas em `src/theme/variables.scss`.

Mudando essas variáveis aqui e lá, você pode facilmente atualizar todo o tema da sua aplicação! Tente mudando algumas delas e veja o app atualizar em DevApp. Por exemplo, mude a cor primária padrão azul para Roxo:

```css
/** Ionic CSS Variables **/
:root {
  /** primary **/
  --ion-color-primary: #b36bff;
  --ion-color-primary-rgb: 179,107,255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0,0,0;
  --ion-color-primary-shade: #9e5ee0;
  --ion-color-primary-tint: #bb7aff;
}
```

The easiest and most powerful way to create custom color palettes for your app’s UI is Ionic's [Color Generator tool](/docs/theming/color-generator). As you change a color’s hex values, the embedded demo app automatically reflects the new colors. When you've finished making changes, simply copy and paste the generated code directly into your Ionic project.

Mas espera, tem mais! Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-comparison.png)

No nosso app, é claramente visível como o header e os icons são estilizados.

If you want consistency, you can tell Ionic to use the same mode regardless of platform. For example, to apply Material Design (Android’s platform style), set it globally in the App Module class. Abra `src/app/app.module.ts`, então defina a propriedade `mode`:

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

Agora, a versão iOS do seu app tem uma aparência com Material Design!

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-md-styling.png)

Creating gorgeous-looking Ionic apps is easy with CSS variables and platform-specific styling. Você agora tem tudo que precisa para começar com Ionic.

Go forth and build great apps!