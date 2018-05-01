import { More } from '../../icons';

const items = [
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
    class="ecosystem-dropdown"
    autoClose
    items={items}
    renderer={dropdown => [
      <a class="ecosystem-dropdown__toggle" onClick={dropdown.toggle}>
        Ecosystem
        <svg viewBox="0 0 33 22"><polygon points="16.5 22 0 0 33 0"></polygon></svg>
      </a>,
      <a class="ecosystem-dropdown__mobile-toggle" onClick={dropdown.toggle}>
        <More/>
      </a>,
      <ul class={{ 'ecosystem-dropdown__panel': true, 'is-open': dropdown.isOpen }}>
        {dropdown.items.map(item => (
          <li class={{ 'ecosystem-dropdown__item': true, [item.className]: true }}>
            <a href={item.url} target="_blank">{item.text}</a>
          </li>
        ))}
      </ul>
    ]}>
  </ctrl-dropdown>
);
