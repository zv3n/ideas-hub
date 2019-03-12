import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background: #f96f6d;
  color: white;
  position: relative;
  bottom: 100px;
  left: 150px;
  text-align: center;
  font-size: 4rem;
  border: none;
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
`

export default function Header() {
  return <Button>+</Button>
}
