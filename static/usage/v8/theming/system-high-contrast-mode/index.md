import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import react_app_tsx from './react/app_tsx.md';
import react_main_tsx from './react/main_tsx.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_styles_css from './angular/styles_css.md';

import vue_example from './vue/example_vue.md';
import vue_main_ts from './vue/main_ts.md';

<Playground
  version="8"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
    },
    react: {
      files: {
        'src/App.tsx': react_app_tsx,
        'src/main.tsx': react_main_tsx,
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue_example,
        'src/main.ts': vue_main_ts,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/styles.css': angular_styles_css,
      },
    },
  }}
  src="usage/v8/theming/system-high-contrast-mode/demo.html"
  devicePreview
  includeIonContent={false}
/>
