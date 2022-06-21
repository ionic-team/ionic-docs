import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';

import vuePopover from './vue/vue_popover.md';
import vueMain from './vue/vue_main.md';

import angularHTML from './angular/angular_html.md';
import angularTS from './angular/angular_ts.md';
import angularPopoverHTML from './angular/angular_popover_html.md';
import angularPopoverTS from './angular/angular_popover_ts.md';
import angularModule from './angular/angular_module.md';

<Playground
  size="300px"
  code={{
    javascript,
    react,
    vue: {
      files: {
        'src/components/Example.vue': vueMain,
        'src/components/Popover.vue': vuePopover
      }
    },
    angular: {
      files: {
        'src/app/app.component.html': angularHTML,
        'src/app/app.component.ts': angularTS,
        'src/app/popover.component.html': angularPopoverHTML,
        'src/app/popover.component.ts': angularPopoverTS,
        'src/app/app.module.ts': angularModule
      }
    }
  }}
  src="usage/popover/presenting/controller/demo.html"
/>