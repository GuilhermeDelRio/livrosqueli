import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  return (
    <div id='navbar'>
      <nav>

        <h2>LivrosQLI</h2>

        <ul>
          <li>
            <Link to='/'>Home</Link>            
          </li>

          <li>
            <Link to='/new-book'>Novo Livro</Link>
          </li>

          <li>
            <Link to='/about'>Sobre</Link>
          </li>

        </ul>

      </nav>
    </div>
  )
}
