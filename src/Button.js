import React from 'react'
import styled from 'styled-components'
const DownSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100vw;
`
const Button = styled.button`
  height: 50px;
  width: 200px;
  margin: 20px;
  background: blueviolet;
  color: white;
  bottom: 100px;
  left: 150px;
  text-align: center;
  font-size: auto;
  border: none;
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
  outline: none;
  z-index: 9;
`

export default function Buttons({ renderNewCard }) {
  return (
    <DownSection>
      <Button onClick={() => renderNewCard()}>ADD</Button>
    </DownSection>
  )
}
