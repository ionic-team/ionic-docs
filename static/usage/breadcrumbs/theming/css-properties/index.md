import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTSX from './react/main_tsx.md';
import reactCSS from './react/main_css.md';

import angularHTML from './angular/angular_html.md';
import angularCSS from './angular/angular_css.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.css': reactCSS,
        'src/main.tsx': reactTSX,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.css': angularCSS,
        'src/app/example.component.html': angularHTML,
      },
    },
  }}
  src="usage/breadcrumbs/theming/css-properties/demo.html"
/>
