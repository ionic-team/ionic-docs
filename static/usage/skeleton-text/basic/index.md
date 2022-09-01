import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angularHTML from './angular/example_component_html.md';
import angularTS from './angular/example_component_ts.md';

<Playground
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angularHTML,
        'src/app/example.component.ts': angularTS
      }
    },
  }}
  src="usage/skeleton-text/basic/demo.html"
  size="250px"
/>
