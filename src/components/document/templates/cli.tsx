export default (props) => {
  const { document } = props;

  return (
    <main>
      <h1>{ document.title }</h1>
      <docs-table-of-contents links={document.headings} basepath={props.history.location.pathname}/>
      <section class="markdown-content" innerHTML={document.body}/>
    </main>
  );
};
