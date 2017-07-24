import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Header, Dimmer, Loader } from 'semantic-ui-react'
import CurrentForecast from './CurrentForecast'

class TodaysWeather extends Component {

  displayWeather = () => {
    let { cityView } = this.props
    return(
      <Segment raised>
        <Grid centered >
          <Grid.Row columns={1}>
            <Grid.Column width={16} textAlign='center'>
              <Header as='h1'>Today's Weather in {cityView}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Grid.Column width={16}>
              <CurrentForecast />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  } 

  displayLoader = () => {
    return(
      <Segment style={ {height: "500px"}}>
        <Dimmer active>
          <Loader size='medium'>Loading Current Weather</Loader>
        </Dimmer>
      </Segment>
    )
  }

  render(){
    let { cityView } = this.props
    return(
      <div>
        { cityView.length > 0 ? this.displayWeather() : this.displayLoader() }  
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{ cityView: state.weatherForecasts.cityView }
}


export default connect(mapStateToProps)(TodaysWeather)
