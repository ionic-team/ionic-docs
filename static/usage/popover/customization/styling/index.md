import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTS from './react/react_ts.md';
import reactCSS from './react/react_css.md';

import angularHTML from './angular/angular_html.md';
import angularCSS from './angular/angular_css.md';

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
        'src/global.css': angularCSS
      }
    }
  }}
  src="usage/popover/customization/styling/demo.html"
/>
