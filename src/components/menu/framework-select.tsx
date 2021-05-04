import { Component, Element, Prop, h } from '@stencil/core';

import { Angular, JavaScript, React, Vue } from '../../icons';
import { useLocalStorage } from '../../local-storage';

@Component({
  tag: 'framework-select'
})
export class DocsMenu {
  @Prop() toggleClickFn?: (e: Event) => void;
  @Element() el!: HTMLElement;

  getFramework: () => string | null;
  setFramework: (framework: string) => void;

  frameworks = [
    'React',
    'Angular',
    'JavaScript',
    'Vue'
  ];

  frameworkIcons: any = {
    Angular,
    JavaScript,
    React,
    Vue
  };

  constructor() {
    const [
      getFramework,
      setFramework
    ] = useLocalStorage('ionic-docs:framework', this.frameworks[0]);
    this.getFramework = getFramework;
    this.setFramework = setFramework;
  }

  componentDidLoad() {
    const selected: NodeListOf<HTMLElement> = this.el.querySelectorAll('.Select-option--selected');
    selected.forEach(menuItem => {
      if (this.getFramework() !== menuItem.innerText) {
        menuItem.classList.remove('Select-option--selected');
      }
    });
  }

  renderOption = (framework: string | null) => {
    const Icon = framework !== null ? this.frameworkIcons[framework] : null;
    return (
      <div class="FrameworkSelect-framework">
        <Icon class="FrameworkSelect-icon"/>
        <span>{framework}</span>
      </div>
    );
  }

  render() {
    return (
      <docs-select
        class="FrameworkSelect"
        options={this.frameworks}
        optionRenderer={this.renderOption}
        initializer={this.getFramework}
        onSelection={ev => this.setFramework(ev.detail)}
      />
    );
  }
}
