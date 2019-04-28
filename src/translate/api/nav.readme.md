# ion-nav

Nav is a standalone component for loading arbitrary components and pushing to new components on to the stack.
Unlike RouterOutlet, Nav is not tied to a particular router. Meaning that if we load a Nav component, and push other components to the stack, they will not affect the apps overall router. This fits use cases where you could have a modal, which needs it's own sub-navigation, but not make it tied to the apps URL.

