import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import react from './react.md';
import vue from './vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

<Playground
  version="8"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
      dependencies: {
        ionicons: '7.4.0',
      },
    },
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
      },
      dependencies: {
        ionicons: '7.4.0',
      },
    },
  }}
  src="usage/v8/button/icons/demo.html"
/>
