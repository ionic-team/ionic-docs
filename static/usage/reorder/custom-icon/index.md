import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angular_example_component_ts from './angular/example_component_ts.md';
import angular_example_component_html from './angular/example_component_html.md';

<Playground
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/example.component.html': angular_example_component_html,
      },
    },
  }}
  src="usage/reorder/custom-icon/demo.html"
  size="300px"
/>
