export default (props) => {
  const { page } = props;

  const contributePath = page.path.replace('/docs', '');

  return (
    <article>
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={page.headings} basepath={page.path}/>
      <section class="markdown-content" innerHTML={page.body}/>
      <contributor-list contributors={page.contributors} path={contributePath}/>
    </article>
  );
};
