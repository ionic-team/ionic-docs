---
arbitrary: <% nameWithoutIon = name.replace('ion-', '') %>
to: static/usage/v7/<%= nameWithoutIon %>/<%= path %>/index.md
---
import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground version="7" code={{ javascript, react, vue, angular }} src="usage/v7/<%= nameWithoutIon %>/<%= path %>/demo.html" />
