import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
     <div className='navbar'>

      <div className='heading-container'>
        <div className='heading'>
          Find Recipe
        </div>
      </div>


      <div className='nav-container'>
        <NavLink to='/' activeClassName='active' className='home'>
          HOME
        </NavLink>
        <NavLink to='/about' className='about'>
          ABOUT
        </NavLink>
        <NavLink to='/contact' className='contact'>
          CONTACT
        </NavLink>
        <NavLink to='/feedback' className='feedback'>
          FEEDBACK
        </NavLink>

      </div>
    </div>
  )
}

export default Navbar
