import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'tab-group',
  styleUrl: 'tab-group.scss'
})
export class TabGroup {
  @Prop() tabs: string;
  @Prop() initial: string;
  @State() selected: string;

  private tabList: string[];

  componentWillLoad() {
    if (this.tabs && this.tabs.trim().length) {
      this.tabList = this.tabs.split(/[^\w-]+/);
      this.selected = this.tabList.indexOf(this.initial) >= 0
        ? this.initial
        : this.tabList[0];
    }
  }

  selectTab(tabName: string) {
    this.selected = tabName;
  }

  toTabLink = (tabName: string) => {
    return (
      <a
        onClick={() => this.selectTab(tabName)}
        class={{
          'tab-link': true,
          'is-selected': this.selected === tabName
        }}>
          {tabName}
      </a>
    );
  }

  toTabSlot = (tabName: string) => {
    return (
      <div
        class={{
        'tab': true,
        'is-selected': this.selected === tabName
        }}>
          <slot name={tabName}/>
      </div>
    );
  }

  render() {
    if (!this.tabList) {
      return <slot/>;
    }

    return [
      <header>
        {this.tabList.map(this.toTabLink)}
      </header>,
      ...this.tabList.map(this.toTabSlot)
    ];
  }
}
