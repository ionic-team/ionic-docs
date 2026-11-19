const changeCase = require('change-case');

/**
 * Returns the major version of Ionic for the demo to load from the CDN.
 *
 * The CDN only serves published versions, so a playground for a major that
 * is not published yet loads the latest published one instead. Otherwise
 * the demo requests a version that does not exist and renders nothing. With
 * the fallback the demo renders, but APIs new in that major do not work in
 * it until the major is published.
 */
const getCdnVersion = async (version) => {
  try {
    const response = await fetch('https://registry.npmjs.org/-/package/@ionic/core/dist-tags', {
      signal: AbortSignal.timeout(5000),
    });
    const { latest } = await response.json();
    const latestMajor = parseInt(latest, 10);

    if (Number.isNaN(latestMajor)) {
      throw new Error(`Unexpected latest version: ${latest}`);
    }

    if (Number(version) > latestMajor) {
      console.log(
        `\nIonic ${version} is not published yet, so the demo loads Ionic ${latestMajor} from the CDN and APIs new in Ionic ${version} will not work in it. Update the version in demo.html once Ionic ${version} is published, and replace FW-XXXX in its TODO with the ticket that tracks the update, creating one if it does not exist yet.`
      );
      return String(latestMajor);
    }
  } catch (error) {
    console.warn(
      `\nCould not check the published Ionic versions, so the demo loads Ionic ${version} from the CDN. If that version is not published yet, change it in demo.html.`
    );
  }

  return version;
};

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: 'toggle',
          name: 'is_component',
          message: 'Is this playground for a component?',
          initial: true,
        },
      ])
      .then((answers) => {
        return inquirer
          .prompt([
            // ask a different question for components vs. other playgrounds
            answers.is_component
              ? {
                  type: 'input',
                  name: 'component',
                  message: 'Which component is this playground for?',
                  initial: 'ion-button',
                  validate(value) {
                    return value.match(/^ion-[a-z/-]*[a-z]+$/)
                      ? true
                      : "Component name must be kebab-case and begin with 'ion-'";
                  },
                }
              : {
                  type: 'input',
                  name: 'name',
                  message: 'Which guide section is this playground for?',
                  initial: 'animations',
                  validate(value) {
                    return value.match(/^[a-z/-]+$/) ? true : 'Section must be kebab-case';
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
              initial: '9',
              choices: ['8', '9'],
            },
            {
              type: 'toggle',
              name: 'css',
              message: 'Generate custom CSS files?',
            },
          ])
          .then(async (answers) => {
            answers.name = answers.name || answers.component.replace('ion-', '');

            // if the playground is not for a component,
            // include an ion-card in the playground
            answers.component = answers.component || 'ion-card';

            answers.cdnVersion = await getCdnVersion(answers.version);

            const playgroundName = changeCase.pascal(answers.path.split('/').pop());
            console.log(
              `\nTo use this playground in a docs markdown file, include\nthe following:\n\n## ${playgroundName}\n\nimport ${playgroundName} from '@site/static/usage/v${answers.version}/${answers.name}/${answers.path}/index.mdx';\n\n<${playgroundName} />\n`
            );

            return answers;
          });
      });
  },
};
