import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTS from './react/react_ts.md';
import reactCSS from './react/react_css.md';

import angularHTML from './angular/angular_html.md';
import angularCSS from './angular/angular_css.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.css': reactCSS,
        'src/main.tsx': reactTS,
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
