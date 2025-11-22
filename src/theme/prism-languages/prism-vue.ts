(function (Prism) {
  Prism.languages.vue = Prism.languages.extend('markup', {
    // Add Vue template interpolation (e.g., {{ expression }})
    interpolation: {
      pattern: /\{\{[^}]+\}\}/,
      inside: {
        punctuation: /\{\{|\}\}/,
        expression: {
          pattern: /[\s\S]+/,
          inside: Prism.languages.javascript,
        },
      },
    },

    // Add Vue-specific attributes (v-bind, @click, :prop)
    attribute: {
      pattern: /(^|["'\s])(?:v-|:|\@|#)[\w-]+(?:\.[\w-]+)*(?=[^\w-])(?=[^=>]*=)/,
      lookbehind: true,
      alias: 'keyword',
    },
  });

  Prism.languages.insertBefore('vue', 'comment', {
    // Add support for <script> blocks within Vue files
    script: {
      pattern: /<script[\s\S]*?>[\s\S]*?<\/script>/i,
      inside: {
        'script-tag': {
          pattern: /<script[\s\S]*?>|<\/script>/i,
          inside: Prism.languages.markup,
          alias: 'tag',
        },
        rest: Prism.languages.javascript,
      },
      alias: 'language-vue',
    },
    // Add support for <style> blocks within Vue files
    style: {
      pattern: /<style[\s\S]*?>[\s\S]*?<\/style>/i,
      inside: {
        'style-tag': {
          pattern: /<style[\s\S]*?>|<\/style>/i,
          inside: Prism.languages.markup,
          alias: 'tag',
        },
        rest: Prism.languages.css,
      },
      alias: 'language-vue',
    },
  });

  Prism.languages.html = Prism.languages.vue;
  Prism.languages.markup = Prism.languages.vue;

  Prism.languages.v = Prism.languages.vue;
})(Prism);
