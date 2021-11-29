import OriginalNavbarItem from '@theme-original/NavbarItem';
import React from 'react';
import NavbarIconLink from '@theme/NavbarItem/NavbarIconLink';
import NavbarSeparator from '@theme/NavbarItem/NavbarSeparator';

const CustomNavbarItemComponents = {
  iconLink: () => NavbarIconLink,
  separator: () => NavbarSeparator,
} as const;

export default function NavbarItem({ type, ...props }) {
  if (Object.keys(CustomNavbarItemComponents).includes(type)) {
    const Component = CustomNavbarItemComponents[type]();
    return <Component {...props} />;
  } else {
    return <OriginalNavbarItem type={type} {...props} />;
  }
}
