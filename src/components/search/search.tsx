import { Component, State } from '@stencil/core';
import { Close, Search } from '../../icons';

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
      <Search class="Search-icon"/>,
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
      this.value ? <Close class="Search-close" onClick={this.clear}/> : null
    ];
  }
}
