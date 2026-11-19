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
  });

  // Highlight Vue directives (v-if, :prop, @click, #slot) as keywords. They
  // have to be matched inside the tag, since the tag token consumes its
  // attributes before any top-level rule can see them.
  const vueTag = (Prism.languages.vue as Record<string, Prism.TokenObject>).tag;
  // `insertBefore` looks the grammar up as `root[inside]`, so the tag's
  // grammar is wrapped to reach it.
  vueTag.inside = Prism.languages.insertBefore(
    'inside',
    'attr-name',
    {
      directive: {
        pattern: /(^|\s)(?:v-[\w-]+(?::[\w-]+)?|[:@#][\w-]+)(?:\.[\w-]+)*/,
        lookbehind: true,
        alias: 'keyword',
      },
    },
    { inside: vueTag.inside ?? {} }
  );

  Prism.languages.insertBefore('vue', 'comment', {
    // Add support for <script lang="ts"> blocks within Vue files
    'script-ts': {
      pattern: /<script\b[^>]*\blang=["']ts["'][^>]*>[\s\S]*?<\/script>/i,
      inside: {
        'script-tag': {
          pattern: /<script[\s\S]*?>|<\/script>/i,
          inside: Prism.languages.markup,
          alias: 'tag',
        },
        rest: Prism.languages.typescript,
      },
      alias: 'language-vue',
    },
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
