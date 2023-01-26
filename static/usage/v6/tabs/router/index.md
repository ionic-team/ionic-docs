import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';

import angular_app_component_html from './angular/app_component_html.md';
import angular_app_module_ts from './angular/app_module_ts.md';
import angular_app_routing_module_ts from './angular/app_routing_module_ts.md';

import angular_example_component_html from './angular/example_component_html.md';

import angular_home_page_module_ts from './angular/home_page_module_ts.md';
import angular_home_page_component_ts from './angular/home_page_component_ts.md';
import angular_home_page_component_html from './angular/home_page_component_html.md';

import angular_library_page_module_ts from './angular/library_page_module_ts.md';
import angular_library_page_component_ts from './angular/library_page_component_ts.md';
import angular_library_page_component_html from './angular/library_page_component_html.md';

import angular_radio_page_module_ts from './angular/radio_page_module_ts.md';
import angular_radio_page_component_ts from './angular/radio_page_component_ts.md';
import angular_radio_page_component_html from './angular/radio_page_component_html.md';

import angular_search_page_module_ts from './angular/search_page_module_ts.md';
import angular_search_page_component_ts from './angular/search_page_component_ts.md';
import angular_search_page_component_html from './angular/search_page_component_html.md';

import angular_page_component_css from './angular/page_component_css.md';

import vue from './vue.md';

import react_main_tsx from './react/main_tsx.md';
import react_home_page_tsx from './react/home_page_tsx.md';
import react_radio_page_tsx from './react/radio_page_tsx.md';
import react_library_page_tsx from './react/library_page_tsx.md';
import react_search_page_tsx from './react/search_page_tsx.md';

<Playground
  code={{
    javascript,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/home/home-page.component.ts': angular_home_page_component_ts,
        'src/app/home/home-page.component.html': angular_home_page_component_html,
        'src/app/home/home-page.component.css': angular_page_component_css,
        'src/app/home/home-page.module.ts': angular_home_page_module_ts,
        'src/app/library/library-page.component.ts': angular_library_page_component_ts,
        'src/app/library/library-page.component.html': angular_library_page_component_html,
        'src/app/library/library-page.component.css': angular_page_component_css,
        'src/app/library/library-page.module.ts': angular_library_page_module_ts,
        'src/app/radio/radio-page.component.ts': angular_radio_page_component_ts,
        'src/app/radio/radio-page.component.html': angular_radio_page_component_html,
        'src/app/radio/radio-page.component.css': angular_page_component_css,
        'src/app/radio/radio-page.module.ts': angular_radio_page_module_ts,
        'src/app/search/search-page.component.ts': angular_search_page_component_ts,
        'src/app/search/search-page.component.html': angular_search_page_component_html,
        'src/app/search/search-page.component.css': angular_page_component_css,
        'src/app/search/search-page.module.ts': angular_search_page_module_ts,
        'src/app/app.module.ts': angular_app_module_ts,
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app-routing.module.ts': angular_app_routing_module_ts,
      },
    },
    vue,
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/pages/HomePage.tsx': react_home_page_tsx,
        'src/pages/RadioPage.tsx': react_radio_page_tsx,
        'src/pages/LibraryPage.tsx': react_library_page_tsx,
        'src/pages/SearchPage.tsx': react_search_page_tsx,
      },
    },
  }}
  src="usage/v6/tabs/router/demo.html"
  devicePreview
/>
