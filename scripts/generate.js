// npm run stencil:generate component my-component

const fs = require('fs');

const capitalize = s => s.charAt(0).toUpperCase() + s.substr(1);

const av = process.argv;

const type = av[2];
const name = av[3];

const componentClassName = name.split('-').map(p => capitalize(p)).join('');

const jsTemplate = `
import { Component } from '@stencil/core';

@Component({
  tag: '${name}',
  styleUrl: '${name}.scss'
})
export class ${componentClassName} {
  render() {
  }
}
`

const scssTemplate = `
${name} {

}
`

const outPath = `src/components/${name}`;

try {
    fs.mkdirSync(outPath);
} catch(e) {
    console.error('Unable to create component')
    throw e;
}

try {
    fs.writeFileSync(`${outPath}/${name}.tsx`, jsTemplate.trim());
    fs.writeFileSync(`${outPath}/${name}.scss`, scssTemplate.trim());
} catch(e) {
    console.error('Unable to create source files');
    throw e;
}