# Hygen templates

The templates in this directory are intended to be used with [hygen](https://www.hygen.io/) to generate boilerplate files. Check out [the root package.json](../package.json) to see if there are any custom commands to use them (e.g. `npm run playground:new`). You can also run e.g. `hygen playground new` to use a generator.

Some helpful docs links for updating/creating templates:

- [enquirer](https://github.com/enquirer/enquirer#toggle-prompt) for building command line prompts
- [inflection](https://www.hygen.io/docs/templates#helpers-and-inflections) and [change case](https://www.hygen.io/docs/templates#change-case-helpers) for e.g. changing the case of variables submitted via the prompts

# New playground template

## Generation

To create a new playground, run `npm run playground:new`. This will walk you through some prompts to decide what files for the generator to create for the playground, and what their paths should be.

The path defaults to `basic`. If there is already a basic playground, you'll want to input a different path for the playground.

The CSS option will add extra files if you need to include custom CSS in your playground.

If you need a component for multiple versions of Ionic Framework, you (currently) need to run the generator once for each version.

## Usage

Once you've generated your playground, you need to add it to the main markdown file in the docs (e.g. [docs/api/button.md](../docs/api/button.md)) by doing something similar to the following example:

```
## Feature

import Feature from '@site/static/usage/v8/button/feature/index.md';

<Feature />
```
