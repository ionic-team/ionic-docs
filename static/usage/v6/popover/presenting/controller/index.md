import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';

import vue_example from './vue/example_vue.md';
import vue_popover from './vue/popover_vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_popover_component_html from './angular/popover_component_html.md';
import angular_popover_component_ts from './angular/popover_component_ts.md';
import angular_app_module from './angular/app_module_ts.md';

<Playground
  version="6"
  size="300px"
  code={{
    javascript,
    react,
    vue: {
      files: {
        'src/components/Example.vue': vue_example,
        'src/components/Popover.vue': vue_popover,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/popover.component.html': angular_popover_component_html,
        'src/app/popover.component.ts': angular_popover_component_ts,
        'src/app/app.module.ts': angular_app_module,
      },
    },
  }}
  src="usage/v6/popover/presenting/controller/demo.html"
/>
