import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Header from './Header'
import Button from './Button'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr 1px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
`

const CardContainer = styled.section`
  overflow-y: scroll;
  margin-top: 1px;
`

function App() {
  return (
    <Grid>
      <Header />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <Button />
    </Grid>
  )
}

export default App
