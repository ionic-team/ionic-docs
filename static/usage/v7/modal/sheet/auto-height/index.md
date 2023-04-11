import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';
import react from './react.md';
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_css from './angular/example_component_css.md';

<Playground
  version="7"
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.css': angular_example_component_css,
      },
    },
  }}
  src="usage/v7/modal/sheet/auto-height/demo.html"
  devicePreview
  includeIonContent={false}
/>
