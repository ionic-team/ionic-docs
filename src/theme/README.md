# Theme folder

This folder is used to override the base docusaurus theme. It houses [swizzled components](https://docusaurus.io/docs/swizzling). Components should NOT be swizzled unless absolutely necessary to allow for changes in future versions. If it is possible to shallow swizzle a component using the `@theme-original` alias, then that should be heavily considered.

Wrapped components import from `@theme-original` and are our own code, so they follow the repo's Prettier config. Ejected components are full copies of upstream, so each one is listed in `.prettierignore` by path to keep upstream's formatting so the copy can still be compared against `@docusaurus/theme-classic`. Add that entry as part of ejecting a component. Nothing in CI checks for it, so a missing entry means Prettier reformats the copy and the difference from upstream is lost without anyone noticing.

All code updates should be marked with comments to allow more seamless version updating. The styles file for components that have been unsafely swizzled should absolutely not be edited. All styling should be done from the [component partials](/src/styles/components).

- Original theme: [`@docusaurus/theme-classic`](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic)
- [Original theme source](https://github.com/facebook/docusaurus/tree/v3.10.2/packages/docusaurus-theme-classic/src/theme)
