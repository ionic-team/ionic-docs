---
previousText: 'Tu primera aplicación: Tema'
previousUrl: '/docs/angular/your-first-app/theming'
nextText: 'Navegación'
nextUrl: '/docs/angular/navigation'
contributors:
  - elylucas
---

# Ciclo de Vida de una Ionic Page

Esta guía cubre cómo funciona el ciclo de vida de un component de tipo Page en una aplicación construida con Ionic y Angular.

![Demo sobre los distintos eventos de ciclo de vida de Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.png)

## Eventos Life Cycle de Angular

Ionic adopta los mismo eventos de ciclo de vida proveídos por Angular. Los dos eventos de Angular mas utilizados que encontrarás son los siguientes:

| Nombre del Evento | Descripción                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`        | Se dispara cuando un componente es inicializado. Este evento puede ser utilizado para inicializar propiedades privadas y realizar llamadas a servicios que solo deban ejecutarse una sola vez.                        |
| `ngOnDestroy`     | Se dispara justo antes de que Angular destruya el component View en cuestión. Útil para realizar una limpieza una vez que el component te ha destruido, tal como la desuscripción a diferentes eventos u observables. |


For more info on the Angular Component Life Cycle events, visit their [component lifecycle docs](https://angular.io/guide/lifecycle-hooks).

## Ionic Page Events

Además de los eventos del ciclo de vida de Angular, Ionic Angular proporciona algunos eventos adicionales que puedes usar:

| Nombre del Evento  | Descripción                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `ionViewWillEnter` | Se dispara cuando el component Routing esta a punto de animar la nueva View.                                         |
| `ionViewDidEnter`  | Se dispara cuando el component Routing ha terminado de animar la nueva View.                                         |
| `ionViewWillLeave` | Se dispara cuando el component Routing esta a punto de animar para abandonar la View en cuestión.                    |
| `ionViewDidLeave`  | Se dispara cuando el component Routing ha terminado de realizar la animación luego de abandonar la View en cuestión. |


La diferencia entre `ionViewWillEnter` y `ionViewDidEnter` es cuando son ejecutadas. El primero se ejecuta justo después de `ngOnInit` pero antes que la transición de la pagina empiece, y el ultimo justo antes de que la animación termine.

Para `ionViewWillLeave` y `ionViewDidLeave`, `ionViewWillLeave` es llamada directamente antes de que comience la transición fuera de la página actual, y `ionViewDidLeave` no se llama hasta después de que haga la transición con éxito hacia una nueva página (después de las nuevas páginas el método `ionViewDidEnter` es ejecutado).

![Demo de eventos de ciclo de vida de Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.gif)

## Cómo Ionic maneja el ciclo de vida de un component Page

Ionic tiene su propios router outlet, llamado `<ion-router-outlet />`. El outlet extiende el funcionamiento del `<router-outlet />` de Angular, con algunas funcionales extras con el fin de proveer una mejor experiencia para dispositivos móviles.

Cuando la aplicación es encapsulada en un `<ion-router-outlet />`, Ionic maneja la navegación de una manera un poco diferente. Cuando navegues a una nueva página, Ionic mantendrá la página antigua en el DOM, pero la ocultará de tu vista y procederá a ejecutar la transición de la nueva página. La razón por la cual hacemos esto tiene dos motivos:

1) Podemos mantener el estado de la página anterior (datos en la pantalla, posición del scroll, etc.)  
2) Podemos proporcionar una transición más suave de vuelta a la página ya que ya está ahí y no necesita ser recreada.

Las páginas sólo se eliminan del DOM cuando se hace "pop" en la navegación, por ejemplo, pulsando el botón volver en la interfaz de usuario o el botón volver de los navegadores.

Debido a este manejo especial, los métodos `ngOnInit` y `ngOnDestroy` podrían no dispararse cuando normalmente crees que deberían.

. `ngOnInit` sólo se disparará cada vez que la página se haya creado desde cero, pero no cuando se navegue de nuevo a la página. Por ejemplo, navegar entre distintas páginas en una interfaz de pestañas sólo llamará al método de cada página `ngOnInit` una vez, pero no en las visitas posteriores. `ngOnDestroy` sólo se disparará cuando una página es removida de la navegación mediante un "pop".

## Route Guards

En Ionic 3, había algunos métodos de ciclo de vida adicionales que fueron útiles para controlar cuando una página podía ser ingresada (`ionViewCanEnter`) y abandonada (`ionViewCanLeave`). Estos podrían utilizarse para proteger las páginas de los usuarios no autorizados y para mantener a un usuario en una página cuando no quiera que salgan (como durante cargado de un formulario).

Estos métodos fueron eliminados en Ionic 4 a favor de usar los Route Guards de Angular.

Un Route Guard ayuda a determinar si se puede tomar una acción en particular hacia una ruta. Son clases que implementan una cierta interfaz. El ` CanActivate ` y `CanDeactivate` interfaces pueden ser utilizadas para implementar el mismo tipo de lógica que los eventos eliminados `ionViewCanEnter` y `ionViewCanLeave` hacían.

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

## Guía sobra cada método de ciclo de vida

A continuación se pueden ver algunos consejos sobre los casos de uso para cada uno de los eventos del ciclo de vida.

- `ngOnInit` - Inicializa el componente y carga los datos desde servicios que no necesitan ser actualizados en cada visita posterior al componente.
- `ionViewWillEnter` - Desde `ionViewWillEnter` se llama cada vez que se navega hacia la View (independientemente de que haya sido inicializada o no), es un buen método cargar datos de los servicios. Sin embargo, si tus datos son cargados durante la animación, puede generar distintas manipulaciones en el DOM, lo que puede causar algunas animaciones se vean lentas o trabadas.
- `ionViewDidEnter` - Si ves problemas de performance usando `ionViewWillEnter` al cargar datos, puedes hacer tus llamadas de datos en `ionViewDidEnter` en su lugar. Este evento no se disparará hasta que la página sea visible por el usuario, sin embargo, es posible que quieras usar un indicador de loading o componente de tipo skeleton, para que el contenido no sea visible por un instante de forma no natural después de que la transición esté completa.
- `ionViewWillLeave` - Se puede utilizar para limpiar el contenido del component, como así también para desusbscribirse a distintos eventos y/o observables. Puesto que `ngOnDestroy` podría no dispararse cuando navegues desde la página actual, es posible realizar un cleanup aquí si es que no quieres que esté activo mientras la pantalla no está en vista.
- `ionViewDidLeave` - Cuando este evento se ejecute, debes saber que la nueva página ha realizado su transición completamente, por lo que cualquier lógica que no pueda hacer normalmente cuando la vista sea visible puede ir en este lugar.
- `ngOnDestroy` - La lógica de clean up de tus páginas, de las cuales no deseas hacer un clean up `ionViewWillLeave`.