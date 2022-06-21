import Playground from '@site/src/components/global/Playground';

import vue from './vue.md';
import react from './react.md';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';

<Playground
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
    },
    react,
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
      },
    },
  }}
  src="usage/modal/styling/animations/demo.html"
  devicePreview
/>
