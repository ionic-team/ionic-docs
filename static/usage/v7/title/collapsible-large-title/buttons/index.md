import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground
  version="7"
  mode="ios"
  code={{ javascript, react, vue, angular }}
  src="usage/v7/title/collapsible-large-title/buttons/demo.html"
  devicePreview={true}
  includeIonContent={false}
/>
