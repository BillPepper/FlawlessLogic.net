import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

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
                <Link to="/programming">Programming</Link>
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
              <Route exact path="/" render={() => this.renderHome()} />
              <Route
                exact
                path="/(about|programming|social)"
                render={() => this.renderTest()}
              />
              <Route exact path="/music" render={() => this.renderMusic()} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  renderHome = () => {
    return (
      <div className="developer-card">
        <h1 className="developer-name">Mattes Wenzel</h1>
        <span className="developer-slogan">
          Front-End Developer and Musician
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

  renderMusic = () => {
    return (
      <div className="content-container">
        <iframe
          title="soundcloud-widget"
          min-width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/307362001&color=%23626977&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </div>
    )
  }
}

export default App
