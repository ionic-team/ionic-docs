import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'contributor-list',
  styleUrl: 'contributor-list.css'
})
export class ContributorList {
  @Prop() contributors: string[];

  render() {
    if (!this.contributors || this.contributors.length === 0) {
      return;
    }

    return (
      <section>
        <h5>Contributors</h5>
        <div>
          {this.contributors.map(contributor => (
            <a href={`https://github.com/${contributor}`}>
              <span class="img-wrapper">
                <img
                  src={`https://github.com/${contributor}.png?size=90`}
                  title={`Contributor ${contributor}`}
                />
              </span>
              <span class="username">{contributor}</span>
            </a>
          ))}
        </div>
      </section>
    );
  }
}
