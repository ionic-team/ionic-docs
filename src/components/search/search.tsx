import { Component, State } from '@stencil/core';

@Component({
  tag: 'docs-search',
  styleUrl: 'search.css'
})
export class DocsSearch {
  @State() focused = false;
  @State() value = '';

  handleFocus = ({ type }: Event) => {
    this.focused = type === 'focus';
  }

  handleInput = (event) => {
    this.value = event.target.value;
  }

  clear = () => {
    this.value = '';
  }

  hostData() {
    return {
      class: { 'is-focused': this.focused }
    };
  }

  render() {
    return [
      <SearchIcon/>,
      <input
        class="Search-field"
        type="text"
        placeholder="Search Docs"
        spellcheck="false"
        autocomplete="false"
        onInput={this.handleInput}
        onFocus={this.handleFocus}
        onBlur={this.handleFocus}
        value={this.value}
      />,
      this.value ? <CloseIcon onClick={this.clear}/> : null
    ];
  }
}

const SearchIcon = () => (
  <svg class="Search-icon" viewBox="0 0 512 512">
    <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"/>
  </svg>
);

const CloseIcon = ({ onClick }) => (
  <svg class="Search-close" onClick={onClick} viewBox="0 0 512 512">
    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"/>
  </svg>
);
