import { h } from '@stencil/core';

import { toHypertext } from '../to-hypertext';

export default (props: { [key: string]: any }) => {
  const { page } = props;

  return (
    <article>
      {page.renderTitle !== false ? <h1>{page.title}</h1> : null}
      {page.tableOfContents !== false ? (
        <div class="page-meta">
          <docs-table-of-contents links={page.headings} basepath={page.path}/>
          <internal-ad></internal-ad>
        </div>
      ) : null}
      <section class="markdown-content">{toHypertext(h, page.body)}</section>
      <docs-page-footer page={page} />
    </article>
  );
};
