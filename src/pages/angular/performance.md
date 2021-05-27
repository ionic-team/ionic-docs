---
previousText: 'Storage'
previousUrl: '/docs/angular/storage'
---

# Angular Performance

## *ngFor with Ionic Components

When using `*ngFor` with Ionic components, we recommend using Angular's `trackBy` option. This allows Angular to manage change propagation in a much more efficient way and only update the content inside of the component rather than re-create the component altogether.

By using `trackBy` you can provide a stable identity for each loop element so Angular can track insertions and deletions within the iterator. Below is an example of how to use `trackBy`:

**home.page.html**
```html
<ion-item *ngFor="let item of items; trackBy:trackItems">
  <ion-label>{{ item.value }}</ion-label>
</ion-item>
```

**home.component.ts**
```typescript

items = [
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

> Do you have a guide you'd like to share? Click the *Edit this page* button below.
