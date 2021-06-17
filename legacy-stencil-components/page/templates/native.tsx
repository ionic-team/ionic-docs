import { h } from '@stencil/core';

import { GitBranch } from '../../../icons';
import { toHypertext } from '../to-hypertext';

export default (props: { [key: string]: any }) => {
  const { page } = props;
  const headings = [...page.headings];
  const repo = renderRepo(page.repo);
  const installation = renderInstallation(page.cordova, page.package);
  const cordovaPromo = renderCordovaPromotion(page.premierSlug);
  const platforms = renderPlatforms(page.platforms);
  const usage = renderUsage(page.codeUsage);
  const capIncompat = renderCapIncompat(page.capacitorIncompatible);
  const isPremier = renderPremier(page.premierSlug);

  if (installation) {
    headings.push({
      text: 'Installation',
      href: '#installation'
    });
  }

  if (isPremier) {
    headings.push({
      text: 'Premier Version Available',
      href: '#premier'
    });
  }

  if (platforms) {
    headings.push({
      text: 'Supported Platforms',
      href: '#platforms'
    });
  }

  if (capIncompat) {
    headings.push({
      text: 'Capacitor',
      href: '#capacitor'
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
      <h1>{page.title}</h1>
      <div class="page-meta">
        <docs-table-of-contents links={headings} basepath={page.path}/>
        <internal-ad></internal-ad>
      </div>
      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>
      {repo}
      {isPremier}
      {cordovaPromo}
      {installation}
      {platforms}
      {capIncompat}
      {usage}
    </article>
  );
};

const renderRepo = (repo?: string) => {
  if (typeof repo === 'undefined') {
    return null;
  }

  return (
    <section>
      <a href={repo} class="outbound" target="_blank"><GitBranch/> {repo}</a>
    </section>
  );
};

const renderCordovaPromotion = (isPremier: string | null) => {
  // Only show one promo message
  if (isPremier !== null) {
    return;
  }

  return (
    <section>
      <h2>Stuck on a Cordova issue?</h2>
      <docs-card class="cordova-ee-card" header="Don't waste precious time on plugin issues." href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native">
        <div>
          <img src="/docs/assets/icons/native-cordova-bot.png" class="cordova-ee-img" />
          <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer premium advisory services for both community plugins and premier plugins.</p>
          <docs-button class="native-ee-detail">Contact Us Today!</docs-button>
        </div>
      </docs-card>
    </section>
  );
};

const renderInstallation = (cordova?: string, npm?: string) => {
  if (typeof cordova === 'undefined' || typeof npm === 'undefined') {
    return null;
  }

  return (
    <section>
      <h2 id="installation">
        <a href="#installation">Installation</a>
      </h2>
      <docs-tabs>
        <docs-tab tab="Capacitor">
          <command-line>
            <command-prompt>{`npm install ${cordova}`}</command-prompt>
            <command-prompt>{`npm install ${npm}`}</command-prompt>
            <command-prompt>{`ionic cap sync`}</command-prompt>
          </command-line>
        </docs-tab>
        <docs-tab tab="Cordova">
          <command-line>
            <command-prompt>{`ionic cordova plugin add ${cordova}`}</command-prompt>
            <command-prompt>{`npm install ${npm}`}</command-prompt>
          </command-line>
        </docs-tab>
        <docs-tab tab="Enterprise">
          <blockquote>Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
            <a class="btn" href="https://ionic.io/docs/premier-plugins">Learn More</a> or if you're interested in an enterprise version of this plugin <a class="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a></blockquote>
        </docs-tab>
      </docs-tabs>
    </section>
  );
};

const renderPlatforms = (platforms: string[] = []) => {
  if (platforms.length === 0) {
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

const renderUsage = (usage: any) => {
  if (!usage) {
    return null;
  }

  return (
    <section>
      <h2 id="usage">
        <a href="#usage">Usage</a>
      </h2>
      <p>
        <h3>React</h3>
        <stencil-route-link url={`/docs/native/community#react`}>See here.</stencil-route-link>
      </p>
      <h3>Angular</h3>
      {toHypertext(h, usage)}
    </section>
  );
};

const renderCapIncompat = (capacitorIncompatible: boolean) => {
  if (!capacitorIncompatible) {
    return null;
  }

  return (
    <section>
      <h2 id="capacitor">
        <a href="#capacitor">Capacitor</a>
      </h2>
      Not compatible
    </section>
  );
};

const renderPremier = (premierSlug: string | null) => {
  if (premierSlug === null) {
    return null;
  }

  return (
    <section>
      <h2 id="premier">
        <a href="#premier">Premier Version Available</a>
      </h2>
      <docs-card
        class="cordova-ee-card"
        header="Plugins and solutions built and supported by Ionic."
        href={`https://ionic.io/docs/premier-plugins/${premierSlug}`}
      >
        <div>
          <img src="/docs/assets/icons/native-enterprise.png" class="cordova-ee-img" />
          <p>Featuring regular release cycles, security and bug fixes, and guaranteed SLAs.</p>
          <docs-button class="native-ee-detail">Available here</docs-button>
        </div>
      </docs-card>
    </section>
  );
};
