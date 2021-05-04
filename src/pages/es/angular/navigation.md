---
previousText: 'Ciclo de vida'
previousUrl: '/docs/angular/lifecycle'
nextText: 'Configuración'
nextUrl: '/docs/angular/config'
contributors:
  - mhartington
---

# Navegación en Angular

Esta guía cubre cómo funciona el enrutamiento en una aplicación construida con Ionic y Angular.

El enrutador de Angular (Angular Router) es una de las librerías más importantes de una aplicación Angular. Sin ella, las aplicaciones serían aplicaciones de vista única / contexto único o no podrían mantener su estado de navegación en las recargas del navegador. Con Angular Router, podemos crear aplicaciones ricas que son enlazables y tienen animaciones ricas (cuando se emparejan con Ionic por supuesto). Echemos un vistazo a los conceptos básicos de Angular Router y cómo podemos configurarlo para aplicaciones de Ionic.

## Una ruta simple

Para la mayoría de las aplicaciones, a menudo se requiere tener algún tipo de ruta. La configuración más básica parece un poco así:

```typescript
<br />import { RouterModule } from '@angular/router';

@NgModule({
  importaciones: [
...
  RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
})
```

El desglose más simple de lo que tenemos aquí es una búsqueda de ruta/componente. Cuando nuestra aplicación se carga, el router lanza las cosas leyendo la URL que el usuario está intentando cargar. En nuestra muestra, nuestra ruta busca `''`, que es esencialmente nuestra ruta de índice. Así que para esto, cargamos el `LoginComponent`. Justo hacia delante. Este patrón de rutas coincidentes con un componente continúa por cada entrada que tenemos en la configuración del router. Pero ¿qué pasa si queríamos cargar un camino diferente en nuestra carga inicial?

## Manejo de redirecciones

Para esto podemos usar redirecciones de router. Redirecciones funcionan de la misma manera que un objeto de ruta típico, pero sólo incluye algunas teclas diferentes.

```typescript
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent }
];
```

En nuestra redirección, buscamos la ruta de índice de nuestra aplicación. Entonces si cargamos eso, redirigiremos a la ruta `login`. Se necesita la última clave de `pathMatch` para decirle al router cómo debería buscar la ruta.

Puesto que utilizamos `full`, le decimos al router que deberíamos comparar la ruta completa, incluso si termina siendo algo como `/route1/route2/route3`. Significando que si tenemos:

```typescript
{ ruta: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

Y cargar `/route1/route2/route3` redirigiremos. Pero si hemos cargado `/route1/route2/route4`, no redireccionaremos, ya que las rutas no coinciden completamente.

Alternativamente, si utilizamos:

```typescript
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

Luego cargar `/route1/route2/route3` y `/route1/route2/route4`, seremos redirigidos por ambas rutas. Esto es porque `pathMatch: 'prefix'` sólo coincidirá con una parte de la ruta.

## Navegando a diferentes rutas

Hablar de rutas es bueno y todo, pero ¿cómo se navega hasta esas rutas? Para esto, podemos usar la directiva `routerLink`. Volvamos atrás y tomemos nuestra sencilla configuración del router desde antes:

```ts
RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
]);
```

Ahora desde el `LoginComponent`, podemos utilizar el siguiente HTML para navegar a la ruta detallada.

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inicio de Sesión</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button [routerLink]="['/detail']">Ir a detalles</ion-button>
</ion-content>
```

La parte importante aquí es la directiva `ion-button` y `routerLink`. RouterLink funciona con una idea similar a la típica `href`s, pero en lugar de construir la URL como una cadena, se puede construir como una matriz, que puede proporcionar rutas más complicadas.

También podemos navegar programáticamente en nuestra aplicación usando la API del router.

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  ...
})
export class LoginComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(['/detail'])
  }
}
```

Ambas opciones proporcionan el mismo mecanismo de navegación, sólo ajustando diferentes casos de uso.

> Una nota en la navegación con URLs relativas: Actualmente, para soportar múltiples pilas de navegación, las URLs relativas son algo no soportado

## Rutas de carga lentas

Ahora la forma actual de configurar nuestras rutas lo hace así que se incluyen en el mismo chunk que la aplicación raíz.module, que no es ideal. En cambio, el router tiene una configuración que permite que los componentes se aislan a sus propias chunks.

```typescript
<br />import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }
  ])
  ],
})
```

While similar, the `loadChildren` property is a way to reference a module by using native import instead of a component directly. Sin embargo, para ello necesitamos crear un módulo para cada uno de los componentes.

```typescript
...
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
  ...
  RouterModule.forChild([
    { path: '', component: LoginComponent },
  ])
  ],
})
```

> Excluimos contenido adicional y solo colocamos las partes necesarias.

Tenemos aquí una configuración típica de un módulo de Angular con "RouterModule", ahora usando `forChild` y declarando el componente en esa configuración. Con esta configuración, cuando ejecutemos nuestra compilación, produciremos fragmentos separados para el componente de aplicación, el componente de inicio de sesión y el componente de detalle.

## Live Example

If you would prefer to get hands on with the concepts and code described above, please checkout our [live example](https://stackblitz.com/edit/ionic-angular-routing?file=src/app/app-routing.module.ts) of the topics above on StackBlitz.

## Trabajando con Tabuladores

With Tabs, the Angular Router provides Ionic the mechanism to know what components should be loaded, but the heavy lifting is actually done by the tabs component. Let's look at a simple example.

```ts
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];
```

Here we have a "tabs" path that we load. In this example we call the path "tabs", but the name of the paths can be changed. They can be called whatever fits your app. In that route object, we can define a child route as well. In this example, the top level child route "tab1" acts as our "outlet", and can load additional child routes. For this example, we have a single sub-child-route, which just loads a new component. The markup for the tab is as followed:

```html
<br /><ion-tabs>

  <ion-tab-bar slot="bottom">

    <ion-tab-button tab="tab1">
      <ion-icon name="flash"></ion-icon>
      <ion-label>Tab One</ion-label>
    </ion-tab-button>

  </ion-tab-bar>

</ion-tabs>
```

If you've built apps with Ionic before, this should feel familiar. We create a `ion-tabs` component, and provide a `ion-tab-bar`. The `ion-tab-bar` provides a `ion-tab-button` with a `tab` property that is associated with the tab "outlet" in the router config. Note that the latest version of `@ionic/angular` no longer requires `<ion-tab>`, but instead allows developers to fully customize the tab bar, and the single source of truth lives within the router configuration.