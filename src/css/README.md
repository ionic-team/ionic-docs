# CSS folder

`custom.scss` is the global stylesheet, loaded through `customCss` in [docusaurus.config.js](/docusaurus.config.js). It holds the Infima variable overrides and the base element styles.

The `theme` folder overrides markup rendered by `@docusaurus/theme-classic`. Each file is named after the component it styles, following the theme's own paths, for example `theme/Navbar/MobileSidebar.scss` for `@theme/Navbar/MobileSidebar`. `custom.scss` brings them in with the Sass `@use` rule.

Markup rendered by our own swizzled components keeps its styles next to the component in [src/theme](/src/theme), the same way Docusaurus does. A wrapped component's module can also style the upstream markup it renders, scoped under the wrapper's class, when the rule only applies inside that wrapper. For example, `src/theme/TOC/styles.module.css` styles the Edit this page link only where the TOC renders it, while `theme/EditThisPage.scss` styles the link everywhere. Refer to [src/theme/README.md](/src/theme/README.md).

## Writing an override

Start each file with its themed variables, then the overrides.

Light themed variables can be targeted using the following selector:

```css
html[data-theme='light'] {
  --ifm-menu-color-background-active: red;
}
```

Dark themed variables can be targeted using the following selector:

```css
html[data-theme='dark'] {
  --ifm-menu-color-background-active: blue;
}
```

Global variables can be overridden at root like this:

```css
:root {
  --sidebar-spacing-horizontal: 1.5rem;
}
```

`#__docusaurus` is the root element the site renders into, so nesting a rule under it matches the same elements but adds an ID's specificity. Use it when a rule overrides a property the theme or Infima already sets on that element. Their rules often tie with ours, and a tie goes to whichever stylesheet loads last, which can differ between dev and production builds. The ID makes ours win either way.

Leave it out for variables, for elements the theme does not style, and in our own CSS modules. A module class on an element that also has an Infima class, such as `row` or `col`, still ties with Infima's rule, so nest it under `:global(#__docusaurus)` if the losing value would matter. Once a rule carries the ID, anything that later overrides it needs the ID too, so add it only where there is a conflict.

```scss
// The theme's rule: .sidebar_abc { padding: 0.5rem; }  specificity 0,1,0

// Ties with the theme's rule, so it may lose depending on load order: 0,1,0
[class^='sidebar_'] {
  padding: 1rem;
}

// Always wins: 1,1,0
#__docusaurus {
  [class^='sidebar_'] {
    padding: 1rem;
  }
}
```

Prefer the stable `theme-` class names from `ThemeClassNames` over the hashed CSS module classes, such as `[class^='docItemCol_']`, since a hashed class can change between Docusaurus versions. Many elements have no `theme-` class, such as the admonition heading, so a hashed selector is the only option there. `[class^='name_']` only matches when that class comes first on the element, so check the upstream markup, or use `[class*='name_']` when other classes come before it.
