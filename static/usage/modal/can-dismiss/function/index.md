import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import vue from './vue.md';

import react_main_js from './react/main_js.md';
import react_main_css from './react/main_css.md';

import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';
import angular_app_component_css from './angular/app_component_css.md';

<Playground
  code={{
    javascript,
    react: {
      files: {
        'main.js': react_main_js,
        'main.css': react_main_css,
      },
    },
    vue,
    angular: {
      files: {
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
        'src/app/app.component.css': angular_app_component_css,
      },
    },
  }}
  src="usage/modal/can-dismiss/function/demo.html"
  devicePreview
/>
