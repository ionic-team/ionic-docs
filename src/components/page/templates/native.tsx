import { GitBranch } from '../../../icons';

export default (props) => {
  const { page } = props;
  const headings = [...page.headings];
  const repo = renderRepo(page.repo);
  const installation = renderInstallation(page.cordova, page.package);
  const platforms = renderPlatforms(page.platforms);
  const usage = renderUsage(page.usage);

  if (installation) {
    headings.push({
      text: 'インストール',
      href: '#installation'
    });
  }

  if (platforms) {
    headings.push({
      text: 'サポートしているプラットフォーム',
      href: '#platforms'
    });
  }

  if (usage) {
    headings.push({
      text: '利用方法',
      href: '#usage'
    });
  }

  return (
    <article>
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={headings} basepath={page.path}/>
      <section class="markdown-content" innerHTML={page.body}/>
      { repo }
      { installation }
      { platforms }
      { usage }
    </article>
  );
};

const renderRepo = (repo: string) => {
  if (!repo) {
    return null;
  }

  return (
    <section>
      <a href={repo} class="outbound" target="_blank"><GitBranch/> { repo }</a>
      <h2>Cordovaの問題で困っていますか？</h2>
      <docs-shadow-card class="cordova-ee-card" header="プラグインの問題で貴重な時間を無駄にしないでください." href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">
        <div>
          <img src="/docs/assets/icons/native-cordova-bot.png" class="cordova-ee-img" />
          <p>本格的なプロジェクトを構築している場合、トラブルシューティングに時間を費やす余裕はありません。Ionicのエキスパートが、保守、サポート、統合に関する公式サポートを提供しています。</p>
          <docs-button class="native-ee-detail" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">今日連絡ください！</docs-button>
        </div>
      </docs-shadow-card>
    </section>
  );
};

const renderInstallation = (cordova: string, npm: string) => {
  if (!cordova || !npm) {
    return null;
  }

  return (
    <section>
      <h2 id="installation">
        <a href="#installation">インストール</a>
      </h2>
      <docs-tabs>
        <docs-tab tab="Community">
          <command-line slot="コミュニティ">
            <command-prompt>{`ionic cordova plugin add ${cordova}`}</command-prompt>
            <command-prompt>{`npm install ${npm}`}</command-prompt>
          </command-line>
        </docs-tab>
        <docs-tab tab="エンタープライズ">
          <blockquote>Ionic EEでは、Ionic Teamが完全にサポートしメンテナンスしているプラグインを利用できます。 <a class="btn" href="/docs/native#enterprise-edition">詳しくみる</a> か <a class="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">連絡ください。</a></blockquote>
          <command-line>
            <command-prompt>{`ionic enterprise register --key=YOURPRODUCTKEY`}</command-prompt>
            <command-prompt>{`npm install @ionic-enterprise/${npm.split('/')[1]}`}</command-prompt>
          </command-line>
        </docs-tab>
      </docs-tabs>
    </section>
  );
};

const renderPlatforms = (platforms: string[] = []) => {
  if (!platforms.length) {
    return null;
  }

  return (
    <section>
      <h2 id="platforms">
        <a href="#platforms">サポートしているプラットフォーム</a>
      </h2>
      <ul>
        {platforms.map(platform => (
          <li>{platform}</li>
        ))}
      </ul>
    </section>
  );
};

const renderUsage = (usage: string) => {
  if (!usage) {
    return null;
  }

  return (
    <section>
      <h2 id="usage">
        <a href="#usage">利用方法</a>
      </h2>
      <div innerHTML={usage}/>
    </section>
  );
};
