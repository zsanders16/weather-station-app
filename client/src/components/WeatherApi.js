import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import { weatherForecast } from '../actions/weather'

class WeatherApi extends Component {

  loadForecast = () => {
    let { currentLocation, weather, dispatch } = this.props
    dispatch(weatherForecast(currentLocation))
    return ( { weather } )
  }

  render(){
    return (
      <Grid.Row columns={16}>
        <Grid.Column width={16}>
          <Segment>
            {this.loadForecast()}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

// currentLocation.address
// currentLocation.latitude
// currentLocation.longitude

const mapStateToProps = ( state ) => {
  return {
    currentLocation: state.currentLocation,
    weather: state.wether
  }
}

export default connect(mapStateToProps)(WeatherApi)
