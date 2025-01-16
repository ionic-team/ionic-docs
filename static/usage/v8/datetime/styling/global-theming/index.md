import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue_example from './vue/example_vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_css from './angular/example_component_css.md';
import angular_example_component_ts from './angular/example_component_ts.md';

import variables_css from './theme/variables_css.md';

<Playground
  version="8"
  size="450px"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
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
        'src/components/Example.vue': vue_example,
        'src/theme/variables.css': variables_css,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.css': angular_example_component_css,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/theme/variables.css': variables_css,
      },
    },
  }}
  src="usage/v8/datetime/styling/global-theming/demo.html"
/>
