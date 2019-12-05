import { Component, Element, Prop, h } from '@stencil/core';
import { Angular, JavaScript, React, Vue } from '../../icons';
import { useLocalStorage } from '../../local-storage';

@Component({
  tag: 'framework-select'
})
export class DocsMenu {
  @Prop() onToggleClick: (e: Event) => void;
  @Element() el;

  getFramework: () => string;
  setFramework: (framework: string) => void;

  frameworks = [
    'React',
    'Angular',
    'JavaScript',
    'Vue'
  ];

  frameworkIcons = {
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
    this.el.querySelectorAll('.Select-option--selected').forEach(menuItem => {
      if (this.getFramework() !== menuItem.innerText) {
        menuItem.classList.remove('Select-option--selected');
      }
    });
  }

  renderOption = (framework: string) => {
    const Icon = this.frameworkIcons[framework];
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
        onSelection={(ev) => this.setFramework(ev.detail)}/>
    );
  }
}
