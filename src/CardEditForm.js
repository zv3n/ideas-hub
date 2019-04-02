import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getIdea } from './services'

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
  background: url('https://media.giphy.com/media/3o6fIREk4oFn9yb6ZW/source.gif')
    no-repeat center center fixed;
  background-size: cover;
  border-image: repeating-linear-gradient(
      45deg,
      #d8d8d8,
      #d8d8d8 1%,
      #425242 1%,
      #6b23ad 4%
    )
    10;
  padding: 1em;
  color: #808080 !important;

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

export default function CardEditForm({ onUpdate, history, match, deleteCard }) {
  const [cardToUpdate, setCardToUpdate] = useState({ title: '', comment: '' })
  useEffect(() => {
    getIdea(match.params.id)
      .then(res => {
        setCardToUpdate(res.data)
        console.log(res.data)
        setInput({
          title: res.data.title,
          comment: res.data.comment,
          ...res.data,
        })
      })
      .catch(res => console.log('error'))
  }, [])

  const initialInput = { title: '', comment: '' }
  const [input, setInput] = useState(initialInput)
  function onChangeHandler(event) {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    onUpdate(input, history)
  }

  return (
    <Grid>
      <Form onSubmit={onSubmitHandler}>
        <Label>NAME YOUR IDEA</Label>
        <Input
          value={input.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Name"
          maxLenght="10"
        />
        <Label>WHAT IS YOUR IDEA ABOUT</Label>
        <TextInput
          value={input.comment}
          onChange={onChangeHandler}
          name="comment"
          placeholder="Description"
        />

        <Button>EDIT</Button>
        <Button onClick={() => deleteCard(match.params.id, history)}>
          DELETE
        </Button>
        <Link to="/">
          <Button>ABORT</Button>
        </Link>
      </Form>
    </Grid>
  )
}
