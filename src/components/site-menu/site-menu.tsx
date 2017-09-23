import { Component } from '@stencil/core';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {
  render() {
    return (
      <div class="menu-wrapper">
        <stencil-route-link url="/" class="logo-link">
          <img class="logo" alt="Ionic" src="/assets/img/text-logo.png" />
        </stencil-route-link>
        <nav>
          <ul class="nested-menu">
            <li class="active">
              <ul>
                <li>
                  <a class="pro-intro-link">Introduction</a>
                  <ul>
                    <li>
                      <a href="/docs/pro/basics/welcome/" class="{% if page.id == 'pro-welcome' %}active{% endif %}">Welcome</a>
                    </li>
                    <li>
                      <a href="/docs/pro/basics/getting-started/" class="{% if page.id == 'pro-getting-started' %}active{% endif %}">Installation</a>
                    </li>
                    <li>
                      <a href="/docs/pro/basics/git/" class="{% if page.id == 'pro-git' %}active{% endif %}">Git Workflow</a>
                      <ul>
                        <li>
                          <a href="/docs/pro/basics/git/#installing-git">Installing Git</a>
                        </li>
                        <li>
                          <a href="/docs/pro/basics/git/#adding-your-existing-repository">Adding Existing Repositories</a>
                        </li>
                        <li>
                          <a href="/docs/pro/basics/git/#pushing-new-builds">Pushing Builds</a>
                        </li>
                        <li>
                          <a href="/docs/pro/basics/git/#working-with-branches">Using Branches</a>
                        </li>
                        <li>
                          <a href="/docs/pro/basics/git/#working-with-other-team-members">Working w/ Team Members</a>
                        </li>
                        <li>
                          <a href="/docs/pro/basics/git/#ssh-keys">Adding SSH Keys</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/docs/pro/basics/concepts/" class="{% if page.id == 'pro-concepts' %}active{% endif %}">Concepts</a>
                      <ul>
                        <li><a href="/docs/pro/basics/concepts/#channels">Channels</a></li>
                        <li><a href="/docs/pro/basics/concepts/#builds">Builds</a></li>
                        <li><a href="/docs/pro/basics/concepts/customizing-builds.html">Customizing Builds</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/docs/pro/basics/help/" class="{% if page.id == 'pro-help' %}active{% endif %}">Help and Support</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-view-link">View</a>
                  <ul>
                    <li>
                      <a href="/docs/pro/view/">Introduction</a>
                    </li>
                    <li>
                      <a href="/docs/pro/view/#using-channels-with-ionic-view">Using Channels</a>
                    </li>
                    <li>
                      <a href="/docs/pro/view/#sharing">Inviting Testers</a>
                    </li>
                    <li>
                      <a href="/docs/pro/view/#sharing">Sharing Publicly</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-deploy-link">Deploy</a>
                  <ul>
                    <li>
                      <a href="/docs/pro/deploy/">Introduction</a>
                    </li>
                    <li>
                      <a href="/docs/pro/deploy/setup/#installation">Installation</a>
                    </li>
                    <li>
                      <a href="/docs/pro/deploy/setup/#usage">Deploying</a>
                    </li>
                    <li>
                      <a href="/docs/pro/deploy/plugin-api.html">Plugin API</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-package-link">Package</a>
                  <ul>
                    <li>
                      <a href="/docs/pro/package/">Introduction</a>
                    </li>
                    <li>
                      <a href="/docs/pro/package/profiles.html">Generating Credentials</a>
                    </li>
                    <li>
                      <a href="/docs/pro/package/profiles.html#creating-security-profiles">Adding Credentials</a>
                    </li>
                    <li>
                      <a href="/docs/pro/package/index.html#performing-a-build">Performing Builds</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-monitoring-link">Monitoring</a>
                  <ul>
                    <li>
                      <a href="/docs/pro/monitoring/">Introduction</a>
                    </li>
                    <li>
                      <a href="/docs/pro/monitoring/#getting-started">Installation</a>
                    </li>
                    <li>
                      <a href="/docs/pro/monitoring/#source-maps">Adding SourceMaps</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-advanced-link">Advanced</a>
                  <ul>
                    <li>
                      <a href="/docs/pro/migration/">Cloud Migration</a>
                      <ul>
                        <li>
                          <a href="/docs/pro/migration/live-deploy.html">Live updates</a>
                        </li>
                        <li>
                          <a href="/docs/pro/migration/package.html">Package</a>
                        </li>
                        <li>
                          <a href="/docs/pro/migration/view.html">Ionic View Legacy</a>
                        </li>
                        <li>
                          <a href="/docs/pro/migration/push.html">Ionic Push</a>
                        </li>
                        <li>
                          <a href="/docs/pro/migration/auth.html">Ionic Auth</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
