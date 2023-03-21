const fetch = require('node-fetch');
import { commands } from '../data/cli.json';

export const getTranslateType = async () => {
  const response = await fetch('https://unpkg.com/@ionic/docs/core.json');
  const { components } = await response.json();

  return [
    {
      type: 'api',
      contents: components,
      key: 'tag',
      contentsKey: 'components',
      markdown: 'docs',
      translateTarget: ['props', 'methods', 'events', 'listeners', 'styles', 'slots', 'parts'],
      translateTargetKey: 'docs',
      resource: response,
    },
    {
      type: 'cli',
      contents: commands,
      key: 'name',
      contentsKey: 'commands',
      markdown: 'description',
      translateTarget: ["inputs"],
      translateTargetKey: 'summary',
      resource: require('../data/cli.json'),
    },
    {
      type: 'native',
      contents: require('../data/native.json'),
      key: 'packageName',
      contentsKey: '',
      markdown: 'description',
      translateTarget: [],
      translateTargetKey: 'undefined',
      resource: require('../data/native.json'),
    }
  ];
}
