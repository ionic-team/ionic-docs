import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTS from './react/react-ts.md';
import reactCSS from './react/react-css.md';

import angularHTML from './angular/angular-html.md';
import angularCSS from './angular/angular-css.md';

<Playground
  size="300px"
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': reactTS,
        'src/main.css': reactCSS,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angularHTML,
        'src/app/example.component.css': angularCSS,
      },
    },
  }}
  src="usage/badge/customization/css-properties/demo.html"
/>
