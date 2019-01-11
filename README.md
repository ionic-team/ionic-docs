# Ionic Docs

The official [Ionic](https://ionicframework.com) documentation, built with [Stencil](https://stenciljs.com).

---

## Getting Started

To run the development server:

```shell
npm install
npm start
```

## Editing Content

The content is written as Markdown and stored in `src/pages`. Each Markdown file corresponds to a route. For example, `src/pages/intro.md` contains the content for the route `/docs/intro`.

After you've made changes, you'll need to rebuild the pages:

```shell
npm run build-pages # Build once
npm run watch-pages # Build continuously
```