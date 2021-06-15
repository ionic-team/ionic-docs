var unified = require('unified')
var markdown = require('remark-parse')
var html = require('remark-html')

function renderMarkdown(markdownString) {
  return unified()
    .use(markdown)
    .use(html)
    .processSync(markdownString)
}

// a String equivalent to this component 
// https://github.com/ionic-team/ionic-docs/blob/master/src/components/reference/reference.tsx
function renderReference(data, methodKeys){return `
<table className="reference-table">
  ${data.map((item) => {
    const { Head, ...keys } = methodKeys;

    return `
      <thead>
        <tr>
          <th colSpan="2">
            <h3>${Head(item)}</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        ${Object.keys(keys).map(name => {
          const content = keys[name](item);
          if (content) {
            return `
              <tr>
                <th>${name}</th>
                <td>${content}</td>
              </tr>
            `;
          }
        }).join(' ')}
      </tbody>`
  }).join('')}
</table>
`};

// a String equivalent to this functional component 
// https://github.com/ionic-team/ionic-docs/blob/master/src/components/page/templates/cli.tsx#L146-L157
function renderOptionSpec(option){ return`
<a href="#option-${option.name}" id="option-${option.name}">
  --${option.type === 'boolean' && option.default === true ? `no-${option.name}` : option.name}
  ${ option.type === 'string' ? `<span class="option-spec"> =&lt;${option.spec.value}&gt;</span>` : '' }
</a>`.replace('\n','');
}

module.exports = {
  renderOptionSpec,
  renderMarkdown,
  renderReference,
}