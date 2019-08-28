---
previousText: 'Lifecycle'
previousUrl: '/docs/angular/lifecycle'
nextText: 'Performance'
nextUrl: '/docs/angular/performance'
contributors:
  - mhartington
---

# Angular 导航

本章主要讲述Ionic和Angular构建APP的路由器如何工作。

Angular路由器是Angular应用中最重要的库之一。 没有它，就只能生成单一视图/单一上下文的APP，也无法在浏览器重新加载时维持其导航状态。 使用Angular路由器，我们可以创建有链接的、有动画的富应用(当然也需要Ionic的帮助)。 我们来研究Angular路由器的基本知识以及如何为Ionic配置路由。

## 一个简单的路由

对大多数应用来说，路由不可或缺。 最基本的配置大概是这样：

```typescript
<br />import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'detail', component: DetailComponent },
  ])
  ],
})
```

这里路由分解到最小的粒度，是路径/组件的查找。 当我们的应用程序加载时，路由器通过读取用户正在加载的 URL 来启动内容。 在我们的例子中，我们的路由从 `''`查找，它是我们的最基础的主页路由。 因此，我们加载 `LoginComponent`。 直截了当。 这个与组件匹配路径的模式将继续作用于我们在路由器配置的每一个条目。但如果我们想在初始加载时加载一条不同的路径呢？

## 重定向处理

为此，我们可以使用路由器重定向。 重定向和普通的路由方式基本相同，但区别是它包含几个不同的key

```typescript
[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: DetailComponent }
];
```

在这个重定向中，查找应用程序的主页路径。如果我们加载这个路径，就会重定向到 `Login` 。 最后一个key`pathMatch`告诉路由器如何寻找路径。

因为我们用了 `full`，路由器就会对路径进行完全匹配，即使最终结果是 `/roution 1/routrout2/roution 3`。 也就是说如果我们这么写：

```typescript
{ path: '/route1/route2/route3', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
```

然后加载`/route1/route2/route3`，就会重定向。 但是如果我们加载的是`/route1/route2/route4`，就不会重定向，因为路径没有完全匹配。

或者，我们这么写：

```typescript
{ path: '/route1/route2', redirectTo: 'login', pathMatch: 'prefix' },
{ path: 'login', component: LoginComponent },
```

然后加载 `/route1/route2/route3` 以及`/route1/route2/route4`，都可以进行重定向。 这是因为`pathMatch: 'prefix'` 将只匹配路径的一部分。

## 导航到不同的路由

诚然，熟悉路由是好事，但是如何实际导航到上述的路由呢？ 为此，我们使用`routerLink`指令。 我们回到之前设定的简单路由：

```ts
RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent }
]);
```

接下来从`LoginComponent`出发，我们可以用以下的HTML代码导航到详情的路由上去。

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  <ion-button [routerLink]="['/detail']">Go to detail</ion-button>
</ion-content>
```

这里的重中之重是`ion-button`和`routerLink`指令。 RouterLink的运作方式与我们常用的`href`类似，不过跟URL只能用作字符串不同，它可以作为数组构建，这样就可以提供更加复杂的路径。

我们也可以用路由器的API在操作层实现应用程序的导航。

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

这两种方式的导航机制相同，只是作用的场景不同。

> 关于使用相对URL的说明：在当前版本中，为了支持多重导航栈，相对URL不受支持。

## 懒加载路由

我们现在是将所有的路由设置在同一个根模块app.module上的，不够理想。 换种方式，路由器的设置可以让我们将组件单独划归到属于它的块中。

```typescript
<br />import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ...
  RouterModule.forRoot([
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'detail', loadChildren: './detail/detail.module#DetailModule' }
  ])
  ],
})
```

类似的，`loadChildren`属性是个通过字符串而不是直接写组件来引用模块的方法。 不过，为了做到这一点，我们需要为每个组件创建一个模块。

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

> 我们排除了一些无关内容，只包括必要的部分。

在这里，我们进行了一个典型的Angular模块的设置和一个路由模块的引入，但我们现在使用 `forChild`，并在设置中声明组件。 With this setup, when we run our build, we will produce separate chunks for both the app component, the login component, and the detail component.

## Working with Tabs

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
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
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

Here we have a "tabs" path that we load. In this example we call the path “tabs”, but the name of the paths are open to be changed. They can be called whatever fits your app. In that route object, we can define a child route as well. In this example, the top level child route "tab1" acts as our "outlet", and can load additional child routes. For this example, we have a single sub-child-route, which just loads a new component. The markup for the tab is as followed:

```html
<br />&lt;ion-tabs&gt;

  &lt;ion-tab-bar slot="bottom"&gt;

    &lt;ion-tab-button tab="tab1"&gt;
      &lt;ion-icon name="flash"&gt;&lt;/ion-icon&gt;
      &lt;ion-label&gt;Tab One&lt;/ion-label&gt;
    &lt;/ion-tab-button&gt;

  &lt;/ion-tab-bar&gt;

&lt;/ion-tabs&gt;
```

If you've built apps with Ionic before, this should feel familiar. We create a `ion-tabs` component, and provide a `ion-tab-bar`. The `ion-tab-bar` provides a `ion-tab-button` with a `tab` property that is associated with the tab "outlet" in the router config. Note that the latest version of `@ionic/angular` no longer requires `<ion-tab>`, but instead allows developers to fully customize the tab bar, and the single source of truth lives within the router configuration.