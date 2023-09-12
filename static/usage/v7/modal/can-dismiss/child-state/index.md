import Playground from '@site/src/components/global/Playground';

import vue from './vue.md';

import react_main_tsx from './react/main_tsx.md';
import react_child_tsx from './react/child_tsx.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_child_component_html from './angular/child_component_html.md';
import angular_child_component_ts from './angular/child_component_ts.md';
import angular_app_module_ts from './angular/app_module_ts.md';

<Playground
  version="7"
  code={{
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/Child.tsx': react_child_tsx,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/child.component.html': angular_child_component_html,
        'src/app/child.component.ts': angular_child_component_ts,
        'src/app/app.module.ts': angular_app_module_ts,
      },
    },
  }}
  src="usage/v7/modal/can-dismiss/child-state/demo.html"
  devicePreview
/>
