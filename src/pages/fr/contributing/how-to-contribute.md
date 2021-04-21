---
nextText: 'Code de Conduite'
nextUrl: '/docs/contributing/coc'
---

# Contribuer à Ionic

Merci pour l'intérêt que vous portez à Ionic Framework!

## Etiquette de contribution

Veuillez consulter le [Code de conduite du contributeur](/docs/contributing/coc) pour des informations sur les règles de conduite.


## Créer un ticket

* Si vous avez une question sur l'utilisation du framework, posez-la sur le [Ionic Forum](http://forum.ionicframework.com/) ou dans le groupe [Ionic Worldwide Slack](https://ionicworldwide.herokuapp.com/).

* Il est nécessaire que vous décriviez clairement les étapes nécessaires pour reproduire le problème dans lequel vous vous trouvez. Bien que nous aimerions aider nos utilisateurs autant que possible, diagnostiquer des problèmes sans étapes de reproduction claires prend énormément de temps et n'est tout simplement pas viable.

* La liste des problèmes du dépôt [Ionic](https://github.com/ionic-team/ionic) est exclusivement destinée aux rapports de bogues et aux demandes de fonctionnalités. Les problèmes de non-conformité seront clos immédiatement.

* Les problèmes ne comportant pas d'étapes claires de reproduction ne seront pas triés. Si une question est étiquetée "needs : reply" et ne reçoit aucune autre réponse de l'auteur de la question pendant plus de 14 jours, elle sera fermée.

* Si vous pensez avoir trouvé un bogue, ou avoir une idée de nouvelle fonctionnalité, commencez par vous assurer qu'il n'a pas déjà été [reporté](https://github.com/ionic-team/ionic/issues?utf8=%E2%9C%93&q=is%3Aissue). Vous pouvez effectuer une recherche parmi les problèmes existants pour voir si un problème similaire a été signalé. Inclure les demandes fermées car elles peuvent avoir été clôturées avec une solution.

* Ensuite, [créez une nouvelle question](https://github.com/ionic-team/ionic/issues/new/choose) qui explique en détail le problème. Veuillez remplir le formulaire d'émission rempli avant de soumettre l'émission.


## Créer une bonne reproduction du code

### Qu'est-ce qu'une reproduction de code?

Une reproduction de code est une petite application qui est construite pour démontrer un problème particulier. La reproduction du code doit contenir la quantité minimale de code nécessaire pour recréer le problème et doit se concentrer sur un seul problème.

### Pourquoi devriez-vous créer une reproduction?

Une reproduction du code du problème que vous rencontrez nous aide à mieux isoler la cause du problème. Il s'agit d'une première étape importante pour faire corriger un bug !

Sans une reproduction fiable du code, il est peu probable que nous soyons en mesure de résoudre le problème, ce qui entraîne sa fermeture. En d'autres termes, la création d'un code de reproduction du problème nous aide à vous aider.

### Comment créer une reproduction

* Créez une nouvelle application Ionic en utilisant l'un de nos modèles de démarrage. L'application de démarrage `blank` est un excellent choix pour cela. Vous pouvez en créer une en utilisant la commande Ionic CLI suivante : `ionic start myApp blank`
* Ajoutez le minimum de code nécessaire pour recréer le problème que vous rencontrez. N'incluez rien qui ne soit pas nécessaire pour reproduire le problème. Cela inclut tous les plugins tiers que vous avez installés.
* Publiez l'application sur GitHub et incluez un lien vers celle-ci lorsque vous [créez un problème](#creating-an-issue).
* Veillez à inclure les étapes permettant de reproduire le problème. Ces étapes doivent être claires et faciles à suivre.

### Avantages de la création d'une reproduction

* **Utilise la dernière version de Ionic:** En créant une nouvelle application Ionic, vous vous assurez de tester contre la dernière version du framework. Parfois, les problèmes que vous rencontrez ont déjà été résolus dans une version plus récente du framework !
* **Surface minimale:** En supprimant le code qui n'est pas nécessaire pour reproduire le problème, il est plus facile d'identifier la cause du problème.
* **Pas besoin de code secret : **La création d'une reproduction minimale du numéro vous évite de devoir publier tout code propriétaire utilisé dans votre projet.
* **Obtenir de l'aide pour résoudre le problème:** Si nous pouvons reproduire un problème de manière fiable, il y a de bonnes chances que nous soyons en mesure de le résoudre.


## Créer une Pull Request

* Nous vous remercions de prendre le temps de contribuer ! Avant de soumettre une demande de pull, nous vous demandons de bien vouloir [créer une issue](#creating-an-issue) qui explique le bogue ou la demande de fonctionnalité et de nous faire savoir que vous prévoyez de créer une demande de pull pour celle-ci. Si un problème existe déjà, veuillez commenter ce problème en nous indiquant que vous souhaitez soumettre une demande de retrait pour ce problème. Cela nous permet de suivre la demande de retrait et de nous assurer qu'il n'y a pas de duplication des efforts.

* Vous cherchez un problème à résoudre ? Assurez-vous de consulter nos numéros avec le label [help wanted](https://github.com/ionic-team/ionic/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) !


### Configuration

1. [Téléchargez le programme d'installation](https://nodejs.org/) pour la version LTS de Node.js. C'est la meilleure façon de faire également [installer npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_).
2. Fork le dépôt [Ionic](https://github.com/ionic-team/ionic).
3. Clonez votre fork.
4. Créez une nouvelle branche à partir du master pour votre changement.
5. Naviguez dans le répertoire du paquet que vous souhaitez modifier (core, angulaire, etc.).
6. Exécutez `npm install` pour installer des dépendances pour ce paquet.
7. Suivez les étapes pour le package spécifique ci-dessous.


### Le coeur

#### Modifier les composants

1. Localisez le(s) composant(s) à modifier à l'intérieur de `/core/src/components/`.
2. Jetez un coup d'œil à la [Documentation du pochoir](https://stenciljs.com/docs/introduction/) et aux autres composants pour comprendre la mise en œuvre de ces composants.
3. Apportez vos modifications au composant. Si le changement est trop complexe ou sort de l'ordinaire, ajoutez des commentaires pour que nous puissions comprendre les changements.
4. [Aperçu de vos modifications](#preview-changes) localement.
5. [Modifier la documentation](#modifying-documentation) si nécessaire.
6. [Lancez lint](#lint-changes) sur le répertoire et assurez-vous qu'il n'y a pas d'erreurs.
7. [Construire le projet](#building-changes).
8. Une fois la construction terminée, livrez les changements. Veuillez respecter le [format du message de validation](#commit-message-format) pour chaque validation.
9. [Soumettez une Pull Request](#submit-pull-request) de vos modifications.


#### Aperçu des changements

1. Exécutez `npm start` à partir du répertoire `core`.
2. Un navigateur devrait s'ouvrir à `http://localhost:3333/`.
3. À partir de là, accédez à l'un des tests du composant pour visualiser vos modifications.
4. Si un test montrant votre changement n'existe pas, [ajoutez un nouveau test ou mettez à jour un test existant](#modifying-tests).
5. Pour tester en mode RTL, une fois que vous êtes dans le test du composant souhaité, ajoutez `?rtl=true` à la fin de l'url ; par exemple : `http://localhost:3333/src/components/alert/test/basic?rtl=true`.


#### Changements de Lint

1. Exécutez `npm run lint` pour lintériser le TypeScript et le Sass.
2. S'il y a des erreurs de lint, exécutez `npm run lint.fix` pour corriger automatiquement toutes les erreurs. Répétez l'étape 1 pour vous assurer que les erreurs ont été corrigées, et corrigez-les manuellement si ce n'est pas le cas.
3. Pour lint et corriger uniquement les erreurs TypeScript, exécutez respectivement `npm run lint.ts` et `npm run lint.ts.fix`.
4. Pour lint et corriger uniquement les erreurs Sass, exécutez respectivement `npm run lint.sass` et `npm run lint.sass.fix`.


#### Modification de la documentation

1. Localisez le fichier `readme.md` dans le répertoire du composant.
2. Modifiez la documentation **au-dessus** de la ligne qui dit `<!-- Auto Generated Below -->` dans ce fichier.
3. Pour mettre à jour l'une des documentations générées automatiquement sous cette ligne, effectuez les modifications pertinentes aux endroits suivants :
  - `Usage` : mettre à jour les exemples d'utilisation du composant dans le répertoire `usage/` du composant
  - `Properties`, `Events`, ou `Methods` : mettre à jour le fichier TypeScript du composant (`*.tsx`)
  - `CSS Custom Properties` : mettre à jour le fichier Sass principal du composant (`*.scss`)


#### Modifier les tests

1. Localisez le test à modifier à l'intérieur du dossier `test/` dans le répertoire du composant.
2. Si un test existe, modifiez-le en ajoutant un exemple pour reproduire le problème corrigé ou la fonctionnalité ajoutée.
3. Si un nouveau test est nécessaire, le plus simple est de copier le répertoire `basic/` du répertoire `test/` du composant, de le renommer et de modifier le contenu du fichier `index.html` et `e2e.ts` (voir [Tests de capture d'écran](#screenshot-tests) pour plus d'informations sur ce fichier).
4. Le répertoire `preview/` est utilisé dans la documentation comme démo. Ne mettez ce test à jour que s'il y a un bogue dans le test ou si l'API a subi un changement qui n'a pas été mis à jour dans le test.

##### Tests Screenshot

1. Si le test existe dans la capture d'écran, il y aura un fichier nommé `e2e.ts` dans le répertoire du test.
2. Un test de capture d'écran peut être ajouté en incluant ce fichier et en ajoutant un ou plusieurs appels `test()` qui incluent un appel à `page.compareScreenshot()`. Voir [Tests de bout en bout de pochoirs](https://stenciljs.com/docs/end-to-end-testing) et les tests existants dans `core/` pour des exemples.
3. **Important:** chaque `test()` ne devrait avoir qu'une seule capture d'écran (`page.compareScreenshot()`) appel **ou** il devrait vérifier l'attente à la fin de chaque test. S'il y a une non-concordance, le test échouera, ce qui empêchera le reste du test de s'exécuter, c'est-à-dire que si la première capture d'écran échoue, les autres appels de capture d'écran ne seront pas appelés _sans_ qu'ils soient dans un test séparé ou que tous les expects soient appelés à la fin.
4. Pour exécuter screenshot localement, utilisez la commande suivante : `npm run test.screenshot`.
    - Pour lancer une capture d'écran pour un test spécifique, passez le chemin d'accès au test ou une chaîne à rechercher.
    - Par exemple, exécuter tous les tests `alert` : `npm run test.screenshot alert`.
    - Ou encore, en exécutant les tests de base `alert` : `npm run test.screenshot src/components/alert/test/basic/e2e.ts`.


#### Building Changes

1. Once all changes have been made and the documentation has been updated, run `npm run build` inside of the `core` directory. This will add your changes to any auto-generated files, if necessary.
2. Review the changes and, if everything looks correct, [commit](#commit-message-format) the changes.
3. Make sure the build has finished before committing. If you made changes to the documentation, properties, methods, or anything else that requires an update to a generate file, this needs to be committed.
4. After the changes have been pushed, publish the branch and [create a pull request](#creating-a-pull-request).


### Submit Pull Request

1. [Create a new pull request](https://github.com/ionic-team/ionic/compare) with the `master` branch as the `base`. You may need to click on `compare across forks` to find your changes.
2. See the [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) GitHub help article for more information.
3. Please fill out the provided Pull Request template to the best of your ability and include any issues that are related.


## Commit Message Guidelines

We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history. We also use the git commit messages to generate our [changelog](https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md). Our format closely resembles Angular's [commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

### Commit Message Format

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/). A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope

The scope can be anything specifying place of the commit change. Usually it will refer to a component but it can also refer to a utility. For example `action-sheet`, `button`, `css`, `menu`, `nav`, etc. If you make multiple commits for the same component, please keep the naming of this component consistent. For example, if you make a change to navigation and the first commit is `fix(nav)`, you should continue to use `nav` for any more commits related to navigation. As a general rule, if you're modifying a component use the name of the folder.

### Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period `.` at the end
* entire length of the commit message must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Examples

Does not appear in the generated changelog:

```
docs(changelog): update steps to update
```

Appears under "Features" header, toast subheader:

```
feat(toast): add 'buttons' property
```

Appears under "Bug Fixes" header, skeleton-text subheader, with a link to issue #28:

```
fix(skeleton-text): use proper color when animated

closes #28
```

Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```
perf(css): remove all css utility attributes

BREAKING CHANGE: The CSS utility attributes have been removed. Use CSS classes instead.
```

Appears under "Breaking Changes" with the breaking change explanation:

```
refactor(animations): update to new animation system

BREAKING CHANGE:

Removes the old animation system to use the new Ionic animations.
```

The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header.

```
revert: feat(skeleton-text): add animated property

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```


## License

By contributing your code to the ionic-team/ionic GitHub Repository, you agree to license your contribution under the MIT license.
