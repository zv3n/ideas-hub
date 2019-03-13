import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  z-index: 2;
  display: flex;
  height: 40px;
  background: white;
  border-bottom: 2px solid #d0d0d0;
  color: black;
`

const NavItem = styled.nav`
  display: flex;
  height: 40px;
  width: 60px;
  margin: auto;
  font-family: Helvetica, sans-serif;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 14px;
  border-bottom: 4px solid #f96f6d;
`

export default function Header() {
  return (
    <Nav>
      <NavItem>Ideas</NavItem>
      <NavItem>Boards</NavItem>
      <NavItem>Settings</NavItem>
    </Nav>
  )
}
