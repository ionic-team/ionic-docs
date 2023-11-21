import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';
import angular_app_module_ts from './angular/app_module_ts.md';
import angular_app_routing_module_ts from './angular/app_routing_module_ts.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

import vue_app_vue from './vue/app_vue.md';
import vue_main_ts from './vue/main_ts.md';
import vue_example_vue from './vue/example_vue.md';
import vue_router_ts from './vue/router_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_home_page_tsx from './react/home_page_tsx.md';

<Playground
  version="7"
  code={{
    javascript,
    vue: {
      files: {
        'src/components/Example.vue': vue_example_vue,
        'src/router.ts': vue_router_ts,
        'src/App.vue': vue_app_vue,
        'src/main.ts': vue_main_ts,
      },
    },
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/app.module.ts': angular_app_module_ts,
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
        'src/app/app-routing.module.ts': angular_app_routing_module_ts,
      },
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/pages/HomePage.tsx': react_home_page_tsx,
      },
    },
  }}
  src="usage/v7/autofocus/basic/demo.html"
/>
