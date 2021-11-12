import clsx from 'clsx';
import React from 'react';

export default function NavbarIconLink({icon, ...props}) {
  const { alt, href, src, target, width, height } = icon;

  return (
    <a
      {...props}
      className={clsx(props.className, 'icon-link')}
      href={href}
      target={target}
      aria-label={alt}
    >
      <img src={src} width={width} height={height} />
    </a>
  )
}