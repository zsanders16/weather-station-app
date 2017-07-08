import React, { Component } from 'react';
import TodaysWeather from './TodaysWeather'

class HomePage extends Component {
  render() {
    return(
      <h1>
        HomePage
        <TodaysWeather/>
      </h1>
    )
  }
}

export default HomePage
