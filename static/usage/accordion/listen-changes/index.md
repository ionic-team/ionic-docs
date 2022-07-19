import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angularHTML from './angular-html.md';
import angularTS from './angular-ts.md';

<Playground
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
  size="320px"
  src="usage/accordion/listen-changes/demo.html"
/>
