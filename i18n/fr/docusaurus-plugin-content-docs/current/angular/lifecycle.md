---
previousText: 'Your First App'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Navigation'
nextUrl: '/docs/angular/navigation'
contributors:
  - elylucas
---

# Cycle de vie d'une page Ionic

Ce guide couvre la façon dont le cycle de vie de la page fonctionne dans une application construite avec Ionic et Angular.

![Démo des événements du cycle de vie Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.png)

## Evénements du cycle de vie d'Angular

Ionic s'engage dans les événements de cycle de vie fournis par Angular. Les deux événements d'Angular les plus couramment utilisés sont :

| Nom de l'événement | Description                                                                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`         | Démarré une fois lors de l'initialisation du composant. Cet événement peut être utilisé pour initialiser les variables de classe et faire des appels à des services qui ne doivent être effectués qu'une seule fois. |
| `ngOnDestroy`      | Déclenché le processus avant la destruction de la vue. Utile pour le nettoyage comme se désabonner des observables.                                                                                                  |


Pour plus d'informations sur les événements du cycle de vie des composants Angular, visitez la [documentation les concernant](https://angular.io/guide/lifecycle-hooks).

> Les composants qui utilisent `ion-nav` ou `ion-router-outlet` ne doivent pas utiliser la stratégie de détection de changement `OnPush`. Cela empêchera les crochets de cycle de vie tels que `ngOnInit` de tirer. En outre, les changements d'état asynchrones peuvent ne pas se produire correctement.

## Événements liés à une page Ionic

En plus des événements du cycle de vie de Angular, Ionic Angular fournit quelques événements supplémentaires que vous pouvez utiliser :

| Nom de l'événement | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `ionViewWillEnter` | Déclenché lorsque le routage du composant pour afficher la vue est prêt. |
| `ionViewDidEnter`  | Déclenché lorsque le routage du composant a fini d'être exécuté.         |
| `ionViewWillLeave` | Déclenché lorsque le routage du composant est entrain d'être exécuté.    |
| `ionViewDidLeave`  | Déclenché lorsque le routage du composant a fini d'être exécuté.         |


La différence entre `ionViewWillEnter` et `ionViewDidEnter` réside dans le moment d'exécution. Le premier se déclenche juste après `ngOnInit` mais avant le début de la transition de page et le second directement après la fin de la transition.

Pour `ionViewWillLeave` et `ionViewDidLeave`, `ionViewWillLeave` est directement exécuté avant le début de la transition de la page actuelle, et `ionViewDidLeave` ne se fait appeler qu'après que la nouvelle page soit transitée avec succès (après les nouvelles pages `ionViewDidEnter` exécutées).

![Démo des événements du cycle de vie avec Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.gif)

## Comment Ionic exécute les évènements liés au Cycle de Vie d'une Page

Ionic utilise un composant de routage, appelée `<ion-router-outlet />`. C'est composant étendu de Angular `<router-outlet />` avec quelques fonctionnalités supplémentaires pour permettre de meilleures expériences pour les appareils mobiles.

Quand une application est encapsulée dans `<ion-router-outlet />`, Ionic traite la navigation un peu différemment. Lorsque vous naviguez vers une nouvelle page, Ionic conservera l'ancienne page dans le DOM existant, mais la masquera de votre vue et la transition de la nouvelle page. Nous le faisons suite à deux raisons:

1) Nous pouvons maintenir l'état de l'ancienne page (données sur l'écran, la position du défilement, etc..)  
2) Nous pouvons fournir une transition plus douce vers la page précédente car elle est déjà là et n'a pas besoin d'être recréée.

Les pages ne sont supprimées que du DOM lorsqu'on utilise la méthode "pop()", par exemple, en appuyant sur le bouton retour dans l'interface ou sur le bouton retour des navigateurs.

En raison de ce traitement spécial, les méthodes `ngOnInit` et `ngOnDestroy` risquent de ne pas se déclencher alors que vous le pensez normalement.

`ngOnInit` ne s'exécutera que chaque fois que la page est fraîchement créée, mais pas lorsque vous naviguez à nouveau vers la page. Par exemple, la navigation entre chaque page dans une interface à onglets n'appelle la méthode `ngOnInit` de chaque page qu'une seule fois, mais pas lors de visites ultérieures. `ngOnDestroy` ne s'exécute que lorsqu'on fait appel à la méthode "pop()" dans une page.

## Gardes-routes

En Ionic 3, il y avait quelques méthodes de cycle de vie supplémentaires qui étaient utiles pour contrôler lorsqu'une page peut s'exécuter (`ionViewCanEnter`) et est entrain de finir son exécution(`ionViewCanLeave`). Ces pages peuvent être utilisées pour protéger les pages des utilisateurs non autorisés et pour garder un utilisateur sur une page lorsque vous ne voulez pas qu'ils quittent (comme pendant le remplissage d'un formulaire).

Ces méthodes ont été supprimées d'Ionic 4 en faveur de l'utilisation des gardes-routes d'Angular.

Un gardien de route permet de déterminer si une action particulière peut être prise contre la navigation vers une route. Ce sont des classes qui implémentent une certaine interface. Les interfaces `CanActivate` et ` CanDeactivate ` peuvent être utilisées pour implémenter le même type de logique que les événements supprimés `ionViewCanEnter` et `ionViewCanLeave`.

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

Pour utiliser cette garde, ajoutez-le au paramètre approprié dans la définition de la route :

```typescript
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

Pour plus d'informations sur la façon d'utiliser les gardes-routes, allez à la documentation du routeur Angular [](https://angular.io/guide/router).

## Guide d'utilisation pour chaque mode de cycle de vie

Voici quelques conseils sur l'utilisation de chacun des événements liés au cycle de vie.

- `ngOnInit` - Initialisez votre composant et chargez les données des services qui n'ont pas besoin de se rafraîchir lors de chaque visite ultérieure.
- `ionViewWillEnter` - `ionViewWillEnter` est appelée à chaque fois que la vue apparaît (indépendamment de si elle est initialisée ou non). C'est une bonne méthode de chargement des données à partir des services. Cependant, si vos données reviennent pendant l'animation, il peut démarrer beaucoup de manipulation DOM, ce qui peut causer des animations de janky.
- `ionViewDidEnter` - Si vous voyez des problèmes de performance d'utiliser `ionViewWillEnter` lors du chargement des données, vous pouvez effectuer vos appels de données dans `ionViewDidEnter` à la place. Cet événement ne sera pas déclenché tant que la page ne soit visible par l'utilisateur, cependant, vous pouvez donc utiliser un indicateur de chargement ou un skeleton, donc le contenu ne s'affiche pas naturellement après la transition.
- `ionViewWillLeave` - Peut être utilisée pour le nettoyage, comme se désabonner des observables. Puisque `ngOnDestroy` ne peut pas être exécutée lorsque vous naviguez depuis la page actuelle, mettez votre code de nettoyage ici si vous ne voulez pas qu'il soit actif pendant que la vue n'est pas affichée.
- `ionViewDidLeave` - Lorsque cet événement se déclenche, vous savez que la nouvelle page a complètement transité, donc toute logique que vous ne pouvez pas faire normalement lorsque la vue est visible peut se faire ici.
- `ngOnDestroy` - Réinitialiser la logique de vos pages dans `ionViewWillLeave`.