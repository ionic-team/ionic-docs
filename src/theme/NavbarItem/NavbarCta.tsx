import clsx from 'clsx';
import React from 'react';

export default function NavbarCta({ text, ...props }) {
  return (
    <a {...props} className={clsx(props.className, 'cta')}>
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="12" height="12">
        <title>Arrow Forward</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M268 112l144 144-144 144M392 256H100"
        />
      </svg>
    </a>
  );
}
