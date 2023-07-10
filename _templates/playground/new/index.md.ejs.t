---
arbitrary: <% nameWithoutIon = name.replace('ion-', '') %>
# this template is only used if `css` (from the command line prompt) is false
to: "<%= css ? null : `static/usage/v${version}/${nameWithoutIon}/${path}/index.md` %>"
---
import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

<Playground version="<%= version %>" code={{ javascript, react, vue, angular }} src="<%= `usage/v${version}/${nameWithoutIon}/${path}/demo.html` %>" />
