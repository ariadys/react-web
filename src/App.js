import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className="navbar-menu" id="navbarBasicExample">
                <div className="navbar-start">
                  <Link to={'/'} className="navbar-item">Home</Link>
                  <Link to={'/create'} className="navbar-item">Create</Link>
                </div>
              </div>
            </div>
          </nav>
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  CRUD React
                </h1>
                <h2 className="subtitle">
                  Awesome CRUD
                </h2>
              </div>
            </div>
          </section>
          <div className="container">
            <Switch>
                <Route exact path='/create' component={ Create } />
                <Route path='/' component={ Index } />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
