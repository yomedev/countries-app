import React, { useContext } from 'react'
import { Container, Navbar as NavbarBs } from 'react-bootstrap'
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <NavbarBs className="shadow-sm mb-4">
      <Container fluid="sm">
        <Link to={`/countries-app/`}>
          <NavbarBs.Brand>Where in the world?</NavbarBs.Brand>
        </Link>
        <button type='button' className='theme-toggle scaled' onClick={() => toggleTheme()}>
          {theme ? <BsMoonFill size={14} /> : <BsMoon size={14} />}
          <span>Dark Mode</span>
        </button>
      </Container>
    </NavbarBs>
  )
}

export default Navbar






