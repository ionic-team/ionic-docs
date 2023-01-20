import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angular_app_module_ts from './angular/app_module_ts.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_modal_example_component_ts from './angular/modal-example_component_ts.md';
import angular_modal_example_component_html from './angular/modal-example_component_html.md';
import angular_types_ts from './angular/angular_types_ts.md';

<Playground
  code={{ 
    javascript, 
    react, 
    vue, 
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/typeahead.component.html': angular_modal_example_component_html,
        'src/app/typeahead.component.ts': angular_modal_example_component_ts,
        'src/app/app.module.ts': angular_app_module_ts,
        'src/app/types.ts': angular_types_ts
      },
    }, 
  }}
  src="usage/select/typeahead/demo.html"
  devicePreview
  includeIonContent={false}
/>