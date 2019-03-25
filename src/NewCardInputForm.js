import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2px;
  align-self: auto;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
`

const Form = styled.form`
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
  background-color: #78ff00 !important;

  margin-top: 0em;
  outline: none;
`
const Label = styled.label`
  font-weight: 900;
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

  font-size: 1.5em;
  font-weight: bolder;
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

export default function NewCardInputForm({ data, onSubmit, onChange }) {
  return (
    <Grid>
      <Form onSubmit={onSubmit}>
        <Label>Text Label</Label>
        <Input
          value={data.title}
          onChange={onChange}
          type="text"
          name="title"
          placeholder="Text Input"
          maxLenght="10"
        />
        <Label>Text Label</Label>
        <TextInput
          value={data.comments}
          onChange={onChange}
          name="comments"
          placeholder="Text area comments"
        />

        <Button>ADD</Button>
        <Link to="/">
          <Button>ABORT</Button>
        </Link>
      </Form>
    </Grid>
  )
}
