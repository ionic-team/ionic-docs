---
previousText: '你的第一个 App'
previousUrl: '/docs/angular/your-first-app'
nextText: '导航'
nextUrl: '/docs/angular/navigation'
contributors:
  - elylucas
---

# Ionic页面的生命周期

本指南涵盖生命周期钩子如何在 ionic 和 angular 的应用程序中工作。

![Ionic 生命周期事件演示](/docs/assets/img/guides/lifecycle/ioniclifecycle.png)

## Angular的生命周期事件

Ionic兼容由Angular提供的生命周期事件。 使用得最多的两个Angular事件是：

| 事件名称          | 描述                                           |
| ------------- | -------------------------------------------- |
| `ngOnInit`    | 在组建初始化时触发。 该事件可以用在类似于初始化本地变量以及调用服务类这样的一过性操作。 |
| `ngOnDestroy` | 在Angular销毁某一视图时触发。 可用于在清理取消订阅可观测对象时。         |


关于Angular组件生命周期事件的更多信息，访问他们的 [组件生命周期文档](https://angular.io/guide/lifecycle-hooks)。

> 使用 `ion-nav` 或 `ion-routter-outlet` 的组件不应使用 `OnPush` 更改检测策略。 这样做将防止诸如 `ngOnInit` 等生命周期钩子被开除。 此外，异步状态更改可能无法正确渲染。

## Ionic页面事件

除了Angular生命周期事件外，Ionic Angular提供了一些额外的事件：

| 事件名称               | 描述              |
| ------------------ | --------------- |
| `ionViewWillEnter` | 当组件路由即将显示动画时触发。 |
| `ionViewDidEnter`  | 当组件路由完成动画时触发。   |
| `ionViewWillLeave` | 当组件路由从组件到动画时触发。 |
| `ionViewDidLeave`  | 当组件路由结束动画时触发。   |


`ionViewWillEnter`和 `ionViewDidEnter`之间的差别是当它们触发时。 前者在`ngOnInit`之后触发，但在页面转换开始之前触发，后者在转换结束后直接触发。

对于`ionViewWillLeave` 和 `ionViewDidLeave`, `ionViewWillLeave` 从当前页面开始转变之前直接调用， `ionViewDidLeave` 直到成功过渡到新页面后调用(在新页面 `ionViewDidEnter` 触发之后）。

![Ionic 生命周期事件demo](/docs/assets/img/guides/lifecycle/ioniclifecycle.gif)

## Ionic如何控制页面的生命周期

Ionic有它自己的路由出口，称为 `<ion-router-outlet />`。 此出口扩展了Angular的 `<router-outlet />` ，增加了一些功能，以便移动设备有更好的经验。

当应用被包装在 `<ion-router-outlet />`，Ionic对导航处理方式有点不同。 当您浏览到一个新页面时，Ionic将保存的旧的页面到现在的 DOM 中，但从视图中隐藏，并转换新页面。 我们这样做有两个原因：

1) 我们可以维持旧页面的状态(屏幕、滚动位置等数据..)  
2) 我们可以提供一个更平滑的过渡回页面，因为它已经存在，不需要重新创建。

页面只有在“popped”时才会从DOM中删除，例如，通过按UI中的后退按钮或浏览器后退按钮。

由于这种特殊处理，`ngOnInit和``ngOnDestroy`方法可能不会在您通常认为它们应该触发的时候触发。

`ngOnInit` 仅在新创建页面时触发，但导航回页面时不会触发。 例如，在tabs界面的每个页面之间导航将只调用每个页面的`ngOnInit`方法一次，但在随后的访问中不会调用。 `ngOnFirsioy` 只有在页面“popped”时才会触发。

## 路由守卫

在 Ionic 3 中，有一些额外的生命周期方法可用于控制页面 (`ionViewCanEnterCanEnter`) 和离开 (`ionViewCanLeave`)。 它们可以用于保护页面不受未授权用户的访问，并在您不希望用户离开页面时(比如在填写表单时) 将用户保留在页面上。

这些方法在ion4中被移除，取而代之的是Angular的路由守卫。

路由保护程序帮助确定是否可以对路由采取特定的操作 他们是实现某些接口的类。 可以使用 `CanActivate`和`CanDeactivate`接口实现与删除事件`ionViewCanEnter`和`ionViewCanLeave`所做的相同类型的逻辑。

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

要使用这个守卫，在路由定义中加入适当的路由参数：

```typescript
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

有关如何使用路由保护的更多信息，请访问Angular的[路由器文档路由器文档](https://angular.io/guide/router)

## 生命周期方法指导

下面是关于每一个生命周期事件使用案例的一些提示。

- `ngOnInit` - 初始化您的组件，并从服务中加载数据，之后每次访问都不需要重新刷新。
- `ionViewWillEnter` - 因为`ionViewWillEnter`在每次视图被导航到(无论是否初始化) 时都会被调用，所以它是一个从服务中加载数据的好方法。 但是，如果您的数据在动画期间返回，它可能会启动大量DOM操作，这可能会导致一些不太好的效果。
- `ionViewDidEnter` - 如果你使用`ionViewWillEnter`加载数据观察到了性能问题，可以代替在`ionViewDidEnter`中获取数据。 但是，这个事件在用户看到页面之后才会触发，所以您可能想要使用加载指示器或骨架屏幕，这样在转换完成之后，内容就不会不自然地闪烁。
- `ionViewWillLeave` -可用于清理，如从可观察对象取消订阅。 由于`ngOnDestroy`可能不会在您从当前页面导航时触发，所以如果您不希望在屏幕不可见的情况下激活清除代码，请将其放在这里。
- `ionViewDidLeave` - 当这个事件触发时，您知道新页面已经完全转换进来，因此当视图可见时，您通常不会执行的任何逻辑都可以转到这里。
- `ngOnDestroy` - 清除您不想在`ionViewWillLeave`中清除的页面的逻辑。