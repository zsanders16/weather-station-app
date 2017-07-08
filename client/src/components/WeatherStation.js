import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import CurrentConditions from './CurrentConditions';
import Compare from './Compare';
import Favorites from './Favorites'
import Address from './Address'
import CurrentLocation from './CurrentLocation'
import CurrentLocationConditions from './CurrentLocationConditions'
import { set_current_location } from '../actions/locations'

class WeatherStation extends Component {

  componentDidMount() {
    this.GetLocation()
  }

  setPosition = (latitude, longitude) => {
    let { dispatch } = this.props
      dispatch(set_current_location(latitude, longitude))
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

  showHome = () => (
    <Grid.Row columns={16}>
      <Grid.Column width={16}>
        <CurrentLocation />
      </Grid.Column>
      <Grid.Column width={16}>
        <CurrentLocationConditions />
      </Grid.Column>
      <Grid.Column width={12} className='ws_area'>
        <CurrentConditions />
      </Grid.Column>
      <Grid.Column width={4} className='ws_area'>
        <Favorites />
      </Grid.Column>
    </Grid.Row>
  )

  changeOnNav = () => {
    let { navbarItem } = this.props
    switch (navbarItem) {
        case 'weather':
          return this.showHome();
        case 'historical':
          return <Compare />
        case 'address':
          return <Address />
        default:
          return <h1>Component has not been made yet</h1>
    }
  }

  render(){
    return(
      <Container>
        <Grid>
          {this.changeOnNav()}
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
