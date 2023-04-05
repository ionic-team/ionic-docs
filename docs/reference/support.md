---
title: サポートポリシー
---

<head>
  <title>App Development Support Policy - Ionic Framework API</title>
  <meta
    name="description"
    content="Ionic Framework API is 100% open-source (MIT), and always will be. Read our support policy to see why users know Ionic is the right choice for app development."
  />
</head>

## コミュニティメンテナンス

Ionic Frameworkは当初から100%オープンソース(MIT)で、今後もオープンソースとして公開されます。開発者は、Ionicのコミュニティメンテナンス戦略を通して、Ionicが彼らのクロスプラットフォームアプリにとって正しい選択であることを保証することができます。Ionicチームは定期的に新しいリリースとバグ修正を提供しており、コミュニティからのプルリクエストを歓迎しています。

## Framework Maintenance and Support Status

Given the reality of time and resource constraints as well as the desire to keep innovating in the frontend development space, over time it becomes necessary for the Ionic team to shift focus to newer versions of the Framework. However, Ionic will do everything it can to make the transition to newer versions as smooth as possible. The Ionic team recommends updating to the newest version of the Ionic Framework for the latest features, improvements and stability updates. For more details, consult [the Migration page](migration.md).

The current status of each Ionic Framework version is:

| Version |        Status         |   Released   | Maintenance Ends | Ext. Support Ends |
| :-----: | :-------------------: | :----------: | :--------------: | :---------------: |
| V7      | Beta                  | TBD          | TBD              | TBD               |
| V6      | **Active**            | Dec 8, 2021  | TBD              | TBD               |
| V5      | End of Support        | Feb 11, 2020 | June 8, 2022     | Dec 8, 2022       |
| V4      | End of Support        | Jan 23, 2019 | Aug 11, 2020     | Sept 30, 2022     |
| V3      | End of Support        | Apr 5, 2017  | Oct 30, 2019     | Aug 11, 2020      |
| V2      | End of Support        | Jan 25, 2017 | Apr 5, 2017      | Apr 5, 2017       |
| V1      | End of Support        | May 12, 2015 | Jan 25, 2017     | Jan 25, 2017      |

- **Maintenance**: Only critical bug and security fixes. No major feature improvements.
- **Extended Support**: For teams and organizations that require additional long term support, Ionic has extended support options available. To learn more, see our [Enterprise offerings](https://ionicframework.com/enterprise).

## Compatibility Recommendations

The Ionic team has compiled a set of recommendations for using the Ionic Framework in conjunction with other contextually-relevant software. This is not meant to be a comprehensive list, but covers many common compatibility questions. The Ionic team strongly recommends reviewing your project dependencies once each quarter to keep track of new releases, features and bug fixes.

### Core Dependencies

#### Ionic Angular

| Framework | Minimum Angular Version | Maximum Angular Version | TypeScript |
| :-------: | :---------------------: | :---------------------: | :--------: |
| v7        | v14                     | v15.x^                  | 4.6+       |   
| v6        | v12                     | v15.x^                  | 4.0+       |
| v5        | v8.2                    | v12.x                   | 3.5+       |
| v4        | v8.2                    | v11.x                   | 3.5+       |
| v3        | v5.2.11                 | v5.2.11                 | 2.6.2      |

> ^ Angular 14.x supported starting in Ionic v6.1.9. Angular 15.x supported starting in Ionic v6.3.6.

**Angular 13+ Support On Older Versions of iOS**

Angular's support policy for iOS is the two most recent major versions. This means that changes to your Angular project may be necessary to use Ionic Angular v4-v6 on iOS 13. To support iOS 13, change the project `target` specified in `compilerOptions` in the tsconfig.json to `es5`. Without this change an error of `Unexpected token '.' in promiseReactionJob` will occur on app startup in iOS 13.

Note that later versions of Ionic do not support iOS 13; see [mobile support table here](./browser-support#mobile-browsers).

#### Ionic React

| Framework | Required React Version | TypeScript |
| :-------: | :--------------------: | :--------: |
| v7        | v17+                   | 3.7+       |
| v6        | v17+                   | 3.7+       |
| v5        | v16.8+                 | 3.7+       |
| v4        | v16.8+                 | 3.7+       |

#### Ionic Vue

| Framework | Required Vue Version | TypeScript |
| :-------: | :------------------: | :--------: |
| v7        | v3.0.6+              | 3.9+       |
| v6        | v3.0.6+              | 3.9+       |
| v5        | v3.0+                | 3.9+       |

### Native Bridges

|  Framework   |               Cordova                |        Capacitor         |
| :----------: | :----------------------------------: | :----------------------: |
| V5 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
|  V5 - React  |            Not supported             |        Latest 2.x        |
|   V5 - Vue   |            Not supported             |        Latest 2.X        |
| V4 - Angular | cordova-android 8.X, cordova-ios 5.X |        Latest 2.X        |
|  V4 - React  |            Not supported             |        Latest 2.x        |
|      V3      | cordova-android 8.X, cordova-ios 5.X | Not officially supported |

- As iOS and Android (and related tools) are updated, you can expect more updates for Cordova and Capacitor, so it is recommended to stay on the latest version(s) of Cordova and Capacitor.

### Ionic Platform & Products

|  Framework   |        Appflow        |          Ionic Native Premier Plugins\*           |
| :----------: | :-------------------: | :-----------------------------------------------: |
| V5 - Angular | `@ionic/angular` 5.X  |               Use latest available                |
|  V5 - React  |  `@ionic/react` 5.X   |               Use latest available                |
| V4 - Angular | `@ionic/angular` 4.X  |               Use latest available                |
|  V4 - React  |  `@ionic/react` 4.X   |               Use latest available                |
|      V3      | `ionic-angular` 3.9.X | Use latest; special configuration may be required |

- Native Premier Plugins require `@ionic-enterprise/cordova` for installation [see here](https://ionic.io/docs/premier-plugins/setup#install-tooling)
- For Capacitor projects, follow the [Capacitor installation guide for Cordova plugins](https://capacitorjs.com/docs/cordova/using-cordova-plugins)
- If you need to use an Enterprise plugin with an Ionic 3 project, please [contact us](https://ionic.zendesk.com/hc)

### Ionic Platform & Products (Cont.)

|  Framework   |      Ionic Studio       | Ionic Native Community Plugins\* |
| :----------: | :---------------------: | :------------------------------: |
| V5 - Angular |  `@ionic/angular` 5.X   |   @awesome-cordova-plugins 5.X   |
|  V5 - React  | Not currently supported |  @awesome-cordova-plugins 5.X\*  |
| V4 - Angular |  `@ionic/angular` 5.X   |   @awesome-cordova-plugins 5.X   |
|  V4 - React  | Not currently supported |  @awesome-cordova-plugins 5.X\*  |
|      V3      | Not currently supported |   @awesome-cordova-plugins 4.X   |

- Wrappers (and their associated plugins) are community maintained.
- \*Cordova plugin support with Ionic Native and `@ionic/react` can be achieved using the [vanilla JavaScript implementation](../native.md#vanilla-javascript)
