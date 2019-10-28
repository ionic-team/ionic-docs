---
previousText: 'Creando una galería de fotos con almacenamiento de dispositivos'
previousUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
nextText: 'Lifecycle'
nextUrl: '/docs/angular/lifecycle'
---

# Personalizalo! Temática Ionic

Anteriormente, convertimos nuestra aplicación de cámara de un solo uso en una épica galería de fotos. Ahora, exploremos cómo personalizar nuestra galería de fotos con temas de Ionic. El diseño visual de la aplicación es realmente importante - afortunadamente, Ionic nos proporciona muchas funciones.

Ionic tiene nueve colores por defecto, definidos como variables CSS, que pueden ser usados para cambiar el color de sus componentes de la interfaz de usuario:

![v4-theming-defaults](/docs/assets/img/guides/first-app-v4/theming-defaults.png)

Puedes personalizar cada color más adelante proporcionando una base, contraste, sombra y propiedades de capa. Estos proporcionan un control flexible sobre tus estilos:

![v4-theming-properties](/docs/assets/img/guides/first-app-v4/theming-properties.png)

Puede encontrar estos colores definidos en `src/theme/variables.scss`.

Cambiando estas variables aquí y allá, puedes modificar fácilmente todo el tema de la aplicación! Intenta cambiar algunas de estas variables y ver la actualización de la aplicación en DevApp. Por ejemplo, cambia el color primario azul predeterminado a morado:

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

But wait, there’s more! Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-comparison.png)

In our app, this is clearly visible in how the header and the icons are styled.

If you want consistency, you can tell Ionic to use the same mode regardless of platform. For example, to apply Material Design (Android’s platform style), set it globally in the App Module class. Open `src/app/app.module.ts`, then set the `mode` property:

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

¡Ahora, la versión de iOS de nuestra aplicación tiene una skin Material Design!

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-md-styling.png)

Crear magníficas aplicaciones Ionic es fácil con variables CSS y estilo específico de la plataforma. Ahora tienes todo lo que necesitas para empezar con Iónic.

¡Ve y construye grandes aplicaciones!