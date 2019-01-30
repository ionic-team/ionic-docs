export default (props) => {
  const { page } = props;

  return (
    <main class="docs-content-pane">
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={page.headings} basepath={page.path}/>
      <section class="markdown-content" innerHTML={page.body}/>
    </main>
  );
};
