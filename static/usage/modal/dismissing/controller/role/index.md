import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';

import angular_app_component_ts from './angular/app_component_ts.md';
import angular_app_component_html from './angular/app_component_html.md';
import angular_modal_example_component_html from './angular/modal-example_component_html.md';
import angular_modal_example_component_ts from './angular/modal-example_component_ts.md';

import vue_example from './vue/example_vue.md';
import vue_modal from './vue/modal_vue.md';

<Playground
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
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
        'src/app/modal-example.component.html': angular_modal_example_component_html,
        'src/app/modal-example.component.ts': angular_modal_example_component_ts,
      },
      angularModuleOptions: {
        imports: [`import { ModalExampleComponent } from './modal-example.component';`],
        declarations: ['ModalExampleComponent'],
      },
    },
  }}
  src="usage/modal/dismissing/controller/role/demo.html"
  devicePreview
/>
