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
  background-color: #78ff00;
  border: 10px solid pink;
  border-image: repeating-linear-gradient(
      45deg,
      #d8d8d8,
      #d8d8d8 1%,
      #ffffff 1%,
      #424242 8%
    )
    10;
`

const CardContainer = styled.section`
  width: 100%;
  height: 100%;
`

function IdeasPage() {
  const [ideas, setIdeas] = useState([])
  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    getAllIdeas()
      .then(res => {
        setIdeas(res.data)
        setInitialized(true)
      })
      .catch(res => console.log('error'))
  }, [])

  function CardComponent() {
    if (initialized === true) {
      return <Card cards={ideas} />
    } else {
      return <div>LOADING</div>
    }
  }

  return (
    <React.Fragment>
      <Grid>
        <CardContainer />
        <CardComponent />
        <Buttons />
      </Grid>
      <GlobalStyle />
    </React.Fragment>
  )
}

export default IdeasPage
