---
previousText: 'Introduction'
previousUrl: '/docs/appflow/automation/intro'
nextText: 'Environments'
nextUrl: '/docs/appflow/automation/environments'
---

# Utiliser l'automatisation

## Gestion des automatisations

La création et la personnalisation des automatisations est simple. Pour commencer, naviguez vers l'onglet `Automate` dans l'application désirée.

Pour **créer une nouvelle automatisation**, cliquez sur le bouton `Nouvelle automatisation` en haut à droite du `Automatisez` tableau de bord. Lorsque vous cliquez sur le bouton, le formulaire de personnalisation de l'automatisation apparaîtra, il dispose de plusieurs champs pour personnaliser l'automatisation (En savoir plus [ci-dessous](#customizing-automations)).

Pour **modifier une automatisation**, cliquez sur les trois points à côté de celui que vous souhaitez modifier.

## Personnalisation des automatisations

Il existe un certain nombre de personnalisations disponibles pour spécifier le comportement spécifique d'une automatisation donnée. Ils sont indiqués sur le formulaire d'automatisation de création / modification ci-dessous.

### Informations d'automatisation de base

Toutes les automatisations nécessitent un nom et une branche git pour déclencher. Chaque fois que le code est poussé vers la branche sélectionnée, l'automatisation s'exécute.

![Choosing an Automation Type](/docs/assets/img/appflow/ss-automation-create-type.png)

#### Des champs

* ** Name: ** un nom pour identifier la tâche d'automatisation.
* ** Git Branch: ** la branche qui déclenchera l'automatisation. Cela exécutera une génération chaque fois qu'un ` git push ` est effectué sur la branche spécifiée.
* ** Type d'automatisation **: type de travail exécuté par cette automatisation.

En plus des branches nom et git, les automatisations ont un certain nombre de personnalisations disponibles selon le type de travail sélectionné.

##### Remarque sur la dénomination de Git Branch

It is possible to specify one or multiple `*` wildcards character to match multiple branches within a single automation; for instance:

* a branch simply set to `*` will match all the branches and will trigger the automation for any single git push
* a branch set to `dev*` will match any branch with a name starting with `dev` including `dev` itself
* a branch set to `dev*other` will match any branch with a name starting with `dev` and ending with `other` including `devother`

### Package Automations

Package automations create native builds which can be downloaded and run on devices. They have the following customizations:

![Creating a package automation](/docs/assets/img/appflow/ss-automation-create-package.png)

#### Fields

* **Environment:** The [custom build environment](/docs/appflow/environments/#custom-environments) (if any) to use when this automations is triggered.
* **Native Config:** The [native config](/docs/appflow/package/intro#native-configs) (if any) to use when this automations is triggered.
* **Target Platform:** The platform being targeted, can be Android or iOS (for either Xcode 8 or 9)
* **Build Type:** The type of build to create. Options depend on the selected platform.
* **Security Profile:** Which security profile to use. Learn more about them [here](/docs/appflow/package/credentials).
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL. Learn more about their content [here](/docs/appflow/automation/webhooks).

### Web Automations

Web automations build the javascript portion of an application and interface with the [Deploy](/docs/appflow/deploy/intro) service to enable live app updates.

![Creating a web automation](/docs/assets/img/appflow/ss-automation-create-web.png)

#### Fields

* **Environment:** The [custom build environment](/docs/appflow/environments/#custom-environments) (if any) to use when this automations is triggered.
* **Channel:** The [Deploy Channel](/docs/appflow/deploy/channels) where web builds from this automation will be assigned.
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL. Learn more about their content [here](/docs/appflow/automation/webhooks).