export function getMarkup(data): string {
  return `
# Storage

<p class="intro">${data.comment.shortText}</p>

${data.comment.text}

## Usage

${data.comment.tags[0].text}

## Instance Members

${data.children.map(member => {
  if (member.name.charAt(0) === '_') return;

  if (
    member.kindString === 'Constructor' ||
    member.kindString === 'Accessor'
  ) return `
### ${member.name}

${member.comment.shortText ? member.comment.shortText : ''}

${member.comment.text ? member.comment.text : ''}
<br><br>`;

  return `

### ${member.name}${member.kindString === 'Method' ? '()' : ''}
${member.signatures[0].comment.shortText ?
  member.signatures[0].comment.shortText : ''}
${member.signatures[0].comment.returns ? `
__Returns:__ ${member.signatures[0].comment.returns}

` : ''}

${member.signatures[0].parameters ? `<h4>Parameters</h4>
<dl>` : ''}${
  member.signatures[0].parameters ?
  member.signatures[0].parameters.map(param => `<dt><h5>${param.name}</h5>${
param.type.type === 'intrinsic' ?
  `<strong>Type:</strong> <code>${param.type.name}</code>` : ''}</dt><dd>${
param.comment.text}</dd>`).join('') : ''}${
member.signatures[0].parameters ? '</dl>' : ''}<br><br>`;
}).join('\n\n')}
`;
}
