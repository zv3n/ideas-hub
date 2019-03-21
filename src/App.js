import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import GlobalStyle from './GlobalStyle'

import Buttons from './Button'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 2px;
  align-self: auto;
  width: 100vw;
  height: 100vh;
  background-color: blue;
`

const CardContainer = styled.section`
  display: flex;
  align-items: flex-start;
  position: relative;
  background: lightblue;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')
      39 39,
    auto;
`

function App() {
  const [cards, setCards] = useState([{ title: 'test', subtitle: 'copy' }])

  function renderNewCard() {
    setCards([...cards, { title: 'test', subtitle: 'copy' }])
    console.log('test')
  }

  return (
    <React.Fragment>
      <Grid>
        <CardContainer>
          <Card />
        </CardContainer>
        <Buttons renderNewCard={renderNewCard} />
      </Grid>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default App
