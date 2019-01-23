import components from '../data/api-reference.json';

const listStyle = {
  fontFamily: 'var(--code-font-family',
  fontSize: '13px'
};

export default (props) => {
  const { page } = props;

  return (
    <main class="docs-content-pane">
      <h1>{page.title}</h1>
      <section class="markdown-content" innerHTML={page.body}/>
      <hr/>
      <ul style={listStyle}>
        {components.map(([name, href]) => (
          <li key={name}>
            <stencil-route-link url={href}>{name}</stencil-route-link>
          </li>
        ))}
      </ul>
    </main>
  );
};
