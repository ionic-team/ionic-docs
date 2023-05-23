import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';
import react from './react.md';
import vue from './vue.md';

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
        '@maskito/core': '^0.11.0',
      },
    },
    react,
    vue,
    angular: {
      files: {
        'src/app/app.module.ts': angular_app_module_ts,
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
      },
      dependencies: {
        '@maskito/angular': '^0.11.0',
        '@maskito/core': '^0.11.0',
      },
    },
  }}
  src="usage/v7/input/mask/demo.html"
  size="300px"
/>
