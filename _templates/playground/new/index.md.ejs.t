---
to: "<%= `static/usage/v${version}/${name}/${path}/index.md` %>"
---
import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
<% if (css){ %>
import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

<% } else { -%>
import react from './react.md';
<% } -%>
import vue from './vue.md';
<% if (css || angular_ts){ %>
import angular_example_component_html from './angular/example_component_html.md';
<% } else { -%>
import angular from './angular.md';
<% } -%>
<% if (angular_ts){ -%>
import angular_example_component_ts from './angular/example_component_ts.md';
<% } -%>
<% if (css){ -%>
import angular_example_component_css from './angular/example_component_css.md';
<% } -%>

<Playground
  version="<%= version %>"
  code={{
    javascript,
<% if (css){ -%>
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
<% } else { -%>
    react,
<% } -%>
    vue,
<% if (angular_ts || css){ -%>
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
<% if (angular_ts){ -%>
        'src/app/example.component.ts': angular_example_component_ts,
<% } -%>
<% if (css){ -%>
        'src/app/example.component.css': angular_example_component_css,
<% } -%>
      },
    },
<% } else { -%>
    angular,
<% } -%>
  }}
  src="usage/v<%= version %>/<%= name %>/<%= path %>/demo.html"
/>
