---
previousText: 'Introduction'
previousUrl: '/docs/appflow/automation/intro'
nextText: 'Environnements'
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

![Choix d'un type d'automatisation](/docs/assets/img/appflow/ss-automation-create-type.png)

#### Des champs

* ** Name: ** un nom pour identifier la tâche d'automatisation.
* ** Git Branch: ** la branche qui déclenchera l'automatisation. Cela exécutera une génération chaque fois qu'un ` git push ` est effectué sur la branche spécifiée.
* ** Type d'automatisation **: type de travail exécuté par cette automatisation.

En plus des branches nom et git, les automatisations ont un certain nombre de personnalisations disponibles selon le type de travail sélectionné.

##### Remarque sur la dénomination de Git Branch

Il est possible de spécifier un ou plusieurs caractères génériques ` * ` pour faire correspondre plusieurs branches au sein d'une seule automatisation; par exemple:

* une branche simplement définie sur ` * ` correspondra à toutes les branches et déclenchera l'automatisation pour toute poussée Git unique
* une branche définie sur ` dev * ` correspondra à toute branche dont le nom commence par ` dev `, y compris ` dev ` lui-même
* une branche définie sur ` dev * autre ` correspondra à n'importe quelle branche avec un nom commençant par ` dev ` et se terminant par ` autre ` y compris ` devother `

### Automatisation des packages

Les automatisations de packages créent des versions natives qui peuvent être téléchargées et exécutées sur des appareils. Ils ont les personnalisations suivantes:

![Création d'une automatisation de package](/docs/assets/img/appflow/ss-automation-create-package.png)

#### Des champs

* ** Environnement: ** [ environnement de construction personnalisé ](/docs/appflow/environments/#custom-environments) (le cas échéant) à utiliser lorsque cette automatisation est déclenchée.
* ** Configuration native: ** La [ configuration native ](/docs/appflow/package/intro#native-configs) (le cas échéant) à utiliser lorsque cette automatisation est déclenchée.
* ** Plateforme cible: ** La plateforme ciblée peut être Android ou iOS (pour Xcode 8 ou 9)
* ** Type de build: ** Type de build à créer. Les options dépendent de la plate-forme sélectionnée.
* ** Profil de sécurité **: quel profil de sécurité utiliser. En savoir plus à leur sujet [ ici ](/docs/appflow/package/credentials).
* ** Webhook: ** (facultatif) Si spécifié, un POST contenant des informations sur les versions terminées sera envoyé à l'URL saisie. En savoir plus sur leur contenu [ ici ](/docs/appflow/automation/webhooks).

### Web Automations

Les automatisations Web créent la partie javascript d'une application et une interface avec le service [ Déployer ](/docs/appflow/deploy/intro) pour activer les mises à jour en direct des applications.

![Création d'une automatisation Web](/docs/assets/img/appflow/ss-automation-create-web.png)

#### Des champs

* ** Environnement: ** [ environnement de construction personnalisé ](/docs/appflow/environments/#custom-environments) (le cas échéant) à utiliser lorsque cette automatisation est déclenchée.
* ** Canal: ** le [ Déployer le canal ](/docs/appflow/deploy/channels) où les versions Web de cette automatisation seront attribuées.
* ** Webhook: ** (facultatif) Si spécifié, un POST contenant des informations sur les versions terminées sera envoyé à l'URL saisie. En savoir plus sur leur contenu [ ici ](/docs/appflow/automation/webhooks).