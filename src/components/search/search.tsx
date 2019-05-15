import 'ionicons';
import { Close } from '../../icons';

import {
  Component,
  Element,
  Prop,
  State
} from '@stencil/core';

@Component({
  tag: 'ionic-search',
  styleUrl: 'search.css',
  shadow: false
})
export class IonicSearch {

  @State() active = false;
  @State() query = '';
  @State() pending = 0;
  @State() results: any[] = null;
  @State() dragStyles: {};
  // @State() pane: HTMLDivElement;
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
    this.activate = this.activate.bind(this);
    this.close = this.close.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    this.urls = this.URLS();
  }

  // componentDidLoad() {
  //   this.pane = this.el.parentElement.querySelector('.mobile-nav__pane');
  // }

  activate() {
    this.active = true;
    this.el.classList.add('active');
    setTimeout(() => {
      this.el.querySelector('input').focus();
    }, 500, this);
  }

  close() {
    this.active = false;
    this.el.classList.remove('active');
    this.el.querySelector('input').blur();
    setTimeout(() => {
      this.el.querySelector('input').value = '';
      this.results = null;
    }, 500, this);
  }

  async onKeyUp(e) {
    if (e.keyCode === 27) {
      this.close();
      return;
    }

    if (e.target.value.length < 3) {
      this.results = null;
      return;
    }

    this.query = e.target.value;
    this.pending++;
    const resp = await fetch(this.urls.autocomplete(this.query));
    const res = await resp.json();
    this.pending--;
    this.results = res.records.page;
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

  render() {
    return [
      <div class={`search-box${this.active ? ' active' : ''}`}
           style={this.dragStyles}
           onTouchMove={e => this.results && this.results.length > 5 ?
            null : e.preventDefault()}>
        <input type="text" onKeyUp={this.onKeyUp} placeholder="Search Ionic.."/>

        <ion-icon class={`search-static ${this.active ? ' active' : ''}`}
                  name="md-search"></ion-icon>

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

        {this.results !== null ? <ul>
          {this.results.map(result =>
            <li>
              <a href={result.url} title={result.title}>
                <strong>{result.title}</strong>
                <span innerHTML={result.highlight.sections}></span>
              </a>
            </li>
          )}
          {this.results.length === 0 ?
            <li><span class="no-results">No results</span></li>
          : null}
        </ul> : null}

        <div class={`slot ${this.results === null ? '' : 'hidden'}`}>
          <slot/>
        </div>

        {this.pending > 0 ? <span class="searching"></span> : null}
      </div>,

      <div class={`SearchBtn ${this.active ? ' active' : ''}`}>
        <ion-icon class="SearchBtn__sm"
                  name="md-search"
                  onClick={this.active ? null : this.activate}></ion-icon>

        <div class="SearchBtn__lg" onClick={this.active ? null : this.activate}>
          <ion-icon class="SearchBtn__lg__icon"
                    name="md-search" ></ion-icon>
          <span class="SearchBtn__lg__text">Search docs</span>
          <span class="SearchBtn__lg__key">/</span>
        </div>
      </div>,

      <div class={`backdrop ${this.active ? 'active' : null}`}
           onClick={this.close}></div>
    ];
  }
}
