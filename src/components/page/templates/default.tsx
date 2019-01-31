export default (props) => {
  const { page } = props;
  const demoPreview = renderDemoPreview(page);

  return (
    <main class="docs-guide">
      <div class="docs-content-pane">
        <h1>{ page.title }</h1>
        <docs-table-of-contents links={page.headings} basepath={page.path}/>
        <section class="markdown-content" innerHTML={page.body}/>
      </div>
      { demoPreview }
    </main>
  );
};

const renderDemoPreview = (page: any) => {
  console.log(page);
  if (!page.previewUrl) {
    return null;
  }
  return (
    <div class="docs-preview-pane">
      <docs-preview url={ page.previewUrl }></docs-preview>
    </div>
  );
};
