export function getPluginMarkup(data): string {
  const r = '\r\n\r\n';
  const st = '<strong>Type: </strong>';

  let markdown = `# ${data.name} ${r}`;

  markdown += data.description + r;
  markdown += `Repo: [${data.repo}](${data.repo})${r}${r}`;

  markdown += `## Installation ${r}`;
  markdown += `<ol>\r\n<li>Install the Cordova and Ionic Native plugins:\r\n`;
  markdown += `<code-block language="shell">`;
  markdown += data.installation ?
    data.installation : `$ ionic cordova plugin add ${data.cordovaName}`;
  markdown += `\r\n$ npm install --save @ionic-native/${data.npmName}\r\n`;
  markdown += `</code-block>\r\n</li>\r\n`;
  markdown += '<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">';
  markdown += `Add this plugin to your app's module</a></li>\r\n</ol>${r}${r}`;

  if (data.platforms) {
    markdown += `### Supported Platforms${r}`;
    data.platforms.forEach(os => { markdown += `* ${os}\r\n`; });
    markdown += `${r}${r}### Usage${r}${data.usage}${r}${r}`;
    markdown += `<p><br></p>${r}`;
  }

  if (data.members) {
    markdown += `## Instance Members${r}`;
    data.members.forEach(member => {
      if (!member) return;
      markdown += `### ${member.name}${r}${member.description}${r}`;
      if (member.params) {
        markdown += `<dl>\r\n`;
        member.params.forEach(param => {
          markdown += `<dt><h4>${param.name}</h4>`;
          if (param.type) {
            markdown += `${st}<code>${param.type}</code>`;
          }
          markdown += `</dt>\r\n<dd>${param.description}`;
          if (param.optional) markdown += ' <span class="tag">optional</span>';
          markdown += '</dd>';
        });
        markdown += `\r\n</dl>${r}`;
      }
    });
    markdown += `<p><br></p>${r}`;
  }

  if (data.interfaces) {
    data.interfaces.forEach(face => {
      if (!face) return;
      markdown += `## ${face.name}${r}`;
      // if (face.comment) markdown += `${face.comment.shortText}${r}`;

      if (face.children) {
        markdown += `<dl>\r\n`;
        face.children.forEach(child => {
          if (child.kindString !== 'Property') return;

          markdown += `<dt><h4>${child.name}</h4>`;
          if (child.type) {
            if (child.type.type === 'array' && child.type.elementType) {
              markdown += `${st}<code>${child.type.elementType.name}[]</code>`;
            } else {
              markdown += `${st}<code>${child.type.type}</code>`;
            }
          }
          markdown += `</dt>\r\n<dd>${child.comment && child.comment.shortText}`;
          if (child.flags && child.flags.isOptional) {
            markdown += ' <span class="tag">optional</span>';
          }
          markdown += '</dd>';
        });
        markdown += `\r\n</dl>${r}`;
      }

    });
  }

  return markdown;
}

