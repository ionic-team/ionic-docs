import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'contributor-list',
  styleUrl: 'contributor-list.css'
})
export class ContributorList {
  @Prop() path: string;

  @Prop() contributors: string[];

  renderContributors() {
    const contributors = this.contributors;

    if (!contributors || contributors.length === 0) {
      return;
    }

    return (
      <span class="contributors">
      { this.contributors.map((contributor, index) => (
        <a
          target="_blank"
          href={`https://github.com/${contributor}`}
          style={{ 'z-index': `calc(1000 - ${index})` }}>
          <span class="img-wrapper">
            <img
              src={`https://github.com/${contributor}.png?size=90`}
              title={`Contributor ${contributor}`}
            />
          </span>
        </a>
      ))}
     </span>
    );
  }

  render() {
    return (
      <section>
        <h5>Contributors</h5>
        <div>
          { this.renderContributors() }
          <a class="contribute-button" target="_blank" href={`https://github.com/ionic-team/ionic-docs/edit/master/src/pages${this.path}.md`}>
            <span>Contribute</span>
            <ion-icon name="ios-arrow-forward"></ion-icon>
          </a>
        </div>
      </section>
    );
  }
}
