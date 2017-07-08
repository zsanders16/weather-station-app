import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather'
import { Header, Segment } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return(
      <Segment basic>
        <Header as='h2'>HomePage</Header>
        <TodaysWeather/>
      </Segment>
    )
  }
}

export default HomePage
