const items = [
  {
    title: 'Framework',
    subtitle: 'The UI Toolkit for building highly performant apps',
    url: '/docs',
    className: 'framework'
  },
  {
    title: 'Pro',
    subtitle: 'Integrated suite of tools & services for shipping apps',
    url: '/docs/pro',
    className: 'pro'
  },
  {
    title: 'CLI',
    subtitle: 'Ionic command line interface tool',
    url: '/docs/cli',
    className: 'cli',
    small: true
  },
  {
    title: 'Capacitor',
    subtitle: 'Cross-platform Native SDK Container',
    url: 'https://capacitor.ionicframework.com/',
    className: 'capacitor',
    small: true
  },
  {
    title: 'Stencil',
    subtitle: 'Reusable web component compiler',
    url: 'https://stenciljs.com/',
    className: 'stencil',
    small: true
  }
];

export default function FrameworkDropdown() {
  return (
    <ctrl-dropdown
      class="framework-dropdown"
      autoClose
      items={items}
      renderer={dropdown => [
        <a class="current" onClick={dropdown.toggle}>{dropdown.selected.title}</a>,
        <ul class={{ 'active': dropdown.isOpen }}>
          {dropdown.items.map(item =>
            <li class={{
              [item.className]: true,
              'active': dropdown.selected === item,
              'sm': item.small
            }}>
              <a href={item.url} onClick={e => { e.preventDefault(); dropdown.select(item); }}>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </a>
            </li>
          )}
        </ul>
      ]}>
    </ctrl-dropdown>
  );
}
