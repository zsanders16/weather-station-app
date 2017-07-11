import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Dimmer, Loader, Header } from 'semantic-ui-react'
import DayForecast from './DayForecast'

class TodaysWeather extends Component {




  render() {
    return(
      <Segment raised>
        <Header as='h1'>Today's Weather</Header>
        <Grid >
          <Grid.Row>
            <Grid.Column width={8}>
              <DayForecast data={this.props.weather[0]} />
            </Grid.Column>
            <Grid.Column width={8}>
              <DayForecast data={this.props.weather[1]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}
const mapStateToProps = (state) => {
  return { weather: state.weather }
}


export default connect(mapStateToProps)(TodaysWeather)
