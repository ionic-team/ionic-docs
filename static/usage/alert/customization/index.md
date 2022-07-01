import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTS from './react/react_ts.md';
import reactCSS from './react/react_css.md';

import angularHTML from './angular/angular_html.md';
import angularCSS from './angular/angular_css.md';
import angularTS from './angular/angular_ts.md';

<Playground
  size="300px"
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
        'src/app/app.component.ts': angularTS,
        'src/styles.css': angularCSS
      }
    }
  }}
  src="usage/alert/customization/demo.html"
/>