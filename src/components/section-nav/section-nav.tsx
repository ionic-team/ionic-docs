import { Component } from '@stencil/core';

@Component({
  tag: 'docs-section-nav',
  styleUrl: 'section-nav.css'
})
export class DocsSectionNav {
  render() {
    return (
      <stencil-route-switch>
        <stencil-route url="/docs/appflow" routeRender={Appflow}/>
        <stencil-route url="/docs" routeRender={Framework}/>
      </stencil-route-switch>
    );
  }
}

const Dropdown = props => (
  <docs-dropdown label={props.label}>
    <stencil-route-link url="/docs/" urlMatch={/^\/docs\/(?!(appflow)).*$/}>Framework</stencil-route-link>
    <stencil-route-link url="/docs/appflow">Appflow</stencil-route-link>
  </docs-dropdown>
);

const Appflow = () => (
  <nav class="SectionNav">
    <Dropdown label="Appflow"/>
  </nav>
);

const Framework = () => (
  <nav class="SectionNav">
    <Dropdown label="Framework"/>
    <stencil-route-link url="/docs/" urlMatch={[/^\/docs\/(?!(api|components|cli|native)).*$/]}>Guide</stencil-route-link>
    <stencil-route-link url="/docs/components" urlMatch={['/docs/api', '/docs/components']}>Components</stencil-route-link>
    <stencil-route-link url="/docs/cli">CLI</stencil-route-link>
    <stencil-route-link url="/docs/native">Native</stencil-route-link>
  </nav>
);
