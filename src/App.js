import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IdeasPage from './IdeasPage'
import { postNewIdea } from './services'
import NewCardInputForm from './NewCardInputForm'

function App() {
  const [cards, setCards] = useState([])
  const [cardsInput, setCardsInput] = useState([])

  function onInputChange(event) {
    setCardsInput([...cardsInput, { [event.target.name]: event.target.value }])
  }

  function onSubmit(event, history) {
    event.preventDefault()

    setCards([
      ...cards,
      {
        title: event.target.title.value,
        comment: event.target.comments.value,
      },
    ])

    const newCard = {
      title: event.target.title.value,
      comment: event.target.comments.value,
    }
    postNewIdea(newCard)

    history.push('/')
    //window.location.assign('/create')
  }

  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={IdeasPage} />
        <Route
          path="/NewCardInputForm"
          render={({ history }) => (
            <NewCardInputForm
              data={cards}
              onSubmit={e => onSubmit(e, history)}
              onChange={onInputChange}
            />
          )}
        />
      </React.Fragment>
    </Router>
  )
}

export default App
