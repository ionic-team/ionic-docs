import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import react_main_css from './react/main_css.md';
import react_main_tsx from './react/main_tsx.md';

import vue from './vue.md';

import angular_example_component_css from './angular/example_component_css.md';
import angular_example_component_html from './angular/example_component_html.md';

<Playground
  version="6"
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
        'src/app/example.component.css': angular_example_component_css,
        'src/app/example.component.html': angular_example_component_html,
      },
    },
  }}
  src="usage/v6/item/theming/css-shadow-parts/demo.html"
/>
