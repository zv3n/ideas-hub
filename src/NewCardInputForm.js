import styled from 'styled-components'
import React from 'react'
const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-gap: 2px;
  align-self: auto;
  width: 100vw;
  height: 100vh;
`

const Form = styled.form`
  box-shadow: 8px 8px 0 #000;
  border: 10px solid pink;
  border-image: repeating-linear-gradient(
      45deg,
      #d8d8d8,
      #d8d8d8 1%,
      #424242 1%,
      #424242 8%
    )
    10;
  padding: 1em;
  color: #808080 !important;
  background-color: greenyellow !important;
  box-sizing: inherit;
  margin-top: 0em;
  outline: none;
`
const Label = styled.label`
  font-weight: 900;
  box-sizing: inherit;
`
const Input = styled.input`
  padding: 0.4em;
  margin: 0.25em;
  display: block;
  width: 98.5%;
  line-height: normal;
  outline: none;
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
  box-shadow: 5px 5px 0 #000, 10px 10px 0 #2e2e2e, 15px 15px 0 #585858;
  outline: none;
`

const TextInput = styled.textarea`
  width: 98.5%;
  min-height: 3em;
  padding: 0.4em;
  margin: 0.25em;
  overflow: auto;
  outline: none;
`

export default function NewCardInputForm({ renderNewCard }) {
  return (
    <Grid>
      <Form>
        <Label>Text Label</Label>
        <Input type="text" name="name" placeholder="Text Input" />
        <Label>Text Label</Label>
        <TextInput name="comments" placeholder="Text area comments" />
        <Button onClick={() => renderNewCard()}>ADD</Button>
        <Button onClick={() => renderNewCard()}>ADD</Button>
      </Form>
    </Grid>
  )
}
