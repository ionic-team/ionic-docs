---
---

# Recharge en direct

Une option qui peut stimuler la productivité lors de la création d'applications Ionic est **Live Reload** (ou **live-reload**). Lorsqu'il est actif, Live Reload recharge le navigateur ou [Web View](/docs/core-concepts/webview) lorsque des changements sont détectés dans l'application. Ceci est particulièrement utile pour le développement à l'aide de dispositifs matériels.

## Modalités

Le Live Reload est un terme confondu. Avec `ionic serve`, Live Reload désigne simplement le rechargement du navigateur lorsque des modifications sont apportées. Live Reload peut également être utilisé avec Capacitor et Cordova pour offrir la même expérience sur les appareils virtuels et matériels, ce qui élimine la nécessité de redéployer un binaire natif.

## Utilisation

Étant donné que le chargement en direct exige que la vue Web charge votre application à partir d'une URL hébergée par votre ordinateur au lieu de lire simplement les fichiers sur le dispositif, la configuration du chargement en direct pour les dispositifs matériels peut être délicate.

Comme pour les déploiements réguliers de dispositifs, vous aurez besoin d'un câble pour connecter votre dispositif à votre ordinateur. La différence est que Ionic CLI configure la vue Web pour charger votre application depuis le serveur de développement sur votre ordinateur.

### Capacitor

Capacitor n'a pas encore de build programmatique pour le développement (suivez [cette question](https://github.com/ionic-team/capacitor/issues/324) pour les progrès), donc le CLI de Ionic ne **pas** transmet automatiquement les ports pour iOS et Android.

Pour utiliser Live Reload avec Capacitor, assurez-vous que vous utilisez soit un périphérique virtuel, soit un périphérique matériel connecté au même réseau Wi-Fi que votre ordinateur. Ensuite, vous devrez spécifier que vous voulez utiliser une adresse externe pour le serveur de développement en utilisant le drapeau `--external`.

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

> N'oubliez pas qu'avec l'option `--externe`, les autres personnes de votre réseau Wi-Fi pourront accéder à votre application.

### Cordova

#### Android

Pour les appareils Android, le CLI de Ionic transmettra automatiquement le port du serveur dev. Cela signifie que vous pouvez utiliser une adresse `localhost` et qu'elle fera référence à votre ordinateur lorsqu'elle sera chargée dans la vue Web, et non au périphérique.

La commande tout-en-un suivante va démarrer un serveur de live-reload sur `localhost` et déployer l'application sur un appareil Android en utilisant Cordova :

```shell
$ ionic cordova run android -l
```

#### iOS

Pour les appareils iOS, le transfert de port n'est pas encore une option. Cela signifie que vous devrez connecter votre appareil au même réseau Wi-Fi que votre ordinateur et utiliser une adresse externe pour le serveur de développement.

> Vous pouvez suivre [cette question](https://github.com/ionic-team/native-run/issues/20) pour les progrès sur la redirection des ports iOS avec Ionic.

Dans certains cas, Ionic CLI ne connaîtra pas l'adresse avec laquelle configurer le Web View, et il vous sera donc demandé d'en sélectionner une. Veillez à sélectionner l'adresse de votre ordinateur sur votre réseau Wi-Fi.

La commande tout-en-un suivante va démarrer un serveur de live-reload sur **toutes les adresses** et déployer l'application sur un appareil iOS en utilisant Cordova :

```shell
$ ionic cordova run ios -l --external
```

> N'oubliez pas qu'avec l'option `--externe`, les autres personnes de votre réseau Wi-Fi pourront accéder à votre application.

## Astuces

- Avec Cordova, utilisez les options `--device`, `--emulator` et `--target` pour réduire les périphériques cibles. Utilisez l'option `--list` pour lister toutes les cibles. Voir l'utilisation dans la [documentation de la commande](/docs/cli/commands/cordova-run).
- Vous pouvez séparer le processus du serveur de développement et le processus de déploiement en utilisant `ionic serve` et l'option `--livereload-url` de `ionic cordova run` ou `ionic capacitor run`.
- Pour Android, il est possible de configurer [adb](https://developer.android.com/studio/command-line/adb) pour toujours transférer les ports lorsque le serveur adb est en cours d'exécution (voir `adb reverse`). Une fois le transfert de port mis en place, une adresse externe n'est plus nécessaire. Vous pouvez également configurer le pont adb sur TCP de sorte que les déploiements ultérieurs ne nécessitent plus de câble USB.