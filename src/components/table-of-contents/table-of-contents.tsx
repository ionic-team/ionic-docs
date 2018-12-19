import { Component, Prop } from '@stencil/core';
import { Link } from '../../definitions';

@Component({
  tag: 'docs-table-of-contents',
  styleUrl: 'table-of-contents.css'
})
export class DocsTableOfContents {
  @Prop() links: Link[] = [];
  @Prop() label = 'Contents';

  render() {
    if (this.links.length < 1) {
      return null;
    }

    return [
      <strong>{ this.label }</strong>,
      <nav>
        {this.links.map(link => (
          <a href={link.href}>{link.text}</a>
        ))}
      </nav>
    ];
  }
}
