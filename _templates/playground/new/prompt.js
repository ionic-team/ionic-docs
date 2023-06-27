// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Which component is this playground for?',
    hint: 'Component name must be kebab-case',
    initial: 'ion-button',
  },
  {
    type: 'input',
    name: 'path',
    message: 'What should the playground path be?',
    hint: 'e.g. `theming/colors`',
    initial: 'basic',
  },
  {
    type: 'select',
    name: 'version',
    message: 'Select the Ionic Framework version for the playground',
    initial: '7',
    choices: ['6', '7'],
  },
  {
    type: 'toggle',
    name: 'css',
    message: 'Generate custom CSS files?',
    enabled: 'Yes',
    disabled: 'No',
  },
  {
    type: 'toggle',
    name: 'angular_ts',
    message: 'Generate an Angular TypeScript file?',
    enabled: 'Yes',
    disabled: 'No',
  },
];
