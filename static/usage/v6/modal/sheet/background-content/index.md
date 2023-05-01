import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';
import react from './react.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';
import angular_example_component_css from './angular/example_component_css.md';

<Playground
  version="6"
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/example.component.css': angular_example_component_css,
      },
    },
  }}
  src="usage/v6/modal/sheet/background-content/demo.html"
  devicePreview
  includeIonContent={false}
/>
