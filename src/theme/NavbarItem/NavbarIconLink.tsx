import clsx from 'clsx';
import React from 'react';

export default function NavbarIconLink({icon, ...props}) {
  const { alt, href, src, target, width, height } = icon;

  return (
    <a
      {...props}
      className={clsx(props.className, 'icon-link', 'navbar__item')}
      href={href}
      target={target}
      
    >
      <img src={src} width={width} height={height} alt={alt}/>
    </a>
  )
}