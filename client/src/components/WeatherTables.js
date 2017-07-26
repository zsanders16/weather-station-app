import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { humidityRecords } from '../actions/weatherRecordings'

import WeatherReadings from './WeatherReadings'

class WeatherTables extends Component {

  componentDidMount = () => {
    let { weatherRecordings: wc, match: { params: { name }}, dispatch } = this.props
    if( name === 'humidity' ){
      // if( !wc.humidities || wc.humidities.records.length <= 0)
        // get the first page of humidity data points
        dispatch(humidityRecords())
    }
  }

  render() {
    return (
      <div>
        <Route exact path='/tables/humidity' component={WeatherReadings} />
      </div>
    )
  }
}

const mapStateToProps = ( redux ) => {
  return { weatherRecordings: redux.weatherRecordings || {} }
}

export default connect(mapStateToProps)(WeatherTables)
