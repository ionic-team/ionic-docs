import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  header?: string;
  icon?: string;
  hoverIcon?: string;
  iconset?: string;
  img?: string;
}

function DocsCard(props: Props): ReactNode {
  const isStatic = typeof props.href === 'undefined';
  const header = props.header === 'undefined' ? null : <header className={styles.header}>{props.header}</header>;
  const hoverIcon = props.hoverIcon || props.icon;

  const content = (
    <>
      {props.img && <img src={useBaseUrl(props.img)} className={styles.image} />}
      <div className={styles.container}>
        {(props.icon || hoverIcon) && (
          <div className={styles.iconRow}>
            {props.icon && <img src={useBaseUrl(props.icon)} className={clsx(styles.icon, styles.iconDefault)} />}
            {hoverIcon && <img src={useBaseUrl(hoverIcon)} className={clsx(styles.icon, styles.iconHover)} />}
          </div>
        )}
        {props.iconset && (
          <div className={styles.iconRow}>
            {props.iconset.split(',').map((icon, index, array) => (
              <React.Fragment key={index}>
                <img src={useBaseUrl(icon)} className={clsx(styles.icon, styles.iconDefault)} />
                {index < array.length - 1 && (
                  <div className={styles.plusIcon}>
                    <span>+</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {props.header && header}
        <div className={styles.content}>{props.children}</div>
      </div>
    </>
  );

  const className = clsx(props.className, typeof props.img !== 'undefined' ? styles.withImage : styles.withoutImage);

  if (isStatic) {
    return (
      <docs-card class={className}>
        <div className={styles.card}>{content}</div>
      </docs-card>
    );
  }

  return (
    <docs-card class={className}>
      <Link to={props.href} className={styles.card}>
        {content}
      </Link>
    </docs-card>
  );
}

export default DocsCard;
