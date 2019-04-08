import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IdeasPage from './IdeasPage'
import { postNewIdea, updateIdea, deleteIdeaFromServer } from './services'
import NewCardInputForm from './NewCardInputForm'
import CardEditForm from './CardEditForm'

function App() {
  const [cards, setCards] = useState([])

  function onSubmit(newCard, history) {
    postNewIdea(newCard).then(response => {
      setCards([...cards, response])
      history.push('/')
    })
  }
  function deleteCard(id, history) {
    deleteIdeaFromServer(id).then(res => {
      const cardToDelete = cards.find(card => card._id === id)
      const index = cards.indexOf(cardToDelete)
      setCards([...cards.slice(0, index), ...cards.slice(index + 1)])
    })
    setTimeout(() => {
      history.push('/')
    }, 50)
  }
  function onUpdate(cardUpdateData, history) {
    updateIdea(cardUpdateData).then(idea => {
      const cardToChange = cards.find(card => card._id === idea._id)
      const index = cards.indexOf(cardToChange)
      setCards([
        ...cards.slice(0, index),
        cardUpdateData,
        ...cards.slice(index + 1),
      ])
      history.push('/')
    })
    //window.location.assign('/create')
  }
  const [cardToUpdate, setCardToUpdate] = useState('')

  return (
    <Router>
      <React.Fragment>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <IdeasPage history={history} setCardToUpdate={setCardToUpdate} />
          )}
        />
        <Route
          path="/NewCardInputForm"
          render={({ history }) => (
            <NewCardInputForm
              history={history}
              data={cards}
              onSubmit={onSubmit}
            />
          )}
        />
        <Route
          path="/CardEditForm/:id"
          render={({ match, history }) => (
            <CardEditForm
              history={history}
              deleteCard={deleteCard}
              onUpdate={onUpdate}
              match={match}
              cards={cards}
            />
          )}
        />
      </React.Fragment>
    </Router>
  )
}

export default App
