export default (props) => {
  const { document } = props;

  return (
    <main>
      <h1>{ document.title }</h1>
      <div class="markdown-content" innerHTML={document.body}/>
    </main>
  );
};
