import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  height: 40px;
  background: white;
  border-bottom: 2px solid #d0d0d0;
  color: black;
`

const Button = styled.nav`
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
      <Button>Ideas</Button>
      <Button>Boards</Button>
      <Button>Settings</Button>
    </Nav>
  )
}
