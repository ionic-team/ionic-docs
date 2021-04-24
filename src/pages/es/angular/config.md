---
previousText: 'Navigation/Routing'
previousUrl: '/docs/angular/navigation'
nextText: 'Plataforma'
nextUrl: '/docs/angular/platform'
contributors:
  - liamdebeasi
  - mhartington
---

# Configuración

Ionic Config proporciona una manera de cambiar las propiedades de los componentes globalmente a través de una aplicación. Puede configurar el modo de aplicación, diseño de botones de pestaña, animaciones y más.

## Configuración global

Para sobreescribir la configuración Ionic inicial de la aplicación, proporcione una configuración en `IonicModule.forRoot` en el archivo `app.module.ts`.

```typescript
importar { IonicModule } de '@ionic/angular';

@NgModule({
...
  importación: [
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

En el ejemplo anterior, estamos desactivando el efecto de riple de Material Design a través de la aplicación, así como forzando el modo a ser Material Design.


## Configuración por componente

Ionic Config no es reactivo, por lo que se recomienda usar las propiedades de un componente cuando se desea anular su comportamiento predeterminado en lugar de establecer su configuración globalmente.

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'Atrás'
    }),
    AppRoutingModule
  ],
  ...
})
```

Esto establecerá el texto predeterminado para `ion-back-button` a `Ir atrás`. Sin embargo, si cambias el valor de la configuración de `backButtonText` a `No ir atrás`, el `ion-back-button` texto predeterminado seguiría siendo `Ir Atrás` ya que el componente ya ha sido inicializado y renderizado. En su lugar, se recomienda utilizar la propiedad `text` en `ion-back-button`.

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

En este ejemplo hemos usado nuestro `ion-back-button` de tal forma que el texto se pueda actualizar dinámicamente si hubiera un cambio que lo justificara, tal como un cambio de idioma o región. El método `getBackButtonText` sería responsable de devolver el texto correcto.

## Configuración por plataforma

Ionic Config también puede establecerse sobre una base por plataforma. Por ejemplo, esto le permite desactivar animaciones si la aplicación se está ejecutando en un navegador en un dispositivo potencialmente más lento. Los desarrolladores pueden aprovechar las utilidades del plugin Platform para lograr esto.

Dado que la configuración está configurada en tiempo de ejecución, no tendrá acceso a la inyección de dependencias del plugin Platform. En su lugar, puede utilizar las funciones subyacentes que el proveedor utiliza directamente.

En el ejemplo siguiente, desactivamos todas las animaciones de nuestra aplicación Ionic sólo si la aplicación se está ejecutando en un navegador móvil. La llamada `isPlatform()` devuelve `verdadero` o `falso` basado en la plataforma que se pasa. Consulte la [Documentación del plugin Platform](./platform#platforms) para obtener una lista de los valores posibles.


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

El siguiente ejemplo le permite establecer una configuración completamente diferente basada en la plataforma, volviendo a una configuración predeterminada si no hay plataformas coincidentes:

```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Anterior',
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

Finalmente, este ejemplo permite acumular un objeto de configuración basado en diferentes requerimientos de la plataforma:

```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  let config = {
    animated: false
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Anterior'
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

## Opciones de configuración

A continuación se muestra una lista de opciones de configuración que utiliza Ionic.

| Configuración            | Tipo               | Descripción                                                                                                                                    |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | Proporciona una animación de entrada personalizada para todos los `ion-action-sheet`, sobreescribiendo el valor predeterminado de "animation". |
| `actionSheetLeave`       | `AnimationBuilder` | Proporciona una animación de salida personalizada para todos los `ion-action-sheet`, sobreescribiendo el valor predeterminado de "animation".  |
| `alertEnter`             | `AnimationBuilder` | Proporciona una animación de entrada personalizada para todos los `ion-alert`, sobreescribiendo el valor predeterminado de "animation".        |
| `alertLeave`             | `AnimationBuilder` | Proporciona una animación de salida personalizada para todos los `ion-alert`, sobreescribiendo el valor predeterminado de "animation".         |
| `animated`               | `boolean`          | Si el valor es `true`, Ionic activará todas las animaciones y transiciones a través de la aplicación.                                          |
| `backButtonIcon`         | `string`           | Sobrescribe el icono predeterminado en todos los componentes `<ion-back-button>`.                                                        |
| `backButtonText`         | `string`           | Sobrescribe el texto predeterminado en todos los componentes `<ion-back-button>`.                                                        |
| `hardwareBackButton`     | `boolean`          | Si el valor es `true`, Ionic responderá al botón de retroceso físico en un dispositivo Android.                                                |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Sobrescribe el tipo de spinner predeterminado en todos los componentes `<ion-infinite-scroll-content>`.                                  |
| `loadingEnter`           | `AnimationBuilder` | Proporciona una animación de entrada personalizada para todos los `ion-loading`, sobreescribiendo el valor predeterminado de "animation".      |
| `loadingLeave`           | `AnimationBuilder` | Proporciona una animación de salida personalizada para todos los `ion-loading`, sobreescribiendo el valor predeterminado de "animation".       |
| `loadingSpinner`         | `SpinnerTypes`     | Sobrescribe el spinner predeterminado para todas las capas de `ion-loading`.                                                                   |
| `menuIcon`               | `string`           | Sobrescribe el icono predeterminado en todos los componentes `<ion-menu-button>`.                                                        |
| `menuType`               | `string`           | Sobrescribe el tipo de menú predeterminado para todos los componentes `<ion-menu>`.                                                      |
| `modalEnter`             | `AnimationBuilder` | Proporciona una animación de entrada personalizada para todos los `ion-modal`, sobreescribiendo el valor predeterminado de "animation".        |
| `modalLeave`             | `AnimationBuilder` | Proporciona una animación de salida personalizada para todos los `ion-modal`, sobreescribiendo el valor predeterminado de "animation".         |
| `mode`                   | `Mode`             | El modo determina qué estilo de plataforma usar para toda la aplicación.                                                                       |
| `navAnimation`           | `AnimationBuilder` | Sobreescribe el valor predeterminado de "animation" de todos los `ion-nav` y `ion-router-outlet` en toda la aplicación.                        |
| `pickerEnter`            | `AnimationBuilder` | Proporciona una animación de entrada personalizada para todos los `ion-picker`, sobreescribiendo el valor predeterminado de "animation".       |
| `pickerLeave`            | `AnimationBuilder` | Proporciona una animación de salida personalizada para todos los `ion-picker`, sobreescribiendo el valor predeterminado de "animation".        |
| `popoverEnter`           | `AnimationBuilder` | Proporciona una animación de entrada personalizada para todos los `ion-popover`, sobreescribiendo el valor predeterminado de "animation".      |
| `popoverLeave`           | `AnimationBuilder` | Proporciona una animación de salida personalizada para todos los `ion-popover`, sobreescribiendo el valor predeterminado de "animation".       |
| `refreshingIcon`         | `string`           | Sobrescribe el icono predeterminado en todos los componentes `<ion-refresh-content>`.                                                    |
| `refreshingSpinner`      | `SpinnerTypes`     | Sobrescribe el tipo de spinner predeterminado en todos los componentes `<ion-refresh-content>`.                                          |
| `sanitizerEnabled`       | `boolean`          | Si el valor es `true`, Ionic habilitará un limpiador DOM básico en propiedades de componentes que aceptan HTML personalizado.                  |
| `spinner`                | `SpinnerTypes`     | Sobrescribe el tipo de spinner predeterminado en todos los componentes `<ion-spinner>`.                                                  |
| `statusTap`              | `boolean`          | Si el valor es `true`, haciendo clic o tocando la barra de estado hará que el contenido se desplace hasta la parte superior.                   |
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                                                            |
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.                                                           |
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".                                                     |
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".                                                     |
