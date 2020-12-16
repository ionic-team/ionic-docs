import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Outbound } from '@site/src/icons';

import './card.css';

interface Props {
  href?: string;
  header?: string;
  icon?: string;
  hoverIcon?: string;
  iconset?: string;
  ionicon?: string;
  img?: string;
  size?: 'md' | 'lg';
}

function DocsCard(props: Props): JSX.Element {
    const isStatic = typeof props.href === 'undefined';
    const isOutbound = typeof props.href !== 'undefined' ? /^http/.test(props.href) : false;
    const header = props.header === 'undefined' ? null : (
      <header className="Card-header">
        {props.header} {isOutbound ? <Outbound/> : null}
      </header>
    );
    const hoverIcon = props.hoverIcon || props.icon;

    const content = [
      props.img && <img src={useBaseUrl(props.img)} className="Card-image"/>,
      <div className="Card-container">
        {props.icon && <img src={useBaseUrl(props.icon)} className="Card-icon Card-icon-default"/>}
        {hoverIcon && <img src={useBaseUrl(hoverIcon)} className="Card-icon Card-icon-hover"/>}
        {props.ionicon && <ion-icon name={props.ionicon} className="Card-ionicon"></ion-icon>}
        { props.iconset && <div className="Card-iconset__container">
          {props.iconset.split(',').map((icon, index) =>
            <img
              src={useBaseUrl(icon)}
              className={`Card-icon ${index === props.activeIndex ? 'Card-icon-active' : ''}`}
              data-index={index}
            />
          )}
        </div>}
        {props.header && header}
        <div className="Card-content">{props.children}</div>
      </div>
    ];

    const className = clsx({
      'Card-with-image': typeof props.img !== 'undefined',
      'Card-without-image': typeof props.img === 'undefined',
      'Card-size-lg': props.size === 'lg',
    });

    if (isStatic) {
      return (
        <docs-card class={className}>
        <div className="Card">
          {content}
        </div>
        </docs-card>
      );
    }

    if (isOutbound) {
      return (
        <docs-card class={className}>
        <a className="Card" href={props.href} target="_blank">
          {content}
        </a>
        </docs-card>
      );
    }

    return (
      <docs-card class={className}>
      <Link to={props.href} className="Card">
        {content}
      </Link>
      </docs-card>
    );
}

export default DocsCard;
