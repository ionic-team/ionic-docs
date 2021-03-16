---
previousText: '配置'
previousUrl: '/docs/angular/config'
nextText: '测试'
nextUrl: '/docs/angular/testing'
contributors:
  - liamdebeasi
---


# 设备平台

平台服务能用于获取你当前的设备信息， 你可以通过`platforms`方法获取到所支持的所有平台。包括是否在平板上查看，如果是在移动设备浏览器上，还能获取到确切的平台（iOS、Android等）。 你还能获取到设备的方向，如果语言书写方向是从右到左也能获取到，以及其他更多的信息。 利用这些信息，你可以让你的应用完全适配所有设备。

## 用法

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

## 方法

### `is(platformName: Platforms) => boolean`

根据用户所使用的平台，`is(platformName)`会返回true或者false。 请注意，同一个应用可以为多个平台的名称都返回true。 举个例子，当一个应用运行在iPad的时候，`mobile`, `ios`, `ipad`, and `tablet`都会返回true。 此外，如果应用是运行在Cordova的话，`cordova`也会返回true。

#### 参数

| 名称             | 类型          | 描述                                                                                                                |
| -------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `platformName` | `Platforms` | 平台名称， 可选项有android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### 平台

Below is a table listing all the possible platform values along with corresponding descriptions.

| 平台名称      | 描述                     |
| --------- | ---------------------- |
| android   | 设备运行在Android           |
| capacitor | 设备运行在Capacitor         |
| cordova   | 设备运行在Cordova           |
| desktop   | 设备运行在桌面端               |
| electron  | 设备运行在Electron          |
| hybrid    | 设备运行在Capacitor或Cordova |
| ios       | 设备运行在iOS               |
| ipad      | iPad设备                 |
| iphone    | iPhone设备               |
| mobile    | 移动设备                   |
| mobileweb | 在移动设备上运行的 web 浏览器      |
| phablet   | 平板设备                   |
| pwa       | 渐进式应用                  |
| tablet    | 平板电脑设备                 |

### `platforms() => string[]`

根据你当前的设备，`platforms`会返回多个值。 每个都是平台不同层面的值。 例如说，在一部iPhone上，会返回`mobile`, `ios`和`iphone`。

### `ready() => Promise<string>`

当平台准备就绪并且原生功能可以被调用的时候，会返回一个promise。 如果应用是运行在web浏览器的时候，那么当DOM准备就绪的时候，promise就会解析。 当应用运行在例如Cordova这样的引擎的时候，promise会在Cordova触发`deviceready`事件的时候解析。 解析的结果是`readySource`，代表正在使用的平台。

例如，当Cordova准备就绪时，解析出来的结果是`cordova`， 默认值是`dom`。 如果应用某些逻辑需要根据平台差异而不同，`readySource`是有作用的。 例如，只有Capacitor 和 Cordova 可以执行状态栏插件，所以web不应该运行状态栏插件逻辑。

### `isRTL() => boolean`

返回此应用程序是否使用右向左语言方向。 我们建议应用程序的`index.html`文件已经设置了正确的`dir`属性值，例如`<html dir="ltr">`或`<html dir="rtl">`。 [ W3C：HTML中的结构标记和从右到左的文本](http://www.w3.org/International/questions/qa-html-dir)

### `isLandscape() => boolean`

如果应用程序处于横屏模式下，返回 `true`。

### `isPortrait() => boolean`

如果应用程序处于竖屏模式下，返回 `true`。

### `width() => number`

使用 `window.innerWidth` 获取平台视图的宽度。

### `height() => number`

使用 `window.innerhight` 获取平台视图的高度。

### `url() => string`

获取当前网址。

### `testUserAgent(expression: string) => boolean`

如果表达式包含在用户代理字符串中，返回 `true`。

### 参数
| 名称         | 类型     | 描述           |
| ---------- | ------ | ------------ |
| expression | string | 在用户代理中检查的字符串 |

## 事件

### `pause`

`pause` 事件在本地平台将应用程序置于后台时会发出，通常当用户切换到另一个应用程序时。 当将Cordova/Capacitor应用程序置于后台但在标准Web浏览器中不触发时，将触发此事件。

#### 用法

```typescript
this.platform.pause.subscribe(async () => {
  alert('Pause event detected');
});
```

### `resize`

当浏览器窗口更改尺寸时，会发出`resize`事件。 这可以是从正在调整的浏览器窗口大小，也可以是改变方向的设备。

#### 用法

```typescript
this.platform.resize.subscribe(async () => {
  alert('Resize event detected');
});
```

### `resume`

当本机平台从后台拉出应用时，将触发 `resume` 事件。 当将Cordova/Capacitor应用程序置于后台但在标准Web浏览器中不触发时，将触发此事件。

#### 用法

```typescript
this.platform.resume.subscribe(async () => {
  alert('Resume event detected');
});
```
