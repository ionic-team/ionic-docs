---
---

# Utilisation d'un proxy

Le support du proxy est intégré à l'Ionic CLI. Les paramètres du proxy peuvent être configurés via le fichier de configuration ou une variable d'environnement.

Pour configurer les paramètres du proxy via le fichier de configuration, exécutez la commande suivante avec l'URL du serveur proxy :

```shell
$ ionic config set -g proxy http://proxy.example.com:8888
```

Pour configurer les paramètres du proxy via une variable d'environnement, utilisez l'une des méthodes suivantes :

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # also used by npm
$ export HTTPS_PROXY="https://proxy.example.com:8888" # also used by npm
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### Les autres CLI

Chaque CLI que vous utilisez doit être configuré séparément pour acheminer les demandes du réseau.

#### npm

```shell
$ npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
$ git config --global http.proxy http://proxy.example.com:8888
```

### Configuration SSL

Le CLI de Ionic peut être configuré pour utiliser différents paramètres SSL pour les requêtes HTTP.

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # file path to your CA root certificate
$ ionic config set -g ssl.certfile /path/to/certfile # file path to a client certificate
$ ionic config set -g ssl.keyfile /path/to/keyfile # file path to a client key file
```

Les entrées `cafile`, `certfile`, et `keyfile` peuvent être éditées manuellement comme des tableaux de chaînes dans `~/.ionic/config.json` pour inclure plusieurs fichiers.