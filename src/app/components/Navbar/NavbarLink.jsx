import Link from 'next/link'
import React from 'react'
import { abrilFatface } from '../../lib/fonts'
import { usePathname } from 'next/navigation';

const NavbarLink = ({href, name}) => {
  const pathname = usePathname();
  const isActive = href !== '/' && pathname.startsWith(href);

  return (
    <li
      className={`hover:scale-105 ease-in-out hover:underline ${
        isActive ? 'underline font-bold' : ''
      } ${abrilFatface.className}`}
    >      <Link href={href} prefetch>{name}</Link>
    </li>
  )
}

export default NavbarLink