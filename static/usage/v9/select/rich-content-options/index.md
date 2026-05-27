import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import react_app_tsx from './react/app_tsx.md';
import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue_main_ts from './vue/main_ts.md';
import vue_example_vue from './vue/example_vue.md';

import angular_main_ts from './angular/main_ts.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_global_css from './angular/global_css.md';

<Playground
  version="9"
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
        'src/main.css': react_main_css,
      },
    },
    vue: {
      files: {
        'src/main.ts': vue_main_ts,
        'src/components/Example.vue': vue_example_vue,
      },
    },
    angular: {
      files: {
        'src/main.ts': angular_main_ts,
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/global.css': angular_global_css,
      },
    },
  }}
  size="large"
  src="usage/v9/select/rich-content-options/demo.html"
/>
