import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Buttons from './Button'
import Card from './Card'
import GlobalStyle from './GlobalStyle'
import { getAllIdeas } from './services'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 2px;
  align-self: auto;
  width: 100vw;
  height: 100vh;
  background-color: greenyellow;
`

const CardContainer = styled.section`
  display: flex;
  align-items: flex-start;
  position: relative;
  background: greenyellow;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

function IdeasPage() {
  const [ideas, setIdeas] = useState([])

  useEffect(() => {
    getAllIdeas()
      .then(res => setIdeas(res.data))
      .catch(res => console.log('error'))
  })

  return (
    <React.Fragment>
      <Grid>
        <CardContainer>
          <Card cards={ideas} />
        </CardContainer>
        <Buttons />
      </Grid>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default IdeasPage
