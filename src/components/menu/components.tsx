import { components } from '@ionic/docs';

export default () => (
  <nav>
    { components.map(component => {
      const name = component.tag.slice(4);
      return <stencil-route-link url={`/docs/components/${name}`}>{ name }</stencil-route-link>;
    })}
  </nav>
);
