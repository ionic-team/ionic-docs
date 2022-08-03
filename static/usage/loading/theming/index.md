import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import reactTSX from './react/tsx.md';
import reactCSS from './react/css.md';

import vue from './vue.md';

import angularHTML from './angular/html.md';
import angularCSS from './angular/css.md';
import angularTS from './angular/ts.md';

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
        'src/app/example.component.ts': angularTS,
        'src/global.css': angularCSS,
      },
    },
  }}
  src="usage/loading/theming/demo.html"
/>
