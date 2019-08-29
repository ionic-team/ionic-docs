---
previousText: 'Votre première application : Stylisation'
previousUrl: '/docs/angular/your-first-app/theming'
nextText: 'Navigation'
nextUrl: '/docs/angular/navigation'
contributors:
  - elylucas
---

# Cycle de vie d'une page Ionic

Ce guide couvre la façon dont le cycle de vie de la page fonctionne dans une application construite avec Ionic et Angular.

![Démo des événements du cycle de vie avec Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.png)

## Événements du Cycle de vie avec Angular

Ionic s'engage dans les événements de cycle de vie fournis par Angular. Les deux événements d'Angular les plus couramment utilisés sont :

| Nom de l'événement | Description                                                                                                                                                                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`         | Démarré une fois lors de l'initialisation du composant. Cet événement peut être utilisé pour initialiser les variables de classe et faire des appels à des services qui ne doivent être effectués qu'une seule fois. |
| `ngOnDestroy`      | Déclenché le processus avant la destruction de la vue. Utile pour le nettoyage comme se désabonner des observables.                                                                                                  |


Pour plus d'informations sur les événements du cycle de vie des composants Angular, visitez la [documentation les concernant](https://angular.io/guide/lifecycle-hooks).

## Événements liés à une page Ionic

En plus des événements du cycle de vie de Angular, Ionic Angular fournit quelques événements supplémentaires que vous pouvez utiliser :

| Nom de l'événement | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `ionViewWillEnter` | Déclenché lorsque le routage du composant pour afficher la vue est prêt. |
| `ionViewDidEnter`  | Déclenché lorsque le routage du composant a fini d'être exécuté.         |
| `ionViewWillLeave` | Déclenché lorsque le routage du composant est entrain d'être exécuté.    |
| `ionViewDidLeave`  | Déclenché lorsque le routage du composant a fini d'être exécuté.         |


La différence entre `ionViewWillEnter` et `ionViewDidEnter` réside dans le moment d'exécution. The former fires right after `ngOnInit` but before the page transition begins, and the latter directly after the transition ends.

Pour `ionViewWillLeave` et `ionViewDidLeave`, `ionViewWillLeave` est directement exécuté avant le début de la transition de la page actuelle, et `ionViewDidLeave` ne se fait appeler qu'après que la nouvelle page soit transitée avec succès (après les nouvelles pages `ionViewDidEnter` exécutées).

![Démo des événements du cycle de vie avec Ionic](/docs/assets/img/guides/lifecycle/ioniclifecycle.gif)

## Comment Ionic exécute les évènements liés au Cycle de Vie d'une Page

Ionic utilise un composant de routage, appelée `<ion-router-outlet />`. C'est composant étendu de Angular `<router-outlet />` avec quelques fonctionnalités supplémentaires pour permettre de meilleures expériences pour les appareils mobiles.

Quand une application est encapsulée dans `<ion-router-outlet />`, Ionic traite la navigation un peu différemment. Lorsque vous naviguez vers une nouvelle page, Ionic conservera l'ancienne page dans le DOM existant, mais la masquera de votre vue et la transition de la nouvelle page. Nous le faisons suite à deux raisons:

1) Nous pouvons maintenir l'état de l'ancienne page (données sur l'écran, la position du défilement, etc..)  
2) Nous pouvons fournir une transition plus douce vers la page précédente car elle est déjà là et n'a pas besoin d'être recréée.

Les pages ne sont supprimées que du DOM lorsqu'on utilise la méthode "pop()", par exemple, en appuyant sur le bouton retour dans l'interface ou sur le bouton retour des navigateurs.

Because of this special handling, the `ngOnInit` and `ngOnDestroy` methods might not fire when you would usually think they should.

`ngOnInit` ne s'exécutera que chaque fois que la page est fraîchement créée, mais pas lorsque vous naviguez à nouveau vers la page. For instance, navigating between each page in a tabs interface will only call each page's `ngOnInit` method once, but not on subsequent visits. `ngOnDestroy` ne s'exécute que lorsqu'on fait appel à la méthode "pop()" dans une page.

## Gardes-routes

In Ionic 3, there were a couple of additional life cycle methods that were useful to control when a page could be entered (`ionViewCanEnter`) and left (`ionViewCanLeave`). These could be used to protect pages from unauthorized users and to keep a user on a page when you don't want them to leave (like during a form fill).

These methods were removed in Ionic 4 in favor of using Angular's Route Guards.

A route guard helps determine if a particular action can be taken against a route. They are classes that implement a certain interface. The `CanActivate` and `CanDeactivate` interfaces can be used to implement the same type of logic that the removed events `ionViewCanEnter` and `ionViewCanLeave` did.

```typescript
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

To use this guard, add it to the appropriate param in the route definition:

```typescript
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

For more info on how to use route guards, go to Angular's [router documentation](https://angular.io/guide/router).

## Guidance for Each Life Cycle Method

Below are some tips on uses cases for each of the life cycle events.

- `ngOnInit` - Initialize your component and load data from services that don't need refreshing on each subsequent visit.
- `ionViewWillEnter` - Since `ionViewWillEnter` is called every time the view is navigated to (regardless if initialized or not), it's a good method to load data from services. However, if your data comes back during the animation, it can start lots of DOM manipulation, which can cause some janky animations.
- `ionViewDidEnter` - If you see performance problems from using `ionViewWillEnter` when loading data, you can do your data calls in `ionViewDidEnter` instead. This event won't fire until after the page is visible by the user, however, so you might want to use either a loading indicator or a skeleton screen, so content doesn't flash in un-naturally after the transition is complete.
- `ionViewWillLeave` - Can be used for cleanup, like unsubscribing from observables. Since `ngOnDestroy` might not fire when you navigate from the current page, put your cleanup code here if you don't want it active while the screen is not in view.
- `ionViewDidLeave` - When this event fires, you know the new page has fully transitioned in, so any logic you might not normally do when the view is visible can go here.
- `ngOnDestroy` - Cleanup logic for your pages that you don't want to clean up in `ionViewWillLeave`.