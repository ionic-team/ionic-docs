# Hygen templates

The templates in this directory are intended to be used with [hygen](https://www.hygen.io/) to generate boilerplate files. Check out [the root package.json](../package.json) to see if there are any custom commands to use them (e.g. `npm run playground:new`). You can also run e.g. `hygen playground new` to use a generator.

Some helpful docs links for updating/creating templates:

- [enquirer](https://github.com/enquirer/enquirer#toggle-prompt) for building command line prompts
- [inflection](https://www.hygen.io/docs/templates#helpers-and-inflections) and [change case](https://www.hygen.io/docs/templates#change-case-helpers) for e.g. changing the case of variables submitted via the prompts

# New playground template

## Generation

To create a new playground, run `npm run playground:new`. This will walk you through some prompts to decide what files for the generator to create for the playground, and what their paths should be:

- **Component or guide:** a component playground goes under the component's name, such as `button`. Any other playground goes under a guide section, such as `animations`, and starts with an `ion-card`.
- **Path:** the folder for the playground under that name, such as `basic` or `theming/colors`. Use `basic` for a component's first playground.
- **Version:** the Ionic Framework version the playground is for.
- **CSS:** adds extra files if you need to include custom CSS in your playground.

If you need a component for multiple versions of Ionic Framework, you (currently) need to run the generator once for each version.

## Usage

Once you've generated your playground, you need to add it to the main markdown file in the docs (e.g. [docs/api/button.mdx](../docs/api/button.mdx)). The generator prints the snippet to paste when it finishes, which looks similar to the following example:

```
## Feature

import Feature from '@site/static/usage/v9/button/feature/index.mdx';

<Feature />
```
