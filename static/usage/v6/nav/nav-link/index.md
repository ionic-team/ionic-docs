import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import angular_app_module_ts from './angular/app_module_ts.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_page_one_component_ts from './angular/page_one_component_ts.md';
import angular_page_two_component_ts from './angular/page_two_component_ts.md';
import angular_page_three_component_ts from './angular/page_three_component_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_page_one_tsx from './react/page_one_tsx.md';
import react_page_two_tsx from './react/page_two_tsx.md';
import react_page_three_tsx from './react/page_three_tsx.md';

import vue_example from './vue/example_vue.md';
import vue_page_one from './vue/page_one_vue.md';
import vue_page_two from './vue/page_two_vue.md';
import vue_page_three from './vue/page_three_vue.md';

<Playground
  version="6"
  code={{
    javascript,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/page-one.component.ts': angular_page_one_component_ts,
        'src/app/page-two.component.ts': angular_page_two_component_ts,
        'src/app/page-three.component.ts': angular_page_three_component_ts,
        'src/app/app.module.ts': angular_app_module_ts,
      },
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/page-one.tsx': react_page_one_tsx,
        'src/page-two.tsx': react_page_two_tsx,
        'src/page-three.tsx': react_page_three_tsx,
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue_example,
        'src/components/PageOne.vue': vue_page_one,
        'src/components/PageTwo.vue': vue_page_two,
        'src/components/PageThree.vue': vue_page_three,
      },
    },
  }}
  src="usage/v6/nav/nav-link/demo.html"
  devicePreview
/>
