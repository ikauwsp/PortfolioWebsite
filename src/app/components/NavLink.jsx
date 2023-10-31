import React from 'react'
import Link from 'next/link'

export const NavLink = ({href, title}) => {
  return (
    <Link
        href={href}
        className='block py-2 pl-3 pr-4 text-[#ADB7BE]'>
            {title}
    </Link>
  )
}
