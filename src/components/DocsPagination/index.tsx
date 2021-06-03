import React from 'react';
import Link from '@docusaurus/Link';

import { Page } from '../../definitions';
import { BackArrow, ForwardArrow } from '../../icons';

import styles from './styles.module.css';

export default function DocsPagination({ page }: { page: Page }) {
  const { previousText, previousUrl, nextText, nextUrl } = page;

  const shouldShowPrevious = previousText && previousUrl;
  const shouldShowNext = nextText && nextUrl;

  const links = [];

  if (shouldShowPrevious) {
    links.push(
      <Link
        url={previousUrl}
        key="previous"
        className={styles.previous}
        anchorTitle={previousText}
      >
        <div className={styles.paginationTitle}>Previous</div>
        <div className={styles.pageinationText}>
          <BackArrow />
          <span>{previousText}</span>
        </div>
      </Link>,
    );
  }

  if (shouldShowNext) {
    links.push(
      <Link
        url={nextUrl}
        key="next"
        className={styles.next}
        anchorTitle={nextText}
      >
        <div className={styles.paginationTitle}>Next</div>
        <div className={styles.paginationText}>
          <span>{nextText}</span>
          <ForwardArrow />
        </div>
      </Link>,
    );
  }

  return links;
}
