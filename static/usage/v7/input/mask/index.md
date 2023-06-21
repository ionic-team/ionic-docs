import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import react_main_tsx from './react.md';

import vue_example_vue from './vue.md';

import angular_app_module_ts from './angular/app_module_ts.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

<Playground
  version="7"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
      dependencies: {
        '@maskito/core': '^1.0.0',
      },
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
      },
      dependencies: {
        '@maskito/react': '^1.0.0',
        '@maskito/core': '^1.0.0',
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue_example_vue,
      },
      dependencies: {
        '@maskito/vue': '^1.0.0',
        '@maskito/core': '^1.0.0',
      },
    },
    angular: {
      files: {
        'src/app/app.module.ts': angular_app_module_ts,
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
      },
      dependencies: {
        '@maskito/angular': '^1.0.0',
        '@maskito/core': '^1.0.0',
      },
    },
  }}
  src="usage/v7/input/mask/demo.html"
  size="300px"
/>
