import 'ionicons';
import { Book, Close, ForwardArrow, Search } from '../../icons';

import {
  Component,
  Element,
  Listen,
  Prop,
  State,
  h
} from '@stencil/core';

@Component({
  tag: 'ionic-search',
  styleUrl: 'search.css',
  shadow: false
})
export class IonicSearch {

  @State() active = false;
  @State() query = '';
  @State() higlightIndex: number = null;
  @State() pending = 0;
  @State() results: any[] = null;
  @State() nonDocsResults: any[] = null;
  @State() nonDocsResultsActive = false;
  @State() dragStyles: {};
  @State() searchTimeout: NodeJS.Timeout = null;
  // @State() pane: HTMLDivElement;
  @Prop() mobile: boolean;
  @Element() el;

  dragY: number = null;
  startY: number = null;
  screenHeight: number = null;

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
    this.activate = this.activate.bind(this);
    this.close = this.close.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.keyNavigation = this.keyNavigation.bind(this);
    this.resultClick = this.resultClick.bind(this);
    this.search = this.search.bind(this);

    this.urls = this.URLS();
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev) {
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
    this.active = true;
    this.el.classList.add('active');
    setTimeout(() => {
      this.el.querySelector('input').focus();
    }, 220, this);
  }

  close() {
    clearTimeout(this.searchTimeout);
    this.active = false;
    this.el.classList.remove('active');
    this.el.querySelector('input').blur();
    setTimeout(() => {
      this.el.querySelector('input').value = '';
      this.results = this.nonDocsResults = this.higlightIndex = null;
    }, 220, this);
  }

  async onKeyUp(e) {
    if (e.keyCode === 27) {
      this.close();
      return;
    }

    // don't search on arrow keypress
    if ([37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
      return;
    }

    if (e.target.value.length < 3) {
      this.results = this.nonDocsResults = this.higlightIndex = null;
      return;
    }

    this.query = e.target.value;
    this.pending++;
    const resp = await fetch(this.urls.autocomplete(this.query));
    const res = await resp.json();
    this.pending--;
    this.results = res.records.page.filter(
      item => item.url.indexOf('\/docs\/') !== -1);
    this.nonDocsResults = res.records.page.filter(
      item => item.url.indexOf('\/docs\/') === -1);
    this.higlightIndex = null;

    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(this.search, 1500);
  }

  // Trigger lightweight search after 1.5sec of innactivity
  // but we'll stick with auto-complete results
  async search() {
    await fetch(this.urls.search(this.query));
    // console.log(result);
  }

  touchStart(e) {
    this.screenHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    this.startY = Math.round(e.touches.item(0).screenY);
  }

  touchMove(e) {
    e.preventDefault();
    this.dragY = Math.max(0, Math.round(
      (e.touches.item(0).screenY - this.startY) / this.screenHeight * 100
    ));
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
    if (this.dragY > 30) {
      this.close();
    }
    this.dragY = null;
    this.startY = null;
    this.dragStyles = {};
  }

  keyNavigation(ev) {
    if (!this.results) return;

    if (ev.keyCode === 38) {
      ev.preventDefault();
      if (this.higlightIndex === 0) {
        this.el.querySelector('input').focus();
        this.higlightIndex = null;
      } else if (this.higlightIndex !== null && this.higlightIndex > 0) {
        this.higlightIndex--;
      }
    } else if (ev.keyCode === 40) {
      ev.preventDefault();
      if (this.higlightIndex === null) {
        this.higlightIndex = 0;
      } else if (
        this.higlightIndex !== null &&
        this.higlightIndex < this.results.length + this.nonDocsResults.length - 1) {
        this.higlightIndex++;

        if (
          this.higlightIndex >= this.results.length &&
          !this.nonDocsResultsActive
        ) {
          this.nonDocsResultsActive = true;
        }
      }
    } else if (ev.keyCode === 13) {
      const link = this.el.querySelector('ul a.active');
      if (link) {
        this.resultClick({ url: link.href, id: link.dataset.id });
      }
    }
  }

  async resultClick(result, event?) {
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
            <li><a href="/docs/installation/cli"><Book/><strong>Installation Guide</strong> | Installation</a></li>
            <li><a href="/docs/building/running"><Book/><strong>Running an App</strong> | Building</a></li>
            <li><a href="/docs/layout/structure"><Book/><strong>App Structure</strong> | Layout</a></li>
            <li><a href="/docs/theming/basics"><Book/><strong>Theming Basics</strong> | Theming</a></li>
          </ul>
        </div>
        <div class="Search__Defaults__Section">
          <h4>Common topics</h4>
          <ul>
            <li><a href="/docs/building/testing"><Book/><strong>Testing</strong> | Building</a></li>
            <li><a href="/docs/building/cross-platform#storage"><Book/><strong>Storage</strong> | Building</a></li>
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
            <li><a href="/docs/enterprise/camera"><Book/><strong>Camera</strong> | Native EE</a></li>
            <li><a href="/docs/enterprise/identity-vault"><Book/><strong>Identity Vault</strong> | Native EE</a></li>
            <li><a href="/docs/native/firebase"><Book/><strong>Firebase</strong> | Native CE</a></li>
            <li><a href="/docs/native/barcode-scanner"><Book/><strong>Barcode Scanner</strong> | Native CE</a></li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    return [
      <div class={`search-box${this.active ? ' active' : ''}`}
           style={this.dragStyles}
           onTouchMove={e => this.results && this.results.length > 5 ?
            null : e.preventDefault()}
           onKeyDown={this.keyNavigation}>
        <input type="text" onKeyUp={this.onKeyUp} placeholder="Search Ionic.."/>

        <Search class={`search-static ${this.active ? ' active' : ''}`}/>

        {this.mobile && !this.isFirefox() ?
          <div class="mobile-close"
               onClick={this.close}
               onTouchStart={this.touchStart}
               onTouchMove={this.touchMove}
               onTouchEnd={this.touchEnd}>
            <Close/>
          </div>
          :
          <ion-icon class={`close ${this.active ? ' active' : ''}`}
                    name="md-close"
                    onClick={this.close}></ion-icon>
        }

        <div class={`slot ${this.results === null ? '' : 'hidden'}`}>
          {this.getDefaultContent()}
        </div>

        {this.results !== null ?
          <div class="SearchResults">
            <ul>
              {this.results.map((result, i) =>
                <li>
                  <a onClick={ev => this.resultClick(result, ev)}
                     href={result.url}
                     title={result.title}
                     data-id={result.id}
                     class={i === this.higlightIndex ? 'active' : ''}>
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
                <a class="SearchMore__link"
                   onClick={() =>
                    this.nonDocsResultsActive = !this.nonDocsResultsActive}>
                  {this.nonDocsResults.length} Results outside docs <ForwardArrow/>
                </a>,
                <ul class="SearchMore__list">
                  {this.nonDocsResults.map((result, i) =>
                    <li>
                      <a onClick={ev => this.resultClick(result, ev)}
                         href={result.url}
                         title={result.title}
                         data-id={result.id}
                         class={i + this.results.length === this.higlightIndex ? 'active' : ''}>
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
        <Search class="SearchBtn__sm"
                onClick={this.active ? null : this.activate}/>

        <div class="SearchBtn__lg" onClick={this.active ? null : this.activate}>
          <Search class="SearchBtn__lg__icon"/>
          <span class="SearchBtn__lg__text">Search docs</span>
          <span class="SearchBtn__lg__key">/</span>
        </div>
      </div>,

      <div class={`backdrop ${this.active ? 'active' : null}`}
           onClick={this.close}></div>
    ];
  }
}
