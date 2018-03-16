import { Component, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.css'
})
export class CardLink {

  @Element() el: Element;

  @Prop() title: string;
  @Prop() url: string;
  @Prop() hasIcon = false;

  @Watch('title')
  updateTitle(newTitle: string, oldTitle: string) {
    if (!newTitle) {
      return;
    }

    if (oldTitle) {
      this.el.classList.remove(
        'card-' + oldTitle.toLocaleLowerCase().replace(' ', '-')
      );
    }
    this.el.classList.add(
      'card-' + newTitle.toLocaleLowerCase().replace(' ', '-')
    );

  }

  @Watch('hasIcon')
  updateHasIcon(newHasIcon: boolean) {
    if (newHasIcon) {
      this.el.classList.add('hasIcon');
      return;
    }
    this.el.classList.remove('hasIcon');
  }

  componentWillLoad() {
    this.updateHasIcon(
      this.el.attributes.getNamedItem('hasIcon').value ? true : false
    );

    this.updateTitle(this.el.attributes.getNamedItem('title').value, null);
  }

  render() {
    return <stencil-route-link url={this.url} title={this.title}>
      {this.title && <strong>{this.title}</strong>}
      <span><slot/></span>
    </stencil-route-link>;
  }
}
