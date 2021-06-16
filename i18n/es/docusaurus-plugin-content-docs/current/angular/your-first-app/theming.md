---
previousText: 'Creando una galería de fotos con almacenamiento de dispositivos'
previousUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
nextText: 'Lifecycle'
nextUrl: '/docs/angular/lifecycle'
---

# Personalizalo! Temática Ionic

Anteriormente, convertimos nuestra aplicación de cámara de único uso en una galería de fotos épica. Ahora, exploremos cómo personalizar nuestra galería de fotos con temas de Ionic. El diseño visual de la aplicación es realmente importante - afortunadamente, Ionic nos proporciona muchas funciones.

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

La forma más fácil y poderosa de crear paletas de color personalizadas para la interfaz de usuario de tu aplicación es la herramienta Ionic [Color Generator](/docs/theming/color-generator). A medida que cambia los valores hexadecimales de un color, la aplicación de demostración embebida refleja automáticamente los nuevos colores. Cuando hayas terminado de hacer cambios, simplemente copia y pega el código generado directamente en tu proyecto Ionic.

Pero espere, ¡hay más! Ionic proporciona automáticamente estilos específicos de la plataforma basados en el dispositivo en el que la aplicación se está ejecutando, dándole ese aspecto nativo y sienta que sus usuarios están acostumbrados a usar:

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-comparison.png)

En nuestra aplicación, esto es claramente visible en cómo la cabecera y los iconos están estilizados.

Si quieres consistencia, puedes decirle a Ionic que use el mismo modo independientemente de la plataforma. Por ejemplo, para aplicar Material Design (el estilo de plataforma de Android), establecerlo globalmente en la clase App Module. Abre `src/app/app.module.ts`, luego establece el modo `` propiedad:

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

Crear magníficas aplicaciones Ionic es fácil con variables CSS y estilo específico de la plataforma. Ahora tienes todo lo que necesitas para empezar con Ionic.

¡Ve y construye grandes aplicaciones!