import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import About from './components/About.js'
import Home from './components/Home.js'
import Music from './components/Music.js'
import Social from './components/Social.js'

class App extends Component {
  componentWillMount() {
    this.setState({ menuEnabled: false })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div
            onClick={() =>
              this.setState({ menuEnabled: !this.state.menuEnabled })
            }
            className={
              this.state.menuEnabled
                ? 'menu-button menu-button-enabled'
                : 'menu-button'
            }
          >
            <div className="button-line" />
          </div>
          <div
            className={
              this.state.menuEnabled ? 'menu-panel menu-enabled' : 'menu-panel'
            }
          >
            <ul className="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/coding">Coding</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/social">Social</Link>
              </li>
            </ul>
          </div>
          <div
            onClick={() => this.setState({ menuEnabled: false })}
            className="App-content"
          >
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/(coding)" render={() => this.renderTest()} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/music" render={() => <Music />} />
              <Route exact path="/social" render={() => <Social />} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  renderTest() {
    return (
      <div>
        <p>This is a test</p>
      </div>
    )
  }
}

export default App
