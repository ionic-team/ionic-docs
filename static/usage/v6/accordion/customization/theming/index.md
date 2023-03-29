import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue from './vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_global_css from './angular/global_css.md';

<Playground
  version="6"
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/global.css': angular_global_css,
      },
    },
  }}
  size="250px"
  src="usage/v6/accordion/customization/theming/demo.html"
/>
