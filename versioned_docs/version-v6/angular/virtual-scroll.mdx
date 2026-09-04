# Virtual Scroll

In the past, we have provided an `ion-virtual-scroll` component in Ionic Framework to help with list virtualization. At the time this was not available in Angular, but recently Angular has provided its own solution via the `@angular/cdk` package.

## Setup

To setup the CDK Scroller, first install `@angular/cdk`:

```shell
npm add @angular/cdk
```

This provides a collection of different utilities, but we'll focus on `ScrollingModule` for now.

When we want to use the CDK Scroller, we'll need to import the module in our component. For example, in a tabs starter project, we can add our import to the `tabs1.module.ts` file.

```diff
  import { IonicModule } from '@ionic/angular';
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { Tab1Page } from './tab1.page';
  import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
+ import { ScrollingModule } from '@angular/cdk/scrolling';
  import { Tab1PageRoutingModule } from './tab1-routing.module';
  @NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      Tab1PageRoutingModule,
+     ScrollingModule
    ],
    declarations: [Tab1Page]
  })
  export class Tab1PageModule {}
```

With this added, we have access to the Virtual Scroller in the Tab1Page component.

## Usage

The CDK Virtual Scroller can be added to a component by adding the `cdk-virtual-scroll-viewport` to a component's template.

```html
<ion-content>
  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>
</ion-content>
```

`cdk-virtual-scroll-viewport` becomes the root of our scrollable content and is responsible for recycling DOM nodes as they scroll out of view.

The DOM nodes at this point can be any content needed for an app. The difference is that when we want to iterate over a collection, `*cdkVirtualFor` is used instead of `*ngFor`.

```html
<ion-content>
  <cdk-virtual-scroll-viewport>
    <ion-list>
      <ion-item *cdkVirtualFor="let item of items">
        <ion-avatar slot="start">
          <img src="https://loremflickr.com/40/40" />
        </ion-avatar>
        <ion-label> {{item }} </ion-label>
      </ion-item>
    </ion-list>
  </cdk-virtual-scroll-viewport>
</ion-content>
```

Here, `items` is an array, but it can be an array, `Observable<Array>`, or `DataSource`. `DataSource` is an abstract class that can provide the data needed as well as utility methods. For more details, check out the [CDK Virtual Scrolling docs](https://material.angular.io/cdk/scrolling/overview).

The component is not complete yet as the `cdk-virtual-scroll-viewport` needs to know how big each node will be as well as the min/max buffer sizes.

At the moment, CDK Virtual Scroller only supports fixed sized elements, but dynamic sized elements are planned for the future. For the `Tab1Page` component, since it is only rendering an item, it can be hard-coded to a fixed size.

The min/max buffer size tells the scroller "render as many nodes as it takes to meet this minimum height, but not over this".

```html
<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>
```

For this case, the `cdk-virtual-scroll-viewport` will render cells at a height 56px until it reaches a height of 900px, but no more at 1350px. These numbers are arbitrary, so be sure to test out what values will work in a real use case.

Putting everything together, the final HTML should look like:

```html
<ion-content>
  <cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350">
    <ion-list>
      <ion-item *cdkVirtualFor="let item of items">
        <ion-avatar slot="start">
          <img src="https://loremflickr.com/40/40" />
        </ion-avatar>
        <ion-label> {{item }} </ion-label>
      </ion-item>
    </ion-list>
  </cdk-virtual-scroll-viewport>
</ion-content>
```

The last piece needed is a some CSS to size the viewport correctly. In the `tab1.page.scss` file, add the following

```scss
cdk-virtual-scroll-viewport {
  height: 100%;
  width: 100%;
}
```

Since the viewport is built to fit various use cases, the default sizing is not set and is up to developers to set.

## Usage with Ionic Components

Ionic Framework requires that features such as collapsible large titles, `ion-infinite-scroll`, `ion-refresher`, and `ion-reorder-group` be used within an `ion-content`. To use these experiences with virtual scrolling, you must add the `.ion-content-scroll-host` class to the virtual scroll viewport.

For example:

```html
<ion-content [scrollY]="false">
  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">
    <!-- Your existing content and configurations -->
  </cdk-virtual-scroll-viewport>
</ion-content>
```

## Further Reading

This only covers a small portion of what the CDK Virtual Scroller is capable of. For more details, please see the [Angular CDK Virtual Scrolling docs](https://material.angular.io/cdk/scrolling/overview).
