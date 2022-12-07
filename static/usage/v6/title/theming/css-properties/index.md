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
        'src/main.css': react_main_css,
        'src/main.tsx': react_main_tsx,
      },
    },
    vue,
    angular: {
      files: {
        'src/global.css': angular_global_css,
        'src/app/example.component.html': angular_example_component_html,
      },
    },
  }}
  src="usage/v6/title/theming/css-properties/demo.html"
  devicePreview={true}
  includeIonContent={false}
/>
