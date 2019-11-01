import { h } from '@stencil/core';
import { toHypertext } from '../to-hypertext';

export default props => {
  const { page } = props;

  return (
    <article>
      {page.renderTitle !== false ? <h1>{page.title}</h1> : null}
      {page.tableOfContents !== false ? (
        <docs-table-of-contents links={page.headings} basepath={page.path} />
      ) : null}
      <section class="markdown-content">{toHypertext(h, page.body)}</section>
      <docs-page-footer page={page} />
    </article>
  );
};
