import { h } from '@stencil/core';

export default (props) => {
  const { page, contentChanged } = props;

  return (
    <article>
      <h1>{ page.title }</h1>
      <docs-table-of-contents links={page.headings} basepath={page.path}/>
      <section class="markdown-content" ref={elm => {
        if (contentChanged) {
          elm.innerHTML = page.body;
        }
      }}/>
      <docs-page-footer page={page}/>
    </article>
  );
};
