// import 'ionicons';
// import { Close } from './arrow.svg';

import {
  Component,
  Element,
  Prop,
  State
} from '@stencil/core';

@Component({
  tag: 'ionic-search',
  styleUrl: 'ionic-search.scss',
  shadow: false
})
export class IonicSearch {

  @State() active = false;
  @State() query = '';
  @State() pending = 0;
  @State() results: any = null;
  @State() dragStyles: {};
  @State() selectedIndex = -1;
  @State() focused = false;
  @State() contentEl: HTMLElement;
  @Prop() mobile: boolean;
  @Element() el;

  dragY: number = null;
  startY: number = null;
  screenHeight: number = null;

  urls: any;
  URLS = () => {
    const api = 'https://api.swiftype.com/api/v1/public/engines/';
    const key = '9oVyaKGPzxoZAyUo9Sm8';

    return {
      autocomplete: query =>
        `${api}suggest.json?q=${query}&engine_key=${key}`,
      search: query =>
        `${api}search.json?q=${query}&engine_key=${key}`
    };
  }

  constructor() {
    this.close = this.close.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.focus = this.focus.bind(this);

    this.urls = this.URLS();
  }

  close() {
    this.active = false;
    this.query = '';
    this.focused = false;
    this.selectedIndex = -1;
    this.el.querySelector('input').value = '';
    this.el.classList.remove('active');
    this.el.querySelector('input').blur();
    setTimeout(() => {
      this.results = null;
    }, 500, this);
  }

  async onKeyDown(e) {
    // exit search on escape key
    if (e.keyCode === 27) {
      this.close();
      return;
    }

    // up and down arrows to go through search results
    if (e.keyCode === 38 && this.selectedIndex > 0) {
      this.selectedIndex--;
      e.preventDefault();
      return;
    }

    if (
        e.keyCode === 40 &&
        this.selectedIndex <
          this.results.beta.length + this.results.main.length - 1
      ) {
      this.selectedIndex++;
      e.preventDefault();
      return;
    }

    // follow link on enter key
    if (e.keyCode === 13) {
      const selector = `li a[data-index="${this.selectedIndex}"]`;
      const link = this.el.querySelector(selector);
      if (link) {
        link.click();
      }
      return;
    }

    // no special keys pressed, conduct search
    const query = this.query = e.target.value;

    if (e.target.value.length < 3) {
      this.results = null;
      return;
    }
    this.pending++;
    const resp = await fetch(this.urls.autocomplete(query));
    const res = await resp.json();
    this.pending--;
    this.results = res.records.page.reduce((groups, item) => {
      // sort in to beta links and ionicframework.com links
      if (!groups.beta) {
        groups = { beta: [], main: [] };
      }
      if (item.url.indexOf('beta.ionicframework.com') !== -1) {
        groups.beta.push(item);
      } else {
        groups.main.push(item);
      }
      return groups;
    });
  }

  focus() {
    const input = document.getElementById('search-input');
    if (input) {
      input.focus();
    }
  }

  getBoxClass() {
    let str = 'search-box';
    str += this.query.length > 3 ? ' active' : '';
    str += this.focused ? ' focused' : '';
    return str;
  }

  printResults(group, index = 0) {
    return group.map((result, i) =>
      <li class="result">
        <a href={result.url}
           title={result.title}
           class={this.selectedIndex === i + index ? 'selected' : ''}
           data-index={i + index}
           onMouseOver={() => { this.selectedIndex = i + index ; }}>
          <strong>{result.title}</strong>
          <small innerHTML={result.highlight.sections}></small>
        </a>
      </li>
    );
  }

  render() {
    return [
      <div class={this.getBoxClass()}
           style={this.dragStyles}>
        <input type="text"
               id="search-input"
               onKeyUp={this.onKeyDown}
               onFocus={() => {this.focused = true; }}
              //  onBlur={() => {this.focused = false; }}
               placeholder="Search Ionic.."/>

        <ion-icon class={`search-static ${this.active ? ' active' : ''}`}
                  name="md-search"></ion-icon>

        <ion-icon class={`close ${this.query.length ? ' active' : ''}`}
                  name="close-circle"
                  onClick={this.close}></ion-icon>

        {this.results !== null ? <ul>
          {this.results.beta.length ?
            <li class="title">beta.ionicframework.com</li>
           : null }
          {this.printResults(this.results.beta)}

          {this.results.main.length ?
            <li class="title">ionicframework.com</li>
           : null }
          {this.printResults(this.results.main, this.results.beta.length)}

          {this.results.length === 0 ?
            <li><span class="no-results">No results</span></li>
          : null}
        </ul> : null}

        {this.pending > 0 ? <span class="searching"></span> : null}
      </div>,


      <ion-icon class={`search-mobile-toggle ${this.focused ? ' focused' : ''}`}
                onClick={this.focus}
                name="md-search"></ion-icon>,
      <div class={`scroll-block ${this.focused ? ' focused' : ''}`}
           onClick={this.close}></div>
    ];
  }
}
