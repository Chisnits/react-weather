import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getWeatherData} from '../redux/weather';

class WeatherContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: []
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
  getCurrentWeather(list){
    const currentTime = new Date();
    const weatherArr = this.state.weather;
    // const getCurrentWeather = weatherArr.filter(function(item){
    //     if (item.dt_txt == currentTime){
    //         return true;
    //     }
    // })
        const getCurrentWeather = weatherArr.sort(function(a,b) {
            
        })
  }
    componentWillReceiveProps(nextProps){
        if (this.props = nextProps){
            this.setState({
                weather: nextProps.data,
            })
        }
    }
    render() {
        console.log('state',this.state.weather);
        console.log(typeof(this.props.data))
        // const WeatherData = this.props.data.map((data,i) => (
        //     <div>
        //         <div>{data.name}</div>
        //     </div>
        // ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        City:
                        <input type="text" value={this.state.city} onChange={this.handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
                {/* <div>{this.props.loading ? <div>Loading ...</div> : WeatherData}</div> */}
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