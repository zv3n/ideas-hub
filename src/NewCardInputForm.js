import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { imageUpload } from './services'

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
  background: url('https://media.giphy.com/media/BlcWQ9L2VfOFO/giphy.gif')
    no-repeat center center fixed;
  background-size: cover;
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

  margin-top: 0em;
  outline: none;
`
const Label = styled.label`
  font-weight: 900;
  color: #bcbcbc;
  text-shadow: 1px 1px 1px #000;
`
const Input = styled.input`
  padding: 0.4em;
  margin: 0.25em;
  margin-bottom: 40px;
  display: block;
  width: 93%;
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
const PhotoUpload = styled.input`
  width: 72%;
  height: 25px;
  margin-bottom: 30px;
  margin-left: 1%;
  background: #ff02bb;
  color: white;
  bottom: 100px;
  text-align: center;
  font-weight: bolder;
  border: none;
  outline: none;
  box-shadow: 5px 5px 0 #2e2e2e;
`

const TextInput = styled.textarea`
  width: 93%;
  min-height: 10em;
  padding: 0.4em;
  margin: 0.25em;
  margin-bottom: 10px;
  overflow: auto;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
`

export default function NewCardInputForm({ onSubmit, history }) {
  const [input, setInput] = useState({ title: '', comment: '', image: '' })
  function onChangeHandler(event) {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  const [image, setImage] = useState('')

  async function fileHandler(event) {
    const response = await imageUpload(event)
    setImage(response.data.url)
    setInput({ ...input, image: response.data.url })
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    onSubmit(input, history)
  }

  return (
    <Grid>
      <Form onSubmit={onSubmitHandler} autocomplete="off">
        <Label>NAME YOUR IDEA</Label>
        <Input
          value={input.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Name"
          maxLenght="10"
          autocomplete="off"
        />
        <Label>WHAT IS YOUR IDEA ABOUT</Label>
        <TextInput
          value={input.comments}
          onChange={onChangeHandler}
          name="comment"
          placeholder="Description"
          maxLenght="32"
          autocomplete="off"
        />
        <div>
          {image ? (
            <img src={image} alt="" style={{ width: '100%' }} />
          ) : (
            <PhotoUpload type="file" name="file" onChange={fileHandler} />
          )}
        </div>
        <Button>ADD</Button>
        <Link to="/">
          <Button>ABORT</Button>
        </Link>
      </Form>
    </Grid>
  )
}
