---
title: Using Automations
sidebar_label: Create Automations
previousText: 'Introduction'
previousUrl: '/docs/appflow/automation/intro'
nextText: 'Environments'
nextUrl: '/docs/appflow/automation/environments'
---

## Gestion des automatisations

La création et la personnalisation des automatisations est simple. Pour commencer, naviguez vers l'onglet `Automate` dans l'application désirée.

Pour **créer une nouvelle automatisation**, cliquez sur le bouton `Nouvelle automatisation` en haut à droite du `Automatisez` tableau de bord. Lorsque vous cliquez sur le bouton, le formulaire de personnalisation de l'automatisation apparaîtra, il dispose de plusieurs champs pour personnaliser l'automatisation (En savoir plus [ci-dessous](#customizing-automations)).

Pour **modifier une automatisation**, cliquez sur les trois points à côté de celui que vous souhaitez modifier.

## Personnalisation des automatisations

Il existe un certain nombre de personnalisations disponibles pour spécifier le comportement spécifique d'une automatisation donnée. Ils sont indiqués sur le formulaire d'automatisation de création / modification ci-dessous.

### Informations d'automatisation de base

Toutes les automatisations nécessitent un nom et une branche git pour déclencher. Chaque fois que le code est poussé vers la branche sélectionnée, l'automatisation s'exécute.

![Choix d'un type d'automatisation](/docs/assets/img/appflow/ss-automation-create-type.png)

#### Des champs

* ** Name: ** un nom pour identifier la tâche d'automatisation.
* ** Git Branch: ** la branche qui déclenchera l'automatisation. Cela exécutera une génération chaque fois qu'un ` git push ` est effectué sur la branche spécifiée.
* **Target Platform:** The platform of the jobs this automation will run.

En plus des branches nom et git, les automatisations ont un certain nombre de personnalisations disponibles selon le type de travail sélectionné.

##### Remarque sur la dénomination de Git Branch

Il est possible de spécifier un ou plusieurs caractères génériques ` * ` pour faire correspondre plusieurs branches au sein d'une seule automatisation; par exemple:

* une branche simplement définie sur ` * ` correspondra à toutes les branches et déclenchera l'automatisation pour toute poussée Git unique
* une branche définie sur ` dev * ` correspondra à toute branche dont le nom commence par ` dev `, y compris ` dev ` lui-même
* une branche définie sur ` dev * autre ` correspondra à n'importe quelle branche avec un nom commençant par ` dev ` et se terminant par ` autre ` y compris ` devother `

### iOS and Android Automations

iOS and Android automations create native builds which can be downloaded and run on devices. Ils ont les personnalisations suivantes:

![Creating a ios or android automation](/docs/assets/img/appflow/ss-automation-create-package.png)

#### Des champs

* **Build Stack:** The [build stack](/docs/appflow/build-stacks) where the job created by this automation will run.
* **Build Type:** The type of build to create. Options depend on the selected platform.
* **Signing Certificate:** Which signing certificate to use. Learn more about them [here](/docs/appflow/package/credentials).
* **Environment:** The [custom build environment](/docs/appflow/environments/#custom-environments) (if any) to use when this automations is triggered.
* **Native Config:** The [native config](/docs/appflow/package/intro#native-configs) (if any) to use when this automations is triggered.
* **Webhook:** (optional) If enabled, a POST with information about completed builds will be sent to the entered URL. En savoir plus sur leur contenu [ ici ](/docs/appflow/automation/webhooks).

### Web Automations

Les automatisations Web créent la partie javascript d'une application et une interface avec le service [ Déployer ](/docs/appflow/deploy/intro) pour activer les mises à jour en direct des applications.

![Création d'une automatisation Web](/docs/assets/img/appflow/ss-automation-create-web.png)

#### Des champs

* ** Environnement: ** [ environnement de construction personnalisé ](/docs/appflow/environments/#custom-environments) (le cas échéant) à utiliser lorsque cette automatisation est déclenchée.
* **Web preview** (optional) If enabled, a web preview of the app will be published to a public URL.
* **Live update:** (optional) The [Deploy Channel](/docs/appflow/deploy/channels) where web builds from this automation will be assigned.
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL. Learn more about their content [here](/docs/appflow/automation/webhooks).

##### Note about Build Stacks

It is possible to choose one of two different options for the Build Stack:

1. always be on the latest Build Stack 
2. always be on a specific Build Stack.

If the 1. is chosen, the automation will always create jobs using the latest build stack. When the "latest" build stack is updated to a newer version nothing needs to be done and the automation will keep working.

If the 2. is chosen, the automation will always create jobs using the specified build stack until the build stack is deprecated. A clear deprecation date will be shown in the dashboard to give users time to update the automation. If a new build stack has not been chosen by the deprecation date, the automation will be automatically updated to the latest build stack on the deprecation date.