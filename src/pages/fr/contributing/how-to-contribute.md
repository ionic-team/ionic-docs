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


### Core

#### Modifying Components

1. Locate the component(s) to modify inside `/core/src/components/`.
2. Take a look at the [Stencil Documentation](https://stenciljs.com/docs/introduction/) and other components to understand the implementation of these components.
3. Make your changes to the component. If the change is overly complex or out of the ordinary, add comments so we can understand the changes.
4. [Preview your changes](#preview-changes) locally.
5. [Modify the documentation](#modifying-documentation) if needed.
6. [Run lint](#lint-changes) on the directory and make sure there are no errors.
7. [Build the project](#building-changes).
8. After the build is finished, commit the changes. Please follow the [commit message format](#commit-message-format) for every commit.
9. [Submit a Pull Request](#submit-pull-request) of your changes.


#### Preview Changes

1. Run `npm start` from within the `core` directory.
2. A browser should open at `http://localhost:3333/`.
3. From here, navigate to one of the component's tests to preview your changes.
4. If a test showing your change doesn't exist, [add a new test or update an existing one](#modifying-tests).
5. To test in RTL mode, once you are in the desired component's test, add `?rtl=true` at the end of the url; for example: `http://localhost:3333/src/components/alert/test/basic?rtl=true`.


#### Lint Changes

1. Run `npm run lint` to lint the TypeScript and Sass.
2. If there are lint errors, run `npm run lint.fix` to automatically fix any errors. Repeat step 1 to ensure the errors have been fixed, and manually fix them if not.
3. To lint and fix only TypeScript errors, run `npm run lint.ts` and `npm run lint.ts.fix`, respectively.
4. To lint and fix only Sass errors, run `npm run lint.sass` and `npm run lint.sass.fix`, respectively.


#### Modifying Documentation

1. Locate the `readme.md` file in the component's directory.
2. Modify the documentation **above** the line that says `<!-- Auto Generated Below -->` in this file.
3. To update any of the auto generated documentation below that line, make the relevant changes in the following places:
  - `Usage`: update the component's usage examples in the component's `usage/` directory
  - `Properties`, `Events`, or `Methods`: update the component's TypeScript file (`*.tsx`)
  - `CSS Custom Properties`: update the component's main Sass file (`*.scss`)


#### Modifying Tests

1. Locate the test to modify inside the `test/` folder in the component's directory.
2. If a test exists, modify the test by adding an example to reproduce the problem fixed or feature added.
3. If a new test is needed, the easiest way is to copy the `basic/` directory from the component's `test/` directory, rename it, and edit the content in both the `index.html` and `e2e.ts` file (see [Screenshot Tests](#screenshot-tests) for more information on this file).
4. The `preview/` directory is used in the documentation as a demo. Only update this test if there is a bug in the test or if the API has a change that hasn't been updated in the test.

##### Screenshot Tests

1. If the test exists in screenshot, there will be a file named `e2e.ts` in the directory of the test.
2. A screenshot test can be added by including this file and adding one or more `test()` calls that include a call to `page.compareScreenshot()`. See [Stencil end-to-end testing](https://stenciljs.com/docs/end-to-end-testing) and existing tests in `core/` for examples.
3. **Important:** each `test()` should have only one screenshot (`page.compareScreenshot()`) call **or** it should check the expect at the end of each test. If there is a mismatch it will fail the test which will prevent the rest of the test from running, i.e. if the first screenshot fails the remaining screenshot calls would not be called _unless_ they are in a separate test or all of the expects are called at the end.
4. To run screenshot locally, use the following command: `npm run test.screenshot`.
    - To run screenshot for a specific test, pass the path to the test or a string to search for.
    - For example, running all `alert` tests: `npm run test.screenshot alert`.
    - Or, running the basic `alert` tests: `npm run test.screenshot src/components/alert/test/basic/e2e.ts`.


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
