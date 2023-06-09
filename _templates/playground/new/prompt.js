// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Which component is this playground for?',
    initial: 'ion-button',
  },
  {
    type: 'input',
    name: 'path',
    message: 'What should the playground path be?',
    hint: 'e.g. `theming/colors`',
    initial: 'basic',
  },
  // {
  //   type: 'multiselect',
  //   name: 'versions',
  //   hint: '(Use <space> to select, <return> to submit)',
  //   message: 'Select versions to generate playgrounds for',
  //   initial: [1],
  //   choices: [
  //     { name: 'v6', value: 'v6' },
  //     { name: 'v7', value: 'v7' },
  //   ],
  // },
  {
    type: 'toggle',
    name: 'css',
    message: 'Do you want CSS scaffolded?',
    enabled: 'Yes',
    disabled: 'No',
  },
];
