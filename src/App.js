import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IdeasPage from './IdeasPage'
import NewCardInputForm from './NewCardInputForm'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={IdeasPage} />
        <Route path="/NewCardInputForm" component={NewCardInputForm} />
      </React.Fragment>
    </Router>
  )
}

export default App
