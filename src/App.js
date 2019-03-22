import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IdeasPage from './IdeasPage'
import NewCardInputForm from './NewCardInputForm'

const defaultCards = [
  {
    title: '',
    comments: '',
  },
]

function App() {
  const [cards, setCards] = useState(defaultCards)
  const [cardsInput, setCardsInput] = useState([])

  function onInputChange(event) {
    setCardsInput([...cardsInput, { [event.target.name]: event.target.value }])
  }

  function onSubmit(event) {
    event.preventDefault()
    setCards([...cards, { [event.target.name]: event.target.value }])
    console.log(cards)
  }

  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" render={() => <IdeasPage cards={cards} />} />
        <Route
          path="/NewCardInputForm"
          render={() => (
            <NewCardInputForm
              data={cards}
              onSubmit={onSubmit}
              onChange={onInputChange}
            />
          )}
        />
      </React.Fragment>
    </Router>
  )
}

export default App
