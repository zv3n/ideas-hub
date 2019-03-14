import React from 'react'
import styled from 'styled-components'
const DownSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const Button = styled.button`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  background: #f96f6d;
  color: white;
  bottom: 100px;
  left: 150px;
  text-align: center;
  font-size: 4rem;
  border: none;
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.2);
`

export default function Buttons({ renderNewCard }) {
  return (
    <DownSection>
      <Button onClick={() => renderNewCard()}>+</Button>
    </DownSection>
  )
}
