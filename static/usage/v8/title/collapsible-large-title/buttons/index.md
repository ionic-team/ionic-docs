import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground
  version="8"
  mode="ios"
  code={{ javascript, react, vue, angular }}
  src="usage/v8/title/collapsible-large-title/buttons/demo.html"
  devicePreview={true}
  includeIonContent={false}
/>
