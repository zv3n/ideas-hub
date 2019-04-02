import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DownSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100vw;
`
const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-bottom: 45px;
  background: blueviolet;
  color: white;
  margin-right: 9vw;
  text-align: center;
  font-size: 1.5em;
  font-weight: bolder;
  border: none;
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #2e2e2e, 15px 15px 0 #585858;
  outline: none;
  z-index: 9;
`

export default function Buttons() {
  return (
    <DownSection>
      <Link to="/NewCardInputForm">
        <Button>ADD IDEA</Button>
      </Link>
    </DownSection>
  )
}
