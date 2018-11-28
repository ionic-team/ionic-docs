import { Close, More } from '../../icons';

const items = [
  {
    text: 'GitHub',
    url: 'https://github.com/ionic-team/ionic',
    className: 'github'
  },
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

export default () => (
  <ctrl-dropdown
    class="community-dropdown"
    autoClose
    items={items}
    renderer={dropdown => [
      <a class="community-dropdown__toggle" onClick={dropdown.toggle}>
        Community
        <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
      </a>,
      <a class="community-dropdown__mobile-toggle" onClick={dropdown.toggle}>
        { dropdown.isOpen ? <Close/> : <More/> }
      </a>,
      <div class={{ 'community-dropdown__panel': true, 'is-open': dropdown.isOpen }}>
        <div class="community-dropdown__title">Community</div>
        <ul>
          {dropdown.items.map(item => (
            <li class={{ 'community-dropdown__item': true, [item.className]: true }}>
              <a href={item.url} target="_blank">{item.text}</a>
            </li>
          ))}
        </ul>
        <stencil-route-link url="/docs/" class="community-dropdown__home" onClick={dropdown.close}>
          <svg viewBox="0 0 16 24"><path d="M3 2l10 10L3 22" stroke-width="3" fill="none" fill-rule="evenodd"></path></svg>
          Home
        </stencil-route-link>
      </div>
    ]}>
  </ctrl-dropdown>
);
