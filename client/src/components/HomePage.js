import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather'
import { Header, Segment, Dimmer, Loader, Image } from 'semantic-ui-react'
import WeeklyForecast from './WeeklyForecast'
import { connect } from 'react-redux';
import { set_lat_long } from '../actions/locations'
import { weatherForecastWeekly } from '../actions/weatherForecasts'



class HomePage extends Component {
  state = { setLocation: false }

  componentDidMount() {
    this.checkWeatherAvailability()
  }

  checkWeatherAvailability = () => {
    if(this.props.weatherForecasts.weekly == 0)
        this.GetLocation()
    else{
      this.setState({setLocation: true})
    }
  }
  
  setPosition = (latitude, longitude) => {
    let { dispatch } = this.props
    set_lat_long([latitude, longitude], dispatch)
    dispatch(weatherForecastWeekly([latitude, longitude], '', () => this.checkWeatherAvailability()))
  }
  
  GetLocation = () => {
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition( (position) => {
       let latitude = position.coords.latitude;
       let longitude = position.coords.longitude;
       this.setPosition(latitude, longitude)
       })
     }else{
      console.log('Your browser doesnt support  this')
    }
  }

  displayCurrentLocation = () => {

    let { setLocation } = this.state
    if(setLocation){
      return (<TodaysWeather/>)
    }else{
      return (
        <Segment style={{height: '150px'}}>
          <Dimmer active>
            <Loader indeterminate>Getting Current Location Weather</Loader>
          </Dimmer>
        </Segment>
      )
    }
  } 


  render() {
    return(
      <Segment basic>
        <Header as='h2'>HomePage</Header> 
         { this.displayCurrentLocation() }
         <WeeklyForecast /> 
      </Segment>
    )
  }
}


const mapStateToProps= (state) => {
  return { weatherForecasts: state.weatherForecasts }
}

export default connect(mapStateToProps)(HomePage)
