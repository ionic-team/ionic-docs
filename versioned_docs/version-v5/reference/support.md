# Support Policy

## Community Maintenance

The Ionic Framework has been 100% open source (MIT) since the very beginning, and always will be. Developers can ensure Ionic is the right choice for their cross-platform apps through Ionic’s community maintenance strategy. The Ionic team regularly ships new releases, bug fixes, and is very welcoming to community pull requests.

## Framework Maintenance and Support Status

Given the reality of time and resource restraints as well as the desire to keep innovating in the frontend development space, over time it becomes necessary for the Ionic team to shift focus to newer versions of the Framework. However, Ionic will do everything it can to make the transition to newer versions as smooth as possible. The Ionic team recommends updating to the newest version of the Ionic Framework for the latest features, improvements and stability updates. For more details, consult [the Migration page](migration.md).

The current status of each Ionic Framework version is:

| Version |        Status         |   Released   | Maintenance Ends | Ext. Support Ends |
| :-----: | :-------------------: | :----------: | :--------------: | :---------------: |
|   V5    |      **Active**       | Feb 11, 2020 |       TBD        |        TBD        |
|   V4    |      Maintenance      | Jan 23, 2019 |   Aug 11, 2020   |        TBD        |
|   V3    | Extended Support Only | Apr 5, 2017  |   Oct 30, 2019   |   Aug 11, 2020    |
|   V2    |    End of Support     | Jan 25, 2017 |   Apr 5, 2017    |    Apr 5, 2017    |
|   V1    |    End of Support     | May 12, 2015 |   Jan 25, 2017   |   Jan 25, 2017    |

- **Maintenance**: Only critical bug and security fixes. No major feature improvements.
- **Extended Support**: For teams and organizations that require additional long term support, Ionic has extended support options available. To learn more, see our [Enterprise offerings](https://ionicframework.com/enterprise).

## Compatibility Recommendations

The Ionic team has compiled a set of recommendations for using the Ionic Framework in conjunction with other contextually-relevant software. This is not meant to be a comprehensive list, but covers many common compatibility questions. The Ionic team strongly recommends reviewing your project dependencies once each quarter to keep track of new releases, features and bug fixes.

### Core Dependencies

|  Framework   | Angular | React  |  Vue  | Typescript |
| :----------: | :-----: | :----: | :---: | :--------: |
| V5 - Angular | v8.2.X  |  N/A   |  N/A  |   3.5.X    |
|  V5 - React  |   N/A   | 16.8.X |  N/A  |   3.7.X    |
|   V5 - Vue   |   N/A   |  N/A   | 3.0.X |   3.9.X    |
| V4 - Angular | v8.2.X  |  N/A   |  N/A  |   3.5.X    |
|  V4 - React  |   N/A   | 16.8.X |  N/A  |   3.7.X    |
|      V3      | v5.2.11 |  N/A   |  N/A  |   2.6.2    |

- The Ionic team generally recommends the latest releases of third party packages and strives to support the latest releases within 2-4 weeks of general availability.

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
- For Capacitor projects, follow the [Capacitor installation guide for Cordova plugins](https://capacitor.ionicframework.com/docs/cordova/using-cordova-plugins)
- If you need to use an Enterprise plugin with an Ionic 3 project, please [contact us](https://ionic.zendesk.com/hc)

### Ionic Platform & Products (Cont.)

|  Framework   |      Ionic Studio       | Ionic Native Community Plugins\* |
| :----------: | :---------------------: | :------------------------------: |
| V5 - Angular |  `@ionic/angular` 5.X   |        @awesome-cordova-plugins 5.X         |
|  V5 - React  | Not currently supported |       @awesome-cordova-plugins 5.X\*        |
| V4 - Angular |  `@ionic/angular` 5.X   |        @awesome-cordova-plugins 5.X         |
|  V4 - React  | Not currently supported |       @awesome-cordova-plugins 5.X\*        |
|      V3      | Not currently supported |        @awesome-cordova-plugins 4.X         |

- Wrappers (and their associated plugins) are community maintained.
- \*Cordova plugin support with Ionic Native and `@ionic/react` can be achieved using the [vanilla JavaScript implementation](../native.md#vanilla-javascript)
