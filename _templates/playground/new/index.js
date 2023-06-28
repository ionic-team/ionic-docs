const changeCase = require('change-case');

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
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

    return inquirer.prompt(questions).then((answers) => {
      const componentName = changeCase.pascal(answers.path.split('/').pop());
      console.log(
        `\nTo use this new component in a docs markdown file, include\nthe following:\n\n## ${componentName}\n\nimport ${componentName} from '@site/static/usage/v7/${answers.name.replace(
          'ion-',
          ''
        )}/${answers.path}/index.md';\n\n<${componentName} />\n`
      );

      // // both set of answers must be returned as a merged object, else the previous set of answers won't be available to the templates
      // return inquirer.prompt(questions).then((nextAnswers) => Object.assign({}, answers, nextAnswers));

      return answers;
    });
  },
};
