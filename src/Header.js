import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-bottom: 4px;
  background: blue;
  color: white;
`

export default function Header() {
  return (
    <Nav>
      <button>Ideas</button>
      <button>Boards</button>
      <button>Settings</button>
    </Nav>
  )
}
