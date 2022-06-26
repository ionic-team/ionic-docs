import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import reactTS from './react/react-ts.md';
import reactCSS from './react/react-css.md';

import vue from './vue.md';

import angularHTML from './angular/angular-html.md';
import angularCSS from './angular/angular-css.md';
import angularTS from './angular/angular-ts.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': reactTS,
        'src/main.css': reactCSS
      }
    },
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angularHTML,
        'src/app/app.component.css': angularCSS,
        'src/app/app.component.ts': angularTS
      }
    },
  }}
  size="250px"
  src="usage/accordion/customization/advanced-expansion-styles/demo.html"
/>
