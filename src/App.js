import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IdeasPage from './IdeasPage'
import NewCardInputForm from './NewCardInputForm'

const defaultCards = {
  title: '',
  comments: '',
}

function App() {
  const [cards, setCards] = useState(defaultCards)

  function onInputChange(event) {
    setCards({
      ...cards,
      [event.target.name]: event.target.value,
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    setCards({
      ...cards,
      [event.target.name]: event.target.value,
    })
    console.log(cards)
  }

  const { title, comments } = cards

  return (
    <Router>
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => <IdeasPage title={title} comments={comments} />}
        />
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
