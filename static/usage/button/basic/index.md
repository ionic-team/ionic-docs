import useBaseUrl from '@docusaurus/useBaseUrl';
import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground
  code={{ javascript, react, vue, angular }}
  source={useBaseUrl('usage/button/basic/demo.html')}
/>
