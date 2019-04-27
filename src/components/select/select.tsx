import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'docs-select',
  styleUrl: 'select.css'
})
export class DocsSelect {
  private dropdown;

  @State() selected: string;
  @Prop() options: string[];
  @Prop() onSelect: (option: string) => any;
  @Prop() initializer: (options: string[]) => string;
  @Prop() optionRenderer: (option: string) => any = (option: string) => option;

  select = (option: string) => {
    this.selected = option;
  }

  @Watch('selected')
  handleSelect(option: string, prev: string) {
    if (typeof this.onSelect === 'function' && prev != null) {
      this.onSelect(option);
    }
  }

  private toOption = (option: string) => {
    const isSelected = this.selected === option;
    const classNames = {
      'Select-option': true,
      'Select-option--selected': isSelected
    };

    const handleClick = () => {
      this.select(option);
      this.dropdown.close();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.select(option);
        this.dropdown.focus();
      }
    };

    return (
      <div
        class={classNames}
        role="menuitemradio"
        aria-checked={isSelected ? 'true' : 'false'}
        tabindex="0"
        onClick={handleClick}
        onKeyUp={handleKeyUp}>
          {this.optionRenderer(option)}
      </div>
    );
  }

  componentWillLoad() {
    this.selected = typeof this.initializer === 'function'
      ? this.initializer(this.options)
      : this.options[0];
  }

  hostData() {
    return {
      class: {
        'Select': true
      }
    };
  }

  render() {
    return (
      <docs-dropdown
        ref={el => { this.dropdown = el; }}
        label={this.optionRenderer(this.selected)}>
          {this.options.map(this.toOption)}
      </docs-dropdown>
    );
  }
}
