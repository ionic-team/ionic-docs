import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue from './vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_global_css from './angular/global_css.md';

import variables_css from './theme/variables_css.md';

<Playground
  version="7"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
        'theme/variables.css': variables_css,
      },
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
        'src/theme/variables.css': variables_css,
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue,
        'src/theme/variables.css': variables_css,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/global.css': angular_global_css,
        'src/theme/variables.css': variables_css,
      },
    },
  }}
  src="usage/v7/theming/automatic-dark-mode/demo.html"
  devicePreview
  includeIonContent={false}
/>
