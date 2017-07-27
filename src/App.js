import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherContainer from './containers/WeatherContainer';

class App extends Component {
   

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Weather App</h1>
          </div>
          <WeatherContainer />
      <section>

      </section>
      </div>
    );
  }
}
export default App
