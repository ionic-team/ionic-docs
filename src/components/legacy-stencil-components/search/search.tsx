import {
  Component,
  Element,
  Listen,
  Prop,
  State,
  h
} from '@stencil/core';
import 'ionicons';

import { Book, Close, ForwardArrow, Search } from '../../icons';

@Component({
  tag: 'ionic-search',
  styleUrl: 'search.css',
  shadow: false
})
export class IonicSearch {
  @Element() el!: HTMLElement;

  @State() active = false;
  @State() query = '';
  @State() highlightIndex: number | null = null;
  @State() pending = 0;
  @State() results: any[] | null = null;
  @State() nonDocsResults: any[] | null = null;
  @State() nonDocsResultsActive = false;
  @State() dragStyles!: {};
  @State() searchTimeout!: NodeJS.Timeout;
  // @State() pane: HTMLDivElement;

  @Prop() mobile?: boolean;

  dragY: number | null = null;
  startY: number | null = null;
  screenHeight: number | null = null;

  urls: any;
  URLS = () => {
    const api = 'https://api.swiftype.com/api/v1/public/';
    const key = '9oVyaKGPzxoZAyUo9Sm8';

    return {
      autocomplete: (query: string) =>
        `${api}engines/suggest.json?q=${query}&engine_key=${key}`,
      click: (query: string, doc_id: string) =>
        `${api}analytics/pc.json?q=${query}&doc_id=${doc_id}&engine_key=${key}`,
      search: (query: string) => // &per_page=1&page=1
        `${api}engines/search.json?q=${query}&engine_key=${key}`
    };
  }

  constructor() {
    this.urls = this.URLS();
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent) {
    if (
      ev.key === '/' ||
      ev.code === 'Slash' ||
      (ev.metaKey && ev.key === 'k')
    ) {
      this.activate();
    }
  }

  // componentDidLoad() {
  //   this.pane = this.el.parentElement.querySelector('.mobile-nav__pane');
  // }

  activate() {
    if (this.active) {
      return;
    }

    this.active = true;
    this.el.classList.add('active');
    setTimeout(() => {
      this.el.querySelector('input')?.focus();
    }, 220, this);
  }

  close() {
    clearTimeout(this.searchTimeout);
    this.active = false;
    this.el.classList.remove('active');

    const input = this.el.querySelector('input');
    input?.blur();
    setTimeout(() => {
      if (input) {
        input.value = '';
      }
      this.results = this.nonDocsResults = this.highlightIndex = null;
    }, 220, this);
  }

  async onKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.close();
      return;
    }

    // don't search on arrow keypress
    if (['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].indexOf(ev.key) !== -1) {
      return;
    }

    const el = (ev.target as HTMLInputElement);

    if (el.value.length < 3) {
      this.results = this.nonDocsResults = this.highlightIndex = null;
      return;
    }

    this.query = el.value;
    this.pending++;
    const resp = await fetch(this.urls.autocomplete(this.query));
    const res = await resp.json();
    this.pending--;
    this.results = res.records.page.filter(
      (item: any) => item.url.indexOf('\/docs\/') !== -1);
    this.nonDocsResults = res.records.page.filter(
      (item: any) => item.url.indexOf('\/docs\/') === -1);
    this.highlightIndex = null;

    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => this.search(), 1500);
  }

  // Trigger lightweight search after 1.5sec of inactivity
  // but we'll stick with auto-complete results
  async search() {
    await fetch(this.urls.search(this.query));
    // console.log(result);
  }

  touchStart(ev: TouchEvent) {
    this.screenHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    const y = ev.touches?.item(0)?.screenY;
    this.startY = typeof y !== 'undefined' ? Math.round(y) : 0;
  }

  touchMove(ev: TouchEvent) {
    ev.preventDefault();
    const y = ev.touches?.item(0)?.screenY;
    this.dragY = typeof y !== 'undefined' && this.dragY !== null && this.startY !== null && this.screenHeight !== null ? Math.max(0, Math.round(
      (this.dragY - this.startY) / this.screenHeight * 100
    )) : 0;
    this.dragStyles = {
      transitionDuration: '.1s',
      transform: `translate3d(0, ${this.dragY}%, 0)`
    };
    // window.requestAnimationFrame(()=> {
    //   const scale = ((3 * this.dragY / 100) + 97) / 100;
    //   this.pane.style.transform = `scale3d(${scale}, ${scale}, 1)`;
    //   this.pane.style['transition-duration'] = '.1s';
    // });
  }

  isFirefox() {
    return navigator.userAgent.indexOf('Firefox') !== -1;
  }

  touchEnd() {
    if (this.dragY !== null && this.dragY > 30) {
      this.close();
    }
    this.dragY = null;
    this.startY = null;
    this.dragStyles = {};
  }

  keyNavigation(ev: KeyboardEvent) {
    if (!this.results) { return; }

    if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (this.highlightIndex === 0) {
        this.el.querySelector('input')?.focus();
        this.highlightIndex = null;
      } else if (this.highlightIndex !== null && this.highlightIndex > 0) {
        this.highlightIndex--;
      }
    } else if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (this.highlightIndex === null) {
        this.highlightIndex = 0;
      } else if (this.highlightIndex < this.results.length + (this.nonDocsResults ? this.nonDocsResults.length : 0) - 1) {
        this.highlightIndex++;

        if (
          this.highlightIndex >= this.results.length &&
          !this.nonDocsResultsActive
        ) {
          this.nonDocsResultsActive = true;
        }
      }
    } else if (ev.key === 'Enter') {
      const link = this.el.querySelector('ul a.active') as HTMLAnchorElement;
      this.resultClick({ url: link.href, id: link.dataset.id });
    }
  }

  async resultClick(result: any, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    await fetch(this.urls.click(this.query, result.id));
    window.location = result.url;
  }

  getDefaultContent() {
    return (
      <div class="Search__Defaults">
        <div class="Search__Defaults__Section">
          <h4>Getting Started</h4>
          <ul>
            <li><a href="/docs/intro/cli"><Book/><strong>Installation Guide</strong> | Installation</a></li>
            <li><a href="/docs/developing/previewing"><Book/><strong>Running an App</strong> | Building</a></li>
            <li><a href="/docs/layout/structure"><Book/><strong>App Structure</strong> | Layout</a></li>
            <li><a href="/docs/theming/basics"><Book/><strong>Theming Basics</strong> | Theming</a></li>
          </ul>
        </div>
        <div class="Search__Defaults__Section">
          <h4>Common topics</h4>
          <ul>
            <li><a href="/docs/angular/testing"><Book/><strong>Testing</strong> | Building</a></li>
            <li><a href="/docs/core-concepts/cross-platform#storage"><Book/><strong>Storage</strong> | Building</a></li>
            <li><a href="/docs/lifecycle/angular"><Book/><strong>Life Cycle Events</strong> | Angular</a></li>
            <li><a href="/docs/navigation/angular"><Book/><strong>Navigation</strong> | Angular</a></li>
          </ul>
        </div>
        <div class="Search__Defaults__Section">
          <h4>UI Components</h4>
          <ul>
            <li><a href="/docs/api/button"><Book/><strong>ion-button</strong> | Buttons</a></li>
            <li><a href="/docs/api/card"><Book/><strong>ion-card</strong> | Cards</a></li>
            <li><a href="/docs/api/loading"><Book/><strong>ion-loading</strong> | Progress Indicators</a></li>
            <li><a href="/docs/api/tabs"><Book/><strong>ion-tabs</strong> | Tabs</a></li>
          </ul>
        </div>
        <div class="Search__Defaults__Section">
          <h4>Native</h4>
          <ul>
            <li><a href="https://ionic.io/docs/premier-plugins/camera"><Book/><strong>Camera</strong> | Native EE</a></li>
            <li><a href="https://ionic.io/docs/identity-vault"><Book/><strong>Identity Vault</strong> | Native EE</a></li>
            <li><a href="/docs/native/firebase"><Book/><strong>Firebase</strong> | Native CE</a></li>
            <li><a href="/docs/native/barcode-scanner"><Book/><strong>Barcode Scanner</strong> | Native CE</a></li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return [
      <div
        class={`search-box${this.active ? ' active' : ''}`}
        style={this.dragStyles}
        onTouchMove={e => this.results && this.results.length > 5 ?
        null : e.preventDefault()}
        onKeyDown={ev => this.keyNavigation(ev)}
      >
        <input type="text" onKeyUp={ev => this.onKeyUp(ev)} placeholder="Search Ionic.."/>

        <Search class={`search-static ${this.active ? ' active' : ''}`}/>

        {this.mobile && !this.isFirefox() ?
          <div
            class="mobile-close"
            onClick={() => this.close()}
            onTouchStart={ev => this.touchStart(ev)}
            onTouchMove={ev => this.touchMove(ev)}
            onTouchEnd={() => this.touchEnd()}
          >
            <Close/>
          </div>
          :
          <ion-icon
            class={`close ${this.active ? ' active' : ''}`}
            name="close"
            onClick={() => this.close()}
          />
        }

        <div class={`slot ${this.results === null ? '' : 'hidden'}`}>
          {this.getDefaultContent()}
        </div>

        {this.results !== null ?
          <div class="SearchResults">
            <ul>
              {this.results.map((result, i) =>
                <li>
                  <a
                    onClick={ev => this.resultClick(result, ev)}
                    href={result.url}
                    title={result.title}
                    data-id={result.id}
                    class={i === this.highlightIndex ? 'active' : ''}
                  >
                    <Book/>
                    <strong>{result.title}</strong>
                    <span innerHTML={result.highlight.sections}></span>
                  </a>
                </li>
              )}
              {this.results.length === 0 ?
                <li><span class="no-results">No results</span></li>
              : null}
            </ul>

            <div class={`SearchMore ${this.nonDocsResultsActive ? 'active' : ''}`}>
              {this.nonDocsResults && this.nonDocsResults.length !== 0 ? [
                <a
                  class="SearchMore__link"
                  onClick={() => this.nonDocsResultsActive = !this.nonDocsResultsActive}
                >
                  {this.nonDocsResults.length} Results outside docs <ForwardArrow/>
                </a>,
                <ul class="SearchMore__list">
                  {this.nonDocsResults.map((result, i) =>
                    <li>
                      <a
                        onClick={ev => this.resultClick(result, ev)}
                        href={result.url}
                        title={result.title}
                        data-id={result.id}
                        class={i + this.results!.length === this.highlightIndex ? 'active' : ''}
                      >
                        <strong>{result.title}</strong>
                        <span innerHTML={result.highlight.sections}></span>
                      </a>
                    </li>
                  )}
                </ul>
              ] : null}
            </div>
          </div>
        : null}

        {this.pending > 0 ? <span class="searching"></span> : null}
      </div>,

      <div class={`SearchBtn ${this.active ? ' active' : ''}`}>
        <Search
          class="SearchBtn__sm"
          onClick={this.active ? null : () => this.activate()}
        />

        <div class="SearchBtn__lg" onClick={() => this.activate()}>
          <Search class="SearchBtn__lg__icon"/>
          <span class="SearchBtn__lg__text">Search docs</span>
          <span class="SearchBtn__lg__key">/</span>
        </div>
      </div>,

      <div
        class={`backdrop ${this.active ? 'active' : null}`}
        onClick={() => this.close()}
      />
    ];
  }
}
