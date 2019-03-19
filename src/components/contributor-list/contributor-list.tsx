import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'contributor-list',
  styleUrl: 'contributor-list.css'
})
export class ContributorList {
  @Prop() contributors: string[] = [];

  render() {
    if (this.contributors.length === 0) {
      return null;
    }

    return (
      <ul>
        {this.contributors.reverse().map(contributor => (
          <li>
            <a target="_blank" href={`https://github.com/${contributor}`}>
              <img src={`https://github.com/${contributor}.png?size=90`} title={`Contributor ${contributor}`}/>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
