---
title: "Progressive Web Apps in Angular"
---


## Making your Angular app a PWA


The two main requirements of a PWA are a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> and a <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>. While it's possible to add both of these to an app manually, the Angular team has an `@angular/pwa` package that can be used to automate this.

The `@angular/pwa` package will automatically add a service worker and an app manifest to the app. To add this package to the app, run:

```shell
$ ng add @angular/pwa
```

Once this package has been added run `ionic build --prod` and the `www` directory will be ready to deploy as a PWA.

> By default, the `@angular/pwa` package comes with the Angular logo for the app icons. Be sure to update the manifest to use the correct app name and also replace the icons.


> Note: Features like Service Workers and many JavaScript APIs (such as geolocation) require the app be hosted in a secure context. When deploying an app through a hosting service, be aware that HTTPS will be required to take full advantage of Service Workers.

## Service Worker 配置

After `@angular/pwa` has been added, a new `ngsw-config.json` file will be created at the root of the project. This file is responsible for configuring how Angular's service worker mechanism will handle caching assets. By default, the following will be provided:

```json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }, {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**",
          "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"
        ]
      }
    }
  ]
}
```

There are two sections in here, one for app specific resources (JS, CSS, HTML) and assets the app will load on demand. Depending on you app, these options can be customized. For a more detailed guide, read [the official guide from the Angular Team.](https://angular.io/guide/service-worker-config)


## 应用部署

### Firebase

Firebase主机为渐进网络应用提供了许多好处，包括由于CDN提供了快速响应时间， HTTPS 默认启用，并支持 [HTTP2 推送](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)。

首先，[在 Firebase中创建项目](https://console.firebase.google.com)。

接下来，在指令终端中安装FirebaseCLI：

```shell
$ npm install -g firebase-tools
```

安装Firebase CLI后, 在你的Ionic目录下执行 `firebase init` 。 指令终端会提示：

**"Which Firebase CLI features do you want to set up for this folder?"**  选择 "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** 选择你在 Firebase 创建的网页.

**"What do you want to use as your public directory?"** 输入 "www".

> 注意：解答以下两个问题将确保应用的路由、重新加载和深入连接：

**Configure as a single-page app (rewrite all urls to /index.html)?"** 输入 "Yes".

**"File www/index.html already exists. Overwrite?"** 输入 "No".

生成了一个 `firebase.json` 配置文件，配置应用程序进行部署。

最后需要做的事情是确保缓存标题设置正确。 请将 `headers` 片段添加到 `firebase.json` 文件。 完整的 `firebase.json` 如下：

```json
{
  "hosting": {
    "public": "www",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/build/app/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "ngsw-worker.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      }
    ]
  }
}
```

关于 `firebase.json` 特性的更多信息，请参阅 [ Firebase文档](https://firebase.google.com/docs/hosting/full-config#section-firebase-json)。

接下来，执行下列指令来打包你的应用程序：

```shell
$ ionic build --prod
```

最后, 执行下列指令来部署应用程序:

```shell
$ firebase deploy
```

完成后，应用程序将生效。
