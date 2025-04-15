'use client'

import React from 'react'
import NavbarLink from './NavbarLink'

const Navbar = () => {
  return (
    <div className='text-white absolute h-full w-full z-10 font-serif'>
      <ul className='absolute flex flex-row justify-end w-full py-5 px-7 gap-4'>
        <NavbarLink href="/" name='Home'/>
        <NavbarLink href="/recipes" name='Recipes'/>
        <NavbarLink href="/restaurants" name='Restaurants'/>
        <NavbarLink href="/contact" name='Contact'/>
      </ul>
    </div>
  )
}

export default Navbar