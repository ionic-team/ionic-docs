import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import reactTSX from './react/main_tsx.md';
import reactCSS from './react/main_css.md';

import vue from './vue.md';

import angularCSS from './angular/angular-css.md';
import angularHTML from './angular/angular-html.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': reactTSX,
        'src/main.css': reactCSS,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angularHTML,
        'src/global.css': angularCSS
      }
    }
  }}
  size="250px"
  src="usage/accordion/customization/theming/demo.html"
/>
