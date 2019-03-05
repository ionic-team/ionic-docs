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

    console.log(this.basepath);
    const path = this.basepath.replace('/docs', '');
    console.log(path);

    return (
      <section>
        <h5>Contributors</h5>
        <div>
          {this.contributors.map(contributor => (
            <a target="_blank" href={`https://github.com/${contributor}`}>
              <span class="img-wrapper">
                <img
                  src={`https://github.com/${contributor}.png?size=90`}
                  title={`Contributor ${contributor}`}
                />
              </span>
              <span class="username">{contributor}</span>
            </a>
          ))}
          <a target="_blank" href={`https://github.com/ionic-team/ionic-docs/edit/master/src/pages${path}.md`}>
            <span class="img-wrapper">
              <img
                src="/docs/assets/img/avatar.svg"
                title="Become a Contributor"
              />
            </span>
            <span class="username">You?</span>
          </a>
        </div>
      </section>
    );
  }
}
