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

export default function EcosystemDropdown() {
  return (
    <ctrl-dropdown
      class="ecosystem-dropdown"
      autoClose
      items={items}
      renderer={dropdown => [
        <a class="current" onClick={dropdown.toggle}>Ecosystem</a>,
        <ul class={{ 'active': dropdown.isOpen }}>
          {dropdown.items.map(item => (
            <li class={item.className}>
              <a href={item.url} target="_blank">{item.text}</a>
            </li>
          ))}
        </ul>
      ]}>
    </ctrl-dropdown>
  )
}
