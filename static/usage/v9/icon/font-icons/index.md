import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';
import react_app_tsx from './react/app_tsx.md';

import vue_example from './vue/example_vue.md';
import vue_main_ts from './vue/main_ts.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_example_component_css from './angular/example_component_css.md';

import angular_global_css from './angular/global_css.md';

<Playground
  version="9"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
      dependencies: {
        '@fortawesome/fontawesome-free': '^7.3.0',
        '@phosphor-icons/web': '^2.1.0',
        'bootstrap-icons': '^1.13.0',
        'remixicon': '^4.9.0',
      }
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
        'src/App.tsx': react_app_tsx,
      },
      dependencies: {
        '@fortawesome/fontawesome-free': '^7.3.0',
        '@phosphor-icons/web': '^2.1.0',
        'bootstrap-icons': '^1.13.0',
        'remixicon': '^4.9.0',
      }
    },
    vue: {
      files: {
        'src/components/Example.vue': vue_example,
        'src/main.ts': vue_main_ts,
      },
      dependencies: {
        '@fortawesome/fontawesome-free': '^7.3.0',
        '@phosphor-icons/web': '^2.1.0',
        'bootstrap-icons': '^1.13.0',
        'remixicon': '^4.9.0',
      }
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/example.component.css': angular_example_component_css,
        'src/global.css': angular_global_css,
      },
      dependencies: {
        '@fortawesome/fontawesome-free': '^7.3.0',
        '@phosphor-icons/web': '^2.1.0',
        'bootstrap-icons': '^1.13.0',
        'remixicon': '^4.9.0',
      }
    },
  }}
  size="large"
  src="usage/v9/icon/font-icons/demo.html"
/>
