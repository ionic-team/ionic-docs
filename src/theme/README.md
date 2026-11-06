# Theme folder

This folder is used to override the base docusaurus theme. It houses [swizzled components](https://docusaurus.io/docs/swizzling). Components should NOT be swizzled unless absolutely necessary to allow for changes in future versions. If it is possible to shallow swizzle a component using the `@theme-original` alias, then that should be heavily considered.

Wrapped components import from `@theme-original` and are our own code, so they follow the repo's Prettier config. Ejected components are full copies of upstream, so each one is listed in `.prettierignore` by path to keep upstream's formatting so the copy can still be compared against `@docusaurus/theme-classic`. Add that entry as part of ejecting a component. Nothing in CI checks for it, so a missing entry means Prettier reformats the copy and the difference from upstream is lost without anyone noticing.

All code updates should be marked with comments to allow more seamless version updating.

- Original theme: [`@docusaurus/theme-classic`](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic)
- [Original theme source](https://github.com/facebook/docusaurus/tree/v3.10.2/packages/docusaurus-theme-classic/src/theme)

## Styles

Where a component's styles live depends on who renders the markup:

- **Ejected:** the markup is ours, so its styles live next to it. Keep a copy of upstream's `styles.module.css`, the same file `docusaurus swizzle --eject` creates, and add our rules between `/* CUSTOM CODE */` and `/* CUSTOM CODE END */`, leaving upstream's rules as they are.
- **Wrapped:** the wrapper's own markup is styled in its own `styles.module.css`. The upstream markup it renders inside stays upstream's, so overrides for it go in [src/css/theme](/src/css/theme).
- **Not swizzled:** overrides go in [src/css/theme](/src/css/theme).

When a component that already has a file in `src/css/theme` gets swizzled, wrapping it leaves that file in place. Ejecting it moves the file's rules into the ejected copy's `styles.module.css` and removes the file along with its `@use` in `custom.scss`.
