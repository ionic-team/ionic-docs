import React from 'react';

export default function NavbarIconLink({icon, ...props}) {
  const { alt, href, src, target, width, height } = icon;

  return <a {...props} href={href} target={target} aria-label={alt}>
    <img src={src} width={width} height={height} />
  </a>
}