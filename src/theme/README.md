# Theme folder

This folder is used to override the base docusaurus theme. It houses [swizzled components](https://docusaurus.io/docs/swizzling). Components should NOT be swizzled unless absolutely necessary to allow for changes in future versions. If it is possible to shallow swizzle a component using the `@theme-original` alias, then that should be heavily considered. Swizzled components should be added to the prettier ignore and all code updates should be marked with comments to allow more seamless version updating. The styles file for components that have been unsafely swizzle should absolutely not be edited. All styling should be done from the [component partials](/src/styles/components).

- Original theme: [`@docusaurus/theme-classic`](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic)
- [Original theme source](https://github.com/facebook/docusaurus/tree/26ae4164d6f90c231c6687363a3907b5f9f172b8/packages/docusaurus-theme-classic/src/theme)
