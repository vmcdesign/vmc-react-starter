import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ThemeContext } from '../../store/ThemeStore'
import { Button } from '../Button'

import Logo from '../../assets/images/logo.svg'
import LogoWhite from '../../assets/images/logo_white.svg'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar__brand {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  .navbar__brand-link {
    position: relative;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1;
    top: -3px;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: stretch; /* Centers along Y-axis */
  margin: 0 auto 0 2rem;
  height: 80px;
`

const NavMenu = styled.div`
  display: flex;

  a {
    font-size: 16px;
    line-height: 16px;
    color: ${props => props.theme.navLinkColor};
    transition: all 0.2s ease;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

const ThemeToggler = styled(Button)`
  display: inline-block;
  
  margin: 0 2rem;
  font-weight: 700;
`

export const NavContainer = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <Navbar>
      <Nav>
        <div className="navbar__brand">
          {theme === 'light' ? (
            <Link to="/" className="navbar__brand-link">
              <img src={Logo} alt="Site logo" />
            </Link>  
          ) : (
            <Link to="/" className="navbar__brand-link">
              <img src={LogoWhite} alt="Site logo" />
            </Link>
          )}
        </div>
        <NavMenu role="menu">
          <NavItem role="menuitem" data-title="Home">
            <Link to="/home" className="navbar__link">
              Home
            </Link>
          </NavItem>
          <NavItem role="menuitem" data-title="Sample Page">
            <Link to="/sample-page" className="navbar__link">
              Sample Page
            </Link>
          </NavItem>
        </NavMenu>
      </Nav>

    {theme === 'light' ? (
      <ThemeToggler onClick={() => switchTheme('dark')}>
        <span>Dark Theme</span>
      </ThemeToggler>
    ) : (
      <ThemeToggler onClick={() => switchTheme('light')}>
        <span>Light Theme</span>
      </ThemeToggler>
    )}
    </Navbar>
  )
}