import { Component, Prop } from '@stencil/core';
import { Link } from '../../definitions';

@Component({
  tag: 'docs-table-of-contents',
  styleUrl: 'table-of-contents.css'
})
export class DocsTableOfContents {
  @Prop() links: Link[] = [];
  @Prop() label = 'Contents';
  @Prop() basepath = '';

  toItem = ({ text, href }: Link) => (
    <stencil-route-link url={`${this.basepath}${href}`}>{text}</stencil-route-link>
  )

  render() {
    if (!this.links || this.links.length < 1) {
      return null;
    }

    return [
      <strong>{ this.label }</strong>,
      <nav>{ this.links.map(this.toItem) }</nav>
    ];
  }
}
