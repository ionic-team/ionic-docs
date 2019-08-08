import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'contributor-list',
  styleUrl: 'contributor-list.css'
})
export class ContributorList {
  @Prop() contributors: string[] = [];
  @Prop() link = (contributor: string) => `https://github.com/${contributor}`;

  render() {
    if (this.contributors.length === 0) {
      return null;
    }

    return (
      <ul>
        {this.contributors.reverse().map(contributor => (
          <li>
            <a target="_blank" href={this.link(contributor)}>
              <img width="40" height="40" src={`https://github.com/${contributor}.png?size=90`} title={`Contributor ${contributor}`} loading="lazy" importance="low"/>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
