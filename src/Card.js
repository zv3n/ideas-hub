import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  margin: 2px;
  background: hotpink;
`

const StyledHeadline = styled.p`
  margin: 5px;
`

export default function Card() {
  return (
    <Grid>
      <StyledHeadline>Hallo Uberschrift</StyledHeadline>
      <p>Hallo Text</p>
      <img src="" alt="" />
    </Grid>
  )
}
