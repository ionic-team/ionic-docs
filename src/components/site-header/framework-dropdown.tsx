export default function FrameworkDropdown({ items }) {
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
  )
}
