import Link from 'next/link'
import React from 'react'
import { abrilFatface } from '../../lib/fonts'

const NavbarLink = ({href, name}) => {
  return (
    <li className={`hover:scale-105 ease-in-out hover:underline ${abrilFatface.className}`}>
      <Link href={href} prefetch>{name}</Link>
    </li>
  )
}

export default NavbarLink