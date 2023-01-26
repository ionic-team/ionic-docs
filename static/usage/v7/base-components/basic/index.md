import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';
import react_app_tsx from './react/app_tsx.md';

import vue_main_ts from './vue/main_ts.md';
import vue_example_component_vue from './vue/example_component_vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_css from './angular/example_component_css.md';
import angular_app_module_ts from './angular/app_module_ts.md';

<Playground
  version="7"
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
        'src/App.tsx': react_app_tsx
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue_example_component_vue,
        'src/main.ts': vue_main_ts
      }
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.css': angular_example_component_css,
        'src/app/app.modules.ts': angular_app_module_ts
      },
    },
  }}
  src="usage/v7/base-components/basic/demo.html"
  size="250px"
/>
