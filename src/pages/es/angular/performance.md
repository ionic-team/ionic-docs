---
previousText: 'Almacenamiento'
previousUrl: '/docs/angular/storage'
---

# Rendimiento angular

## * ngFor con componentes de ionic

Al usar ` * ngFor ` con componentes Ionic, recomendamos usar la opción ` trackBy ` de Angular. Esto permite que Angular administre la propagación de cambios de una manera mucho más eficiente y solo actualice el contenido dentro del componente en lugar de volver a crear el componente por completo.

Al usar ` trackBy `, puede proporcionar una identidad estable para cada elemento de bucle para que Angular pueda rastrear inserciones y eliminaciones dentro del iterador. A continuación se muestra un ejemplo de cómo usar `trackBy`:

**home.page.html**

```html
<ion-item *ngFor="let item of items; trackBy:trackItems">
  <ion-label>{{ item.value }}</ion-label>
</ion-item>
```

**home.component.ts**

```typescript
<br />items = [
  { id: 0, value: 'Item 0' },
  { id: 1, value: 'Item 1' },
  ...
]

trackItems(index: number, itemObject: any) {
  return itemObject.id;
}
```

In this example, we have an array of objects called `items`. Each object contains a `value` and an `id`. Using `trackBy`, we pass a `trackItems` function which returns the `id` of each object. This `id` is used to provide a stable identity for each loop element.

For more information on how Angular manages change propagation with `ngFor` see https://angular.io/api/common/NgForOf#change-propagation.

## From the Ionic Team

[How to Lazy Load in Ionic Angular](https://ionicframework.com/blog/how-to-lazy-load-in-ionic-angular/)

[Improved Perceived Performance with Skeleton Screens](https://ionicframework.com/blog/improved-perceived-performance-with-skeleton-screens/)

## From the Angular Team

[Build performant and progressive Angular apps](https://web.dev/angular) - web.dev

## From the Community

[High Performance Animations in Ionic](https://www.joshmorony.com/high-performance-animations-in-ionic/) - Josh Morony

[High Performance List Filtering in Ionic](https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/) - Josh Morony

[Increasing Performance with Efficient DOM Writes in Ionic](https://www.joshmorony.com/increasing-performance-with-efficient-dom-writes-in-ionic-2/) - Josh Morony

[Ionic Framework is Fast (But Your Code Might Not Be)](https://www.joshmorony.com/ionic-framework-is-fast-but-your-code-might-not-be/) - Josh Morony

> ¿Tienes una guía que te gustaría compartir? Haga clic en el botón *Editar esta página* abajo.