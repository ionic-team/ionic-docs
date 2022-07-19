import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue from './vue.md';

import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_css from './angular/app_component_css.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'src/main.css': react_main_css,
        'src/main.tsx': react_main_tsx,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/app.component.css': angular_app_component_css,
        'src/app/app.component.html': angular_app_component_html,
      },
    },
  }}
  src="usage/range/css-variables/demo.html"
/>
