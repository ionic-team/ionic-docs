import { components } from '@ionic/docs/core.json';

export default () => (
  <nav>
    { components.map(component => {
      const name = component.tag.slice(4);
      return <stencil-route-link url={`/docs/api/${name}`}>{ name }</stencil-route-link>;
    })}
  </nav>
);
