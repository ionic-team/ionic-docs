export function getPluginMarkup(data): string {
  const r = '\r\n\r\n';

  let markdown = `<h1>${data.name}</h1> ${r}`;

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

  markdown += `### Supported Platforms${r}`;
  data.platforms.forEach(os => { markdown += `* ${os}\r\n`; });
  markdown += `${r}${r}### Usage${r}${data.usage}${r}${r}`;

  markdown += `## Instance Members${r}`;
  data.members.forEach(member => {
    if (!member) return;
    markdown += `### ${member.name}${r}`;
  });
  return markdown;
}

