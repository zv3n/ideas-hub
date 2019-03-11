import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Header from './Header'
import Button from './Button'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <Grid>
      <Header />
      <Card />
      <Button />
    </Grid>
  )
}

export default App
