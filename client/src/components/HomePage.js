import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather'
import { Header, Segment } from 'semantic-ui-react'
import WeeklyForecast from './WeeklyForecast'
import { set_lat_long } from '../actions/locations'
import { weatherForecastWeekly } from '../actions/weatherForecasts'
import { connect } from 'react-redux'
import { setCityView } from '../actions/weatherForecasts'


class HomePage extends Component {

  componentDidMount() {
    this.determineIfLocation()
  }

  determineIfLocation = () => {
    let { currentLocation } = this.props
    if(!currentLocation.latitude){
      this.getLocation()
    }
  }
  
  getLocation = () => {
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

  setPosition = (latitude, longitude) => {
    let { dispatch, weatherForecasts } = this.props
    dispatch(set_lat_long([latitude, longitude], dispatch))
    if(!weatherForecasts.weekly[0]){
      dispatch(weatherForecastWeekly([latitude, longitude], 'Current Location', this.setCityView ))
    }
  }

  setCityView = () => {
    let { dispatch } = this.props
    setCityView( 'Current Location', dispatch)
  }

  render() {
    return(
      <Segment basic>
        <Header as='h2'>HomePage</Header>
        <TodaysWeather/>
        <WeeklyForecast />
      </Segment>
    )
  }
}


const mapStateToProps = (state) => {
  return { weatherForecasts: state.weatherForecasts, currentLocation: state.currentLocation }
}

export default connect(mapStateToProps)(HomePage)
