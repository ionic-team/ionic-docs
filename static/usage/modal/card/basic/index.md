import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';
import react from './react.md';

import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';
import angular_app_component_css from './angular/app_component_css.md';

<Playground
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
        'src/app/app.component.css': angular_app_component_css,
      },
    },
  }}
  src="usage/modal/card/basic/demo.html"
  devicePreview
/>
