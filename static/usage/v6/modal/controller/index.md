import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';

import vue_example from './vue/example_vue.md';
import vue_modal from './vue/modal_vue.md';

import angular_app_module_ts from './angular/app_module_ts.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_modal_example_component_ts from './angular/modal-example_component_ts.md';
import angular_modal_example_component_html from './angular/modal-example_component_html.md';

<Playground
  version="6"
  code={{
    javascript,
    react,
    vue: {
      files: {
        'src/components/Example.vue': vue_example,
        'src/components/Modal.vue': vue_modal,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/modal-example.component.html': angular_modal_example_component_html,
        'src/app/modal-example.component.ts': angular_modal_example_component_ts,
        'src/app/app.module.ts': angular_app_module_ts,
      },
    },
  }}
  src="usage/v6/modal/controller/demo.html"
  devicePreview
  includeIonContent={false}
/>
