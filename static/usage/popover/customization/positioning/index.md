import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import reactTSX from './react/main_tsx.md';
import reactCSS from './react/main_css.md';

import angularHTML from './angular/angular_html.md';
import angularCSS from './angular/angular_css.md';
import angularTS from './angular/angular_ts.md';

<Playground
  size="400px"
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
        'src/app/example.component.css': angularCSS,
        'src/app/example.component.ts': angularTS,
      },
    },
  }}
  src="usage/popover/customization/positioning/demo.html"
/>
