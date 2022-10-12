import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angularHTML from './angular/example_component_html.md';
import angularTS from './angular/example_component_ts.md';

<Playground
  size="500px"
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angularHTML,
        'src/app/example.component.ts': angularTS,
      },
    },
  }}
  src="usage/breadcrumbs/collapsing-items/popover-on-click/demo.html"
/>
