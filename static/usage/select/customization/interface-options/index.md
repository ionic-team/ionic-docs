import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angularHTML from './angular/app.component_html.md';
import angularTS from './angular/app.component_ts.md';

<Playground
  size="medium"
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angularHTML,
        'src/app/app.component.ts': angularTS
      }
    }
  }}
  src="usage/select/customization/interface-options/demo.html"
/>