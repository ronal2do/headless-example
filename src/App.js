import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Headless from './Headless'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Headless>
          {({ click, otherClick, value }) => (
            <Fragment>
              <button onClick={click}>Reflip</button>
              <p>{value}</p>
                <div>
                  <img src={logo} alt='Tails' />
                </div>
            </Fragment>
            )}
        </Headless>
      </div>
    );
  }
}

export default App;
