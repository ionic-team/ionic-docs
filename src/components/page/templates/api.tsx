import { h } from '@stencil/core';

import { useLocalStorage } from '../../../local-storage';
import { toHypertext } from '../to-hypertext';
const [getFramework] = useLocalStorage('ionic-docs:framework');

export default (props: { [key: string]: any }) => {
  const { page } = props;
  const headings = [...page.headings];
  const encapsulation = renderEncapsulation(page.encapsulation);
  const usage = renderUsage(page.usage, page.path);
  const properties = renderProperties(page.props);
  const events = renderEvents(page.events);
  const methods = renderMethods(page.methods);
  const parts = renderParts(page.parts);
  const customProps = renderCustomProps(page.styles);
  const slots = renderSlots(page.slots);

  if (usage) {
    headings.push({
      text: 'Usage',
      href: '#usage'
    });
  }

  if (properties) {
    headings.push({
      text: 'Properties',
      href: '#properties'
    });
  }

  if (events) {
    headings.push({
      text: 'Events',
      href: '#events'
    });
  }

  if (methods) {
    headings.push({
      text: 'Methods',
      href: '#methods'
    });
  }

  if (parts) {
    headings.push({
      text: 'CSS Shadow Parts',
      href: '#css-shadow-parts'
    });
  }

  if (customProps) {
    headings.push({
      text: 'CSS Custom Properties',
      href: '#css-custom-properties'
    });
  }

  if (slots) {
    headings.push({
      text: 'Slots',
      href: '#slots'
    });
  }

  return (
    <article>
      {encapsulation}
      <h1>
        {page.title}
      </h1>
      <div class="page-meta">
        <docs-table-of-contents links={headings} basepath={page.path}/>
        <internal-ad></internal-ad>
      </div>
      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>
      {usage}
      {properties}
      {events}
      {methods}
      {parts}
      {customProps}
      {slots}
    </article>
  );
};

const renderEncapsulation = (encapsulation = {}) => {
  if (encapsulation === 'none') {
    return;
  }

  const path = `/docs/reference/glossary#${encapsulation}`;

  return (
    <a href={path} class="page-heading-encapsulation">{encapsulation}</a>
  );
};

const renderUsage = (usage: { [key: string]: string } = {}, path: string) => {
  const keys = Object.keys(usage);
  const frameworkPref = getFramework();
  const framework = frameworkPref !== null ? frameworkPref.toLowerCase() : null;

  if (keys.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="usage">
        <a href="#usage">Usage</a>
      </h2>
      <docs-tabs key={path} listen-for="ionic-docs:framework">
          {keys.map(key =>
            <docs-tab
              tab={key}
              selected={framework === key.toLowerCase()}
            >
              {toHypertext(h, usage[key])}
            </docs-tab>
          )}
      </docs-tabs>
    </section>
  );
};

const renderProperties = (properties = []) => {
  if (properties.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="properties">
        <a href="#properties">Properties</a>
      </h2>
      <docs-reference
        data={properties}
        keys={{
          Head: prop => prop.name,
          Description: prop => <div innerHTML={prop.docs}/>,
          Attribute: prop => prop.attr ? <code>{prop.attr}</code> : null,
          Type: prop => <code>{prop.type}</code>,
          Default: prop => prop.default ? <code>{prop.default}</code> : null
        }}
      />
    </section>
  );
};

const renderEvents = (events: any[] = []) => {
  if (events.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="events">
        <a href="#events">Events</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr>
              <td><code>{event.event}</code></td>
              <td>{event.docs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const renderMethods = (methods: any[] = []) => {
  if (methods.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="methods">
        <a href="#methods">Methods</a>
      </h2>
      <docs-reference
        data={methods}
        keys={{
          Head: method => method.name,
          Description: method => <div innerHTML={method.docs}/>,
          Signature: method => <code>{method.signature}</code>
        }}
      />
    </section>
  );
};

const renderParts = (parts: any[] = []) => {
  if (parts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="css-shadow-parts">
        <a href="#css-shadow-parts">CSS Shadow Parts</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {parts.map(prop => (
            <tr>
              <td><code>{prop.name}</code></td>
              <td>{prop.docs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const renderCustomProps = (customProps: any[] = []) => {
  if (customProps.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="css-custom-properties">
        <a href="#css-custom-properties">CSS Custom Properties</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {customProps.map(prop => (
            <tr>
              <td><code>{prop.name}</code></td>
              <td>{prop.docs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const renderSlots = (slots: any[] = []) => {
  if (slots.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="slots">
        <a href="#slots">Slots</a>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {slots.map(slot => (
            <tr>
              <td>{slot.name && <code>"{slot.name}"</code>}</td>
              <td>{slot.docs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
