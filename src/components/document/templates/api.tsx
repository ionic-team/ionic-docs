export default (props) => {
  const { document, history } = props;
  const usage = renderUsage(document.usage);
  const headings = [...document.headings];

  if (usage) {
    headings.push({
      text: 'Usage',
      href: '#usage'
    });
  }

  return (
    <main>
      <h1>{ document.title }</h1>
      <docs-table-of-contents links={headings} basepath={history.location.pathname}/>
      <div class="markdown-content" innerHTML={document.body}/>
      { usage }
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
