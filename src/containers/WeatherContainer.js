import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeatherData} from '../redux/weather';

class WeatherContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: {}
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
  }
  getCurrentWeather(){
      // const oldPeople = inventors.filter(function(inventor){
    //   if (inventor.year >= 1500 && inventor.year <= 1600){
    //     return true; //keep it
    //   } 
    // })
    // console.table(oldPeople);
        const getTime = new Date();
  }
    componentWillReceiveProps(nextProps){
        if (this.props != nextProps){
            this.setState({
                weather: nextProps
            })
        }
    }

    render() {
        console.log('state',this.state.weather);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        City:
                        <input type="text" value={this.state.city} onChange={this.handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    data: state.weatherReducer.getWeather, 
    loading: state.weatherReducer.loading
  }
}
export default connect(mapStateToProps, {getWeatherData})(WeatherContainer);