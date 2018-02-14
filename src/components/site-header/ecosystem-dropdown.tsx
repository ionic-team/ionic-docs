export default function EcosystemDropdown({ items }) {
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
