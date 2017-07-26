import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeatherData} from './redux/weather';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A city was submitted: ' + this.state.city);
  
    this.props.getWeatherData(this.state.city)
    console.log('here is the city' + this.state.city);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Weather App</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
        <label>
          City:
          <input type="text" value={this.state.city} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <section>

      </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.weatherReducer.weatherData, 
    loading: state.weatherReducer.loading
  }
}
export default connect(mapStateToProps, {getWeatherData})(App);
