import { commands } from '../../data/cli.json';
import {
  Page,
  buildPages
} from '../index';
import renderMarkdown from '../markdown-renderer';

export default {
  title: 'Build CLI pages',
  task: () => buildPages(getCLIPages)
};

const getCLIPages = async (): Promise<Page[]> => {
  return commands.map(command => {
    const { name, description, summary, inputs, options, ...rest } = command;

    return {
      title: name,
      body: renderMarkdown(description),
      path: `/docs/cli/commands/${name.slice(6).replace(/\s/g, '-')}`,
      summary: renderMarkdown(summary),
      inputs: renderInputs(inputs),
      options: renderOptions(options),
      skipIntros: true,
      template: 'cli',
      ...rest
    };
  });
};

const renderInputs = (inputs: any) => inputs.map((input: any) => ({
  ...input,
  summary: renderMarkdown(input.summary),
}));

const renderOptions = (options: any) => options.map((option: any) => ({
  ...option,
  summary: renderMarkdown(option.summary),
}));
