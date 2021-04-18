---
---

# Le CLI de IONIC

L'interface de ligne de commande Ionic ([CLI](/docs/reference/glossary#cli)) est l'outil par excellence pour développer des applications Ionic.

## L'installation

Le CLI de IONIC peut être installé globalement avec npm :

```shell
$ npm install -g @ionic/cli
```

## L'aide

L'interface CLI de Ionic est livrée avec une documentation des commandes qui est accessible avec le drapeau `--help`.

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

> Assurez-vous d'exécuter `ionic <command> --help` dans votre répertoire de projet.
> 
> Pour certaines commandes, comme `ionic serve`, la documentation d'aide est contextuelle au type de votre projet, par exemple React vs Angular.

<!-- TODO: image? -->

## L'architecture

L'Ionic CLI est construit avec [TypeScript](/docs/reference/glossary#typescript) et [Node.js](/docs/reference/glossary#node). Il supporte Node 10.3+, mais la dernière version de Node LTS est toujours recommandée. Suivez le développement sur le dépôt open source <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub</a>.

## Résolution des problèmes

Pour résoudre les problèmes avec la CLI Ionic, ce qui suit peut être utile :

- Assurez-vous que la dernière version de la CLI Ionic est installée. Obtenez la version installée en exécutant `ionic --version`.
- Assurez-vous que la dernière version de Node LTS est installée. Voir [Node & npm](/docs/intro/environment#node-npm) configuration de l'environnement.
- Le drapeau `--verbose` imprime des messages de débogage, ce qui peut permettre de circonscrire le problème.
- Les problèmes de connexion peuvent être dus à des paramètres proxy mal configurés. Voir [Utilisation d'un proxy](/docs/cli/using-a-proxy) pour configurer le proxy de requête.
- Le répertoire global de configuration Ionic CLI est `~/.ionic` sur toutes les plateformes. Il peut être supprimé en toute sécurité et le Ionic CLI le repeuplera, mais toute la configuration (y compris les sessions utilisateur) sera perdue. Configurez ce répertoire avec les [variables d'environnement CLI](/docs/cli/configuration#environment-variables).