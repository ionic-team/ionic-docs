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
    script: {
      pattern: /<script[\s\S]*?>[\s\S]*?<\/script>/i,
      inside: {
        rest: Prism.languages.javascript,
      },
      alias: 'language-javascript',
    },
    style: {
      pattern: /<style[\s\S]*?>[\s\S]*?<\/style>/i,
      inside: {
        rest: Prism.languages.css,
      },
      alias: 'language-css',
    },
  });

  Prism.languages.html = Prism.languages.vue;
  Prism.languages.markup = Prism.languages.vue;

  Prism.languages.v = Prism.languages.vue;
})(Prism);
