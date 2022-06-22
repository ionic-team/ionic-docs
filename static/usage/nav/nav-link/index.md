import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import angular_app_module_ts from './angular/app_module_ts.md';
import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';
import angular_page_one_component_ts from './angular/page_one_component_ts.md';
import angular_page_two_component_ts from './angular/page_two_component_ts.md';
import angular_page_three_component_ts from './angular/page_three_component_ts.md';

<Playground
  code={{
    javascript,
    angular: {
      files: {
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
        'src/app/page-one.component.ts': angular_page_one_component_ts,
        'src/app/page-two.component.ts': angular_page_two_component_ts,
        'src/app/page-three.component.ts': angular_page_three_component_ts,
        'src/app/app.module.ts': angular_app_module_ts,
      },
    },
  }}
  src="usage/nav/nav-link/demo.html"
/>
