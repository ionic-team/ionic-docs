import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTS from './react/react-ts.md';
import reactCSS from './react/react-css.md';

import angularHTML from './angular/angular-html.md';
import angularCSS from './angular/angular-css.md';
import angularTS from './angular/angular-ts.md';

<Playground
  size="300px"
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
        'src/app/app.component.css': angularCSS,
        'src/app/app.component.ts': angularTS
      }
    }
  }}
  src="usage/select/customization/styling-select/demo.html"
/>