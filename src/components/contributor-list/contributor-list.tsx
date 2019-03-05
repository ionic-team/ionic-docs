import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'contributor-list',
  styleUrl: 'contributor-list.css'
})
export class ContributorList {
  @Prop() basepath: string;

  @Prop() contributors: string[];

  render() {
    if (!this.contributors || this.contributors.length === 0) {
      return;
    }

    const path = this.basepath.replace('/docs', '');

    return (
      <section>
        <h5>Contributors</h5>
        <div>
          {this.contributors.map((contributor, index) => (
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
          <a class="contribute" target="_blank" href={`https://github.com/ionic-team/ionic-docs/edit/master/src/pages${path}.md`}>
            <span>Contribute</span>
            <ion-icon name="ios-arrow-forward"></ion-icon>
          </a>
        </div>
      </section>
    );
  }
}
