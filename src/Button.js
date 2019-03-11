import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  background: yellow;
  color: white;
  position: relative;
  bottom: 50px;
  left: 50%;
  font-size: 4rem;
`

export default function Header() {
  return <Button>+</Button>
}
