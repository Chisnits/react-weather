import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeatherData} from '../redux/weather';

class WeatherContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      location: '',
      weather: {},
      temperature: '',
      humidity: '',
      description: '',
      icon: 'http://openweathermap.org/img/w/'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A city was submitted: ' + this.state.location);
    this.props.getWeatherData(this.state.location)
  }
  handleReset() {
    this.setState({
        location: '',
        weather: {},
        temperature: '',
        humidity: '',
        description: '',
        icon: ''
    })
  }
    componentWillReceiveProps(nextProps){
        var iconBaseUrl = 'http://openweathermap.org/img/w/'
        if (nextProps.data !== this.props.data){
            this.setState({
                weather: nextProps.data,
                temperature: Math.round(nextProps.data.main.temp),
                humidity: nextProps.data.main.humidity,
                description: nextProps.data.weather[0].description,
                icon: 'http://openweathermap.org/img/w/' + nextProps.data.weather[0].icon + '.png'
            })
        }
    }
    render() {
        console.log(this.state.weather);
        console.log(this.state.icon)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        City:
                        <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" onClick={this.handleReset}/>
                </form>
                 <div>City: {this.props.loading ? <div>Loading ...</div> : this.state.weather.name}</div> 
                 <div>Current Temperature: {this.state.temperature}</div>
                 <div>Current Humidity: {this.state.humidity}</div>
                 <div>Weather Description: {this.state.description}</div>
                 <img src="{this.state.icon}" />
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


//FIVE-DAY-FORECAST
// componentWillReceiveProps(nextProps){
//         if (this.props = nextProps){
//             this.setState({
//                 weather: nextProps,
//                 list: nextProps.data.list
//             })
//         }
//     }
//     render() {
//         // console.log('state',this.state.weather.list);
//         console.log(new Date())
//         console.log(this.state.list);
//         const timestamp = this.state.list.map((data, i) => {
//             return data.dt_txt;
//         })
//         console.log(timestamp)