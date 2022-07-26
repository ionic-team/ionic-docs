import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import reactHTML from './react-html.md';
import reactCSS from './react-css.md';
import vue from './vue.md';
import angularHTML from './angular-html.md';
import angularCSS from './angular-css.md';

<Playground 
  size="450px" 
  code={{ 
    javascript, 
    react: {
      files: {
        'src/main.tsx': reactHTML,
        'src/main.css': reactCSS
      }
    }, 
    vue, 
    angular: {
      files: {
        'src/app/app.component.html': angularHTML,
        'src/styles.css': angularCSS
      }
    }
  }} 
  src="usage/datetime/theming/demo.html"
/>
