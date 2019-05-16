import { h } from '@stencil/core';
import { toHypertext } from '../to-hypertext';
import components from '../data/api-reference.json';


const listStyle = {
  fontFamily: 'var(--code-font-family',
  fontSize: '13px'
};

export default (props) => {
  return (
    <article>
      <h1>{props.page.title}</h1>
      <section class="markdown-content">
        {toHypertext(h, props.page.body)}
      </section>
      <hr/>
      <ul style={listStyle}>
        {components.map(([name, href]) => (
          <li key={name}>
            <stencil-route-link url={href}>{name}</stencil-route-link>
          </li>
        ))}
      </ul>
    </article>
  );
};
