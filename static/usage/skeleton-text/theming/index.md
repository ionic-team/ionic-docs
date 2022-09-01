import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import reactTSX from './react/react-tsx.md';
import reactCSS from './react/react-css.md';

import vue from './vue.md';

import angularHTML from './angular/angular-html.md';
import angularCSS from './angular/angular-css.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': reactTSX,
        'src/main.css': reactCSS
      }
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angularHTML,
        'src/app/example.component.css': angularCSS
      }
    },
  }}
  src="usage/skeleton-text/theming/demo.html"
  size="250px"
/>
