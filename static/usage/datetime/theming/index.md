import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import reactHTML from './react-html.md';
import react_main_css from './react-css.md';
import vue from './vue.md';
import angular_example_component_html from './angular-html.md';
import angular_example_component_css from './angular-css.md';

<Playground
  size="450px"
  code={{
    javascript,
    react: {
      files: {
        'src/main.tsx': reactHTML,
        'src/main.css': react_main_css,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/global.css': angular_example_component_css
      }
    }
  }}
  src="usage/datetime/theming/demo.html"
/>
