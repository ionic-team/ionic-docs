import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angularHTML from './angular/angular_html.md';
import angularTS from './angular/angular_ts.md';

<Playground
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angularHTML,
        'src/app/app.component.ts': angularTS,
      }
    }
  }}
  src="usage/breadcrumbs/collapsing-items/expand-on-click/demo.html"
/>