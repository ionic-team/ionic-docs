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
  @State() selectedId: string = null;

  @Listen('scroll', { target: 'window', passive: true })
  function() {
    this.debounce(() => {
      requestAnimationFrame(() => {
        const itemIndex = this.itemOffsets.findIndex(item => item.topOffset > window.scrollY);
        if (
          itemIndex === 0 ||
          this.itemOffsets[this.itemOffsets.length - 1] === undefined
        ) {
          this.selectedId = null;
        } else if (itemIndex === -1) {
          this.selectedId = this.itemOffsets[this.itemOffsets.length - 1].id;
        } else {
          this.selectedId = this.itemOffsets[itemIndex - 1].id;
        }
      });
    }, 500);
  }

  @Watch('links')
  @Listen('resize', { target: 'window' })
  updateItemOffsets() {
    requestAnimationFrame(() => {
      this.itemOffsets = this.links.map(link => {
        const item = document.getElementById(link.href.substring(1));
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

  debounce = (fn, time) => {
    let timeout;

    return function() {
      const functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }

  toItem = ({ text, href }: Link) => {
    // console.log(href);
    return (
    <li>
      <stencil-route-link
        url={`${this.basepath}${href}`}
        class={`Nav-link ${this.selectedId === href ? 'selected' : ''}`}>

        {text}
      </stencil-route-link>
    </li>
  ); }

  render() {
    if (!this.links || this.links.length < 1) {
      return null;
    }

    return [
      <strong class="Nav-header">{ this.label }</strong>,
      <nav>
        <ul class="Nav-subnav">{ this.links.map(this.toItem) }</ul>
      </nav>
    ];
  }
}
