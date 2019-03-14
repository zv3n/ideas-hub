import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Header from './Header'
import Buttons from './Button'

const Grid = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 40px 1fr 100px;
  top: 0;
  left: 0;
  width: 100vw;
  background: white;
  height: 100vh;
`

const CardContainer = styled.section`
  display: grid;
  grid-auto-rows: auto;
  overflow-y: scroll;
  margin-top: 1px;
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
        <Header />
        <CardContainer>
          {cards.map((card, index) => (
            <Card title={card.title} subtitle={card.subtitle} key={index} />
          ))}
        </CardContainer>
        <Buttons renderNewCard={renderNewCard} />
      </Grid>
    </React.Fragment>
  )
}

export default App
