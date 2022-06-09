import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import reactTS from './react/react-ts.md';
import reactCSS from './react/react-css.md';

import vue from './vue.md';

import angularCSS from './angular/angular-css.md';
import angularHTML from './angular/angular-html.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'main.js': reactTS,
        'main.css': reactCSS
      }
    },
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angularHTML,
        'src/styles.css': angularCSS
      }
    }
  }}
  size="250px"
  src="usage/accordion/customization/theming/demo.html"
/>
