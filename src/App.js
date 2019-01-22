import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentWillMount() {
    this.setState({ menuEnabled: false })
  }

  render() {
    return (
      <div className="App">
        <div
          onClick={() =>
            this.setState({ menuEnabled: !this.state.menuEnabled })
          }
          className="menu-button"
        />
        <div
          className={
            this.state.menuEnabled ? 'menu-panel enabled' : 'menu-panel'
          }
        >
          <ul className="navigation">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/test">Test</a>
            </li>
          </ul>
        </div>
        <div className="App-content">
          <Router>
            <Switch>
              <Route exact path="/" render={() => this.renderHome()} />
              <Route exact path="/test" render={() => this.renderTest()} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }

  renderHome = () => {
    return (
      <div className="developer-card">
        <h1 className="developer-name">Mattes Wenzel</h1>
        <span className="developer-slogan">
          Front-End Developer and musician
        </span>
      </div>
    )
  }

  renderTest = () => {
    return (
      <div>
        <p>This is a test</p>
      </div>
    )
  }
}

export default App
