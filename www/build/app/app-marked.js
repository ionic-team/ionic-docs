/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var marked = createCommonjsModule(function (module, exports) {
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

(function() {
var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(
          cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1])
        );
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return text;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return text;
    }
  }
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false,
  baseUrl: null
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

{
  module.exports = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : commonjsGlobal);
}());
});

var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {}

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984
//
function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';

  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};


var exception = YAMLException;

function Mark(name, buffer, position, line, column) {
  this.name     = name;
  this.buffer   = buffer;
  this.position = position;
  this.line     = line;
  this.column   = column;
}


Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) return null;

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.position;

  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
         common.repeat(' ', indent + this.position - start + head.length) + '^';
};


Mark.prototype.toString = function toString(compact) {
  var snippet, where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};


var mark = Mark;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.tag          = tag;
  this.kind         = options['kind']         || null;
  this.resolve      = options['resolve']      || function () { return true; };
  this.construct    = options['construct']    || function (data) { return data; };
  this.instanceOf   = options['instanceOf']   || null;
  this.predicate    = options['predicate']    || null;
  this.represent    = options['represent']    || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type;

/*eslint-disable max-len*/






function compileList(schema, name, result) {
  var exclude = [];

  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });

  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    });

    result.push(currentType);
  });

  return result.filter(function (type$$1, index) {
    return exclude.indexOf(index) === -1;
  });
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;

  function collectType(type$$1) {
    result[type$$1.kind][type$$1.tag] = result['fallback'][type$$1.tag] = type$$1;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema(definition) {
  this.include  = definition.include  || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];

  this.implicit.forEach(function (type$$1) {
    if (type$$1.loadKind && type$$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });

  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
}


Schema.DEFAULT = null;


Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new exception('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
    throw new exception('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type$$1) { return type$$1 instanceof type; })) {
    throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};


var schema = Schema;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }

    // base 8
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }
    return hasDigits && ch !== '_';
  }

  // base 10 (except 0) or base 60

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  // if !base60 - done;
  if (ch !== ':') return true;

  // base60 almost not used, no needs to optimize
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch, base, digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });

    value = 0;
    base = 1;

    digits.forEach(function (d) {
      value += (d * base);
      base *= 60;
    });

    return sign * value;

  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int_1 = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (object) { return '0b' + object.toString(2); },
    octal:       function (object) { return '0'  + object.toString(8); },
    decimal:     function (object) { return        object.toString(10); },
    hexadecimal: function (object) { return '0x' + object.toString(16).toUpperCase(); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // 20:59
  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;

  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });

    value = 0.0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;

  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float_1 = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = new schema({
  include: [
    failsafe
  ],
  implicit: [
    _null,
    bool,
    int_1,
    float_1
  ]
});

var core = new schema({
  include: [
    json
  ]
});

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/

var NodeBuffer;

try {
  // A trick for browserified version, to not include `Buffer` shim
  var _require = commonjsRequire;
  NodeBuffer = _require('buffer').Buffer;
} catch (__) {}




// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  // Wrap into Buffer for NodeJS and leave Array for browser
  if (NodeBuffer) {
    // Support node 6.+ Buffer API when available
    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
  }

  return result;
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$1.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var default_safe = new schema({
  include: [
    core
  ],
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  /*eslint-disable no-undefined*/
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

var _undefined = new type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;

  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // if regexp starts with '/' it can have modifiers and must be properly closed
  // `/foo/gim` - modifiers tail can be maximum 3 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];

    if (modifiers.length > 3) return false;
    // if expression starts with /, is should be properly terminated
    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // `/foo/gim` - tail can be maximum 4 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object /*, style*/) {
  var result = '/' + object.source + '/';

  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';

  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

var regexp = new type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});

var esprima;

// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try {
  // workaround to exclude package from browserify list.
  var _require$1 = commonjsRequire;
  esprima = _require$1('esprima');
} catch (_) {
  /*global window */
  if (typeof window !== 'undefined') esprima = window.esprima;
}



function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast    = esprima.parse(source, { range: true });

    if (ast.type                    !== 'Program'             ||
        ast.body.length             !== 1                     ||
        ast.body[0].type            !== 'ExpressionStatement' ||
        ast.body[0].expression.type !== 'FunctionExpression') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {
  /*jslint evil:true*/

  var source = '(' + data + ')',
      ast    = esprima.parse(source, { range: true }),
      params = [],
      body;

  if (ast.type                    !== 'Program'             ||
      ast.body.length             !== 1                     ||
      ast.body[0].type            !== 'ExpressionStatement' ||
      ast.body[0].expression.type !== 'FunctionExpression') {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });

  body = ast.body[0].expression.body.range;

  // Esprima's ranges include the first '{' and the last '}' characters on
  // function expressions. So cut them out.
  /*eslint-disable no-new-func*/
  return new Function(params, source.slice(body[0] + 1, body[1] - 1));
}

function representJavascriptFunction(object /*, style*/) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

var _function = new type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});

var default_full = schema.DEFAULT = new schema({
  include: [
    default_safe
  ],
  explicit: [
    _undefined,
    regexp,
    _function
  ]
});

/*eslint-disable max-len,no-use-before-define*/








var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || default_full;
  this.onWarning = options['onWarning'] || null;
  this.legacy    = options['legacy']    || false;
  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  return new exception(
    message,
    new mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$2.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$2.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  var index, quantity;

  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$2.call(overridableKeys, keyNode) &&
        _hasOwnProperty$2.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _pos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = {},
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.
    _pos = state.position;

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }

    } else {
      break; // Reading is done. Go to the epilogue.
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$2.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type = state.implicitTypes[typeIndex];

        // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only assigned to plain scalars. So, it isn't
        // needed to check for 'kind' conformity.

        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty$2.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$2.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options), index, length;

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


function safeLoadAll(input, output, options) {
  if (typeof output === 'function') {
    loadAll(input, output, common.extend({ schema: default_safe }, options));
  } else {
    return loadAll(input, common.extend({ schema: default_safe }, options));
  }
}


function safeLoad(input, options) {
  return load(input, common.extend({ schema: default_safe }, options));
}


var loadAll_1     = loadAll;
var load_1        = load;
var safeLoadAll_1 = safeLoadAll;
var safeLoad_1    = safeLoad;

var loader = {
	loadAll: loadAll_1,
	load: load_1,
	safeLoadAll: safeLoadAll_1,
	safeLoad: safeLoad_1
};

/*eslint-disable no-use-before-define*/






var _toString$2       = Object.prototype.toString;
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;

var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty$3.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State$1(options) {
  this.schema       = options['schema'] || default_full;
  this.indent       = Math.max(1, (options['indent'] || 2));
  this.skipInvalid  = options['skipInvalid'] || false;
  this.flowLevel    = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap     = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys     = options['sortKeys'] || false;
  this.lineWidth    = options['lineWidth'] || 80;
  this.noRefs       = options['noRefs'] || false;
  this.noCompatMode = options['noCompatMode'] || false;
  this.condenseFlow = options['condenseFlow'] || false;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c) {
  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
  return isPrintable(c) && c !== 0xFEFF
    // - c-flow-indicator
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // - ":" - "#"
    && c !== CHAR_COLON
    && c !== CHAR_SHARP;
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  return isPrintable(c) && c !== 0xFEFF
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

var STYLE_PLAIN   = 1;
var STYLE_SINGLE  = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED  = 4;
var STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i;
  var char;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(string.charCodeAt(0))
          && !isWhitespace(string.charCodeAt(string.length - 1));

  if (singleLineOnly) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    return plain && !testAmbiguousType(string)
      ? STYLE_PLAIN : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (string[0] === ' ' && indentPerLevel > 9) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey) {
  state.dump = (function () {
    if (string.length === 0) {
      return "''";
    }
    if (!state.noCompatMode &&
        DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
      return "'" + string + "'";
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = (string[0] === ' ') ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char, nextChar;
  var escapeSeq;

  for (var i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
    if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
      nextChar = string.charCodeAt(i + 1);
      if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
        // Combine the surrogate pair and store it escaped.
        result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
        // Advance index one extra since we already used that char here.
        i++; continue;
      }
    }
    escapeSeq = ESCAPE_SEQUENCES[char];
    result += !escapeSeq && isPrintable(char)
      ? string[i]
      : escapeSeq || encodeHex(char);
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level, object[index], false, false)) {
      if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = state.condenseFlow ? '"' : '';

    if (index !== 0) pairBuffer += ', ';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      state.tag = explicit ? type.tag : '?';

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString$2.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty$3.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString$2.call(state.dump);

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        writeBlockSequence(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State$1(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

  return '';
}

function safeDump(input, options) {
  return dump(input, common.extend({ schema: default_safe }, options));
}

var dump_1     = dump;
var safeDump_1 = safeDump;

var dumper = {
	dump: dump_1,
	safeDump: safeDump_1
};

function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}


var Type$2                = type;
var Schema$2              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SAFE_SCHEMA$1 = default_safe;
var DEFAULT_FULL_SCHEMA$1 = default_full;
var load$1                = loader.load;
var loadAll$1             = loader.loadAll;
var safeLoad$1            = loader.safeLoad;
var safeLoadAll$1         = loader.safeLoadAll;
var dump$1                = dumper.dump;
var safeDump$1            = dumper.safeDump;
var YAMLException$2       = exception;

// Deprecated schema names from JS-YAML 2.0.x
var MINIMAL_SCHEMA = failsafe;
var SAFE_SCHEMA    = default_safe;
var DEFAULT_SCHEMA = default_full;

// Deprecated functions from JS-YAML 1.x.x
var scan           = deprecated('scan');
var parse          = deprecated('parse');
var compose        = deprecated('compose');
var addConstructor = deprecated('addConstructor');

var jsYaml = {
	Type: Type$2,
	Schema: Schema$2,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SAFE_SCHEMA: DEFAULT_SAFE_SCHEMA$1,
	DEFAULT_FULL_SCHEMA: DEFAULT_FULL_SCHEMA$1,
	load: load$1,
	loadAll: loadAll$1,
	safeLoad: safeLoad$1,
	safeLoadAll: safeLoadAll$1,
	dump: dump$1,
	safeDump: safeDump$1,
	YAMLException: YAMLException$2,
	MINIMAL_SCHEMA: MINIMAL_SCHEMA,
	SAFE_SCHEMA: SAFE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	scan: scan,
	parse: parse,
	compose: compose,
	addConstructor: addConstructor
};

var jsYaml$2 = jsYaml;

var optionalByteOrderMark = '\\ufeff?';
var pattern = '^(' +
  optionalByteOrderMark +
  '(= yaml =|---)' +
  '$([\\s\\S]*?)' +
  '^(?:\\2|\\.\\.\\.)' +
  '$' +
  (process.platform === 'win32' ? '\\r?' : '') +
  '(?:\\n)?)';
// NOTE: If this pattern uses the 'g' flag the `regex` variable definition will
// need to be moved down into the functions that use it.
var regex = new RegExp(pattern, 'm');

var frontMatter = extractor;
var test_1 = test;

function extractor (string) {
  string = string || '';

  var lines = string.split(/(\r?\n)/);
  if (lines[0] && /= yaml =|---/.test(lines[0])) {
    return parse$1(string)
  } else {
    return { attributes: {}, body: string }
  }
}

function parse$1 (string) {
  var match = regex.exec(string);

  if (!match) {
    return {
      attributes: {},
      body: string
    }
  }

  var yaml = match[match.length - 1].replace(/^\s+|\s+$/g, '');
  var attributes = jsYaml$2.load(yaml) || {};
  var body = string.replace(match[0], '');

  return { attributes: attributes, body: body, frontmatter: yaml }
}

function test (string) {
  string = string || '';

  return regex.test(string)
}

frontMatter.test = test_1;

class AppMarked {
    componentWillLoad() {
        return this.fetchNewContent();
    }
    fetchNewContent() {
        console.log('Fetching doc', this.doc);
        return fetch(`/docs-content/${this.doc}.md`)
            .then(response => response.text().then(text => frontMatter(text)))
            .then(data => {
            this.content = data;
            this.content['body'] = marked(this.content['body']);
            // this.el.innerHTML
            // this.el.innerHTML += marked(this.content['body']);
            // requestAnimationFrame is not available for preRendering
            // or SSR, so only run this in the browser
            if (!this.isServer) {
                window.requestAnimationFrame(() => {
                    document.getElementsByTagName('stencil-router')[0].scrollTop = 0;
                });
            }
        });
    }
    render() {
        const attrs = this.content['attributes'];
        const title = attrs.title ? (h("h1", null, attrs.title)) : null;
        console.log(attrs);
        const toc = attrs['hide-toc'] ? null : (h("toc", null));
        return [
            title,
            toc,
            h("main", { innerHTML: this.content['body'] })
        ];
    }
    static get is() { return "app-marked"; }
    static get properties() { return { "content": { "state": true }, "doc": { "type": String, "attr": "doc", "watchCallbacks": ["fetchNewContent"] }, "el": { "elementRef": true }, "isServer": { "context": "isServer" }, "sections": { "state": true } }; }
}

class DropdownFramework {
    constructor() {
        this.active = false;
        this.toggle = this.toggle.bind(this);
        this.clear = this.clear.bind(this);
    }
    toggle() {
        this.active = !this.active;
    }
    clear() {
        this.active = false;
    }
    render() {
        const dropdownClass = this.active ? 'active' : '';
        return [
            h("a", { class: "current", onClick: this.toggle }, "Framework"),
            h("ul", { class: dropdownClass, onMouseLeave: this.clear },
                h("li", { class: "framework active" },
                    h("a", { href: "/docs" },
                        h("strong", null, "Framework Docs"),
                        h("span", null, "The UI Toolkit for building highly performant apps"))),
                h("li", { class: "pro" },
                    h("a", { href: "/docs/pro" },
                        h("strong", null, "Pro Docs"),
                        h("span", null, "Integrated suite of tools & services for shipping apps"))),
                h("li", { class: "cli sm" },
                    h("a", { href: "/docs/cli" },
                        h("strong", null, "CLI"),
                        h("span", null, "Ionic command line interface tool"))),
                h("li", { class: "capacitor sm" },
                    h("a", { href: "", target: "_blank" },
                        h("strong", null, "Capacitor"),
                        h("span", null, "Cross-platform Native SDK Container"))),
                h("li", { class: "stencil sm" },
                    h("a", { href: "https://stenciljs.com", target: "_blank" },
                        h("strong", null, "Stencil"),
                        h("span", null, "Reusable web component compiler"))))
        ];
    }
    static get is() { return "dropdown-framework"; }
    static get properties() { return { "active": { "state": true } }; }
    static get style() { return "dropdown-framework {\n  flex-grow: 1;\n}\n\ndropdown-framework .current {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 600;\n  margin-left: 8px;\n  line-height: 1em;\n  color: #b1d9ff;\n  display: inline-block;\n  letter-spacing: -.02em;\n  vertical-align: text-top;\n  transition: .2s color ease;\n}\n\ndropdown-framework .current::after {\n  content: '';\n  margin-left: 8px;\n  display: inline-block;\n  vertical-align: middle;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 4px solid #b1d9ff;\n  transition: .2s border-top-color ease;\n}\n\ndropdown-framework .current:hover {\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\ndropdown-framework .current:hover::after {\n  border-top-color: white;\n}\n\ndropdown-framework ul {\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  list-style: none;\n  min-width: 460px;\n  display: block;\n  padding: 0;\n  z-index: 1;\n  top: 24px;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-5px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  transition: .4s opacity ease, .4s transform;\n}\n\ndropdown-framework ul::before {\n  background: url(\"/assets/img/ico-nav-arrow.png\") no-repeat 0 0;\n  background-size: 15px;\n  width: 15px;\n  height: 8px;\n  position: absolute;\n  top: -8px;\n  left: 178px;\n  content: '';\n}\n\ndropdown-framework ul::after {\n  content: '';\n  height: 10px;\n  left: 0;\n  right: 0;\n  top: -10px;\n  position: absolute;\n}\n\ndropdown-framework ul.active {\n  transform: translateY(0);\n  opacity: 1;\n  pointer-events: all;\n  transition: .2s opacity ease, .4s transform;\n}\n\ndropdown-framework li {\n  display: block;\n}\n\ndropdown-framework li.active {\n  color: #71757c;\n}\n\ndropdown-framework li:first-child a {\n  padding-top: 23px;\n}\n\ndropdown-framework li:first-child a::before, dropdown-framework li:first-child a::after {\n  top: 30px;\n}\n\ndropdown-framework li:last-child a,\ndropdown-framework li.sm:last-child a {\n  padding-bottom: 27px;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n\ndropdown-framework li a {\n  padding: 6px 12px 16px 84px;\n  display: block;\n  position: relative;\n  outline: none;\n}\n\ndropdown-framework li a::before, dropdown-framework li a::after {\n  background: url(\"/assets/img/dropdown-icons.png\") no-repeat 0 0;\n  background-size: 32px;\n  height: 32px;\n  width: 32px;\n  content: '';\n  position: absolute;\n  top: 14px;\n  left: 32px;\n  transition: .2s opacity;\n}\n\ndropdown-framework li a::after {\n  opacity: 0;\n}\n\ndropdown-framework li.framework a::after {\n  background-position: 0 -32px;\n}\n\ndropdown-framework li.pro a::before {\n  background-position: 0 -64px;\n}\n\ndropdown-framework li.pro a::after {\n  background-position: 0 -96px;\n}\n\ndropdown-framework li.cli a::before {\n  background-position: 0 -128px;\n}\n\ndropdown-framework li.cli a::after {\n  background-position: 0 -160px;\n}\n\ndropdown-framework li.capacitor a::before {\n  background-position: 0 -192px;\n}\n\ndropdown-framework li.capacitor a::after {\n  background-position: 0 -224px;\n}\n\ndropdown-framework li.stencil a::before {\n  background-position: 0 -256px;\n}\n\ndropdown-framework li.stencil a::after {\n  background-position: 0 -288px;\n}\n\ndropdown-framework li:hover a::after {\n  opacity: 1;\n}\n\ndropdown-framework li:hover strong {\n  color: #3880ff;\n}\n\ndropdown-framework li:hover span {\n  color: #545d69;\n}\n\ndropdown-framework li strong {\n  color: #16161d;\n  display: block;\n  letter-spacing: 0;\n  transition: .2s color ease;\n}\n\ndropdown-framework li span {\n  color: #808d9f;\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 14px;\n  letter-spacing: .01em;\n  transition: .2s color ease;\n}\n\ndropdown-framework li.sm a {\n  margin-top: 10px;\n  padding: 20px 0 8px 84px;\n  background: #f6f8fc;\n}\n\ndropdown-framework li.sm a::before, dropdown-framework li.sm a::after {\n  top: 17px;\n}\n\ndropdown-framework li.sm + .sm a {\n  padding-top: 8px;\n  margin-top: 0;\n}\n\ndropdown-framework li.sm + .sm a::before, dropdown-framework li.sm + .sm a::after {\n  top: 5px;\n}\n\ndropdown-framework li.sm strong {\n  display: inline-block;\n  margin-right: 16px;\n}\n\ndropdown-framework li.sm span {\n  display: inline-block;\n  letter-spacing: .01em;\n  position: relative;\n  padding-right: 20px;\n}\n\ndropdown-framework li.sm span::after, dropdown-framework li.sm span::before {\n  background: url(\"/assets/img/new-tab-icon.png\") no-repeat 0 0;\n  background-size: 11px;\n  width: 11px;\n  height: 11px;\n  content: '';\n  position: absolute;\n  right: 0;\n  transition: .2s opacity ease;\n}\n\ndropdown-framework li.sm span::after {\n  opacity: 0;\n  background-position: 0 -11px;\n}\n\ndropdown-framework li.sm:hover span::after {\n  opacity: 1;\n}\n\ndropdown-framework li.active strong::after {\n  font-family: 'Ionicons';\n  display: inline-block;\n  position: absolute;\n  content: '\\f2bc';\n  font-size: 18px;\n  color: #3880ff;\n  right: 30px;\n  top: 33px;\n}"; }
}

class App {
    render() {
        return [
            // top level grid elements are prefixed 'site-' to keep things organized
            h("site-header", null),
            h("site-menu", null),
            h("stencil-router", null,
                h("stencil-route", { url: ['/docs', 'docs/:docPath'], group: "main", routeRender: (props) => {
                        // console.log('Route render!', props.match, props.match.params);
                        const docPath = props.match.params.docPath ?
                            props.match.params.docPath.substring(0, 4) : '/index';
                        return [
                            h("app-marked", { doc: docPath }),
                            h("site-preview-app", null)
                        ];
                    } }),
                h("stencil-route", { url: "/", exact: true, routeRender: () => {
                        return h("stencil-router-redirect", { url: "/docs" });
                    } })),
        ];
    }
    static get is() { return "ionic-docs"; }
    static get style() { return "\@charset \"UTF-8\";\n/*!\n  Ionicons, v3.0.0-alpha.3\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/\n\@font-face {\n  font-family: \"Ionicons\";\n  src: url(\"/assets/fonts/ionicons/3.0.0-alpha.3/ionicons.eot?v=3.0.0-alpha.3\");\n  src: url(\"/assets/fonts/ionicons/3.0.0-alpha.3/ionicons.eot?v=3.0.0-alpha.3#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/ionicons/3.0.0-alpha.3/ionicons.woff2?v=3.0.0-alpha.3\") format(\"woff2\"), url(\"/assets/fonts/ionicons/3.0.0-alpha.3/ionicons.woff?v=3.0.0-alpha.3\") format(\"woff\"), url(\"/assets/fonts/ionicons/3.0.0-alpha.3/ionicons.ttf?v=3.0.0-alpha.3\") format(\"truetype\"), url(\"/assets/fonts/ionicons/3.0.0-alpha.3/ionicons.svg?v=3.0.0-alpha.3#Ionicons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.ion, .ionicons,\n.ion-ios-add:before,\n.ion-ios-add-circle:before,\n.ion-ios-add-circle-outline:before,\n.ion-ios-add-outline:before,\n.ion-ios-alarm:before,\n.ion-ios-alarm-outline:before,\n.ion-ios-albums:before,\n.ion-ios-albums-outline:before,\n.ion-ios-alert:before,\n.ion-ios-alert-outline:before,\n.ion-ios-american-football:before,\n.ion-ios-american-football-outline:before,\n.ion-ios-analytics:before,\n.ion-ios-analytics-outline:before,\n.ion-ios-aperture:before,\n.ion-ios-aperture-outline:before,\n.ion-ios-apps:before,\n.ion-ios-apps-outline:before,\n.ion-ios-appstore:before,\n.ion-ios-appstore-outline:before,\n.ion-ios-archive:before,\n.ion-ios-archive-outline:before,\n.ion-ios-arrow-back:before,\n.ion-ios-arrow-back-outline:before,\n.ion-ios-arrow-down:before,\n.ion-ios-arrow-down-outline:before,\n.ion-ios-arrow-dropdown:before,\n.ion-ios-arrow-dropdown-circle:before,\n.ion-ios-arrow-dropdown-circle-outline:before,\n.ion-ios-arrow-dropdown-outline:before,\n.ion-ios-arrow-dropleft:before,\n.ion-ios-arrow-dropleft-circle:before,\n.ion-ios-arrow-dropleft-circle-outline:before,\n.ion-ios-arrow-dropleft-outline:before,\n.ion-ios-arrow-dropright:before,\n.ion-ios-arrow-dropright-circle:before,\n.ion-ios-arrow-dropright-circle-outline:before,\n.ion-ios-arrow-dropright-outline:before,\n.ion-ios-arrow-dropup:before,\n.ion-ios-arrow-dropup-circle:before,\n.ion-ios-arrow-dropup-circle-outline:before,\n.ion-ios-arrow-dropup-outline:before,\n.ion-ios-arrow-forward:before,\n.ion-ios-arrow-forward-outline:before,\n.ion-ios-arrow-round-back:before,\n.ion-ios-arrow-round-back-outline:before,\n.ion-ios-arrow-round-down:before,\n.ion-ios-arrow-round-down-outline:before,\n.ion-ios-arrow-round-forward:before,\n.ion-ios-arrow-round-forward-outline:before,\n.ion-ios-arrow-round-up:before,\n.ion-ios-arrow-round-up-outline:before,\n.ion-ios-arrow-up:before,\n.ion-ios-arrow-up-outline:before,\n.ion-ios-at:before,\n.ion-ios-at-outline:before,\n.ion-ios-attach:before,\n.ion-ios-attach-outline:before,\n.ion-ios-backspace:before,\n.ion-ios-backspace-outline:before,\n.ion-ios-barcode:before,\n.ion-ios-barcode-outline:before,\n.ion-ios-baseball:before,\n.ion-ios-baseball-outline:before,\n.ion-ios-basket:before,\n.ion-ios-basket-outline:before,\n.ion-ios-basketball:before,\n.ion-ios-basketball-outline:before,\n.ion-ios-battery-charging:before,\n.ion-ios-battery-charging-outline:before,\n.ion-ios-battery-dead:before,\n.ion-ios-battery-dead-outline:before,\n.ion-ios-battery-full:before,\n.ion-ios-battery-full-outline:before,\n.ion-ios-beaker:before,\n.ion-ios-beaker-outline:before,\n.ion-ios-beer:before,\n.ion-ios-beer-outline:before,\n.ion-ios-bicycle:before,\n.ion-ios-bicycle-outline:before,\n.ion-ios-bluetooth:before,\n.ion-ios-bluetooth-outline:before,\n.ion-ios-boat:before,\n.ion-ios-boat-outline:before,\n.ion-ios-body:before,\n.ion-ios-body-outline:before,\n.ion-ios-bonfire:before,\n.ion-ios-bonfire-outline:before,\n.ion-ios-book:before,\n.ion-ios-book-outline:before,\n.ion-ios-bookmark:before,\n.ion-ios-bookmark-outline:before,\n.ion-ios-bookmarks:before,\n.ion-ios-bookmarks-outline:before,\n.ion-ios-bowtie:before,\n.ion-ios-bowtie-outline:before,\n.ion-ios-briefcase:before,\n.ion-ios-briefcase-outline:before,\n.ion-ios-browsers:before,\n.ion-ios-browsers-outline:before,\n.ion-ios-brush:before,\n.ion-ios-brush-outline:before,\n.ion-ios-bug:before,\n.ion-ios-bug-outline:before,\n.ion-ios-build:before,\n.ion-ios-build-outline:before,\n.ion-ios-bulb:before,\n.ion-ios-bulb-outline:before,\n.ion-ios-bus:before,\n.ion-ios-bus-outline:before,\n.ion-ios-cafe:before,\n.ion-ios-cafe-outline:before,\n.ion-ios-calculator:before,\n.ion-ios-calculator-outline:before,\n.ion-ios-calendar:before,\n.ion-ios-calendar-outline:before,\n.ion-ios-call:before,\n.ion-ios-call-outline:before,\n.ion-ios-camera:before,\n.ion-ios-camera-outline:before,\n.ion-ios-car:before,\n.ion-ios-car-outline:before,\n.ion-ios-card:before,\n.ion-ios-card-outline:before,\n.ion-ios-cart:before,\n.ion-ios-cart-outline:before,\n.ion-ios-cash:before,\n.ion-ios-cash-outline:before,\n.ion-ios-chatboxes:before,\n.ion-ios-chatboxes-outline:before,\n.ion-ios-chatbubbles:before,\n.ion-ios-chatbubbles-outline:before,\n.ion-ios-checkbox:before,\n.ion-ios-checkbox-outline:before,\n.ion-ios-checkmark:before,\n.ion-ios-checkmark-circle:before,\n.ion-ios-checkmark-circle-outline:before,\n.ion-ios-checkmark-outline:before,\n.ion-ios-clipboard:before,\n.ion-ios-clipboard-outline:before,\n.ion-ios-clock:before,\n.ion-ios-clock-outline:before,\n.ion-ios-close:before,\n.ion-ios-close-circle:before,\n.ion-ios-close-circle-outline:before,\n.ion-ios-close-outline:before,\n.ion-ios-closed-captioning:before,\n.ion-ios-closed-captioning-outline:before,\n.ion-ios-cloud:before,\n.ion-ios-cloud-circle:before,\n.ion-ios-cloud-circle-outline:before,\n.ion-ios-cloud-done:before,\n.ion-ios-cloud-done-outline:before,\n.ion-ios-cloud-download:before,\n.ion-ios-cloud-download-outline:before,\n.ion-ios-cloud-outline:before,\n.ion-ios-cloud-upload:before,\n.ion-ios-cloud-upload-outline:before,\n.ion-ios-cloudy:before,\n.ion-ios-cloudy-night:before,\n.ion-ios-cloudy-night-outline:before,\n.ion-ios-cloudy-outline:before,\n.ion-ios-code:before,\n.ion-ios-code-download:before,\n.ion-ios-code-download-outline:before,\n.ion-ios-code-outline:before,\n.ion-ios-code-working:before,\n.ion-ios-code-working-outline:before,\n.ion-ios-cog:before,\n.ion-ios-cog-outline:before,\n.ion-ios-color-fill:before,\n.ion-ios-color-fill-outline:before,\n.ion-ios-color-filter:before,\n.ion-ios-color-filter-outline:before,\n.ion-ios-color-palette:before,\n.ion-ios-color-palette-outline:before,\n.ion-ios-color-wand:before,\n.ion-ios-color-wand-outline:before,\n.ion-ios-compass:before,\n.ion-ios-compass-outline:before,\n.ion-ios-construct:before,\n.ion-ios-construct-outline:before,\n.ion-ios-contact:before,\n.ion-ios-contact-outline:before,\n.ion-ios-contacts:before,\n.ion-ios-contacts-outline:before,\n.ion-ios-contract:before,\n.ion-ios-contract-outline:before,\n.ion-ios-contrast:before,\n.ion-ios-contrast-outline:before,\n.ion-ios-copy:before,\n.ion-ios-copy-outline:before,\n.ion-ios-create:before,\n.ion-ios-create-outline:before,\n.ion-ios-crop:before,\n.ion-ios-crop-outline:before,\n.ion-ios-cube:before,\n.ion-ios-cube-outline:before,\n.ion-ios-cut:before,\n.ion-ios-cut-outline:before,\n.ion-ios-desktop:before,\n.ion-ios-desktop-outline:before,\n.ion-ios-disc:before,\n.ion-ios-disc-outline:before,\n.ion-ios-document:before,\n.ion-ios-document-outline:before,\n.ion-ios-done-all:before,\n.ion-ios-done-all-outline:before,\n.ion-ios-download:before,\n.ion-ios-download-outline:before,\n.ion-ios-easel:before,\n.ion-ios-easel-outline:before,\n.ion-ios-egg:before,\n.ion-ios-egg-outline:before,\n.ion-ios-exit:before,\n.ion-ios-exit-outline:before,\n.ion-ios-expand:before,\n.ion-ios-expand-outline:before,\n.ion-ios-eye:before,\n.ion-ios-eye-off:before,\n.ion-ios-eye-off-outline:before,\n.ion-ios-eye-outline:before,\n.ion-ios-fastforward:before,\n.ion-ios-fastforward-outline:before,\n.ion-ios-female:before,\n.ion-ios-female-outline:before,\n.ion-ios-filing:before,\n.ion-ios-filing-outline:before,\n.ion-ios-film:before,\n.ion-ios-film-outline:before,\n.ion-ios-finger-print:before,\n.ion-ios-finger-print-outline:before,\n.ion-ios-flag:before,\n.ion-ios-flag-outline:before,\n.ion-ios-flame:before,\n.ion-ios-flame-outline:before,\n.ion-ios-flash:before,\n.ion-ios-flash-outline:before,\n.ion-ios-flask:before,\n.ion-ios-flask-outline:before,\n.ion-ios-flower:before,\n.ion-ios-flower-outline:before,\n.ion-ios-folder:before,\n.ion-ios-folder-open:before,\n.ion-ios-folder-open-outline:before,\n.ion-ios-folder-outline:before,\n.ion-ios-football:before,\n.ion-ios-football-outline:before,\n.ion-ios-funnel:before,\n.ion-ios-funnel-outline:before,\n.ion-ios-game-controller-a:before,\n.ion-ios-game-controller-a-outline:before,\n.ion-ios-game-controller-b:before,\n.ion-ios-game-controller-b-outline:before,\n.ion-ios-git-branch:before,\n.ion-ios-git-branch-outline:before,\n.ion-ios-git-commit:before,\n.ion-ios-git-commit-outline:before,\n.ion-ios-git-compare:before,\n.ion-ios-git-compare-outline:before,\n.ion-ios-git-merge:before,\n.ion-ios-git-merge-outline:before,\n.ion-ios-git-network:before,\n.ion-ios-git-network-outline:before,\n.ion-ios-git-pull-request:before,\n.ion-ios-git-pull-request-outline:before,\n.ion-ios-glasses:before,\n.ion-ios-glasses-outline:before,\n.ion-ios-globe:before,\n.ion-ios-globe-outline:before,\n.ion-ios-grid:before,\n.ion-ios-grid-outline:before,\n.ion-ios-hammer:before,\n.ion-ios-hammer-outline:before,\n.ion-ios-hand:before,\n.ion-ios-hand-outline:before,\n.ion-ios-happy:before,\n.ion-ios-happy-outline:before,\n.ion-ios-headset:before,\n.ion-ios-headset-outline:before,\n.ion-ios-heart:before,\n.ion-ios-heart-outline:before,\n.ion-ios-help:before,\n.ion-ios-help-buoy:before,\n.ion-ios-help-buoy-outline:before,\n.ion-ios-help-circle:before,\n.ion-ios-help-circle-outline:before,\n.ion-ios-help-outline:before,\n.ion-ios-home:before,\n.ion-ios-home-outline:before,\n.ion-ios-ice-cream:before,\n.ion-ios-ice-cream-outline:before,\n.ion-ios-image:before,\n.ion-ios-image-outline:before,\n.ion-ios-images:before,\n.ion-ios-images-outline:before,\n.ion-ios-infinite:before,\n.ion-ios-infinite-outline:before,\n.ion-ios-information:before,\n.ion-ios-information-circle:before,\n.ion-ios-information-circle-outline:before,\n.ion-ios-information-outline:before,\n.ion-ios-ionic:before,\n.ion-ios-ionic-outline:before,\n.ion-ios-ionitron:before,\n.ion-ios-ionitron-outline:before,\n.ion-ios-jet:before,\n.ion-ios-jet-outline:before,\n.ion-ios-key:before,\n.ion-ios-key-outline:before,\n.ion-ios-keypad:before,\n.ion-ios-keypad-outline:before,\n.ion-ios-laptop:before,\n.ion-ios-laptop-outline:before,\n.ion-ios-leaf:before,\n.ion-ios-leaf-outline:before,\n.ion-ios-link:before,\n.ion-ios-link-outline:before,\n.ion-ios-list:before,\n.ion-ios-list-box:before,\n.ion-ios-list-box-outline:before,\n.ion-ios-list-outline:before,\n.ion-ios-locate:before,\n.ion-ios-locate-outline:before,\n.ion-ios-lock:before,\n.ion-ios-lock-outline:before,\n.ion-ios-log-in:before,\n.ion-ios-log-in-outline:before,\n.ion-ios-log-out:before,\n.ion-ios-log-out-outline:before,\n.ion-ios-magnet:before,\n.ion-ios-magnet-outline:before,\n.ion-ios-mail:before,\n.ion-ios-mail-open:before,\n.ion-ios-mail-open-outline:before,\n.ion-ios-mail-outline:before,\n.ion-ios-male:before,\n.ion-ios-male-outline:before,\n.ion-ios-man:before,\n.ion-ios-man-outline:before,\n.ion-ios-map:before,\n.ion-ios-map-outline:before,\n.ion-ios-medal:before,\n.ion-ios-medal-outline:before,\n.ion-ios-medical:before,\n.ion-ios-medical-outline:before,\n.ion-ios-medkit:before,\n.ion-ios-medkit-outline:before,\n.ion-ios-megaphone:before,\n.ion-ios-megaphone-outline:before,\n.ion-ios-menu:before,\n.ion-ios-menu-outline:before,\n.ion-ios-mic:before,\n.ion-ios-mic-off:before,\n.ion-ios-mic-off-outline:before,\n.ion-ios-mic-outline:before,\n.ion-ios-microphone:before,\n.ion-ios-microphone-outline:before,\n.ion-ios-moon:before,\n.ion-ios-moon-outline:before,\n.ion-ios-more:before,\n.ion-ios-more-outline:before,\n.ion-ios-move:before,\n.ion-ios-move-outline:before,\n.ion-ios-musical-note:before,\n.ion-ios-musical-note-outline:before,\n.ion-ios-musical-notes:before,\n.ion-ios-musical-notes-outline:before,\n.ion-ios-navigate:before,\n.ion-ios-navigate-outline:before,\n.ion-ios-no-smoking:before,\n.ion-ios-no-smoking-outline:before,\n.ion-ios-notifications:before,\n.ion-ios-notifications-off:before,\n.ion-ios-notifications-off-outline:before,\n.ion-ios-notifications-outline:before,\n.ion-ios-nuclear:before,\n.ion-ios-nuclear-outline:before,\n.ion-ios-nutrition:before,\n.ion-ios-nutrition-outline:before,\n.ion-ios-open:before,\n.ion-ios-open-outline:before,\n.ion-ios-options:before,\n.ion-ios-options-outline:before,\n.ion-ios-outlet:before,\n.ion-ios-outlet-outline:before,\n.ion-ios-paper:before,\n.ion-ios-paper-outline:before,\n.ion-ios-paper-plane:before,\n.ion-ios-paper-plane-outline:before,\n.ion-ios-partly-sunny:before,\n.ion-ios-partly-sunny-outline:before,\n.ion-ios-pause:before,\n.ion-ios-pause-outline:before,\n.ion-ios-paw:before,\n.ion-ios-paw-outline:before,\n.ion-ios-people:before,\n.ion-ios-people-outline:before,\n.ion-ios-person:before,\n.ion-ios-person-add:before,\n.ion-ios-person-add-outline:before,\n.ion-ios-person-outline:before,\n.ion-ios-phone-landscape:before,\n.ion-ios-phone-landscape-outline:before,\n.ion-ios-phone-portrait:before,\n.ion-ios-phone-portrait-outline:before,\n.ion-ios-photos:before,\n.ion-ios-photos-outline:before,\n.ion-ios-pie:before,\n.ion-ios-pie-outline:before,\n.ion-ios-pin:before,\n.ion-ios-pin-outline:before,\n.ion-ios-pint:before,\n.ion-ios-pint-outline:before,\n.ion-ios-pizza:before,\n.ion-ios-pizza-outline:before,\n.ion-ios-plane:before,\n.ion-ios-plane-outline:before,\n.ion-ios-planet:before,\n.ion-ios-planet-outline:before,\n.ion-ios-play:before,\n.ion-ios-play-outline:before,\n.ion-ios-podium:before,\n.ion-ios-podium-outline:before,\n.ion-ios-power:before,\n.ion-ios-power-outline:before,\n.ion-ios-pricetag:before,\n.ion-ios-pricetag-outline:before,\n.ion-ios-pricetags:before,\n.ion-ios-pricetags-outline:before,\n.ion-ios-print:before,\n.ion-ios-print-outline:before,\n.ion-ios-pulse:before,\n.ion-ios-pulse-outline:before,\n.ion-ios-qr-scanner:before,\n.ion-ios-qr-scanner-outline:before,\n.ion-ios-quote:before,\n.ion-ios-quote-outline:before,\n.ion-ios-radio:before,\n.ion-ios-radio-button-off:before,\n.ion-ios-radio-button-off-outline:before,\n.ion-ios-radio-button-on:before,\n.ion-ios-radio-button-on-outline:before,\n.ion-ios-radio-outline:before,\n.ion-ios-rainy:before,\n.ion-ios-rainy-outline:before,\n.ion-ios-recording:before,\n.ion-ios-recording-outline:before,\n.ion-ios-redo:before,\n.ion-ios-redo-outline:before,\n.ion-ios-refresh:before,\n.ion-ios-refresh-circle:before,\n.ion-ios-refresh-circle-outline:before,\n.ion-ios-refresh-outline:before,\n.ion-ios-remove:before,\n.ion-ios-remove-circle:before,\n.ion-ios-remove-circle-outline:before,\n.ion-ios-remove-outline:before,\n.ion-ios-reorder:before,\n.ion-ios-reorder-outline:before,\n.ion-ios-repeat:before,\n.ion-ios-repeat-outline:before,\n.ion-ios-resize:before,\n.ion-ios-resize-outline:before,\n.ion-ios-restaurant:before,\n.ion-ios-restaurant-outline:before,\n.ion-ios-return-left:before,\n.ion-ios-return-left-outline:before,\n.ion-ios-return-right:before,\n.ion-ios-return-right-outline:before,\n.ion-ios-reverse-camera:before,\n.ion-ios-reverse-camera-outline:before,\n.ion-ios-rewind:before,\n.ion-ios-rewind-outline:before,\n.ion-ios-ribbon:before,\n.ion-ios-ribbon-outline:before,\n.ion-ios-rose:before,\n.ion-ios-rose-outline:before,\n.ion-ios-sad:before,\n.ion-ios-sad-outline:before,\n.ion-ios-school:before,\n.ion-ios-school-outline:before,\n.ion-ios-search:before,\n.ion-ios-search-outline:before,\n.ion-ios-send:before,\n.ion-ios-send-outline:before,\n.ion-ios-settings:before,\n.ion-ios-settings-outline:before,\n.ion-ios-share:before,\n.ion-ios-share-alt:before,\n.ion-ios-share-alt-outline:before,\n.ion-ios-share-outline:before,\n.ion-ios-shirt:before,\n.ion-ios-shirt-outline:before,\n.ion-ios-shuffle:before,\n.ion-ios-shuffle-outline:before,\n.ion-ios-skip-backward:before,\n.ion-ios-skip-backward-outline:before,\n.ion-ios-skip-forward:before,\n.ion-ios-skip-forward-outline:before,\n.ion-ios-snow:before,\n.ion-ios-snow-outline:before,\n.ion-ios-speedometer:before,\n.ion-ios-speedometer-outline:before,\n.ion-ios-square:before,\n.ion-ios-square-outline:before,\n.ion-ios-star:before,\n.ion-ios-star-half:before,\n.ion-ios-star-half-outline:before,\n.ion-ios-star-outline:before,\n.ion-ios-stats:before,\n.ion-ios-stats-outline:before,\n.ion-ios-stopwatch:before,\n.ion-ios-stopwatch-outline:before,\n.ion-ios-subway:before,\n.ion-ios-subway-outline:before,\n.ion-ios-sunny:before,\n.ion-ios-sunny-outline:before,\n.ion-ios-swap:before,\n.ion-ios-swap-outline:before,\n.ion-ios-switch:before,\n.ion-ios-switch-outline:before,\n.ion-ios-sync:before,\n.ion-ios-sync-outline:before,\n.ion-ios-tablet-landscape:before,\n.ion-ios-tablet-landscape-outline:before,\n.ion-ios-tablet-portrait:before,\n.ion-ios-tablet-portrait-outline:before,\n.ion-ios-tennisball:before,\n.ion-ios-tennisball-outline:before,\n.ion-ios-text:before,\n.ion-ios-text-outline:before,\n.ion-ios-thermometer:before,\n.ion-ios-thermometer-outline:before,\n.ion-ios-thumbs-down:before,\n.ion-ios-thumbs-down-outline:before,\n.ion-ios-thumbs-up:before,\n.ion-ios-thumbs-up-outline:before,\n.ion-ios-thunderstorm:before,\n.ion-ios-thunderstorm-outline:before,\n.ion-ios-time:before,\n.ion-ios-time-outline:before,\n.ion-ios-timer:before,\n.ion-ios-timer-outline:before,\n.ion-ios-train:before,\n.ion-ios-train-outline:before,\n.ion-ios-transgender:before,\n.ion-ios-transgender-outline:before,\n.ion-ios-trash:before,\n.ion-ios-trash-outline:before,\n.ion-ios-trending-down:before,\n.ion-ios-trending-down-outline:before,\n.ion-ios-trending-up:before,\n.ion-ios-trending-up-outline:before,\n.ion-ios-trophy:before,\n.ion-ios-trophy-outline:before,\n.ion-ios-umbrella:before,\n.ion-ios-umbrella-outline:before,\n.ion-ios-undo:before,\n.ion-ios-undo-outline:before,\n.ion-ios-unlock:before,\n.ion-ios-unlock-outline:before,\n.ion-ios-videocam:before,\n.ion-ios-videocam-outline:before,\n.ion-ios-volume-down:before,\n.ion-ios-volume-down-outline:before,\n.ion-ios-volume-mute:before,\n.ion-ios-volume-mute-outline:before,\n.ion-ios-volume-off:before,\n.ion-ios-volume-off-outline:before,\n.ion-ios-volume-up:before,\n.ion-ios-volume-up-outline:before,\n.ion-ios-walk:before,\n.ion-ios-walk-outline:before,\n.ion-ios-warning:before,\n.ion-ios-warning-outline:before,\n.ion-ios-watch:before,\n.ion-ios-watch-outline:before,\n.ion-ios-water:before,\n.ion-ios-water-outline:before,\n.ion-ios-wifi:before,\n.ion-ios-wifi-outline:before,\n.ion-ios-wine:before,\n.ion-ios-wine-outline:before,\n.ion-ios-woman:before,\n.ion-ios-woman-outline:before,\n.ion-logo-android:before,\n.ion-logo-angular:before,\n.ion-logo-apple:before,\n.ion-logo-bitcoin:before,\n.ion-logo-buffer:before,\n.ion-logo-chrome:before,\n.ion-logo-codepen:before,\n.ion-logo-css3:before,\n.ion-logo-designernews:before,\n.ion-logo-dribbble:before,\n.ion-logo-dropbox:before,\n.ion-logo-euro:before,\n.ion-logo-facebook:before,\n.ion-logo-foursquare:before,\n.ion-logo-freebsd-devil:before,\n.ion-logo-github:before,\n.ion-logo-google:before,\n.ion-logo-googleplus:before,\n.ion-logo-hackernews:before,\n.ion-logo-html5:before,\n.ion-logo-instagram:before,\n.ion-logo-javascript:before,\n.ion-logo-linkedin:before,\n.ion-logo-markdown:before,\n.ion-logo-nodejs:before,\n.ion-logo-octocat:before,\n.ion-logo-pinterest:before,\n.ion-logo-playstation:before,\n.ion-logo-python:before,\n.ion-logo-reddit:before,\n.ion-logo-rss:before,\n.ion-logo-sass:before,\n.ion-logo-skype:before,\n.ion-logo-snapchat:before,\n.ion-logo-steam:before,\n.ion-logo-tumblr:before,\n.ion-logo-tux:before,\n.ion-logo-twitch:before,\n.ion-logo-twitter:before,\n.ion-logo-usd:before,\n.ion-logo-vimeo:before,\n.ion-logo-whatsapp:before,\n.ion-logo-windows:before,\n.ion-logo-wordpress:before,\n.ion-logo-xbox:before,\n.ion-logo-yahoo:before,\n.ion-logo-yen:before,\n.ion-logo-youtube:before,\n.ion-md-add:before,\n.ion-md-add-circle:before,\n.ion-md-alarm:before,\n.ion-md-albums:before,\n.ion-md-alert:before,\n.ion-md-american-football:before,\n.ion-md-analytics:before,\n.ion-md-aperture:before,\n.ion-md-apps:before,\n.ion-md-appstore:before,\n.ion-md-archive:before,\n.ion-md-arrow-back:before,\n.ion-md-arrow-down:before,\n.ion-md-arrow-dropdown:before,\n.ion-md-arrow-dropdown-circle:before,\n.ion-md-arrow-dropleft:before,\n.ion-md-arrow-dropleft-circle:before,\n.ion-md-arrow-dropright:before,\n.ion-md-arrow-dropright-circle:before,\n.ion-md-arrow-dropup:before,\n.ion-md-arrow-dropup-circle:before,\n.ion-md-arrow-forward:before,\n.ion-md-arrow-round-back:before,\n.ion-md-arrow-round-down:before,\n.ion-md-arrow-round-forward:before,\n.ion-md-arrow-round-up:before,\n.ion-md-arrow-up:before,\n.ion-md-at:before,\n.ion-md-attach:before,\n.ion-md-backspace:before,\n.ion-md-barcode:before,\n.ion-md-baseball:before,\n.ion-md-basket:before,\n.ion-md-basketball:before,\n.ion-md-battery-charging:before,\n.ion-md-battery-dead:before,\n.ion-md-battery-full:before,\n.ion-md-beaker:before,\n.ion-md-beer:before,\n.ion-md-bicycle:before,\n.ion-md-bluetooth:before,\n.ion-md-boat:before,\n.ion-md-body:before,\n.ion-md-bonfire:before,\n.ion-md-book:before,\n.ion-md-bookmark:before,\n.ion-md-bookmarks:before,\n.ion-md-bowtie:before,\n.ion-md-briefcase:before,\n.ion-md-browsers:before,\n.ion-md-brush:before,\n.ion-md-bug:before,\n.ion-md-build:before,\n.ion-md-bulb:before,\n.ion-md-bus:before,\n.ion-md-cafe:before,\n.ion-md-calculator:before,\n.ion-md-calendar:before,\n.ion-md-call:before,\n.ion-md-camera:before,\n.ion-md-car:before,\n.ion-md-card:before,\n.ion-md-cart:before,\n.ion-md-cash:before,\n.ion-md-chatboxes:before,\n.ion-md-chatbubbles:before,\n.ion-md-checkbox:before,\n.ion-md-checkbox-outline:before,\n.ion-md-checkmark:before,\n.ion-md-checkmark-circle:before,\n.ion-md-checkmark-circle-outline:before,\n.ion-md-clipboard:before,\n.ion-md-clock:before,\n.ion-md-close:before,\n.ion-md-close-circle:before,\n.ion-md-closed-captioning:before,\n.ion-md-cloud:before,\n.ion-md-cloud-circle:before,\n.ion-md-cloud-done:before,\n.ion-md-cloud-download:before,\n.ion-md-cloud-outline:before,\n.ion-md-cloud-upload:before,\n.ion-md-cloudy:before,\n.ion-md-cloudy-night:before,\n.ion-md-code:before,\n.ion-md-code-download:before,\n.ion-md-code-working:before,\n.ion-md-cog:before,\n.ion-md-color-fill:before,\n.ion-md-color-filter:before,\n.ion-md-color-palette:before,\n.ion-md-color-wand:before,\n.ion-md-compass:before,\n.ion-md-construct:before,\n.ion-md-contact:before,\n.ion-md-contacts:before,\n.ion-md-contract:before,\n.ion-md-contrast:before,\n.ion-md-copy:before,\n.ion-md-create:before,\n.ion-md-crop:before,\n.ion-md-cube:before,\n.ion-md-cut:before,\n.ion-md-desktop:before,\n.ion-md-disc:before,\n.ion-md-document:before,\n.ion-md-done-all:before,\n.ion-md-download:before,\n.ion-md-easel:before,\n.ion-md-egg:before,\n.ion-md-exit:before,\n.ion-md-expand:before,\n.ion-md-eye:before,\n.ion-md-eye-off:before,\n.ion-md-fastforward:before,\n.ion-md-female:before,\n.ion-md-filing:before,\n.ion-md-film:before,\n.ion-md-finger-print:before,\n.ion-md-flag:before,\n.ion-md-flame:before,\n.ion-md-flash:before,\n.ion-md-flask:before,\n.ion-md-flower:before,\n.ion-md-folder:before,\n.ion-md-folder-open:before,\n.ion-md-football:before,\n.ion-md-funnel:before,\n.ion-md-game-controller-a:before,\n.ion-md-game-controller-b:before,\n.ion-md-git-branch:before,\n.ion-md-git-commit:before,\n.ion-md-git-compare:before,\n.ion-md-git-merge:before,\n.ion-md-git-network:before,\n.ion-md-git-pull-request:before,\n.ion-md-glasses:before,\n.ion-md-globe:before,\n.ion-md-grid:before,\n.ion-md-hammer:before,\n.ion-md-hand:before,\n.ion-md-happy:before,\n.ion-md-headset:before,\n.ion-md-heart:before,\n.ion-md-heart-outline:before,\n.ion-md-help:before,\n.ion-md-help-buoy:before,\n.ion-md-help-circle:before,\n.ion-md-home:before,\n.ion-md-ice-cream:before,\n.ion-md-image:before,\n.ion-md-images:before,\n.ion-md-infinite:before,\n.ion-md-information:before,\n.ion-md-information-circle:before,\n.ion-md-ionic:before,\n.ion-md-ionitron:before,\n.ion-md-jet:before,\n.ion-md-key:before,\n.ion-md-keypad:before,\n.ion-md-laptop:before,\n.ion-md-leaf:before,\n.ion-md-link:before,\n.ion-md-list:before,\n.ion-md-list-box:before,\n.ion-md-locate:before,\n.ion-md-lock:before,\n.ion-md-log-in:before,\n.ion-md-log-out:before,\n.ion-md-magnet:before,\n.ion-md-mail:before,\n.ion-md-mail-open:before,\n.ion-md-male:before,\n.ion-md-man:before,\n.ion-md-map:before,\n.ion-md-medal:before,\n.ion-md-medical:before,\n.ion-md-medkit:before,\n.ion-md-megaphone:before,\n.ion-md-menu:before,\n.ion-md-mic:before,\n.ion-md-mic-off:before,\n.ion-md-microphone:before,\n.ion-md-moon:before,\n.ion-md-more:before,\n.ion-md-move:before,\n.ion-md-musical-note:before,\n.ion-md-musical-notes:before,\n.ion-md-navigate:before,\n.ion-md-no-smoking:before,\n.ion-md-notifications:before,\n.ion-md-notifications-off:before,\n.ion-md-notifications-outline:before,\n.ion-md-nuclear:before,\n.ion-md-nutrition:before,\n.ion-md-open:before,\n.ion-md-options:before,\n.ion-md-outlet:before,\n.ion-md-paper:before,\n.ion-md-paper-plane:before,\n.ion-md-partly-sunny:before,\n.ion-md-pause:before,\n.ion-md-paw:before,\n.ion-md-people:before,\n.ion-md-person:before,\n.ion-md-person-add:before,\n.ion-md-phone-landscape:before,\n.ion-md-phone-portrait:before,\n.ion-md-photos:before,\n.ion-md-pie:before,\n.ion-md-pin:before,\n.ion-md-pint:before,\n.ion-md-pizza:before,\n.ion-md-plane:before,\n.ion-md-planet:before,\n.ion-md-play:before,\n.ion-md-podium:before,\n.ion-md-power:before,\n.ion-md-pricetag:before,\n.ion-md-pricetags:before,\n.ion-md-print:before,\n.ion-md-pulse:before,\n.ion-md-qr-scanner:before,\n.ion-md-quote:before,\n.ion-md-radio:before,\n.ion-md-radio-button-off:before,\n.ion-md-radio-button-on:before,\n.ion-md-rainy:before,\n.ion-md-recording:before,\n.ion-md-redo:before,\n.ion-md-refresh:before,\n.ion-md-refresh-circle:before,\n.ion-md-remove:before,\n.ion-md-remove-circle:before,\n.ion-md-reorder:before,\n.ion-md-repeat:before,\n.ion-md-resize:before,\n.ion-md-restaurant:before,\n.ion-md-return-left:before,\n.ion-md-return-right:before,\n.ion-md-reverse-camera:before,\n.ion-md-rewind:before,\n.ion-md-ribbon:before,\n.ion-md-rose:before,\n.ion-md-sad:before,\n.ion-md-school:before,\n.ion-md-search:before,\n.ion-md-send:before,\n.ion-md-settings:before,\n.ion-md-share:before,\n.ion-md-share-alt:before,\n.ion-md-shirt:before,\n.ion-md-shuffle:before,\n.ion-md-skip-backward:before,\n.ion-md-skip-forward:before,\n.ion-md-snow:before,\n.ion-md-speedometer:before,\n.ion-md-square:before,\n.ion-md-square-outline:before,\n.ion-md-star:before,\n.ion-md-star-half:before,\n.ion-md-star-outline:before,\n.ion-md-stats:before,\n.ion-md-stopwatch:before,\n.ion-md-subway:before,\n.ion-md-sunny:before,\n.ion-md-swap:before,\n.ion-md-switch:before,\n.ion-md-sync:before,\n.ion-md-tablet-landscape:before,\n.ion-md-tablet-portrait:before,\n.ion-md-tennisball:before,\n.ion-md-text:before,\n.ion-md-thermometer:before,\n.ion-md-thumbs-down:before,\n.ion-md-thumbs-up:before,\n.ion-md-thunderstorm:before,\n.ion-md-time:before,\n.ion-md-timer:before,\n.ion-md-train:before,\n.ion-md-transgender:before,\n.ion-md-trash:before,\n.ion-md-trending-down:before,\n.ion-md-trending-up:before,\n.ion-md-trophy:before,\n.ion-md-umbrella:before,\n.ion-md-undo:before,\n.ion-md-unlock:before,\n.ion-md-videocam:before,\n.ion-md-volume-down:before,\n.ion-md-volume-mute:before,\n.ion-md-volume-off:before,\n.ion-md-volume-up:before,\n.ion-md-walk:before,\n.ion-md-warning:before,\n.ion-md-watch:before,\n.ion-md-water:before,\n.ion-md-wifi:before,\n.ion-md-wine:before,\n.ion-md-woman:before {\n  display: inline-block;\n  font-family: \"Ionicons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ion-ios-add:before {\n  content: \"\f102\";\n}\n\n.ion-ios-add-circle:before {\n  content: \"\f101\";\n}\n\n.ion-ios-add-circle-outline:before {\n  content: \"\f100\";\n}\n\n.ion-ios-add-outline:before {\n  content: \"\f102\";\n}\n\n.ion-ios-alarm:before {\n  content: \"\f3c8\";\n}\n\n.ion-ios-alarm-outline:before {\n  content: \"\f3c7\";\n}\n\n.ion-ios-albums:before {\n  content: \"\f3ca\";\n}\n\n.ion-ios-albums-outline:before {\n  content: \"\f3c9\";\n}\n\n.ion-ios-alert:before {\n  content: \"\f104\";\n}\n\n.ion-ios-alert-outline:before {\n  content: \"\f103\";\n}\n\n.ion-ios-american-football:before {\n  content: \"\f106\";\n}\n\n.ion-ios-american-football-outline:before {\n  content: \"\f105\";\n}\n\n.ion-ios-analytics:before {\n  content: \"\f3ce\";\n}\n\n.ion-ios-analytics-outline:before {\n  content: \"\f3cd\";\n}\n\n.ion-ios-aperture:before {\n  content: \"\f108\";\n}\n\n.ion-ios-aperture-outline:before {\n  content: \"\f107\";\n}\n\n.ion-ios-apps:before {\n  content: \"\f10a\";\n}\n\n.ion-ios-apps-outline:before {\n  content: \"\f109\";\n}\n\n.ion-ios-appstore:before {\n  content: \"\f10c\";\n}\n\n.ion-ios-appstore-outline:before {\n  content: \"\f10b\";\n}\n\n.ion-ios-archive:before {\n  content: \"\f10e\";\n}\n\n.ion-ios-archive-outline:before {\n  content: \"\f10d\";\n}\n\n.ion-ios-arrow-back:before {\n  content: \"\f3cf\";\n}\n\n.ion-ios-arrow-back-outline:before {\n  content: \"\f3cf\";\n}\n\n.ion-ios-arrow-down:before {\n  content: \"\f3d0\";\n}\n\n.ion-ios-arrow-down-outline:before {\n  content: \"\f3d0\";\n}\n\n.ion-ios-arrow-dropdown:before {\n  content: \"\f110\";\n}\n\n.ion-ios-arrow-dropdown-circle:before {\n  content: \"\f10f\";\n}\n\n.ion-ios-arrow-dropdown-circle-outline:before {\n  content: \"\f10f\";\n}\n\n.ion-ios-arrow-dropdown-outline:before {\n  content: \"\f110\";\n}\n\n.ion-ios-arrow-dropleft:before {\n  content: \"\f112\";\n}\n\n.ion-ios-arrow-dropleft-circle:before {\n  content: \"\f111\";\n}\n\n.ion-ios-arrow-dropleft-circle-outline:before {\n  content: \"\f111\";\n}\n\n.ion-ios-arrow-dropleft-outline:before {\n  content: \"\f112\";\n}\n\n.ion-ios-arrow-dropright:before {\n  content: \"\f114\";\n}\n\n.ion-ios-arrow-dropright-circle:before {\n  content: \"\f113\";\n}\n\n.ion-ios-arrow-dropright-circle-outline:before {\n  content: \"\f113\";\n}\n\n.ion-ios-arrow-dropright-outline:before {\n  content: \"\f114\";\n}\n\n.ion-ios-arrow-dropup:before {\n  content: \"\f116\";\n}\n\n.ion-ios-arrow-dropup-circle:before {\n  content: \"\f115\";\n}\n\n.ion-ios-arrow-dropup-circle-outline:before {\n  content: \"\f115\";\n}\n\n.ion-ios-arrow-dropup-outline:before {\n  content: \"\f116\";\n}\n\n.ion-ios-arrow-forward:before {\n  content: \"\f3d1\";\n}\n\n.ion-ios-arrow-forward-outline:before {\n  content: \"\f3d1\";\n}\n\n.ion-ios-arrow-round-back:before {\n  content: \"\f117\";\n}\n\n.ion-ios-arrow-round-back-outline:before {\n  content: \"\f117\";\n}\n\n.ion-ios-arrow-round-down:before {\n  content: \"\f118\";\n}\n\n.ion-ios-arrow-round-down-outline:before {\n  content: \"\f118\";\n}\n\n.ion-ios-arrow-round-forward:before {\n  content: \"\f119\";\n}\n\n.ion-ios-arrow-round-forward-outline:before {\n  content: \"\f119\";\n}\n\n.ion-ios-arrow-round-up:before {\n  content: \"\f11a\";\n}\n\n.ion-ios-arrow-round-up-outline:before {\n  content: \"\f11a\";\n}\n\n.ion-ios-arrow-up:before {\n  content: \"\f3d8\";\n}\n\n.ion-ios-arrow-up-outline:before {\n  content: \"\f3d8\";\n}\n\n.ion-ios-at:before {\n  content: \"\f3da\";\n}\n\n.ion-ios-at-outline:before {\n  content: \"\f3d9\";\n}\n\n.ion-ios-attach:before {\n  content: \"\f11b\";\n}\n\n.ion-ios-attach-outline:before {\n  content: \"\f11b\";\n}\n\n.ion-ios-backspace:before {\n  content: \"\f11d\";\n}\n\n.ion-ios-backspace-outline:before {\n  content: \"\f11c\";\n}\n\n.ion-ios-barcode:before {\n  content: \"\f3dc\";\n}\n\n.ion-ios-barcode-outline:before {\n  content: \"\f3db\";\n}\n\n.ion-ios-baseball:before {\n  content: \"\f3de\";\n}\n\n.ion-ios-baseball-outline:before {\n  content: \"\f3dd\";\n}\n\n.ion-ios-basket:before {\n  content: \"\f11f\";\n}\n\n.ion-ios-basket-outline:before {\n  content: \"\f11e\";\n}\n\n.ion-ios-basketball:before {\n  content: \"\f3e0\";\n}\n\n.ion-ios-basketball-outline:before {\n  content: \"\f3df\";\n}\n\n.ion-ios-battery-charging:before {\n  content: \"\f120\";\n}\n\n.ion-ios-battery-charging-outline:before {\n  content: \"\f120\";\n}\n\n.ion-ios-battery-dead:before {\n  content: \"\f121\";\n}\n\n.ion-ios-battery-dead-outline:before {\n  content: \"\f121\";\n}\n\n.ion-ios-battery-full:before {\n  content: \"\f122\";\n}\n\n.ion-ios-battery-full-outline:before {\n  content: \"\f122\";\n}\n\n.ion-ios-beaker:before {\n  content: \"\f124\";\n}\n\n.ion-ios-beaker-outline:before {\n  content: \"\f123\";\n}\n\n.ion-ios-beer:before {\n  content: \"\f126\";\n}\n\n.ion-ios-beer-outline:before {\n  content: \"\f125\";\n}\n\n.ion-ios-bicycle:before {\n  content: \"\f127\";\n}\n\n.ion-ios-bicycle-outline:before {\n  content: \"\f127\";\n}\n\n.ion-ios-bluetooth:before {\n  content: \"\f128\";\n}\n\n.ion-ios-bluetooth-outline:before {\n  content: \"\f128\";\n}\n\n.ion-ios-boat:before {\n  content: \"\f12a\";\n}\n\n.ion-ios-boat-outline:before {\n  content: \"\f129\";\n}\n\n.ion-ios-body:before {\n  content: \"\f3e4\";\n}\n\n.ion-ios-body-outline:before {\n  content: \"\f3e3\";\n}\n\n.ion-ios-bonfire:before {\n  content: \"\f12c\";\n}\n\n.ion-ios-bonfire-outline:before {\n  content: \"\f12b\";\n}\n\n.ion-ios-book:before {\n  content: \"\f3e8\";\n}\n\n.ion-ios-book-outline:before {\n  content: \"\f3e7\";\n}\n\n.ion-ios-bookmark:before {\n  content: \"\f12e\";\n}\n\n.ion-ios-bookmark-outline:before {\n  content: \"\f12d\";\n}\n\n.ion-ios-bookmarks:before {\n  content: \"\f3ea\";\n}\n\n.ion-ios-bookmarks-outline:before {\n  content: \"\f3e9\";\n}\n\n.ion-ios-bowtie:before {\n  content: \"\f130\";\n}\n\n.ion-ios-bowtie-outline:before {\n  content: \"\f12f\";\n}\n\n.ion-ios-briefcase:before {\n  content: \"\f3ee\";\n}\n\n.ion-ios-briefcase-outline:before {\n  content: \"\f3ed\";\n}\n\n.ion-ios-browsers:before {\n  content: \"\f3f0\";\n}\n\n.ion-ios-browsers-outline:before {\n  content: \"\f3ef\";\n}\n\n.ion-ios-brush:before {\n  content: \"\f132\";\n}\n\n.ion-ios-brush-outline:before {\n  content: \"\f131\";\n}\n\n.ion-ios-bug:before {\n  content: \"\f134\";\n}\n\n.ion-ios-bug-outline:before {\n  content: \"\f133\";\n}\n\n.ion-ios-build:before {\n  content: \"\f136\";\n}\n\n.ion-ios-build-outline:before {\n  content: \"\f135\";\n}\n\n.ion-ios-bulb:before {\n  content: \"\f138\";\n}\n\n.ion-ios-bulb-outline:before {\n  content: \"\f137\";\n}\n\n.ion-ios-bus:before {\n  content: \"\f13a\";\n}\n\n.ion-ios-bus-outline:before {\n  content: \"\f139\";\n}\n\n.ion-ios-cafe:before {\n  content: \"\f13c\";\n}\n\n.ion-ios-cafe-outline:before {\n  content: \"\f13b\";\n}\n\n.ion-ios-calculator:before {\n  content: \"\f3f2\";\n}\n\n.ion-ios-calculator-outline:before {\n  content: \"\f3f1\";\n}\n\n.ion-ios-calendar:before {\n  content: \"\f3f4\";\n}\n\n.ion-ios-calendar-outline:before {\n  content: \"\f3f3\";\n}\n\n.ion-ios-call:before {\n  content: \"\f13e\";\n}\n\n.ion-ios-call-outline:before {\n  content: \"\f13d\";\n}\n\n.ion-ios-camera:before {\n  content: \"\f3f6\";\n}\n\n.ion-ios-camera-outline:before {\n  content: \"\f3f5\";\n}\n\n.ion-ios-car:before {\n  content: \"\f140\";\n}\n\n.ion-ios-car-outline:before {\n  content: \"\f13f\";\n}\n\n.ion-ios-card:before {\n  content: \"\f142\";\n}\n\n.ion-ios-card-outline:before {\n  content: \"\f141\";\n}\n\n.ion-ios-cart:before {\n  content: \"\f3f8\";\n}\n\n.ion-ios-cart-outline:before {\n  content: \"\f3f7\";\n}\n\n.ion-ios-cash:before {\n  content: \"\f144\";\n}\n\n.ion-ios-cash-outline:before {\n  content: \"\f143\";\n}\n\n.ion-ios-chatboxes:before {\n  content: \"\f3fa\";\n}\n\n.ion-ios-chatboxes-outline:before {\n  content: \"\f3f9\";\n}\n\n.ion-ios-chatbubbles:before {\n  content: \"\f146\";\n}\n\n.ion-ios-chatbubbles-outline:before {\n  content: \"\f145\";\n}\n\n.ion-ios-checkbox:before {\n  content: \"\f148\";\n}\n\n.ion-ios-checkbox-outline:before {\n  content: \"\f147\";\n}\n\n.ion-ios-checkmark:before {\n  content: \"\f3ff\";\n}\n\n.ion-ios-checkmark-circle:before {\n  content: \"\f14a\";\n}\n\n.ion-ios-checkmark-circle-outline:before {\n  content: \"\f149\";\n}\n\n.ion-ios-checkmark-outline:before {\n  content: \"\f3ff\";\n}\n\n.ion-ios-clipboard:before {\n  content: \"\f14c\";\n}\n\n.ion-ios-clipboard-outline:before {\n  content: \"\f14b\";\n}\n\n.ion-ios-clock:before {\n  content: \"\f403\";\n}\n\n.ion-ios-clock-outline:before {\n  content: \"\f402\";\n}\n\n.ion-ios-close:before {\n  content: \"\f406\";\n}\n\n.ion-ios-close-circle:before {\n  content: \"\f14e\";\n}\n\n.ion-ios-close-circle-outline:before {\n  content: \"\f14d\";\n}\n\n.ion-ios-close-outline:before {\n  content: \"\f406\";\n}\n\n.ion-ios-closed-captioning:before {\n  content: \"\f150\";\n}\n\n.ion-ios-closed-captioning-outline:before {\n  content: \"\f14f\";\n}\n\n.ion-ios-cloud:before {\n  content: \"\f40c\";\n}\n\n.ion-ios-cloud-circle:before {\n  content: \"\f152\";\n}\n\n.ion-ios-cloud-circle-outline:before {\n  content: \"\f151\";\n}\n\n.ion-ios-cloud-done:before {\n  content: \"\f154\";\n}\n\n.ion-ios-cloud-done-outline:before {\n  content: \"\f153\";\n}\n\n.ion-ios-cloud-download:before {\n  content: \"\f408\";\n}\n\n.ion-ios-cloud-download-outline:before {\n  content: \"\f407\";\n}\n\n.ion-ios-cloud-outline:before {\n  content: \"\f409\";\n}\n\n.ion-ios-cloud-upload:before {\n  content: \"\f40b\";\n}\n\n.ion-ios-cloud-upload-outline:before {\n  content: \"\f40a\";\n}\n\n.ion-ios-cloudy:before {\n  content: \"\f410\";\n}\n\n.ion-ios-cloudy-night:before {\n  content: \"\f40e\";\n}\n\n.ion-ios-cloudy-night-outline:before {\n  content: \"\f40d\";\n}\n\n.ion-ios-cloudy-outline:before {\n  content: \"\f40f\";\n}\n\n.ion-ios-code:before {\n  content: \"\f157\";\n}\n\n.ion-ios-code-download:before {\n  content: \"\f155\";\n}\n\n.ion-ios-code-download-outline:before {\n  content: \"\f155\";\n}\n\n.ion-ios-code-outline:before {\n  content: \"\f157\";\n}\n\n.ion-ios-code-working:before {\n  content: \"\f156\";\n}\n\n.ion-ios-code-working-outline:before {\n  content: \"\f156\";\n}\n\n.ion-ios-cog:before {\n  content: \"\f412\";\n}\n\n.ion-ios-cog-outline:before {\n  content: \"\f411\";\n}\n\n.ion-ios-color-fill:before {\n  content: \"\f159\";\n}\n\n.ion-ios-color-fill-outline:before {\n  content: \"\f158\";\n}\n\n.ion-ios-color-filter:before {\n  content: \"\f414\";\n}\n\n.ion-ios-color-filter-outline:before {\n  content: \"\f413\";\n}\n\n.ion-ios-color-palette:before {\n  content: \"\f15b\";\n}\n\n.ion-ios-color-palette-outline:before {\n  content: \"\f15a\";\n}\n\n.ion-ios-color-wand:before {\n  content: \"\f416\";\n}\n\n.ion-ios-color-wand-outline:before {\n  content: \"\f415\";\n}\n\n.ion-ios-compass:before {\n  content: \"\f15d\";\n}\n\n.ion-ios-compass-outline:before {\n  content: \"\f15c\";\n}\n\n.ion-ios-construct:before {\n  content: \"\f15f\";\n}\n\n.ion-ios-construct-outline:before {\n  content: \"\f15e\";\n}\n\n.ion-ios-contact:before {\n  content: \"\f41a\";\n}\n\n.ion-ios-contact-outline:before {\n  content: \"\f419\";\n}\n\n.ion-ios-contacts:before {\n  content: \"\f161\";\n}\n\n.ion-ios-contacts-outline:before {\n  content: \"\f160\";\n}\n\n.ion-ios-contract:before {\n  content: \"\f162\";\n}\n\n.ion-ios-contract-outline:before {\n  content: \"\f162\";\n}\n\n.ion-ios-contrast:before {\n  content: \"\f163\";\n}\n\n.ion-ios-contrast-outline:before {\n  content: \"\f163\";\n}\n\n.ion-ios-copy:before {\n  content: \"\f41c\";\n}\n\n.ion-ios-copy-outline:before {\n  content: \"\f41b\";\n}\n\n.ion-ios-create:before {\n  content: \"\f165\";\n}\n\n.ion-ios-create-outline:before {\n  content: \"\f164\";\n}\n\n.ion-ios-crop:before {\n  content: \"\f41e\";\n}\n\n.ion-ios-crop-outline:before {\n  content: \"\f166\";\n}\n\n.ion-ios-cube:before {\n  content: \"\f168\";\n}\n\n.ion-ios-cube-outline:before {\n  content: \"\f167\";\n}\n\n.ion-ios-cut:before {\n  content: \"\f16a\";\n}\n\n.ion-ios-cut-outline:before {\n  content: \"\f169\";\n}\n\n.ion-ios-desktop:before {\n  content: \"\f16c\";\n}\n\n.ion-ios-desktop-outline:before {\n  content: \"\f16b\";\n}\n\n.ion-ios-disc:before {\n  content: \"\f16e\";\n}\n\n.ion-ios-disc-outline:before {\n  content: \"\f16d\";\n}\n\n.ion-ios-document:before {\n  content: \"\f170\";\n}\n\n.ion-ios-document-outline:before {\n  content: \"\f16f\";\n}\n\n.ion-ios-done-all:before {\n  content: \"\f171\";\n}\n\n.ion-ios-done-all-outline:before {\n  content: \"\f171\";\n}\n\n.ion-ios-download:before {\n  content: \"\f420\";\n}\n\n.ion-ios-download-outline:before {\n  content: \"\f41f\";\n}\n\n.ion-ios-easel:before {\n  content: \"\f173\";\n}\n\n.ion-ios-easel-outline:before {\n  content: \"\f172\";\n}\n\n.ion-ios-egg:before {\n  content: \"\f175\";\n}\n\n.ion-ios-egg-outline:before {\n  content: \"\f174\";\n}\n\n.ion-ios-exit:before {\n  content: \"\f177\";\n}\n\n.ion-ios-exit-outline:before {\n  content: \"\f176\";\n}\n\n.ion-ios-expand:before {\n  content: \"\f178\";\n}\n\n.ion-ios-expand-outline:before {\n  content: \"\f178\";\n}\n\n.ion-ios-eye:before {\n  content: \"\f425\";\n}\n\n.ion-ios-eye-off:before {\n  content: \"\f17a\";\n}\n\n.ion-ios-eye-off-outline:before {\n  content: \"\f179\";\n}\n\n.ion-ios-eye-outline:before {\n  content: \"\f424\";\n}\n\n.ion-ios-fastforward:before {\n  content: \"\f427\";\n}\n\n.ion-ios-fastforward-outline:before {\n  content: \"\f426\";\n}\n\n.ion-ios-female:before {\n  content: \"\f17b\";\n}\n\n.ion-ios-female-outline:before {\n  content: \"\f17b\";\n}\n\n.ion-ios-filing:before {\n  content: \"\f429\";\n}\n\n.ion-ios-filing-outline:before {\n  content: \"\f428\";\n}\n\n.ion-ios-film:before {\n  content: \"\f42b\";\n}\n\n.ion-ios-film-outline:before {\n  content: \"\f42a\";\n}\n\n.ion-ios-finger-print:before {\n  content: \"\f17c\";\n}\n\n.ion-ios-finger-print-outline:before {\n  content: \"\f17c\";\n}\n\n.ion-ios-flag:before {\n  content: \"\f42d\";\n}\n\n.ion-ios-flag-outline:before {\n  content: \"\f42c\";\n}\n\n.ion-ios-flame:before {\n  content: \"\f42f\";\n}\n\n.ion-ios-flame-outline:before {\n  content: \"\f42e\";\n}\n\n.ion-ios-flash:before {\n  content: \"\f17e\";\n}\n\n.ion-ios-flash-outline:before {\n  content: \"\f17d\";\n}\n\n.ion-ios-flask:before {\n  content: \"\f431\";\n}\n\n.ion-ios-flask-outline:before {\n  content: \"\f430\";\n}\n\n.ion-ios-flower:before {\n  content: \"\f433\";\n}\n\n.ion-ios-flower-outline:before {\n  content: \"\f432\";\n}\n\n.ion-ios-folder:before {\n  content: \"\f435\";\n}\n\n.ion-ios-folder-open:before {\n  content: \"\f180\";\n}\n\n.ion-ios-folder-open-outline:before {\n  content: \"\f17f\";\n}\n\n.ion-ios-folder-outline:before {\n  content: \"\f434\";\n}\n\n.ion-ios-football:before {\n  content: \"\f437\";\n}\n\n.ion-ios-football-outline:before {\n  content: \"\f436\";\n}\n\n.ion-ios-funnel:before {\n  content: \"\f182\";\n}\n\n.ion-ios-funnel-outline:before {\n  content: \"\f181\";\n}\n\n.ion-ios-game-controller-a:before {\n  content: \"\f439\";\n}\n\n.ion-ios-game-controller-a-outline:before {\n  content: \"\f438\";\n}\n\n.ion-ios-game-controller-b:before {\n  content: \"\f43b\";\n}\n\n.ion-ios-game-controller-b-outline:before {\n  content: \"\f43a\";\n}\n\n.ion-ios-git-branch:before {\n  content: \"\f183\";\n}\n\n.ion-ios-git-branch-outline:before {\n  content: \"\f183\";\n}\n\n.ion-ios-git-commit:before {\n  content: \"\f184\";\n}\n\n.ion-ios-git-commit-outline:before {\n  content: \"\f184\";\n}\n\n.ion-ios-git-compare:before {\n  content: \"\f185\";\n}\n\n.ion-ios-git-compare-outline:before {\n  content: \"\f185\";\n}\n\n.ion-ios-git-merge:before {\n  content: \"\f186\";\n}\n\n.ion-ios-git-merge-outline:before {\n  content: \"\f186\";\n}\n\n.ion-ios-git-network:before {\n  content: \"\f187\";\n}\n\n.ion-ios-git-network-outline:before {\n  content: \"\f187\";\n}\n\n.ion-ios-git-pull-request:before {\n  content: \"\f188\";\n}\n\n.ion-ios-git-pull-request-outline:before {\n  content: \"\f188\";\n}\n\n.ion-ios-glasses:before {\n  content: \"\f43f\";\n}\n\n.ion-ios-glasses-outline:before {\n  content: \"\f43e\";\n}\n\n.ion-ios-globe:before {\n  content: \"\f18a\";\n}\n\n.ion-ios-globe-outline:before {\n  content: \"\f189\";\n}\n\n.ion-ios-grid:before {\n  content: \"\f18c\";\n}\n\n.ion-ios-grid-outline:before {\n  content: \"\f18b\";\n}\n\n.ion-ios-hammer:before {\n  content: \"\f18e\";\n}\n\n.ion-ios-hammer-outline:before {\n  content: \"\f18d\";\n}\n\n.ion-ios-hand:before {\n  content: \"\f190\";\n}\n\n.ion-ios-hand-outline:before {\n  content: \"\f18f\";\n}\n\n.ion-ios-happy:before {\n  content: \"\f192\";\n}\n\n.ion-ios-happy-outline:before {\n  content: \"\f191\";\n}\n\n.ion-ios-headset:before {\n  content: \"\f194\";\n}\n\n.ion-ios-headset-outline:before {\n  content: \"\f193\";\n}\n\n.ion-ios-heart:before {\n  content: \"\f443\";\n}\n\n.ion-ios-heart-outline:before {\n  content: \"\f442\";\n}\n\n.ion-ios-help:before {\n  content: \"\f446\";\n}\n\n.ion-ios-help-buoy:before {\n  content: \"\f196\";\n}\n\n.ion-ios-help-buoy-outline:before {\n  content: \"\f195\";\n}\n\n.ion-ios-help-circle:before {\n  content: \"\f198\";\n}\n\n.ion-ios-help-circle-outline:before {\n  content: \"\f197\";\n}\n\n.ion-ios-help-outline:before {\n  content: \"\f446\";\n}\n\n.ion-ios-home:before {\n  content: \"\f448\";\n}\n\n.ion-ios-home-outline:before {\n  content: \"\f447\";\n}\n\n.ion-ios-ice-cream:before {\n  content: \"\f19a\";\n}\n\n.ion-ios-ice-cream-outline:before {\n  content: \"\f199\";\n}\n\n.ion-ios-image:before {\n  content: \"\f19c\";\n}\n\n.ion-ios-image-outline:before {\n  content: \"\f19b\";\n}\n\n.ion-ios-images:before {\n  content: \"\f19e\";\n}\n\n.ion-ios-images-outline:before {\n  content: \"\f19d\";\n}\n\n.ion-ios-infinite:before {\n  content: \"\f44a\";\n}\n\n.ion-ios-infinite-outline:before {\n  content: \"\f449\";\n}\n\n.ion-ios-information:before {\n  content: \"\f44d\";\n}\n\n.ion-ios-information-circle:before {\n  content: \"\f1a0\";\n}\n\n.ion-ios-information-circle-outline:before {\n  content: \"\f19f\";\n}\n\n.ion-ios-information-outline:before {\n  content: \"\f44d\";\n}\n\n.ion-ios-ionic:before {\n  content: \"\f1a1\";\n}\n\n.ion-ios-ionic-outline:before {\n  content: \"\f44e\";\n}\n\n.ion-ios-ionitron:before {\n  content: \"\f1a3\";\n}\n\n.ion-ios-ionitron-outline:before {\n  content: \"\f1a2\";\n}\n\n.ion-ios-jet:before {\n  content: \"\f1a5\";\n}\n\n.ion-ios-jet-outline:before {\n  content: \"\f1a4\";\n}\n\n.ion-ios-key:before {\n  content: \"\f1a7\";\n}\n\n.ion-ios-key-outline:before {\n  content: \"\f1a6\";\n}\n\n.ion-ios-keypad:before {\n  content: \"\f450\";\n}\n\n.ion-ios-keypad-outline:before {\n  content: \"\f44f\";\n}\n\n.ion-ios-laptop:before {\n  content: \"\f1a8\";\n}\n\n.ion-ios-laptop-outline:before {\n  content: \"\f1a8\";\n}\n\n.ion-ios-leaf:before {\n  content: \"\f1aa\";\n}\n\n.ion-ios-leaf-outline:before {\n  content: \"\f1a9\";\n}\n\n.ion-ios-link:before {\n  content: \"\f22a\";\n}\n\n.ion-ios-link-outline:before {\n  content: \"\f1ca\";\n}\n\n.ion-ios-list:before {\n  content: \"\f454\";\n}\n\n.ion-ios-list-box:before {\n  content: \"\f1ac\";\n}\n\n.ion-ios-list-box-outline:before {\n  content: \"\f1ab\";\n}\n\n.ion-ios-list-outline:before {\n  content: \"\f454\";\n}\n\n.ion-ios-locate:before {\n  content: \"\f1ae\";\n}\n\n.ion-ios-locate-outline:before {\n  content: \"\f1ad\";\n}\n\n.ion-ios-lock:before {\n  content: \"\f1b0\";\n}\n\n.ion-ios-lock-outline:before {\n  content: \"\f1af\";\n}\n\n.ion-ios-log-in:before {\n  content: \"\f1b1\";\n}\n\n.ion-ios-log-in-outline:before {\n  content: \"\f1b1\";\n}\n\n.ion-ios-log-out:before {\n  content: \"\f1b2\";\n}\n\n.ion-ios-log-out-outline:before {\n  content: \"\f1b2\";\n}\n\n.ion-ios-magnet:before {\n  content: \"\f1b4\";\n}\n\n.ion-ios-magnet-outline:before {\n  content: \"\f1b3\";\n}\n\n.ion-ios-mail:before {\n  content: \"\f1b8\";\n}\n\n.ion-ios-mail-open:before {\n  content: \"\f1b6\";\n}\n\n.ion-ios-mail-open-outline:before {\n  content: \"\f1b5\";\n}\n\n.ion-ios-mail-outline:before {\n  content: \"\f1b7\";\n}\n\n.ion-ios-male:before {\n  content: \"\f1b9\";\n}\n\n.ion-ios-male-outline:before {\n  content: \"\f1b9\";\n}\n\n.ion-ios-man:before {\n  content: \"\f1bb\";\n}\n\n.ion-ios-man-outline:before {\n  content: \"\f1ba\";\n}\n\n.ion-ios-map:before {\n  content: \"\f1bd\";\n}\n\n.ion-ios-map-outline:before {\n  content: \"\f1bc\";\n}\n\n.ion-ios-medal:before {\n  content: \"\f1bf\";\n}\n\n.ion-ios-medal-outline:before {\n  content: \"\f1be\";\n}\n\n.ion-ios-medical:before {\n  content: \"\f45c\";\n}\n\n.ion-ios-medical-outline:before {\n  content: \"\f45b\";\n}\n\n.ion-ios-medkit:before {\n  content: \"\f45e\";\n}\n\n.ion-ios-medkit-outline:before {\n  content: \"\f45d\";\n}\n\n.ion-ios-megaphone:before {\n  content: \"\f1c1\";\n}\n\n.ion-ios-megaphone-outline:before {\n  content: \"\f1c0\";\n}\n\n.ion-ios-menu:before {\n  content: \"\f1c3\";\n}\n\n.ion-ios-menu-outline:before {\n  content: \"\f1c2\";\n}\n\n.ion-ios-mic:before {\n  content: \"\f461\";\n}\n\n.ion-ios-mic-off:before {\n  content: \"\f45f\";\n}\n\n.ion-ios-mic-off-outline:before {\n  content: \"\f1c4\";\n}\n\n.ion-ios-mic-outline:before {\n  content: \"\f460\";\n}\n\n.ion-ios-microphone:before {\n  content: \"\f1c6\";\n}\n\n.ion-ios-microphone-outline:before {\n  content: \"\f1c5\";\n}\n\n.ion-ios-moon:before {\n  content: \"\f468\";\n}\n\n.ion-ios-moon-outline:before {\n  content: \"\f467\";\n}\n\n.ion-ios-more:before {\n  content: \"\f1c8\";\n}\n\n.ion-ios-more-outline:before {\n  content: \"\f1c7\";\n}\n\n.ion-ios-move:before {\n  content: \"\f1cb\";\n}\n\n.ion-ios-move-outline:before {\n  content: \"\f1cb\";\n}\n\n.ion-ios-musical-note:before {\n  content: \"\f46b\";\n}\n\n.ion-ios-musical-note-outline:before {\n  content: \"\f1cc\";\n}\n\n.ion-ios-musical-notes:before {\n  content: \"\f46c\";\n}\n\n.ion-ios-musical-notes-outline:before {\n  content: \"\f1cd\";\n}\n\n.ion-ios-navigate:before {\n  content: \"\f46e\";\n}\n\n.ion-ios-navigate-outline:before {\n  content: \"\f46d\";\n}\n\n.ion-ios-no-smoking:before {\n  content: \"\f1cf\";\n}\n\n.ion-ios-no-smoking-outline:before {\n  content: \"\f1ce\";\n}\n\n.ion-ios-notifications:before {\n  content: \"\f1d3\";\n}\n\n.ion-ios-notifications-off:before {\n  content: \"\f1d1\";\n}\n\n.ion-ios-notifications-off-outline:before {\n  content: \"\f1d0\";\n}\n\n.ion-ios-notifications-outline:before {\n  content: \"\f1d2\";\n}\n\n.ion-ios-nuclear:before {\n  content: \"\f1d5\";\n}\n\n.ion-ios-nuclear-outline:before {\n  content: \"\f1d4\";\n}\n\n.ion-ios-nutrition:before {\n  content: \"\f470\";\n}\n\n.ion-ios-nutrition-outline:before {\n  content: \"\f46f\";\n}\n\n.ion-ios-open:before {\n  content: \"\f1d7\";\n}\n\n.ion-ios-open-outline:before {\n  content: \"\f1d6\";\n}\n\n.ion-ios-options:before {\n  content: \"\f1d9\";\n}\n\n.ion-ios-options-outline:before {\n  content: \"\f1d8\";\n}\n\n.ion-ios-outlet:before {\n  content: \"\f1db\";\n}\n\n.ion-ios-outlet-outline:before {\n  content: \"\f1da\";\n}\n\n.ion-ios-paper:before {\n  content: \"\f472\";\n}\n\n.ion-ios-paper-outline:before {\n  content: \"\f471\";\n}\n\n.ion-ios-paper-plane:before {\n  content: \"\f1dd\";\n}\n\n.ion-ios-paper-plane-outline:before {\n  content: \"\f1dc\";\n}\n\n.ion-ios-partly-sunny:before {\n  content: \"\f1df\";\n}\n\n.ion-ios-partly-sunny-outline:before {\n  content: \"\f1de\";\n}\n\n.ion-ios-pause:before {\n  content: \"\f478\";\n}\n\n.ion-ios-pause-outline:before {\n  content: \"\f477\";\n}\n\n.ion-ios-paw:before {\n  content: \"\f47a\";\n}\n\n.ion-ios-paw-outline:before {\n  content: \"\f479\";\n}\n\n.ion-ios-people:before {\n  content: \"\f47c\";\n}\n\n.ion-ios-people-outline:before {\n  content: \"\f47b\";\n}\n\n.ion-ios-person:before {\n  content: \"\f47e\";\n}\n\n.ion-ios-person-add:before {\n  content: \"\f1e1\";\n}\n\n.ion-ios-person-add-outline:before {\n  content: \"\f1e0\";\n}\n\n.ion-ios-person-outline:before {\n  content: \"\f47d\";\n}\n\n.ion-ios-phone-landscape:before {\n  content: \"\f1e2\";\n}\n\n.ion-ios-phone-landscape-outline:before {\n  content: \"\f1e2\";\n}\n\n.ion-ios-phone-portrait:before {\n  content: \"\f1e3\";\n}\n\n.ion-ios-phone-portrait-outline:before {\n  content: \"\f1e3\";\n}\n\n.ion-ios-photos:before {\n  content: \"\f482\";\n}\n\n.ion-ios-photos-outline:before {\n  content: \"\f481\";\n}\n\n.ion-ios-pie:before {\n  content: \"\f484\";\n}\n\n.ion-ios-pie-outline:before {\n  content: \"\f483\";\n}\n\n.ion-ios-pin:before {\n  content: \"\f1e5\";\n}\n\n.ion-ios-pin-outline:before {\n  content: \"\f1e4\";\n}\n\n.ion-ios-pint:before {\n  content: \"\f486\";\n}\n\n.ion-ios-pint-outline:before {\n  content: \"\f485\";\n}\n\n.ion-ios-pizza:before {\n  content: \"\f1e7\";\n}\n\n.ion-ios-pizza-outline:before {\n  content: \"\f1e6\";\n}\n\n.ion-ios-plane:before {\n  content: \"\f1e9\";\n}\n\n.ion-ios-plane-outline:before {\n  content: \"\f1e8\";\n}\n\n.ion-ios-planet:before {\n  content: \"\f1eb\";\n}\n\n.ion-ios-planet-outline:before {\n  content: \"\f1ea\";\n}\n\n.ion-ios-play:before {\n  content: \"\f488\";\n}\n\n.ion-ios-play-outline:before {\n  content: \"\f487\";\n}\n\n.ion-ios-podium:before {\n  content: \"\f1ed\";\n}\n\n.ion-ios-podium-outline:before {\n  content: \"\f1ec\";\n}\n\n.ion-ios-power:before {\n  content: \"\f1ef\";\n}\n\n.ion-ios-power-outline:before {\n  content: \"\f1ee\";\n}\n\n.ion-ios-pricetag:before {\n  content: \"\f48d\";\n}\n\n.ion-ios-pricetag-outline:before {\n  content: \"\f48c\";\n}\n\n.ion-ios-pricetags:before {\n  content: \"\f48f\";\n}\n\n.ion-ios-pricetags-outline:before {\n  content: \"\f48e\";\n}\n\n.ion-ios-print:before {\n  content: \"\f1f1\";\n}\n\n.ion-ios-print-outline:before {\n  content: \"\f1f0\";\n}\n\n.ion-ios-pulse:before {\n  content: \"\f493\";\n}\n\n.ion-ios-pulse-outline:before {\n  content: \"\f1f2\";\n}\n\n.ion-ios-qr-scanner:before {\n  content: \"\f1f3\";\n}\n\n.ion-ios-qr-scanner-outline:before {\n  content: \"\f1f3\";\n}\n\n.ion-ios-quote:before {\n  content: \"\f1f5\";\n}\n\n.ion-ios-quote-outline:before {\n  content: \"\f1f4\";\n}\n\n.ion-ios-radio:before {\n  content: \"\f1f9\";\n}\n\n.ion-ios-radio-button-off:before {\n  content: \"\f1f6\";\n}\n\n.ion-ios-radio-button-off-outline:before {\n  content: \"\f1f6\";\n}\n\n.ion-ios-radio-button-on:before {\n  content: \"\f1f7\";\n}\n\n.ion-ios-radio-button-on-outline:before {\n  content: \"\f1f7\";\n}\n\n.ion-ios-radio-outline:before {\n  content: \"\f1f8\";\n}\n\n.ion-ios-rainy:before {\n  content: \"\f495\";\n}\n\n.ion-ios-rainy-outline:before {\n  content: \"\f494\";\n}\n\n.ion-ios-recording:before {\n  content: \"\f497\";\n}\n\n.ion-ios-recording-outline:before {\n  content: \"\f496\";\n}\n\n.ion-ios-redo:before {\n  content: \"\f499\";\n}\n\n.ion-ios-redo-outline:before {\n  content: \"\f498\";\n}\n\n.ion-ios-refresh:before {\n  content: \"\f49c\";\n}\n\n.ion-ios-refresh-circle:before {\n  content: \"\f226\";\n}\n\n.ion-ios-refresh-circle-outline:before {\n  content: \"\f224\";\n}\n\n.ion-ios-refresh-outline:before {\n  content: \"\f49c\";\n}\n\n.ion-ios-remove:before {\n  content: \"\f1fc\";\n}\n\n.ion-ios-remove-circle:before {\n  content: \"\f1fb\";\n}\n\n.ion-ios-remove-circle-outline:before {\n  content: \"\f1fa\";\n}\n\n.ion-ios-remove-outline:before {\n  content: \"\f1fc\";\n}\n\n.ion-ios-reorder:before {\n  content: \"\f1fd\";\n}\n\n.ion-ios-reorder-outline:before {\n  content: \"\f1fd\";\n}\n\n.ion-ios-repeat:before {\n  content: \"\f1fe\";\n}\n\n.ion-ios-repeat-outline:before {\n  content: \"\f1fe\";\n}\n\n.ion-ios-resize:before {\n  content: \"\f1ff\";\n}\n\n.ion-ios-resize-outline:before {\n  content: \"\f1ff\";\n}\n\n.ion-ios-restaurant:before {\n  content: \"\f201\";\n}\n\n.ion-ios-restaurant-outline:before {\n  content: \"\f200\";\n}\n\n.ion-ios-return-left:before {\n  content: \"\f202\";\n}\n\n.ion-ios-return-left-outline:before {\n  content: \"\f202\";\n}\n\n.ion-ios-return-right:before {\n  content: \"\f203\";\n}\n\n.ion-ios-return-right-outline:before {\n  content: \"\f203\";\n}\n\n.ion-ios-reverse-camera:before {\n  content: \"\f49f\";\n}\n\n.ion-ios-reverse-camera-outline:before {\n  content: \"\f49e\";\n}\n\n.ion-ios-rewind:before {\n  content: \"\f4a1\";\n}\n\n.ion-ios-rewind-outline:before {\n  content: \"\f4a0\";\n}\n\n.ion-ios-ribbon:before {\n  content: \"\f205\";\n}\n\n.ion-ios-ribbon-outline:before {\n  content: \"\f204\";\n}\n\n.ion-ios-rose:before {\n  content: \"\f4a3\";\n}\n\n.ion-ios-rose-outline:before {\n  content: \"\f4a2\";\n}\n\n.ion-ios-sad:before {\n  content: \"\f207\";\n}\n\n.ion-ios-sad-outline:before {\n  content: \"\f206\";\n}\n\n.ion-ios-school:before {\n  content: \"\f209\";\n}\n\n.ion-ios-school-outline:before {\n  content: \"\f208\";\n}\n\n.ion-ios-search:before {\n  content: \"\f4a5\";\n}\n\n.ion-ios-search-outline:before {\n  content: \"\f20a\";\n}\n\n.ion-ios-send:before {\n  content: \"\f20c\";\n}\n\n.ion-ios-send-outline:before {\n  content: \"\f20b\";\n}\n\n.ion-ios-settings:before {\n  content: \"\f4a7\";\n}\n\n.ion-ios-settings-outline:before {\n  content: \"\f20d\";\n}\n\n.ion-ios-share:before {\n  content: \"\f211\";\n}\n\n.ion-ios-share-alt:before {\n  content: \"\f20f\";\n}\n\n.ion-ios-share-alt-outline:before {\n  content: \"\f20e\";\n}\n\n.ion-ios-share-outline:before {\n  content: \"\f210\";\n}\n\n.ion-ios-shirt:before {\n  content: \"\f213\";\n}\n\n.ion-ios-shirt-outline:before {\n  content: \"\f212\";\n}\n\n.ion-ios-shuffle:before {\n  content: \"\f4a9\";\n}\n\n.ion-ios-shuffle-outline:before {\n  content: \"\f4a9\";\n}\n\n.ion-ios-skip-backward:before {\n  content: \"\f215\";\n}\n\n.ion-ios-skip-backward-outline:before {\n  content: \"\f214\";\n}\n\n.ion-ios-skip-forward:before {\n  content: \"\f217\";\n}\n\n.ion-ios-skip-forward-outline:before {\n  content: \"\f216\";\n}\n\n.ion-ios-snow:before {\n  content: \"\f218\";\n}\n\n.ion-ios-snow-outline:before {\n  content: \"\f22c\";\n}\n\n.ion-ios-speedometer:before {\n  content: \"\f4b0\";\n}\n\n.ion-ios-speedometer-outline:before {\n  content: \"\f4af\";\n}\n\n.ion-ios-square:before {\n  content: \"\f21a\";\n}\n\n.ion-ios-square-outline:before {\n  content: \"\f219\";\n}\n\n.ion-ios-star:before {\n  content: \"\f4b3\";\n}\n\n.ion-ios-star-half:before {\n  content: \"\f4b1\";\n}\n\n.ion-ios-star-half-outline:before {\n  content: \"\f4b1\";\n}\n\n.ion-ios-star-outline:before {\n  content: \"\f4b2\";\n}\n\n.ion-ios-stats:before {\n  content: \"\f21c\";\n}\n\n.ion-ios-stats-outline:before {\n  content: \"\f21b\";\n}\n\n.ion-ios-stopwatch:before {\n  content: \"\f4b5\";\n}\n\n.ion-ios-stopwatch-outline:before {\n  content: \"\f4b4\";\n}\n\n.ion-ios-subway:before {\n  content: \"\f21e\";\n}\n\n.ion-ios-subway-outline:before {\n  content: \"\f21d\";\n}\n\n.ion-ios-sunny:before {\n  content: \"\f4b7\";\n}\n\n.ion-ios-sunny-outline:before {\n  content: \"\f4b6\";\n}\n\n.ion-ios-swap:before {\n  content: \"\f21f\";\n}\n\n.ion-ios-swap-outline:before {\n  content: \"\f21f\";\n}\n\n.ion-ios-switch:before {\n  content: \"\f221\";\n}\n\n.ion-ios-switch-outline:before {\n  content: \"\f220\";\n}\n\n.ion-ios-sync:before {\n  content: \"\f222\";\n}\n\n.ion-ios-sync-outline:before {\n  content: \"\f222\";\n}\n\n.ion-ios-tablet-landscape:before {\n  content: \"\f223\";\n}\n\n.ion-ios-tablet-landscape-outline:before {\n  content: \"\f223\";\n}\n\n.ion-ios-tablet-portrait:before {\n  content: \"\f24e\";\n}\n\n.ion-ios-tablet-portrait-outline:before {\n  content: \"\f24e\";\n}\n\n.ion-ios-tennisball:before {\n  content: \"\f4bb\";\n}\n\n.ion-ios-tennisball-outline:before {\n  content: \"\f4ba\";\n}\n\n.ion-ios-text:before {\n  content: \"\f250\";\n}\n\n.ion-ios-text-outline:before {\n  content: \"\f24f\";\n}\n\n.ion-ios-thermometer:before {\n  content: \"\f252\";\n}\n\n.ion-ios-thermometer-outline:before {\n  content: \"\f251\";\n}\n\n.ion-ios-thumbs-down:before {\n  content: \"\f254\";\n}\n\n.ion-ios-thumbs-down-outline:before {\n  content: \"\f253\";\n}\n\n.ion-ios-thumbs-up:before {\n  content: \"\f256\";\n}\n\n.ion-ios-thumbs-up-outline:before {\n  content: \"\f255\";\n}\n\n.ion-ios-thunderstorm:before {\n  content: \"\f4bd\";\n}\n\n.ion-ios-thunderstorm-outline:before {\n  content: \"\f4bc\";\n}\n\n.ion-ios-time:before {\n  content: \"\f4bf\";\n}\n\n.ion-ios-time-outline:before {\n  content: \"\f4be\";\n}\n\n.ion-ios-timer:before {\n  content: \"\f4c1\";\n}\n\n.ion-ios-timer-outline:before {\n  content: \"\f4c0\";\n}\n\n.ion-ios-train:before {\n  content: \"\f258\";\n}\n\n.ion-ios-train-outline:before {\n  content: \"\f257\";\n}\n\n.ion-ios-transgender:before {\n  content: \"\f259\";\n}\n\n.ion-ios-transgender-outline:before {\n  content: \"\f259\";\n}\n\n.ion-ios-trash:before {\n  content: \"\f4c5\";\n}\n\n.ion-ios-trash-outline:before {\n  content: \"\f4c4\";\n}\n\n.ion-ios-trending-down:before {\n  content: \"\f25a\";\n}\n\n.ion-ios-trending-down-outline:before {\n  content: \"\f25a\";\n}\n\n.ion-ios-trending-up:before {\n  content: \"\f25b\";\n}\n\n.ion-ios-trending-up-outline:before {\n  content: \"\f25b\";\n}\n\n.ion-ios-trophy:before {\n  content: \"\f25d\";\n}\n\n.ion-ios-trophy-outline:before {\n  content: \"\f25c\";\n}\n\n.ion-ios-umbrella:before {\n  content: \"\f25f\";\n}\n\n.ion-ios-umbrella-outline:before {\n  content: \"\f25e\";\n}\n\n.ion-ios-undo:before {\n  content: \"\f4c7\";\n}\n\n.ion-ios-undo-outline:before {\n  content: \"\f4c6\";\n}\n\n.ion-ios-unlock:before {\n  content: \"\f261\";\n}\n\n.ion-ios-unlock-outline:before {\n  content: \"\f260\";\n}\n\n.ion-ios-videocam:before {\n  content: \"\f4cd\";\n}\n\n.ion-ios-videocam-outline:before {\n  content: \"\f4cc\";\n}\n\n.ion-ios-volume-down:before {\n  content: \"\f262\";\n}\n\n.ion-ios-volume-down-outline:before {\n  content: \"\f262\";\n}\n\n.ion-ios-volume-mute:before {\n  content: \"\f263\";\n}\n\n.ion-ios-volume-mute-outline:before {\n  content: \"\f263\";\n}\n\n.ion-ios-volume-off:before {\n  content: \"\f264\";\n}\n\n.ion-ios-volume-off-outline:before {\n  content: \"\f264\";\n}\n\n.ion-ios-volume-up:before {\n  content: \"\f265\";\n}\n\n.ion-ios-volume-up-outline:before {\n  content: \"\f265\";\n}\n\n.ion-ios-walk:before {\n  content: \"\f266\";\n}\n\n.ion-ios-walk-outline:before {\n  content: \"\f266\";\n}\n\n.ion-ios-warning:before {\n  content: \"\f268\";\n}\n\n.ion-ios-warning-outline:before {\n  content: \"\f267\";\n}\n\n.ion-ios-watch:before {\n  content: \"\f269\";\n}\n\n.ion-ios-watch-outline:before {\n  content: \"\f269\";\n}\n\n.ion-ios-water:before {\n  content: \"\f26b\";\n}\n\n.ion-ios-water-outline:before {\n  content: \"\f26a\";\n}\n\n.ion-ios-wifi:before {\n  content: \"\f26d\";\n}\n\n.ion-ios-wifi-outline:before {\n  content: \"\f26c\";\n}\n\n.ion-ios-wine:before {\n  content: \"\f26f\";\n}\n\n.ion-ios-wine-outline:before {\n  content: \"\f26e\";\n}\n\n.ion-ios-woman:before {\n  content: \"\f271\";\n}\n\n.ion-ios-woman-outline:before {\n  content: \"\f270\";\n}\n\n.ion-logo-android:before {\n  content: \"\f225\";\n}\n\n.ion-logo-angular:before {\n  content: \"\f227\";\n}\n\n.ion-logo-apple:before {\n  content: \"\f229\";\n}\n\n.ion-logo-bitcoin:before {\n  content: \"\f22b\";\n}\n\n.ion-logo-buffer:before {\n  content: \"\f22d\";\n}\n\n.ion-logo-chrome:before {\n  content: \"\f22f\";\n}\n\n.ion-logo-codepen:before {\n  content: \"\f230\";\n}\n\n.ion-logo-css3:before {\n  content: \"\f231\";\n}\n\n.ion-logo-designernews:before {\n  content: \"\f232\";\n}\n\n.ion-logo-dribbble:before {\n  content: \"\f233\";\n}\n\n.ion-logo-dropbox:before {\n  content: \"\f234\";\n}\n\n.ion-logo-euro:before {\n  content: \"\f235\";\n}\n\n.ion-logo-facebook:before {\n  content: \"\f236\";\n}\n\n.ion-logo-foursquare:before {\n  content: \"\f237\";\n}\n\n.ion-logo-freebsd-devil:before {\n  content: \"\f238\";\n}\n\n.ion-logo-github:before {\n  content: \"\f239\";\n}\n\n.ion-logo-google:before {\n  content: \"\f23a\";\n}\n\n.ion-logo-googleplus:before {\n  content: \"\f23b\";\n}\n\n.ion-logo-hackernews:before {\n  content: \"\f23c\";\n}\n\n.ion-logo-html5:before {\n  content: \"\f23d\";\n}\n\n.ion-logo-instagram:before {\n  content: \"\f23e\";\n}\n\n.ion-logo-javascript:before {\n  content: \"\f23f\";\n}\n\n.ion-logo-linkedin:before {\n  content: \"\f240\";\n}\n\n.ion-logo-markdown:before {\n  content: \"\f241\";\n}\n\n.ion-logo-nodejs:before {\n  content: \"\f242\";\n}\n\n.ion-logo-octocat:before {\n  content: \"\f243\";\n}\n\n.ion-logo-pinterest:before {\n  content: \"\f244\";\n}\n\n.ion-logo-playstation:before {\n  content: \"\f245\";\n}\n\n.ion-logo-python:before {\n  content: \"\f246\";\n}\n\n.ion-logo-reddit:before {\n  content: \"\f247\";\n}\n\n.ion-logo-rss:before {\n  content: \"\f248\";\n}\n\n.ion-logo-sass:before {\n  content: \"\f249\";\n}\n\n.ion-logo-skype:before {\n  content: \"\f24a\";\n}\n\n.ion-logo-snapchat:before {\n  content: \"\f24b\";\n}\n\n.ion-logo-steam:before {\n  content: \"\f24c\";\n}\n\n.ion-logo-tumblr:before {\n  content: \"\f24d\";\n}\n\n.ion-logo-tux:before {\n  content: \"\f2ae\";\n}\n\n.ion-logo-twitch:before {\n  content: \"\f2af\";\n}\n\n.ion-logo-twitter:before {\n  content: \"\f2b0\";\n}\n\n.ion-logo-usd:before {\n  content: \"\f2b1\";\n}\n\n.ion-logo-vimeo:before {\n  content: \"\f2c4\";\n}\n\n.ion-logo-whatsapp:before {\n  content: \"\f2c5\";\n}\n\n.ion-logo-windows:before {\n  content: \"\f32f\";\n}\n\n.ion-logo-wordpress:before {\n  content: \"\f330\";\n}\n\n.ion-logo-xbox:before {\n  content: \"\f34c\";\n}\n\n.ion-logo-yahoo:before {\n  content: \"\f34d\";\n}\n\n.ion-logo-yen:before {\n  content: \"\f34e\";\n}\n\n.ion-logo-youtube:before {\n  content: \"\f34f\";\n}\n\n.ion-md-add:before {\n  content: \"\f273\";\n}\n\n.ion-md-add-circle:before {\n  content: \"\f272\";\n}\n\n.ion-md-alarm:before {\n  content: \"\f274\";\n}\n\n.ion-md-albums:before {\n  content: \"\f275\";\n}\n\n.ion-md-alert:before {\n  content: \"\f276\";\n}\n\n.ion-md-american-football:before {\n  content: \"\f277\";\n}\n\n.ion-md-analytics:before {\n  content: \"\f278\";\n}\n\n.ion-md-aperture:before {\n  content: \"\f279\";\n}\n\n.ion-md-apps:before {\n  content: \"\f27a\";\n}\n\n.ion-md-appstore:before {\n  content: \"\f27b\";\n}\n\n.ion-md-archive:before {\n  content: \"\f27c\";\n}\n\n.ion-md-arrow-back:before {\n  content: \"\f27d\";\n}\n\n.ion-md-arrow-down:before {\n  content: \"\f27e\";\n}\n\n.ion-md-arrow-dropdown:before {\n  content: \"\f280\";\n}\n\n.ion-md-arrow-dropdown-circle:before {\n  content: \"\f27f\";\n}\n\n.ion-md-arrow-dropleft:before {\n  content: \"\f282\";\n}\n\n.ion-md-arrow-dropleft-circle:before {\n  content: \"\f281\";\n}\n\n.ion-md-arrow-dropright:before {\n  content: \"\f284\";\n}\n\n.ion-md-arrow-dropright-circle:before {\n  content: \"\f283\";\n}\n\n.ion-md-arrow-dropup:before {\n  content: \"\f286\";\n}\n\n.ion-md-arrow-dropup-circle:before {\n  content: \"\f285\";\n}\n\n.ion-md-arrow-forward:before {\n  content: \"\f287\";\n}\n\n.ion-md-arrow-round-back:before {\n  content: \"\f288\";\n}\n\n.ion-md-arrow-round-down:before {\n  content: \"\f289\";\n}\n\n.ion-md-arrow-round-forward:before {\n  content: \"\f28a\";\n}\n\n.ion-md-arrow-round-up:before {\n  content: \"\f28b\";\n}\n\n.ion-md-arrow-up:before {\n  content: \"\f28c\";\n}\n\n.ion-md-at:before {\n  content: \"\f28d\";\n}\n\n.ion-md-attach:before {\n  content: \"\f28e\";\n}\n\n.ion-md-backspace:before {\n  content: \"\f28f\";\n}\n\n.ion-md-barcode:before {\n  content: \"\f290\";\n}\n\n.ion-md-baseball:before {\n  content: \"\f291\";\n}\n\n.ion-md-basket:before {\n  content: \"\f292\";\n}\n\n.ion-md-basketball:before {\n  content: \"\f293\";\n}\n\n.ion-md-battery-charging:before {\n  content: \"\f294\";\n}\n\n.ion-md-battery-dead:before {\n  content: \"\f295\";\n}\n\n.ion-md-battery-full:before {\n  content: \"\f296\";\n}\n\n.ion-md-beaker:before {\n  content: \"\f297\";\n}\n\n.ion-md-beer:before {\n  content: \"\f298\";\n}\n\n.ion-md-bicycle:before {\n  content: \"\f299\";\n}\n\n.ion-md-bluetooth:before {\n  content: \"\f29a\";\n}\n\n.ion-md-boat:before {\n  content: \"\f29b\";\n}\n\n.ion-md-body:before {\n  content: \"\f29c\";\n}\n\n.ion-md-bonfire:before {\n  content: \"\f29d\";\n}\n\n.ion-md-book:before {\n  content: \"\f29e\";\n}\n\n.ion-md-bookmark:before {\n  content: \"\f29f\";\n}\n\n.ion-md-bookmarks:before {\n  content: \"\f2a0\";\n}\n\n.ion-md-bowtie:before {\n  content: \"\f2a1\";\n}\n\n.ion-md-briefcase:before {\n  content: \"\f2a2\";\n}\n\n.ion-md-browsers:before {\n  content: \"\f2a3\";\n}\n\n.ion-md-brush:before {\n  content: \"\f2a4\";\n}\n\n.ion-md-bug:before {\n  content: \"\f2a5\";\n}\n\n.ion-md-build:before {\n  content: \"\f2a6\";\n}\n\n.ion-md-bulb:before {\n  content: \"\f2a7\";\n}\n\n.ion-md-bus:before {\n  content: \"\f2a8\";\n}\n\n.ion-md-cafe:before {\n  content: \"\f2a9\";\n}\n\n.ion-md-calculator:before {\n  content: \"\f2aa\";\n}\n\n.ion-md-calendar:before {\n  content: \"\f2ab\";\n}\n\n.ion-md-call:before {\n  content: \"\f2ac\";\n}\n\n.ion-md-camera:before {\n  content: \"\f2ad\";\n}\n\n.ion-md-car:before {\n  content: \"\f2b2\";\n}\n\n.ion-md-card:before {\n  content: \"\f2b3\";\n}\n\n.ion-md-cart:before {\n  content: \"\f2b4\";\n}\n\n.ion-md-cash:before {\n  content: \"\f2b5\";\n}\n\n.ion-md-chatboxes:before {\n  content: \"\f2b6\";\n}\n\n.ion-md-chatbubbles:before {\n  content: \"\f2b7\";\n}\n\n.ion-md-checkbox:before {\n  content: \"\f2b9\";\n}\n\n.ion-md-checkbox-outline:before {\n  content: \"\f2b8\";\n}\n\n.ion-md-checkmark:before {\n  content: \"\f2bc\";\n}\n\n.ion-md-checkmark-circle:before {\n  content: \"\f2bb\";\n}\n\n.ion-md-checkmark-circle-outline:before {\n  content: \"\f2ba\";\n}\n\n.ion-md-clipboard:before {\n  content: \"\f2bd\";\n}\n\n.ion-md-clock:before {\n  content: \"\f2be\";\n}\n\n.ion-md-close:before {\n  content: \"\f2c0\";\n}\n\n.ion-md-close-circle:before {\n  content: \"\f2bf\";\n}\n\n.ion-md-closed-captioning:before {\n  content: \"\f2c1\";\n}\n\n.ion-md-cloud:before {\n  content: \"\f2c9\";\n}\n\n.ion-md-cloud-circle:before {\n  content: \"\f2c2\";\n}\n\n.ion-md-cloud-done:before {\n  content: \"\f2c3\";\n}\n\n.ion-md-cloud-download:before {\n  content: \"\f2c6\";\n}\n\n.ion-md-cloud-outline:before {\n  content: \"\f2c7\";\n}\n\n.ion-md-cloud-upload:before {\n  content: \"\f2c8\";\n}\n\n.ion-md-cloudy:before {\n  content: \"\f2cb\";\n}\n\n.ion-md-cloudy-night:before {\n  content: \"\f2ca\";\n}\n\n.ion-md-code:before {\n  content: \"\f2ce\";\n}\n\n.ion-md-code-download:before {\n  content: \"\f2cc\";\n}\n\n.ion-md-code-working:before {\n  content: \"\f2cd\";\n}\n\n.ion-md-cog:before {\n  content: \"\f2cf\";\n}\n\n.ion-md-color-fill:before {\n  content: \"\f2d0\";\n}\n\n.ion-md-color-filter:before {\n  content: \"\f2d1\";\n}\n\n.ion-md-color-palette:before {\n  content: \"\f2d2\";\n}\n\n.ion-md-color-wand:before {\n  content: \"\f2d3\";\n}\n\n.ion-md-compass:before {\n  content: \"\f2d4\";\n}\n\n.ion-md-construct:before {\n  content: \"\f2d5\";\n}\n\n.ion-md-contact:before {\n  content: \"\f2d6\";\n}\n\n.ion-md-contacts:before {\n  content: \"\f2d7\";\n}\n\n.ion-md-contract:before {\n  content: \"\f2d8\";\n}\n\n.ion-md-contrast:before {\n  content: \"\f2d9\";\n}\n\n.ion-md-copy:before {\n  content: \"\f2da\";\n}\n\n.ion-md-create:before {\n  content: \"\f2db\";\n}\n\n.ion-md-crop:before {\n  content: \"\f2dc\";\n}\n\n.ion-md-cube:before {\n  content: \"\f2dd\";\n}\n\n.ion-md-cut:before {\n  content: \"\f2de\";\n}\n\n.ion-md-desktop:before {\n  content: \"\f2df\";\n}\n\n.ion-md-disc:before {\n  content: \"\f2e0\";\n}\n\n.ion-md-document:before {\n  content: \"\f2e1\";\n}\n\n.ion-md-done-all:before {\n  content: \"\f2e2\";\n}\n\n.ion-md-download:before {\n  content: \"\f2e3\";\n}\n\n.ion-md-easel:before {\n  content: \"\f2e4\";\n}\n\n.ion-md-egg:before {\n  content: \"\f2e5\";\n}\n\n.ion-md-exit:before {\n  content: \"\f2e6\";\n}\n\n.ion-md-expand:before {\n  content: \"\f2e7\";\n}\n\n.ion-md-eye:before {\n  content: \"\f2e9\";\n}\n\n.ion-md-eye-off:before {\n  content: \"\f2e8\";\n}\n\n.ion-md-fastforward:before {\n  content: \"\f2ea\";\n}\n\n.ion-md-female:before {\n  content: \"\f2eb\";\n}\n\n.ion-md-filing:before {\n  content: \"\f2ec\";\n}\n\n.ion-md-film:before {\n  content: \"\f2ed\";\n}\n\n.ion-md-finger-print:before {\n  content: \"\f2ee\";\n}\n\n.ion-md-flag:before {\n  content: \"\f2ef\";\n}\n\n.ion-md-flame:before {\n  content: \"\f2f0\";\n}\n\n.ion-md-flash:before {\n  content: \"\f2f1\";\n}\n\n.ion-md-flask:before {\n  content: \"\f2f2\";\n}\n\n.ion-md-flower:before {\n  content: \"\f2f3\";\n}\n\n.ion-md-folder:before {\n  content: \"\f2f5\";\n}\n\n.ion-md-folder-open:before {\n  content: \"\f2f4\";\n}\n\n.ion-md-football:before {\n  content: \"\f2f6\";\n}\n\n.ion-md-funnel:before {\n  content: \"\f2f7\";\n}\n\n.ion-md-game-controller-a:before {\n  content: \"\f2f8\";\n}\n\n.ion-md-game-controller-b:before {\n  content: \"\f2f9\";\n}\n\n.ion-md-git-branch:before {\n  content: \"\f2fa\";\n}\n\n.ion-md-git-commit:before {\n  content: \"\f2fb\";\n}\n\n.ion-md-git-compare:before {\n  content: \"\f2fc\";\n}\n\n.ion-md-git-merge:before {\n  content: \"\f2fd\";\n}\n\n.ion-md-git-network:before {\n  content: \"\f2fe\";\n}\n\n.ion-md-git-pull-request:before {\n  content: \"\f2ff\";\n}\n\n.ion-md-glasses:before {\n  content: \"\f300\";\n}\n\n.ion-md-globe:before {\n  content: \"\f301\";\n}\n\n.ion-md-grid:before {\n  content: \"\f302\";\n}\n\n.ion-md-hammer:before {\n  content: \"\f303\";\n}\n\n.ion-md-hand:before {\n  content: \"\f304\";\n}\n\n.ion-md-happy:before {\n  content: \"\f305\";\n}\n\n.ion-md-headset:before {\n  content: \"\f306\";\n}\n\n.ion-md-heart:before {\n  content: \"\f308\";\n}\n\n.ion-md-heart-outline:before {\n  content: \"\f307\";\n}\n\n.ion-md-help:before {\n  content: \"\f30b\";\n}\n\n.ion-md-help-buoy:before {\n  content: \"\f309\";\n}\n\n.ion-md-help-circle:before {\n  content: \"\f30a\";\n}\n\n.ion-md-home:before {\n  content: \"\f30c\";\n}\n\n.ion-md-ice-cream:before {\n  content: \"\f30d\";\n}\n\n.ion-md-image:before {\n  content: \"\f30e\";\n}\n\n.ion-md-images:before {\n  content: \"\f30f\";\n}\n\n.ion-md-infinite:before {\n  content: \"\f310\";\n}\n\n.ion-md-information:before {\n  content: \"\f312\";\n}\n\n.ion-md-information-circle:before {\n  content: \"\f311\";\n}\n\n.ion-md-ionic:before {\n  content: \"\f313\";\n}\n\n.ion-md-ionitron:before {\n  content: \"\f314\";\n}\n\n.ion-md-jet:before {\n  content: \"\f315\";\n}\n\n.ion-md-key:before {\n  content: \"\f316\";\n}\n\n.ion-md-keypad:before {\n  content: \"\f317\";\n}\n\n.ion-md-laptop:before {\n  content: \"\f318\";\n}\n\n.ion-md-leaf:before {\n  content: \"\f319\";\n}\n\n.ion-md-link:before {\n  content: \"\f22e\";\n}\n\n.ion-md-list:before {\n  content: \"\f31b\";\n}\n\n.ion-md-list-box:before {\n  content: \"\f31a\";\n}\n\n.ion-md-locate:before {\n  content: \"\f31c\";\n}\n\n.ion-md-lock:before {\n  content: \"\f31d\";\n}\n\n.ion-md-log-in:before {\n  content: \"\f31e\";\n}\n\n.ion-md-log-out:before {\n  content: \"\f31f\";\n}\n\n.ion-md-magnet:before {\n  content: \"\f320\";\n}\n\n.ion-md-mail:before {\n  content: \"\f322\";\n}\n\n.ion-md-mail-open:before {\n  content: \"\f321\";\n}\n\n.ion-md-male:before {\n  content: \"\f323\";\n}\n\n.ion-md-man:before {\n  content: \"\f324\";\n}\n\n.ion-md-map:before {\n  content: \"\f325\";\n}\n\n.ion-md-medal:before {\n  content: \"\f326\";\n}\n\n.ion-md-medical:before {\n  content: \"\f327\";\n}\n\n.ion-md-medkit:before {\n  content: \"\f328\";\n}\n\n.ion-md-megaphone:before {\n  content: \"\f329\";\n}\n\n.ion-md-menu:before {\n  content: \"\f32a\";\n}\n\n.ion-md-mic:before {\n  content: \"\f32c\";\n}\n\n.ion-md-mic-off:before {\n  content: \"\f32b\";\n}\n\n.ion-md-microphone:before {\n  content: \"\f32d\";\n}\n\n.ion-md-moon:before {\n  content: \"\f32e\";\n}\n\n.ion-md-more:before {\n  content: \"\f1c9\";\n}\n\n.ion-md-move:before {\n  content: \"\f331\";\n}\n\n.ion-md-musical-note:before {\n  content: \"\f332\";\n}\n\n.ion-md-musical-notes:before {\n  content: \"\f333\";\n}\n\n.ion-md-navigate:before {\n  content: \"\f334\";\n}\n\n.ion-md-no-smoking:before {\n  content: \"\f335\";\n}\n\n.ion-md-notifications:before {\n  content: \"\f338\";\n}\n\n.ion-md-notifications-off:before {\n  content: \"\f336\";\n}\n\n.ion-md-notifications-outline:before {\n  content: \"\f337\";\n}\n\n.ion-md-nuclear:before {\n  content: \"\f339\";\n}\n\n.ion-md-nutrition:before {\n  content: \"\f33a\";\n}\n\n.ion-md-open:before {\n  content: \"\f33b\";\n}\n\n.ion-md-options:before {\n  content: \"\f33c\";\n}\n\n.ion-md-outlet:before {\n  content: \"\f33d\";\n}\n\n.ion-md-paper:before {\n  content: \"\f33f\";\n}\n\n.ion-md-paper-plane:before {\n  content: \"\f33e\";\n}\n\n.ion-md-partly-sunny:before {\n  content: \"\f340\";\n}\n\n.ion-md-pause:before {\n  content: \"\f341\";\n}\n\n.ion-md-paw:before {\n  content: \"\f342\";\n}\n\n.ion-md-people:before {\n  content: \"\f343\";\n}\n\n.ion-md-person:before {\n  content: \"\f345\";\n}\n\n.ion-md-person-add:before {\n  content: \"\f344\";\n}\n\n.ion-md-phone-landscape:before {\n  content: \"\f346\";\n}\n\n.ion-md-phone-portrait:before {\n  content: \"\f347\";\n}\n\n.ion-md-photos:before {\n  content: \"\f348\";\n}\n\n.ion-md-pie:before {\n  content: \"\f349\";\n}\n\n.ion-md-pin:before {\n  content: \"\f34a\";\n}\n\n.ion-md-pint:before {\n  content: \"\f34b\";\n}\n\n.ion-md-pizza:before {\n  content: \"\f354\";\n}\n\n.ion-md-plane:before {\n  content: \"\f355\";\n}\n\n.ion-md-planet:before {\n  content: \"\f356\";\n}\n\n.ion-md-play:before {\n  content: \"\f357\";\n}\n\n.ion-md-podium:before {\n  content: \"\f358\";\n}\n\n.ion-md-power:before {\n  content: \"\f359\";\n}\n\n.ion-md-pricetag:before {\n  content: \"\f35a\";\n}\n\n.ion-md-pricetags:before {\n  content: \"\f35b\";\n}\n\n.ion-md-print:before {\n  content: \"\f35c\";\n}\n\n.ion-md-pulse:before {\n  content: \"\f35d\";\n}\n\n.ion-md-qr-scanner:before {\n  content: \"\f35e\";\n}\n\n.ion-md-quote:before {\n  content: \"\f35f\";\n}\n\n.ion-md-radio:before {\n  content: \"\f362\";\n}\n\n.ion-md-radio-button-off:before {\n  content: \"\f360\";\n}\n\n.ion-md-radio-button-on:before {\n  content: \"\f361\";\n}\n\n.ion-md-rainy:before {\n  content: \"\f363\";\n}\n\n.ion-md-recording:before {\n  content: \"\f364\";\n}\n\n.ion-md-redo:before {\n  content: \"\f365\";\n}\n\n.ion-md-refresh:before {\n  content: \"\f366\";\n}\n\n.ion-md-refresh-circle:before {\n  content: \"\f228\";\n}\n\n.ion-md-remove:before {\n  content: \"\f368\";\n}\n\n.ion-md-remove-circle:before {\n  content: \"\f367\";\n}\n\n.ion-md-reorder:before {\n  content: \"\f369\";\n}\n\n.ion-md-repeat:before {\n  content: \"\f36a\";\n}\n\n.ion-md-resize:before {\n  content: \"\f36b\";\n}\n\n.ion-md-restaurant:before {\n  content: \"\f36c\";\n}\n\n.ion-md-return-left:before {\n  content: \"\f36d\";\n}\n\n.ion-md-return-right:before {\n  content: \"\f36e\";\n}\n\n.ion-md-reverse-camera:before {\n  content: \"\f36f\";\n}\n\n.ion-md-rewind:before {\n  content: \"\f370\";\n}\n\n.ion-md-ribbon:before {\n  content: \"\f371\";\n}\n\n.ion-md-rose:before {\n  content: \"\f372\";\n}\n\n.ion-md-sad:before {\n  content: \"\f373\";\n}\n\n.ion-md-school:before {\n  content: \"\f374\";\n}\n\n.ion-md-search:before {\n  content: \"\f375\";\n}\n\n.ion-md-send:before {\n  content: \"\f376\";\n}\n\n.ion-md-settings:before {\n  content: \"\f377\";\n}\n\n.ion-md-share:before {\n  content: \"\f379\";\n}\n\n.ion-md-share-alt:before {\n  content: \"\f378\";\n}\n\n.ion-md-shirt:before {\n  content: \"\f37a\";\n}\n\n.ion-md-shuffle:before {\n  content: \"\f37b\";\n}\n\n.ion-md-skip-backward:before {\n  content: \"\f37c\";\n}\n\n.ion-md-skip-forward:before {\n  content: \"\f37d\";\n}\n\n.ion-md-snow:before {\n  content: \"\f37e\";\n}\n\n.ion-md-speedometer:before {\n  content: \"\f37f\";\n}\n\n.ion-md-square:before {\n  content: \"\f381\";\n}\n\n.ion-md-square-outline:before {\n  content: \"\f380\";\n}\n\n.ion-md-star:before {\n  content: \"\f384\";\n}\n\n.ion-md-star-half:before {\n  content: \"\f382\";\n}\n\n.ion-md-star-outline:before {\n  content: \"\f383\";\n}\n\n.ion-md-stats:before {\n  content: \"\f385\";\n}\n\n.ion-md-stopwatch:before {\n  content: \"\f386\";\n}\n\n.ion-md-subway:before {\n  content: \"\f387\";\n}\n\n.ion-md-sunny:before {\n  content: \"\f388\";\n}\n\n.ion-md-swap:before {\n  content: \"\f389\";\n}\n\n.ion-md-switch:before {\n  content: \"\f38a\";\n}\n\n.ion-md-sync:before {\n  content: \"\f38b\";\n}\n\n.ion-md-tablet-landscape:before {\n  content: \"\f38c\";\n}\n\n.ion-md-tablet-portrait:before {\n  content: \"\f38d\";\n}\n\n.ion-md-tennisball:before {\n  content: \"\f38e\";\n}\n\n.ion-md-text:before {\n  content: \"\f38f\";\n}\n\n.ion-md-thermometer:before {\n  content: \"\f390\";\n}\n\n.ion-md-thumbs-down:before {\n  content: \"\f391\";\n}\n\n.ion-md-thumbs-up:before {\n  content: \"\f392\";\n}\n\n.ion-md-thunderstorm:before {\n  content: \"\f393\";\n}\n\n.ion-md-time:before {\n  content: \"\f394\";\n}\n\n.ion-md-timer:before {\n  content: \"\f395\";\n}\n\n.ion-md-train:before {\n  content: \"\f396\";\n}\n\n.ion-md-transgender:before {\n  content: \"\f397\";\n}\n\n.ion-md-trash:before {\n  content: \"\f398\";\n}\n\n.ion-md-trending-down:before {\n  content: \"\f399\";\n}\n\n.ion-md-trending-up:before {\n  content: \"\f39a\";\n}\n\n.ion-md-trophy:before {\n  content: \"\f39b\";\n}\n\n.ion-md-umbrella:before {\n  content: \"\f39c\";\n}\n\n.ion-md-undo:before {\n  content: \"\f39d\";\n}\n\n.ion-md-unlock:before {\n  content: \"\f39e\";\n}\n\n.ion-md-videocam:before {\n  content: \"\f39f\";\n}\n\n.ion-md-volume-down:before {\n  content: \"\f3a0\";\n}\n\n.ion-md-volume-mute:before {\n  content: \"\f3a1\";\n}\n\n.ion-md-volume-off:before {\n  content: \"\f3a2\";\n}\n\n.ion-md-volume-up:before {\n  content: \"\f3a3\";\n}\n\n.ion-md-walk:before {\n  content: \"\f3a4\";\n}\n\n.ion-md-warning:before {\n  content: \"\f3a5\";\n}\n\n.ion-md-watch:before {\n  content: \"\f3a6\";\n}\n\n.ion-md-water:before {\n  content: \"\f3a7\";\n}\n\n.ion-md-wifi:before {\n  content: \"\f3a8\";\n}\n\n.ion-md-wine:before {\n  content: \"\f3a9\";\n}\n\n.ion-md-woman:before {\n  content: \"\f3aa\";\n}\n\n\@font-face {\n  font-family: 'Avenir Next';\n  src: local(\"Avenir Next Bold\"), url(\"/assets/fonts/avenir-next/bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/avenir-next/bold.woff\") format(\"woff\"), url(\"/assets/fonts/avenir-next/bold.ttf\") format(\"ttf\"), url(\"/assets/fonts/avenir-next/bold.eot?#iefix\") format(\"eot\");\n  font-weight: 700;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Avenir Next';\n  src: local(\"Avenir Next Demi Bold\"), url(\"/assets/fonts/avenir-next/demi.woff2\") format(\"woff2\"), url(\"/assets/fonts/avenir-next/demi.woff\") format(\"woff\"), url(\"/assets/fonts/avenir-next/demi.ttf\") format(\"ttf\"), url(\"/assets/fonts/avenir-next/demi.eot?#iefix\") format(\"eot\");\n  font-weight: 600;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Avenir Next';\n  src: local(\"Avenir Next Medium\"), url(\"/assets/fonts/avenir-next/medium.woff\") format(\"woff\"), url(\"/assets/fonts/avenir-next/medium.ttf\") format(\"truetype\"), url(\"/assets/fonts/avenir-next/medium.eot?#iefix\") format(\"eot\");\n  font-weight: 500;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Avenir Next';\n  src: local(\"Avenir Next Regular\"), url(\"/assets/fonts/avenir-next/regular.woff\") format(\"woff\"), url(\"/assets/fonts/avenir-next/regular.ttf\") format(\"ttf\"), url(\"/assets/fonts/avenir-next/regular.eot?#iefix\") format(\"eot\");\n  font-weight: 400;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Avenir Next';\n  src: local(\"Avenir Next Thin\"), url(\"/assets/fonts/avenir-next/thin.woff2\") format(\"woff2\"), url(\"/assets/fonts/avenir-next/thin.woff\") format(\"woff\"), url(\"/assets/fonts/avenir-next/thin.ttf\") format(\"ttf\"), url(\"/assets/fonts/avenir-next/thin.eot?#iefix\") format(\"eot\");\n  font-weight: 300;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Avenir Next';\n  src: local(\"Avenir Next Ultra Light\"), url(\"/assets/fonts/avenir-next/ultralight.woff2\") format(\"woff2\"), url(\"/assets/fonts/avenir-next/ultralight.woff\") format(\"woff\"), url(\"/assets/fonts/avenir-next/ultralight.ttf\") format(\"ttf\"), url(\"/assets/fonts/avenir-next/ultralight.eot?#iefix\") format(\"eot\");\n  font-weight: 200;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Eina';\n  src: local(\"Eina 03 Bold\"), url(\"/assets/fonts/eina/eina-03-bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/eina/eina-03-bold.woff\") format(\"woff\"), url(\"/assets/fonts/eina/eina-03-bold.ttf\") format(\"ttf\"), url(\"/assets/fonts/eina/eina-03-bold.eot?#iefix\") format(\"eot\");\n  font-weight: 700;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Eina';\n  src: local(\"Eina 03 SemiBold\"), url(\"/assets/fonts/eina/eina-03-semibold.woff2\") format(\"woff2\"), url(\"/assets/fonts/eina/eina-03-semibold.woff\") format(\"woff\"), url(\"/assets/fonts/eina/eina-03-semibold.ttf\") format(\"ttf\"), url(\"/assets/fonts/eina/eina-03-semibold.eot?#iefix\") format(\"eot\");\n  font-weight: 600;\n  unicode-range: U+000-5FF;\n}\n\n\@font-face {\n  font-family: 'Eina';\n  src: local(\"Eina 03 Regular\"), url(\"/assets/fonts/eina/eina-03-regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/eina/eina-03-regular.woff\") format(\"woff\"), url(\"/assets/fonts/eina/eina-03-regular.ttf\") format(\"ttf\"), url(\"/assets/fonts/eina/eina-03-regular.eot?#iefix\") format(\"eot\");\n  font-weight: 400;\n  unicode-range: U+000-5FF;\n}\n\nh1, h2, h3, h4 {\n  color: #24282e;\n}\n\nh1 {\n  font-size: 32px;\n  font-weight: bold;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 48px;\n  margin-top: -24px;\n  margin-bottom: .9em;\n}\n\nh3 {\n  padding-top: 4em;\n  margin-top: -2em;\n  font-size: 16px;\n  letter-spacing: -.025em;\n  margin-bottom: 1.3em;\n}\n\np, ul {\n  color: #3c4b62;\n  font-size: 14px;\n  letter-spacing: -.02em;\n  line-height: 2em;\n  margin-bottom: 2.16em;\n  font-weight: 400;\n}\n\nul {\n  padding: 1px 0 14px 17px;\n}\n\nli {\n  margin-bottom: 1.08em;\n}\n\na,\nstencil-route-link {\n  color: #3880ff;\n  text-decoration: none;\n  font-weight: 500;\n  transition: .2s color ease;\n}\n\na:hover,\nstencil-route-link:hover {\n  color: #619aff;\n}\n\nstencil-route-link:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\npre {\n  word-break: break-all;\n  word-wrap: break-word;\n  display: block;\n  white-space: pre-wrap;\n  margin: 24px 0px 28px;\n  padding: 16px 24px;\n  border-radius: 4px;\n  color: #abb2bf;\n  background-color: #16161d;\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n}\n\npre code {\n  font-weight: 500;\n  display: block;\n  overflow-x: auto;\n  word-wrap: normal;\n  white-space: pre;\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 20px;\n}\n\ncode {\n  font-weight: 400;\n  font-family: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 14px;\n}\n\n.hljs-comment, .hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag, .hljs-keyword, .hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in, .hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n::selection {\n  background: #e1ecff;\n}\n\n::-moz-selection {\n  background: #e1ecff;\n}\n\nhtml, body {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  -webkit-font-smoothing: antialiased;\n  font-smooth: always;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nstencil-router app-marked {\n  padding: 23px 32px 20px;\n  max-height: 100%;\n  overflow: scroll;\n}\n\nionic-docs {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  padding-top: 70px;\n}\n\nstencil-router {\n  position: fixed;\n  top: 70px;\n  bottom: 0;\n  overflow: scroll;\n  left: calc( 50% - 325px);\n}\n\nstencil-router stencil-route {\n  width: 100%;\n  display: block;\n}\n\nstencil-router app-marked {\n  display: block;\n  width: 650px;\n  margin-right: calc( 50vw - 325px);\n}"; }
}

class SiteHeader {
    render() {
        return [
            h("nav", null,
                h("a", { href: '/docs', id: "site-logo" }),
                h("dropdown-framework", null),
                h("site-search", null),
                h("dropdown-ecosystem", null),
                h("a", { href: "https://github.com/ionic-team/ionic", target: "_blank", class: "github" }, "GitHub"))
        ];
    }
    static get is() { return "site-header"; }
    static get style() { return "site-header {\n  background: #3880ff;\n  color: #b1d9ff;\n  position: sticky;\n}\n\nsite-header h1, site-header h2, site-header h3, site-header h4, site-header p, site-header li {\n  color: #b1d9ff;\n  margin: 0;\n}\n\nsite-header {\n  padding: 23px 32px 20px;\n  max-height: 100%;\n  overflow: scroll;\n}\n\nsite-header {\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  position: fixed;\n  min-height: 75px;\n  max-height: auto;\n  overflow: visible;\n  padding-right: 21px;\n  font-family: \"Eina\", \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\nsite-header nav {\n  display: flex;\n  position: relative;\n  align-items: center;\n}\n\nsite-header #site-logo {\n  background: url(\"/assets/img/docs-logo.png\") no-repeat 0 0;\n  background-size: 72px;\n  width: 72px;\n  height: 24px;\n  flex-grow: 0;\n  display: inline-block;\n  transition: .2s opacity ease;\n}\n\nsite-header #site-logo:hover {\n  opacity: .9;\n}\n\nsite-header .github {\n  font-size: 13px;\n  margin-top: 1px;\n  font-weight: 600;\n  padding-right: 16px;\n  display: inline-block;\n  letter-spacing: -.02em;\n  color: rgba(255, 255, 255, 0.7);\n  transition: .2s color ease;\n}\n\nsite-header .github::after, site-header .github::before {\n  background: url(\"/assets/img/new-tab-icon.png\") no-repeat 0 -22px;\n  background-size: 11px;\n  width: 11px;\n  height: 11px;\n  content: '';\n  right: 0;\n  top: 9px;\n  position: absolute;\n  transition: .2s opacity ease;\n}\n\nsite-header .github:after {\n  opacity: 0;\n  background-position: 0 -33px;\n}\n\nsite-header .github:hover {\n  color: white;\n}\n\nsite-header .github:hover:after {\n  opacity: 1;\n}"; }
}

class SiteMenu {
    render() {
        return (h("nav", { class: "menu-wrapper" },
            h("ul", { class: "nested-menu" },
                h("li", null,
                    h("stencil-route-link", { url: "/" }, "Home")),
                h("li", { class: "active" },
                    h("menu-expander", { service: "intro" }, "Introduction"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" }, "What is Ionic Framework?")),
                        h("li", null,
                            h("stencil-route-link", { url: "/intro/basics" }, "Basic Features")),
                        h("li", null,
                            h("stencil-route-link", { url: "/intro/structure" }, "App Structure")),
                        h("li", null,
                            h("stencil-route-link", { url: "/intro/concepts" }, "Core Concepts")),
                        h("li", null,
                            h("stencil-route-link", { url: "/intro/support" }, "Browser Support")))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "Getting Started"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/installation" }, "Installation")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/starting-an-app" }, "Starting an App")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/run-your-app" }, "Run Your App")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/dev-bulid" }, "Dev Build")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/testing" }, "Testing")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/deploying" }, "Deploying")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/releasing" }, "Releasing")),
                        h("li", null,
                            h("stencil-route-link", { url: "/getting-started/tutorial" }, "Tutorial")))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "Components"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" })))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "API Reference"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" })))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "Native APIs"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" })))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "Theming"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" })))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "Contributing"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" })))),
                h("li", null,
                    h("menu-expander", { service: "getting-started" }, "FAQ"),
                    h("ul", null,
                        h("li", null,
                            h("stencil-route-link", { url: "" })))))));
    }
    static get is() { return "site-menu"; }
    static get style() { return "site-menu {\n  padding: 23px 32px 20px;\n  max-height: 100%;\n  overflow: scroll;\n}\n\nsite-menu {\n  width: 256px;\n  position: fixed;\n  top: 70px;\n  bottom: 0;\n  left: 0;\n}\n\nsite-menu nav > ul > li > stencil-route-link:hover,\nsite-menu nav > ul > li > menu-expander:hover {\n  text-decoration: none;\n}\n\nsite-menu nav > ul > li > stencil-route-link a,\nsite-menu nav > ul > li > menu-expander a {\n  font-weight: 600;\n  color: #24282e;\n  padding: 4px 0;\n  font-size: 14px;\n  letter-spacing: -.02em;\n}\n\nsite-menu nav > ul > li > stencil-route-link a:hover,\nsite-menu nav > ul > li > menu-expander a:hover {\n  color: #48505c;\n}\n\nsite-menu nav > ul > li > stencil-route-link a.link-active, site-menu nav > ul > li > stencil-route-link a:hover,\nsite-menu nav > ul > li > menu-expander a.link-active,\nsite-menu nav > ul > li > menu-expander a:hover {\n  transform: none;\n}\n\nsite-menu stencil-route-link:hover,\nsite-menu menu-expander:hover {\n  text-decoration: none;\n}\n\nsite-menu menu-expander + ul stencil-route-link {\n  height: 28px;\n}\n\nsite-menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nsite-menu ul ul {\n  margin: -3px 0 3px 8px;\n}\n\nsite-menu li {\n  list-style: none;\n  margin: 0;\n}\n\nsite-menu a {\n  text-decoration: none;\n  color: #808d9f;\n  text-indent: 0;\n  display: block;\n  padding: 0;\n  letter-spacing: -.02em;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: .2s color ease, .2s height ease, .2s padding ease, .2s transform ease;\n}\n\nsite-menu a.link-active, site-menu a:hover {\n  color: #3c4b62;\n  transform: translateX(1px);\n  text-decoration: none;\n}\n\nsite-menu a.link-active {\n  color: #3880ff;\n  font-weight: 600;\n}"; }
}

export { AppMarked, DropdownFramework, App as IonicDocs, SiteHeader, SiteMenu };
