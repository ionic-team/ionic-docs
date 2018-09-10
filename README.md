![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Ionic Docs

This is the home for the v4+ [Ionic Framework](https://ionicframework.com) docs.

## Developing

Install dependencies by running `npm install` and then start the development server with `npm run dev`. **Note** that you'll need recent versions of npm (5.8+) and Node (8+).

## Editing

The docs content is written as markdown and lives in [`src/content`](./src/content). The content directory maps directly to routes on the site. (`src/content/intro.md` -> `/docs/intro`) In lieu of a style guide, temporarily, please refer to existing docs for examples of preferred style.

## Directory Structure

The repo consists of three main top-level directories: `scripts`, `server`, and `src`. The `scripts/` directory holds build scripts for fetching and generating API reference docs from other Ionic repositories. You should not need to change it. The `server/` directory holds the source for the production server. The `src/` directory contains the main Stencil app's components and styles.

```sh
ionic-docs/
├── scripts/
├── server/
└── src/
    └── content/
```

### Content

Markdown content living in `src/content/` is mapped to routes based on the file path. So, a markdown document at `src/content/intro.md` is available on the docs site at `/docs/intro`. Reference content, such as API and CLI docs, is sourced from separate repos and should be edited there.

### Sources

Much of the content is sourced from external repos, each in `sources/`. To pull this in and generate the missing pages, run the command: `npm run docgen`. To generate a specific section, add framework, cli, native, components, or storage after the the docgen command. For example `npm run docgen native`.