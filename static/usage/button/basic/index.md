import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground
  code={{
    javascript: {
      files: {
        'src/example.html': javascript,
        'src/example-two.html': javascript,
        'src/example-three.html': javascript,
        'src/example-four.html': javascript,
        'src/example-five.html': javascript,
      },
    },
  }}
  src="usage/button/basic/demo.html"
/>
