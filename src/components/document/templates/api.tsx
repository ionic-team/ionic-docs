export default (props) => {
  const { document, history } = props;
  const usage = renderUsage(document.usage);
  const customProps = renderCustomProps(document.styles);
  const headings = [...document.headings];

  if (usage) {
    headings.push({
      text: 'Usage',
      href: '#usage'
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
      <h2 id="usage">Usage</h2>
      <docs-tabs tabs={keys.join(',')}>
        { keys.map(key => <div slot={key} innerHTML={usage[key]}/>) }
      </docs-tabs>
    </section>
  );
};

const renderCustomProps = (customProps) => {
  if (!customProps.length) {
    return null;
  }

  return (
    <section>
      <h2 id="css-custom-properties">CSS Custom Properties</h2>
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
