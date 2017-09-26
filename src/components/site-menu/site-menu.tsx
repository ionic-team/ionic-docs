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
        <h2 class="title">Ionic Pro Docs</h2>
        <nav>
          <ul class="nested-menu">
            <li class="active">
              <ul>
                <li>
                  <a class="pro-intro-link">Introduction</a>
                  <ul>
                    <li>
                      <stencil-route-link url="/pro/basics/welcome/">Welcome</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/basics/getting-started/">Installation</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/basics/git/">Git Workflow</stencil-route-link>
                      <ul>
                        <li>
                          <stencil-route-link url="/pro/basics/git/#installing-git">Installing Git</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/basics/git/#adding-your-existing-repository">Adding Existing Repositories</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/basics/git/#pushing-new-builds">Pushing Builds</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/basics/git/#working-with-branches">Using Branches</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/basics/git/#working-with-other-team-members">Working w/ Team Members</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/basics/git/#ssh-keys">Adding SSH Keys</stencil-route-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/basics/concepts/">Concepts</stencil-route-link>
                      <ul>
                        <li><stencil-route-link url="/pro/basics/concepts/#channels">Channels</stencil-route-link></li>
                        <li><stencil-route-link url="/pro/basics/concepts/#builds">Builds</stencil-route-link></li>
                        <li><stencil-route-link url="/pro/basics/concepts/customizing-builds.html">Customizing Builds</stencil-route-link></li>
                      </ul>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/basics/help/">Help and Support</stencil-route-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-view-link">View</a>
                  <ul>
                    <li>
                      <stencil-route-link url="/pro/view/">Introduction</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/view/#using-channels-with-ionic-view">Using Channels</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/view/#sharing">Inviting Testers</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/view/#sharing">Sharing Publicly</stencil-route-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-deploy-link">Deploy</a>
                  <ul>
                    <li>
                      <stencil-route-link url="/pro/deploy/">Introduction</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/deploy/setup/#installation">Installation</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/deploy/setup/#usage">Deploying</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/deploy/plugin-api.html">Plugin API</stencil-route-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-package-link">Package</a>
                  <ul>
                    <li>
                      <stencil-route-link url="/pro/package/">Introduction</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/package/profiles.html">Generating Credentials</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/package/profiles.html#creating-security-profiles">Adding Credentials</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/package/index.html#performing-a-build">Performing Builds</stencil-route-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-monitoring-link">Monitoring</a>
                  <ul>
                    <li>
                      <stencil-route-link url="/pro/monitoring/">Introduction</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/monitoring/#getting-started">Installation</stencil-route-link>
                    </li>
                    <li>
                      <stencil-route-link url="/pro/monitoring/#source-maps">Adding SourceMaps</stencil-route-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="pro-advanced-link">Advanced</a>
                  <ul>
                    <li>
                      <stencil-route-link url="/pro/migration/">Cloud Migration</stencil-route-link>
                      <ul>
                        <li>
                          <stencil-route-link url="/pro/migration/live-deploy.html">Live updates</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/migration/package.html">Package</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/migration/view.html">Ionic View Legacy</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/migration/push.html">Ionic Push</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/pro/migration/auth.html">Ionic Auth</stencil-route-link>
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
