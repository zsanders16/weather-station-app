import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import CurrentConditions from './CurrentConditions';
import Compare from './Compare';
import Favorites from './Favorites'
import Address from './Address'
import CurrentLocation from './CurrentLocation'
import WeeklyForecast from './WeeklyForecast'
import { set_current_location } from '../actions/locations'


class WeatherStation extends Component {

  // componentDidMount() {
  //   //ensure you have your current location
  //   if(!this.props.currentLocation.latitude){
  //     this.getLocation()
  //   }
  //
  //   //ensure you have weekly forecast data
  //   if(this.props.weather){
  //     this.getWeatherData(this.props.currentLocation.latitude, this.props.currentLocation.longitude)
  //   }
  // }
  //
  // setPosition = (latitude, longitude) => {
  //   let { dispatch } = this.props
  //     dispatch(set_current_location(latitude, longitude))
  // }
  //
  // getLocation = () => {
  //   if (navigator.geolocation) {
  //      navigator.geolocation.getCurrentPosition( (position) => {
  //      let latitude = position.coords.latitude;
  //      let longitude = position.coords.longitude;
  //      this.setPosition(latitude, longitude)
  //      })
  //   }else{
  //     console.log('Your browser doesnt support  this')
  //   }
  // }

  showHome = () => (
    <Grid.Row columns={16}>
      <Grid.Column width={16}>
        <CurrentLocation />
      </Grid.Column>
      <Grid.Column width={16}>
        <WeeklyForecast />
      </Grid.Column>
      <Grid.Column width={12} className='ws_area'>
        <CurrentConditions />
      </Grid.Column>
      <Grid.Column width={4} className='ws_area'>
        <Favorites />
      </Grid.Column>
    </Grid.Row>
  )



  render(){
    return(
      <Container>
        <Grid>
          {this.showHome()}
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { navbarItem: state.navbar,
            weather: state.weather,
            currentLocation: state.currentLocation,
            location_weather: state.weather
          };

}

export default connect(mapStateToProps)(WeatherStation);
