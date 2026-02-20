import React from 'react'
import { headerData } from '../util/header'
import { useSmoothScroll } from '../hooks/useSomoothScroll'

const Nav = () => {
  const navLinks = headerData.menus
  const scrollTo = useSmoothScroll()
  return (
    <ul className='navList'>
      {navLinks.map((nav)=>(
        <li key={nav.id}>
          <a 
          onClick={(e)=>{
            e.preventDefault()
            scrollTo(nav.id)
          }}
          href={`${nav.href}`}>
            {nav.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Nav