import OriginalNavbarItem from '@theme-original/NavbarItem';
import React from 'react';
import NavbarIconLink from '@theme/NavbarItem/NavbarIconLink';

const CustomNavbarItemComponents = {
  iconLink: () => NavbarIconLink,
} as const;

export default function NavbarItem({type, ...props}) {
  if (Object.keys(CustomNavbarItemComponents).includes(type)) {
    const Component = CustomNavbarItemComponents[type]();
    return <Component {...props} />
  } else {
    return <OriginalNavbarItem type={type} {...props} />
  }
}