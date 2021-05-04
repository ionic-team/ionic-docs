import { Component, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'docs-select',
  styleUrl: 'select.css'
})
export class DocsSelect {
  private dropdown!: any;

  @State() selected!: string | null;
  @Prop({ mutable: true }) options!: string[];
  @Prop() initializer!: (options: string[]) => string | null;
  @Prop() optionRenderer: (option: string | null) => any = (option: string | null) => option;

  select = (option: string) => {
    this.selected = option;
  }

  @Event() selection!: EventEmitter<string>;

  @Watch('selected')
  handleSelect(option: string) {
    this.selection.emit(option);
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
        onKeyUp={handleKeyUp}
      >
        {this.optionRenderer(option)}
      </div>
    );
  }

  componentWillLoad() {
    this.selected = this.initializer(this.options);
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
        label={this.optionRenderer(this.selected)}
      >
        {this.options.map(this.toOption)}
      </docs-dropdown>
    );
  }
}
