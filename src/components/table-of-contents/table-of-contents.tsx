import { Component, Listen, Prop, State, Watch, h } from '@stencil/core';

import { Link } from '../../definitions';

interface ItemOffset {
  id: string;
  topOffset: number;
}

@Component({
  tag: 'docs-table-of-contents',
  styleUrl: 'table-of-contents.css'
})
export class DocsTableOfContents {
  @Prop() links: Link[] = [];
  @Prop() label = 'Contents';
  @Prop() basepath = '';
  @State() itemOffsets: ItemOffset[] = [];
  @State() selectedId: string | null = null;
  @State() pageWidth = document.body.offsetWidth;

  @Listen('scroll', { target: 'window', passive: true })
  function() {
    if (this.pageWidth < 1234) { return; }
    requestAnimationFrame(() => {
      const itemIndex = this.itemOffsets.findIndex(item => item.topOffset > window.scrollY);
      if (
        itemIndex === 0 ||
        // tslint:disable-next-line
        this.itemOffsets[this.itemOffsets.length - 1] === undefined
      ) {
        this.selectedId = null;
      } else if (itemIndex === -1) {
        this.selectedId = this.itemOffsets[this.itemOffsets.length - 1].id;
      } else {
        this.selectedId = this.itemOffsets[itemIndex - 1].id;
      }
    });
  }

  @Watch('links')
  @Listen('resize', { target: 'window' })
  updateItemOffsets() {
    requestAnimationFrame(() => {
      this.pageWidth = document.body.offsetWidth;
      this.itemOffsets = this.links.map(link => {
        const item = document.getElementById(link.href.substring(1))!;
        return {
          id: link.href,
          topOffset: item.getBoundingClientRect().top + window.scrollY
        };
      });
    });
  }

  componentDidLoad() {
    this.updateItemOffsets();
  }

  toItem = ({ text, href }: Link) => {
    return (
    <li>
      <stencil-route-link
        url={`${this.basepath}${href}`}
        class={`Nav-link ${this.selectedId === href ? 'selected' : ''}`}
      >
        {text}
      </stencil-route-link>
    </li>
  ); }

  render() {
    if (this.links.length < 1) {
      return null;
    }

    return [
      <strong class="Nav-header">{this.label}</strong>,
      <nav>
        <ul class="Nav-subnav">{this.links.map(this.toItem)}</ul>
      </nav>
    ];
  }
}
