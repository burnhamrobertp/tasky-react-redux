import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import TasksList from 'scenes/tasks-list/tasks-list'

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/">
              <TasksList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
