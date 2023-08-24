const changeCase = require('change-case');

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Which component is this playground for?',
          initial: 'ion-button',
          validate(value) {
            return value.match(/^ion-[a-z/-]*[a-z]+$/)
              ? true
              : "Component name must be kebab-case and begin with 'ion-'";
          },
        },
        {
          type: 'input',
          name: 'path',
          message: 'What should the playground path be?',
          hint: 'e.g. `basic` or `theming/colors`',
          validate(value) {
            return value.match(/^[a-z]+[a-z/-]*[a-z]+$/)
              ? true
              : "Path should begin and end with a letter and only contain lowercase letters, '-', or '/'";
          },
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
      ])
      .then((answers) => {
        const componentName = changeCase.pascal(answers.path.split('/').pop());
        console.log(
          `\nTo use this component in a docs markdown file, include\nthe following:\n\n## ${componentName}\n\nimport ${componentName} from '@site/static/usage/v7/${answers.name.replace(
            'ion-',
            ''
          )}/${answers.path}/index.md';\n\n<${componentName} />\n`
        );

        return answers;
      });
  },
};
