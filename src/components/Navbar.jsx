import React from 'react'
import { navLinks } from '../constants'
import { Logo, SearchIcon, CartIcon } from '../assets/images'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Apple logo"/>
        <ul>
           
            {navLinks.map(({ label }) => (
                <li key={label}>
                    <a href={label}>{label}</a>
                </li>
            ))}
        </ul>

        <div className="flex-center gap-3">
            <button>
                <img src={SearchIcon} alt="Search"/>
            </button>
             <button>
                <img src={CartIcon} alt="cart"/>
            </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
