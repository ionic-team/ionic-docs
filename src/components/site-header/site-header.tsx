import { Component } from '@stencil/core';
import EcosystemDropdown from './ecosystem-dropdown';

const ecosystemDropdownItems = [
  {
    text: 'Forum',
    url: 'https://forum.ionicframework.com/',
    className: 'forum'
  },
  {
    text: 'Chat',
    url: 'https://ionicworldwide.herokuapp.com/',
    className: 'chat'
  },
  {
    text: 'Blog',
    url: 'https://blog.ionicframework.com/',
    className: 'blog'
  },
  {
    text: 'Twitter',
    url: 'https://twitter.com/Ionicframework',
    className: 'twitter'
  },
  {
    text: 'Stack',
    url: 'https://stackoverflow.com/questions/tagged/ionic-framework',
    className: 'stack-overflow'
  },
  {
    text: 'Swag',
    url: 'https://shop.ionicframework.com/',
    className: 'swag'
  }
];

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  render() {
    return [
      <nav>
        <a href='/docs' id="site-logo"></a>
        <dropdown-framework></dropdown-framework>
        <site-search></site-search>
        <EcosystemDropdown items={ecosystemDropdownItems}/>
        <a href="https://github.com/ionic-team/ionic"
           target="_blank"
           class="github">GitHub</a>
      </nav>
    ]
  }
}
