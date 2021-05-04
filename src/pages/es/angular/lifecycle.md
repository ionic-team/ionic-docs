---
previousText: 'Tu primera Aplicación'
previousUrl: '/documentación/angular/tu-primera-aplicación'
nextText: 'Navegación'
nextUrl: '/docs/angular/navigation'
contributors:
  - elylucas
---

# Ciclo de Vida de una Página en Ionic

Esta guía cubre cómo funciona el ciclo de vida de un component de tipo página en una aplicación construida con Ionic y Angular.

![Demostración sobre los distintos eventos de ciclo de vida en Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.png)

## Eventos del ciclo de vida de Angular

Ionic adopta los mísmos eventos de ciclo de vida proveídos por Angular. Los dos eventos mas utilizados de Angular, que encontraras son:

| Nombre del Evento | Descripción                                                                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnlnit`        | Se ejecuta cuando un componente es iniciado. Este evento se puede usar para iniciar miembros locales y hacer llamadas a servicios que solo deben hacerse una vez. |
| `ngOnDestroy`     | Se ejecuta justo antes de que Angular destruya la vista. Es útil para la limpieza, como darse de baja de los observables.                                         |


Para más información sobre los eventos de cliclo de vida en angular, visita esto [documentación de ciclos de vida](https://angular.io/guide/lifecycle-hooks).

> Los componentes que usan `ion-nav` o `ion-router-outlet` no deben usar la estrategia de detección de cambios `OnPush`. Hacerlo evitará que los hooks de ciclo de vida como `ngOnInit` se disparen. Además, es posible que los cambios de estado asíncronos no se realicen correctamente.

## Eventos de Página en Ionic

Además de los eventos del ciclo de vida de Angular, Ionic Angular proporciona algunos eventos adicionales que puedes usar:

| Nombre del Evento  | Descripción                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `ionViewWillEnter` | Se ejecuta cuando el componente de enrutamiento está a punto de animar la vista.                                                |
| `ionViewDidEnter`  | Se ejecuta cuando el componente enrutamiento ha terminado la animación de la nueva vista.                                       |
| `ionViewWillLeave` | Se ejecuta cuando el componente de enrutamiento esta a punto de animar para abandonar la vista en cuestión.                     |
| `ionViewDidLeave`  | Se ejecuta cuando el componente de enrutamiento ha terminado de realizar la animación, luego de abandonar la vista en cuestión. |


La diferencia entre `ionViewWillEnter` y `ionViewDidEnter` es cuando son ejecutadas. El primero se ejecuta justo después de `ngOnInit` pero antes de que la transición de la pagina inicie, y este último directamente después de que termina la transición.

Por `ionViewWillLeave` y `ionViewDidLeave`, `ionViewWillLeave` es llamado directamente antes de que comience la transición desde la página actual, y `ionViewDidLeave` no se vuelve a llamar hasta después de que la nueva página se dirija correctamente (después de las nuevas páginas`ionViewDidEnter` se ejecuten).

![Demostración de eventos de ciclo de vida en Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.gif)

## Cómo Ionic maneja la vida de una página

Ionic tiene su enrutador de salida, llamado `<ion-router-outlet />`. Esta salida extiende la pagina de Angular`<router-outlet />`con alguna funcionalidad adicional para habilitar mejores experiencias para dispositivos móviles.

Cuando una aplicación está encapsulada en `<ion-router-outlet />`, Ionic navega de de una manera diferente. Cuando navegas a una pagina nueva, Ionic mantendrá la pagina existente en el DOM, pero la ocultara de tu vista y procederá a ejecutar la transición de la nueva pagina. La razón por la que hacemos esto es por que existen dos motivos:

1) Podemos mantener el estado de la página anterior (datos en la pantalla, posición de desplazamiento, etc.)   
2) Podemos proporcionar una transición más suave a la página ya que ya está allí y no necesita ser recreada.

Las paginas son eliminadas del DOM solo si si se hace "pop" en la navegación, por ejemplo pulsando el botón volver en la interfaz de usuario o el boto de volver de el navegador.

Debido a este manejo especial, los métodos `ngOnInit` y `ngOnDestroy` podrían no ejecutarse cuando normalmente crees que deberían.

`ngOnInit` sólo se disparará cada vez que la página se haya creado desde cero, pero no cuando se navegue de nuevo a la página. Por ejemplo, navegar entre distintas páginas en una interfaz de pestañas sólo llamará al método de cada página `ngOnInit` una vez, pero no en las visitas posteriores. `ngOnDestroy` sólo se disparará cuando una página es removida de la navegación mediante un "pop".

## Route Guards

En Ionic 3, había algunos métodos de ciclo de vida adicionales que fueron útiles para controlar cuando una página podía ser accedida (`ionViewCanEnter`) y abandonada (`ionViewCanLeave`). Estos podrían utilizarse para proteger las páginas de los usuarios no autorizados y para mantener a un usuario en una página cuando usted no quiera que se vayan (como durante un llenado de formulario).

Estos métodos fueron eliminados en Ionic 4 a favor de usar los Route Guards de Angular.

Un Route Guard ayuda a determinar si se puede tomar una acción particular hacia una ruta. Son clases que implementan una cierta interfaz. El ` CanActivate ` y `CanDeactivate` interfaces pueden ser utilizadas para implementar el mismo tipo de lógica que los eventos eliminados `ionViewCanEnter` y `ionViewCanLeave` hacían.

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

Para usar este guard, debemos agregarlo al parámetro apropiado en la definición de ruta:

```typescript
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

Para más información acerca de cómo utilizar los route guards, puedes visitar la documentación oficial de Angular [Documentation del Router de Angular](https://angular.io/guide/router).

## Guía sobre cada método de ciclo de vida

A continuación se pueden ver algunos consejos sobre los casos de uso para cada uno de los eventos del ciclo de vida.

- `ngOnInit` - Inicializar el componente y carga los datos desde servicios que no necesitan ser actualizados en cada visita posterior al componente.
- `ionViewWillEnter` - Desde `ionViewWillEnter` se llama cada vez que se navega hacia la View (independientemente de que haya sido inicializada o no), es un buen método cargar datos de los servicios. Sin embargo, si tus datos son cargados durante la animación, puede generar distintas manipulaciones en el DOM, lo que puede causar algunas animaciones se vean lentas o trabadas.
- `ionViewDidEnter` - Si ves problemas de performance usando `ionViewWillEnter` al cargar datos, puedes hacer tus llamadas de datos en `ionViewDidEnter` en su lugar. Este evento no se disparará hasta que la página sea visible por el usuario, sin embargo, es posible que quieras usar un indicador de loading o componente de tipo skeleton, para que el contenido no sea visible por un instante de forma no natural después de que la transición esté completa.
- `ionViewWillLeave` - Se puede utilizar para limpiar el contenido del componente, como así también para desusbscribirse a distintos eventos y/o observables. Puesto que `ngOnDestroy` podría no dispararse cuando navegues desde la página actual, es posible realizar un cleanup aquí si es que no quieres que esté activo mientras la pantalla no está en vista.
- `ionViewDidLeave` - Cuando este evento se ejecute, debes saber que la nueva página ha realizado su transición completamente, por lo que cualquier lógica que no pueda hacer normalmente cuando la vista sea visible puede ir en este lugar.
- `ngOnDestroy` - La lógica de clean up de tus páginas, de las cuales no deseas hacer un clean up `ionViewWillLeave`.