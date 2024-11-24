import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react_main_tsx from './react/react_tsx.md';
import react_main_css from './react/react_css.md';
import vue from './vue.md';
import angular_html from './angular/angular_html.md';
import angular_css from './angular/angular_css.md';

<Playground
  version="8"
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
        'src/app/example.component.html': angular_html,
        'src/app/example.component.css': angular_css,
      },
    },
  }}
  src="usage/v8/segment/swipeable/demo.html"
/>
