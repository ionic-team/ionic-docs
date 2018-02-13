export default function VersionDropdown({ onSelect, items }) {
  return (
    <ctrl-dropdown
      class="version-dropdown"
      autoClose
      items={items}
      onSelect={onSelect}
      renderer={dropdown => [
        <button class="current" onClick={dropdown.toggle}>v{dropdown.selected}</button>,
        <ul class={{ 'active': dropdown.isOpen }}>
          {dropdown.items.map(item =>
            <li
              class={{ 'active': dropdown.selected === item }}
              onClick={e => {
                e.preventDefault();
                dropdown.select(item);
                dropdown.close();
              }}>
              <a href="#">{item}</a>
            </li>
          )}
        </ul>
      ]}>
    </ctrl-dropdown>
  );
}
