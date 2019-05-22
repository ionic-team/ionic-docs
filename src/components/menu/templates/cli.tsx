import commands from '../data/cli-commands.json';

export default () => <docs-nav items={items}/>;

const items = {
  'CLIドキュメンテーション': {
    '概要': '/docs/cli',
    '設定': '/docs/cli/configuration',
    'Proxyの利用': '/docs/cli/using-a-proxy',
    '変更履歴': 'https://github.com/ionic-team/ionic-cli/blob/master/packages/ionic/CHANGELOG.md'
  },
  'コマンドリファレンス': Object.entries(commands).sort()
};
