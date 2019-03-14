import React from 'react'
import styled from 'styled-components'

const Grid = styled.section`
  display: grid;
  height: 200px;
  margin: 10px;
  border-radius: 6px;
  background: #ececec;
`

const StyledHeadline = styled.p`
  margin-left: 10px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 18px;
`

const StyledText = styled.p`
  margin-left: 10px;
  font-family: Helvetica, sans-serif;
  font-size: 12px;
`

export default function Card({ title, subtitle }) {
  return (
    <Grid>
      <StyledHeadline>{title}</StyledHeadline>
      <StyledText>{subtitle}</StyledText>
      <img src="" alt="" />
    </Grid>
  )
}
