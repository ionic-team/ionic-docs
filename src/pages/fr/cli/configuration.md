---
---

# Configuration

## Fichiers

Les valeurs de configuration sont stockées dans des fichiers JSON. Le CLI Ionic se base sur un fichier de configuration global, généralement situé ici `~/.ionic/config. son`, et des fichiers de configuration du projet, généralement situé à la racine du projet dans `ionic.config.json`.

Le CLI fournit des commandes pour définir et afficher les valeurs de configuration à partir des fichiers de configuration du projet et du fichier de configuration global CLI. Voir `ionic config --help` ou voir la documentation pour l'utilisation des commandes [`configuration ionic get`](/docs/cli/commands/config-get) et [`configuration ionic set`](/docs/cli/commands/config-set).

### Fichier de configuration du projet

Chaque projet Ionic a un fichier de configuration de projet, généralement situé à la racine. Voir ci-après le fichier `ionic.config.json` commenté.

```json
{
  // Nom de l'application.
  "name": "My App",

  // Le type de projet de l'application. Le CLI utilise cette valeur pour déterminer les commandes
  // et les options disponibles, quoi afficher pour la documentation d'aide
  // et ce qu'il faut utiliser pour les compilations de ressources web et le serveur de développement.
  "type": "angular",

  // L'App ID pour Appflow.
  "id": "abc123",

  // Objet de configuration pour des intégrations telles que Cordova et Capacitor.
  "integrations": {
    "cordova": {
      ...
    }
  },

  // Configuration des hooks --voir la section des hooks ci-dessous pour plus de détails.
  "hooks": {
    ...
  }
}
```

## Variables d'environnement

Le CLI cherchera les variables d'environnement suivantes :

* `IONIC_CONFIG_DIRECTORY`: Le répertoire de la configuration globale du CLI. Par défaut `~/.ionic`.
* `IONIC_HTTP_PROXY`: Si vous êtes derrière un proxy, ceci est l'URL par laquelle toutes les requêtes du CLI vont passer. Voir la section [Utiliser un proxy](./using-a-proxy).
* `IONIC_TOKEN` : Authentification automatique avec [Appflow](https://ionic.io/appflow).

## Options

Les options suivantes modifient le comportement d'une commande exécutée par le CLI.

* `--help`: Au lieu d'exécuter la commande, consultez sa page d'aide.
* `--verbose`: Affiche tous les messages de log à des fins de débogage.
* `--quiet`: N'afficher que les messages de log `WARN` et `ERROR`.
* `--no-interactive` : Désactiver les invites interactives et les sorties fantaisistes. Si le CI ou un terminal non TTY est détecté, le CLI est automatiquement non interactif.
* `--confirm` : activer l'auto-confirmation des invites de confirmation. Attention : le CLI vous invite à ne pas faire quelque chose de potentiellement dangereux. L'auto-confirmation peut avoir des résultats inattendus.

## Crochets

Le CLI peut exécuter des scripts lors de certains événements, comme avant et après les constructions. Pour s'accrocher à la CLI, les [scripts npm](https://docs.npmjs.com/misc/scripts) suivants peuvent être utilisés dans `package.json` :

* `ionic:serve:before` : exécuté avant le démarrage du serveur de dev
* `ionic:serve:after` : exécuté après la fin du serveur de dev
* `ionic:build:before` : exécuté avant le début de la construction d'un actif web
* `ionic:build:after` : exécuté après la fin de la construction d'un actif web
* `ionic:capacitor:run:before` : exécuté pendant `ionic capacitor run` avant que l'ouverture de capacitor ne soit exécutée
* `ionic:capacitor:build:before` : exécuté pendant la `ionic capacitor build` avant que L'ouverture de capacitor ne soit exécuté
* `ionic:capacitor:sync:after` : exécuté pendant `ionic capacitor:sync` après une synchro

Lorsque vous utilisez un script shell pour l'un des crochets, le contexte du crochet est défini dans des variables d'environnement préfixées par `IONIC_CLI_HOOK_CTX_`.

L'exemple suivant montre les variables d'environnement qui sont définies pour le crochet `ionic:capacitor:build`.

```shell
IONIC_CLI_HOOK_CTX_NAME=capacitor:build:before
IONIC_CLI_HOOK_CTX_BUILD_CORDOVA_ASSETS=true
IONIC_CLI_HOOK_CTX_BUILD_ENGINE=browser
IONIC_CLI_HOOK_CTX_BUILD_PROJECT=app
IONIC_CLI_HOOK_CTX_BUILD_TYPE=angular
IONIC_CLI_HOOK_CTX_BUILD_VERBOSE=false
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_ID=io.ionic.starter
IONIC_CLI_HOOK_CTX_CAPACITOR_APP_NAME=ionic-starter-app
IONIC_CLI_HOOK_CTX_CAPACITOR_VERBOSE=false
```

Les crochets peuvent également être définis dans `ionic.config.json`. Définissez un objet `crochets` dans le projet, où chaque clé est le nom du crochet (sans le préfixe `ionique :` ), et la valeur est un chemin vers un fichier JavaScript ou un tableau de chemins.

Dans l'exemple suivant, le fichier est importé et exécuté pendant le crochet `ionic:build:before`.

```json
"hooks": {
  "build:before": "./scripts/build-before.js"
},
```

Les fichiers de crochet JavaScript doivent exporter une seule fonction, qui est passée à un seul argument (`ctx`) chaque fois que le crochet s'exécute.

L'argument est le contexte donné au fichier crochet, qui diffère d'un crochet à l'autre et selon les invocations.

`./scripts/build-before.js`:

```javascript
module.exports = function(ctx) {
  console.log(ctx);
};
```

## Projets multi-applications

<small><em>Disponible en CLI 6.2.0+</em></small>

L'Ionic CLI prend en charge une configuration multi-application, qui implique plusieurs applications Ionic et du code partagé dans un seul dépôt, ou [monorepo](/docs/reference/glossary#monorepo).

> Ces documents donnent un aperçu de la fonctionnalité multi-app de Ionic CLI, mais n'entrent pas vraiment dans les détails pour chaque framework.
> 
> Si vous utilisez Angular, veuillez consulter [cet article](https://github.com/ionic-team/ionic-cli/wiki/Angular-Monorepo) pour des exemples.

### Étapes de configuration

1. Créez un répertoire et initialisez un monorepo (voir [Structure du projet](#project-structure) pour plus de détails).
2. Initialiser le monorepo en tant que projet multi-app Ionic. Ceci va créer un fichier `ionic.config.json` multi-applications. Voir [Fichier de configuration](#config-file) pour plus de détails.

    ```shell
    $ ionic init --multi-app
    ```

1. Utilisez `ionic start` pour créer des applications Ionic ou `ionic init` pour initialiser des applications existantes (voir [Ajouter une application](#adding-an-app) pour plus de détails).

### Structure du projet

Dans un projet multi-application, la structure du projet est flexible. La seule exigence est un fichier `ionic.config.json` multi-app à la racine du dépôt.

Voici un exemple de configuration, où les applications dans le répertoire `apps/` sont séparées du code partagé dans le répertoire `lib/`. Remarquez le fichier `ionic.config.json` racine et le fichier `package.json` du monorepo.

<file-tree> <file-tree-directory name="apps"> <file-tree-directory name="myApp" collapsed></file-tree-directory> <file-tree-directory name="myOtherApp" collapsed></file-tree-directory> </file-tree-directory> <file-tree-directory name="lib" collapsed></file-tree-directory> <file-tree-file name="ionic.config.json"></file-tree-file> <file-tree-file name="package.json"></file-tree-file> </file-tree>

### Fichier de configuration

Dans un projet multi-app, les apps partagent un seul fichier `ionic.config.json` à la racine du dépôt au lieu que chaque app ait son propre fichier. Le fichier de configuration multi-app contient la configuration de chaque app en imbriquant les objets de configuration dans un objet `projects`. Une application par défaut peut être spécifiée en utilisant `defaultProject`.

Ci-dessous se trouve un exemple de fichier, qui correspond à la structure de fichier ci-dessus.

```json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "My App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "My Other App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myOtherApp"
    }
  }
}
```

Lorsqu'un projet multi-app est détecté, le Ionic CLI fonctionnera dans le contexte d'une app configurée dans la racine `ionic.config.json`. Les critères de sélection du projet sont les suivants :

1. Si l'option CLI globale `--project` est spécifiée, le projet est recherché par clé dans l'objet `projects`. Par exemple, `--project=myApp` sélectionnera le projet `myApp`.
2. Si le CLI détecte qu'il est exécuté dans un chemin de projet, configuré avec la clé `root`, il sélectionnera le projet correspondant. If the CLI detects that it is running in a project path, configured with the `root` key, it will select the corresponding project.
3. Si un `defaultProject` est spécifié dans `ionic.config.json`, il sélectionnera le projet spécifié lorsque les critères ci-dessus ne sont pas respectés.

### Ajout d'une application

Les apps peuvent être enregistrées dans un projet multi-app, soit en utilisant `ionic start` pour créer de nouvelles apps, soit `ionic init` pour initialiser les apps existantes.

#### Utiliser `ionic start`

Si un projet multi-app est détecté pendant le `ionic start`, le CLI ajoutera la configuration de l'app au fichier racine `ionic.config.json` au lieu de créer un fichier spécifique au projet.

L'installation des dépendances peut être sautée en utilisant `--no-deps` si les dépendances sont hissées à la racine du monorepo.

```shell
$ cd apps/
$ ionic start "My New App" --no-deps
```

#### Using `ionic init`

If an app was created in a way other than `ionic start`, for example by using a prebuilt template, use `ionic init` to register the existing app with the multi-app project.

> Make sure the app doesn't have an existing `ionic.config.json`.

```shell
$ cd apps/existing-app/
$ ionic init
```

## Advanced Configuration

### Overriding the Build

Normally, the CLI runs a hard-coded set of commands based on the project type. For example, the standard web asset build for Angular projects is `ng run app:build`. The web asset build can be overridden and `ionic build` can continue to be used by utilizing the `ionic:build` [npm script](https://docs.npmjs.com/misc/scripts). Similarly, the dev server can be overridden by using the `ionic:serve` npm script.

Pay close attention to the flags supplied to the script by the Ionic CLI. Irregularities may occur if options are not respected, especially for livereload on devices.

### Command Options

Command options can be expressed with environment variables. They are normally set with `--opt=value` syntax. The naming of these environment variables follows a pattern: start with `IONIC_CMDOPTS_`, add the command name (replacing any spaces with underscores), add the option name (replacing any hyphens with underscores), and then uppercase everything. Boolean flags (command-line options that don't take a value) can be set to `1` or `0`. Strip the `--no-` prefix in boolean flags, if it exists (`--no-open` in ionic serve can be expressed with `IONIC_CMDOPTS_SERVE_OPEN=0`, for example).

For example, the command options in `ionic cordova run ios -lc --livereload-port=1234 --host=0.0.0.0` can also be expressed with this series of environment variables:

```shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_HOST=0.0.0.0
```

If these variables are set in the environment, `ionic cordova build ios` will use new defaults for its options.

### Telemetry

The CLI sends usage data to Ionic to create a better experience. To disable this functionality, run `ionic config set -g telemetry false`.