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
      text: 'Installation',
      href: '#installation'
    });
  }

  if (platforms) {
    headings.push({
      text: 'Supported Platforms',
      href: '#platforms'
    });
  }

  if (usage) {
    headings.push({
      text: 'Usage',
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
      
      <h2>Stuck on a Cordova issue?</h2>
      <docs-card class="cordova-ee-card" header="Don't waste precious time on plugin issues." href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine" >
        <img src="/docs/assets/icons/native-cordova-bot.png" class="cordova-ee-img" />
        <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic's experts offer official 
          maintenance, support, and integration help.
        </p>
        
        <docs-button class="native-ee-detail" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us Today!</docs-button>
      </docs-card>
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
        <a href="#installation">Installation</a>
      </h2>
      <docs-tabs tabs="Community, Enterprise">
      <command-line slot="Community">
              <command-prompt>{`ionic cordova plugin add ${cordova}`}</command-prompt>
              <command-prompt>{`npm install ${npm}`}</command-prompt>
        </command-line>
        <div slot="Enterprise">
        <div>
            <strong>Ionic EE comes with fully supported and maintained plugins from the Ionic Team. </strong>
            <a class="btn"
              href="/docs/native#enterprise-edition">Learn More</a>
              &nbsp;<strong>or</strong>&nbsp;
            <a class="btn"
              href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a>
          </div>
          <command-line>
                <command-prompt>{`ionic activate-native-ee --key=YOURPRODUCTKEY`}</command-prompt>
                <command-prompt>{`ionic integrations add ${npm}`}</command-prompt>
          </command-line>
        </div>
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
        <a href="#platforms">Supported Platforms</a>
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
        <a href="#usage">Usage</a>
      </h2>
      <div innerHTML={usage}/>
    </section>
  );
};
