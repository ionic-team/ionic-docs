// import 'ionicons';
import { Close } from './arrow.svg';

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
    this.close = this.close.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);

    this.urls = this.URLS();
  }

  close() {
    this.active = false;
    this.query = '';
    this.selectedIndex = -1;
    this.el.querySelector('input').value = '';
    this.el.classList.remove('active');
    this.el.querySelector('input').blur();
    setTimeout(() => {
      this.results = null;
    }, 500, this);
  }

  async onKeyDown(e) {
    if (e.keyCode === 27) {
      this.close();
      return;
    }

    // if (e.keyCode === 38 && this.selectedIndex > -1) {
    //   this.selectedIndex--;
    //   e.preventDefault();
    //   return;
    // }

    // if (e.keyCode === 40 && this.selectedIndex < this.results.length) {
    //   this.selectedIndex++;
    //   e.preventDefault();
    //   return;
    // }

    if (e.keyCode === 13) {
      const selector = `li.result:nth-child(${this.selectedIndex + 1}) a`;
      const link = this.el.querySelector(selector);
      console.log(link);
      if (link) {
        link.click();
      }
      return;
    }

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
    console.log(this.results);
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

  printResults(group) {
    return group.map((result, i) =>
      <li class="result">
        <a href={result.url}
           title={result.title}
           class={this.selectedIndex === i ? 'selected' : ''}
          //  onMouseOver={() => { this.selectedIndex = i; }}
           innerHTML={result.title}></a>
      </li>
    );
  }

  render() {
    return [
      <div class={`search-box ${this.query.length > 3 ? 'active' : ''}`}
           style={this.dragStyles}
           onTouchMove={e => this.results && this.results.length > 5 ?
            null : e.preventDefault()}>
        <input type="text" onKeyUp={this.onKeyDown} placeholder="Search Ionic.."/>

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
          <ion-icon class={`close ${this.query.length ? ' active' : ''}`}
                    name="close-circle"
                    onClick={this.close}></ion-icon>
        }

        {this.results !== null ? <ul>
          {this.results.beta ?
            <li class="title">beta.ionicframework.com</li>
           : null }
          {this.printResults(this.results.beta)}

          {this.results.main ?
            <li class="title">ionicframework.com</li>
           : null }
          {this.printResults(this.results.main)}

          {this.results.length === 0 ?
            <li><span class="no-results">No results</span></li>
          : null}
        </ul> : null}

        {this.pending > 0 ? <span class="searching"></span> : null}
      </div>
    ];
  }
}
