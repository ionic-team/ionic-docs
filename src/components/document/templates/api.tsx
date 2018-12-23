export default (props) => {
  const { document, history } = props;
  const headings = [...document.headings];
  const usage = renderUsage(document.usage);
  const properties = renderProperties(document.props);
  const events = renderEvents(document.events);
  const methods = renderMethods(document.methods);
  const customProps = renderCustomProps(document.styles);

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

  if (customProps) {
    headings.push({
      text: 'CSS Custom Properties',
      href: '#css-custom-properties'
    });
  }

  return (
    <main>
      <h1>{ document.title }</h1>
      <docs-table-of-contents links={headings} basepath={history.location.pathname}/>
      <div class="markdown-content" innerHTML={document.body}/>
      { usage }
      { properties }
      { events }
      { methods }
      { customProps }
    </main>
  );
};

const renderUsage = (usage) => {
  const keys = Object.keys(usage);

  if (!keys.length) {
    return null;
  }

  return (
    <section>
      <h2 id="usage">
        <a href="#usage">Usage</a>
      </h2>
      <docs-tabs tabs={keys.join(',')}>
        { keys.map(key => <div slot={key} innerHTML={usage[key]}/>) }
      </docs-tabs>
    </section>
  );
};

const renderProperties = (properties) => {
  if (!properties.length) {
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
          Attribute: prop => prop.attr ? <code>{ prop.attr }</code> : null,
          Type: prop => <code>{ prop.type }</code>
        }}/>
    </section>
  );
};

const renderEvents = (events) => {
  if (!events.length) {
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
              <td><code>{ event.event }</code></td>
              <td>{ event.docs }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const renderMethods = (methods) => {
  if (!methods.length) {
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
          Signature: method => <code>{ method.signature }</code>
        }}/>
    </section>
  );
};

const renderCustomProps = (customProps) => {
  if (!customProps.length) {
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
              <td><code>{ prop.name }</code></td>
              <td>{ prop.docs }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
