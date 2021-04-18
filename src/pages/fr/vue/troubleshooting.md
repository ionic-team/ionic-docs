---
previousText: 'Les tests'
previousUrl: '/docs/vue/testing'
---

# Résolution des problèmes

Ce guide couvre certains des problèmes les plus courants que vous pourriez rencontrer lorsque vous développez avec Ionic Vue.

Vous avez une question qui, selon vous, devrait être traitée ici ? <a href="https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">Faites-le nous savoir !</a>

## Échec de la résolution du composant

```shell
[Vue warn]: Failed to resolve component: ion-button 
```

Si vous voyez cet avertissement, il est probable que vous n'ayez pas importé votre composant depuis `@ionic/vue`. Par défaut, tous les composants Ionic Vue sont enregistrés localement, ce qui signifie que vous devez les importer chaque fois que vous voulez les utiliser.

Sans importer le composant, vous n'obtiendrez que le composant Web sous-jacent, et les fonctionnalités spécifiques à Vue telles que `v-model` ne fonctionneront pas.

Pour résoudre ce problème, vous devez importer le composant de `@ionic/vue` et le fournir à votre composant Vue :

```html
<template>
  <ion-button>Hello World</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton }
  });
</script>
```

Vous préférez enregistrer vos composants globalement une seule fois? Nous vous couvrons. Notre [Optimisation de votre Guide de Construction](./quickstart#optimizing-your-build) vous montre comment enregistrer les composants Ionic Vue globalement ainsi que les inconvénients potentiels pour être au courant de l'utilisation de cette approche.

## Les attributs des slots sont obsolètes

```shell
`slot` attributes are deprecated  vue/no-deprecated-slot-attribute
```

Les slots qui sont utilisés dans Ionic Vue sont <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">les slots de composants Web</a>, qui sont différents des slots utilisés dans Vue 2. Malheureusement, les API des deux sont très similaires, et votre linter est probablement en train de confondre les deux.

Tous les lanceurs Ionic Vue embarquent avec cette règle désactivée, mais vous pouvez le faire vous-même en ajoutant ce qui suit à votre `. fichier slintrc.js`:

```js
module.exports = {
  rules: {
    'vue/no-deprecated-slot-attribute': 'off'
  }
}
```

Si vous utilisez VSCode et que le plugin Vetur est installé, vous recevez probablement cet avertissement à cause de Vetur, et non d'ESLint. Par défaut, Vetur charge les règles de linting par défaut de Vue 3 et ignore toute règle ESLint personnalisée.

Pour résoudre ce problème, vous devrez désactiver la validation des modèles de Vetur avec `vetur.validation.template : false`. Voir le <a href="https://vuejs.github.io/vetur/guide/linting-error.html#linting" target="_blank" rel="noopener">Guide de linting de Vetur</a> pour plus d'informations.


## La méthode sur le composant n'est pas une fonction

Afin d'accéder à une méthode sur un composant Ionic Framework dans Vue, vous devrez d'abord accéder à l'instance du composant Web sous-jacent :

```js
// ✅ Ceci est correct
ionContentRef.value.$el.scrollToBottom(); 

// ❌ Ceci est incorrect et entraînera une erreur.
ionContentRef.value.scrollToBottom(); 
```

Dans d'autres intégrations de frameworks comme Ionic React, cela n'est pas nécessaire car tout `ref` que vous fournissez est automatiquement transmis à l'instance de composant Web sous-jacente. Nous ne sommes pas en mesure de faire la même chose ici en raison des limitations de la façon dont Vue gère les références.

Consultez le [Guide de démarrage rapide](./quickstart#calling-methods-on-components) pour plus d'informations.

## Les transitions de page ne fonctionnent pas

Pour que les transitions de page fonctionnent correctement, chaque page doit avoir un composant `ion-page` à la racine :

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { 
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent, 
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar
    }
  });
</script>
```

Voir la [documentation de IonPage](./navigation#ionpage) pour plus d'informations.